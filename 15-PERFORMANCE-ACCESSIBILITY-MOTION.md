# Performance, accessibility, and motion

## Budgets

| Measure | Launch target |
|---|---|
| LCP | ≤ 2.5 s at p75 |
| INP | ≤ 200 ms at p75 |
| CLS | ≤ 0.1 at p75 |
| Initial route JS | Prefer ≤ 170 KB compressed; justify exceptions |
| Hero media | Prefer ≤ 500 KB mobile and ≤ 1 MB desktop |
| Fonts | Two families maximum per division; subset and self-host legally |

## Accessibility target

WCAG 2.2 AA. Use semantic landmarks and headings, visible focus, logical order, accessible names, contrast, error summaries, status announcements, captions/transcripts, and a complete keyboard path. Test at 200% zoom, narrow viewports, high contrast, reduced motion, and coarse pointer.

## Motion policy

- Start from static, complete content.
- Use CSS for simple states, Motion for component/layout transitions, GSAP only for orchestrated editorial sequences, and WebGL only for a unique scene that survives a performance review.
- Honor `prefers-reduced-motion`; also reduce autoplay video and parallax for data-saving or constrained devices.
- Never trap scrolling, delay navigation, move focus unexpectedly, or make hover the only discovery method.
- Pause offscreen animation and clean up observers, timelines, canvases, and event listeners.

## Asset loading

Responsive AVIF/WebP, correct intrinsic dimensions, lazy-loaded below the fold, priority only for the true LCP asset, and posters for video. Load 3D and shader libraries only on routes that use them, behind dynamic imports and a static fallback.

## Verification

Use Lighthouse for regressions, Playwright for route and keyboard journeys, axe for automated accessibility signals, browser performance traces for heavy pages, and field CWV from Cloudflare Web Analytics. Automated checks supplement manual assistive-technology review.
