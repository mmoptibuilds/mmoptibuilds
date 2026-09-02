# Technical architecture

## Baseline

Use one private repository and one Next.js 16 App Router application. Route groups isolate public experiences without imposing a shared visual shell:

```text
app/
├── (gateway)/
├── (systems)/systems/
├── (studio)/studio/
├── (legal)/
├── admin/
└── api/
```

`components/shared` contains only behavior and accessibility primitives. `components/systems` and `components/studio` own visible patterns. Each division has independent design tokens, fonts, art direction, motion configuration, and content schemas.

## Runtime

- Cloudflare Workers through `@opennextjs/cloudflare`
- Node.js compatibility enabled only where required and supported
- Static generation for stable marketing pages
- Dynamic route handlers for inquiries, dashboard, and signed operations
- Server Components by default; Client Components only for interaction
- Supabase Postgres and owner Auth
- Cloudflare Turnstile verified server-side before accepting public submissions
- Cloudflare Web Analytics for baseline traffic and CWV signals

## Environments

| Environment | Purpose | Data rule |
|---|---|---|
| Local | Development and automated tests | Local Supabase or isolated test project |
| Preview | Review branch output | Synthetic data only |
| Production | `mmoptibuilds.com` | Real inquiries and owner access |

Never share production secrets or personal inquiry data with AI tools, preview deployments, logs, analytics events, or screenshots.

## Request flow

1. Browser submits normalized form data and Turnstile token.
2. Route handler checks content type, origin strategy, body size, Turnstile, honeypot, rate limit, and Zod schema.
3. A database function inserts the inquiry and immutable consent/audit facts.
4. A reference ID is returned; duplicate retries are idempotent.
5. A non-blocking owner notification is sent to a verified destination.
6. Dashboard queries remain behind authenticated RLS policies.

## Why not a monorepo or microfrontends now

The visible design systems do not require deployment fragmentation. One application makes local development, forms, auth, SEO, analytics, testing, and deployment easier. Split only after measured organizational or runtime pressure, not aesthetic preference.

## Hosting constraint

Do not deploy the commercial production site to Vercel Hobby. Cloudflare's official OpenNext adapter supports the App Router, route handlers, RSC, SSG, SSR, ISR, Server Actions, streaming, and middleware; avoid unsupported Node.js middleware assumptions. Use Vercel only for eligible previews or a paid plan.
