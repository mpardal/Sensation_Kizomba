import { useQuery } from '@tanstack/react-query';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import type { UseQueryOptions } from '@tanstack/react-query';
import type { QuerySnapshot } from 'firebase/firestore';
import { database } from '@/config/firebase-config';
import type { AppEvent } from '@/types/app-event';
import { serializeQuerySnapshot } from '@/utils/serialize-snapshot';
import { getDownloadUrlsForEvent } from '@/utils/get-download-urls-for-event';

const today = new Date(new Date().setHours(0, 0, 0, 0));

export function getEventsQueryKey(city?: string) {
  return ['events', city];
}

export async function fetchEvents(city?: string): Promise<AppEvent[]> {
  const queryEvents = city
    ? query(
        collection(database, 'events'),
        //Tri la recherche par la ville
        where('city', '==', city),
        orderBy('date.from', 'asc'),
      )
    : query(collection(database, 'events'), orderBy('date.from', 'asc')); //Exécute la fonction même s'il n'y a pas de tri par ville

  const eventsQuerySnapshot = (await getDocs(
    queryEvents,
  )) as QuerySnapshot<AppEvent>;

  return Promise.all(
    serializeQuerySnapshot(eventsQuerySnapshot)
      .filter((evt) => {
        const from = new Date(evt.date.from);
        const to = evt.date.to ? new Date(evt.date.to) : undefined;

        return from >= today || (to && to >= today);
      })
      .map(async (event) => {
        return {
          ...event,
          images: await getDownloadUrlsForEvent(event),
        };
      }),
  );
}

//Fonction permettant de récupérer plusieurs documents d'une collection Firebase
export function useEvents(
  //city est nulle ou string
  city?: string,
  //?
  options?: UseQueryOptions<AppEvent[]>,
) {
  return useQuery({
    queryKey: getEventsQueryKey(city),
    queryFn: () => fetchEvents(city),
    ...options,
  });
}
