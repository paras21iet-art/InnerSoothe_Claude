# InnerSoothe — Visual Style Guide

Extracted from: Onboarding screens 01–04 · Pre-check-in screens · Post-check-in screens.
No values from dark therapy screens, Home tab, or any other section are included here.

---

## 1. Color Palette

### CSS Root Tokens (`:root`)

| Token | Hex | Usage |
|-------|-----|-------|
| `--sage` | `#A06832` | Primary accent — saffron |
| `--sage-light` | `#C4956A` | Lighter saffron |
| `--sage-pale` | `#F0E8D8` | Parchment |
| `--warm-white` | `#F0E8D8` | Alias for parchment |
| `--cream` | `#EAE0CC` | Cream — used in onboarding bg |
| `--charcoal` | `#1E1408` | Warm charcoal |
| `--stone` | `#6B5540` | Mid warm brown |
| `--bark` | `#8C5A1E` | Dark saffron-brown |
| `--bark-light` | `#C4956A` | Alias for sage-light |
| `--mist` | `#EAE0CC` | Alias for cream |

### Screen Backgrounds

| Screen | Background |
|--------|------------|
| 01 Splash | `linear-gradient(170deg, #1E1408 0%, #3E5247 60%, #4A6355 100%)` |
| 02 Your Name | `radial-gradient(circle at 50% 12%, rgba(255,240,220,0.68), rgba(255,240,220,0.4), rgba(255,240,220,0.18), transparent 55%), linear-gradient(to bottom, #F9EDDF 0%, #E9DAC5 55%, #E2CEB8 100%)` |
| 03 Category | Same as screen 02 |
| 04 Your Space is Ready | `linear-gradient(160deg, #FAF0E4 0%, #EDE0CC 50%, #E2CEB8 100%)` |
| Pre check-in | `#FAF0E4` |
| Post check-in | `#F0F4F0` |
| Shift card | `#FAF0E4` |

### Text Colors (Light Screens)

| Role | Value |
|------|-------|
| Headline (full opacity) | `rgba(62,42,31,0.92)` |
| Body / label | `rgba(62,42,31,0.60)` |
| Secondary / muted | `rgba(62,42,31,0.45)` |
| Ghost / inactive | `rgba(62,42,31,0.30)` |
| Status bar clock | `rgba(62,42,31,0.40)` – `rgba(62,42,31,0.45)` |
| Ghost link | `rgba(47,36,30,0.45)` |
| Name input | `#3E2A1F` |
| Subline warm mid | `#7A6A5A` |

### Accent Colors (Light Screens)

| Role | Value |
|------|-------|
| Primary saffron | `#A06832` |
| Light saffron | `#C4956A` |
| CTA text (warm cream) | `#F3E9DC` |

### Post Check-in Specific (Sage-Green Mode)

| Role | Value |
|------|-------|
| Background | `#F0F4F0` |
| Overline / accent | `#5C8A60` |
| Headline text | `rgba(30,50,32,0.88)` |
| Body text | `rgba(42,62,44,0.45)` |
| Status bar | `rgba(42,62,44,0.38)` |
| Hairline | `rgba(42,62,44,0.09)` |
| CTA bg | `#5C8A60` |

### Shift Card Specific

| Role | Value |
|------|-------|
| Overline | `#7A9E7E` |
| Secondary btn border | `rgba(122,158,126,0.40)` |
| Secondary btn color | `#7A9E7E` |

---

## 2. Typography

### Font Families

| Family | Weights Used | Role |
|--------|-------------|------|
| Cormorant Garamond | 300, 400 | Wordmark · name input field · welcome name (screen 04) |
| DM Sans | 400, 500, 600, 700 | All UI — buttons · labels · body · inputs |
| Spectral | — | Pre/post check-in headlines only (see Ambiguous Decisions) |

### Type Scale (Reference Screens Only)

| Element | Family | Size | Weight | Color | Notes |
|---------|--------|------|--------|-------|-------|
| Splash wordmark | Cormorant Garamond | 34px | 300 | `#fff` / `#C4956A` (Soothe span) | Letter-spacing 3px |
| Onboarding headline class (`.onb-headline`) | Cormorant Garamond | 26px | 300 | `#342018` | Line-height 1.25 |
| Screen 02 headline (inline override) | Cormorant Garamond | 29px | 300 | — | Line-height 1.2 — overrides class |
| Welcome name class (`.onb-welcome-name`) | Cormorant Garamond | 30px | 400 | `#3E2A1F` | Line-height 1.2 |
| Screen 04 welcome name (inline override) | Cormorant Garamond | 22px | — | — | Overrides class |
| Pre/post headline | Spectral | 22px | — | `rgba(62,42,31,0.92)` / `rgba(30,50,32,0.88)` | Line-height 1.25 |
| Name input field | Cormorant Garamond | 20px | 300 | `#3E2A1F` | — |
| Category card title (`.onb-cat-title`) | DM Sans | 15px | 600 | `#3E2A1F` | Line-height 20px |
| Onboarding subline (`.onb-subline`) | DM Sans | 12px | — | `#7A6A5A` | Line-height 1.75 |
| Category card description (`.onb-cat-desc`) | DM Sans | 12–13px | 400 | `rgba(62,42,31,0.60)` | Line-height 1.35 |
| Overline ("Before we begin") | DM Sans | 8.5px | 600 | `#A06832` | Letter-spacing 1.5px, uppercase |
| Counter / small labels | DM Sans | 9–9.5px | 400 | `rgba(62,42,31,0.45)` | — |
| Hint text (italic) | DM Sans | 9px | — | `rgba(62,42,31,0.30)` | `font-style: italic` |
| Ghost link (screen 02) | — | 11px | — | `rgba(47,36,30,0.45)` | — |
| Progress bar label (`.onb-bar-label`) | DM Sans | 10px | 500 | `#7A6A5A` | Letter-spacing 0.2px |
| Onboarding CTA | DM Sans | 14px | 500 | `#F3E9DC` | — |
| Pre/post CTA | DM Sans | 13px | 600 | `#fff` | — |
| Auth buttons (Google / Apple) | DM Sans | 12.5–13px | 500–600 | Various | — |

---

## 3. Gradients

### Screen Backgrounds
```
Splash (dark):
  linear-gradient(170deg, #1E1408 0%, #3E5247 60%, #4A6355 100%)

Onboarding 02 / 03:
  radial-gradient(circle at 50% 12%,
    rgba(255,240,220,0.68),
    rgba(255,240,220,0.40),
    rgba(255,240,220,0.18),
    transparent 55%),
  linear-gradient(to bottom, #F9EDDF 0%, #E9DAC5 55%, #E2CEB8 100%)

Onboarding 04:
  linear-gradient(160deg, #FAF0E4 0%, #EDE0CC 50%, #E2CEB8 100%)
```

### Ambient Glows (Screen 04)
```
Inline div (top: 25%, left: 50%, 200×140px):
  radial-gradient(ellipse at 50% 40%,
    rgba(192,138,50,0.07) 0%,
    rgba(192,138,50,0.03) 55%,
    transparent 80%)

::before pseudo on .onb-welcome-bg:
  radial-gradient(ellipse 280px 280px at 50% 35%, rgba(160,104,50,0.07) 0%, transparent 70%),
  radial-gradient(ellipse 180px 180px at 80% 70%, rgba(122,82,48,0.05) 0%, transparent 70%)
```

### Splash Orb
```
radial-gradient(circle at 35% 35%, #C4956A, #A06832)
Glow: box-shadow: 0 0 40px rgba(181,206,170,0.4)
```

### Progress Bar Fill
```
linear-gradient(90deg, #A06832, #C4956A)
```

### Primary CTA Button
```
linear-gradient(to bottom, #9A6A42, #7A5230)
```

### Google-Sign-In Primary Button (Screen 04)
```
linear-gradient(to bottom, #3E2A1F, #2A1A0F)
```

---

## 4. Iconography

### Category Icons (Screen 03 + Home Tab)
| Category | Emoji | Rendered size |
|----------|-------|--------------|
| Relationships | 💔 | 22px (class) → 18px (override) |
| Career | ⏳ | 22px (class) → 18px (override) |
| Health | 🌿 | 22px (class) → 18px (override) |

### Check-In Flow Icons
| Context | Emoji | Size |
|---------|-------|------|
| Pre check-in overline | 🌸 | — |
| Post check-in overline | ✦ | — |
| AI insight | ✨ | 16px (in flow diagram) |
| Progress | 📊 | 16px |

### Check mark (category card selected)
- Size: 13px, weight 700
- Container: 22×22px circle, `border: 1.5px solid rgba(122,82,48,0.25)`, `border-radius: 50%`
- Selected fill: `rgba(122,82,48,0.12)`, border `#7A5230`

No decorative illustrations or SVG icons are used in the reference screens. Iconography is emoji-only.

---

## 5. Buttons

### Primary CTA — Onboarding (`.onb-btn-primary`)
```
height: 56px
border: 1px solid rgba(255,255,255,0.25)
border-radius: 28px
background: linear-gradient(to bottom, #9A6A42, #7A5230)
color: #F3E9DC
font: DM Sans 14px 500
box-shadow: 0 6px 12px rgba(122,82,48,0.25), 0 2px 4px rgba(122,82,48,0.20)
transition: transform 150ms ease-in-out, box-shadow 150ms ease-in-out

:disabled   → opacity: 0.40; cursor: not-allowed
:hover      → translateY(-1px); box-shadow elevated
:active     → scale(0.97); box-shadow reduced; transition 100ms ease-in-out
```

Variants:
- `.onb-early` (screens 02–03): lighter shadow — `0 5px 10px rgba(122,82,48,0.22), 0 2px 4px rgba(122,82,48,0.16)`
- `.onb-late` (screen 04): heavier shadow — `0 7px 14px rgba(122,82,48,0.28), 0 3px 5px rgba(122,82,48,0.22)`

### Pre-Check-In CTA ("Begin →")
```
width: 100%
padding: 13px
border-radius: 22px
border: none
background: #A06832
color: #fff
font: DM Sans 13px 600
opacity: 0.28  (locked / disabled)
transition: opacity 0.22s
```
Unlocks to `opacity: 1` when all emotions are rated.

### Post-Check-In CTA ("See your shift →")
```
Same structure as pre-check-in CTA but:
background: #5C8A60
margin-top: auto  (pushed to bottom of flex container)
```

### Auth Buttons (Screen 04)

Google (`.onb-btn-g`):
```
padding: 14px 16px
border-radius: 16px
border: 1px solid rgba(62,42,31,0.14)
background: rgba(243,233,220,0.80)
font: DM Sans 12.5px 500
color: #3E2A1F
```

Google Primary (`.onb-btn-g-primary`):
```
border: none
background: linear-gradient(to bottom, #3E2A1F, #2A1A0F)
color: #F3E9DC
font: DM Sans 13px 600
box-shadow: 0 6px 16px rgba(30,16,8,0.28), 0 2px 5px rgba(30,16,8,0.18)
```

Apple Secondary (`.onb-btn-a-secondary`):
```
padding: 12px 16px
border-radius: 16px
border: 1px solid rgba(62,42,31,0.18)
background: rgba(243,233,220,0.82)
font: DM Sans 12.5px 500
color: #3E2A1F
```

### Shift Card Buttons
Primary ("Back to Heal"):
```
padding: 11px
border-radius: 20px
background: #A06832
color: #fff
font: DM Sans 12px 600
```
Secondary ("View Progress →"):
```
padding: 10px
border-radius: 20px
border: 1px solid rgba(122,158,126,0.40)
background: transparent
color: #7A9E7E
font: DM Sans 12px 600
```

### Ghost Link (Screen 02)
```
font-size: 11px
color: rgba(47,36,30,0.45)
text-align: center
margin-top: 14px
```

---

## 6. Card / Surface Treatments

### Category Card (`.onb-cat-card`) — Screen 03
```
display: flex; align-items: center; gap: 10px
padding: 12px          (effective with override)
min-height: 64px       (effective with override)
border-radius: 16px
background: rgba(253,248,242,0.90)
border: 1.5px solid rgba(62,42,31,0.10)
cursor: pointer
transition: all 180ms ease
user-select: none

:hover  → background rgba(253,248,242,0.99); border-color rgba(122,82,48,0.22)
:active → transform: scale(0.98)

.on (selected):
  background: rgba(138,90,59,0.11)
  border-color: #8A5A3B
  box-shadow: inset 0 1px 4px rgba(138,90,59,0.12), 0 4px 14px rgba(138,90,59,0.14)
  transform: scale(1.02)
```

### Name Input Field (`.onb-name-field`) — Screen 02
```
background: rgba(243,233,220,0.80)
border: 1px solid rgba(62,42,31,0.15)
border-radius: 16px
padding: 14px 16px
font: Cormorant Garamond 20px 300
color: #3E2A1F
transition: border-color 0.2s
```

### Emotion Chip (`.onb-ec`) — Pre Check-in
```
border-radius: 99px
background: rgba(243,233,220,0.92)
font: DM Sans 11.5px 500
transition: all 180ms ease

.on (selected):
  background: rgba(122,82,48,0.18)
  border-color: #7A5230
  box-shadow: 0 3px 14px rgba(122,82,48,0.20)
```

### Intensity Dot (`.idot`) — Pre Check-in
```
width: 20px; height: 20px
border-radius: 50%
border: 1px solid #DDD
background: white

.active:
  background: var(--sage)   → #A06832
  color: white
  border-color: var(--sage)
```

### USP Reinforcement Card — Pre Check-in
```
padding: 8px 10px
background: rgba(160,104,50,0.07)
border-left: 2px solid rgba(160,104,50,0.30)
border-radius: 0 8px 8px 0
font-size: 10px
color: rgba(62,42,31,0.52)
line-height: 1.6
```

### USP Reinforcement Card — Post Check-in
```
Same structure but:
background: rgba(92,138,96,0.08)
border-left: 2px solid rgba(92,138,96,0.30)
color: rgba(42,62,44,0.50)
```

### Contextual Nudge — Pre Check-in
```
padding: 6px 10px
background: rgba(160,104,50,0.08)
border-radius: 10px
font-size: 9.5px
color: #A06832
text-align: center
```

### Hairline Divider
```
Pre check-in: height: 1px; background: rgba(62,42,31,0.09)
Post check-in: height: 1px; background: rgba(42,62,44,0.09)
```

---

## 7. Spacing Rhythm

### Container Padding (reference screens)

| Screen / Element | Padding |
|-----------------|---------|
| Status bar | `12px 22px 0` (onboarding) / `14px 26px 4px` (splash) |
| Progress bar wrap (`.onb-bar-wrap`) | `14px 22px 0` (top + sides) |
| Onboarding body (`.onb-body`) | `18px 22px 12px` |
| Screen 04 main content | `14px 22px 10px` |
| Pre/post check-in body | `16px 20px 16px` |
| Category card | `12px` all sides |
| USP card | `8px 10px` |
| Contextual nudge | `6px 10px` |

### Gap / Margin Rhythm

| Context | Value |
|---------|-------|
| Gap between category cards | `12px` |
| Gap between pre-checkin chip rows | `6px` |
| Gap between post-checkin chip rows | `7px` |
| Overline to headline | `8px` |
| Headline to subline | `8px` |
| Subline to primary input/card | `16–24px` |
| CTA margin-top from content | `auto` (flex push) or `16px` |
| Ghost link margin-top | `14px` |

### Progress Bar
```
Track height: 3px
Border-radius: 99px
Track background: rgba(47,36,30,0.12)
Fill: linear-gradient(90deg, #A06832, #C4956A)
```

---

## 8. Motion

All transitions are on individual properties — no blanket `transition: all` on interactive elements except category cards.

| Element | Property | Duration | Easing |
|---------|----------|----------|--------|
| Progress bar fill | `width` | `0.6s` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Onboarding CTA default | `transform, box-shadow` | `150ms` | `ease-in-out` |
| Onboarding CTA active (press) | `transform, box-shadow` | `100ms` | `ease-in-out` |
| Splash CTA | `transform, box-shadow` | `180ms` | `ease` |
| Category card | `all` | `180ms` | `ease` |
| Category check indicator | `opacity, background` | `180ms` | `ease` |
| Emotion chip (`.onb-ec`) | `all` | `180ms` | `ease` |
| Name input border | `border-color` | `0.2s` | — |
| Pre/post CTA unlock | `opacity` | `0.22s` | — |

Hover: `translateY(-1px)` on primary CTA.
Active/press: `scale(0.97)` on CTA; `scale(0.98)` on category card.
No page-transition animations are present in the reference screens.

---

## 9. Explicit Don'ts

Derived from the psychologist constraints in the project brief and the reference screens:

- No gender-specific illustrations or human figures
- No regionally coded imagery
- No dark or dramatic visual treatments on light screens
- No generic nature landscapes
- No abstract silk-wave animations or blurred backgrounds
- No blurring of any kind — clean solutions only
- No illustrations used as full-bleed backgrounds (contained elements only)
- No tagline text in the splash wordmark area (CSS class exists; text slot is intentionally empty)
- No `transition: all` on CTAs — always target specific properties

---

## Ambiguous Decisions — Requires Human Resolution Before Guide is Final

1. **Spectral vs Cormorant Garamond on pre/post check-in headlines.**
   Pre and post check-in headline (`22px`) uses `font-family: 'Spectral', serif` in the wireframe HTML. Spectral is not imported or used anywhere else. It is unclear whether this is intentional (a different feel for the emotion-rating context) or a leftover from an earlier design iteration. Decision needed: standardise to Cormorant Garamond, or keep Spectral for these two screens only?

2. **Canonical headline size: 26px (class) or 29px (inline override) on screen 02.**
   `.onb-headline` sets `font-size: 26px`. Screen 02 overrides it inline to `29px`. Screen 03 does not override. Which is the canonical heading size for multi-word short questions?

3. **Canonical welcome-name size: 30px (class) or 22px (inline override) on screen 04.**
   `.onb-welcome-name` defines `font-size: 30px`. Screen 04 overrides inline to `22px`. The class also defines `font-weight: 400` (heavier than the 300 used everywhere else in Cormorant Garamond). Which values are final?

4. **Post check-in background: intentional green tint or accidental?**
   Pre check-in and shift card both use `#FAF0E4` (warm cream). Post check-in uses `#F0F4F0` (cool, slightly green-tinted white). Is the green tint an intentional signal that the user has completed a session (matching the sage-green `#5C8A60` accent on that screen), or a background that should also be `#FAF0E4`?

5. **CTA border-radius inconsistency across the flow.**
   Onboarding CTAs: `28px`. Pre/post check-in CTA: `22px`. Shift card buttons: `20px`. Three different radii for the same action button type. Which radius is canonical for a full-width primary CTA?

6. **"Already have an account" button — absent from reference screens.**
   The project brief and splash description mention a secondary outline CTA "Already have an account" on the splash. It is not present in the splash HTML. The splash screen shows only the primary "Begin" button. Confirm whether the secondary CTA was removed or is still intended.

7. **Emotion grid on pre check-in — emoji or text chips?**
   The pre check-in screen references `buildEmotionGrid()` (a JS function) and `#pre-emotion-grid` with no static HTML inside. The rendered state of this grid (emoji icons, text labels, size, selected state) is not derivable from static HTML alone and was not captured in this extraction. Needs a live browser review to confirm exact chip appearance.
