import { useQuery } from '@tanstack/react-query';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { database } from '../config/firebase-config';
import type { UseQueryOptions } from '@tanstack/react-query';
import type { QuerySnapshot } from 'firebase/firestore';
import type { AppEvent } from '../types/app-event';

export function useEvents(
  city?: string,
  options?: UseQueryOptions<QuerySnapshot<AppEvent>>,
) {
  return useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const queryEvents = city
        ? query(collection(database, 'events'), where('city', '==', city))
        : query(collection(database, 'events'));

      return (await getDocs(queryEvents)) as QuerySnapshot<AppEvent>;
    },
    ...options,
  });
}
