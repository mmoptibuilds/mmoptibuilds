# Foreman Ledger — MMOptiBuilds implementation program

BASELINE: implementation-pack-tree-2026-08-13 | no Git metadata present; starter is dependency-only | 2026-08-13 Asia/Calcutta

## Plan

Tracker source: `docs/superpowers/plans/2026-08-11-mmoptibuilds-implementation-plan.md` plus `21-IMPLEMENTATION-ROADMAP.md`.

Original items: ITEM-01 bootstrap; ITEM-02 route/theme boundaries; ITEM-03 metadata/content; ITEM-04 Supabase schema/security; ITEM-05 contact vertical slice; ITEM-06 Systems/enterprise briefs; ITEM-07 Studio/portfolio; ITEM-08 owner dashboard; ITEM-09 visual systems; ITEM-10 reviewed motion; ITEM-11 security/accessibility/SEO/release.

Pilot: ITEM-01 only. `max_parallel=1`. No later dispatch until ITEM-01 is independently verified, exact guarded projection is reported, and the pilot is approved.

Done means: each original item has explicit product criteria and reproducible gates; its bounded worker result is independently verified; no unreviewed writer remains; and after all items a fresh assembled-candidate verifier passes the full original criteria with process closure. Production deployment is out of scope until the owner-controlled launch checklist is signed.

## Routing

T-01-bootstrap | moderate residual judgment | quality floor: clean Next/TypeScript/Vitest/OpenNext foundation | codex-cli | requested gpt-5.6-terra / medium | evidence labels requested-pin + runtime-metadata-confirmed pending receipt | bounded implementation; exact seat available from fresh capability probe.

## Tasks

T-01-bootstrap | ITEM-01 | ACCEPTED | `starter/app/layout.tsx`, `starter/app/page.tsx`, `starter/app/globals.css`, `starter/tests/smoke.test.tsx`, `starter/vitest.config.ts`, `starter/next-env.d.ts`, plus verified config repairs | codex-cli worker + lead takeover | `.foreman/scratch/T-01-bootstrap.md` / `.foreman/reports/T-01-verifier-final.md`

T-02-route-skeleton | ITEM-02 supporting slice | ACCEPTED SLICE | route groups, six entry pages, admin noindex, route tests | codex-cli worker | `.foreman/scratch/T-02-route-skeleton.md` / `.foreman/reports/T-02-verifier-final.md`

T-02-theme-boundaries | ITEM-02 supporting slice | ACCEPTED SLICE | three division shells, independent CSS scopes, boundary tests | codex-cli worker | `.foreman/scratch/T-02-theme-boundaries.md` / `.foreman/reports/T-02-theme-verifier.md`

T-02-navigation | ITEM-02 supporting slice | ACCEPTED SLICE | shared accessible public navigation, native links, no admin link | codex-cli worker | `.foreman/scratch/T-02-navigation.md` / `.foreman/reports/T-02-navigation-verifier.md`

## Verification Contracts

T-01-bootstrap | PC-01..PC-04 | product verifier owns product proof; lead owns orchestration proof, route evidence, write-set isolation, retry history, and process closure.

## Attempts

Append-only program state is `.foreman/state/program.jsonl`; raw streams and receipts remain under `.foreman/raw/`; reports and criterion evidence remain under `.foreman/reports/`.

## Process Closure

All six dispatched attempts are terminal and independently verified; no active writer or verifier remains. The current program status is intentionally not complete: ITEM-02 remains open for the tracker’s skip-navigation/focus-order/mobile evidence and wordmark/font-contract requirements, and ITEM-03..ITEM-11 remain untouched. Further dispatch is paused because original-item accepted throughput remains 1/11 and the guard cannot produce a numeric remaining-cost projection after the lead takeover.

## Decisions

- The repository root is a product-pack workspace, not an application repository; `starter/` is the only implementation target.
- The pilot is intentionally limited to the bootstrap task because no application source exists yet.
- No plugin installation is needed; native Codex CLI and managed local tooling are available.
