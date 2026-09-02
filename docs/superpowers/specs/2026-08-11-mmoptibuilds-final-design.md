# MMOptiBuilds final design specification

Date: 2026-08-11  
Status: approved through the owner's explicit autonomous-finalization instruction

## Design decision

Build one parent brand as one application, with a clear gateway and two route-contained visual systems. This preserves operational simplicity while allowing Systems and Studio to feel independent. The gateway supplies coherence through the wordmark, founder, service standard, and a restrained neutral visual layer—not by averaging the two divisions together.

## Systems experience

Systems is a technical procurement and custom-build experience. Its content leads with workload, specification, sourcing, assembly, verification, and delivery. Motion behaves like instrumentation. The inquiry is a guided technical brief, while enterprise procurement is an exact-spec RFQ.

## Studio experience

Studio is an editorial creative-agency experience. Its content leads with business clarity, conversion, art direction, and handoff ownership. Focused and premium work appear as different depths of engagement, not good and bad quality tiers.

## Shared operation

All forms use one secure ingestion model and one owner dashboard. Visitors remain guests. The owner manually researches, quotes, and replies. Shared UI is restricted to behavior where visual identity is irrelevant.

## Architecture decision

Use Next.js 16, React 19, TypeScript, Cloudflare Workers/OpenNext, Supabase with RLS, Turnstile, Cloudflare Web Analytics, and owner notifications. Begin with one repository and no microfrontends. Build a static, semantic core before adding motion or 3D.

## Design review

The design satisfies the owner's goals because it supports one permanent domain, different aesthetics and SEO, broad hardware conversion, focused and premium Studio conversion, a single private dashboard, no public prices, and a zero-spend launch path. Its central restraint is intentional: award-level work comes from coherent art direction and execution, not the number of effects installed.
