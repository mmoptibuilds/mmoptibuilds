# Executive summary

MMOptiBuilds will be a founder-led technology brand with two divisions on one permanent domain:

- **MMOptiBuilds Systems** sources and supplies custom PCs, workstations, business systems, and exact-spec enterprise hardware.
- **MMOptiBuilds Studio** creates conversion-focused websites and bespoke premium digital experiences.

The root page is a clear brand gateway, not an obscure splash screen. Systems and Studio share infrastructure but not a visible design system. Systems should feel engineered, precise, dark, and technical. Studio should feel editorial, expressive, human, and art-directed.

## Business model

Systems holds no stock. The customer submits requirements, MMOptiBuilds confirms distributor availability and terms, and then issues a tailored quote. The founder may assemble and test PCs. Enterprise customers must know the hardware they need; enterprise fulfillment is sourcing and delivery only.

Studio accepts both focused lower-budget projects and premium bespoke work. Every project retains the same baseline: accessibility, mobile-first usability, clear conversion, technical SEO, security, and maintainability. Clients own their domains and hosting. MMOptiBuilds may deploy once using temporary collaborator access, then removes access and provides a handoff. A 30-day bug-fix warranty excludes new features and content changes.

## Product model

The public experience contains unique service pages and conversion flows for each search intent. All inquiries feed one owner-only dashboard with separate Systems and Studio workspaces, a shared inbox, quotes, contacts, analytics, and settings.

## Zero-spend launch architecture

- Next.js 16 App Router, TypeScript, React 19, Tailwind CSS 4
- Cloudflare Workers and OpenNext for commercial production
- Supabase Postgres, Auth, and Row Level Security
- Cloudflare Turnstile, DNS, TLS, Web Analytics, and Email Routing
- GitHub private repository and Actions within free quotas
- Resend free tier only if visitor acknowledgements or owner authentication emails are needed in production

Vercel Hobby is not selected for the commercial production site because its documented terms restrict the plan to non-commercial personal use.

## Release strategy

Launch a complete, narrow foundation first: root gateway, Systems overview, Studio overview, focused quote forms, About, Contact, one honest case study, and the owner dashboard. Add rich 3D, advanced motion, builders, and deeper service pages only after the core journey is fast, accessible, truthful, and measurable.

## Principal risks

- Publishing unverified claims, policies, warranties, or tax language
- Building too much motion before proving mobile performance
- Using Vercel Hobby commercially
- Treating free Supabase email as production SMTP
- Letting agents edit the same files or install overlapping visual libraries
- Launching without a verified privacy notice, terms, quote rules, warranty rules, and tax review

The implementation plan addresses each risk with explicit gates.
