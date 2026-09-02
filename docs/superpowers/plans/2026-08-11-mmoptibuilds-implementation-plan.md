# MMOptiBuilds implementation plan

> Required sub-skill: execute this plan with `superpowers:executing-plans`; use test-driven development for each behavior change and verification-before-completion before every completion claim.

**Goal:** Build and launch the first commercial MMOptiBuilds website with distinct Systems and Studio experiences, secure inquiry ingestion, and an owner-only dashboard.

**Architecture:** One Next.js App Router application deployed to Cloudflare Workers through OpenNext. Supabase provides Postgres and owner authentication with RLS. Public forms use server routes, Zod, Turnstile, throttling, and idempotency. Route groups isolate visible design systems.

**Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Supabase SSR/client, Zod, React Hook Form, Motion, Vitest, Playwright, axe, Wrangler, OpenNext.

## Task 1: Bootstrap the repository

**Files:** `package.json`, lockfile, TypeScript, ESLint, PostCSS, OpenNext, Wrangler, Vitest, Playwright configs; `.env.example`; `.gitignore`; `README.md`.

1. Copy the verified starter manifests into a new private repository.
2. Run a clean lockfile install.
3. Add the minimum `app/layout.tsx`, `app/page.tsx`, and global stylesheet.
4. Write a smoke test that expects the root heading.
5. Run typecheck, lint, unit test, Next build, and OpenNext build.
6. Commit `chore: establish verified application foundation`.

## Task 2: Establish route and theme boundaries

**Files:** `app/(gateway)`, `app/(systems)`, `app/(studio)`, `styles/tokens`, division layouts, navigation tests.

1. Write route tests for `/`, `/systems`, `/studio`, `/about`, `/contact`, and `/admin`.
2. Create semantic layouts with independent CSS variable scopes and font contracts.
3. Implement the global wordmark and accessible division switcher.
4. Verify direct refresh, skip links, focus order, and mobile navigation.
5. Commit `feat: establish independent division shells`.

## Task 3: Add metadata and content model

**Files:** metadata utilities, route content modules, sitemap, robots, JSON-LD helpers, tests.

1. Write tests for canonical host, unique titles, noindex admin, and sitemap exclusions.
2. Build typed page-content schemas and metadata factories.
3. Implement launch copy from the approved pack; reject unapproved placeholders in CI.
4. Add JSON-LD only for verified visible facts.
5. Commit `feat: add truthful content and SEO foundation`.

## Task 4: Create Supabase schema and security tests

**Files:** `supabase/migrations`, `supabase/tests`, generated types, data-access layer.

1. Write failing RLS tests for anonymous, authenticated non-owner, and owner access.
2. Create contacts, inquiries, division briefs, quotes, notes, activities, and consents.
3. Enable RLS and implement narrow owner policies plus a controlled public insert function.
4. Add indexes and immutable activity/consent behavior.
5. Run migration reset and security tests.
6. Commit `feat: create secured inquiry data model`.

## Task 5: Build the Contact vertical slice

**Files:** contact form, schema, route handler, Turnstile adapter, notification adapter, tests.

1. Write browser and integration tests for success, invalid data, missing/invalid Turnstile, duplicate retry, storage failure, and notification failure.
2. Implement accessible fields, summary, submission state, and reference screen.
3. Implement server validation, body limit, origin policy, honeypot, rate control, idempotency, database insert, and non-blocking owner notification.
4. Confirm analytics contains no payload data.
5. Run tests and manually verify with keyboard and mobile.
6. Commit `feat: deliver secure contact inquiry slice`.

## Task 6: Add Systems and enterprise briefs

**Files:** Systems pages, form schemas, handlers, shared ingestion adapter, tests.

1. Write journey tests for gaming, workstation, and exact-spec enterprise flows.
2. Implement progressive fields and private budget ranges.
3. State no-stock, availability, quote, and enterprise service boundaries near submission.
4. Store normalized division-specific records under one inquiry envelope.
5. Commit `feat: add requirement-led systems inquiries`.

## Task 7: Add Studio brief and portfolio evidence

**Files:** Studio pages, discovery form, Work index, Coldharbour case study, evidence metadata, tests.

1. Write tests for focused/premium branching, required asset questions, and honest labels.
2. Implement conversion-led service pages and discovery flow.
3. Add Coldharbour only with verified ownership/scope copy and no synthetic performance claim.
4. Commit `feat: add studio discovery and honest work proof`.

## Task 8: Build owner authentication and dashboard

**Files:** auth middleware/proxy compatible with Cloudflare, admin pages, server actions/handlers, tests.

1. Write authorization tests for every read and mutation.
2. Implement owner login, recovery through configured production SMTP, and protected layout.
3. Add inbox, filters, detail, status, notes, quote metadata, follow-up, audit trail, and CSV export.
4. Confirm admin noindex and no personal data in logs.
5. Commit `feat: deliver owner inquiry workspace`.

## Task 9: Implement visual systems

**Files:** division tokens, components, media manifest, route styles, visual tests.

1. Build static mobile-first compositions first.
2. Implement Systems technical material language and Studio editorial language independently.
3. Add approved generated placeholders with alt text and replacement metadata.
4. Run contrast, zoom, typography, and responsive review.
5. Commit `feat: apply distinct systems and studio art direction`.

## Task 10: Add reviewed motion

**Files:** route-specific motion modules, reduced-motion utilities, performance tests.

1. Record baseline bundle and performance traces.
2. Add Motion transitions with reduced-motion alternatives.
3. Add GSAP or WebGL only for a named high-value sequence after a separate review.
4. Compare traces and remove anything outside budgets.
5. Commit `feat: add purposeful accessible motion`.

## Task 11: Security, accessibility, SEO, and release review

**Files:** test reports, security findings, release checklist, handoff.

1. Run clean install, lint, typecheck, unit, integration, browser, axe, build, OpenNext preview, dependency audit, secret scan, and RLS tests.
2. Inspect every route at target viewports and reduced motion.
3. Validate sitemap, robots, canonicals, structured data, Search Console, Turnstile, notifications, backups, and rollback.
4. Resolve all critical/high findings and document accepted residual risks.
5. Obtain legal/tax/content truth approvals.
6. Deploy through the owner-controlled release gate and run post-deploy smoke tests.
7. Commit `release: launch mmoptibuilds foundation`.
