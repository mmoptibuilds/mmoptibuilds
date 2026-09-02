# Security, privacy, and legal baseline

This document is an implementation and review checklist, not legal advice. An Indian lawyer and chartered accountant should approve commercial policies, GST treatment, invoice language, warranties, cancellations, and data practices before launch.

## Security controls

- Owner-only authentication with strong password, MFA when available, secure recovery, and short idle timeout
- Server-side authorization on every dashboard read and mutation
- RLS on all exposed Supabase tables
- Turnstile, validation, rate limits, idempotency, and request-size limits on public forms
- CSRF-resistant patterns for authenticated mutations, strict origin checks where applicable, and `SameSite` cookies
- CSP, HSTS after HTTPS validation, frame protection, MIME sniffing protection, and restrictive permissions policy
- Secrets only in managed environment storage; rotate any exposed credential immediately
- Dependency lockfile, automated audit, minimal permissions, and release-time security review
- Logs redact personal data and secrets; error messages reveal no internals
- Private attachments with allowlisted types, content inspection, random names, and signed access

## Privacy

Collect only data needed to respond, source, quote, or deliver. State the purpose at collection, identify the business contact, record the notice version, provide correction/deletion/contact routes, define retention, and restrict access. Do not train models on inquiry data or send it to agents without explicit anonymization and a lawful reason.

India's Digital Personal Data Protection framework and its 2025 Rules require professional assessment of notices, consent, rights, security safeguards, breach handling, and retention for the actual business setup.

## Commercial boundaries

- Quotes are subject to availability, supplier confirmation, tax, logistics, and written acceptance.
- Manufacturer warranties and MMOptiBuilds workmanship obligations must be distinguished.
- Enterprise supply excludes installation, architecture, compatibility certification, managed infrastructure, and on-site work unless separately agreed.
- Studio clients own domains, hosting, accounts, and production content. One-time deployment access is removed at handoff.
- The 30-day bug warranty covers reproducible deviations from approved scope; it excludes third-party outages, client changes, new features, content updates, abuse, and credentials.
- Never host or manage a client site after handoff unless a separate written service is introduced later.

## Launch blockers

- Legal identity and registered address decision
- GST applicability and invoice workflow confirmed with a CA
- Approved Privacy Notice, Website Terms, Quote Terms, Hardware Supply Terms, Studio Agreement, Warranty Policy, and Cancellation/Refund language
- Support email routing tested
- Supplier and logistics claims verified
- Case-study permissions and factual proof recorded
