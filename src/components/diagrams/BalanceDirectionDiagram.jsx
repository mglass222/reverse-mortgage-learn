import { useLanguage } from '../../i18n/LanguageContext.jsx'

// Forward loan balance falls to zero; reverse loan balance rises over time.
export default function BalanceDirectionDiagram() {
  const { pick } = useLanguage()
  const labels = {
    forward: { en: 'Forward mortgage', ko: '정모기지' },
    reverse: { en: 'Reverse mortgage', ko: '역모기지' },
    time: { en: 'Time', ko: '시간' },
    balance: { en: 'Loan balance', ko: '대출 잔액' },
    aria: {
      en: 'Chart: a forward-mortgage balance declines along an amortizing curve (slowly at first, then faster) while a reverse-mortgage balance compounds upward over time.',
      ko: '차트: 정모기지 잔액은 상각 곡선을 따라(처음에는 천천히, 이후 더 빠르게) 감소하고, 역모기지 잔액은 시간이 지나며 복리로 증가합니다.',
    },
  }
  return (
    <figure className="diagram">
      <svg viewBox="0 0 320 200" role="img" aria-label={pick(labels.aria)}>
        <line x1="40" y1="170" x2="300" y2="170" stroke="var(--dg-fill2)" />
        <line x1="40" y1="20" x2="40" y2="170" stroke="var(--dg-fill2)" />
        {/* Forward: amortizing decline — gentle early, steeper late */}
        <path d="M40,42 C160,55 250,130 300,162" fill="none" stroke="var(--dg-slate)" strokeWidth="3" />
        {/* Reverse: compounding rise — slow early, accelerating */}
        <path d="M40,162 C160,150 250,75 300,42" fill="none" stroke="var(--dg-accent)" strokeWidth="3" />
        <text x="46" y="34" fontSize="11" fill="var(--dg-slate)" textAnchor="start">{pick(labels.forward)}</text>
        <text x="294" y="34" fontSize="11" fill="var(--dg-accent)" textAnchor="end">{pick(labels.reverse)}</text>
        <text x="150" y="190" fontSize="10" fill="var(--dg-muted)">{pick(labels.time)}</text>
        <text
          x="28"
          y="95"
          fontSize="10"
          fill="var(--dg-muted)"
          textAnchor="middle"
          transform="rotate(-90 28 95)"
        >
          {pick(labels.balance)}
        </text>
      </svg>
    </figure>
  )
}
