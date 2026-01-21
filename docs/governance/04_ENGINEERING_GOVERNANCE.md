# Engineering Governance

## Principles
- Explicit > clever
- Boring > fragile
- Readable > optimised

## Allowed
- Type-safe abstractions
- Defensive checks
- Clear failure modes

## Forbidden
- disabling TypeScript errors
- using `any` to bypass contracts
- silent fallbacks
- “we’ll clean this later” code

## Versioning
- No mixed major versions
- Major upgrades require audit
- Dependencies are upgraded deliberately

Engineering serves clarity, not ego.
