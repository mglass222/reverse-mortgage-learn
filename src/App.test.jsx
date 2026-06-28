import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App.jsx'

describe('App shell', () => {
  beforeEach(() => localStorage.clear())

  it('renders the site title and disclaimer in English', () => {
    render(<App />)
    expect(screen.getByText('Reverse Mortgage Guide')).toBeInTheDocument()
    expect(screen.getByRole('note')).toHaveTextContent(/Do not use this information to make decisions/)
  })

  it('switches the chrome to Korean via the toggle', async () => {
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: 'Switch language' }))
    expect(screen.getByText('역모기지 가이드')).toBeInTheDocument()
  })
})
