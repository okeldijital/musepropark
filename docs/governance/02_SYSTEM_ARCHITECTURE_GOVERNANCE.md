# System Architecture Governance

MuseProPark follows a layered, contract-driven architecture.

## Layers
1. CMS (content authority)
2. Data contracts (queries + mappers)
3. Frontend presentation
4. Infrastructure

Each layer may only depend on the layer below it.

## Hard Rules
- Frontend must never query CMS directly
- CMS schemas must never leak into UI
- Pages compose; they do not decide
- Blocks are infrastructure, not page logic
- Media access is always abstracted

## Forbidden Patterns
- cross-layer imports
- “temporary” bypasses
- shared mutable state across layers

Violations are architectural defects, not shortcuts.
