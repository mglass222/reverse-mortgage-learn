import { useLanguage } from '../../i18n/LanguageContext.jsx'

// The borrower problem: large home equity, small income/cash — "house-rich,
// cash-poor" — with a HECM converting part of that equity into usable cash.
export default function EquityGapDiagram() {
  const { pick } = useLanguage()
  const L = {
    caption: { en: 'House-rich, cash-poor', ko: '집은 많지만 현금은 부족' },
    equity: { en: 'Home equity', ko: '주택 자본' },
    cash: { en: 'Income / cash', ko: '소득 / 현금' },
    hecm: { en: 'HECM', ko: 'HECM' },
    aria: {
      en: 'Diagram: a tall home-equity bar towers over a small income-and-cash bar — house-rich but cash-poor — with a HECM converting part of the equity into usable cash.',
      ko: '도표: 큰 주택 자본 막대가 작은 소득·현금 막대보다 훨씬 높습니다. 집은 많지만 현금은 부족하며, HECM이 그 자본의 일부를 사용 가능한 현금으로 전환합니다.',
    },
  }
  return (
    <figure className="diagram">
      <svg viewBox="0 0 340 176" role="img" aria-label={pick(L.aria)}>
        <defs>
          <marker id="arr-eq" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--dg-accent)" />
          </marker>
        </defs>
        <text x="170" y="16" fontSize="11" fontWeight="700" textAnchor="middle" fill="var(--dg-ink)">
          {pick(L.caption)}
        </text>
        <line x1="34" y1="152" x2="306" y2="152" stroke="var(--dg-line)" />

        {/* Home equity — tall */}
        <rect x="72" y="48" width="60" height="104" rx="2" fill="var(--dg-slate)" />
        <text x="102" y="42" fontSize="8.5" textAnchor="middle" fill="var(--dg-slate)">≈ $1.1M</text>
        <text x="102" y="167" fontSize="9" textAnchor="middle" fill="var(--dg-slate)">{pick(L.equity)}</text>

        {/* Income / cash — small */}
        <rect x="208" y="128" width="60" height="24" rx="2" fill="var(--dg-accent)" />
        <text x="273" y="144" fontSize="8.5" textAnchor="start" fill="var(--dg-accent)">≈ $30k/yr</text>
        <text x="238" y="167" fontSize="9" textAnchor="middle" fill="var(--dg-slate)">{pick(L.cash)}</text>

        {/* HECM converts equity into cash */}
        <path d="M118 56 Q184 30 238 126" fill="none" stroke="var(--dg-accent)" strokeWidth="2" markerEnd="url(#arr-eq)" />
        <text x="182" y="44" fontSize="8" textAnchor="middle" fill="var(--dg-accent)">{pick(L.hecm)}</text>
      </svg>
    </figure>
  )
}
