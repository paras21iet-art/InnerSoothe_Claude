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

## Current Wireframe State (as of 2026-05-15)

### Screens Built and Locked
1. Pre-onboarding gate — 4 screens (age, safety, consent, crisis)
2. Onboarding — 4 screens (splash, name, category select, ready)
3. Pre / Post check-in **designer mockup** (`section-pre-checkin`, line 8532) — showcase reference only, NOT the production flow
4. **Home tab** (`section-relationship`)
5. **Today tab** (`section-today`)
6. **Relationships / Career / Health Category screens**
7. **Breakup Recovery Module** (`section-module-breakup-recovery`) — canonical module template
8. **STOP Technique Entry** (`section-breakup-stop`)
9. **STOP Step 1 (S — Stop)** (`section-breakup-stop-s1`) — LOCKED canonical practice-screen template
10. **STOP Step 2 (T — Take a Breath)** (`section-breakup-stop-s2`) — LOCKED v9 voice-driven box breathing
11. **STOP Step 3 (O — Observe)** (`section-breakup-stop-s3`) — LOCKED (2026-05-14) emotion + body chip grids
12. **STOP Step 4 (P — Proceed)** (`section-breakup-stop-s4`) — LOCKED (2026-05-14) 5 action cards
13. **Pre check-in (functional)** (`section-breakup-stop-pre-checkin`) — LOCKED (2026-05-14), wedged between STOP entry and S1
14. **Post check-in (functional, mandatory)** (`section-breakup-stop-post-checkin`) — LOCKED (2026-05-14), wedged between S4 and Complete
15. **STOP Complete (redesigned)** (`section-breakup-stop-complete`) — LOCKED (2026-05-14), shift visualization + session summary
16. **Progress tab** (`section-progress`) — LOCKED (2026-05-14), localStorage persistence + 30-day display cap
17. **Closure Letter Entry** (`section-cl-entry`) — 2026-05-15, technique entry + speakClEntry voice
18. **Closure Letter Pre Check-in** (`section-cl-pre-checkin`) — 2026-05-15, 8-emotion chip+dot grid
19. **Closure Letter Part 1** (`section-cl-p1`) — 2026-05-15, "The Truth" writing screen
20. **Closure Letter Part 2** (`section-cl-p2`) — 2026-05-15, "The Need" writing screen
21. **Closure Letter Part 3** (`section-cl-p3`) — 2026-05-15, "The Closing" + 4 ritual choice cards

### Screens In-Progress / Pending
- **Closure Letter Patch 5:** `section-cl-post-checkin` (emotion re-rating, `.spostc-*` engine)
- **Closure Letter Patch 6:** `section-cl-complete` + `clSaveSession()` + `clRenderComplete()`
- STOP Quick Reset mode (stub `startStopGuided()` exists; full implementation pending)
- PMR Entry + Complete — alignment to STOP canonical templates (in parallel chat session)
- Progress tab Phase 2: chart views, filter chips, archive with month navigation

### New canonical patterns established 2026-05-15
- **CL dispatch IIFE wrapper** — layered after STOP voice cancel wrapper; handles `cl-entry`, `cl-pre-checkin`, `cl-p1`, `cl-p2`, `cl-p3`; does NOT use DOMContentLoaded (correct pattern for late-in-file wrappers)
- **`clspc-*` DOM ID prefix** — all CL pre check-in dynamic IDs use this prefix to avoid collision with STOP's `spc-*` IDs
- **CL dispatch hook rule** — CL cases must NOT go inside `window.onStopSectionShow` (fires only for `breakup-stop-*` and `progress`)
- **`sec-stop-step` class reuse** — all CL screens use this class on their outer div to inherit the full STOP step-hdr CSS (back + audio + Crisis Support) without duplicating rules

### New canonical patterns established 2026-05-14
- **Pre/Post check-in chip+dot rating engine** (`.spc-*`, `.spostc-*`) — reusable for other modules
- **Voice generation counter** (`_seqGeneration`, `_s2SessionId`) — prevents speech chain leaks
- **showSection wrapper for voice cancellation** — idempotent layered with PMR wrapper
- **Speaker halo** — visual cue when voice playing (CSS keyframe + RAF polled)
- **Sage green `#5C8A60` for emotion improvement** — Complete + Progress + session cards
- **"Step [N]. [Step name]. [Brief instruction]." voice prefix** — applied to all S1–S4
- **Mandatory screen pattern** — no back button, no bottom nav, only audio + Crisis Support in header (post-checkin)
- **localStorage session persistence** — key `innersoothe_sessions`, schema documented in CHANGES.md

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
  - Voice narration: global `stopSpeak()` / `stopSpeakSequence()` / `stopCancelVoice()` / `stopToggleMute()`; each step defines `speakStopSX()`; dispatched 400ms after section show. S1 uses sequence; S2 uses entry phrase + per-phase `stopSpeak(phase.label)` at each breath boundary
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

1. ~~Build STOP Steps 1–4, pre/post check-in, Complete, Progress~~ — ALL DONE (2026-05-13/14)
2. **→ Closure Letter Patch 5:** `section-cl-post-checkin` — emotion re-rating using `.spostc-*` engine pattern (mirrors STOP post check-in)
3. **→ Closure Letter Patch 6:** `section-cl-complete` + `clSaveSession()` + `clRenderComplete()`
4. PMR Entry + Complete — alignment to STOP canonical templates (parallel chat session)
5. STOP Quick Reset mode (stub `startStopGuided()` exists; needs full implementation)
6. Psychologist sync on the 5 open questions
7. Resolve "heal from within" sub-brand
8. Source production-resolution illustration assets
9. Psychologist records voice (Cord Cutting first)
10. Set up full React Native modular architecture
11. Build React Native screens (onboarding first)
