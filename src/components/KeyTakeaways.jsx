import { useLanguage } from '../i18n/LanguageContext.jsx'
import ui from '../i18n/ui-strings.js'

export default function KeyTakeaways({ items }) {
  const { pick } = useLanguage()
  return (
    <aside className="key-takeaways">
      <h3>{pick(ui.keyTakeaways)}</h3>
      <ul>{items.map((it, i) => <li key={i}>{pick(it)}</li>)}</ul>
    </aside>
  )
}
