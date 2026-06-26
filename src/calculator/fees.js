// HECM origination fee: 2% of first $200k + 1% above, min $2,500, max $6,000.
const TIER_BREAK = 200000
const MIN_FEE = 2500
const MAX_FEE = 6000

export function originationFee(maxClaimAmount) {
  if (maxClaimAmount <= 0) return 0
  const base = Math.min(maxClaimAmount, TIER_BREAK) * 0.02
  const upper = Math.max(maxClaimAmount - TIER_BREAK, 0) * 0.01
  const raw = base + upper
  return Math.min(Math.max(raw, MIN_FEE), MAX_FEE)
}
