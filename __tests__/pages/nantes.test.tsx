import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Nantes from '@/pages/nantes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

describe('city name', () => {
  test('renders name city', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Nantes />
      </QueryClientProvider>,
    );

    const eventsMonthly = screen.getByRole('heading', {
      name: /Nantes/i,
    });

    expect(eventsMonthly).toBeInTheDocument();
  });
});
