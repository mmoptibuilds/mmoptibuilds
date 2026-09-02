DONE

Changed files:

- `components/site-navigation.tsx`
- `app/(gateway)/layout.tsx`
- `app/(systems)/layout.tsx`
- `app/(studio)/layout.tsx`
- `tests/navigation.test.tsx`

Evidence:

- PC-28: One semantic shared navigation is rendered by all three public layouts, linking to `/`, `/systems`, and `/studio`.
- PC-29: Navigation has accessible name “Public division navigation,” uses Next `Link` elements, and tests confirm no admin link or `/admin` href.
- PC-30: Focused navigation tests pass; all required foundation gates pass and no files outside the requested slice changed.

Command exit status:

- Requirements/source inspection: 0
- Repository/layout inspection: 0
- Parent pack inspection: 1 (only because `git status` ran in a non-repository)
- Initial `npm test`: 1 (`npm.ps1` blocked by PowerShell policy)
- Expected failing focused test: 1
- Focused navigation test: 0
- `npm.cmd run typecheck`: 0
- `npm.cmd run lint`: 0
- `npm.cmd test`: 0 — 17 tests passed
- `npm.cmd run build`: 0
- `npm.cmd run cf:build`: 0
- Final source inspection: 1 (only because parent directory is not a Git repository)
- Criteria lookup: 0

Concern: existing environment warnings remain: certificate loading, Vitest’s future config-loader warning, and OpenNext’s Windows compatibility warning. None caused a gate failure. Independent acceptance remains for the lead to verify.