import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LanguageProvider } from '../i18n/LanguageContext.jsx'
import ChapterLayout from './ChapterLayout.jsx'
import firstChapter from '../content/chapters/01-is-it-right.js'

const renderChapter = () =>
  render(<LanguageProvider><ChapterLayout chapter={firstChapter} /></LanguageProvider>)

describe('ChapterLayout', () => {
  beforeEach(() => localStorage.clear())

  it('renders the English title, intro, and key takeaways', () => {
    renderChapter()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Right for You/)
    expect(screen.getByText(/could use extra cash or monthly income/)).toBeInTheDocument()
    expect(screen.getByText('Key Takeaways')).toBeInTheDocument()
  })

  it('renders an embedded diagram (svg) for the section that declares one', () => {
    const { container } = renderChapter()
    expect(container.querySelector('svg')).toBeTruthy()
  })
})
