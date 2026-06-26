import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import ui from '../i18n/ui-strings.js'
import chapters from '../content/chapters-index.js'

export default function Sidebar() {
  const { pick } = useLanguage()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav className="sidebar" aria-label={pick(ui.nav.chapters)}>
      {/* Mobile-only disclosure toggle; hidden on wider viewports via CSS. */}
      <button
        type="button"
        className="sidebar-toggle"
        aria-expanded={open}
        aria-controls="chapter-nav"
        onClick={() => setOpen((o) => !o)}
      >
        <span>{pick(ui.nav.chapters)}</span>
        <span className="sidebar-toggle-icon" aria-hidden="true">{open ? '✕' : '☰'}</span>
      </button>

      <div id="chapter-nav" className={open ? 'sidebar-nav is-open' : 'sidebar-nav'}>
        <p className="sidebar-heading">{pick(ui.nav.chapters)}</p>
        <ol className="sidebar-list">
          {chapters.map((ch, i) => (
            <li key={ch.slug}>
              <NavLink to={`/chapter/${ch.slug}`} onClick={close}>
                {i + 1}. {pick(ch.title)}
              </NavLink>
            </li>
          ))}
        </ol>
        <NavLink className="sidebar-calc-link" to="/calculator" onClick={close}>
          {pick(ui.nav.calculator)}
        </NavLink>
      </div>
    </nav>
  )
}
