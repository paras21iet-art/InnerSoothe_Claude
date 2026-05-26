# InnerSoothe — Complete Project Brief
*Single source of truth for all decisions. Maintained by Claude Code — updated automatically after every session.*

---

## App Identity

- **Name:** InnerSoothe — locked
- **Type:** Evidence-based self-therapy app. NOT meditation. NOT breakup-only.
- **Sub-brand:** "heal from within" — written in brief but not implemented in wireframe. Status: pending decision.
- **Tagline:** REJECTED — no tagline in use. "You've got this. We've got you." was considered and rejected.
- **Positioning:** Deeper than meditation (Calm/Headspace). More accessible than human therapy (BetterHelp). Psychologist-backed immersive self-therapy.
- **Unique differentiator:** Nobody in the top 15 mental health apps does psychologist-backed immersive self-therapy with clinical techniques across relationship, anxiety, and career categories.

---

## Phase 1 Content — 3 Categories

1. Relationship Issues
2. Anxiety & Stress
3. Career Stress

Future (Phase 2+): Sleep, Confidence, Procrastination, Body Image

---

## Visual Identity — LOCKED

| Element | Decision |
|---------|----------|
| Background light screens (onboarding) | Cream #EAE0CC (--cream) |
| Background light screens (bottom nav / parchment areas) | Parchment #F0E8D8 (--sage-pale / --warm-white) |
| Background session/therapy screens | Dark #181F1C (card: #1F2924, mid: #2A3530) |
| Primary serif font | Cormorant Garamond 300 |
| Body / UI font | DM Sans 300–700 |
| App name Inner | #fff on dark splash · #1E1408 on light backgrounds · uppercase |
| App name Soothe | #C4956A (--sage-light) · italic |
| Sub-brand | Not in wireframe — pending decision (see Open Questions) |
| Accent colour | Saffron #A06832 (--sage) |
| Dark text | #1E1408 (--charcoal) warm charcoal |
| Rule mark | 24px thin horizontal line |
| CTA button | "Begin" — one word only |
| Secondary CTA | "Already have an account" |
| NO green in navigation | Open question — greens present in splash and dark screens (see Open Questions) |

### CSS Token Reference (`:root`)
```css
--sage:       #A06832   /* primary accent / saffron */
--sage-light: #C4956A   /* lighter saffron */
--sage-pale:  #F0E8D8   /* parchment */
--warm-white: #F0E8D8
--cream:      #EAE0CC   /* onboarding bg */
--bark:       #8C5A1E
--bark-light: #C4956A
--mist:       #EAE0CC
--stone:      #6B5540
--charcoal:   #1E1408
--blush:      #E8C4A0
--gold:       #A06832
--shadow:     0 8px 32px rgba(33,24,12,0.10)
--shadow-sm:  0 2px 12px rgba(33,24,12,0.08)
```

Dark screen local vars (set per section):
```css
--bg:    #181F1C
--card:  #1F2924
--mid:   #2A3530
--sgl:   #C4956A   /* active nav item on dark */
--gold:  #C9A84C   /* premium badge */
```

### Psychologist Constraints — Non-Negotiable
- No gender-specific imagery (no female/male figures)
- No regionally coded imagery
- No dark or dramatic visual treatments — reads as luxury/whisky, not healing
- No generic nature landscapes — reads as travel app
- No abstract light or silk-wave animations — reads as cerebral or amateur
- Illustrations must be contained elements, not full-bleed backgrounds
- No blurring — clean solutions only

### Splash Screen — Current State in Wireframe
- Phone frame background: inline PNG (base64-embedded) · background colour #D4AE88
- Content area background: `linear-gradient(170deg, #1E1408 0%, #3E5247 60%, #4A6355 100%)`
- Orb: 80×80px · `radial-gradient(circle at 35% 35%, #C4956A, #A06832)` · glow `rgba(181,206,170,0.4)`
- App name: Cormorant Garamond 300, 34px, letter-spacing 3px · "Inner" = #fff · "Soothe" span = #C4956A italic
- Tagline slot: CSS class `.splash-tagline` present (12px, rgba(255,255,255,0.55), letter-spacing 1.5px, uppercase) — no text content in wireframe
- Primary CTA: "Begin" · background #A06832 · border-radius 28px · DM Sans 14px 500
- Secondary CTA: "Already have an account" · outline style · rgba(255,255,255,0.3) border

Note: parchment + silk waves described in previous brief version — superseded. Splash is now dark.

### Dual Mode
- Light screens (onboarding, settings): Cream #EAE0CC / Parchment #F0E8D8 — calm, credible
- Dark screens (therapy sessions, Heal tab): #181F1C background — immersive, therapeutic
- Transition light→dark signals "entering a different therapeutic space"

---

## Pre-Onboarding Gate — First Launch Only (4 Screens)

Runs before main onboarding. Not repeated on subsequent launches.

| Screen | Purpose | Key element |
|--------|---------|-------------|
| 01 Age Gate | COPPA compliance | Under-13 hard blocked · 13–17 flagged |
| 02 Safety & Scope | Regulatory positioning | Establishes "wellness tool not medical device" · lists what app IS and IS NOT |
| 03 Consent & Privacy | GDPR Art.7 | Plain English · dual checkboxes (bundled consent invalid) · consent timestamped |
| 04 Crisis Resources | Always accessible | iCall (India), 988 (US), Samaritans (UK), Lifeline (AU) |

---

## Onboarding Flow — 4 Screens

Zero drop-off. Value before account (Duolingo principle). Login deferred to post first technique.

| Screen | Purpose | Key element |
|--------|---------|-------------|
| 01 Splash | First impression | Brand + inline image + "Begin" |
| 02 Your Name | Personalisation | "What shall we call you?" · "Just starting 🌱" label |
| 03 Category Selection | Focus area | 3 options: Relationships / Career / Health · single select · "Step 3 of 4" label |
| 04 Your Space is Ready | Sign In | Value summary + Google / Apple / Email · "Last step ✦" label |

Progress bar labels: "Just starting 🌱" (screen 2) → "Step 3 of 4" (screen 3) → "Last step ✦" (screen 4)

Note: Category labels on Screen 03 (Relationships / Career / Health) differ from in-app category names (Relationship Issues / Anxiety & Stress / Career Stress). Both are in the wireframe — this is intentional (simpler label for onboarding chip vs full label in Heal tab).

---

## App Structure

### 5 Bottom Tabs (v5 — LOCKED in wireframe)
Home 🏠 | Journal 📖 | **Today** (center FAB, leaf SVG, saffron) | Progress 📊 | Settings ⚙️

- Center FAB: 54px saffron circle (#A06832), leaf SVG white, top:-18px raise, navigates to `section-today`
- "Today" label replaces earlier "Meditation" label

### Content Hierarchy
Category → Module → Section → Technique

### Home Screen (section-relationship, v5)
Static greeting "Hello, Arjun." (Spectral 300 regular + italic). Hero illustration at 220px height with left-edge gradient fade (#F0E8D8 → transparent). Three full-bleed 160px category cards (Relationships/Health/Career) with illustration as card background and horizontal gradient overlay. Continue card (last in-progress path). Recommended + Journal two-column row. Journey stats banner.

### Today Screen (section-today — new)
Daily practice scaffold: date + "Today" Spectral 300 header · Daily Intention card (italic quote) · emotional check-in slider with emoji scale · 3 exercise cards (Box Breathing 4min, 5-4-3-2-1 Grounding 3min, Self-Compassion Pause 5min). Same 5-tab nav, Today FAB active.

### Relationships Category Screen (section-category-relationships — LOCKED)
Hero band 340px height: full-bleed `relationships-hero.png` with left-edge parchment gradient (#F0E8D8 0% → rgba(240,232,216,0.55) 18% → rgba(240,232,216,0) 38%) — canonical for all category heroes. Title "Relationships" Spectral 300 40px position:absolute top-left (padding 52px 24px 0). Subtitle DM Sans 300 14px rgba(33,24,12,0.65) in parchment strip below hero. "Explore modules" label #A06832 saffron. Three module cards 138px height each (Breakup Recovery / Improving Relationships / Couple Counselling): rose circle icon 44px rgba(219,162,162,0.25) bg · Cormorant Garamond 400 17px title · DM Sans 300 11px description · illustration thumbnail right flex:1. Chevron right on each. Back button top-left 44px frosted circle → Home. 5-tab nav with Home active.

### Career Category Screen (section-category-career — LOCKED)
Hero band 340px height: full-bleed `assets/illustrations/Career/career-hero-v2.png` with left-edge parchment gradient (#F0E8D8 0% → rgba(240,232,216,0.55) 18% → rgba(240,232,216,0) 38%) — canonical for all category heroes. Title "Career" Spectral 300 40px position:absolute top-left (padding 52px 24px 0). Subtitle DM Sans 300 14px rgba(33,24,12,0.65) in parchment strip below hero: "Move through burnout, pressure, uncertainty, and work-life imbalance." "Explore modules" label #A06832 saffron. Three module cards 138px height each (1. Burnout / 2. Work Life Balance / 3. Imposter Syndrome): golden circle icon 44px rgba(219,191,150,0.25) bg · icon stroke #A06832 · Cormorant Garamond 400 17px title · DM Sans 300 11px description · v2 illustration thumbnails right flex:1. Chevron right on each. Back button top-left → Home. 5-tab nav with Home active. HomeScreen Career card wired to this section.

### Health Category Screen (section-category-health — LOCKED)
Hero band 340px height: full-bleed `assets/illustrations/Health/health-hero.png` with left-edge parchment gradient (#F0E8D8 0% → rgba(240,232,216,0.55) 18% → rgba(240,232,216,0) 38%) — canonical for all category heroes. Title "Health" Spectral 300 40px position:absolute top-left (padding 52px 24px 0) — colour #2D4A2D (dark forest green) deviating from the default saffron/charcoal to reinforce category identity. Subtitle DM Sans 300 14px rgba(33,24,12,0.65) in parchment strip below hero: "Move through anxiety, stress, grief, and inner tension." "Explore modules" label #2D4A2D (dark forest green — deviation noted, open question on whether to unify with saffron). Three module cards 138px height each (1. Anxiety / 2. Stress / 3. Grief): card bg rgba(242,250,240,0.6) sage-tinted · icon circle 44px rgba(180,200,170,0.35) · icon stroke #2D4A2D · Lucide icons (Brain / Flower2 / Leaf) · Cormorant Garamond 400 17px title · DM Sans 300 11px description · illustration thumbnails right flex:1 (health-anxiety.png, health-stress.png, health-grief.png) · thumbnail left edge: 1px solid rgba(33,24,12,0.10) hairline via shared CSS class `.mod-thumb`. Chevron right on each. Back button top-left 44px frosted circle → Home. 5-tab nav with Home active. HomeScreen Health card wired to this section.

**Open Question #1:** "Explore modules" label in Health uses #2D4A2D instead of canonical #A06832 saffron. Pending psychologist sync — may unify all category screens to saffron for this label.

---

### Breakup Recovery Module Screen (section-module-breakup-recovery — LOCKED)

New module-level screen pattern — one layer deeper than Category screens. Establishes the canonical template for all 9 modules.

**Layout:** 370×780px phone, background #F9EDD8, flex column, overflow hidden.
- **Status bar:** DM Sans 11px 600 rgba(30,20,8,0.45), standard 3-icon cluster top-right.
- **Back button:** Absolute top:42px left:16px, 44px frosted circle, chevron left #1E1408, `showSection('category-relationships')`.
- **Crisis Support chip:** Absolute top:46px right:16px, shield SVG + "Crisis Support" DM Sans 12px 500 #A06832, background rgba(160,104,50,0.10), border rgba(160,104,50,0.35), border-radius 22px, `showSection('crisis-resources')`.
- **Scrollable body** (flex:1 overflow-y:auto scrollbar-width:none):
  - **Hero flex row** (padding 52px 20px 20px, background #F0E8D8, align-items:flex-end):
    - Left (flex:1.35): "Breakup\nRecovery" Spectral 300 36px #1E1408 · DM Sans 300 13px subtitle · clock icon + "6 techniques · 3 free" DM Sans 11px rgba(33,24,12,0.50).
    - Right image: 136×164px, border-radius 14px, `breakup-hero.png` object-position:right center, left fade gradient rgba(240,232,216,0.90)→0% at 40%.
  - **Progress card** (margin 14px 20px, white 65%, border-radius 16px): "33%" Spectral 300 34px #B85C5C + leaf SVG #A06832 · "2 of 6 techniques completed" DM Sans 300 11px · progress bar track rgba(33,24,12,0.08) → fill gradient #B85C5C→#D4837A at 33%.
  - **"Begin Healing" section header**: leaf SVG #A06832 + Spectral 300 21px + DM Sans 300 12px subtitle.
  - **3 Free technique cards** (114px, gap 10px, background rgba(252,242,232,0.6), border-radius 14px):
    - Thumbnail: 92px container, overflow:hidden, flush to card left/top/bottom edges (no padding). img width:100% height:100% object-fit:contain object-position:center center, no border-radius (card overflow:hidden clips left corners). Class `.tech-thumb` → border-right 1px solid rgba(33,24,12,0.10) hairline divider.
    - Text: Spectral 400 15px title + DM Sans 300 11px desc (flex:1, min-width:0). No border class on text div.
    - Right col 58px: Free tag rgba(180,200,170,0.35)/#A06832 + clock+time #A06832 white-space:nowrap.
    - Chevron 18px rgba(33,24,12,0.30).
    - Card 1: `assets/illustrations/Relationships/Modules/BreakupRecovery/stop.png` · "STOP Technique" · "Pause, breathe, and create space between you and your emotions." · `showSection('breakup-stop')` · 10 min
    - Card 2: `assets/illustrations/Relationships/Modules/BreakupRecovery/pmr.png` · "Progressive Muscle Relaxation (PMR)" · "Release physical tension and calm your nervous system." · `showSection('breakup-pmr')` · 18 min
    - Card 3: `assets/illustrations/Relationships/Modules/BreakupRecovery/closure-letter.png` · "Closure Letter" · "Express, release, and find closure through guided writing." · `showSection('cl')` · 20 min
  - **"Deep Healing" section header**: star SVG #A06832 + Spectral 300 21px + Premium pill rgba(219,162,162,0.25)/#B85C5C.
  - **3 Premium technique cards** (114px, same thumbnail/text/chevron structure + Premium tag rgba(219,162,162,0.20)/#B85C5C + lock SVG #A06832):
    - Card 4: `assets/illustrations/Relationships/Modules/BreakupRecovery/hypnodrama.png` · "Hypnodrama" · "Explore your subconscious and heal deep-rooted emotional patterns." · `showSection('paywall')` · 30 min
    - Card 5: `assets/illustrations/Relationships/Modules/BreakupRecovery/cord-cutting.png` · "Cord Cutting" · "Release energetic ties and reclaim your peace and power." · `showSection('paywall')` · 25 min
    - Card 6: `assets/illustrations/Relationships/Modules/BreakupRecovery/inner-child.png` · "Inner Child Healing" · "Reconnect with your inner child and nurture your emotional self." · `showSection('paywall')` · 35 min
- **Sticky upsell banner** (flex-shrink:0, background rgba(252,244,234,0.98), border-top rgba(184,92,92,0.15)): Crown SVG #A06832 + "Unlock all premium techniques" DM Sans 600 13px + "Go deeper with guided healing sessions" DM Sans 300 11px + "Go Premium" button #B85C5C → `showSection('paywall')`.
- **Bottom nav:** Standard 5-tab, Home active #A06832, `showSection('relationship')`.
- **Relationships category card 1:** `onclick` updated from `alert(...)` to `showSection('module-breakup-recovery')`.

**Screenshots:** `screenshots/breakup-recovery/01-top.png` · `02-free-section.png` · `02-time-and-divider-fix.png` · `03-premium-section.png` · `03-card-bg-match.png` · `04-sticky-banner.png` · `04-thumbnail-integration.png` · `05-from-relationships.png` · `05-text-and-cropping-fix.png`

---

### STOP Step 1 (S — Stop) — LOCKED

Canonical practice-screen template for all 4 STEP screens within the STOP technique (S/T/O/P). Future steps inherit this architecture.

**Section ID:** `section-breakup-stop-s1`
**CSS scope:** `.sec-stop-s1`

**Layout (top to bottom):**
- Status bar (system clock + battery)
- Header row: back chevron (44px white circle) + audio toggle (saffron outlined icon) + Crisis Support chip (saffron outlined pill)
- Eyebrow: "STEP 1 OF 4" — DM Sans 11px 600, letter-spaced, color #A06832, centered
- Letter pill + word: [S] Stop — pill is 44×44px saffron-tinted square with serif "S"; word "Stop" in Cormorant 300 to the right
- Headline: "Whatever you're about to do — don't do it yet." — Cormorant Garamond 300, 26px, text-wrap: balance, line-height 1.2
- Body copy: "Don't send that message. Don't scroll back through the photos. Your emotions are running fast — that's exactly when to pause." — DM Sans 300, 12px
- Hero image: orb on water, container 190px height, radial-gradient mask-image for parchment bleed (NO rectangular edge)
- `.s1-bottom-stack` wrapper (horizontal padding 32px, gap 16px, 20px bottom padding, flex column):
  - Quote card: cream pill card, italic Cormorant text, "— DBT, Linehan 1993" attribution
  - Confirm card: 24×24px empty outlined circle (saffron border, ZERO inner content) + 2-line confirm text + "Tap to confirm" label on right
  - CTA button: saffron #A06832 pill, "Good. Now — Take a Breath →" in white
  - Progress dots: S T O P, S filled saffron, others outlined, full-width connector lines
- Section padding-bottom: 20px

**Hero image mask (canonical for STEP screens):**
```css
mask-image: radial-gradient(ellipse 60% 70% at center 50%, black 0%, black 22%, rgba(0,0,0,0.78) 48%, rgba(0,0,0,0.32) 72%, rgba(0,0,0,0.08) 88%, transparent 100%);
```

**Viewport constraint:** Total section height ≤ 780px. No vertical scroll.

**Inheritance rules for S2/S3/S4:**
- Same header pattern (back + audio + Crisis Support)
- Same eyebrow + letter pill + word pattern (T/O/P substituted)
- Same `.sX-bottom-stack` architecture (renamed per step)
- Same hero image mask pattern (image content varies per step)
- Same progress dots pattern with appropriate step highlighted
- Same 780px viewport constraint
- Same voice narration pattern (see below)

**Voice Narration — canonical pattern (S1 reference, inherited by S2+):**
- Global system (one `<script>` block, defined once): `window.stopSpeak(text)`, `window.stopSpeakSequence(items, doneCallback)`, `window.stopCancelVoice()`, `window.stopToggleMute()`
- Voice preference: Samantha > Karen > Google US English > en-US female > en-US > en > fallback. Rate: 0.82, pitch: 0.9, volume: 0.85
- Each STEP screen defines `speakStopSX()` in its own `<script>` block
- Dispatch: `onStopSectionShow` → 400ms delay → calls `speakStopS1()` / `speakStopS2()` / etc.
- S1: `speakStopS1()` uses `stopSpeakSequence` with deliberate inter-phrase delays (4 phrases)
- S2: `speakStopS2()` speaks "Box breathing. Two cycles. Follow the orb." on entry; `stopSpeak(phase.label)` at each breath phase boundary inside `runS2BreathingCycles()` ('Breathe in' / 'Hold' / 'Breathe out' / 'Hold')
- Mute toggle: `stopToggleMute()` shared across all STEP screens via `.stop-mute-btn` class selector

---

### STOP Step 2 (T — Take a Breath) — LOCKED 2026-05-13

**Section:** `section-breakup-stop-s2`, CSS scope `.sec-stop-s2`
**Purpose:** Box breathing 4-4-4-4 with 4 required cycles + optional "One more cycle" extension.

#### Canonical voice-driven architecture (v9)
Voice is the master clock. Speech is chained via utterance.onend; visual count + orb step fire on each utterance's onstart; phase advances only after "Four"'s onend fires.

- **Phase sequence per phase:** 5 chained utterances — phase name → "One" → "Two" → "Three" → "Four"
- **Speech parameters:** rate 1.0, pitch 0.9, volume 0.85, voice preference Samantha → Karen → Google US English → any en-US → any en
- **Phase progression model:** scaleProgress steps 0 / 0.25 / 0.50 / 0.75 / 1.00 mapped to startScale → endScale via linear interpolation. Each step's onstart sets `orbEl.style.transform = scale(...)`. CSS `transition: transform 600ms linear` on the base `.s2-hero-img` rule smooths between steps.
- **Phase advances** only via the chain's onComplete callback (after Four's onend), never on a fixed timer.
- **Cancel discipline:** `speechSynthesis.cancel()` at start of every runPhase clears any leftover speech from previous phase. Session-ID and phase-ID guards on every callback prevent stale events from updating wrong-phase state.
- **Muted mode:** speakChain detects mute, fires visuals immediately, chains next step via 800ms setTimeout (consistent rhythm without audio).

#### Phase config
| Phase | Visual label | Voice cue | startScale | endScale |
|-------|--------------|-----------|------------|----------|
| inhale | "Breathe in" | "Breathe in" | 0.92 | 1.05 |
| hold-top | "Hold" | "Hold" | 1.05 | 1.05 |
| exhale | "Breathe out" | "Breathe out" | 1.05 | 0.92 |
| hold-bottom | "Hold" | "Hold" | 0.92 | 0.92 |

Hold phases mathematically keep orb static (same start/end scale); voice and visual count still progress.

#### Entry intro flow
1. Utterance 1: full instructional ("Box breathing is a calming technique. You'll breathe in through your nose for four counts...")
2. 2.5 second silence
3. Utterance 2: "Get comfortable. When you're ready, follow the orb... Beginning now."
4. After utterance 2 onend, runS2BreathingCycles starts cycle 1, phase 0.

#### Timeline (locked)
- Container: 46px fixed height, parchment background rgba(243,233,220,0.6), 14px radius, 4-segment flex
- Segments: 4 equal-width, fill 100% of container height. Padding 0 4px.
- Timeline labels (actual HTML): "In" / "Hold" / "Out" / "Hold" (shortened from v8f to fit count alongside label in active segment)
- Phase label above orb (separate element): "Breathe in" / "Hold" / "Breathe out" / "Hold" — full length, Cormorant italic
- Active segment: rgba(160,104,50,0.18) background, bold label, count visible
- Completed segment: rgba(160,104,50,0.06) background, fill bar at 100% with rgba(160,104,50,0.4)
- Fill bar: 2px saffron (#A06832) at bottom of segment, width driven by speech progress (0/25/50/75/100%)

#### Phase length (variable, voice-driven)
Approximate 3-6 seconds per phase depending on TTS engine speed. Actual timing follows voice cadence so sync is always preserved.

#### Cycle completion
After 4 required cycles complete, CTA enables, "One more cycle" extend link becomes visible. Each extra cycle runs the same 4-phase sequence but doesn't increment the required-cycles counter.

#### Status of cleanup
Diagnostic logging (the _diag object) was used during v8a-v9 iteration and has been removed at lock time.

---

### Closure Letter — In Progress (2026-05-15)

**Section IDs (in DOM order):**
- `section-cl-entry` — technique entry
- `section-cl-pre-checkin` — emotion check-in before writing
- `section-cl-p1` — Part 1 "The Truth"
- `section-cl-p2` — Part 2 "The Need"
- `section-cl-p3` — Part 3 "The Closing" + ritual choice
- `section-cl-post-checkin` — *(Patch 5 — pending)*
- `section-cl-complete` — *(Patch 6 — pending)*

**CSS:** All CL sections use `class="screens-area sec-stop-step"` on the outer div — inherits the entire STOP step-hdr pattern (back chevron + audio toggle + Crisis Support) without duplicating CSS.

**Shell CSS:** `.sec-cl-p1`, `.sec-cl-p2`, `.sec-cl-p3` — `370×780px`, `background: #F9EDD8`, `overflow: hidden`, `display: flex`, `flex-direction: column`

**Shared CSS classes (`.cl-*`):** `.cl-write-stack` · `.cl-field-label` · `.cl-textarea` · `.cl-helper` · `.cl-cta` · `.cl-pd-row` · `.cl-pd` · `.cl-pd-line` · `.cl-choice-section` · `.cl-choice-card` · `.cl-choice-title` · `.cl-choice-subline`

**State variables (line ~10309):**
```js
window.clPreSelected = []; window.clPreRatings = {}; window.clPostRatings = {};
window.clLetter = { part1: '', part2: '', part3: '' };
window.clChoice = null; window.clTimeStart = null; window.clCurrentSessionId = null;
```

**Dispatch architecture:** CL uses a dedicated IIFE wrapper layered after the STOP voice cancel wrapper (line ~18347). Does NOT use DOMContentLoaded. Handles `cl-entry`, `cl-pre-checkin`, `cl-p1`, `cl-p2`, `cl-p3`. CL cases must NOT be placed inside `window.onStopSectionShow` (that hook only fires for `breakup-stop-*` and `progress`).

**Pre check-in IIFE** (wedged after `<!-- /section-cl-pre-checkin -->`): builds 8-pill emotion grid with `clspc-*` DOM ID prefix (avoids collision with STOP's `spc-*`). Functions: `window.clBuildPreGrid`, `window.clPreDot`, `window.clPreBeginTap`.

**Emotion set (pre check-in):** 💔 Grief · 😔 Sadness · 😠 Anger · 😞 Guilt · 😳 Shame · 🫥 Loneliness · 😰 Anxiety · 😶 Numb

**Writing parts:**

| Part | Section | Field label | Placeholder hint |
|------|---------|-------------|-----------------|
| 1 | `section-cl-p1` | WHAT HAPPENED — AND WHAT IT DID TO YOU | "Start wherever you need to. You don't have to be fair." |
| 2 | `section-cl-p2` | WHAT I ACTUALLY NEEDED FROM YOU | "You needed to feel seen. Heard. Safe. Name it." |
| 3 | `section-cl-p3` | WHAT I WANT TO SAY TO YOU NOW | "This could be: goodbye, I forgive you, I will never forgive you…" |

**Closure ritual choices (Part 3):**
| Value | Title | Subline |
|-------|-------|---------|
| `keep` | Keep it for myself | Saved to your Journal. |
| `delete` | Delete it after reading | Let the words go. |
| `burn` | Burn it ritually | A symbolic release. The text is discarded. |
| `read-aloud` | Read it aloud alone | Speak it once. The text is discarded. |

CTA `clCompleteTheLetter()` navigates to `cl-post-checkin`. Disabled until textarea non-empty AND choice selected.

**Key layout spec — Part 3 (locked):**
- `.cl-write-stack` padding: `0 32px 56px` — 56px bottom lifts progress dots clear of phone shell edge
- `.sec-cl-p3 .cl-textarea`: `flex: none; min-height: 80px; height: 80px; scrollbar-width: none`
- `.sec-cl-p3 .cl-write-stack` gap: `8px`
- `.cl-choice-section` gap: `4px`

**Progress dots:**
- P1: dot 1 filled · dots 2–3 outlined
- P2: dot 2 filled · others outlined
- P3: dot 3 filled · others outlined

**Voice copy (locked):**
- CL entry: "If you're here, something has been left unsaid. That's heavy to carry. The closure letter is a way to put that weight down. You'll write in three parts — what happened, what you needed, and what you want to say now. Not to send. Just to release."
- Pre check-in: "Before we begin. Notice how you're feeling. Pick up to three emotions and rate each."
- Part 1: "Part one. The truth. Write what happened — and what it did to you. Don't soften it. This is your space."
- Part 2: "Part two. The need. Name what you actually needed from them — what you were hoping they would see. The unmet need is worth saying out loud."
- Part 3: "Part three. The closing. Write what you want to say, now that it's over. Then choose how to release it."

---

## Paid Techniques (Premium) — All Built in Wireframe

| Technique | Type | Duration | Notes |
|-----------|------|----------|-------|
| Hypnodrama | Hypnotherapy | 5 min | 1 screen, 7 visual phases |
| Empty Chair | Gestalt | 20 min | Multi-screen |
| Cord Cutting | Energetic Release | 20 min | 5 screens (list card says 15 min — inconsistency in wireframe) |
| Inner Child Healing | Attachment Repair | 25 min | Multi-screen (list card says 30 min — inconsistency in wireframe) |
| Thought Reset | CBT | 15 min | Pattern interrupt + cognitive reset |
| Healing Ladder | Progress | Weekly | Track healing journey position |
| Closure Letter | Journal | 20 min | Words you never sent |
| Relationship Expectation Clarification | CBT | 20 min | Patterns brought to love |

Pending psychologist decision: Single screen (passive, Hypnodrama style) vs multi-screen (active, Cord Cutting style) — which is therapeutically better?

---

## Psychologist Voice Recording

- Decision: Psychologist's own voice — NOT browser TTS, NOT ElevenLabs
- Recording: Phone mic (lapel preferred), quiet room/wardrobe, Voice Memos
- Priority: Cord Cutting → Hypnodrama → Empty Chair → Inner Child
- When received: Replace TTS with Expo AV, calibrate SVG keyTimes to real pacing

---

## App Architecture — React Native / Expo

### Environment
- Machine: Windows 11, Git Bash
- Node: v24.14.1, npm 11.11.0
- Framework: Expo (React Native)
- Claude Code: Authenticated, working in Git Bash

### Repositories
- Wireframes: C:\Users\Admin\Documents\GitHub\InnerSoothe_Claude
- App build: C:\Users\Admin\Documents\GitHub\InnerSoothe_App_Claude\innersoothe

### Full Modular Folder Structure
```
src/
  theme/
    colors.ts           all colour tokens
    typography.ts       Cormorant Garamond 300, DM Sans 300–700, sizes
    spacing.ts          spacing scale

  types/
    category.ts
    module.ts
    section.ts
    technique.ts
    media.ts            MediaTrack, MediaCollection
    user.ts
    progress.ts
    journal.ts
    navigation.ts       nav param lists

  content/
    onboarding.ts
    emotions.ts         7 emotion families, sub-emotions
    ui.ts               UI copy strings
    categories/
      relationship/
        modules/
          breakupRecovery.ts
          conflictResolution.ts
      anxiety/
        modules/
          stressRelief.ts
      career/
        modules/
          burnout.ts
    media/
      index.ts          sleep & meditation tracks

  components/
    ui/
      Button.tsx
      Typography.tsx
      Card.tsx
      Chip.tsx
      ProgressBar.tsx
      Badge.tsx
      Divider.tsx
    layout/
      Screen.tsx
      SafeArea.tsx
    domain/
      TechniqueCard.tsx
      CategoryCard.tsx
      ModuleCard.tsx
      MediaTrackCard.tsx
      EmotionChipGrid.tsx

  navigation/
    OnboardingNavigator.tsx
    HealNavigator.tsx
    SleepNavigator.tsx
    TabNavigator.tsx
    RootNavigator.tsx

  screens/
    onboarding/         4 pre-gate + 4 main screens
    home/
    categories/
    modules/
    techniques/
    progress/
    journal/
    settings/

  services/
    tts.ts
    audio.ts            Expo AV
    storage.ts          AsyncStorage

  hooks/
    useOnboarding.ts
    useAudio.ts
    useProgress.ts

  store/
    userStore.ts        Zustand
    progressStore.ts    Zustand
```

### Key Dependencies
```
@react-navigation/native
@react-navigation/stack
@react-navigation/bottom-tabs
react-native-screens
react-native-safe-area-context
expo-linear-gradient
expo-speech
expo-av
expo-font
@expo-google-fonts/cormorant-garamond
@expo-google-fonts/dm-sans
zustand
@react-native-async-storage/async-storage
```

### colors.ts Core Tokens
```typescript
export const colors = {
  parchment:      '#F0E8D8',
  parchmentDeep:  '#EAE0CC',
  warmDark:       '#181F1C',
  warmDarkCard:   '#1F2924',
  warmDarkMid:    '#2A3530',
  saffron:        '#A06832',
  saffronLight:   '#C4956A',
  inkDark:        '#1E1408',
  inkMid:         'rgba(33,24,12,0.65)',
  inkLight:       'rgba(33,24,12,0.38)',
  inkGhost:       'rgba(33,24,12,0.22)',
  creamText:      '#F0E8D8',
  creamMid:       'rgba(240,232,216,0.65)',
  creamLight:     'rgba(240,232,216,0.38)',
  gold:           '#C9A84C',
}
```

---

## Compliance — Pre-launch

| Item | Status |
|------|--------|
| GDPR Art.7 consent (Pre-onboarding Screen 03) | ✅ |
| "Not a substitute for therapy" (Pre-onboarding Screen 03) | ✅ |
| COPPA under-13 hard block (Pre-onboarding Screen 01) | ✅ |
| Crisis 🆘 screen (Pre-onboarding Screen 04) | ✅ |
| Crisis 🆘 button wired into every in-app screen | ⏳ Pending (see Open Questions) |
| Privacy Policy + ToS (iubenda.com ~$30/yr) | ❌ |
| Firebase DPA | ❌ |
| RevenueCat DPA | ❌ |

---

## Competitive Landscape

| App | Downloads | Gap for InnerSoothe |
|-----|-----------|---------------------|
| Calm | 100M+ | Meditation only |
| Headspace | 80M+ | CBT light only |
| Meditopia | 40M+ | No clinical techniques |
| Replika | 30M+ | Not therapeutic |
| BetterHelp | 5M+ | $60-90/week human therapy |
| Wysa | 6M+ | Chat only, no immersion |
| Liven | 1.5M | Shallow, mixed reviews |
| Rootd | ~1M | Key precedent: solo founder, no tech background, 1M users |

Market: $7.5B (2024) → $17.5B (2030)
India: Consumer self-therapy space wide open. First mover available.

---

## GTM — Global App

InnerSoothe is a **global app** — not targeted at any specific country or region. The product, content, imagery, and language are designed to be culturally neutral and broadly accessible (consistent with the "No regionally coded imagery" visual rule).

- Positioning and rollout are global from the outset; no region-first corridor strategy.
- Asset-light virtual model (no physical/branch footprint).
- (Any earlier "North India corridor first" framing is superseded — InnerSoothe is global.)

---

## Critical Technical Rule — SVG Animations

animate with repeatCount="1" and fill="freeze":
- keyTimes MUST start at exactly 0.000
- keyTimes MUST end at exactly 1.000
- Violation freezes all animation at last defined keyTime

---

## Open Questions

1. **Crisis 🆘 button placement — needs to be reachable on every in-app screen.**
   Currently the 🆘 button is in the wireframe meta-navigation bar (designer view) only. It is not wired into individual phone mockup screens. Apple App Store guidelines for mental health apps require it to be accessible from within the app at all times. Pending psychologist sync on placement (header icon vs persistent footer element).

---

## Decisions Log
*Claude Code appends here after every session with date and what was resolved.*

| Date | Decision | Status |
|------|----------|--------|
| 2026-05-26 | GTM positioning: InnerSoothe is a GLOBAL app — not region-targeted. "North India corridor first" framing superseded. | ✅ Decided |
| 2026-05-26 | PMR Quick Session: body-map arrow + label system for all 7 muscle groups (width-7 SVG arrows, DM Sans labels, dark brown #4A2408) | ✅ Locked in wireframe |
| 2026-05-26 | PMR Face group: closeup neutral+tense image pair with bottom-fade mask, releasePose skipped for face | ✅ Locked in wireframe |
| 2026-05-26 | PMR Legs/Calves: arrows baked into image (pmr-mannequin-calves-arrows.png), SVG group emptied — coordinate-mismatch workaround | ✅ Locked (compromise; redo natively) |
| 2026-05-26 | PMR session: no auto-advance after outro — user taps "Complete session" to reach post-checkin | ✅ Locked in wireframe |
| 2026-05-26 | PMR wireframe declared "good enough" — body-map refinement deferred to React Native (transparent/vector assets) | ✅ Decided |
| 2026-05-26 | PMR group ACTIONS (esp. Thighs "knees + glutes") + voiceover scripts | ⏳ Pending clinical review with Dr. Anu Teotia |
| — | Psychologist: parchment vs eucalyptus green | ⏳ Superseded — splash now dark |
| — | Tea plantation photo integration (Pexels 13691355) | ⏳ Embedded inline in wireframe — pending production asset |
| — | Single-screen vs multi-screen technique format | ⏳ Pending |
| — | "heal from within" sub-brand — in or out | ⏳ Pending (not in wireframe) |
| 2026-05-06 | Typography: Cormorant Garamond + DM Sans (replaces Spectral + Jost) | ✅ Locked in wireframe |
| 2026-05-06 | Onboarding: 4-screen flow + 4-screen pre-gate (replaces 7-screen brief) | ✅ Locked in wireframe |
| 2026-05-06 | Bottom tabs: Check-In / Heal / Journal / Progress / Settings (Sleep & Meditate removed) | ✅ Locked in wireframe |
| 2026-05-06 | Home tab completely redesigned: warm cream parchment world matching onboarding 02–04. Time-aware greeting · hero illustration · Continue card · 3 category banners + stacked module cards · Recommended + Journal two-column · Journey stats | ✅ Locked in wireframe |
| 2026-05-06 | Bottom nav: 5 tabs Home · Journal · Today (center FAB, leaf) · Progress · Settings | ✅ Locked in wireframe |
| 2026-05-06 | Cropped 8 reference illustration assets from ChatGPT reference image to repo root. All crops < 600px in largest dimension. Production assets need re-sourcing at higher resolution. | ✅ |
| 2026-05-06 | Category color decisions: Relationships=rgba(219,162,162) pink; Health=rgba(180,200,170) sage; Career=rgba(219,191,150) gold | ⏳ Needs psychologist sign-off |
| 2026-05-07 | Onboarding03 category icons: Replaced emoji (💔⏳🌿) with lucide-style SVG line icons in 48px saffron-tinted circles (rgba(160,104,50,0.12)). Relationships=HeartCrack, Career=Briefcase, Health=Leaf. Stroke #A06832 1.5px. | ✅ Locked in wireframe |
| 2026-05-07 | Home greeting: Static "Hello, Arjun." (Spectral 300 regular + italic) replaces time-aware getGreeting() | ✅ Locked in wireframe |
| 2026-05-07 | Hero illustration: Height reduced 280px → 220px. Left-edge gradient fade (#F0E8D8 opaque → transparent 45% width). Opacity 1.0. | ✅ Locked in wireframe |
| 2026-05-07 | Category cards: Full-bleed 160px height. Illustration fills card via position:absolute;object-fit:cover. Horizontal gradient overlay: tint 0.90→0.45→0 at 0/45%/72%. Text in left 62% at z-index:2. | ✅ Locked in wireframe |
| 2026-05-07 | Today screen (section-today): New wireframe section added. FAB "Today" navigates here. Daily intention · emotion check-in slider · 3 exercise cards scaffold. | ✅ Locked in wireframe |
| 2026-05-07 | Screenshots round-2: 5 screenshots taken to screenshots/round-2/ (home-01-top, home-02-mid, home-03-bottom, onboarding-03, today-scaffold) | ✅ |
| 2026-05-07 | Onboarding03 + HomeScreen category card icons: Reverted from SVG line icons back to emoji (💔 Relationships · ⏳ Career · 🌿 Health) — cleaner at wireframe scale | ✅ Locked |
| 2026-05-07 | Crisis chip: Absolute position top:42px right:20px z-index:20. Background rgba(250,240,228,0.82), border 1.5px #A06832. paddingTop on hero block raised to 44px for clear chip breathing room | ✅ Locked |
| 2026-05-07 | HomeScreen hero: heroText flex:1.2, heroImage flex:1.1 height:130px. Left-edge fade #F0E8D8→transparent at 45% width retained | ✅ Locked |
| 2026-05-07 | HomeScreen greeting sizing: "Hello," Spectral 26px/line-height:30px · "Arjun." 36px/line-height:42px italic · subtitle DM Sans 300 14px/20px | ✅ Locked |
| 2026-05-07 | Recommended card: Full-width horizontal split replaces two-column grid. Text left flex:1.3, image right flex:1, height:200px. Spectral 500 16px title | ✅ Locked |
| 2026-05-07–08 | Relationships Category Screen (section-category-relationships): Hero 390px · left-gradient overlay · "Relationships" Spectral 300 44px · "Explore modules" #B85C5C rose · 3 module cards 130px with rose icons (#B85C5C stroke) and illustration thumbnails · back button wired to Home · HomeScreen Explore → button wired to this section | ✅ Locked |
| 2026-05-08 | Screenshots relationships-category/: 4 screenshots captured (01-top-of-scroll, 02-modules-visible, 03-bottom-nav, 04-home-to-category). Consolidated at screenshots/wireframes/relationships-category.png | ✅ |
| 2026-05-08 | Career Category illustrations replaced with v2 set (career-hero-v2, career-burnout-v2, career-worklife-v2, career-imposter-v2). Previous versions had text artefacts and gendered figures. | ✅ |
| 2026-05-08 | Category hero gradient tightened from 0%→65% to 0%→18%→38% with 0.55 opacity midpoint. Applied to both Relationships and Career. Becomes canonical spec for all category heroes (including Health when built). Old gradient was over-veiling illustration detail. | ✅ |
| 2026-05-08 | Health Category Screen (section-category-health) built and locked. Dark forest green #2D4A2D used for title and "Explore modules" label (deviation from saffron — open question pending psychologist sync). Three module cards: Anxiety (Leaf icon), Stress (Wind icon), Grief (Heart icon). Card bg rgba(242,250,240,0.6) sage-tinted. Assets: health-hero.png, health-anxiety.png, health-stress.png, health-grief.png. HomeScreen Health card wired to section. No crisis chip (matches Career/Relationships category screen pattern). | ✅ Locked in wireframe |
| 2026-05-08 | Health Category Screen module icons updated: Anxiety → brain (cognitive anchor), Stress → lotus (release/letting go), Grief → leaf (impermanence). Replaces initial set (leaf/wind/heart). All icons remain lucide-style outline, 1.5px stroke, #2D4A2D, on sage rgba(180,200,170,0.35) circle backgrounds. | ✅ |
| 2026-05-08 | Module card thumbnail divider added: 1px solid rgba(33,24,12,0.10) on left edge of all category screen thumbnail images. Solves boundary-disappearance when thumbnail content has light left edge (triggered by Health Anxiety and Grief misty illustrations). System-level fix applied at shared class — affects Relationships, Career, and Health uniformly. | ✅ |
| 2026-05-09 | Breakup Recovery Module Screen (section-module-breakup-recovery) built — canonical module-level screen pattern established. 3 Free (STOP/PMR/Closure Letter) + 3 Premium (Hypnodrama/Cord Cutting/Inner Child). Sticky upsell banner between scrollable body and bottom nav (flex-shrink:0, not position:fixed). Crisis Support chip top-right. Progress card 33% / 2 of 6. Relationships category card 1 onclick wired from alert() to showSection('module-breakup-recovery'). 5 screenshots saved. | ✅ |
| 2026-05-09 | Technique card visual fixes (3 rounds): (1) Time strings white-space:nowrap to prevent "min" wrapping. (2) Divider moved from .mod-thumb (border-left on text area) to new .tech-thumb class (border-right on thumbnail container). (3) Thumbnail integration: removed padding-left:14px and 78×78px fixed sizing; container now overflow:hidden flush to card edges; img fills container 100%×100% with no border-radius (card overflow:hidden clips left corners). | ✅ |
| 2026-05-09–10 | Technique card content corrected: titles "Progressive Muscle Relaxation (PMR)" and "Inner Child Healing"; all 6 descriptions updated to exact spec copy. object-fit changed cover→contain on all 6 thumbnails (source images all 1536×1024 1.5:1 landscape; portrait container was cropping head/feet/hands with cover). | ✅ |
| 2026-05-10 | Wireframe file renamed: innersoothe_wireframes_v3 (12).html → innersoothe_wireframes_v3_12.html. All references in CHANGES.md updated. First git commit to origin/main (107 files). .gitignore created to exclude .claude/ local settings. | ✅ |
| 2026-05-10 | Dark therapy mode DEPRECATED for all Breakup Recovery techniques. All 6 techniques (STOP, PMR, Closure Letter, Hypnodrama, Cord Cutting, Inner Child) move to PARCHMENT-WITH-REDUCTION. Immersion via reduction (no nav on practice screens, simplified UI, generous whitespace, single point of focus) instead of inverted colours. Reasoning: dark + breathing animation pattern-matches meditation apps (Calm/Headspace); parchment + Cormorant + saffron is genuinely distinct and reinforces the self-therapy positioning. Brief Visual Identity section needs revision to reflect deprecated dark mode. | ✅ Direction locked |
| 2026-05-10 | STOP Technique entry screen (section-breakup-stop) rebuilt in parchment. Old dark-era HTML block (lines 9611–13304 original, ~3700 lines including breakup-tipp, breakup-square, breakup-pmr, breakup-accepts, breakup-ss, breakup-improve) replaced with 128-line parchment entry screen. Old .sec-stop CSS (689 lines) replaced with 148-line parchment CSS. File reduced from 26,809 → 22,702 lines. CSS lines 1384–1531; HTML lines 9070–9197. Route from module card 1 (showSection('breakup-stop')) intact. Screenshot: screenshots/stop-rebuild/01-entry-parchment.png. | ✅ |
| 2026-05-11 | STOP entry screen LOCKED — canonical entry-screen template for all 6 Breakup Recovery techniques. Tight-crop leaf-on-water metaphor hero (175px), Cormorant Garamond STOP wordmark with saffron flanking leaves, framed italic quote card ("You do not need to solve everything right now."), compact info line (use case + duration), 2 mode option cards (Guided default + Quick Reset), "Begin Slowly" saffron CTA, "You can pause anytime" footer. Bottom nav HIDDEN — immersion starts at technique entry. Fits in single viewport, no scroll. Each of the other 5 techniques (PMR, Closure Letter, Hypnodrama, Cord Cutting, Inner Child) will use this exact template with technique-specific metaphor image, wordmark, quote, info copy, and mode card descriptions. | ✅ Locked |
| 2026-05-11 | STOP Phase 2a-revised: navigation bug fixed (missing `</script>` tag). S1 concentric SVG removed; static orb added (90px `.s1-still-orb` / `.s1-still-halo` — no animation, embodies stillness). S2 concentric rings replaced with div-based breathing orb (130px) + halo; CSS class transitions `.inhale`/`.hold-top`/`.exhale`/`.hold-bottom`; `runBreathingCycles()` rewritten; session-ID guard in place. Screenshots: stop-rebuild/02-step-s-v2.png, 03-step-t-v2.png. | ✅ |
| 2026-05-11 | PMR (Progressive Muscle Relaxation) — 4 screens built (parchment-with-reduction). Entry (section-breakup-pmr-entry), Setup (section-breakup-pmr-setup), Session (section-breakup-pmr-session), Complete scaffold (section-breakup-pmr-complete). Session features body schematic SVG (220×320px), active muscle in saffron with SVG pulse animate, auto-dim after 5s inactivity, demo rotation cycling 4 muscle states. Module card 2 onclick wired to section. All 21 copy strings validated verbatim. Screenshots: pmr/01–06. | ✅ |
| 2026-05-13 | STOP Step 1 (S — Stop) LOCKED. Canonical practice-screen template established. `.s1-bottom-stack` wrapper with 32px horizontal padding and 16px gap holds quote card, confirm card, CTA, progress dots. Hero image uses radial-gradient mask-image for parchment-blend bleed (eliminates rectangular edge). Strict 780px viewport, no scroll. Headline 26px Cormorant 300 with text-wrap: balance. Body 12px DM Sans 300. Hero container 190px. Confirm circle default: 24×24px span, 1.5px solid #A06832 border, transparent background, ZERO inner HTML content (regression fixed at HTML level after 4 surface CSS patches failed). Confirm card default border matches quote card exactly (rgba(33,24,12,0.06)); confirmed state saffron border+glow via .confirmed selector. Architecture inherits to S2/S3/S4. | ✅ Locked |
| 2026-05-13 | Phase 2b: STOP Step 2 (T — Take a Breath) voice narration wired. `speakStopS2()` added to S2 script block — speaks "Box breathing. Two cycles. Follow the orb." on section entry (dispatched 400ms after show). `stopSpeak(phase.label)` called at each breath phase boundary inside `runS2BreathingCycles()` → speaks 'Breathe in', 'Hold', 'Breathe out', 'Hold' in sync with orb animation. Stale `startStopS2Breathing()` reference in `onStopSectionShow` dispatch fixed to `speakStopS2()`. Pattern pill font-size 11→10px, horizontal padding 16→12px — single-line render confirmed. Screenshots: stop-rebuild/s2-04-voice-fixed.png, s2-05-full-fixed.png. | ✅ |
| 2026-05-13 | STOP Step 2 (T — Take a Breath) — LOCKED. v9 voice-driven architecture: speech chain via utterance.onend, visual count + orb step fire on each onstart, phase advances on Four's onend. Box breathing 4-cycle pattern with optional extend. Diagnostic logging stripped. Canonical speakChain pattern documented in style-guide.md Section 21. | ✅ |
| 2026-05-14 | STOP Step 3 (O — Observe) LOCKED. Section `section-breakup-stop-s3`. Two chip grids: 10 emotions (Grief, Sadness, Anger, Guilt, Shame, Loneliness, Anxiety, Numb, Hurt, Confused) + 5 body locations (Chest, Throat, Stomach, Head, Shoulders). Multi-select via `s3ToggleChip()`. State captured to `window.stopS3Emotions[]` and `window.stopS3Body[]` for Complete screen. Headline "What are you noticing?" + subhead "Now, notice what you're feeling, and where in your body." Voice: "Step three. Observe. Now notice what you're feeling, and where in your body." | ✅ Locked |
| 2026-05-14 | STOP Step 4 (P — Proceed) LOCKED. Section `section-breakup-stop-s4`. Five action cards (Rest and breathe / Journal this moment / Talk to someone safe / Do something gentle / Return gently to your day). Single-select via `s4SelectAction()`. State captured to `window.stopS4Action` for Complete screen. CTA "I've chosen. Continue →" (changed from "Complete STOP →" — that overpromised since post-checkin still follows). Voice: "Step four. Proceed. Choose your next gentle step — the thoughtful one, not the impulsive one." | ✅ Locked |
| 2026-05-14 | Voice system unified fix. `stopCancelVoice` now bumps `_s2SessionId++` AND `_seqGeneration++` to invalidate in-flight speech chains. `stopSpeakSequence` checks `_seqGeneration` per step. `showSection` wrapped (layered AFTER PMR wrapper, with `_showSectionWrappedForStopVoice` idempotent guard) to call `stopCancelVoice()` synchronously on every navigation. Resolved chain leak that survived `speechSynthesis.cancel()` via onend callbacks. Voice standardization across S1–S4 with "Step [N]. [Step name]. [Brief instruction]." pattern. Speaker halo canonical pattern (saffron pulse on `.stop-mute-btn` when `speechSynthesis.speaking`). Back buttons simplified: S1→entry, S2→S1, S3→S2, S4→S3, no confirm dialogs. | ✅ Locked |
| 2026-05-14 | Pre check-in screen LOCKED. Section `section-breakup-stop-pre-checkin` (functional STOP-flow screen, separate from designer mockup at line 8532). Saffron+parchment palette (NOT sage — tonal consistency with rest of STOP). Back button to STOP entry, NO bottom nav. Eyebrow "EMOTION CHECK-IN · BEFORE" + headline "How are you feeling right now?" + subhead "Select up to 3 emotions and rate each. We'll check in again after the technique to see what shifted." + scale helper "1/5 = a little · 5/5 = a lot" + CTA "I'm ready →" + voice "Before we begin. Notice how you're feeling. Pick up to three emotions and rate each." Chip+dot rating engine (`.spc-pill`, `.spc-chip`, `.spc-dot`). State: `window.stopPreSelected`, `window.stopPreRatings`. Wedged between STOP entry "Begin Slowly" and S1. | ✅ Locked |
| 2026-05-14 | Post check-in screen LOCKED. Section `section-breakup-stop-post-checkin`. MANDATORY: NO back button, NO bottom nav (only audio toggle + Crisis Support in header). Eyebrow "EMOTION CHECK-IN · AFTER" + headline "How do you feel now?" + subhead "Rate the same feelings — let's see what shifted." + scale helper "1/5 = a little · 5/5 = a lot" + CTA "See your shift →" (disabled until all rated) + voice "Now. Let's check in again. Rate the same feelings to see what shifted." Chips auto-sync from pre selections — user rates same emotions with new intensity. State: `window.stopPostRatings`. Wedged between S4 and Complete. | ✅ Locked |
| 2026-05-14 | Complete screen redesigned. Section `section-breakup-stop-complete` (replaced original 3-line "Well done" placeholder). Saffron checkmark in 62px circle (decorative botanical leaves removed — were noise without purpose). SESSION COMPLETE eyebrow + "You did something hard." 23px Cormorant 300 headline + italic subhead "You paused instead of reacting. That takes real strength." YOUR SHIFT card: emotion shift rows with emoji + name + pre/5 → post/5, sage green #5C8A60 for improvement, neutral dark for stable/worse — NO red (no shame coloring). THIS SESSION card (4 rows): "Emotion noticed: [list]" + "Tightness in body noticed at: [list]" + "Breathing: N complete cycles" + "Next step: [action title]". CTAs: "Return to Breakup Recovery →" / "Journal this moment" (outlined) / "Maybe later" (tertiary). Bottom nav visible. No vertical scroll (fits 780px). Auto-populates from window state via `stopRenderComplete()`. Saves session to localStorage via `stopSaveSession()` on section entry. | ✅ Locked |
| 2026-05-14 | Progress tab built and LOCKED. Section `section-progress`. Background parchment gradient. Header: PROGRESS eyebrow + "Your healing journey" Spectral 28. Stats card: Sessions count + Day streak + Avg shift (↓N.N in sage green for improvement, ↑N.N neutral for worse, "—" for zero). Session list grouped by date buckets (Today / Yesterday / Earlier this week / Earlier). Display cap: last 30 days. Footer "Showing last 30 days · N earlier sessions" when older data exists. Session cards: timestamp + technique + module + emotion shift rows. localStorage key `innersoothe_sessions`. Mock seed of 4 historical sessions when empty. `renderProgress()` dispatched via showSection wrapper for 'progress' (gate extended from `breakup-stop-` only). Data retention: ALL data forever (no auto-deletion, localStorage ~5MB capacity handles thousands of sessions). Phase 2 features pending: chart views (avg shift trend), filter chips, archive view with month navigation. Old duplicate `section-progress` (designer mockup) renamed to `section-progress-mockup` to resolve invalid HTML ID collision. | ✅ Locked |
| 2026-05-15 | Closure Letter — Patches 1–4 built. Entry screen + pre check-in (chip+dot grid, 8 emotions, `clspc-*` IDs) + Part 1 "The Truth" + Part 2 "The Need" + Part 3 "The Closing" + closure ritual 4 choice cards. Shared `.cl-*` CSS written. CL dispatch IIFE wrapper layered after STOP voice cancel wrapper. Bug fix: dispatch was placed in `onStopSectionShow` (wrong hook — only fires for `breakup-stop-*`). Header verbatim copy from STOP pre check-in fixed overlap. Cosmetic: P3 textarea scrollbar hidden; progress dots lifted via `0 32px 56px` bottom padding with Part 3 layout compensation (80px textarea, 8px gap, 4px choice gap). State: `window.clLetter`, `window.clChoice`, `window.clPreSelected`, `window.clPreRatings`. `clCompleteTheLetter()` → `cl-post-checkin`. | ✅ |
| 2026-05-15 | Closure Letter — Patches 5–6 built. Module LOCKED end-to-end. Patch 5: `section-cl-post-checkin` (mandatory, no back, no nav) with `clspostc-*` IDs and `clEmoji` local map for emoji lookup from `window.clPreSelected` array. `clBuildPostChips` + `clPostDot` + `clPostShiftTap`. Patch 6: `section-cl-complete` — envelope hero circle + SESSION COMPLETE + "Letter Written" + closure quote + YOUR SHIFT card (sage green for post<pre) + THIS SESSION card (word count, time, ritual choice label) + adaptive ritual instruction + 3 CTAs + bottom nav. `clSaveSession()` fires on Part 3 CTA (stores pre ratings + metadata; `letterParts` only if choice=keep). Post check-in CTA updates saved session with post ratings. `clRenderComplete()` reads from localStorage by `window.clCurrentSessionId`. Session appears in Progress tab on completion. Honor-the-choice discard logic: delete/burn/read-aloud clears `window.clLetter` text. | ✅ Locked |

---

## Next Steps — In Order

1. ~~Build Career Category Screen wireframe (section-category-career)~~ — DONE (LOCKED)
2. ~~Build Health Category Screen wireframe (section-category-health)~~ — DONE (LOCKED)
3. ~~Build Breakup Recovery Module Screen (section-module-breakup-recovery)~~ — DONE (LOCKED)
4. ~~STOP Technique entry screen rebuilt — parchment-with-reduction~~ — DONE (LOCKED)
5. ~~STOP Phase 2a-revised: animation fixes (S1 still orb, S2 breathing orb)~~ — DONE
6. ~~PMR — 4 screens built (entry/setup/session/complete-scaffold)~~ — DONE
7. ~~Phase 2a (STOP Step 1) — DONE (LOCKED 2026-05-13)~~
8. ~~Phase 2b: STOP Step 2 (T — Take a Breath) — DONE (LOCKED 2026-05-13, v9 voice-driven)~~
9. ~~Phase 2c: STOP Step 3 (O — Observe)~~ — DONE (LOCKED 2026-05-14)
10. ~~Phase 2d: STOP Step 4 (P — Proceed)~~ — DONE (LOCKED 2026-05-14, 5 action cards)
11. ~~Phase 2e: Complete screen for STOP technique~~ — DONE (LOCKED 2026-05-14, rich design with shift visualization)
12. ~~Pre check-in + Post check-in (mandatory) wired into STOP flow~~ — DONE (LOCKED 2026-05-14)
13. ~~Progress tab with localStorage persistence~~ — DONE (LOCKED 2026-05-14)
14. ~~STOP flow end-to-end review~~ — superseded by Closure Letter build
15. **→ PMR Entry + Complete sync to STOP canonical templates** (parallel chat — prompt ready)
16. ~~Closure Letter — Patches 5–6~~ — DONE (LOCKED 2026-05-15)
17. **→ PMR Entry + Complete sync to STOP canonical templates** (parallel chat — prompt ready)
18. STOP Phase 3: Quick Reset mode (stub `startStopGuided()` exists, needs full implementation)
19. Progress tab Phase 2: chart view (weekly avg shift trend), filter chips, archive view with month navigation
13. Psychologist sync: review Home v5 + Today scaffold + all three category screens (Relationships / Career / Health)
14. Psychologist sync: approve/adjust category tint colors (Relationships pink, Health sage, Career gold)
15. Psychologist sync: green in splash/dark screens — lift rule or fix wireframe
16. Psychologist sync: crisis 🆘 button placement on every in-app screen
17. Psychologist sync: onboarding modifications per psychologist review
18. Resolve "heal from within" sub-brand — in or out
19. Source higher-resolution illustration assets (repo root crops < 600px, usable for wireframe but not production)
20. Psychologist records Cord Cutting voice first
21. Claude Code: set up full modular architecture
22. Build React Native screens — onboarding first
23. iubenda Privacy Policy + ToS
24. App Store submission (~60 days at 10hrs/day)
