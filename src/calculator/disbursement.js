// Disbursement illustrations for HECM proceeds. Educational approximations.
export function monthlyPayment(principal, monthlyRate, months) {
  if (months <= 0) return 0
  if (monthlyRate === 0) return principal / months
  const factor = Math.pow(1 + monthlyRate, -months)
  return (principal * monthlyRate) / (1 - factor)
}

export function buildDisbursement({ option, netAvailable, age, monthlyRate, termYears }) {
  // Proceeds can never be negative; floor here so the helper is safe in isolation.
  const available = Math.max(netAvailable, 0)
  switch (option) {
    case 'lump':
      return { type: 'lump', lumpSum: available }
    case 'loc':
      return { type: 'loc', lineOfCredit: available }
    case 'tenure': {
      const months = Math.max((100 - age) * 12, 0)
      return { type: 'tenure', monthlyPayment: monthlyPayment(available, monthlyRate, months) }
    }
    case 'term': {
      const months = Math.max(termYears * 12, 0)
      return { type: 'term', monthlyPayment: monthlyPayment(available, monthlyRate, months) }
    }
    default:
      throw new Error(`Unknown disbursement option: ${option}`)
  }
}
