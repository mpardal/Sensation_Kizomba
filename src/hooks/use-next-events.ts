import type { UseQueryOptions } from '@tanstack/react-query';
import type { QuerySnapshot } from 'firebase/firestore';
import { useQuery } from '@tanstack/react-query';
import {
  getDocs,
  query,
  collection,
  orderBy,
  limit,
  where,
} from 'firebase/firestore';
import type { AppEvent } from '@/types/app-event';
import { database } from '@/config/firebase-config';
import { serializeQuerySnapshot } from '@/utils/serialize-snapshot';

const today = new Date();

export function getNextEventsQueryKey() {
  return ['next-events'];
}

export async function fetchNextEvents() {
  const nextEventsQuery = query(
    collection(database, 'events'),
    where('date.from', '>', today),
    orderBy('date.from', 'asc'),
    limit(3),
  );

  return (await getDocs(nextEventsQuery)) as QuerySnapshot<AppEvent>;
}

export function useNextEvents(options?: UseQueryOptions<AppEvent[]>) {
  return useQuery({
    queryKey: getNextEventsQueryKey(),
    queryFn: async () => {
      const nextEvents = await fetchNextEvents();

      return serializeQuerySnapshot(nextEvents);
    },
    ...options,
  });
}
