import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'rm-lang'
const LanguageContext = createContext(null)

function readInitialLang() {
  try {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === 'ko' || stored === 'en') return stored
    }
  } catch {
    /* ignore storage failures */
  }
  return 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readInitialLang)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggle = () => setLang((l) => (l === 'en' ? 'ko' : 'en'))
  const pick = (bilingual) => bilingual[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, pick }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
