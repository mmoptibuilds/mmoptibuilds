DONE_WITH_CONCERNS

Changed files:

- Deleted `starter/app/page.tsx`
- Added `starter/app/(gateway)/page.tsx`
- Added `starter/app/(gateway)/about/page.tsx`
- Added `starter/app/(gateway)/contact/page.tsx`
- Added `starter/app/(systems)/systems/page.tsx`
- Added `starter/app/(studio)/studio/page.tsx`
- Added `starter/app/admin/page.tsx`
- Added `starter/tests/routes.test.tsx`
- Updated `starter/tests/smoke.test.tsx` to preserve its root-heading assertion after relocating the root component

Criteria evidence:

- PC-21: Focused tests assert distinct semantic `h1`s for `/`, `/systems`, `/studio`, `/about`, `/contact`, and `/admin`; 8 tests passed.
- PC-22: Root now exclusively belongs to `(gateway)`; Systems and Studio are isolated in their approved route groups. Next/OpenNext builds list all six direct static paths.
- PC-23: Admin exports `robots: { index: false, follow: false }`; copy is neutral and contains no prohibited public claims.
- PC-24: All five requested gates passed.

Commands and exit status:

- `npm.cmd run lint` — exit 0
- `npm.cmd run typecheck` — exit 0
- `npm.cmd test` — exit 0; 2 files, 8 tests passed
- `npm.cmd run build` — exit 0; routes `/`, `/systems`, `/studio`, `/about`, `/contact`, `/admin`
- `npm.cmd run cf:build` — exit 0; OpenNext bundle completed

Raw evidence paths supplied by lead: none.

Model/effort: requested-pin `gpt-5.6-terra`, medium effort. Runtime identity/usage receipt unavailable.

Concern: the starter contains no Git repository metadata, so `git diff`/`git status` cannot be produced. Also, preserving the existing smoke assertion required the one import-only update to `tests/smoke.test.tsx`, which is just outside the stated write set.

Repository fingerprint: `app/page.tsx` is absent; all routes are present under the expected tree. No package manifests or lockfiles changed.

Next action: lead can audit the route tree and independently reproduce the five gates.