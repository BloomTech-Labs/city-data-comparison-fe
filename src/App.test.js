import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders dashboard', () => {
  const { getByText } = render(<App />);
  const cta = getByText(/Start Now/i);
  expect(cta).toBeInTheDocument();
});

test('renders footer', () => {
  const { getByText } = render(<App />);
  const footerLink = getByText(/Privacy Policy/i);
  expect(footerLink).toBeInTheDocument();
});

test('renders navigation', () => {
  const { getByText } = render(<App />);
  const mapLink = getByText(/Menu/i);
  expect(mapLink).toBeInTheDocument();
});
