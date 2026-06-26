import { useState } from 'react'
import { calculateHECM } from './hecm.js'
import { formatUSD, formatPct } from './format.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import ui from '../i18n/ui-strings.js'

const initial = {
  age: 70,
  homeValue: 500000,
  existingLiens: 50000,
  expectedRate: 5,
  disbursementOption: 'lump',
  termYears: 10,
}

export default function Calculator() {
  const { pick } = useLanguage()
  const [form, setForm] = useState(initial)

  const update = (key) => (e) => {
    const raw = e.target.value
    const value = key === 'disbursementOption' ? raw : Number(raw)
    setForm((f) => ({ ...f, [key]: value }))
  }

  const r = calculateHECM(form)

  return (
    <div className="calculator">
      <h1>{pick(ui.calc.heading)}</h1>

      <form className="calc-form" onSubmit={(e) => e.preventDefault()}>
        <label>{pick(ui.calc.age)}
          <input type="number" min="62" value={form.age} onChange={update('age')} />
        </label>
        <label>{pick(ui.calc.homeValue)}
          <input type="number" min="0" value={form.homeValue} onChange={update('homeValue')} />
        </label>
        <label>{pick(ui.calc.existingLiens)}
          <input type="number" min="0" value={form.existingLiens} onChange={update('existingLiens')} />
        </label>
        <label>{pick(ui.calc.expectedRate)}
          <input type="number" step="0.1" value={form.expectedRate} onChange={update('expectedRate')} />
        </label>
        <label>{pick(ui.calc.disbursement)}
          <select value={form.disbursementOption} onChange={update('disbursementOption')}>
            <option value="lump">{pick(ui.calc.optionLump)}</option>
            <option value="tenure">{pick(ui.calc.optionTenure)}</option>
            <option value="term">{pick(ui.calc.optionTerm)}</option>
            <option value="loc">{pick(ui.calc.optionLoc)}</option>
          </select>
        </label>
        {form.disbursementOption === 'term' && (
          <label>{pick(ui.calc.termYears)}
            <input type="number" min="1" value={form.termYears} onChange={update('termYears')} />
          </label>
        )}
      </form>

      <div className="calc-results">
        <h2>{pick(ui.calc.results)}</h2>
        <Row label={pick(ui.calc.maxClaim)} value={formatUSD(r.maxClaimAmount)} />
        <Row label={pick(ui.calc.plf)} value={formatPct(r.plf)} />
        <Row label={pick(ui.calc.principalLimit)} value={formatUSD(r.principalLimit)} />
        <Row label={pick(ui.calc.upfrontMip)} value={formatUSD(r.upfrontMip)} />
        <Row label={pick(ui.calc.origFee)} value={formatUSD(r.originationFee)} />
        <Row label={pick(ui.calc.otherCosts)} value={formatUSD(r.otherClosingCosts)} />
        <Row label={pick(ui.calc.obligations)} value={formatUSD(r.mandatoryObligations)} />
        <Row label={pick(ui.calc.netAvailable)} value={formatUSD(r.netAvailable)} emphasize />

        {r.disbursement.type === 'lump' && (
          <Row label={pick(ui.calc.lumpSum)} value={formatUSD(r.disbursement.lumpSum)} />
        )}
        {r.disbursement.type === 'loc' && (
          <Row label={pick(ui.calc.lineOfCredit)} value={formatUSD(r.disbursement.lineOfCredit)} />
        )}
        {(r.disbursement.type === 'tenure' || r.disbursement.type === 'term') && (
          <Row label={pick(ui.calc.monthlyPayment)} value={formatUSD(r.disbursement.monthlyPayment)} />
        )}
      </div>

      <p className="calc-disclaimer">{pick(ui.calc.estimateNote)}</p>
    </div>
  )
}

function Row({ label, value, emphasize }) {
  return (
    <div className={emphasize ? 'calc-row calc-row--emphasis' : 'calc-row'}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  )
}
