DONE

Changed files:

- `app/(gateway)/layout.tsx`
- `app/(systems)/layout.tsx`
- `app/(studio)/layout.tsx`
- `app/globals.css`
- `tests/theme-boundaries.test.tsx`

Evidence:

- PC-25: Each public route group now renders a distinct `data-division` shell; `globals.css` defines separate scoped variable sets for gateway, systems, and studio.
- PC-26: Production build enumerates `/`, `/systems`, `/studio`, `/about`, `/contact`, and `/admin`; admin remains outside all public route groups.
- PC-27: Focused boundary coverage passes (6 tests); full Vitest suite passes (14 tests), alongside all required foundation gates.

Command exit statuses:

- Documentation/preflight reads: 0
- Initial focused test RED run: 1 (expected: layouts absent)
- First GREEN focused test run: 1 (test cleanup issue, corrected)
- Focused theme-boundary test: 0
- `npm.cmd run lint`: 0
- `npm.cmd run typecheck`: 0
- `npm.cmd test`: 0
- `npm.cmd run build`: 0
- `npm.cmd run cf:build`: 0
- One broad preflight search: 124 timeout; no changes made by it.

Concern: tooling emits pre-existing certificate/config warnings, and OpenNext warns that Windows support is not fully compatible. All required gates still exited 0. Independent acceptance is reserved for the lead.