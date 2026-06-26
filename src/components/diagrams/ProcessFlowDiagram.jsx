import { useLanguage } from '../../i18n/LanguageContext.jsx'

export default function ProcessFlowDiagram() {
  const { pick } = useLanguage()
  const steps = [
    { en: 'Counseling', ko: '상담' },
    { en: 'Application', ko: '신청' },
    { en: 'Appraisal', ko: '감정' },
    { en: 'Underwriting', ko: '심사' },
    { en: 'Closing', ko: '클로징' },
  ]
  const aria = {
    en: 'Flow of the HECM origination process: counseling, application, appraisal, underwriting, then closing.',
    ko: 'HECM 대출 개시 절차 흐름: 상담, 신청, 감정, 심사, 클로징.',
  }
  return (
    <figure className="diagram">
      <svg viewBox="0 0 340 90" role="img" aria-label={pick(aria)}>
        {steps.map((s, i) => (
          <g key={i} transform={`translate(${5 + i * 66},25)`}>
            <rect width="58" height="40" rx="6" fill="var(--dg-fill)" stroke="var(--dg-accent)" />
            <text x="29" y="24" fontSize="8" textAnchor="middle" fill="var(--dg-accent2)">{pick(s)}</text>
          </g>
        ))}
      </svg>
    </figure>
  )
}
