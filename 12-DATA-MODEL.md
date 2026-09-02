# Data model

## Core tables

| Table | Purpose | Sensitive fields |
|---|---|---|
| `contacts` | Normalized person or organization | email, phone if volunteered |
| `inquiries` | Shared envelope and workflow | message, source, status, assignment |
| `systems_briefs` | PC/workstation requirements | budget range, workload, location |
| `enterprise_rfqs` | Exact-spec procurement | part numbers, quantities, documents |
| `studio_briefs` | Website discovery | business goals, budget band, assets |
| `quotes` | Private proposal metadata | amount, tax, validity, status |
| `notes` | Owner-only internal notes | free text |
| `activities` | Append-only audit trail | actor, action, before/after summary |
| `consents` | Notice version and consent facts | timestamp, policy version, purpose |
| `attachments` | Metadata for approved files | object key, type, size, scan status |

## Status models

`inquiries.status`: `new`, `reviewing`, `needs_information`, `qualified`, `quoted`, `won`, `lost`, `spam`, `archived`.

`quotes.status`: `draft`, `sent`, `accepted`, `declined`, `expired`, `withdrawn`.

## Security rules

- Enable RLS on every exposed table before inserting production data.
- Public users receive no direct table privileges. Public forms call a narrow server route or security-definer function with strict validation.
- Authenticated users still need owner-role policies; authentication alone is not authorization.
- Secret/service-role keys remain backend-only and are never prefixed `NEXT_PUBLIC_`.
- Keep public form payloads minimal and delete data according to an approved retention schedule.
- Attachments are private, allowlisted, size-limited, renamed, malware-scanned before use, and served through short-lived signed URLs.

## Indexes

Index `created_at`, `status`, `division`, `contact_id`, `follow_up_at`, lowercased email, and exact enterprise part number where useful. Add indexes from measured queries, not guesswork.

## Migrations

Every schema change is a versioned SQL migration reviewed in pull request. CI creates an isolated database or applies migrations to a disposable environment. Production changes are backed up and deployed before compatible application code when required.
