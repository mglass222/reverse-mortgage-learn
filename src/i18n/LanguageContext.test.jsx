import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LanguageProvider, useLanguage } from './LanguageContext.jsx'

function Probe() {
  const { lang, toggle, pick } = useLanguage()
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="word">{pick({ en: 'Hello', ko: '안녕하세요' })}</span>
      <button onClick={toggle}>switch</button>
    </div>
  )
}

describe('LanguageProvider', () => {
  beforeEach(() => localStorage.clear())

  it('defaults to English and resolves pick()', () => {
    render(<LanguageProvider><Probe /></LanguageProvider>)
    expect(screen.getByTestId('lang')).toHaveTextContent('en')
    expect(screen.getByTestId('word')).toHaveTextContent('Hello')
  })

  it('toggles to Korean and persists to localStorage', async () => {
    render(<LanguageProvider><Probe /></LanguageProvider>)
    await userEvent.click(screen.getByText('switch'))
    expect(screen.getByTestId('lang')).toHaveTextContent('ko')
    expect(screen.getByTestId('word')).toHaveTextContent('안녕하세요')
    expect(localStorage.getItem('rm-lang')).toBe('ko')
  })

  it('initializes from a stored language', () => {
    localStorage.setItem('rm-lang', 'ko')
    render(<LanguageProvider><Probe /></LanguageProvider>)
    expect(screen.getByTestId('lang')).toHaveTextContent('ko')
  })
})
