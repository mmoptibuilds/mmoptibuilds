# QA and acceptance criteria

## Global

- All launch routes return the intended status and work on direct refresh.
- There are no broken internal links, console errors, failed required requests, or missing assets.
- Public copy contains no unapproved claim, fake proof, price, stock statement, or placeholder.
- 320, 375, 768, 1024, 1440, and wide layouts are visually reviewed.
- Keyboard-only use, visible focus, skip navigation, 200% zoom, reduced motion, and touch are reviewed.
- Titles, descriptions, canonicals, Open Graph data, sitemap, robots, headings, and structured data are correct.

## Forms

- Client and server schemas agree, but the server remains authoritative.
- Turnstile is validated server-side; fake, expired, missing, and replayed tokens fail safely.
- Repeated taps and retries do not create duplicates.
- Errors preserve safe input, focus the summary, identify fields, and support retry.
- Analytics contain no personal or sensitive values.
- Notification failure does not lose a stored inquiry.

## Dashboard

- Anonymous and non-owner access fails for every read and mutation.
- RLS tests prove cross-role isolation.
- Status, notes, quotes, follow-ups, export, and audit history work.
- Admin routes are noindex and absent from public navigation and sitemap.

## Performance

- Field target: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at p75.
- No unnecessary global client component or global visual library.
- Images have dimensions and responsive sizing; video/3D has poster/fallback.
- Reduced-motion mode removes nonessential transforms and autoplay behavior.

## Release evidence

Archive command output, test report, route screenshots, mobile screenshots, accessibility report, security findings, Lighthouse/trace summary, migration status, policy approvals, and rollback procedure with the release.
