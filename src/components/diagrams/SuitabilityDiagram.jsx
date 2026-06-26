import { useLanguage } from '../../i18n/LanguageContext.jsx'

// Two-column contrast of good-fit vs. poor-fit borrower signals.
export default function SuitabilityDiagram() {
  const { pick } = useLanguage()
  const L = {
    good: { en: 'Good fit', ko: '적합' },
    poor: { en: 'Poor fit', ko: '부적합' },
    g1: { en: 'Long tenure in home', ko: '주택 장기 거주' },
    g2: { en: 'Can carry taxes & insurance', ko: '세금·보험 감당 가능' },
    g3: { en: 'Needs cash flow / liquidity', ko: '현금흐름·유동성 필요' },
    p1: { en: 'Likely to move soon', ko: '조만간 이주 가능성' },
    p2: { en: 'Estate / heirs sensitive', ko: '상속·상속인 민감' },
    p3: { en: 'Cannot carry charges', ko: '부담금 감당 불가' },
    aria: {
      en: 'Comparison: good fit — long tenure, can carry property charges, needs cash flow; poor fit — likely to move soon, estate-sensitive, cannot carry charges.',
      ko: '비교: 적합 — 장기 거주, 재산 부담금 감당, 현금흐름 필요. 부적합 — 조만간 이주, 상속 민감, 부담금 감당 불가.',
    },
  }
  const Col = ({ x, head, color, mark, items }) => (
    <g>
      <rect x={x} y={10} width={156} height="26" rx="5" fill={color} />
      <text x={x + 78} y={27} fontSize="11" fontWeight="700" textAnchor="middle" fill="#ffffff">{head}</text>
      {items.map((it, i) => {
        const y = 52 + i * 34
        return (
          <g key={i}>
            <text x={x + 10} y={y} fontSize="13" fill={color}>{mark}</text>
            <text x={x + 26} y={y} fontSize="8.5" fill="var(--dg-ink)">{it}</text>
          </g>
        )
      })}
    </g>
  )
  return (
    <figure className="diagram">
      <svg viewBox="0 0 340 158" role="img" aria-label={pick(L.aria)}>
        <Col x={6} head={pick(L.good)} color="var(--dg-accent)" mark="✓" items={[pick(L.g1), pick(L.g2), pick(L.g3)]} />
        <Col x={178} head={pick(L.poor)} color="var(--dg-amber)" mark="✕" items={[pick(L.p1), pick(L.p2), pick(L.p3)]} />
      </svg>
    </figure>
  )
}
