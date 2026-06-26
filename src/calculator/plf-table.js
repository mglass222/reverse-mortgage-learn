// Representative Principal Limit Factor (PLF) table — EDUCATIONAL APPROXIMATION.
// Rows = youngest borrower age, columns = expected interest rate (%).
// Values rise with age, fall as the expected rate rises. Not official FHA data.
const AGES = [62, 65, 70, 75, 80, 85, 90]
const RATES = [3, 4, 5, 6, 7, 8, 9, 10]

// PLF[ageIndex][rateIndex]
const PLF = [
  [0.520, 0.452, 0.400, 0.355, 0.315, 0.280, 0.250, 0.224], // 62
  [0.545, 0.476, 0.422, 0.375, 0.333, 0.296, 0.264, 0.236], // 65
  [0.588, 0.516, 0.459, 0.409, 0.364, 0.324, 0.289, 0.258], // 70
  [0.634, 0.560, 0.500, 0.447, 0.399, 0.356, 0.318, 0.284], // 75
  [0.682, 0.606, 0.544, 0.488, 0.437, 0.391, 0.350, 0.313], // 80
  [0.730, 0.654, 0.590, 0.532, 0.479, 0.430, 0.386, 0.346], // 85
  [0.770, 0.696, 0.632, 0.573, 0.518, 0.467, 0.420, 0.377], // 90
]

function floorIndex(values, target) {
  let idx = 0
  for (let i = 0; i < values.length; i++) {
    if (values[i] <= target) idx = i
    else break
  }
  return idx
}

export function lookupPLF(age, expectedRate) {
  const clampedAge = Math.min(Math.max(age, AGES[0]), AGES[AGES.length - 1])
  const clampedRate = Math.min(Math.max(expectedRate, RATES[0]), RATES[RATES.length - 1])
  const r = floorIndex(AGES, clampedAge)
  const c = floorIndex(RATES, clampedRate)
  return PLF[r][c]
}
