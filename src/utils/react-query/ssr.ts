import { QueryClient } from '@tanstack/react-query';
import {
  fetchNextEvents,
  getNextEventsQueryKey,
} from '@/hooks/use-next-events';
import { serializeQuerySnapshot } from '@/utils/serialize-snapshot';

export function prefetchNextEvents(queryClient: QueryClient) {
  return queryClient.fetchQuery(getNextEventsQueryKey(), async () => {
    const nextEvents = await fetchNextEvents();

    return serializeQuerySnapshot(nextEvents);
  });
}

export function initHydration() {
  const queryClient = new QueryClient();

  return {
    queryClient,
    hydrate: async () => {
      await prefetchNextEvents(queryClient);
    },
  };
}
