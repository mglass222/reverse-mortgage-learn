import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LanguageProvider } from '../i18n/LanguageContext.jsx'
import Calculator from './Calculator.jsx'

const renderCalc = () =>
  render(<LanguageProvider><Calculator /></LanguageProvider>)

describe('Calculator', () => {
  beforeEach(() => localStorage.clear())

  it('renders results for the default inputs', () => {
    renderCalc()
    expect(screen.getByText('Maximum Claim Amount')).toBeInTheDocument()
    expect(screen.getByText('Net available to borrower')).toBeInTheDocument()
    expect(screen.getByText(/Estimate only/)).toBeInTheDocument()
  })

  it('recomputes when an input changes', async () => {
    renderCalc()
    const home = screen.getByLabelText('Home appraised value')
    await userEvent.clear(home)
    await userEvent.type(home, '300000')
    // $300,000 appears as the max claim amount value
    expect(screen.getByText('$300,000')).toBeInTheDocument()
  })

  it('shows the term-length input only for the term option', async () => {
    renderCalc()
    expect(screen.queryByText('Term length (years)')).not.toBeInTheDocument()
    await userEvent.selectOptions(screen.getByLabelText('Disbursement option'), 'term')
    expect(screen.getByText('Term length (years)')).toBeInTheDocument()
  })
})
