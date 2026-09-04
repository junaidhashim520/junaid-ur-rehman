# Cinematic Portfolio — Complete Structure Blueprint

## Creative direction
A premium engineering portfolio that feels like a technical control system rather than a generic personal site.

**Visual language**
- Near-black base with charcoal panels
- Antique gold accent rather than bright yellow
- Condensed uppercase display typography
- Small monospaced/technical labels
- Hairline borders, engineering grids, nodes, counters, and metadata
- Large negative space
- Soft radial lighting and subtle noise
- Motion that follows scroll and hierarchy instead of constant decoration

**Motion rules**
- Hero: staged cinematic entrance
- Headings: vertical reveal + blur reduction
- Projects: sticky card stacking
- Capabilities: staggered reveal
- Experience: timeline draws as the user scrolls
- Cursor: restrained trailing ring on fine-pointer devices
- Lenis: smooth wheel interpolation synchronized with ScrollTrigger
- Reduced-motion users: decorative scroll effects disabled or minimized

---

## 00 — Navigation
**Purpose:** establish the technical identity without competing with the hero.

Desktop layout:
- Left: compact personal mark
- Center: About / Work / Skills / Experience / Contact
- Right: bordered "LET'S TALK" CTA

Behavior:
- Fixed glass/dark header
- Initial downward reveal
- Later enhancement: active-section indicator and mobile menu

---

## 01 — Hero / Opening statement
**Goal:** tell the visitor what you create in under five seconds.

Primary copy:
- I BUILD
- INTELLIGENT
- SYSTEMS.

Support line:
AI Automation · Full-stack · Connected Systems

Supporting paragraph:
Explain that you connect APIs, AI, business logic, and operations.

Calls to action:
- Explore My Work
- Start a Project

Right-hand visual:
- Full-body transparent portrait
- Two subtle circular orbit lines
- Gold radial halo
- Small numbered annotation

Animation choreography:
1. kicker fades upward
2. each giant headline line reveals from a clipped container
3. supporting copy appears
4. CTAs enter
5. portrait fades/scales in behind the copy timing

---

## 02 — About / Operating philosophy
**Goal:** differentiate your thinking, not repeat your CV.

Heading:
I DON'T JUST WRITE CODE.
I ENGINEER MOMENTUM.

Left column:
- operating principle label
- large philosophy sentence
- concise supporting paragraph
- signature/role mark

Right column:
- editorial/grid card with one memorable principle
- example: CLARITY BEFORE COMPLEXITY

Bottom stats:
- four metric cells
- use credible, easy-to-defend facts only

Motion:
- heading reveal
- right card enters with slight perspective
- stats stagger upward

---

## 03 — Selected Work / Sticky case studies
**Goal:** reproduce the strongest interaction seen in the reference video.

Heading:
SELECTED WORKS.
ENGINEERED VALUE.

Each project card contains:
- project number
- project category
- massive title
- concise business description
- technology tags
- architecture diagram / node graphic
- one measurable outcome
- project/case-study CTA

Stack behavior:
- each desktop card is `position: sticky`
- later cards rise over earlier cards
- GSAP slightly scales/dims cards underneath
- mobile switches to normal document flow

Recommended case-study categories:
1. Lead automation
2. WhatsApp/Instagram AI customer assistant
3. Full-stack operations dashboard
4. Scrape → enrich → generate → approve → outreach system
5. CRM/email/data integration

---

## 04 — Capabilities / Architecture
**Goal:** avoid generic "HTML 95%" progress bars.

Heading:
ARCHITECTURAL MASTERY.
PRECISION APPLIED.

Use four large capability cells:
- Automation Architecture
- AI Systems
- Full-stack Engineering
- API Integration

Each cell contains:
- index number
- capability title
- what you can actually design
- technology tags
- subtle hover state

Motion:
- cards enter in a stagger
- optional later enhancement: mouse-based highlight or grid illumination

---

## 05 — Experience / Milestones
**Goal:** turn career history into a visual system timeline.

Heading:
EXPERIENCE &
MILESTONES.

Structure:
- thin vertical rail
- gold progress line draws based on scroll
- numbered milestone nodes
- year/period column
- role + organization + outcome-oriented description

Do not overload it with every job responsibility. Keep the portfolio version selective and outcome-focused.

---

## 06 — Contact / Terminal interface
**Goal:** finish the story instead of dropping into a generic contact block.

Heading:
INITIALIZE
TRANSMISSION.

Left:
- short prompt describing what kind of problems to send
- direct email / social CTA

Right:
- dark technical form
- fields labeled like comments:
  - // SENDER
  - // CHANNEL
  - // PAYLOAD
- button: EXECUTE DISPATCH ↗

Production integrations:
- Next.js route handler + Resend
- spam protection / rate limiting
- optional CRM or n8n webhook

---

## Responsive behavior
Desktop:
- giant headings
- portrait beside hero
- sticky project stack
- two-column capabilities
- custom cursor

Tablet:
- hero becomes stacked
- sticky cards disabled near 980px
- capability cards become one column

Mobile:
- simplified navigation
- normal-flow project cards
- no custom cursor
- portrait ornaments reduced
- typography still oversized but clamped

---

## Build phases
### Phase 1 — Static visual system
Build sections and verify spacing, typography, palette, portrait cutout, card hierarchy.

### Phase 2 — Motion
Add hero intro, ScrollTrigger heading reveals, sticky project stack, timeline progress, cursor, Lenis.

### Phase 3 — Real portfolio data
Replace placeholder stats, projects, experience, portrait, email, social links, resume link.

### Phase 4 — Case studies
Create `/work/[slug]` pages with challenge → architecture → process → result.

### Phase 5 — Production
Contact backend, analytics, metadata, OpenGraph images, Lighthouse pass, accessibility review, Vercel deployment.
