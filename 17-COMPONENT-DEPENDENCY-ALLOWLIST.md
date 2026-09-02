# Component and dependency allowlist

## Core launch dependencies

Next.js, React, TypeScript, Tailwind CSS, Supabase SSR/client, Zod, React Hook Form, resolver adapters, Motion, Lucide, `clsx`, `tailwind-merge`, `class-variance-authority`, Radix primitives as needed, and `server-only`.

Use GSAP only for a reviewed sequence that Motion cannot express cleanly. Add Lenis only if native scrolling plus CSS cannot meet the intended feel; it must preserve keyboard, anchors, history, and reduced motion.

## Approved visual lab—not installed by default

| Library | Possible use | Gate |
|---|---|---|
| `three`, `@react-three/fiber`, `@react-three/drei`, `maath` | One Systems hero or product scene | Static fallback and GPU/performance proof |
| `postprocessing`, `@react-three/postprocessing` | Carefully scoped scene effect | No readability or battery regression |
| `@paper-design/shaders-react` | Studio art layer | License and reduced-motion fallback |
| `@tsparticles/react`, engine, slim | Sparse contextual particles | Prove value over CSS/canvas |
| `@splinetool/runtime`, React Spline | Authored scene | Export weight and tracking review |
| `maplibre-gl` | Real service-area or logistics map | A map must answer a user question |
| `@tabler/icons-react` | Missing specialist icons | Do not ship two complete icon sets casually |

## Referenced patterns requiring adaptation

Map arcs, 3D card, lamp, aurora, card stack, grid distortion, dither, paper shaders, sparkles, cover, stateful button, spotlight/canvas reveal, encrypted text, expandable cards, MacBook scroll, fluid glass, glass surface, notch, resizable navbar, Spline scene, parallax feature, immersive gallery, sticky reveal, tracing beam, and label/input references are inspiration—not an instruction to install or combine all of them.

## Excluded

- Ball-pit animation
- Dependency bundles installed “just in case”
- Unmaintained packages without a containment plan
- Components that duplicate an existing primitive
- Visual effects that require pointer hover or block reading

Every addition needs a named route, purpose, bundle impact, license check, fallback, and removal owner.
