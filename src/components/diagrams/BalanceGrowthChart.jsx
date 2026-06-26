import { useLanguage } from '../../i18n/LanguageContext.jsx'

export default function BalanceGrowthChart() {
  const { pick } = useLanguage()
  const L = {
    balance: { en: 'Loan balance', ko: '대출 잔액' },
    home: { en: 'Home value', ko: '주택 가치' },
    time: { en: 'Time', ko: '시간' },
    aria: {
      en: 'Chart: the loan balance compounds upward over time, eventually approaching the more slowly rising home value.',
      ko: '차트: 대출 잔액이 시간이 지나며 복리로 증가해 더 느리게 오르는 주택 가치에 점차 근접합니다.',
    },
  }
  return (
    <figure className="diagram">
      <svg viewBox="0 0 320 200" role="img" aria-label={pick(L.aria)}>
        <line x1="40" y1="170" x2="300" y2="170" stroke="var(--dg-fill2)" />
        <line x1="40" y1="20" x2="40" y2="170" stroke="var(--dg-fill2)" />
        {/* Home value: gentle, near-steady appreciation */}
        <path d="M40,150 C130,144 215,130 300,98" fill="none" stroke="var(--dg-slate)" strokeWidth="2" />
        {/* Loan balance: pronounced compounding — slow early, accelerating */}
        <path d="M40,166 C155,162 235,128 300,40" fill="none" stroke="var(--dg-accent)" strokeWidth="3" />
        <text x="210" y="55" fontSize="10" fill="var(--dg-accent)">{pick(L.balance)}</text>
        <text x="210" y="150" fontSize="10" fill="var(--dg-slate)">{pick(L.home)}</text>
        <text x="150" y="190" fontSize="10" fill="var(--dg-muted)">{pick(L.time)}</text>
      </svg>
    </figure>
  )
}
