# Reverse Mortgage Guide (Consumer Edition)

> 🚧 **This information is still under review and is for general education only.
> Do not use it to make decisions about getting a reverse mortgage.** Speak with a
> HUD-approved counselor, and see [`COMPLIANCE.md`](./COMPLIANCE.md).

**🔗 Live site: https://mglass222.github.io/reverse-mortgage-learn/**

A plain-language, bilingual (**English ⇄ Korean**) web guide that helps homeowners
understand whether a U.S. **HECM** reverse mortgage might benefit them — built for
the Korean community in and around Los Angeles. It includes a simple estimator.

This is the **consumer edition**, split out from the practitioner-focused
[`reverse-mortgage`](https://github.com/mglass222/reverse-mortgage) project so the
two audiences stay cleanly separated. It shares that project's engine and design
system but uses its own plain-language content.

> ⚠️ **Compliance is the operator's responsibility.** Consumer-facing
> reverse-mortgage marketing is heavily regulated. The site auto-deploys to
> GitHub Pages, but the checklist in [`COMPLIANCE.md`](./COMPLIANCE.md) — certified
> Korean disclosures, a MAP-Rule copy scrub, and legal sign-off — must still be
> completed for a compliant public launch.

## Scope & disclaimers

- **Educational only.** The calculator gives a rough *estimate*, not a loan offer.
- **Korean is a first-draft translation** — for a real consumer site it must be
  replaced with certified, compliant disclosure language (see `COMPLIANCE.md`).
- **U.S. HECM only.**

## Content

Six plain-language chapters, each bilingual and reusing the shared diagrams:

1. **Is a Reverse Mortgage Right for You?**
2. **How It Works, in Plain Terms**
3. **Costs, Protections & Your Family**
4. **Other Options to Weigh** (downsizing, HELOC, refinancing, benefits)
5. **Common Questions** (ownership, foreclosure, spouse, Social Security/Medicaid)
6. **Next Steps** (required HUD counseling, questions to ask, the estimator)

## Tech stack

- **React 18** + **Vite 5**; **react-router-dom 6** (HashRouter)
- **Vitest** + **@testing-library/react** for tests
- Modern, sleek theme with **light/dark mode**; fonts: Sora, Hanken Grotesk,
  IBM Plex Mono, Noto Sans KR

## Getting started

```bash
npm install      # install dependencies
npm run dev      # dev server
npm test         # run the Vitest suite
npm run build    # production build to dist/
```

## Maintaining the data

| What | Where |
| --- | --- |
| Chapter content (EN/KO) | `src/content/chapters/` |
| UI strings (EN/KO) | `src/i18n/ui-strings.js` |
| FHA constants (lending limit, MIP rates) | `src/calculator/constants.js` |
| Representative PLF table | `src/calculator/plf-table.js` |

## Deployment

The site **auto-deploys to GitHub Pages on every push to `main`** (see
`.github/workflows/deploy.yml`). The Vite base path is `/reverse-mortgage-learn/`.
Complete the `COMPLIANCE.md` review before relying on it as a public-facing
marketing site.
