import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { LanguageProvider } from '../../i18n/LanguageContext.jsx'
import diagrams from './index.js'

describe('diagram registry', () => {
  it('registers all diagram keys', () => {
    expect(Object.keys(diagrams).sort()).toEqual(
      [
        'balanceDirection',
        'balanceGrowth',
        'disbursementOptions',
        'equityGap',
        'maturityPaths',
        'nonRecourse',
        'principalLimit',
        'processFlow',
        'programFlow',
        'rateStack',
        'suitability',
      ].sort(),
    )
  })

  it('every diagram renders an svg', () => {
    for (const Key of Object.keys(diagrams)) {
      const Diagram = diagrams[Key]
      const { container } = render(<LanguageProvider><Diagram /></LanguageProvider>)
      expect(container.querySelector('svg')).toBeTruthy()
    }
  })
})
