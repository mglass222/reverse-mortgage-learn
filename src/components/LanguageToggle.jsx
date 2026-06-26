import { useLanguage } from '../i18n/LanguageContext.jsx'
import ui from '../i18n/ui-strings.js'

export default function LanguageToggle() {
  const { toggle, pick } = useLanguage()
  return (
    <button className="lang-toggle" onClick={toggle} aria-label={pick(ui.toggleAria)}>
      {pick(ui.toggle)}
    </button>
  )
}
