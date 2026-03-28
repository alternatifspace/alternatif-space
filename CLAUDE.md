# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Monorepo Structure

pnpm workspace with two workspace roots:
- `apps/*` — deployable applications
- `packages/*` — shared libraries (none yet)

All commands should be run from the repo root using pnpm filters, or from within the app directory.

## Apps

### `apps/partai`

Indonesian digital democracy platform ("alternatif.space"). SvelteKit 2 app targeting Cloudflare Pages.

**Key tech:** Svelte 5 (runes mode enforced project-wide), Tailwind CSS v4, TypeScript, Cloudflare Pages adapter.

**Svelte 5 runes:** The project is configured with `runes: true` for all non-`node_modules` files. Use `$state`, `$derived`, `$props`, `$effect` — not the legacy options API or stores.

**Cloudflare platform types:** `app.d.ts` declares `App.Platform` with `env: Env`, `ctx: ExecutionContext`, and `cf`. Wrangler generates `Env` types via `pnpm --filter partai gen`.

## Common Commands

```bash
# Install dependencies
pnpm install

# Run partai dev server
pnpm --filter partai dev

# Build partai for Cloudflare Pages
pnpm --filter partai build

# Preview partai build locally via wrangler
pnpm --filter partai preview

# Type-check
pnpm --filter partai check

# Lint
pnpm --filter partai lint

# Format
pnpm --filter partai format

# Regenerate Cloudflare env types (after wrangler.toml changes)
pnpm --filter partai gen
```

## Documentation

Before working on any app, read the docs in `apps/{app}/docs/`. These are the authoritative reference — always consult them before making architectural or feature decisions.

### `apps/partai/docs/`

| File | Contents |
|---|---|
| `TRD.md` | Technical requirements: full tech stack, repo structure, auth flow, database schema (all phases), RLS policies, edge functions, frontend routes, state management, create party flow, push notifications, storage, performance targets |
| `prd.md` | Product requirements: feature spec for all 3 phases (Phase 0 MVP through Phase 2), join flows, governance mechanics, council roles, cross-platform powers |
| `screens.md` | Full screen inventory — 38 screens (S-01–S-38) across 3 phases, with state-dependent rendering notes |
| `screen_flow.md` | User journeys — 11 flows mapping screen transitions, plus navigation reference by auth/membership state |
