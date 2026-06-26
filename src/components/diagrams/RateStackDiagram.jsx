import { useLanguage } from '../../i18n/LanguageContext.jsx'

// One rate, two jobs: index + margin builds the note rate (accrues the balance)
// and the expected rate (sets the PLF); add annual MIP for the effective accrual.
export default function RateStackDiagram() {
  const { pick } = useLanguage()
  const X0 = 128
  const rows = [
    { label: { en: 'Index (SOFR/CMT)', ko: '지수 (SOFR/CMT)' }, segs: [{ w: 80, f: 'var(--dg-slate)' }] },
    { label: { en: '+ Margin', ko: '+ 마진' }, segs: [{ w: 80, f: 'var(--dg-slate)' }, { w: 38, f: 'var(--dg-accent)' }] },
    {
      label: { en: '= Note rate', ko: '= 노트금리' },
      segs: [{ w: 118, f: 'var(--dg-accent2)' }],
      tag: { en: 'accrues the balance', ko: '잔액을 누적' },
    },
    {
      label: { en: '= Expected rate', ko: '= 예상금리' },
      segs: [{ w: 118, f: 'var(--dg-slate)' }],
      tag: { en: 'sets the PLF', ko: 'PLF를 결정' },
    },
    {
      label: { en: '+ Annual MIP', ko: '+ 연간 MIP' },
      segs: [{ w: 118, f: 'var(--dg-accent)' }, { w: 12, f: 'var(--dg-amber)' }],
      tag: { en: '= effective accrual', ko: '= 실효 누적률' },
    },
  ]
  const rowH = 26
  const top = 14
  const aria = {
    en: 'Diagram: index plus margin forms the note rate (which accrues the balance) and the expected rate (which sets the PLF); adding the 0.5% annual MIP gives the effective accrual rate.',
    ko: '도표: 지수에 마진을 더해 노트금리(잔액 누적)와 예상금리(PLF 결정)가 만들어지고, 0.5% 연간 MIP를 더하면 실효 누적률이 됩니다.',
  }
  return (
    <figure className="diagram">
      <svg viewBox="0 0 380 150" role="img" aria-label={pick(aria)}>
        {rows.map((r, i) => {
          const y = top + i * rowH
          let x = X0
          const end = X0 + r.segs.reduce((s, g) => s + g.w, 0)
          return (
            <g key={i}>
              <text x="8" y={y + 12} fontSize="8.5" fill="var(--dg-slate)">{pick(r.label)}</text>
              {r.segs.map((g, k) => {
                const seg = <rect key={k} x={x} y={y + 2} width={g.w} height="13" rx="2" fill={g.f} />
                x += g.w
                return seg
              })}
              {r.tag && (
                <text x={end + 6} y={y + 12} fontSize="7.5" fontStyle="italic" fill="var(--dg-muted)">{pick(r.tag)}</text>
              )}
            </g>
          )
        })}
      </svg>
    </figure>
  )
}
