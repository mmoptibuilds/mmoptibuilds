# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working in this repository.

## Repository purpose and current state

This repository is the MMOptiBuilds implementation-ready product pack, not yet the application repository. The root contains the product, design, content, architecture, operations, legal, QA, and orchestration specifications. `starter/` and `mmoptibuilds-dependency-only-starter/` are dependency/configuration baselines; they intentionally contain no application source or tests. The future implementation is one private Next.js application built from scratch rather than an export of an older site.

Do not run package commands from the repository root: it has no `package.json`. Run them from the application directory after the application source has been bootstrapped. The dependency-only starter README requires Node.js 22+ and a clean `npm ci` before implementation.

## Authority and required reading

Resolve conflicts in this order:

1. The current owner instruction.
2. `02-DECISION-REGISTER.md`.
3. `01-SOURCE-OF-TRUTH.md`.
4. The task-specific brief and its acceptance criteria.
5. Historical interview material.

For implementation work, start with `README.md`, then read the relevant sections of `21-IMPLEMENTATION-ROADMAP.md` and `docs/superpowers/plans/2026-08-11-mmoptibuilds-implementation-plan.md`. Read `11-TECHNICAL-ARCHITECTURE.md` for runtime and data-flow decisions. `CONTRIBUTING.md`, `SECURITY.md`, and the nested starter instruction files add project-specific constraints.

## Common commands

Run these from the application directory (`starter/` is the current local baseline; `mmoptibuilds-dependency-only-starter/` is the packaged dependency-only copy):

```text
npm ci
npm run dev
npm run lint
npm run typecheck
npm test
npm run test:watch
npm run test:e2e
npm run build
npm run start
npm run cf:build
npm run cf:preview
```

The verified scripts are defined in the starter `package.json`: `lint` runs ESLint with zero warnings, `typecheck` runs `tsc --noEmit`, `test` runs Vitest, `test:e2e` runs Playwright, and the `cf:*` scripts build/preview/deploy through OpenNext for Cloudflare. Run one unit test with `npm test -- path/to/file.test.ts` or one test name with `npm test -- -t "test name"`; run one Playwright file with `npx playwright test path/to/file.spec.ts`.

`npm run cf:deploy` is a production action, not a normal development command. Use it only after the owner-controlled release checklist is complete. The starter baseline also requires reviewing current dependency releases, Cloudflare compatibility, environment bindings, and commercial-service terms before production.

## Planned application architecture

The target is one Next.js 16 App Router application using React 19, TypeScript, Tailwind CSS 4, Supabase SSR/client and RLS, Zod, React Hook Form, Motion, Vitest, Playwright, axe, Wrangler, and OpenNext.

Route groups isolate experiences without creating separate applications or a shared visual shell:

```text
app/
├── (gateway)/
├── (systems)/systems/
├── (studio)/studio/
├── (legal)/
├── admin/
└── api/
```

The gateway introduces the parent brand. Systems is a technical procurement/custom-build experience; Studio is an editorial creative-agency experience. They intentionally have separate tokens, fonts, content schemas, navigation emphasis, art direction, and motion configuration. `components/shared` is limited to invisible behavior/accessibility primitives; visible patterns belong under the relevant division. Shared backend foundations include forms, validation, data access, analytics, accessibility utilities, and testing.

Use Server Components by default and Client Components only where interaction requires them. Stable marketing pages should be statically generated; inquiries, dashboard operations, and signed operations use dynamic route handlers. Production is Cloudflare Workers through OpenNext, with Supabase Postgres/Auth/RLS and Cloudflare Turnstile/Web Analytics.

Public inquiry flow: normalize browser input, then server-check content type, origin strategy, body size, Turnstile, honeypot, throttling, and Zod schema; insert through the controlled database path with immutable consent/audit facts; return an idempotent reference ID; send owner notification without making notification failure lose the inquiry. Dashboard reads and mutations stay behind owner authentication and RLS.

## Product and content constraints

- Keep the permanent domain and public brand as `mmoptibuilds.com` / `mmoptibuilds`.
- Public pricing is prohibited. The business holds no hardware inventory; Systems availability, sourcing, warranty, tax, logistics, and quote boundaries must be represented accurately.
- Visitors remain guests at launch. The private `/admin` dashboard is owner-only and noindex.
- Studio clients own their hosting and domain; the default delivery is a one-time deployment and documented handoff. The working implementation-defect warranty is 30 days and needs final contract review.
- Never invent clients, testimonials, awards, certifications, stock, distributor relationships, savings, delivery times, performance figures, or case-study claims. Generated or conceptual media must be honestly labelled internally and remain replaceable.
- Do not export old hosted sites into this project. Build from scratch; older projects are references unless ownership, scope, and evidence are verified.

## Environment and data boundaries

Use separate local, preview, and production environments. Local development and automated tests use local Supabase or an isolated test project; preview uses synthetic data; production contains real inquiries and owner access. Never put production secrets or personal inquiry data in AI prompts, preview deployments, logs, analytics events, tickets, screenshots, or handoffs. The starter `.env.example` names public site/Supabase/Turnstile settings and server-only Supabase, Turnstile, owner-notification, Cloudflare email, and Resend settings.

## Delivery and review expectations

Work from an approved task brief with owned files and acceptance criteria. Keep one coherent change, avoid speculative dependencies and unrelated refactors, and preserve the independent Systems/Studio boundaries. Visible changes require mobile, keyboard, reduced-motion, accessibility, performance, and content-truth review. The release gate requires clean install, lint, typecheck, unit/integration/browser and axe tests, Next and OpenNext builds, dependency and secret checks, RLS/security review, legal/content approval, backup/rollback readiness, and post-deploy smoke tests.

Use the more specific instructions in `starter/CLAUDE.md`, `starter/AGENTS.md`, and `starter/GEMINI.md` when working inside `starter/`; the equivalent files in `mmoptibuilds-dependency-only-starter/` apply there. The Gemini/Agy guidance is specifically for visual exploration and asset critique; every asset needs route, purpose, truth status, source/license record, responsive variants, alt-text decision, and a static/reduced-motion fallback.
