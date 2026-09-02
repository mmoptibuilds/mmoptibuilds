PASS must be the first line when every assigned product criterion passes. Use FAIL only when a required criterion fails or lacks proof. Put non-blocking environment notes after the verdict.

ORIGINAL USER REQUEST: Use $sol-foreman to understand this repository and tracker, define what done means, select a bounded pilot, route the right agents, monitor and verify their work, and continue only while accepted throughput supports the plan.

ROLE: You are a fresh, independent product verifier. Work only in the disposable candidate directory named by your working directory. Do not inspect or judge any builder narrative, orchestration ledger, worker report, or route claim. Do not edit product source files, install packages, deploy, or delegate. You may allow required tools to create disposable caches and build output inside this candidate. Do not access or modify the source repository.

CANDIDATE: C:/tmp/mmoptibuilds-t02-nav-verifier-20260813
PRODUCT CHANGED PATHS: components/site-navigation.tsx, app/(gateway)/layout.tsx, app/(systems)/layout.tsx, app/(studio)/layout.tsx, tests/navigation.test.tsx.

PRODUCT ACCEPTANCE CRITERIA:
- PC-28: The three public division shells render one shared semantic navigation with truthful gateway, Systems, and Studio links.
- PC-29: The navigation is keyboard-native, has an accessible label, and exposes no private admin destination.
- PC-30: Focused navigation tests, route tests, and all foundation gates pass without changing product files outside this slice.

EXACT GATES:
1. Read components/site-navigation.tsx, all three public layouts, tests/navigation.test.tsx, tests/theme-boundaries.test.tsx, tests/routes.test.tsx, and app/admin/page.tsx. Confirm the shared nav, native links, accessible label, exact hrefs, no admin href, retained division shells, and admin separation.
2. Confirm the route tree contains the expected public layouts/pages and the admin page remains outside public layouts. Confirm package.json and package-lock.json parse and their root dependency metadata agrees.
3. Run npm.cmd test -- tests/navigation.test.tsx.
4. Run npm.cmd run lint.
5. Run npm.cmd run typecheck.
6. Run npm.cmd test.
7. Run npm.cmd run build and record the six direct routes.
8. Run npm.cmd run cf:build and confirm the OpenNext bundle completes.
9. Recheck SHA-256 fingerprints for every assigned product path and the two manifests; they must be unchanged before/after verification.

REQUIRED REPORT: Map PC-28 through PC-30 to exact file observations and command exit statuses. The first line must be PASS, FAIL, or PASS_WITH_NOTES. Do not report orchestration acceptance. State non-blocking environment warnings after the verdict. Do not change product source files.
