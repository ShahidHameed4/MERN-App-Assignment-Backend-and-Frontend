import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//test button
test('renders button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Submit/i);
  expect(buttonElement).toBeInTheDocument();
});

