# InnerSoothe — Context Primer

*Quick-start briefing for any new Claude session or collaborator. Read this before touching any file.*

---

## What This Project Is

**InnerSoothe** is an evidence-based self-therapy mobile app (React Native / Expo). It targets the gap between Calm/Headspace (meditation-only) and BetterHelp (expensive human therapy). The differentiator: psychologist-backed immersive clinical techniques (CBT, hypnotherapy, gestalt, energetic release) across three emotional categories — Relationships, Career/Burnout, Health/Anxiety.

**This repo is wireframes only.** The React Native app lives at `C:\Users\Admin\Documents\GitHub\InnerSoothe_App_Claude\innersoothe`. Do not create app code here.

---

## Single Non-Negotiable Rule

**One HTML file. All work happens in `innersoothe_wireframes_v3_12.html`.**

- No `.tsx`, `.jsx`, `.ts`, `.css`, `.js`, or any other file format
- No splitting into multiple HTML files
- No React Native code in this repo
- Edit the HTML file directly, in place, every time

---

## The Files You Need to Know

| File | Purpose |
|------|---------|
| `innersoothe_wireframes_v3_12.html` | The wireframe — the only file you edit |
| `innersoothe_project_brief__1_.md` | Single source of truth for all decisions, locked specs, open questions, decisions log |
| `style-guide.md` | Extracted visual specs — exact values from the wireframe (Section 20 documents STEP screen patterns) |
| `context-primer.md` | This file |
| `CHANGES.md` | Session-by-session changelog |
| `CLAUDE.md` | Claude-specific instructions (overrides all defaults) |

---

## Current Wireframe State (as of 2026-05-13)

### Screens Built and Locked
1. Pre-onboarding gate — 4 screens (age, safety, consent, crisis)
2. Onboarding — 4 screens (splash, name, category select, ready)
3. Pre check-in / Post check-in flow
4. **Home tab** (`section-relationship`)
5. **Today tab** (`section-today`)
6. **Relationships Category** (`section-category-relationships`)
7. **Career Category** (`section-category-career`)
8. **Health Category** (`section-category-health`)
9. **Breakup Recovery Module** (`section-module-breakup-recovery`) — **canonical module template**
10. **STOP Technique Entry** (`section-breakup-stop`) — Phase 1.5d
11. **STOP Step 1 (S — Stop)** (`section-breakup-stop-s1`) — **LOCKED canonical practice-screen template (2026-05-13)**

### Screens In-Progress / Pending
- STOP Step 2 (T — Take a Breath) — earlier breathing-orb build exists (May 11), needs rebuild to canonical S1 pattern
- STOP Step 3 (O — Observe) — design ready (ChatGPT), not yet built
- STOP Step 4 (P — Proceed) — design locked (4 action cards), not yet built
- STOP Complete screen — not yet built
- PMR (Progressive Muscle Relaxation) — 4 screens built (entry, setup, session, complete) but needs canonical-pattern alignment

### Section ID → `showSection()` Routing
The JS function `showSection(id)` prepends `'section-'` internally. So `showSection('category-relationships')` targets `id="section-category-relationships"`.

---

## Brand at a Glance

| Token | Value |
|-------|-------|
| Primary serif | Spectral (headings, quotes, large numbers) |
| Secondary serif | Cormorant Garamond (card titles, display text) |
| UI font | DM Sans (all body, labels, buttons) |
| Primary accent | `#A06832` (saffron) |
| Warm dark | `#1E1408` |
| Parchment (solid) | `#F9EDD8` (category/module phone shells) |
| Parchment (gradient) | `linear-gradient(160deg,#FAF0E4,#EDE0CC,#E2CEB8)` (Home/Today) |
| Subtitle strip | `#F0E8D8` |
| Relationships accent | `#B85C5C` (rose) |
| Health accent | `#2D4A2D` (dark forest green) |
| Career accent | `#A06832` (saffron, same as primary) |

---

## What Is Locked vs Open

### Locked (do not change without explicit instruction)
- All 11 screens listed above — layout, typography, colors, copy
- Canonical category hero gradient: `linear-gradient(to right, #F0E8D8 0%, rgba(240,232,216,0.55) 18%, rgba(240,232,216,0) 38%)`
- Canonical module screen pattern (from Breakup Recovery)
- **Canonical STEP screen pattern (from STOP Step 1):**
  - `.sX-bottom-stack` wrapper (32px horizontal padding, 16px gap, flex column) holds quote card, confirm card, CTA, progress dots — single source of truth for horizontal alignment
  - Hero image bleed via `mask-image: radial-gradient(ellipse 60% 70% at center 50%, black 0%, black 22%, rgba(0,0,0,0.78) 48%, rgba(0,0,0,0.32) 72%, rgba(0,0,0,0.08) 88%, transparent 100%)` — eliminates rectangular edge
  - Strict 780px viewport, no vertical scroll
  - Headline: Cormorant Garamond 300, 26px, `text-wrap: balance`
  - Body copy: DM Sans 300, 12px
  - Confirm circle default: 24×24px span, 1.5px solid `#A06832` border, transparent background, **ZERO inner HTML content** (no SVG, no checkmark, no span — completely empty)
  - Active state (`.confirmed`): saffron fill + white checkmark, only when class is applied by JS
  - No bottom nav on STEP screens (immersion via reduction)
- Bottom nav: 5 tabs — Home · Journal · **Today (center FAB)** · Progress · Settings
- `.mod-thumb`: `border-left: 1px solid rgba(33,24,12,0.10)` (category screen thumbnails)
- `.tech-thumb`: `border-right: 1px solid rgba(33,24,12,0.10)` (module screen thumbnails)
- All illustration asset paths under `assets/illustrations/`

### Open Questions (pending psychologist sync)
1. Health category "Explore modules" label — `#2D4A2D` or unify to `#A06832` saffron?
2. Green tones in splash/dark screens — intentional or lift the "no green" rule?
3. Crisis 🆘 button placement on every in-app screen (only on Home + Breakup Recovery module + STOP screens currently)
4. Category color tints — Relationships pink / Health sage / Career gold — needs sign-off
5. Single-screen vs multi-screen technique format (therapeutic question)

---

## Copy Protection Rule (non-negotiable)

Quoted strings, code blocks, and explicitly-labelled copy in any prompt are **FINAL COPY**. Implement the exact characters, words, capitalisation, and punctuation — no silent paraphrasing.

**Before reporting any task complete:** grep every quoted string from the prompt and confirm it exists verbatim in the modified file.

**Do flag proactively** (before implementing) if you spot: typos, contradictions with locked decisions, asset path mismatches, or layout problems.

---

## Regression Pattern Lesson (from STOP S1 iteration)

When a visual issue keeps recurring after multiple CSS-only fixes (e.g. the confirm circle's active state coming back four times), the root cause is usually in the HTML markup itself, not CSS. The investigation must go to the literal HTML node and ask "what's actually inside this element?" — not just "what CSS is rendering it this way?" This applies to any future regression-prone element.

---

## After Every Session

1. Update `innersoothe_project_brief__1_.md` — mark resolved items locked, append to Decisions Log, update Next Steps order
2. Append to `CHANGES.md` if a section was added or significantly changed
3. Update `style-guide.md` if new visual values were introduced
4. Update this primer if the wireframe state changed (new screens built, questions resolved, canonical patterns established)

---

## Key Pending Work (Next Steps, in order)

1. Build STOP Step 2 (T — Take a Breath) using canonical S1 pattern + new ChatGPT design (rebuild over the earlier May 11 breathing orb work)
2. Build STOP Step 3 (O — Observe) using canonical S1 pattern + ChatGPT design (chip grids for Emotions + Body)
3. Build STOP Step 4 (P — Proceed) using canonical S1 pattern + 4 action cards spec (Rest and breathe / Journal this moment / Talk to someone safe / Do something gentle)
4. Build STOP Complete screen
5. Align PMR screens to canonical practice-screen pattern
6. Psychologist sync on the 5 open questions
7. Resolve "heal from within" sub-brand
8. Source production-resolution illustration assets
9. Psychologist records voice (Cord Cutting first)
10. Set up full React Native modular architecture
11. Build React Native screens (onboarding first)
