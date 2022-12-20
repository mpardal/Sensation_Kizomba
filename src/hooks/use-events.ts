import { useQuery } from '@tanstack/react-query';
import { collection, getDocs, query, where } from 'firebase/firestore';
import type { UseQueryOptions } from '@tanstack/react-query';
import type { QuerySnapshot } from 'firebase/firestore';
import { database } from '@/config/firebase-config';
import type { AppEvent } from '@/types/app-event';
import { serializeQuerySnapshot } from '@/utils/serialize-snapshot';
import { getDownloadUrlsForEvent } from '@/utils/get-download-urls-for-event';

export function getEventsQueryKey(city?: string) {
  return ['events', city];
}

export async function fetchEvents(city?: string): Promise<AppEvent[]> {
  const queryEvents = city
    ? query(collection(database, 'events'), where('city', '==', city)) //Tri la recherche par la ville
    : query(collection(database, 'events')); //Exécute la fonction même s'il n'y a pas de tri par ville

  const eventsQuerySnapshot = (await getDocs(
    queryEvents,
  )) as QuerySnapshot<AppEvent>;

  return Promise.all(
    serializeQuerySnapshot(eventsQuerySnapshot).map(async (event) => {
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
