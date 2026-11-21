---
name: Technical Blueprint & Kinetic Collage
colors:
  surface: '#f9f9ff'
  surface-dim: '#d9d9df'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f9'
  surface-container: '#ededf3'
  surface-container-high: '#e8e8ed'
  surface-container-highest: '#e2e2e8'
  on-surface: '#1a1c20'
  on-surface-variant: '#434656'
  inverse-surface: '#2f3035'
  inverse-on-surface: '#f0f0f6'
  outline: '#737688'
  outline-variant: '#c3c5d9'
  surface-tint: '#004ee7'
  primary: '#0043c8'
  on-primary: '#ffffff'
  primary-container: '#0057ff'
  on-primary-container: '#e5e8ff'
  inverse-primary: '#b6c4ff'
  secondary: '#5d5e64'
  on-secondary: '#ffffff'
  secondary-container: '#dfdfe6'
  on-secondary-container: '#616268'
  tertiary: '#6514d6'
  on-tertiary: '#ffffff'
  tertiary-container: '#7e3def'
  on-tertiary-container: '#f0e4ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#001550'
  on-primary-fixed-variant: '#003ab2'
  secondary-fixed: '#e2e2e9'
  secondary-fixed-dim: '#c6c6cd'
  on-secondary-fixed: '#1a1b21'
  on-secondary-fixed-variant: '#45474c'
  tertiary-fixed: '#eaddff'
  tertiary-fixed-dim: '#d2bbff'
  on-tertiary-fixed: '#25005a'
  on-tertiary-fixed-variant: '#5a00c6'
  background: '#f9f9ff'
  on-background: '#1a1c20'
  surface-variant: '#e2e2e8'
typography:
  display-hero:
    fontFamily: Anton
    fontSize: 5rem
    fontWeight: '400'
    lineHeight: '0.92'
    letterSpacing: 0.01em
  display-hero-mobile:
    fontFamily: Anton
    fontSize: 3rem
    fontWeight: '400'
    lineHeight: '0.95'
    letterSpacing: 0.01em
  headline-xl:
    fontFamily: Anton
    fontSize: 3.25rem
    fontWeight: '400'
    lineHeight: '0.95'
    letterSpacing: 0.01em
  headline-xl-mobile:
    fontFamily: Anton
    fontSize: 2.25rem
    fontWeight: '400'
    lineHeight: '1.0'
    letterSpacing: 0.01em
  headline-lg:
    fontFamily: Anton
    fontSize: 2.25rem
    fontWeight: '400'
    lineHeight: '1.05'
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.5rem
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: '1.5'
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.04em
  label-badge:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2rem
  margin: 1.25rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system embodies the intersection of rigorous computational engineering, scientific research, and expressive creative technology. Built for a multidisciplinary engineer and visual artist, the aesthetic unites a clean architectural blueprint canvas with high-fidelity, dark-mode software interfaces, vector transformation anchors, and 3D floating application tiles.

### Visual Pillars
- **Technical Rigor & Drafting Discipline:** Precision grid-lines, coordinate crosshairs, monospaced telemetry readouts, and hairline bounding frames ground the workspace in mathematical intent.
- **Sleek Software Tooling:** Embedded macOS-style panels, window chrome with discrete control dots, and terminal inspectors bring the visceral feel of an active creative production environment.
- **Kinetic Depth & Collage:** Layered spatial composition using floating application squircles, subtle ambient glow projections, and vector transformation anchors (corner grab handles) creating dimension between canvas and tool layers.
- **Human Contrast:** Expressive rotated script annotations interrupt the computational rigidity, delivering spontaneous authorial intent and personal commentary.

## Colors

The palette leverages a hybrid architectural scheme: an airy, ultra-precise blueprint substrate hosting high-contrast, deep-ink software windows punctuated by luminous tool and status accents.

### Palette Architecture
- **Primary Brand Accent (`#0057FF`):** Electric Cobalt Blue. Applied to primary calls-to-action, active vector handles, structural focus states, and atmospheric edge glows (`rgba(0, 87, 255, 0.25)`).
- **Dark UI Panels (`#16181D` / `#1F232B`):** Deep Ink Charcoal and dark header fill for IDE windows, video monitors, and docked inspector toolbars. Bounded with subtle translucent borders (`rgba(255, 255, 255, 0.12)`).
- **Blueprint Canvas (`#F8F9FA` / `#FFFFFF`):** High-clarity drafting surface featuring fine Cartesian grid lines (`rgba(15, 17, 21, 0.055)`) and pure white card substrates.
- **Ink & Typography (`#0F1115` / `rgba(15, 17, 21, 0.65)`):** High-density dark ink for foreground copy, muted ink for secondary metadata, and `#F8F9FA` / `#9CA3AF` for dark UI panel typography.
- **Domain Accents:**
  - *VFX Violet (`#7C3AED`):* Creative motion graphics, 3D pipelines, and shader computation.
  - *Terminal & AI Green (`#10B981` / `#10A37F`):* Active algorithms, computational biology models, and success telemetry.
  - *Medal Gold (`#F59E0B` / `#D97706`):* Honors, Olympiad achievements, and competitive milestones.
  - *Pastel Magenta (`#F4A8E8`):* Bounding box vector frames and creative wireframe callouts.

## Typography

The typographic hierarchy establishes clear tension between mechanical engineering and human authoring.

- **Hero & Display (`Anton`):** Heavy condensed uppercase display type. Rendered tight to create dense visual anchors evocative of industrial posters and blueprint title blocks.
- **Narrative & System (`Plus Jakarta Sans`):** Clean geometric sans-serif handling long-form editorial copy, UI component titles, and descriptive passages with balanced legibility.
- **Technical & Coordinates (`JetBrains Mono`):** Fixed-width engineering type for system specs, window titlebars, timestamps, telemetry tags, and commit hashes. Always set with uppercase tracking when used as micro-labels.
- **Editorial Script Callouts:** Accompanying hand-written callouts (such as "Production Ready", "100% Custom Shaders", or personal notes) should be set in an expressive cursive script (e.g., `Caveat` or `Yellowtail`), rotated at `-3deg` to `-6deg`, and colored in `#0057FF` or `#7C3AED`.

## Layout & Spacing

The workspace uses a fluid 12-column coordinate layout anchored over an active 24px blueprint background grid.

### Grid & Canvas Structure
- **Desktop (≥ 1024px):** 12-column grid, `margin-desktop` (3rem), `gutter-desktop` (2rem). Content sections support overlapping collateral (e.g., software floating frames protruding 20-40px across standard column boundaries to create collage depth).
- **Tablet (768px - 1023px):** 8-column grid, `margin` (2rem), `gutter` (1.5rem). Software windows scale to fill column blocks while floating tool squircles snap to unified horizontal trays.
- **Mobile (< 768px):** 4-column fluid layout, `margin` (1.25rem), `gutter` (1rem). 3D layers collapse into stacked technical cards; transformation nodes and bounding box frames hide on screens under 480px to protect reading legibility.

### Spacing Discipline
All structural offsets adhere to an 8px modular baseline (`0.5rem`, `1rem`, `1.5rem`, `2.5rem`, `4rem`). Blueprint tick marks and registration crosses align exactly to the 24px grid junctions.

## Elevation & Depth

Depth is treated as physical layers on an architect's drafting board overlaid with active software monitors.

### Depth Hierarchy
1. **Level 0 (Canvas Base):** Technical blueprint `#F8F9FA` with structural crosshairs and hairline grid lines (`rgba(15, 17, 21, 0.055)`).
2. **Level 1 (Drafting Cards & Wireframes):** Pure `#FFFFFF` surfaces with crisp 1.5px solid ink outlines (`#0F1115`) and hard, high-contrast drop-shadows: `4px 4px 0px rgba(15, 17, 21, 0.9)`.
3. **Level 2 (macOS Software Windows):** Deep ink charcoal panels (`#16181D`) elevated with layered ambient diffusion:
   - Border: `1px solid rgba(255, 255, 255, 0.12)`
   - Shadow: `0 24px 48px -12px rgba(15, 17, 21, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.1)`
4. **Level 3 (Floating 3D Tool Squircles):** Foreground tool icons (Ae, Pr, C++, Python, AI) floating 12px to 24px above surfaces with directional cobalt/violet luminescent bloom:
   - Box shadow: `0 16px 32px -8px rgba(0, 87, 255, 0.28), 0 0 0 1px rgba(255, 255, 255, 0.15)`
   - Active hover lift: `-6px` translate on Y-axis with increased glow spread.

## Shapes

The system balances industrial geometry with software surfaces.

- **Baseline Geometry:** Rounded radius scale `2` (`0.5rem` / `8px`) provides the default curvature for buttons, code blocks, metric panels, and chips.
- **macOS Window Frames:** Standardized `14px` border radius on exterior frames; header bars match top radii and terminate flat against interior window viewports.
- **Application Squircles:** Precise `92px × 92px` or `96px × 96px` squares with `22px` super-ellipse corner curves, hosting centered vector logos.
- **Vector Bounding Anchors:** When a frame is selected or highlighted as an active work item, it is bounded by a `1.5px` dashed or solid `#0057FF` or `#F4A8E8` line with `7px × 7px` square anchor handles on all 4 corners and midpoints.

## Components

### macOS Dark UI Windows
- **Frame:** `#16181D` background with `14px` rounded corners and `1px solid rgba(255, 255, 255, 0.12)` border.
- **Header Bar:** 38px height, `#1F232B` background, flex-row items centered.
- **Traffic Lights:** Three 12px circular dots with 8px horizontal spacing: Close (`#EF4444`), Minimize (`#F59E0B`), Expand (`#10B981`).
- **File / Window Title:** Centered `JetBrains Mono` 11px uppercase label in `#9CA3AF`, e.g., `main_vfx_graph.cpp` or `workspace_viewport.mov`.

### Floating Tool Squircles
- **Dimensions:** 92px to 96px uniform squares with 22px rounded corners.
- **Surfaces:** Dark glass or opaque ink background (`#16181D`), subtle 1px inner rim border, software icon centered (36px–40px), and bottom label in monospace uppercase.
- **Interaction:** Hover triggers 3D perspective rotation (e.g., `perspective(600px) rotateX(4deg) rotateY(-4deg) translateY(-6px)`) with concentrated brand-accent glow.

### Blueprint Metric Cards
- **Base:** `#FFFFFF` card with `1.5px` dark ink border (`#0F1115`) and `4px 4px 0px #0F1115` hard shadow offset.
- **Header:** Tag strip in `JetBrains Mono` (uppercase, letter-spaced) paired with metric value in `Anton` display typography.
- **Accents:** Registration crosshair marks `+` placed in the top-right corner in subtle `#0057FF`.

### Technical Buttons
- **Primary Cobalt Button:** Solid `#0057FF` fill, `#FFFFFF` bold sans text, `8px` radius, `0 8px 20px -4px rgba(0, 87, 255, 0.4)` glow. Hover lifts `-2px` with increased saturation.
- **Dark UI Ghost Button:** `#1F232B` background with `1px solid rgba(255, 255, 255, 0.16)` and `#F8F9FA` text. Monospace keyboard shortcut badge docked right (e.g., `⌘K`).
- **Terminal Action Button:** `JetBrains Mono` text preceded by prompt glyph (`>_ deploy`), framed with hairline border and hover state revealing active emerald cursor blink (`#10B981`).

### Input Fields & Controls
- **Technical Inputs:** Inverted or canvas-inset fields with `1.5px` border. Active focus shifts border to `#0057FF` with `0 0 0 3px rgba(0, 87, 255, 0.15)`.
- **Checkboxes & Radios:** Sharp or soft-cornered square inputs with high-contrast filled states, featuring technical cross-hatch marks instead of generic checks.