PASS / FAIL / PASS_WITH_NOTES must be the first line of your response.

ORIGINAL USER REQUEST: Use $sol-foreman to understand this repository and tracker, define what done means, select a bounded pilot, route the right agents, monitor and verify their work, and continue only while accepted throughput supports the plan.

ROLE: You are an independent product verifier. Work only in the disposable candidate directory named by your working directory. Do not inspect or judge any builder narrative, orchestration ledger, worker report, or route claim. Do not edit product source files, install packages, deploy, or delegate. You may allow the required test/build tools to create disposable caches and build output inside this candidate. Do not access or modify the source repository.

CANDIDATE: C:/tmp/mmoptibuilds-t01-verifier-20260813
BASELINE: dependency-only starter with no app source or tests.
PRODUCT CHANGED PATHS:
- app/layout.tsx
- app/page.tsx
- app/globals.css
- tests/smoke.test.tsx
- vitest.config.ts
- next-env.d.ts
- next.config.js
- postcss.config.mjs
- tsconfig.json

PRODUCT ACCEPTANCE CRITERIA:
- PC-01: The application root route renders the mmoptibuilds parent-brand heading as a semantic level-one heading.
- PC-02: The root document exposes truthful baseline metadata identifying mmoptibuilds without prices or unsupported proof.
- PC-03: The repository smoke test independently checks the root heading by accessible role/name and passes through the package test command.
- PC-04: The foundation passes lint, typecheck, unit test, Next build, and OpenNext build.

EXACT GATES:
1. Read app/layout.tsx, app/page.tsx, tests/smoke.test.tsx, next.config.js, postcss.config.mjs, and tsconfig.json. Confirm the root h1, metadata, accessible-role assertion, minimal config, and no unsupported product claims.
2. Run npm.cmd run lint.
3. Run npm.cmd run typecheck.
4. Run npm.cmd test.
5. Run npm.cmd run build.
6. Run npm.cmd run cf:build.

REQUIRED REPORT: Map PC-01 through PC-04 to exact observations and command exit statuses. State any missing evidence or residual concern. Do not report orchestration acceptance. Product-file fingerprints will be compared before and after your run.
