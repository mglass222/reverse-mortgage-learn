# Compliance Checklist — Consumer Edition

> **Not legal advice.** This is an engineering checklist to track regulatory
> considerations for the consumer-facing edition of this site. Reverse-mortgage
> advertising to seniors is heavily regulated. **Before any consumer version goes
> live, a compliance attorney or the partnering lender's compliance team must
> review it.** Items below are starting points, not a substitute for that review,
> and rules change — confirm current versions.

## Risk posture

The **lowest-risk posture is purely educational**: no lead capture, no specific
lender or offer, no "apply here," no government-affiliation implication. Risk
escalates the moment the site markets a particular lender, captures contact
information, or implies the visitor can obtain a loan.

- [ ] Decide and document the posture (education-only vs. lead-gen vs. lender-affiliated).
- [ ] If anything beyond education-only, route to full legal review.

## Federal advertising rules

- [ ] **MAP Rule (Regulation N / 12 CFR 1014)** — no material misrepresentations
      in mortgage ads (explicitly covers reverse mortgages). Scrub for the classic
      prohibited impressions:
  - [ ] No implication it is a **government benefit** or that the lender is
        **endorsed by / affiliated with HUD, FHA, or "the government."**
  - [ ] No "**you can never lose your home**" / "can't be foreclosed" (false —
        default on taxes/insurance or moving out can trigger foreclosure).
  - [ ] No "**no payments**" without clarifying the borrower still owes
        **property taxes, homeowners insurance, and upkeep.**
  - [ ] No "**free**"/"no cost" language where costs exist.
  - [ ] No overstated equity/income or "guaranteed lifetime income" claims.
- [ ] **TILA / Regulation Z §1026.24** — avoid "triggering terms" (specific
      payment/finance-charge figures) that would force additional ad disclosures;
      keep the calculator framed as an *educational estimate, not an offer*.
- [ ] **UDAAP / FTC Act §5** — no unfair or deceptive impressions overall.
      (See the CFPB 2015 reverse-mortgage advertising study and enforcement
      actions, e.g., American Advisors Group consent orders, for the patterns
      regulators target.)

## California (LA audience + seniors)

- [ ] **Civil Code §§1923 et seq.** — reverse-mortgage requirements: the
      **"Important Notice" disclosure**, applicant worksheet, and the **7-day
      cooling-off period after counseling** before an application is taken or fees
      charged.
- [ ] **DFPI** (Dept. of Financial Protection & Innovation) advertising oversight;
      elder-financial-protection rules.
- [ ] **No prohibited cross-selling** — do not market the reverse mortgage tied to
      buying an annuity / insurance / other financial product (federal HERA +
      state prohibitions).

## Language access (Korean) — specific obligation

- [ ] **California Civil Code §1632 (Translation Act)** — covers agreements
      negotiated *primarily* in Spanish, Chinese, Tagalog, Vietnamese, or
      **Korean**, and requires a translated copy of the contract/key disclosures
      in that language before signing. Marketing/originating in Korean engages it.
- [ ] **Heightened fair-lending / LEP scrutiny** for limited-English-proficiency
      seniors. Non-English disclosures must be consistent with the English ones.
- [ ] Replace the current **first-draft Korean** with **certified, compliant
      Korean disclosure language** (the in-app "translations pending expert
      review" note is appropriate only for the educational draft).

## If the site captures leads or refers to a lender

- [ ] **NMLS / SAFE Act** licensing; ads must carry the **NMLS unique ID** and
      required notices (e.g., Equal Housing).
- [ ] **RESPA Section 8** — no kickbacks/compensation for referrals.
- [ ] **GLBA** privacy + **CCPA/CPRA** if any personal information is collected.

## Counseling

- [ ] Do not misstate or downplay the **mandatory HUD-approved counseling** step;
      present it accurately and prominently.

## Already aligned in the current consumer draft

These are handled well in `src/content/consumer/` and should be preserved:

- States the borrower **still pays property taxes, insurance, and upkeep**.
- Frames **non-recourse accurately, with conditions** ("never owe more than the
  home is worth" tied to sale/insurance, not an absolute "can't lose the home").
- Leads to **HUD-approved counseling** as the required first step.
- Labels the **calculator an educational estimate, not an offer.**

## Pre-launch gate

- [ ] Compliance attorney / lender compliance sign-off obtained and recorded.
- [ ] Certified Korean disclosures in place.
- [ ] Final copy scrubbed against the MAP Rule items above.
- [ ] Decision recorded on whether this lives in a separate repo/domain with its
      own approval workflow (recommended if it becomes lender-affiliated marketing).
