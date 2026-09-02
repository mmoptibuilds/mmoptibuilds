# Research report

Research date: 2026-08-11. Recheck commercial terms before launch because services change.

## Key findings

- Vercel documents Hobby as non-commercial personal use. It is unsuitable for the commercial production site without an eligible paid plan.
- Cloudflare officially supports most Next.js App Router features through its OpenNext adapter on Workers. Node.js middleware remains a documented limitation; PPR and composable caching remain experimental in Next.js.
- Supabase free projects can pause after inactivity and do not include downloadable database backups. The platform's built-in auth email service is best-effort and limited to two emails per hour; production auth should use custom SMTP.
- Cloudflare Turnstile has a free plan suitable for small businesses and requires server-side token verification.
- Cloudflare Web Analytics is available on all plans and is positioned as privacy-conscious.
- Cloudflare Email Routing is free. On the free Workers plan, application emails can be sent free to verified destination addresses; arbitrary outbound recipients require Workers Paid. Resend currently offers 3,000 emails per month with a 100-per-day free limit and one domain.
- GitHub Free currently includes private repositories and 2,000 Actions minutes per month, with storage quotas.
- Google recommends people-first content, descriptive URL structures, mobile parity, and structured data that reflects visible content.
- Current Core Web Vitals “good” thresholds are LCP ≤2.5s, INP ≤200ms, and CLS ≤0.1 at the 75th percentile.
- WCAG 2.2 is the accessibility baseline.
- Awwwards scoring examples weight Design 40%, Usability 30%, Creativity 20%, and Content 10%; its developer criteria also emphasize SEO/semantics, animation, accessibility, performance, responsive design, and metadata.

## Recommended reading

- Vercel Hobby: https://vercel.com/docs/plans/hobby
- Cloudflare Next.js: https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/
- Cloudflare Workers pricing: https://developers.cloudflare.com/workers/platform/pricing/
- Cloudflare Turnstile: https://developers.cloudflare.com/turnstile/
- Cloudflare Web Analytics: https://developers.cloudflare.com/web-analytics/
- Cloudflare Email Service pricing: https://developers.cloudflare.com/email-service/platform/pricing/
- Supabase production checklist: https://supabase.com/docs/guides/deployment/going-into-prod
- Supabase SMTP: https://supabase.com/docs/guides/auth/auth-smtp
- Supabase API keys: https://supabase.com/docs/guides/getting-started/api-keys
- Resend pricing: https://resend.com/pricing
- GitHub Actions billing: https://docs.github.com/billing/managing-billing-for-github-actions/about-billing-for-github-actions
- Google SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google helpful content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google mobile-first indexing: https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing
- Core Web Vitals: https://web.dev/articles/vitals
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- OWASP Cheat Sheet Series: https://cheatsheetseries.owasp.org/
- India DPDP Act: https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf
- India DPDP Rules 2025: https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa
- CBIC GST FAQ: https://cbic-gst.gov.in/faq.html

## Interpretation

The best no-new-spend architecture is Cloudflare Workers/OpenNext plus Supabase, not Vercel Hobby. At launch, owner-only email notification can use Cloudflare's verified-destination path. Visitor acknowledgement can remain on-screen until a verified transactional email provider is configured. This reduces cost, abuse surface, and friction.
