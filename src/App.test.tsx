import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test(`renders 'Test' once I remove intro stuff`, () => {
  render(<App />);
  const linkElement = screen.getByText(/Test/i);
  expect(linkElement).toBeInTheDocument();
});
