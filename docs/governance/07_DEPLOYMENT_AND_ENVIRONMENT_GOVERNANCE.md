# Deployment & Environment Governance

## Environments
- Local
- Staging
- Production

## Rules
- environment parity is mandatory
- no snowflake servers
- secrets via environment variables only
- Docker is the source of truth

## Forbidden
- manual production changes
- untracked environment drift
