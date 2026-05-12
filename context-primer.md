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

## The Four Files You Need to Know

| File | Purpose |
|------|---------|
| `innersoothe_wireframes_v3_12.html` | The wireframe — the only file you edit |
| `innersoothe_project_brief__1_.md` | Single source of truth for all decisions, brand rules, open questions, decisions log |
| `style-guide.md` | Extracted visual specs — exact values from the wireframe |
| `context-primer.md` | This file |
| `CHANGES.md` | Session-by-session changelog |
| `CLAUDE.md` | Claude-specific instructions (overrides all defaults) |

---

## Current Wireframe State (as of 2026-05-11)

### Screens Built (in order)
1. Pre-onboarding gate — 4 screens (age, safety, consent, crisis)
2. Onboarding — 4 screens (splash, name, category select, ready)
3. Pre check-in / Post check-in flow
4. **Home tab** (`section-relationship`) — greeting, hero, Continue card, 3 category cards, Recommended, Journey stats
5. **Today tab** (`section-today`) — Daily Intention, emotion slider, 3 exercise cards
6. **Relationships Category** (`section-category-relationships`) — hero, 3 module cards
7. **Career Category** (`section-category-career`) — hero, 3 module cards (v2 illustrations)
8. **Health Category** (`section-category-health`) — hero, 3 module cards
9. **Breakup Recovery Module** (`section-module-breakup-recovery`) — **canonical module template**, 3 free + 3 premium techniques, sticky upsell banner, progress card, Crisis Support chip
10. **STOP technique** (`section-breakup-stop`, `breakup-stop-s1` through `breakup-stop-complete`) — parchment entry + 4 guided steps (S/T/O/P) + complete scaffold. S1 has static saffron orb; S2 has CSS breathing orb animation. S3/S4/Complete = partial/scaffold.
11. **PMR technique** (`section-breakup-pmr-entry`, `-setup`, `-session`, `-complete`) — entry (canonical template), setup (position + safety), session (body schematic SVG + active muscle highlight + auto-dim), complete scaffold.

Dark therapy screens deprecated — parchment-with-reduction is the current design language for all technique screens.

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
- All 9 screens listed above — layout, typography, colors, copy
- Canonical category hero gradient: `linear-gradient(to right, #F0E8D8 0%, rgba(240,232,216,0.55) 18%, rgba(240,232,216,0) 38%)`
- Bottom nav: 5 tabs — Home · Journal · **Today (center FAB)** · Progress · Settings
- Technique card exact titles and descriptions (see project brief § Breakup Recovery)
- `.mod-thumb` class: `border-left: 1px solid rgba(33,24,12,0.10)` (category screen thumbnails)
- `.tech-thumb` class: `border-right: 1px solid rgba(33,24,12,0.10)` (module screen thumbnails)
- All illustration asset paths under `assets/illustrations/`

### Open Questions (pending psychologist sync)
1. Health category "Explore modules" label — `#2D4A2D` or unify to `#A06832` saffron?
2. Green tones in splash/dark screens — intentional or lift the "no green" rule?
3. Crisis 🆘 button placement on every in-app screen (currently only on Home + Breakup Recovery module)
4. Category color tints — Relationships pink / Health sage / Career gold — needs sign-off
5. Single-screen vs multi-screen technique format (therapeutic question)

---

## Copy Protection Rule (non-negotiable)

Quoted strings, code blocks, and explicitly-labelled copy in any prompt are **FINAL COPY**. Implement the exact characters, words, capitalisation, and punctuation — no silent paraphrasing.

**Before reporting any task complete:** grep every quoted string from the prompt and confirm it exists verbatim in the modified file.

**Do flag proactively** (before implementing) if you spot: typos, contradictions with locked decisions, asset path mismatches, or layout problems.

---

## After Every Session

1. Update `innersoothe_project_brief__1_.md` — mark resolved items locked, append to Decisions Log, update Next Steps order
2. Append to `CHANGES.md` if a section was added or significantly changed
3. Update `style-guide.md` if new visual values were introduced
4. Update this primer if the wireframe state changed (new screens built, questions resolved)

---

## Key Pending Work (Next Steps, in order)

1. STOP Phase 2.2+: S3 (Observe) + S4 (Proceed) screens + complete screen real content
2. STOP Phase 3: Quick Reset mode
3. Psychologist sync: review Home v5 + Today + all three category screens
4. Psychologist sync: approve category tint colors (pink/sage/gold)
5. Psychologist sync: green in splash/dark screens
6. Psychologist sync: crisis button placement on all in-app screens
7. Psychologist sync: onboarding modifications
8. Resolve "heal from within" sub-brand
9. Source production-resolution illustration assets (current repo assets are low-res wireframe crops)
10. Psychologist records voice (Cord Cutting first)
11. Set up full React Native modular architecture
12. Build React Native screens (onboarding first)
