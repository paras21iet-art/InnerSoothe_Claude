# CHANGES

## 2026-05-08 — Health Category Screen built (section-category-health)

**File:** `innersoothe_wireframes_v3_12.html`  
**Section added:** `section-category-health` — inserted after `section-category-career`, before `section-breakup-paths`

### Structure (mirrors Relationships and Career):
- Hero band 340px: `assets/illustrations/Health/health-hero.png` · canonical gradient overlay
- Subtitle strip (parchment #F0E8D8): "Move through anxiety, stress, grief, and inner tension."
- "Explore modules" header: #2D4A2D dark forest green (deviation from saffron — open question)
- Three module cards 138px:

| Card | Icon (Lucide) | Thumbnail | Tagline |
|------|---------------|-----------|---------|
| 1. Anxiety | Leaf (#2D4A2D) | health-anxiety.png | Find calm and regain a sense of control. |
| 2. Stress | Wind (#2D4A2D) | health-stress.png | Release tension and restore your energy. |
| 3. Grief | Heart (#2D4A2D) | health-grief.png | Heal with compassion and gentle support. |

- Card bg: `rgba(242,250,240,0.6)` (sage-tinted)
- Icon circle: `rgba(180,200,170,0.35)`
- Back button: `showSection('relationship')` → Home
- HomeScreen Health card `onclick` updated to `showSection('category-health')`
- No crisis chip (consistent with other category screens)

### Screenshots:
- `screenshots/health-category/01-hero.png`
- `screenshots/health-category/02-modules.png`
- `screenshots/health-category/03-home-to-health.png`

### What was not changed:
- All other sections (Relationships, Career, Today, Home, etc.)
- Hero heights, back button positioning, bottom nav, CSS/JS

---

## 2026-05-08 — Category hero gradient canonicalised (#F0E8D8 0% → 18% → 38%)

**File:** `innersoothe_wireframes_v3_12.html`  
**Sections changed:** `section-category-relationships` (line 8721) and `section-category-career` (line 8873)

### What changed:
Both gradient overlay declarations replaced with the canonical value:
```
linear-gradient(to right, #F0E8D8 0%, rgba(240,232,216,0.55) 18%, rgba(240,232,216,0) 38%)
```

| Section | Old gradient | New gradient |
|---------|-------------|--------------|
| Relationships | `#F0E8D8 0%, rgba(…,0.85) 22%, rgba(…,0) 45%` | canonical (above) |
| Career | `#F0E8D8 0%, rgba(…,0.95) 28%, rgba(…,0.40) 48%, rgba(…,0) 58%` | canonical (above) |

**Shared class?** No — both gradients are inline `style` attributes. Two separate edits were required.

### What was not changed:
- All other sections, hero heights, title positioning, subtitle text, module cards, navigation, any CSS/JS

### Screenshots:
- `screenshots/category-hero-fade-fix/relationships.png`
- `screenshots/category-hero-fade-fix/career.png`

---

## 2026-05-08 — Career Category illustrations replaced with v2 set

**File:** `innersoothe_wireframes_v3_12.html`  
**Section:** `section-category-career` only — no other sections modified.

### Four `<img>` src attributes updated inside `section-category-career`:

| Element | Old src | New src |
|---------|---------|---------|
| Hero band | `assets/illustrations/Career/career-hero.png` | `assets/illustrations/Career/career-hero-v2.png` |
| Card 1 thumbnail (Burnout) | `assets/illustrations/Career/burnout.png` | `assets/illustrations/Career/career-burnout-v2.png` |
| Card 2 thumbnail (Work Life Balance) | `assets/illustrations/Career/work-life-balance.png` | `assets/illustrations/Career/career-worklife-v2.png` |
| Card 3 thumbnail (Imposter Syndrome) | `assets/illustrations/Career/imposter-syndrome.png` | `assets/illustrations/Career/career-imposter-v2.png` |

### What was not changed:
- All other sections (section-category-relationships, section-relationship, section-today, etc.)
- Hero band height, gradient overlay, title, subtitle, section header
- Module card structure, ordering, icons, fonts, colours
- Back button, bottom nav, any CSS or JS

### Asset note:
v2 files were delivered with double extensions (`career-hero-v2.png.png`). 
Renamed to strip the duplicate `.png` before use.

### Screenshot:
`screenshots/career-v2/career-category-updated.png`

---

## 2026-05-11 — Phase 2a-revised: STOP guided flow animation fixes (S1 + S2)

**File:** `innersoothe_wireframes_v3_12.html`

### Bug fixed:
- Navigation completely broken: missing `</script>` closing tag after `window.onStopSectionShow` caused browser to parse all subsequent HTML as JS. Inserted `</script>` at correct location.

### S1 (Stop — step 1): SVG centerpiece removed + static orb added
- Removed concentric ellipse SVG from `.sec-stop-s1`
- Added `.s1-still-stage` / `.s1-still-orb` / `.s1-still-halo` — fully static warm saffron orb (90px), no animation. Embodies stillness.

### S2 (Think — step 2): Breathing orb replaces concentric rings
- Removed old `.breath-center` / ring-R SVG animation
- Added div-based breathing orb (130px) + halo with CSS class transitions: `.inhale` / `.hold-top` / `.exhale` / `.hold-bottom`
- `runBreathingCycles()` rewritten to apply classes with `transform 4000ms cubic-bezier(0.4,0,0.4,1)` transitions; hold phases use `transition:none`
- Session-ID guard (`_s2SessionId`) prevents stale callbacks after navigation
- `onStopSectionShow` reset updated to target new selectors

### Screenshots:
- `screenshots/stop-rebuild/02-step-s-v2.png` — S1 with still orb
- `screenshots/stop-rebuild/03-step-t-v2.png` — S2 with breathing orb (inhale state)

---

## 2026-05-11 — PMR (Progressive Muscle Relaxation) — 4 screens built

**File:** `innersoothe_wireframes_v3_12.html`

### Sections added (all inserted before `section-hypnodrama`):
1. `section-breakup-pmr-entry` — entry screen, canonical STOP template (hero img placeholder, wordmark, quote card, info rows, CTA)
2. `section-breakup-pmr-setup` — preparation screen (position cards Seated/Lying, How It Works, safety bullets, env setup, insight quote, sticky CTA)
3. `section-breakup-pmr-session` — immersive session (no bottom nav; body schematic SVG 220×320px, active muscle in saffron with SVG pulse animate, muscle name + caption, Pause/Replay/Restart/Skip controls, progress bar)
4. `section-breakup-pmr-complete` — scaffold placeholder ("Well done.", Back to module)

### Key CSS additions (`.pmr-*` classes):
- `.pmr-phone`: 370×780px shell (wider than STOP practice 330×715px)
- `.pmr-dimmed`: dims session bar, phase eyebrow, muscle name, caption, controls — schematic stays visible
- `prefers-reduced-motion`: disables SVG `<animate>` element

### JS additions:
- `pmrStartSession()` — triggered from Setup CTA onclick; starts demo + dim timer
- `pmrRunDemo()` — cycles 4 muscle demo states every 8s
- `pmrResetDim()` — 5s inactivity timer adds `.pmr-dimmed`; any tap removes it

### Navigation wired:
- `section-module-breakup-recovery` Card 2 onclick: `showSection('breakup-pmr')` → `showSection('breakup-pmr-entry')`

### Copy validation: all 21 quoted strings confirmed verbatim in file.

### Screenshots:
- `screenshots/pmr/01-entry.png`
- `screenshots/pmr/02-setup-top.png`
- `screenshots/pmr/03-setup-bottom.png`
- `screenshots/pmr/04-session.png`
- `screenshots/pmr/05-session-dimmed.png`
- `screenshots/pmr/06-complete-scaffold.png`

---

## 2026-05-11 — PMR session: body schematic swapped to anatomical SVG + TTS wired

**File:** `innersoothe_wireframes_v3_12.html`

### Body schematic replaced:
- Old: inline capsule SVG (`viewBox="0 0 110 175"`) with `<g class="pmr-active-muscle">` innerHTML swap
- New: `<svg class="pmr-body" viewBox="0 0 200 500">` with 18 individually-IDed `<path>` elements (head, neck, chest, abdomen, hips, 4×arms, 2×hands, 2×thighs, 2×calves, 2×feet)
- Active highlight: CSS `.pmr-active` class (fill + stroke `#A06832`, `pmr-muscle-pulse` keyframe animation 15s) replaces innerHTML swap
- `prefers-reduced-motion`: animation disabled, static `fill-opacity: 0.55`

### Demo rotation JS rewritten:
- `_pmrDemoStates[]` + `pmrApplyState()` + `pmrRunDemo()` → `PMR_MUSCLES[]` + `pmrTick()`
- `pmrTick()` queries `.pmr-body #<id>` and toggles `.pmr-active`; calls `window.pmrSpeak()` (TTS patch)
- `pmrStartSession()` updated: `_pmrDemoIdx → pmrIdx`, `pmrRunDemo → pmrTick`
- Interval remains 12000ms (recursive setTimeout)

### Controls fully wired:
- Restart: `pmrIdx = 0; pmrTick();`
- Skip: `pmrTick();`
- Replay: re-speaks current caption (from TTS patch)
- Pause: stops speech (from TTS patch)
- Sound: mute toggle (from TTS patch)

### Screenshots updated:
- `screenshots/pmr/04-session.png` — body with right-calf highlighted saffron
- `screenshots/pmr/05-session-dimmed.png` — same, UI dimmed, muscle stays visible

---

## 2026-05-12 — PMR session: three-layer body map redesign

**File:** `innersoothe_wireframes_v3_12.html`

### Old system removed:
- 18-path segmented anatomical SVG (visible polygon geometry per muscle group)
- `.pmr-body path { fill: none; }` + solid saffron fill/stroke on `.pmr-active`

### New three-layer architecture:
- **Layer 1 — visible silhouette**: 6 overlapping bezier paths inside `<g class="pmr-silhouette">`, drawn back-to-front so each element's `fill:#FAF0E4` covers junction strokes of earlier elements. No visible segmentation. Paths: torso, right arm, left arm, right leg, left leg, head+neck (drawn last, on top).
- **Layer 2 — invisible regions**: 11 transparent paths inside `<g class="pmr-regions">` with IDs matching `PMR_MUSCLES[]` array (`chest`, `abdomen`, `hips`, `right-upper-arm`, `left-upper-arm`, `right-forearm`, `left-forearm`, `right-thigh`, `left-thigh`, `right-calf`, `left-calf`). No fill, no stroke by default.
- **Layer 3 — highlight**: `.pmr-active` class sets `fill:#A06832; fill-opacity:0.22; filter:url(#pmr-bloom)` + `pmr-muscle-pulse` animation (0.14→0.28 opacity, 4s). SVG `<filter id="pmr-bloom">` uses `feGaussianBlur stdDeviation="10"` for feathered watercolor edge.

### No JS changes:
- `pmrTick()` uses `.pmr-body path.pmr-active` (selects region paths only) and `.pmr-body #<id>` (finds region paths by ID) — both still valid with new structure.

### Screenshots updated:
- `screenshots/pmr/04-session.png` — clean silhouette, soft saffron bloom on right calf
- `screenshots/pmr/05-session-dimmed.png` — same, UI dimmed, body + highlight visible

---

## 2026-05-13 — STOP Step 1 (S — Stop) LOCKED

Phase 2a complete. Canonical practice-screen template established. Key landings:
- Hero image bleed via radial-gradient mask-image (no rectangular edge)
- `.s1-bottom-stack` wrapper architecture for vertical stack alignment
- Strict 780px viewport restored
- Confirm circle default: empty outlined circle, zero inner HTML content (root-cause HTML fix after multiple surface CSS patches)
- Confirm card default border matches quote card exactly; saffron border+glow gated to `.confirmed` selector only
- `outline: none` on confirm button suppresses browser focus ring
- text-wrap: balance on headline for natural line breaks
- Architecture inherits to S2/S3/S4

---

## 2026-05-13 — Phase 2b: STOP Step 2 voice wired + pattern pill fix

**File:** `innersoothe_wireframes_v3_12.html`

### Voice narration added (S2):
- `speakStopS2()` function added to S2 `<script>` block: speaks "Box breathing. Two cycles. Follow the orb." on section entry (dispatched 400ms after show via `onStopSectionShow`)
- `stopSpeak(phase.label)` called at each phase boundary inside `runS2BreathingCycles()` — speaks 'Breathe in', 'Hold', 'Breathe out', 'Hold' in sync with orb animation
- Stale `startStopS2Breathing()` reference in `onStopSectionShow` dispatch fixed → `speakStopS2()`

### Pattern pill single-line fix:
- `.s2-pattern-pill` font-size: 11px → 10px
- `.s2-pattern-pill` horizontal padding: 16px → 12px
- "In through nose · Hold · Out through mouth · Hold" renders on one line at 370px phone width

### Screenshots:
- `screenshots/stop-rebuild/s2-04-voice-fixed.png` — inhale state, phase label "Breathe in"
- `screenshots/stop-rebuild/s2-05-full-fixed.png` — exhale state, full fixed screen

### What was not changed:
- All other sections, S1, PMR, any other STEP screens
- Breathing animation CSS, session-ID guard, cycle/countdown logic
- CTA, progress dots, bottom-stack layout

---

## 2026-05-13 — STOP Step 2 (T — Take a Breath) LOCKED

**Section locked:** `section-breakup-stop-s2`
**Architecture:** v9 voice-driven phase timing.

What was built:
- Box breathing 4-phase cycle (Inhale → Hold-top → Exhale → Hold-bottom), 4 required cycles + optional extend
- speakChain pattern: 5 chained utterances per phase (phase name + 4 counts), chained via utterance.onend
- Visual count + orb scale step fire on each utterance's onstart for guaranteed voice/visual sync
- Phase advances only after final count's onend (not on fixed timer)
- 4-segment timeline progress indicator with active/completed states and per-step fill bar
- Cycle counter, phase label (Cormorant italic), CTA gating after 4 cycles, "One more cycle" extend link
- Entry intro flow: instructional utterance → 2.5s pause → "Beginning now" → cycle starts
- Muted mode handled: visual continues without speech, consistent rhythm

Iteration cost: 9 versions (v4 → v9) over the build. Key learning: voice-driven architecture is the correct hierarchy for guided audio screens; fixed-timer architectures cannot sync with variable TTS performance. Documented as canonical pattern in style-guide.md Section 21.

Cleanup: temporary _diag diagnostic logging removed at lock time.

---

## 2026-05-14 — STOP Phase 2c: full pre→post→Complete→Progress flow

**File:** `innersoothe_wireframes_v3_12.html`

### Sections built / rebuilt this session:
1. **STOP Step 3 (O — Observe)** — `section-breakup-stop-s3`. Emotion chips (10) + body location chips (5). State captured to window.
2. **STOP Step 4 (P — Proceed)** — `section-breakup-stop-s4`. 5 action cards (single-select). State captured to window. CTA changed from "Complete STOP →" → "I've chosen. Continue →" (overpromise fix).
3. **Pre check-in screen** — `section-breakup-stop-pre-checkin`. Saffron+parchment, back button to entry, no bottom nav. New chip+dot engine (`.spc-*`).
4. **Post check-in screen** — `section-breakup-stop-post-checkin`. MANDATORY (no back, no nav). Chips auto-sync from pre. New chip+dot engine (`.spostc-*`).
5. **Complete screen rebuild** — `section-breakup-stop-complete`. Saffron checkmark hero, YOUR SHIFT card (sage green for improvement), THIS SESSION card (4 rows: emotion + body + breathing + next step). Replaced 3-line placeholder.
6. **Progress tab** — `section-progress`. Stats card + chronological session list (30-day cap) + localStorage persistence + mock seed.

### Key architectural fixes:
- **Voice system unified fix:** generation counter on `_s2SessionId` and `_seqGeneration` invalidates in-flight chains. `showSection` wrapped (idempotent) to auto-cancel voice on every navigation. Resolved chain leak after `speechSynthesis.cancel()`.
- **Voice standardization:** all 4 STOP steps now use "Step [N]. [Step name]. [Brief instruction]." prefix pattern.
- **Speaker halo canonical pattern:** saffron CSS pulse on `.stop-mute-btn` when `speechSynthesis.speaking` is true (RAF polled).
- **Back button overhaul:** S1→entry, S2→S1, S3→S2, S4→S3. No confirm dialogs.
- **showSection wrapper dispatcher gate extended** from `breakup-stop-` only to also include `'progress'` (so `renderProgress()` fires).

### Wording / UX iterations locked:
- Pre eyebrow: "EMOTION CHECK-IN · BEFORE" + CTA "I'm ready →"
- Post eyebrow: "EMOTION CHECK-IN · AFTER" + CTA "See your shift →"
- S3 headline: "What are you noticing?" / subhead: "Now, notice what you're feeling, and where in your body."
- S4 CTA: "I've chosen. Continue →"
- Complete primary CTA: "Return to Breakup Recovery →"
- Complete THIS SESSION labels: "Emotion noticed:" + "Tightness in body noticed at:"
- Scale helper on pre/post: "1/5 = a little · 5/5 = a lot"
- Removed: InnerSoothe quote card on Complete, decorative botanical leaves on Complete

### Color / visual logic:
- Sage green `#5C8A60` for emotion shift improvement (Complete YOUR SHIFT + Progress avg shift + Progress session card ↓N marker).
- Neutral dark for stable / worsened (NO red — therapeutic decision, avoids shame).

### Voice copy locked:
- Pre check-in entry: "Before we begin. Notice how you're feeling. Pick up to three emotions and rate each."
- Post check-in entry: "Now. Let's check in again. Rate the same feelings to see what shifted."
- S3 entry: "Step three. Observe. Now notice what you're feeling, and where in your body."
- S4 entry: "Step four. Proceed. Choose your next gentle step — the thoughtful one, not the impulsive one."

### Data persistence:
- localStorage key: `innersoothe_sessions`
- Schema per session: `{id, date, technique, module, pre, preEmojis, post, cycles}`
- Save call: `stopSaveSession()` fired on Complete entry via `stopRenderComplete`'s dispatcher hook.
- Render call: `renderProgress()` fired when section 'progress' is shown.
- Mock seed of 4 historical sessions if storage empty.
- Retention: forever. Display cap: 30 days default.

### Layout fixes:
- Status bar padding-top: 8px on Progress phone shell (was clipping against rounded corner).
- Complete screen tightened to fit single viewport (no scroll): hero padding 6px 0 2px, row gap 6px on THIS SESSION, CTA gap 5px.

### Side update:
- Old duplicate `section-progress` (designer mockup) renamed to `section-progress-mockup` to resolve HTML invalid duplicate ID.

---

## 2026-05-15 — Closure Letter — Patches 1–4 + cosmetic fixes

**File:** `innersoothe_wireframes_v3_12.html`

### Sections built this session:
1. **CL Entry** — `section-cl-entry`. Technique entry screen: parchment shell, canonical `step-hdr` pattern (back chevron + audio toggle + Crisis Support), `speakClEntry` voice ("If you're here, something has been left unsaid..."), "Begin →" CTA → `cl-pre-checkin`. Wired from Breakup Recovery module card 3 (`showSection('cl')`).
2. **CL Pre Check-in** — `section-cl-pre-checkin`. 8-emotion chip+dot grid (💔 Grief · 😔 Sadness · 😠 Anger · 😞 Guilt · 😳 Shame · 🫥 Loneliness · 😰 Anxiety · 😶 Numb). Select up to 3, rate each 1–5 via dot tap. `clspc-*` DOM ID prefix avoids collision with STOP's `spc-*` IDs.
3. **CL Part 1 "The Truth"** — `section-cl-p1`. Full-height textarea, shared `.cl-*` CSS, CTA gated by non-empty textarea. Progress dots 1●–2–3.
4. **CL Part 2 "The Need"** — `section-cl-p2`. Same shared CSS. CTA gated. Progress dots 1–2●–3.
5. **CL Part 3 "The Closing" + ritual cards** — `section-cl-p3`. Fixed-height textarea (80px) + 4 closure ritual choice cards (keep / delete / burn / read-aloud). CTA disabled until textarea non-empty AND choice selected. `clCompleteTheLetter()` → `cl-post-checkin`. Progress dots 1–2–3●.

### Architecture established:
- **CL dispatch IIFE wrapper** — layered after STOP voice cancel wrapper (line ~18347). Extends `showSection` for `cl-entry`, `cl-pre-checkin`, `cl-p1`, `cl-p2`, `cl-p3`. Does NOT use DOMContentLoaded (correct for late-in-file wrappers placed after `showSection` is declared).
- **CL pre check-in IIFE** — wedged immediately after `<!-- /section-cl-pre-checkin -->`. `window.clBuildPreGrid`, `window.clPreDot`, `window.clPreBeginTap`.
- **Bug fix:** dispatch cases for CL were mistakenly placed inside `window.onStopSectionShow` (which only fires for `breakup-stop-*` and `progress`). Moved to dedicated CL IIFE wrapper.
- **Header verbatim copy fix:** both CL entry and CL pre check-in headers replaced verbatim from STOP pre check-in's working flex `step-hdr` pattern to resolve audio toggle + Crisis Support chip overlap.

### Shared CSS classes (`.cl-*`):
`.cl-write-stack` · `.cl-field-label` · `.cl-textarea` · `.cl-helper` · `.cl-cta` · `.cl-pd-row` · `.cl-pd` · `.cl-pd-line` · `.cl-choice-section` · `.cl-choice-card` · `.cl-choice-title` · `.cl-choice-subline`

Shell classes: `.sec-cl-p1` / `.sec-cl-p2` / `.sec-cl-p3` — 370×780px, `background: #F9EDD8`

### Cosmetic fixes (same session):
- P3 textarea scrollbar hidden: `scrollbar-width: none; -ms-overflow-style: none` + `::-webkit-scrollbar { display: none }`
- Progress dots lifted: `.cl-write-stack` padding `0 32px 56px` (from 20px → 32px → 56px, two passes)
- Part 3 compensation to prevent overflow: textarea 80px, write-stack gap 8px, choice-section gap 4px

### Voice copy locked:
- CL entry: "If you're here, something has been left unsaid. That's heavy to carry. The closure letter is a way to put that weight down. You'll write in three parts — what happened, what you needed, and what you want to say now. Not to send. Just to release."
- CL pre check-in: "Before we begin. Notice how you're feeling. Pick up to three emotions and rate each."
- Part 1: "Part one. The truth. Write what happened — and what it did to you. Don't soften it. This is your space."
- Part 2: "Part two. The need. Name what you actually needed from them — what you were hoping they would see. The unmet need is worth saying out loud."
- Part 3: "Part three. The closing. Write what you want to say, now that it's over. Then choose how to release it."

### Commits:
- `713c615` — Patch 1: demolition + entry screen
- `6184880` — Patch 2: pre check-in
- `19ca1fa` — Patch 2 fix: chips + voice + header spacing
- `71ebff3` — header verbatim copy from STOP for entry + pre check-in
- `1b2259a` — warmer entry voice cue
- `e1cd900` — Patch 3: Part 1 (The Truth) + shared practice CSS
- `896eff8` — Patch 4: Parts 2 + 3 + closure ritual cards
- `a8c1387` — hide P3 textarea scrollbar + lift progress dots
- `8b37039` — aggressive lift on progress dots, Part 3 layout compensation

### Screenshots pending (user action):
- `screenshots/closure-letter/03-p1-v3.png`
- `screenshots/closure-letter/04-p2-v3.png`
- `screenshots/closure-letter/05-p3-v3.png`

### Pending (Patches 5–6):
- `section-cl-post-checkin` — emotion re-rating using `.spostc-*` engine pattern
- `section-cl-complete` — session summary + `clSaveSession()` + `clRenderComplete()`

---

## 2026-05-15 — Closure Letter module built end-to-end (7 sections)

**File:** `innersoothe_wireframes_v3_12.html`

### Sections built (in order, all LOCKED):
1. `section-cl-entry` — parchment Entry with envelope hero, Pennebaker citation, USP highlight card, warm empathic voice cue
2. `section-cl-pre-checkin` — emotion check-in BEFORE the letter, reuses `.spc-*` engine, state isolated from STOP
3. `section-cl-p1` — Part 1 of 3 "The Truth" — write what happened
4. `section-cl-p2` — Part 2 of 3 "The Need" — name the unmet need
5. `section-cl-p3` — Part 3 of 3 "The Closing" — final words + closure ritual choice cards (4 options: Keep / Delete / Burn / Read aloud)
6. `section-cl-post-checkin` — emotion check-in AFTER, MANDATORY (no back, no nav), auto-syncs chips from CL pre selections
7. `section-cl-complete` — hybrid composition: "Letter Written" hero + closure quote + YOUR SHIFT + THIS SESSION + adaptive ritual instruction + 3 CTAs

### Demolition:
- Old dark-era `section-cl` block removed entirely (was multi-screen monolithic dark version)
- All old `.sec-cl-*` / `.cl-*` dark CSS removed
- Module Card 3 onclick updated: `showSection('cl')` → `showSection('cl-entry')`

### New canonical patterns:
- Shared practice-screen CSS (`.cl-write-stack`, `.cl-textarea`, `.cl-helper`, `.cl-field-label`, `.cl-cta`, `.cl-pd`, `.cl-pd-row`, `.cl-pd-line`) — reusable for any future expressive-writing technique
- Closure ritual card pattern (`.cl-choice-card` + `.cl-choice-section`) — 4-option single-select with saffron-tinted selected state
- Q4 honor-the-choice save logic: `letterParts` saved in session only when `letterChoice === 'keep'`; discarded otherwise (delete/burn/read-aloud)
- Adaptive ritual instruction on Complete — single italic line whose text varies by closure choice
- `clSaveSession()` fires on Part 3 CTA tap (not Complete entry) — honors discard choice at moment of decision
- Post check-in CTA updates the already-saved session with post ratings

### New JS functions added:
- `speakClEntry`, `speakClPreCheckin`, `speakClP1`, `speakClP2`, `speakClP3`, `speakClPostCheckin`, `speakClComplete` (voice cues)
- `clP1UpdateCTA`, `clP2UpdateCTA`, `clP3UpdateCTA` (CTA gating)
- `clSelectChoice` (closure ritual single-select)
- `clCompleteTheLetter` (Part 3 CTA handler — now calls `clSaveSession()` before navigation)
- `clSaveSession` (localStorage persistence with Q4 honor logic)
- `clRenderComplete` (Complete screen population)

### State vars added to window:
`clPreSelected`, `clPreRatings`, `clPostRatings`, `clLetter`, `clChoice`, `clTimeStart`, `clCurrentSessionId`

### Voice copy (locked):
- Entry: "If you're here, something has been left unsaid. That's heavy to carry. The closure letter is a way to put that weight down. You'll write in three parts — what happened, what you needed, and what you want to say now. Not to send. Just to release."
- Pre check-in: "Before we begin. Notice how you're feeling. Pick up to three emotions and rate each."
- P1: "Part one. The truth. Write what happened — and what it did to you. Don't soften it. This is your space."
- P2: "Part two. The need. Name what you actually needed from them — what you were hoping they would see. The unmet need is worth saying out loud."
- P3: "Part three. The closing. Write what you want to say, now that it's over. Then choose how to release it."
- Post check-in: "Now. Let's check in again. Rate the same feelings to see what shifted."
- Complete: "Letter written. The unsaid things are out of your body now and on the page. You witnessed yourself. That matters — whether anyone ever reads this or not."

### Iteration cost:
6 patches over the session. Key issues caught early (and fixed) thanks to patch-by-patch testing: CL dispatch was incorrectly placed inside onStopSectionShow (fixed via dedicated IIFE wrapper), header audio-toggle/Crisis Support overlap (fixed via STOP-verbatim header copy), progress dots sitting on phone shell rounded corners (fixed via 56px bottom padding + Part 3 layout compensation), textarea scrollbar on Part 3 (fixed via hidden scrollbar CSS).

### Screenshots saved:
- `screenshots/closure-letter/01-entry.png`
- `screenshots/closure-letter/02-pre-checkin.png`
- `screenshots/closure-letter/03-p1-v3.png`
- `screenshots/closure-letter/04-p2-v3.png`
- `screenshots/closure-letter/05-p3-v3.png`
- `screenshots/closure-letter/06-post-checkin.png`
- `screenshots/closure-letter/07-complete.png`

### Commits:
- `713c615` — Patch 1: demolition + entry screen
- `6184880` — Patch 2: pre check-in
- `19ca1fa` — Patch 2 fix: chips + voice + header
- `71ebff3` — header verbatim copy fix (entry + pre check-in)
- `1b2259a` — warmer entry voice cue
- `e1cd900` — Patch 3: Part 1 + shared CSS
- `896eff8` — Patch 4: Parts 2 + 3 + ritual cards
- `a8c1387` — hide P3 scrollbar + lift progress dots
- `8b37039` — aggressive dots lift + Part 3 compensation
- `26c2c87` — Patch 5: post check-in
- `10a78c7` — Patch 6: Complete + save logic + Progress integration

---

## 2026-05-26 — Hypnodrama Session: merge hyp-merge-block verbatim into wireframe

**File:** `innersoothe_wireframes_v3_12.html`  
**Section:** `section-breakup-hypnodrama-session`  
**Commit:** `67b1ace`

Replaced the prior assistant-built Hypnodrama section (`.hyp-phone` pattern, old BEATS rewrite) with the fully spec'd block from `hyp-merge-block.html` (Dr. Anu Teotia's verbatim BEATS, `.hyp-shell` pattern, `window.InnerSootheHyp` API).

### Three changes made:
1. **CSS removal** — old scoped `.hyp-phone` CSS block (~160 lines) removed from `<head>`. Replaced with single comment; CSS now lives inline inside the section.
2. **Section HTML replacement** — entire `section-breakup-hypnodrama-session` replaced verbatim with spec block. `phone-wrap` parent given `position:relative;overflow:hidden` so `position:absolute;inset:0` on the shell fills the frame. Navigation wiring applied inside the spec script only:
   - `hyp-backBtn` → `InnerSootheHyp.stop(); showSection('module-breakup-recovery')`
   - `hyp-continueBtn` → `InnerSootheHyp.stop(); showSection('breakup-hypnodrama-post-checkin')`
   - `crisis()` → `showSection('crisis-resources')` (was placeholder `alert()`)
3. **Old IIFE replacement** — 220-line beat-driven IIFE replaced with 9-line `InnerSootheHyp.start/stop` lifecycle wrapper. Guard flag `_showSectionWrappedForHyp` preserved.

### Status bar note:
`.hyp-statusbar` left in place — consistent with all other sections, each of which includes its own faux status bar.

### Verification results:
- `id="section-breakup-hypnodrama-session"` count: **1** ✓
- Card 4 onclick: `showSection('breakup-hypnodrama-session')` at line 10529 ✓
- `InnerSootheHyp.start` count: **2** ✓
- `InnerSootheHyp.stop` count: **3** ✓
- `id="phone"` count: **0** ✓

### What was NOT changed:
- Old `section-hypnodrama` (dark navy "The Healing Conversation" comparison screen) — untouched
- All other sections, global CSS, global JS, bottom nav, fonts
- BEATS array content (verbatim Dr. Anu Teotia script from spec)

---

## 2026-05-26 — PMR Quick Session: full visual pass complete (all 7 muscle groups)

**File:** `innersoothe_wireframes_v3_12.html`
**Section:** `section-breakup-pmr-session-quick`

Completed the body-map arrow + label system for all 7 PMR muscle groups, plus several behavioural fixes. The PMR Quick session is now feature-complete on the visual pass (treated as "good enough" — remaining refinement deferred to React Native build).

### Arrow + label system (all groups)
- Arrows drawn via shared SVG `<symbol id="pmrq-arrow-shape">`, referenced with `<use>`. Standard size **width 7** in a `0 0 100 150` viewBox (`xMidYMid slice`).
- Arrow style: fill `#A06832`, thin white stroke `0.7`, soft drop-shadow, subtle pulse animation. Deliberately slim/calm — not fitness-aggressive.
- Label class `.pmrq-arrow-label`: DM Sans, font-size `2.1px` (viewBox units, ~10px on screen), weight 600, fill `#4A2408`, no white outline.
- Convention: label sits to the RIGHT of the rightmost arrow, EXCEPT Torso "Chest" (below its arrow) and "Core" (centered between the two core arrows).

### Per-group final positions
- Hands ("Fists"): 2 inward arrows on fists, x=26 / x=58, y≈74.5.
- Shoulders ("Shoulders"): 2 up arrows on shoulder caps, x=44 / x=64, y=24.
- Face: closeup mode, arrows hidden.
- Neck ("Neck"): 1 up arrow at chin, x=53, y=22.
- Torso ("Chest" + "Core"): chest up-arrow x=51 y=34 (label below y=46); core inward arrows x=36 / x=64 y=59 (label centered x=53.5 y=61).
- Thighs ("Knees" + "Glutes"): knee arrows x=20 / x=44 y=88; single glute arrow from the right x=67 y=80.
- Legs/Calves ("Feet"): arrows BAKED INTO the image.

### Face closeup fixes
- Neutral (pmr-face-closeup.png) + tense overlay (pmr-face-closeup-tense.png); were originally swapped, renamed correctly by user.
- Sized 80%/top 33%/left 58%, object-fit contain, linear bottom-fade mask.
- Fixed flicker: removed conflicting transition-delays (both fade equal 1.5s); setPose does NOT clear tense overlay when poseSlug==='face'; releasePose skipped for face so neutral persists through release/rest.

### Legs/Calves — baked-in arrows (key workaround)
- SVG arrows could not align with the feet (coordinate-space mismatch between scaled pose image and arrow viewBox). After many failed cover/contain attempts, arrows were baked into a new image: pmr-mannequin-calves-arrows.png (two up-arrows beneath the feet + "Feet" label). SVG <g data-group="feet"> is now empty.
- Both relaxed base mannequin (during Legs) and feet pose shown object-fit contain at width 96% / top 36% with a radial edge mask, so full body incl. feet is visible. Base mannequin reframe via .pmrq-mannequin.feet-hidden (REFRAMES rather than hides — same values as feet pose so they align).
- .pmrq-pose[data-pose="feet"].releasing override: animation:none + opacity fade, preserving translate(-50%,-50%) centering.
- Body-layer bg shifts to #D9BFA8 during Legs (class .pmrq-body-layer.feet-bg, toggled in setPose) to match image tone and hide the seam. Image bg is a gradient so the match is approximate; residual faint edge accepted as a wireframe compromise.

### Behavioural fixes
- TTS chain freeze fix: online voices on file:// often never fire onend, freezing the chain. speakChainGroup now has a duration safety timer (estMs = max(3500, text.length*80+2500)) that force-advances. Intro/outro use QUICK_INTRO_CHUNKS / QUICK_OUTRO_CHUNKS + speakChunks with the same net.
- Pause feedback: pmrqTogglePause swaps icon to a play triangle and label to "Resume" when paused.
- No auto-advance: session no longer auto-jumps to the post-checkin after the outro; it settles on "Session complete" and waits. The "Complete session →" button (pmrqEndEarly()) now also calls showSection('breakup-pmr-post-checkin').

### Typography refinements (PMR session screen)
- Eyebrow: DM Sans 600, 11px, letter-spacing 1.0px, #A06832.
- Muscle name: Cormorant Garamond 400, 27px, #140D04.
- State pills: DM Sans, 11px, inactive opacity 0.68.
- Control labels: DM Sans, 11px, opacity 0.72.

### Asset added
- pmr-mannequin-calves-arrows.png (1024×1536) — calves pose with baked-in up-arrows + "Feet" label.

### Clinical flag (carried forward)
- The "Thighs: squeeze knees + glutes" action is unverified and may not match standard PMR protocol (glutes hidden in seated pose). All 7 group actions + ordering + voiceover scripts must be confirmed with Dr. Anu Teotia before the native build.

### Process lesson
- Repeated wasted effort came from local Claude Code edits NOT being pushed to GitHub before review — stale files were debugged for many rounds. Rule going forward: always git push before any review of the repo.

### Known compromise (deferred to React Native)
- The Legs/feet body-map uses an opaque photo with a gradient background that cannot perfectly match a flat screen color, so a faint seam remains. In the native build, use a transparent-bg or vector body-map asset and position arrows as native elements anchored to the figure.
