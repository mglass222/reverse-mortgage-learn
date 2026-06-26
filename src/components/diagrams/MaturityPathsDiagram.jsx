import { useLanguage } from '../../i18n/LanguageContext.jsx'

// A maturity event makes the loan due and payable; three resolution paths follow.
export default function MaturityPathsDiagram() {
  const { pick } = useLanguage()
  const L = {
    event: { en: 'Maturity event', ko: '만기 사유' },
    due: { en: 'Due & payable', ko: '상환 의무 발생' },
    sell: { en: 'Sell (surplus to heirs)', ko: '매각 (잉여는 상속인)' },
    pay: { en: 'Heirs pay ≤ 95% of value', ko: '상속인이 가치의 95% 이하 상환' },
    refi: { en: 'Refinance to keep', ko: '재융자로 보유' },
    aria: {
      en: 'Flow: a maturity event makes the loan due and payable, resolved by selling the home (surplus to heirs), heirs paying the lesser of the balance or 95% of value, or refinancing to keep the home.',
      ko: '흐름: 만기 사유로 대출 상환 의무가 발생하며, 주택 매각(잉여는 상속인), 상속인이 잔액과 가치의 95% 중 적은 금액 상환, 또는 재융자로 보유하여 해결합니다.',
    },
  }
  return (
    <figure className="diagram">
      <svg viewBox="0 0 340 168" role="img" aria-label={pick(L.aria)}>
        <defs>
          <marker id="arr-mat" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--dg-accent2)" />
          </marker>
        </defs>
        {/* left chain */}
        <rect x={6} y={66} width={84} height="36" rx="6" fill="var(--dg-fill)" stroke="var(--dg-accent)" />
        <text x={48} y={88} fontSize="9" textAnchor="middle" fill="var(--dg-ink)">{pick(L.event)}</text>
        <line x1={90} y1={84} x2={114} y2={84} stroke="var(--dg-accent2)" markerEnd="url(#arr-mat)" />
        <rect x={116} y={66} width={84} height="36" rx="6" fill="var(--dg-amber)" />
        <text x={158} y={88} fontSize="9" textAnchor="middle" fill="#ffffff">{pick(L.due)}</text>

        {/* fork to three paths */}
        {[
          { y: 18, label: pick(L.sell) },
          { y: 66, label: pick(L.pay) },
          { y: 114, label: pick(L.refi) },
        ].map((p, i) => (
          <g key={i}>
            <line x1={200} y1={84} x2={234} y2={p.y + 18} stroke="var(--dg-accent2)" markerEnd="url(#arr-mat)" />
            <rect x={236} y={p.y} width={100} height="36" rx="6" fill="var(--dg-fill)" stroke="var(--dg-slate2)" />
            <text x={286} y={p.y + 22} fontSize="8" textAnchor="middle" fill="var(--dg-slate)">{p.label}</text>
          </g>
        ))}
      </svg>
    </figure>
  )
}
