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
