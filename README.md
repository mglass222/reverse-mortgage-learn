# Reverse Mortgage Guide (Consumer Edition)

A plain-language, bilingual (**English ⇄ Korean**) web guide that helps homeowners
understand whether a U.S. **HECM** reverse mortgage might benefit them — built for
the Korean community in and around Los Angeles. It includes a simple estimator.

This is the **consumer edition**, split out from the practitioner-focused
[`reverse-mortgage`](https://github.com/mglass222/reverse-mortgage) project so the
two audiences stay cleanly separated. It shares that project's engine and design
system but uses its own plain-language content.

> ⚠️ **Not launched.** Consumer-facing reverse-mortgage marketing is heavily
> regulated. See [`COMPLIANCE.md`](./COMPLIANCE.md) — this site must clear a
> compliance/legal review before it goes public. Deployment is intentionally
> **manual only** (see `.github/workflows/deploy.yml`).

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

## Deploying (when cleared for launch)

1. Complete the `COMPLIANCE.md` review and get sign-off.
2. Make the repo public (or use another static host) and enable **GitHub Pages →
   Build and deployment → GitHub Actions**.
3. Run the **CI / Deploy** workflow manually (Actions → Run workflow). The Vite
   base path is `/reverse-mortgage-learn/`.
