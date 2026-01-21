# Data & Content Governance

## Canonical Content Domains
- Users (authentication only)
- Authors (editorial identity)
- Podcasts
- Tutorials
- Gear Reviews
- Articles
- Media

Each domain has one responsibility.

## Data Rules
- No polymorphic content blobs
- No hidden coupling via naming conventions
- Relationships express context, not dependency

## Content Lifecycle
- Draft → Review → Publish
- No silent mutations of published content
- Deletions must be intentional and auditable
