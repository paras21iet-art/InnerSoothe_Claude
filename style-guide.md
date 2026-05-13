# InnerSoothe — Visual Style Guide

Extracted from: Onboarding screens 01–04 · Pre-check-in screens · Post-check-in screens · Home tab · Today tab · Category screens (Relationships, Career, Health) · Module screen (Breakup Recovery — canonical).
Dark therapy screens (section-breakup-paths and descendants) are not included here.

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

8. **Health category "Explore modules" label — #2D4A2D or #A06832?**
   All other category screens use saffron `#A06832` for this label. Health uses dark forest green `#2D4A2D`. Pending psychologist sync — may unify to saffron.

---

---

## 10. In-App Phone Shell

Two shell variants used across in-app screens:

| Context | Background | Notes |
|---------|------------|-------|
| Home · Today | `linear-gradient(160deg, #FAF0E4 0%, #EDE0CC 50%, #E2CEB8 100%)` | Warm gradient matching onboarding 04 |
| Category screens · Module screen | `#F9EDD8` | Solid parchment |

All shells share:
```
width: 370px; height: 780px
border-radius: 48px
box-shadow: 0 28px 70px rgba(30,20,8,0.13),
            0 0 0 1.5px rgba(30,20,8,0.10),
            inset 0 0 0 1px rgba(255,255,255,0.60)
overflow: hidden
display: flex; flex-direction: column
```

---

## 11. In-App Status Bar

Shared across all in-app screens:
```
padding: 14px 24px 0
font-family: 'DM Sans', sans-serif
font-size: 11px; font-weight: 600
color: rgba(30,20,8,0.45)
flex-shrink: 0; z-index: 10; position: relative
```
Left: time "9:41". Right: signal bars + WiFi + battery SVG cluster, fill/stroke `rgba(30,20,8,0.50)` (bars/WiFi) and `rgba(30,20,8,0.38)` / `rgba(30,20,8,0.55)` (battery outline/fill).

---

## 12. In-App Navigation System

### 12.1 Back Button

Used on all category and module screens. Not on Home or Today (no back on top-level tabs).

```
position: absolute; top: 42px; left: 16px; z-index: 30
width: 44px; height: 44px; border-radius: 22px
background: rgba(255,255,255,0.80)
box-shadow: 0 2px 8px rgba(30,20,8,0.10)
display: flex; align-items: center; justify-content: center
```
Icon: Lucide chevron-left, 22×22px, stroke `#1E1408`, stroke-width 1.8, rounded caps.

### 12.2 Bottom 5-Tab Nav + FAB

Two minor variants exist — use the correct one per screen type.

**Variant A — Category screens + Module screen:**
```
background: rgba(250,244,234,0.98)
border-top: 1px solid rgba(30,20,8,0.07)
padding: 10px 4px 22px
display: flex; justify-content: space-around; align-items: flex-end
flex-shrink: 0
```

**Variant B — Today screen:**
```
background: rgba(250,240,228,0.95)
border-top: 1px solid rgba(160,104,50,0.12)
height: 68px
padding: 0 8px 4px
```

**Tab items (both variants):**
- Active: color `#A06832`; font DM Sans 10px 600 (Variant A) / 9px 600 (Variant B)
- Inactive: color `rgba(30,20,8,0.60)` (Variant A) / `#A06832` opacity 0.55 (Variant B)
- Icon: 22×22px stroke-width 1.5

**Center FAB — Today:**
```
width: 54px; height: 54px; border-radius: 27px
background: #A06832
position: relative; top: -18px
box-shadow (category/module screens): 0 6px 22px rgba(122,82,48,0.45), 0 0 0 4px rgba(250,244,234,0.98)
box-shadow (Today screen active): 0 4px 16px rgba(160,104,50,0.40), 0 0 0 5px rgba(160,104,50,0.12)
```
Label "Today": DM Sans 9px, color `rgba(30,20,8,0.50)` (inactive) / `#A06832` 600 (active on Today).

Tab order: Home · Journal · **Today (FAB)** · Progress · Settings.

### 12.3 Crisis Chip — Two Variants

**Variant A — Home screen (top-right, casual):**
```
position: absolute; top: 42px; right: 20px; z-index: 20
background: rgba(250,240,228,0.82)
border: 1.5px solid #A06832; border-radius: 22px
padding: 5px 13px
font: DM Sans 10px 600; color: #A06832
label: "Crisis"
```

**Variant B — Module screen (top-right, prominent):**
```
position: absolute; top: 46px; right: 16px; z-index: 30
background: rgba(160,104,50,0.10)
border: 1px solid rgba(160,104,50,0.35); border-radius: 22px
padding: 6px 12px
font: DM Sans 12px 500; color: #A06832
label: "Crisis Support"
icon: shield SVG 13×13px stroke #A06832 stroke-width 2
```

Both route to `showSection('crisis-resources')`. Category screens carry no crisis chip.

---

## 13. Home Screen (`section-relationship`)

**Background:** `linear-gradient(160deg, #FAF0E4 0%, #EDE0CC 50%, #E2CEB8 100%)`  
**Scrollable body:** `flex:1; overflow-y:auto; scrollbar-width:none`

### Hero Block
```
display: flex; flex-direction: row
padding: 44px 24px 20px
align-items: center
```

| Element | Spec |
|---------|------|
| Text column | `flex: 1.2; padding-top: 4px` |
| "Hello," | Spectral 26px 300 #1E1408 line-height:30px display:block |
| "Arjun." | Spectral 36px 300 italic #1E1408 display:block margin-top:-2px line-height:42px |
| Tagline | DM Sans 14px 300 rgba(33,24,12,0.65) line-height:20px |
| Image column | `flex: 1.1; height: 130px; overflow: hidden; position: relative` |
| Hero image | object-fit:cover; object-position:center top |
| Left-edge fade | position:absolute; width:45%; background: linear-gradient(to right, #F0E8D8, rgba(240,232,216,0)) |

### Section Labels
```
font: DM Sans 13px 600; color: #A06832
```
- "Continue your path" — margin-bottom:10px
- "Explore healing paths" + "View all ›" — flex row, space-between

### Continue Card (last-in-progress path)
```
border-radius: 20px; overflow: hidden
background: rgba(253,249,244,0.98)
box-shadow: 0 2px 12px rgba(30,20,8,0.04), 0 8px 28px rgba(30,20,8,0.07)
min-height: 132px; margin-bottom: 20px
display: flex; flex-direction: row
```
Left `flex:1.3`, padding 16px 10px 14px 16px:
- Icon circle: 36×36px, border-radius:18px, background `rgba(160,104,50,0.13)`
- Module title: DM Sans 14px 600 `#1E1408`
- Description: DM Sans 10.5px `rgba(30,20,8,0.56)` line-height:1.48
- "Last session" text: DM Sans 9.5px `rgba(30,20,8,0.40)`
- Progress bar: 3px, track `rgba(30,20,8,0.09)`, fill `linear-gradient(90deg,#A06832,#C4956A)`, border-radius:99px
- Sessions text: DM Sans 9.5px `rgba(30,20,8,0.40)`

Right `flex:1`, overflow:hidden:
- Image: position:absolute; inset:0; object-fit:cover
- Left fade div: 36px width, `linear-gradient(to right, rgba(253,249,244,0.98), transparent)`
- CTA "Continue →": background `#A06832`, color `#FAF0E4`, border-radius:22px, padding:7px 15px, DM Sans 11px 600, box-shadow `0 4px 14px rgba(122,82,48,0.38)`

### Home Category Cards (full-bleed)
```
height: 160px; border-radius: 20px; overflow: hidden
box-shadow: 0 2px 12px rgba(30,20,8,0.05), 0 8px 24px rgba(30,20,8,0.07)
margin-bottom: 12px; position: relative
```
Image: `position:absolute; inset:0; object-fit:cover`

Gradient overlays by category:

| Category | Overlay |
|----------|---------|
| Relationships | `linear-gradient(to right, rgba(219,162,162,0.90) 0%, rgba(219,162,162,0.45) 45%, rgba(219,162,162,0) 72%)` |
| Health | `linear-gradient(to right, rgba(180,200,170,0.90) 0%, rgba(180,200,170,0.45) 45%, rgba(180,200,170,0) 72%)` |
| Career | `linear-gradient(to right, rgba(219,191,150,0.90) 0%, rgba(219,191,150,0.45) 45%, rgba(219,191,150,0) 72%)` |

Content area (z-index:2, padding:16px, width:62%, height:100%):
- Icon circle: 34×34px, border-radius:17px, background `rgba(255,255,255,0.28)`, margin-bottom:7px
- Category name: Cormorant Garamond 20px 400 `rgba(30,20,8,0.92)` line-height:1.1
- Description: DM Sans 10px `rgba(30,20,8,0.72)` line-height:1.45
- "Explore →" button: transparent, border `1.5px solid rgba(30,20,8,0.30)`, color `rgba(30,20,8,0.82)`, border-radius:18px, padding:5px 13px, DM Sans 11px 500

---

## 14. Today Screen (`section-today`)

**Background:** `linear-gradient(160deg, #FAF0E4 0%, #EDE0CC 50%, #E2CEB8 100%)`  
**Scrollable body padding:** `8px 20px 16px`

### Header
```
display: flex; justify-content: space-between; align-items: flex-end
margin-bottom: 20px; padding-top: 4px
```
- Date overline: DM Sans 11px 500 `rgba(30,20,8,0.45)` letter-spacing:0.8px uppercase margin-bottom:2px
- "Today": Spectral 28px 300 `#1E1408` line-height:1.1
- History icon: 36×36px circle, background `rgba(160,104,50,0.10)`, stroke `#A06832`

### Content Cards (shared base)
```
background: rgba(255,255,255,0.48)
border-radius: 18px
padding: 18px 20px
margin-bottom: 14px
border: 1px solid rgba(160,104,50,0.12)
```
Card overline (shared): DM Sans 10px 600 `#A06832` letter-spacing:1px uppercase

**Daily Intention card:**
- Quote: Spectral 18px 300 italic `#1E1408` line-height:1.5 margin-bottom:12px
- "Sit with this for a moment": DM Sans 11px `rgba(30,20,8,0.50)`
- "New intention" button: border `1.5px solid rgba(160,104,50,0.35)`, color `#A06832`, border-radius:14px, padding:4px 12px, DM Sans 10px 500

**Feeling check-in card:**
- Emoji scale: 5 items (😞 😔 😐 🙂 😌), active item larger (26px vs 22px), active has drop-shadow
- Slider track: height:4px, background `rgba(160,104,50,0.15)`, border-radius:2px
- Fill: `linear-gradient(to right, rgba(160,104,50,0.35), #A06832)`
- Thumb: 16×16px, border-radius:8px, background `#A06832`, box-shadow `0 2px 8px rgba(160,104,50,0.50)`
- Scale labels: DM Sans 9px `rgba(30,20,8,0.40)` ("Heavy" / "Neutral" / "Light")

### Exercise Cards
```
background: rgba(255,255,255,0.48)
border-radius: 16px
padding: 14px 16px
border: 1px solid rgba(160,104,50,0.10)
display: flex; align-items: center; gap: 14px
```
- Icon square: 46×46px, border-radius:14px, background `rgba(160,104,50,0.10)`, icon 22×22px stroke `#A06832`
- Title: Cormorant Garamond 16px 400 `#1E1408` margin-bottom:2px
- Subtitle (technique · duration): DM Sans 11px `rgba(30,20,8,0.50)`
- Play button (primary/active): 32×32px circle, background `#A06832`, play icon white
- Play button (secondary/inactive): background `rgba(160,104,50,0.15)`, play icon `#A06832`

Section sub-label ("Suggested for you"): DM Sans 11px 600 `rgba(30,20,8,0.45)` letter-spacing:0.8px uppercase padding-left:2px margin-bottom:10px

---

## 15. Category Screens

Shared across `section-category-relationships`, `section-category-career`, `section-category-health`.

**Phone background:** `#F9EDD8` (solid parchment, not gradient)

### A. Hero Band
```
position: relative; height: 340px; flex-shrink: 0
```
- Image: `position:absolute; inset:0; width:100%; height:100%; object-fit:cover`
- Gradient overlay (canonical — all three categories):
  ```
  linear-gradient(to right, #F0E8D8 0%, rgba(240,232,216,0.55) 18%, rgba(240,232,216,0) 38%)
  ```
- Title: `position:absolute; padding: 52px 24px 0`

Title typography by category:

| Category | Font | Size | Weight | Color |
|----------|------|------|--------|-------|
| Relationships | Spectral | 40px | 300 | `#1E1408` |
| Career | Spectral | 40px | 300 | `#1E1408` |
| Health | Spectral | 40px | 300 | `#2D4A2D` |

line-height: 1.05 (all three)

### B. Subtitle Strip
```
padding: 16px 24px 8px
background: #F0E8D8
font: DM Sans 14px 300; color: rgba(33,24,12,0.65); line-height: 20px
```

| Category | Subtitle text |
|----------|---------------|
| Relationships | "Navigate heartbreak, attachment, distance, and emotional connection." |
| Career | "Move through burnout, pressure, uncertainty, and work-life imbalance." |
| Health | "Move through anxiety, stress, grief, and inner tension." |

### C. "Explore Modules" Label
```
padding: 16px 24px 12px (Relationships) / 24px 24px 12px (Career + Health)
font: DM Sans 14px 500; letter-spacing: 0.1px
color: #A06832 (Relationships, Career) / #2D4A2D (Health — open question)
```

### D. Module Cards
```
display: flex; flex-direction: row
height: 138px; border-radius: 18px; overflow: hidden
box-shadow: 0 4px 12px rgba(30,20,8,0.05)
margin-bottom: 14px (last card: 4px)
padding: 0 20px 20px (container)
```

Background by category:

| Category | Card background |
|----------|----------------|
| Relationships | `rgba(252,242,232,0.6)` |
| Career | `rgba(252,243,228,0.6)` |
| Health | `rgba(242,250,240,0.6)` |

Left content `flex:1.1; padding:14px 16px; flex-direction:column; justify-content:center`:
- Icon circle: 44×44px, border-radius:22px

  | Category | Circle bg | Icon stroke |
  |----------|-----------|-------------|
  | Relationships | `rgba(219,162,162,0.25)` | `#B85C5C` |
  | Career | `rgba(219,191,150,0.25)` | `#A06832` |
  | Health | `rgba(180,200,170,0.35)` | `#2D4A2D` |

- Title: Cormorant Garamond 17px 400 `#1E1408` margin-top:12px line-height:1.2 font-variant-numeric:lining-nums
- Description: DM Sans 11px 300 `rgba(33,24,12,0.65)` line-height:16px margin-top:5px

Right thumbnail (`.mod-thumb` class): `flex:1; overflow:hidden; flex-shrink:0`
- img: `width:100%; height:100%; object-fit:contain; object-position:center center; display:block`
- `.mod-thumb` CSS: `border-left: 1px solid rgba(33,24,12,0.10)`

Chevron: `position:absolute; right:10px; top:50%; transform:translateY(-50%)`, stroke `rgba(33,24,12,0.50)`, 18×18px

---

## 16. Module Screen — Breakup Recovery (Canonical Pattern)

**Phone background:** `#F9EDD8`

### Hero (flex-row)
```
display: flex; flex-direction: row
padding: 52px 20px 20px
background: #F0E8D8
gap: 16px; align-items: flex-end
```
Left column `flex:1.35`:
- Title: Spectral 36px 300 `#1E1408` line-height:1.05
- Description: DM Sans 13px 300 `rgba(33,24,12,0.65)` line-height:18px
- Meta ("6 techniques · 3 free"): clock SVG 13px `rgba(33,24,12,0.50)` + DM Sans 11px same color

Right image: `width:136px; height:164px; border-radius:14px; overflow:hidden; flex-shrink:0`
- img: object-fit:cover; object-position:right center
- Left fade overlay: `linear-gradient(to right, rgba(240,232,216,0.90) 0%, rgba(240,232,216,0) 40%)`

### Progress Card
```
margin: 14px 20px
padding: 16px 18px
background: rgba(255,255,255,0.65)
border-radius: 16px
box-shadow: 0 2px 10px rgba(30,20,8,0.04)
```
- Percentage: Spectral 34px 300 `#B85C5C` line-height:1
- Sessions text: DM Sans 11px 300 `rgba(33,24,12,0.50)` (right-aligned)
- Progress bar: 6px track `rgba(33,24,12,0.08)`, fill `linear-gradient(to right, #B85C5C, #D4837A)` border-radius:3px

### Section Headers
`padding: 4px 20px 10px (Begin Healing) / 20px 20px 10px (Deep Healing)`

- "Begin Healing": leaf SVG `#A06832` + Spectral 21px 300 `#1E1408` + sub DM Sans 12px 300 `rgba(33,24,12,0.55)`
- "Deep Healing": star SVG `#A06832` + Spectral 21px 300 `#1E1408` + "Premium" pill: background `rgba(219,162,162,0.25)`, color `#B85C5C`, DM Sans 11px 500

### Technique Cards
```
display: flex; flex-direction: row
height: 114px; border-radius: 14px; overflow: hidden
background: rgba(252,242,232,0.6)
box-shadow: 0 2px 10px rgba(30,20,8,0.04)
gap: 10px (container gap between cards)
```

Four-column structure (left to right):

| Column | Width | Notes |
|--------|-------|-------|
| Thumbnail (`.tech-thumb`) | 92px | `.tech-thumb` CSS: `border-right: 1px solid rgba(33,24,12,0.10)` |
| Text | flex:1 | min-width:0 to allow truncation |
| Badge + time | 58px | flex-shrink:0 |
| Chevron | 18px | flex-shrink:0 |

Thumbnail: `overflow:hidden; flex-shrink:0` — img fills 100%×100% object-fit:contain, no border-radius (card's overflow:hidden clips left corners).

Text (padding:14px 10px, gap:3px):
- Title: Spectral 15px 400 `#1E1408` line-height:1.2
- Description: DM Sans 11px 300 `rgba(33,24,12,0.60)` line-height:1.4

Badge + time (padding:14px 8px for Free / 10px 8px for Premium):
- Free badge: `rgba(180,200,170,0.35)` bg, color `#A06832`, DM Sans 10px 500, border-radius:10px, padding:3px 8px
- Premium badge: `rgba(219,162,162,0.20)` bg, color `#B85C5C`, same font
- Lock SVG (Premium only): 13×13px, stroke `#A06832`
- Time: DM Sans 10px `#A06832`, `white-space:nowrap`

Chevron: 14×14px, stroke `rgba(33,24,12,0.30)`, stroke-width 2

### Sticky Upsell Banner
Sits between scrollable body and bottom nav — NOT position:fixed.
```
flex-shrink: 0
background: rgba(252,244,234,0.98)
border-top: 1px solid rgba(184,92,92,0.15)
padding: 12px 20px
display: flex; align-items: center; gap: 10px
```
- Crown SVG: 18×18px stroke `#A06832`
- Title: DM Sans 13px 600 `#1E1408`
- Sub: DM Sans 11px 300 `rgba(33,24,12,0.55)`
- "Go Premium" button: background `#B85C5C`, border-radius:22px, padding:8px 16px, DM Sans 12px 600 white

---

## 17. Shared CSS Utility Classes

Defined globally in `<style>` block, used across multiple sections:

```css
.mod-thumb {
  border-left: 1px solid rgba(33,24,12,0.10);
}
```
Applied to the thumbnail container on **category screen** module cards. Creates a hairline between the text column and the right-side thumbnail.

```css
.tech-thumb {
  border-right: 1px solid rgba(33,24,12,0.10);
}
```
Applied to the thumbnail container on **module screen** technique cards. Creates a hairline between the left-side thumbnail and the text column.

Note: border direction differs because layouts differ — module cards have text left + image right (`.mod-thumb`); technique cards have image left + text right (`.tech-thumb`).

---

## 18. In-App Typography Addendum

Spectral and Cormorant Garamond are both used in-app (not just pre/post check-in). DM Sans remains the body/UI font throughout.

| Element | Family | Size | Weight | Style | Color |
|---------|--------|------|--------|-------|-------|
| Home "Hello," | Spectral | 26px | 300 | — | `#1E1408` |
| Home "Arjun." | Spectral | 36px | 300 | italic | `#1E1408` |
| Home tagline | DM Sans | 14px | 300 | — | `rgba(33,24,12,0.65)` |
| Home section label | DM Sans | 13px | 600 | — | `#A06832` |
| Home category card name | Cormorant Garamond | 20px | 400 | — | `rgba(30,20,8,0.92)` |
| Home recommended title | Spectral | 16px | 500 | — | `#1E1408` |
| Home journey stats number | Cormorant Garamond | 24px | 400 | — | `rgba(30,20,8,0.90)` |
| Today "Today" | Spectral | 28px | 300 | — | `#1E1408` |
| Today date overline | DM Sans | 11px | 500 | uppercase | `rgba(30,20,8,0.45)` |
| Today intention quote | Spectral | 18px | 300 | italic | `#1E1408` |
| Today exercise title | Cormorant Garamond | 16px | 400 | — | `#1E1408` |
| Category hero title | Spectral | 40px | 300 | — | `#1E1408` / `#2D4A2D` (Health) |
| Category subtitle | DM Sans | 14px | 300 | — | `rgba(33,24,12,0.65)` |
| Category "Explore modules" | DM Sans | 14px | 500 | — | `#A06832` / `#2D4A2D` (Health) |
| Category module title | Cormorant Garamond | 17px | 400 | — | `#1E1408` |
| Category module description | DM Sans | 11px | 300 | — | `rgba(33,24,12,0.65)` |
| Module hero title | Spectral | 36px | 300 | — | `#1E1408` |
| Module hero description | DM Sans | 13px | 300 | — | `rgba(33,24,12,0.65)` |
| Module progress % | Spectral | 34px | 300 | — | `#B85C5C` |
| Module section header | Spectral | 21px | 300 | — | `#1E1408` |
| Technique card title | Spectral | 15px | 400 | — | `#1E1408` |
| Technique card description | DM Sans | 11px | 300 | — | `rgba(33,24,12,0.60)` |
| Crisis Support chip | DM Sans | 12px | 500 | — | `#A06832` |
| Crisis chip (Home) | DM Sans | 10px | 600 | — | `#A06832` |

---

## 19. In-App Color Tokens

Additional values used in-app (not covered in section 1):

| Value | Usage |
|-------|-------|
| `#F9EDD8` | Phone shell solid parchment (category + module screens) |
| `#F0E8D8` | Subtitle strip bg · category hero gradient start · module hero row bg |
| `#2D4A2D` | Health category accent (title, "Explore modules", icon strokes) |
| `#B85C5C` | Relationships module accent (progress %, premium badge, upsell CTA) |
| `#D4837A` | Progress bar fill gradient end (pairs with #B85C5C) |
| `rgba(219,162,162,0.25)` | Relationships icon circle bg |
| `rgba(219,162,162,0.20)` | Premium badge bg |
| `rgba(219,191,150,0.25)` | Career icon circle bg |
| `rgba(180,200,170,0.35)` | Health icon circle bg · Free badge bg |
| `rgba(242,250,240,0.6)` | Health module card bg |
| `rgba(252,242,232,0.6)` | Relationships module card bg · technique card bg |
| `rgba(252,243,228,0.6)` | Career module card bg |
| `rgba(253,249,244,0.98)` | Continue card bg · Reflect card bg |
| `rgba(255,255,255,0.48)` | Today content card bg |
| `rgba(255,255,255,0.65)` | Module progress card bg |
| `rgba(252,244,234,0.98)` | Sticky upsell banner bg |
| `rgba(250,244,234,0.98)` | Bottom nav bg (category + module screens) |
| `rgba(250,240,228,0.95)` | Bottom nav bg (Today screen) |
| `rgba(184,92,92,0.15)` | Sticky upsell banner top border |

---

## 20. STOP Practice Screen (STEP screens) Patterns

Extracted from STOP Step 1 (S — Stop), the canonical practice-screen template. Patterns inherit to S2/S3/S4.

### Architecture
- Wrapper class: `.s1-bottom-stack` (renamed `.s2-bottom-stack`, etc. per step) wraps quote card, confirm card, CTA, progress dots
- CSS: `padding: 0 32px 20px; display: flex; flex-direction: column; gap: 16px; width: 100%; box-sizing: border-box;`
- Ensures all 4 sibling elements have identical horizontal alignment

### Hero Image Bleed (canonical)
```css
.s1-hero { width: 100%; height: 190px; background: transparent; overflow: visible; flex-shrink: 0; }
.s1-hero-img {
  width: 100%; height: 100%; object-fit: cover; object-position: center;
  -webkit-mask-image: radial-gradient(ellipse 60% 70% at center 50%, black 0%, black 22%, rgba(0,0,0,0.78) 48%, rgba(0,0,0,0.32) 72%, rgba(0,0,0,0.08) 88%, transparent 100%);
  mask-image: radial-gradient(ellipse 60% 70% at center 50%, black 0%, black 22%, rgba(0,0,0,0.78) 48%, rgba(0,0,0,0.32) 72%, rgba(0,0,0,0.08) 88%, transparent 100%);
}
```

### Step Screen Typography (compact vs other screens)
- Headline: Cormorant Garamond 300, 26px, line-height 1.2, `text-wrap: balance`
- Body copy: DM Sans 300, 12px

### Confirm Card Pattern
- Card default border: `1px solid rgba(33, 24, 12, 0.06)` — matches quote card exactly (subtle neutral, NOT saffron)
- Card confirmed state: separate selector `.s1-confirm.confirmed` with `border-color: rgba(160,104,50,0.30)` and `box-shadow: 0 0 0 1px rgba(160,104,50,0.10)`
- Add `outline: none` to suppress browser focus ring on the button element
- Inner circle default: 24×24px span, `border: 1.5px solid #A06832`, `border-radius: 50%`, `background: transparent`, **ZERO inner HTML content** (no SVG, no checkmark, no inner span)
- Active state (post-tap, applied via `.confirmed` class on parent): saffron fill + white checkmark via `::after` pseudo-element — NEVER applies by default

### Progress Dots Pattern (S-T-O-P)
- Row width: 100% of `.sX-bottom-stack`
- 4 circles distributed via flex; connector lines `flex: 1; min-width: 0` between them (overrides shared scope `width: 16px`)
- Active step: saffron filled circle with white letter (`.step-pd.on`)
- Inactive: outlined saffron circle with saffron letter

### Viewport Constraint
- All STEP screens fit within 780px viewport. No vertical scroll.
- Section padding-bottom: 20px provides breathing for progress dots

### Bottom Nav
- Removed from practice screens (immersion via reduction)
- User progresses via CTA only; back chevron returns to STOP entry with confirmation dialog

### Voice Narration Pattern (canonical from S1, inherited by S2+)

**Global system** (one `<script>` block, defined once in the HTML):
- `window.stopSpeak(text)` — speaks single phrase; noop if `stopSession.muted`
- `window.stopSpeakSequence(items, doneCallback)` — chains phrases with optional ms delays
- `window.stopCancelVoice()` — calls `speechSynthesis.cancel()`
- `window.stopToggleMute()` — toggles `stopSession.muted`; updates all `.stop-mute-btn` elements across all step screens
- Voice preference: Samantha > Karen > Google US English > en-US female > en-US > en > fallback
- Rate: 0.82, pitch: 0.9, volume: 0.85

**Per-step function** (defined in each step's own `<script>` block):
- `speakStopS1()` — uses `stopSpeakSequence`, 4 phrases with inter-phrase delays
- `speakStopS2()` — uses `stopSpeak('Box breathing. Two cycles. Follow the orb.')` on entry; `stopSpeak(phase.label)` at each breath phase boundary inside `runS2BreathingCycles()`

**Dispatch** (inside `onStopSectionShow` → 400ms setTimeout):
```javascript
if (sectionId === 'breakup-stop-s1') speakStopS1();
else if (sectionId === 'breakup-stop-s2') speakStopS2();
// S3/S4/complete follow same pattern
```

**S2 breath phase voices** (FINAL COPY — match visual phase labels exactly):
- Inhale phase: `'Breathe in'`
- Hold-top phase: `'Hold'`
- Exhale phase: `'Breathe out'`
- Hold-bottom phase: `'Hold'`
