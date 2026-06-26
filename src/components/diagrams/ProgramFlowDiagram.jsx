import { useLanguage } from '../../i18n/LanguageContext.jsx'

// HECM program plumbing: borrower MIP funds the MMI Fund / FHA insurance
// backstop, and the loan is pooled into Ginnie Mae HMBS.
export default function ProgramFlowDiagram() {
  const { pick } = useLanguage()
  const L = {
    borrower: { en: 'Borrower', ko: '차주' },
    fund: { en: 'MMI Fund', ko: 'MMI 기금' },
    insurance: { en: 'FHA insurance', ko: 'FHA 보험' },
    nonrecourse: { en: '(non-recourse)', ko: '(비소구)' },
    loan: { en: 'HECM loan', ko: 'HECM 대출' },
    hmbs: { en: 'Ginnie Mae HMBS', ko: '지니메이 HMBS' },
    mip: { en: 'MIP', ko: 'MIP' },
    pooled: { en: 'pooled', ko: '풀링' },
    aria: {
      en: 'Flow: borrower-paid MIP funds the MMI Fund and FHA insurance that backs the non-recourse guarantee; the HECM loan is pooled into Ginnie Mae HMBS.',
      ko: '흐름: 차주가 낸 MIP가 MMI 기금과 비소구를 뒷받침하는 FHA 보험의 재원이 되고, HECM 대출은 지니메이 HMBS로 풀링됩니다.',
    },
  }
  const Box = ({ x, y, w, lines }) => (
    <g>
      <rect x={x} y={y} width={w} height="36" rx="6" fill="var(--dg-fill)" stroke="var(--dg-accent)" />
      {lines.map((ln, i) => (
        <text
          key={i}
          x={x + w / 2}
          y={y + (lines.length === 1 ? 22 : 16 + i * 12)}
          fontSize="9"
          textAnchor="middle"
          fill="var(--dg-ink)"
        >
          {ln}
        </text>
      ))}
    </g>
  )
  return (
    <figure className="diagram">
      <svg viewBox="0 0 340 140" role="img" aria-label={pick(L.aria)}>
        <defs>
          <marker id="arr-prog" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--dg-accent2)" />
          </marker>
        </defs>
        {/* Row 1: insurance side */}
        <Box x={8} y={20} w={78} lines={[pick(L.borrower)]} />
        <Box x={130} y={20} w={78} lines={[pick(L.fund)]} />
        <Box x={252} y={20} w={80} lines={[pick(L.insurance), pick(L.nonrecourse)]} />
        <line x1={86} y1={38} x2={128} y2={38} stroke="var(--dg-accent2)" markerEnd="url(#arr-prog)" />
        <text x={107} y={32} fontSize="7.5" textAnchor="middle" fill="var(--dg-muted)">{pick(L.mip)}</text>
        <line x1={208} y1={38} x2={250} y2={38} stroke="var(--dg-accent2)" markerEnd="url(#arr-prog)" />

        {/* Row 2: securitization side */}
        <Box x={8} y={88} w={78} lines={[pick(L.loan)]} />
        <Box x={150} y={88} w={120} lines={[pick(L.hmbs)]} />
        <line x1={86} y1={106} x2={148} y2={106} stroke="var(--dg-accent2)" markerEnd="url(#arr-prog)" />
        <text x={117} y={100} fontSize="7.5" textAnchor="middle" fill="var(--dg-muted)">{pick(L.pooled)}</text>
      </svg>
    </figure>
  )
}
