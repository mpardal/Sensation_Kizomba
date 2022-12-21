import { useQuery } from '@tanstack/react-query';
import { doc, getDoc } from 'firebase/firestore';
import type { UseQueryOptions } from '@tanstack/react-query';
import type { DocumentSnapshot } from 'firebase/firestore';
import { database } from '@/config/firebase-config';
import type { AppEvent } from '@/types/app-event';
import { serializeSnapshot } from '@/utils/serialize-snapshot';
import { getDownloadUrlsForEvent } from '@/utils/get-download-urls-for-event';

export function getEventQueryKey(eventId?: string) {
  return ['event', eventId];
}

export async function fetchEvent(eventId?: string): Promise<AppEvent> {
  const eventSnapshot = (await getDoc(
    doc(database, 'events', eventId as string),
  )) as DocumentSnapshot<AppEvent>;

  if (!eventSnapshot.exists()) {
    throw new Error(`Event ${eventId ?? '"unknown id"'} not found`);
  }

  const event = serializeSnapshot(eventSnapshot);

  return {
    ...event,
    images: await getDownloadUrlsForEvent(event),
  };
}

//Fonction permettant de récupérer un document d'une collection Firebase
export function useEvent(
  //id est un string
  eventId?: string,
  //?
  options?: UseQueryOptions<AppEvent>,
) {
  return useQuery({
    queryKey: getEventQueryKey(eventId),
    enabled: Boolean(eventId),
    queryFn: async () => fetchEvent(eventId),
    //?
    ...options,
  });
}
