TASK: Bootstrap the MMOptiBuilds application foundation.

GOAL: Turn the dependency-only starter into the smallest real Next.js App Router application so later tracker tasks have a tested starting point.

EXPECTED OUTCOME: A minimal accessible root route, truthful baseline metadata, a focused heading smoke test, and passing repository-native gates.

CONTEXT:
- Repository root: C:/projects/mmoptibuilds-complete-delivery
- Application directory: C:/projects/mmoptibuilds-complete-delivery/starter
- The root pack is authoritative. Read README.md, 01-SOURCE-OF-TRUTH.md, 02-DECISION-REGISTER.md, 11-TECHNICAL-ARCHITECTURE.md, 21-IMPLEMENTATION-ROADMAP.md, and docs/superpowers/plans/2026-08-11-mmoptibuilds-implementation-plan.md only as needed.
- The starter intentionally contains manifests/configuration but no app source or tests.
- Do not create or use a Git repository; preserve the delivery-pack layout.

PREFLIGHT: T-01-bootstrap.json is READY after a lead-owned correction to the pilot write set. The lead will dispatch and audit the guarded event. This is a bounded execution role.

ROUTING: Codex CLI, requested model gpt-5.6-terra, medium effort, requested-pin plus runtime evidence from the wrapper/CLI if exposed. Residual judgment is moderate but constrained to the foundation files; quality floor is a clean Next/TypeScript/Vitest/OpenNext baseline. Do not route further workers.

PROGRAM ITEMS: ITEM-01.

PRODUCT ACCEPTANCE CRITERIA:
- PC-01: The root route renders the mmoptibuilds parent-brand as one semantic h1.
- PC-02: Root metadata is truthful baseline metadata with no price, fabricated proof, or unsupported claims.
- PC-03: A smoke test asserts the root h1 by accessible role/name and passes with npm test.
- PC-04: npm run lint, npm run typecheck, npm test, npm run build, and npm run cf:build all exit 0.

ORCHESTRATION REPORT REQUIREMENTS:
- First line exactly DONE, DONE_WITH_CONCERNS, NEEDS_CONTEXT, or BLOCKED.
- List changed files, criteria-indexed observations, exact commands and exit statuses, raw evidence paths supplied by the lead, model/effort evidence labels, timing/usage or unavailable fields, concerns/blockers, and final status.

VERIFICATION:
- The lead will inspect the diff and independently rerun the focused gates.
- A fresh read-only verifier will inspect the isolated product files and reproduce the product criteria without the builder narrative.

EVIDENCE REQUIRED:
- Changed file list and diff.
- Exact command output for lint, typecheck, test, Next build, and OpenNext build.
- Test name and assertion proving the root h1.
- Final status showing no edits outside the write set.

CONSTRAINTS: Use the existing package manifests and dependencies. Keep Server Components by default. Use semantic HTML, accessible naming, and a simple static-first foundation. Keep the implementation compatible with Next 16, React 19, TypeScript strict mode, Vitest, and OpenNext.

MUST DO: Create only the declared foundation files and bootstrap configuration files; make the root route render; add the smoke test and Vitest configuration required to execute it; normalize the PostCSS config so lint is warning-free; add the minimal Next config required by OpenNext; preserve the final intended tsconfig; run all five gates from starter; provide a concise handoff.

MUST NOT: This is a bounded execution role. Do not load or apply orchestration skills, delegate, install new packages, change package manifests/lockfiles/config outside the write set, create later routes, add forms/auth/Supabase/motion/3D, invent business facts, deploy, expose secrets, or read outside the supplied repository/context paths.

WRITE SET: starter/app/layout.tsx, starter/app/page.tsx, starter/app/globals.css, starter/tests/smoke.test.tsx, starter/vitest.config.ts, starter/next-env.d.ts, starter/next.config.js, starter/postcss.config.mjs, starter/tsconfig.json.

STOP CONDITIONS: If a required dependency is genuinely unavailable, return NEEDS_CONTEXT with the exact missing module/command. If the environment prevents a gate, return BLOCKED only with exact external evidence. Do not expand scope to repair unrelated baseline issues.

OUTPUT FORMAT: First line status. Then changed files; criterion-by-criterion evidence; commands with exit status; raw evidence locations; model/effort evidence; timing/usage or unavailable; concerns/blockers; repository status; next action.
