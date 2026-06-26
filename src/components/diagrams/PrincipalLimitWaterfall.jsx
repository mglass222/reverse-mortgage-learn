import { useLanguage } from '../../i18n/LanguageContext.jsx'

// How a HECM is sized: home value, capped at the FHA limit, times the PLF, less
// mandatory obligations, equals net available. Example uses the calculator default
// (age 70, $500k home, 5% expected rate, $50k liens).
export default function PrincipalLimitWaterfall() {
  const { pick } = useLanguage()
  const FULL = 500 // $k that maps to a full-width bar
  const X0 = 124
  const MAXW = 176
  const w = (k) => (Math.abs(k) / FULL) * MAXW

  const rows = [
    { label: { en: 'Home value', ko: '주택 가치' }, k: 500, value: '$500k', fill: 'var(--dg-fill2)' },
    { label: { en: 'Max Claim Amount', ko: '최대 청구 금액' }, k: 500, value: '$500k', fill: 'var(--dg-slate2)' },
    {
      label: { en: 'Principal Limit', ko: '원금한도' },
      k: 229.5,
      value: '$229.5k',
      fill: 'var(--dg-slate2)',
      note: { en: '× PLF 45.9%', ko: '× PLF 45.9%' },
    },
    { label: { en: '− Obligations', ko: '− 필수 의무' }, k: 69, value: '−$69k', fill: 'var(--dg-amber)' },
    { label: { en: 'Net available', ko: '순수령액' }, k: 160.5, value: '$160.5k', fill: 'var(--dg-accent)', emph: true },
  ]

  const rowH = 24
  const top = 14
  const aria = {
    en: 'Bar chart deriving HECM proceeds: home value and Maximum Claim Amount ($500k) are reduced by the Principal Limit Factor to a $229.5k Principal Limit, then less $69k of obligations to $160.5k net available.',
    ko: '막대 차트로 본 HECM 수령액 산출: 주택 가치와 최대 청구 금액($500k)이 원금한도 계수에 의해 원금한도 $229.5k로 줄고, 필수 의무 $69k를 차감해 순수령액 $160.5k가 됩니다.',
  }

  return (
    <figure className="diagram">
      <svg viewBox="0 0 340 140" role="img" aria-label={pick(aria)}>
        <line x1={X0} y1={top - 2} x2={X0} y2={top + rows.length * rowH - 6} stroke="var(--dg-line)" />
        {rows.map((r, i) => {
          const y = top + i * rowH
          return (
            <g key={i}>
              <text x="8" y={y + 12} fontSize="9" fill="var(--dg-slate)">{pick(r.label)}</text>
              <rect x={X0} y={y + 3} width={w(r.k)} height="13" rx="2" fill={r.fill} />
              {r.note && (
                <text x={X0 + 5} y={y + 12} fontSize="7" fill="#ffffff">{pick(r.note)}</text>
              )}
              <text
                x={X0 + w(r.k) + 5}
                y={y + 13}
                fontSize="8.5"
                fontWeight={r.emph ? '700' : '400'}
                fill={r.emph ? 'var(--dg-accent)' : 'var(--dg-ink)'}
              >
                {r.value}
              </text>
            </g>
          )
        })}
      </svg>
    </figure>
  )
}
