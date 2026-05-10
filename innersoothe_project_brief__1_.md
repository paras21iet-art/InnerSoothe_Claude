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

## GTM — North India Corridor First
1. Lucknow / Kanpur
2. Punjab
3. Tier-2 Haryana
4. NCR last (saturated)

Asset-light virtual model — inspired by WeRize zero-branch approach.

---

## Critical Technical Rule — SVG Animations

animate with repeatCount="1" and fill="freeze":
- keyTimes MUST start at exactly 0.000
- keyTimes MUST end at exactly 1.000
- Violation freezes all animation at last defined keyTime

---

## Open Questions

1. **"No green in navigation" rule — lift or fix wireframe?**
   The splash uses `linear-gradient(170deg, #1E1408 0%, #3E5247 60%, #4A6355 100%)` and the dark therapy screens use #1F2924 / #2A3530 — all contain green-shifted tones. The original "no green" rule was written when the splash was parchment. Decision needed: accept current dark-green treatment as intentional, or replace with warm-dark-only palette. Pending psychologist / design sync.

2. **Crisis 🆘 button placement — needs to be reachable on every in-app screen.**
   Currently the 🆘 button is in the wireframe meta-navigation bar (designer view) only. It is not wired into individual phone mockup screens. Apple App Store guidelines for mental health apps require it to be accessible from within the app at all times. Pending psychologist sync on placement (header icon vs persistent footer element).

---

## Decisions Log
*Claude Code appends here after every session with date and what was resolved.*

| Date | Decision | Status |
|------|----------|--------|
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

---

## Next Steps — In Order

1. ~~Build Career Category Screen wireframe (section-category-career)~~ — DONE (LOCKED)
2. ~~Build Health Category Screen wireframe (section-category-health)~~ — DONE (LOCKED)
3. ~~Build Breakup Recovery Module Screen (section-module-breakup-recovery)~~ — DONE (LOCKED)
4. Psychologist sync: review Home v5 + Today scaffold + all three category screens (Relationships / Career / Health)
4. Psychologist sync: approve/adjust category tint colors (Relationships pink, Health sage, Career gold)
5. Psychologist sync: green in splash/dark screens — lift rule or fix wireframe
6. Psychologist sync: crisis 🆘 button placement on every in-app screen
7. Psychologist sync: onboarding modifications per psychologist review
8. Resolve "heal from within" sub-brand — in or out
9. Source higher-resolution illustration assets (repo root crops < 600px, usable for wireframe but not production)
10. Psychologist records Cord Cutting voice first
11. Claude Code: set up full modular architecture
12. Build React Native screens — onboarding first
13. iubenda Privacy Policy + ToS
14. App Store submission (~60 days at 10hrs/day)
