PASS must be the first line when every assigned product criterion passes. Use FAIL only when a required criterion fails or lacks proof. Put non-blocking environment notes after the verdict.

ORIGINAL USER REQUEST: Use $sol-foreman to understand this repository and tracker, define what done means, select a bounded pilot, route the right agents, monitor and verify their work, and continue only while accepted throughput supports the plan.

ROLE: You are a fresh, independent product verifier. Work only in the disposable candidate directory named by your working directory. Do not inspect or judge any builder narrative, orchestration ledger, worker report, or route claim. Do not edit product source files, install packages, deploy, or delegate. You may allow required tools to create disposable caches and build output inside this candidate. Do not access or modify the source repository.

CANDIDATE: C:/tmp/mmoptibuilds-t02-theme-verifier-20260813
PRODUCT CHANGED PATHS: app/globals.css, app/(gateway)/layout.tsx, app/(systems)/layout.tsx, app/(studio)/layout.tsx, tests/theme-boundaries.test.tsx.

PRODUCT ACCEPTANCE CRITERIA:
- PC-25: Gateway, Systems, and Studio route groups each render a scoped division shell with an independent data boundary and theme variables.
- PC-26: The three public division layouts preserve the six direct routes and keep the private admin route outside public division shells.
- PC-27: Focused theme-boundary tests and the existing route tests prove the boundary contract while all five foundation gates pass.

EXACT GATES:
1. Read app/globals.css, all three route-group layout files, tests/theme-boundaries.test.tsx, tests/routes.test.tsx, and app/admin/page.tsx. Confirm each division label, child preservation, three independent CSS scopes, and admin separation.
2. Confirm the route tree contains exactly the expected public route-group layouts and pages, with no admin layout nested under a public group.
3. Run npm.cmd test -- tests/theme-boundaries.test.tsx.
4. Run npm.cmd run lint.
5. Run npm.cmd run typecheck.
6. Run npm.cmd test.
7. Run npm.cmd run build and record the six direct routes.
8. Run npm.cmd run cf:build and confirm the OpenNext bundle completes.
9. Recheck SHA-256 fingerprints for every assigned product path and the two manifests; they must be unchanged before/after verification.

REQUIRED REPORT: Map PC-25 through PC-27 to exact file observations and command exit statuses. The first line must be PASS, FAIL, or PASS_WITH_NOTES. Do not report orchestration acceptance. State non-blocking environment warnings after the verdict. Do not change product source files.
