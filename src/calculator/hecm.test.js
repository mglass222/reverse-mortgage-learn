import { describe, it, expect } from 'vitest'
import { calculateHECM } from './hecm.js'
import { lookupPLF } from './plf-table.js'
import { FHA_LENDING_LIMIT } from './constants.js'

describe('calculateHECM', () => {
  const base = { age: 70, homeValue: 500000, existingLiens: 50000, expectedRate: 5, disbursementOption: 'lump' }

  it('caps the max claim amount at the FHA lending limit', () => {
    const r = calculateHECM({ ...base, homeValue: 2000000 })
    expect(r.maxClaimAmount).toBe(FHA_LENDING_LIMIT)
  })

  it('uses appraised value when below the lending limit', () => {
    const r = calculateHECM(base)
    expect(r.maxClaimAmount).toBe(500000)
  })

  it('computes the principal limit from the PLF table', () => {
    const r = calculateHECM(base)
    expect(r.plf).toBe(lookupPLF(70, 5))
    expect(r.principalLimit).toBeCloseTo(500000 * lookupPLF(70, 5), 2)
  })

  it('charges 2% upfront MIP on the max claim amount', () => {
    const r = calculateHECM(base)
    expect(r.upfrontMip).toBeCloseTo(10000, 2) // 2% of 500k
  })

  it('subtracts existing liens and upfront costs to get net available', () => {
    const r = calculateHECM(base)
    const expectedNet = r.principalLimit - (50000 + r.totalUpfrontCosts)
    expect(r.netAvailable).toBeCloseTo(Math.max(expectedNet, 0), 2)
  })

  it('floors net available at zero when obligations exceed the principal limit', () => {
    const r = calculateHECM({ ...base, existingLiens: 1000000 })
    expect(r.netAvailable).toBe(0)
  })

  it('returns a disbursement matching the selected option', () => {
    const r = calculateHECM({ ...base, disbursementOption: 'loc' })
    expect(r.disbursement.type).toBe('loc')
    expect(r.disbursement.lineOfCredit).toBe(r.netAvailable)
  })
})
