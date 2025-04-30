// Write your tests here
import React from 'react'
import { getByRole, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import AppFunctional from './AppFunctional';

describe('AppFunctional component', () => {
  let user
  beforeEach(() => {
    render (<AppFunctional />)
    user = userEvent.setup()
  })

  test('1. the heading "Coordinates" is rendered', () => {
    expect(screen.getByText(/Coordinates/i)).toBeVisible()
  })

  test('[2] the move left button is rendered', () => {
    expect(screen.getByRole('button', { name: /left/i })).toBeInTheDocument()
  })




test('3, typing in the email input updates it is value', async ()=> {
  const emailInput = screen.getByPlaceholderText(/type email/i)
  await user.type(emailInput, 'test@example.com')
  expect(emailInput).toHaveValue('test@example.com')
   })

   test('4, clicking a direction button updates the steps count', async () => {
    const steps = screen.getByText(/You moved 0 times/)
    const rightBtn = screen(getByRole('button', {name: /right/i })  )
    await user.click(rightBtn)
    expect(screen.getByText(/You moved 1 time/i)).toBeVisible()
 
   })

})

test('sanity', () => {
  expect(true).toBe(true); // This will pass
});


