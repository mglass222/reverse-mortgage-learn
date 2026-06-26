import { describe, it, expect } from 'vitest'
import { originationFee } from './fees.js'

describe('originationFee', () => {
  it('applies the $2,500 minimum for small claim amounts', () => {
    expect(originationFee(100000)).toBe(2500) // 2% of 100k = 2000 -> floored to 2500
  })

  it('charges 2% up to $200,000', () => {
    expect(originationFee(200000)).toBe(4000)
  })

  it('adds 1% above $200,000', () => {
    expect(originationFee(400000)).toBe(6000) // 4000 + 1% of 200k = 2000
  })

  it('applies the $6,000 maximum', () => {
    expect(originationFee(1000000)).toBe(6000)
  })
})
