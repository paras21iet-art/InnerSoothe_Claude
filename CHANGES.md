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
