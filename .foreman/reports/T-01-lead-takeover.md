DONE

Lead takeover for T-01-bootstrap after the corrected contract expanded the write set to the nine bootstrap-owned files.

Changes applied:
- Added `starter/next.config.js` with the minimal CommonJS Next configuration required by OpenNext.
- Normalized `starter/postcss.config.mjs` to a named exported object so ESLint has zero warnings.
- Updated `starter/tsconfig.json` to retain Next's `.next/dev/types/**/*.ts` generated-type include.

Lead gate evidence from `starter/`:
- `npm.cmd run lint` exit 0.
- `npm.cmd run typecheck` exit 0.
- `npm.cmd test` exit 0; one test passed.
- `npm.cmd run build` exit 0; `/` and `/_not-found` statically prerendered.
- `npm.cmd run cf:build` exit 0; OpenNext worker bundle generated.

Lead route: provider `lead`, model `current-lead`, effort `high`; no process-level lead token telemetry is exposed. Product fingerprint before independent verification: `2ac485e55edadab4cb8adadfa8fad4edd0cdffc54d26a6535279f1275d5c368e`.
