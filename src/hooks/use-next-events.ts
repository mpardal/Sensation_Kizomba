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

const today = new Date();
export function useNextEvents(
  options?: UseQueryOptions<QuerySnapshot<AppEvent>>,
) {
  return useQuery({
    queryKey: ['next-events'],
    queryFn: async () => {
      const nextEventsQuery = query(
        collection(database, 'events'),
        where('date.from', '>', today),
        orderBy('date.from', 'asc'),
        limit(3),
      );

      return (await getDocs(nextEventsQuery)) as QuerySnapshot<AppEvent>;
    },
    ...options,
  });
}
