import { useLanguage } from '../i18n/LanguageContext.jsx'
import ui from '../i18n/ui-strings.js'
import KeyTakeaways from './KeyTakeaways.jsx'
import diagrams from './diagrams/index.js'
import chapters from '../content/chapters-index.js'

// Render a string, turning [label](https://url) markdown into clickable links.
function renderInline(text) {
  const re = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g
  const parts = []
  let last = 0
  let key = 0
  let m
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    parts.push(
      <a key={key++} href={m[2]} target="_blank" rel="noopener noreferrer">
        {m[1]}
      </a>,
    )
    last = m.index + m[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts
}

export default function ChapterLayout({ chapter }) {
  const { pick } = useLanguage()
  const idx = chapters.findIndex((c) => c.slug === chapter.slug)
  const next = idx >= 0 ? chapters[idx + 1] : undefined

  return (
    <article className="chapter">
      <h1>{pick(chapter.title)}</h1>
      <p className="chapter-intro">{renderInline(pick(chapter.intro))}</p>
      {chapter.sections.map((section, i) => {
        const Diagram = section.diagram ? diagrams[section.diagram] : null
        return (
          <section key={i}>
            <h2>{pick(section.heading)}</h2>
            {section.body.map((para, j) => <p key={j}>{renderInline(pick(para))}</p>)}
            {Diagram && <Diagram />}
          </section>
        )
      })}
      <KeyTakeaways items={chapter.takeaways} />
      {next && (
        <a className="chapter-next" href={`#/chapter/${next.slug}`}>
          <span className="chapter-next-label">{pick(ui.nextChapter)}</span>
          <span className="chapter-next-title">
            {pick(next.title)}
            <span aria-hidden="true"> →</span>
          </span>
        </a>
      )}
    </article>
  )
}
