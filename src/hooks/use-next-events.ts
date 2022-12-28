import type { UseQueryOptions } from '@tanstack/react-query';
import type { QuerySnapshot } from 'firebase/firestore';
import { useQuery } from '@tanstack/react-query';
import { getDocs, query, collection, orderBy } from 'firebase/firestore';
import type { AppEvent } from '@/types/app-event';
import { database } from '@/config/firebase-config';
import { serializeQuerySnapshot } from '@/utils/serialize-snapshot';
import { getDownloadUrlsForEvent } from '@/utils/get-download-urls-for-event';

const today = new Date(new Date().setHours(0, 0, 0, 0));

export function getNextEventsQueryKey() {
  return ['next-events'];
}

export async function fetchNextEvents() {
  const nextEventsQuery = query(
    collection(database, 'events'),
    orderBy('date.from', 'asc'),
  );

  const nextEventsSnapshot = (await getDocs(
    nextEventsQuery,
  )) as QuerySnapshot<AppEvent>;

  return Promise.all(
    serializeQuerySnapshot(nextEventsSnapshot)
      .filter((evt) => {
        const from = new Date(evt.date.from);
        const to = evt.date.to ? new Date(evt.date.to) : undefined;

        return from >= today || (to && to >= today);
      })
      .slice(0, 3)
      .map(async (event) => {
        return {
          ...event,
          images: await getDownloadUrlsForEvent(event),
        };
      }),
  );
}

export function useNextEvents(options?: UseQueryOptions<AppEvent[]>) {
  return useQuery({
    queryKey: getNextEventsQueryKey(),
    queryFn: () => fetchNextEvents(),
    ...options,
  });
}
