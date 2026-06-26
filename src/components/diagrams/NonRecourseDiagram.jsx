import { useLanguage } from '../../i18n/LanguageContext.jsx'

export default function NonRecourseDiagram() {
  const { pick } = useLanguage()
  const L = {
    balance: { en: 'Loan balance', ko: '대출 잔액' },
    owed: { en: 'Max owed (home value)', ko: '최대 상환액 (주택 가치)' },
    cap: { en: 'FHA insurance covers the gap', ko: 'FHA 보험이 차액을 보전' },
    aria: {
      en: 'Diagram: the loan balance exceeds the home value, but repayment is capped at value and FHA insurance covers the gap.',
      ko: '도표: 대출 잔액이 주택 가치를 초과하지만 상환은 가치로 제한되고 FHA 보험이 차액을 보전합니다.',
    },
  }
  return (
    <figure className="diagram">
      <svg viewBox="0 0 320 180" role="img" aria-label={pick(L.aria)}>
        <rect x="60" y="30" width="60" height="120" fill="var(--dg-fill)" />
        <rect x="200" y="80" width="60" height="70" fill="var(--dg-slate)" />
        <text x="90" y="20" fontSize="9" textAnchor="middle" fill="var(--dg-muted)">{pick(L.balance)}</text>
        <text x="230" y="70" fontSize="9" textAnchor="middle" fill="var(--dg-slate)">{pick(L.owed)}</text>
        <text x="160" y="170" fontSize="9" textAnchor="middle" fill="var(--dg-accent)">{pick(L.cap)}</text>
      </svg>
    </figure>
  )
}
