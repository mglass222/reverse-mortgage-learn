import { describe, it, expect } from 'vitest'
import chapters from './chapters-index.js'

const isBilingual = (o) => o && typeof o.en === 'string' && typeof o.ko === 'string'

describe('chapter registry', () => {
  it('has unique slugs', () => {
    const slugs = chapters.map((c) => c.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('every chapter has bilingual title, intro, sections, and takeaways', () => {
    for (const c of chapters) {
      expect(isBilingual(c.title)).toBe(true)
      expect(isBilingual(c.intro)).toBe(true)
      expect(c.sections.length).toBeGreaterThan(0)
      for (const s of c.sections) {
        expect(isBilingual(s.heading)).toBe(true)
        expect(s.body.length).toBeGreaterThan(0)
        expect(s.body.every(isBilingual)).toBe(true)
      }
      expect(c.takeaways.length).toBeGreaterThan(0)
      expect(c.takeaways.every(isBilingual)).toBe(true)
    }
  })

  it('contains the plain-language chapters in the expected order', () => {
    expect(chapters.map((c) => c.slug)).toEqual([
      'is-it-right',
      'how-it-works',
      'costs-and-protections',
      'alternatives',
      'faq',
      'next-steps',
    ])
  })

  it('has no Korean leaf identical to its English leaf', () => {
    const leaves = []
    const walk = (o) => {
      if (Array.isArray(o)) o.forEach(walk)
      else if (isBilingual(o)) leaves.push(o)
      else if (o && typeof o === 'object') Object.values(o).forEach(walk)
    }
    chapters.forEach(walk)
    for (const leaf of leaves) expect(leaf.ko).not.toBe(leaf.en)
  })
})
