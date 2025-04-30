// Write your tests here
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import AppFunctional from './AppFunctional';

// describe('App Functional component', () => {
//   /// mock API setup
//   beforeAll(() => {server.listen() })
//   afterAll(() => { server.close() })

//   let userInput, 
// })

test('sanity', () => {
  expect(true).toBe(true); // This will pass
});

/// renders all headings, buttons and static text
test('renders heading and buttons', () => {
  render(<AppFunctional/>)
  expect(screen.getByText(/coordinates/i)).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /left/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /right/i })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument()
})
