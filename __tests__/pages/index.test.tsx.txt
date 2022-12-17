import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

describe('home page', () => {
  test('renders section of events', () => {
    render(<Home />);

    const eventsHeading = screen.getByRole('heading', {
      name: /derniers articles/i,
    });

    expect(eventsHeading).toBeInTheDocument();
  });
});
