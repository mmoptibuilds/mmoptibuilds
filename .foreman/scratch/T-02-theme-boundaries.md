TASK: Complete the MMOptiBuilds route/theme boundary slice.

GOAL: Add independent public division shells on top of the independently verified route skeleton.

EXPECTED OUTCOME: Gateway, Systems, and Studio route groups each have a layout with a clear data-division boundary and route-specific CSS variable scope; focused tests cover the contract; all foundation gates remain green.

CONTEXT:
- Repository root: C:/projects/mmoptibuilds-complete-delivery
- Application directory: C:/projects/mmoptibuilds-complete-delivery/starter
- Read README.md, 01-SOURCE-OF-TRUTH.md, 02-DECISION-REGISTER.md, 04-REQUIREMENTS.md, 11-TECHNICAL-ARCHITECTURE.md, 15-PERFORMANCE-ACCESSIBILITY-MOTION.md, 21-IMPLEMENTATION-ROADMAP.md, and docs/superpowers/plans/2026-08-11-mmoptibuilds-implementation-plan.md as needed.
- ITEM-01 bootstrap and the T-02 route-skeleton slice are independently verified baselines.
- This is a bounded completion slice of ITEM-02. Public navigation, metadata, content modules, forms, auth, backend, visual systems, and motion are later slices.

PREFLIGHT: T-02-theme-boundaries.json is READY; the lead will dispatch and audit the guarded event. The first checkpoint is required at 10 minutes.

ROUTING: Codex CLI, requested model gpt-5.6-terra, medium effort, requested-pin; runtime identity will be recorded only if the receipt exposes it. Residual judgment is moderate and limited to straightforward route-group shells and CSS variable boundaries. Do not route further workers.

PROGRAM ITEMS: ITEM-02. The route skeleton was already verified but did not complete ITEM-02. The lead may assign ITEM-02 as completed only if this slice plus the earlier verified slice together satisfy the original route/theme-boundary criteria.

IMPLEMENTATION BOUNDARY:
- Add only the five declared files. Do not change package manifests, lockfiles, existing page components, admin, or configuration.
- Add app/(gateway)/layout.tsx, app/(systems)/layout.tsx, and app/(studio)/layout.tsx. Each layout must wrap its children in a distinct data-division boundary. Keep the admin route outside these layouts.
- Add independent, small CSS variable scopes in globals.css for gateway, systems, and studio. Keep the existing neutral baseline and avoid adding external dependencies or visual claims.
- Add tests/theme-boundaries.test.tsx to prove the three layouts expose distinct division labels and preserve their children. Keep tests deterministic and compatible with the existing Vitest setup.
- Do not add navigation in this slice; that is a separate bounded ticket.
- Do not use orchestration skills, delegation, or external services.

DONE REPORT: First line must be DONE, DONE_WITH_CONCERNS, NEEDS_CONTEXT, or BLOCKED. List exact changed files, map PC-25 through PC-27 to evidence, record every command exit status, and name any concern. Do not claim independent acceptance; the lead will verify separately.
