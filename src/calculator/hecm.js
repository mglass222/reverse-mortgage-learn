import {
  FHA_LENDING_LIMIT,
  UPFRONT_MIP_RATE,
  ANNUAL_MIP_RATE,
  DEFAULT_OTHER_CLOSING_COSTS,
} from './constants.js'
import { lookupPLF } from './plf-table.js'
import { originationFee } from './fees.js'
import { buildDisbursement } from './disbursement.js'

export function calculateHECM({
  age,
  homeValue,
  existingLiens = 0,
  expectedRate,
  disbursementOption = 'lump',
  termYears = 10,
  otherClosingCosts = DEFAULT_OTHER_CLOSING_COSTS,
}) {
  const maxClaimAmount = Math.min(homeValue, FHA_LENDING_LIMIT)
  const plf = lookupPLF(age, expectedRate)
  const principalLimit = maxClaimAmount * plf

  const upfrontMip = maxClaimAmount * UPFRONT_MIP_RATE
  const origFee = originationFee(maxClaimAmount)
  const totalUpfrontCosts = upfrontMip + origFee + otherClosingCosts
  const mandatoryObligations = existingLiens + totalUpfrontCosts
  const netAvailable = Math.max(principalLimit - mandatoryObligations, 0)

  // The expected rate already includes the lender margin (index + margin), and
  // the note rate that accrues the balance is approximately the expected rate,
  // so the monthly accrual rate ≈ expected rate + annual MIP.
  const monthlyRate = (expectedRate / 100 + ANNUAL_MIP_RATE) / 12
  const disbursement = buildDisbursement({
    option: disbursementOption,
    netAvailable,
    age,
    monthlyRate,
    termYears,
  })

  return {
    maxClaimAmount,
    plf,
    principalLimit,
    upfrontMip,
    originationFee: origFee,
    otherClosingCosts,
    totalUpfrontCosts,
    mandatoryObligations,
    netAvailable,
    disbursement,
  }
}
