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

Next: Phase 2b — STOP Step 2 (T — Take a Breath)
