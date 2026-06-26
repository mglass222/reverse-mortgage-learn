import { describe, it, expect } from 'vitest'
import { monthlyPayment, buildDisbursement } from './disbursement.js'

describe('monthlyPayment', () => {
  it('divides evenly when the rate is zero', () => {
    expect(monthlyPayment(12000, 0, 12)).toBe(1000)
  })

  it('computes a standard annuity payment with interest', () => {
    // 100000 at 0.5%/mo for 120 months ≈ 1110.21
    expect(monthlyPayment(100000, 0.005, 120)).toBeCloseTo(1110.21, 1)
  })

  it('returns 0 when months is not positive', () => {
    expect(monthlyPayment(100000, 0.005, 0)).toBe(0)
  })
})

describe('buildDisbursement', () => {
  const base = { netAvailable: 200000, age: 70, monthlyRate: 0.005, termYears: 10 }

  it('returns the full amount as a lump sum', () => {
    const d = buildDisbursement({ option: 'lump', ...base })
    expect(d).toEqual({ type: 'lump', lumpSum: 200000 })
  })

  it('returns a line of credit equal to net available', () => {
    const d = buildDisbursement({ option: 'loc', ...base })
    expect(d).toEqual({ type: 'loc', lineOfCredit: 200000 })
  })

  it('returns a monthly payment for tenure (months to age 100)', () => {
    const d = buildDisbursement({ option: 'tenure', ...base })
    expect(d.type).toBe('tenure')
    expect(d.monthlyPayment).toBeCloseTo(monthlyPayment(200000, 0.005, (100 - 70) * 12), 2)
  })

  it('returns a monthly payment for a fixed term', () => {
    const d = buildDisbursement({ option: 'term', ...base })
    expect(d.type).toBe('term')
    expect(d.monthlyPayment).toBeCloseTo(monthlyPayment(200000, 0.005, 10 * 12), 2)
  })
})
