TASK: Add the shared MMOptiBuilds public division navigation.

GOAL: Complete the public navigation portion of ITEM-02 on top of the independently verified route skeleton and theme boundaries.

EXPECTED OUTCOME: All three public division shells render the same semantic navigation with native links to the gateway, Systems, and Studio; the navigation is accessible and excludes admin; focused tests and all foundation gates remain green.

CONTEXT:
- Repository root: C:/projects/mmoptibuilds-complete-delivery
- Application directory: C:/projects/mmoptibuilds-complete-delivery/starter
- Read README.md, 01-SOURCE-OF-TRUTH.md, 02-DECISION-REGISTER.md, 04-REQUIREMENTS.md, 11-TECHNICAL-ARCHITECTURE.md, 15-PERFORMANCE-ACCESSIBILITY-MOTION.md, 21-IMPLEMENTATION-ROADMAP.md, and docs/superpowers/plans/2026-08-11-mmoptibuilds-implementation-plan.md as needed.
- ITEM-01 bootstrap, T-02 route skeleton, and T-02 theme boundaries are independently verified baselines.
- This is a bounded completion slice of ITEM-02. Metadata, content, forms, auth, backend, visual systems, and motion are later slices.

PREFLIGHT: T-02-navigation.json is READY; the lead will dispatch and audit the guarded event. The first checkpoint is required at 10 minutes.

ROUTING: Codex CLI, requested model gpt-5.6-terra, medium effort, requested-pin; runtime identity will be recorded only if the receipt exposes it. Residual judgment is low and limited to straightforward semantic navigation. Do not route further workers.

PROGRAM ITEMS: ITEM-02. The route skeleton and theme boundaries are already verified; the lead may assign ITEM-02 as completed only if this navigation slice also satisfies the original route/theme-boundary criteria.

IMPLEMENTATION BOUNDARY:
- Add components/site-navigation.tsx, update only the three declared public layouts to render it, and add tests/navigation.test.tsx. Do not change package manifests, lockfiles, page components, admin, CSS, or configuration.
- Use one shared component with a semantic nav, an accessible label, and native Next Link elements to `/`, `/systems`, and `/studio`. Do not include an admin link or invent claims.
- Keep the existing data-division shells and children preservation intact.
- Tests must prove each public layout renders the navigation, the accessible label, exact public hrefs, and no `/admin` link. Keep tests deterministic and compatible with Vitest.
- Do not use orchestration skills, delegation, or external services.

DONE REPORT: First line must be DONE, DONE_WITH_CONCERNS, NEEDS_CONTEXT, or BLOCKED. List exact changed files, map PC-28 through PC-30 to evidence, record every command exit status, and name any concern. Do not claim independent acceptance; the lead will verify separately.
