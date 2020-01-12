import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders dashboard', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Privacy Policy/i);
  expect(linkElement).toBeInTheDocument();
});
