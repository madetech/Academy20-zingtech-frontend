import { render, screen } from '@testing-library/react';
import App from './App';

test('Claire is here', () => {
  render(<App />);
  const linkElement = screen.getByText(/Claire/i);
  expect(linkElement).toBeInTheDocument();
});

test('Emma is here', () => {
  render(<App />);
  const linkElement = screen.getByText(/emma/i);
  expect(linkElement).toBeInTheDocument();
});
