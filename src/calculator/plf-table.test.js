import { describe, it, expect } from 'vitest'
import { lookupPLF } from './plf-table.js'

describe('lookupPLF', () => {
  it('returns the exact factor for a table cell (age 62, rate 5)', () => {
    expect(lookupPLF(62, 5)).toBeCloseTo(0.400, 3)
  })

  it('increases with borrower age at a fixed rate', () => {
    expect(lookupPLF(80, 5)).toBeGreaterThan(lookupPLF(62, 5))
  })

  it('decreases as the expected rate rises at a fixed age', () => {
    expect(lookupPLF(75, 8)).toBeLessThan(lookupPLF(75, 4))
  })

  it('floors age below the next row (68 uses the age-65 row)', () => {
    expect(lookupPLF(68, 5)).toBe(lookupPLF(65, 5))
  })

  it('floors the rate between columns (5.7 uses the 5 column)', () => {
    expect(lookupPLF(70, 5.7)).toBe(lookupPLF(70, 5))
  })

  it('clamps age below 62 up to 62 and above 90 down to 90', () => {
    expect(lookupPLF(50, 5)).toBe(lookupPLF(62, 5))
    expect(lookupPLF(95, 5)).toBe(lookupPLF(90, 5))
  })

  it('clamps the rate below 3 and above 10', () => {
    expect(lookupPLF(70, 1)).toBe(lookupPLF(70, 3))
    expect(lookupPLF(70, 12)).toBe(lookupPLF(70, 10))
  })
})
