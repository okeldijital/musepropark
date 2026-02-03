# MuseProPark — Learning Log

This document captures session-by-session learnings, decisions, and reflections
during the development of MuseProPark.

It is not a changelog or task tracker.
It exists to preserve understanding, not implementation detail.

---

## Day 1 — Scaffold, Tooling, and Runtime Alignment

### What we attempted
- Established a governed Day-1 scaffold for MuseProPark
- Set up a monorepo with Web and CMS applications
- Bootstrapped Payload CMS v3 with Docker and PostgreSQL
- Verified that the platform could build and run locally

### What went wrong
- Payload v3 introduced strict ESM requirements that conflicted with defaults
- TypeScript errors surfaced mismatches between build-time success and runtime reality
- Docker port conflicts blocked Postgres and CMS access
- The CMS initially booted successfully but did not expose an HTTP listener

### What we learned
- Governance must come before implementation, not alongside it
- A green build does not guarantee a reachable or usable service
- Payload v3 requires explicit alignment across TypeScript, Node, and runtime configuration
- Runtime verification is a first-class part of scaffolding, not a later concern

### Decisions made
- Governance documents are treated as binding law
- Agentic IDEs must stop on ambiguity and request clarification
- CMS runtime correctness is required before adding any domain logic
- Express wiring is minimal and explicit, not assumed

### Open questions
- Long-term CMS server pattern for Payload v3
- Timing and approach for admin user bootstrapping
- Editorial workflow enforcement points

---

_End of Day-1_

## Day 2 — CMS Foundations: Users and Media

### What we attempted
- Introduced the first functional CMS foundations
- Added authentication capability via a Users collection
- Enabled file and asset handling via a Media collection
- Verified that the CMS could support real interaction, not just boot

### What went smoothly
- The separation between Users (auth) and Authors (editorial) held cleanly
- Media could be introduced without forcing editorial context
- Governance constraints prevented premature complexity

### What required care
- Scope discipline was essential to avoid turning Users into profiles
- Media needed to remain neutral infrastructure, not content-aware
- Integration into payload.config.ts had to be minimal to avoid side effects

### What we learned
- Authentication and identity must be strictly separated early
- Media is foundational infrastructure, not editorial content
- Introducing “just enough” capability is harder than adding features
- Governance constraints actively improve system clarity

### Decisions made
- Users exist solely for authentication
- Media exists solely for asset management
- Editorial meaning will only be introduced at the content-model stage
- Each CMS phase must remain independently valid and usable

### Open questions
- How media usage will be contextualised by future content types
- When (and if) granular access control is needed
- How editorial workflows will reference Authors without coupling

---

## Day 4 — First Content Domain: Articles

### What we attempted
- Introduced Articles as the first real editorial content type
- Added Categories as minimal taxonomy to support archives and browsing
- Implemented a publish lifecycle state model aligned with governance

### What went smoothly
- Establishing Articles early made the CMS feel meaningfully usable
- Categories remained minimal and avoided premature complexity
- Author attribution reinforced the separation between identity and authentication

### What required discipline
- Avoiding early page-builder or block systems
- Keeping taxonomy simple (no nesting, no tags)
- Aligning schema with governance lifecycle without adding workflow automation

### What we learned
- The first content type sets the tone for all future modeling
- Governance lifecycle requirements must be representable in data early
- Minimal fields create clarity and reduce refactor risk

### Decisions made
- Article lifecycle status includes: draft → review → published
- Categories remain flat and minimal until real usage demands more
- Editorial workflows will be enforced later, not encoded prematurely

### Open questions
- When to introduce related content relationships (and on what signal)
- How category strategy evolves once content volume increases
- What “review” means operationally for a small editorial team

---

## Day 5 — Podcasts: Series and Episodes

### What we attempted
- Introduced Podcasts as a structured domain using Series and Episodes
- Enabled episodes to be grouped under a defined editorial show identity
- Added a governance-aligned lifecycle for episodes (draft → review → published)

### What went smoothly
- Splitting Series and Episodes created clarity and prevented content sprawl
- Media reuse supported cover art and audio attachment without external dependencies
- Lifecycle states reinforced consistency with Articles governance

### What required discipline
- Avoiding external integrations (RSS/Castopod) before internal truth is stable
- Keeping episode metadata minimal and useful
- Avoiding early transcript or sponsorship systems

### What we learned
- Podcast content needs a stable internal model before distribution concerns
- A “series-first” structure reinforces editorial coherence
- Media infrastructure becomes more valuable as domains expand

### Decisions made
- Series and Episodes remain first-class, separate collections
- External distribution is deferred until core domains are stable
- Episode lifecycle remains draft → review → published without automation

### Open questions
- When to introduce transcript support (and in what form)
- Whether “guests” should remain simple text or evolve later
- How podcasts will relate to Articles/Tutorials in a future “related content” layer

---

## Day 6A — Tutorials: Educational Domain

### What we attempted
- Introduced Tutorials as the core educational content domain
- Added Tutorial Categories as minimal taxonomy for discovery
- Established difficulty signaling and a governance-aligned lifecycle

### What went smoothly
- Difficulty and optional duration created clear educational framing without complexity
- Category taxonomy remained minimal and avoided early over-structure
- Media reuse supported both feature imagery and simple resource attachments

### What required discipline
- Avoiding a step-by-step block system before real usage demands it
- Keeping “resources” as simple media attachments without metadata schemas
- Maintaining strict separation from Gear Reviews and related-content systems

### What we learned
- Tutorials benefit from lightweight structure (difficulty, duration) without becoming a course platform
- Minimal taxonomy is sufficient early and prevents rework
- Deferring complex instructional layouts protects long-term maintainability

### Decisions made
- Tutorial content remains rich text for now (no blocks/page builder)
- Resources are a simple list of uploaded files (no URLs, no extra fields)
- Tutorial lifecycle follows draft → review → published with no automation

### Open questions
- When tutorials should adopt structured steps (and what the signal is)
- How tutorials will reference gear without turning into product catalogs
- How categories evolve once tutorial volume increases

---

## Day 6B — Gear Reviews: Critical Evaluation Domain

### What we attempted
- Introduced Gear Reviews as the evaluation pillar of the platform
- Added Gear Categories as minimal taxonomy for browsing and grouping
- Established a consistent governance lifecycle for reviews (draft → review → published)

### What went smoothly
- Reviews could be modeled without turning the CMS into a product catalog
- A simple rating plus pros/cons provided strong editorial structure with low complexity
- Media reuse supported product imagery without external dependencies

### What required discipline
- Avoiding affiliate and monetisation fields at the schema level
- Resisting the urge to add pricing, rubrics, or detailed scoring systems too early
- Keeping reviews independent of Tutorials and Articles until a deliberate “related content” layer exists

### What we learned
- Reviews need strong editorial primitives (rating, pros/cons) more than complex schemas
- Separating evaluation from commerce preserves trust
- Minimal taxonomy keeps the system flexible as content volume grows

### Decisions made
- Gear Reviews remain editorial-first and commerce-neutral
- Rating stays simple (1–5) without rubrics or automation
- Related-content relationships are deferred until data contracts and frontend needs are clear

### Open questions
- When and how to introduce contextual monetisation without eroding trust
- Whether reviews need “versioning” for updated hardware/software over time
- How categories evolve once review volume increases

---
