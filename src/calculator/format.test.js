import { describe, it, expect } from 'vitest'
import { formatUSD, formatPct } from './format.js'

describe('formatUSD', () => {
  it('formats whole dollars with thousands separators', () => {
    expect(formatUSD(10000)).toBe('$10,000')
  })
  it('rounds to the nearest dollar', () => {
    expect(formatUSD(1234.56)).toBe('$1,235')
  })
})

describe('formatPct', () => {
  it('formats a fraction as a one-decimal percent', () => {
    expect(formatPct(0.459)).toBe('45.9%')
  })
})
