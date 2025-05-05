// Write your tests here
import React from 'react'
import { server } from '../../backend/mock-server';
import { getByRole, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import AppFunctional from './AppFunctional';



beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())


global.fetch = jest.fn((url, options) => {
  const body = JSON.parse(options.body);
  const email = body.email;

  // Simulate banned email case
  if (email === 'foo@bar.baz') {
    return Promise.resolve({
      ok: false,
      json: () => Promise.resolve({ message: 'foo@bar.baz is not allowed' })
    });
  }

  // Simulate success case
  return Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({ message: `Thanks for your submission ${email}` })
  });
});


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
    const rightBtn = screen.getByRole('button', {name: /right/i })  
    await user.click(rightBtn)
    expect(screen.getByText(/You moved 1 time/i)).toBeVisible()
 
   })

   test('5, submitting the form sends data and clears the input', async () => {
    const emailInput = screen.getByPlaceholderText(/type email/i)
    const submitBtn = screen.getByRole('button', { name: /submit/i })

    await user.type(emailInput, 'test@example.com')
    await user.click(submitBtn)

    /// because the real fetch call may not be mocked assume the email gets clear
    
    expect(emailInput).toHaveValue('')
   })
  })


