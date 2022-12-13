import { render, screen } from '@testing-library/react';
import Nav from '@/components/nav';

describe('nav component', () => {
  test('renders links to other pages', () => {
    render(<Nav />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
