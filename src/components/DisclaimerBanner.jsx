import { useLanguage } from '../i18n/LanguageContext.jsx'
import ui from '../i18n/ui-strings.js'

export default function DisclaimerBanner() {
  const { pick } = useLanguage()
  return <div className="disclaimer-banner" role="note">{pick(ui.disclaimer)}</div>
}
