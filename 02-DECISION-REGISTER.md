# Decision register

| ID | Decision | Status | Rationale |
|---|---|---|---|
| D-001 | Use `mmoptibuilds.com` permanently | Locked | One brand, no future domain purchases |
| D-002 | Use `/systems`, `/studio`, and `/admin` paths | Locked | Seamless parent brand with distinct sections |
| D-003 | Use one repository and one Next.js application initially | Locked baseline | Lowest operational burden; preserves route-level separation |
| D-004 | Keep two visible design systems | Locked | Different audiences and buying contexts |
| D-005 | Share backend, forms infrastructure, analytics, and owner dashboard | Locked | Centralized operations without visual sameness |
| D-006 | Do not show public prices | Locked | Quotes depend on requirements and current sourcing |
| D-007 | Hold no hardware inventory | Locked | Source from Indian distributors after inquiry |
| D-008 | Founder assembles custom PCs when assembly is purchased | Locked | Current delivery model |
| D-009 | Enterprise is exact-spec sourcing and delivery only | Locked | Avoids unsupported consulting and deployment promises |
| D-010 | Studio supports focused and premium projects | Locked | Accept broad budgets while protecting baseline quality |
| D-011 | Client owns hosting and domain | Locked | Reduces long-term operational and legal exposure |
| D-012 | One-time deployment and documented handoff | Locked | Clear responsibility boundary |
| D-013 | Thirty-day implementation bug warranty | Working policy | Must be reviewed in final contract language |
| D-014 | No visitor accounts at launch | Locked baseline | Better conversion and less auth/email complexity |
| D-015 | Owner-only Supabase authentication | Locked baseline | Dashboard requires controlled access |
| D-016 | Cloudflare Workers/OpenNext for production | Locked baseline | Commercially usable zero-spend path |
| D-017 | Vercel only for eligible previews or paid future use | Locked baseline | Hobby plan is non-commercial |
| D-018 | Supabase for Postgres/Auth/RLS | Locked baseline | Shared data and practical free start |
| D-019 | Cloudflare Turnstile and Web Analytics | Locked baseline | Free abuse control and privacy-conscious analytics |
| D-020 | Resend only when arbitrary transactional email is required | Conditional | Supabase built-in mail is demonstration-only |
| D-021 | Build from scratch; do not export old sites | Locked | Export effort is not justified |
| D-022 | No fake testimonials or synthetic proof | Locked | Trust and legal safety |
| D-023 | AI-generated launch visuals may be used if labelled internally and replaceable | Locked | Enables progress without false claims |
| D-024 | Add advanced motion/3D only after performance gates | Locked | Premium quality depends on restraint |
| D-025 | Production release requires owner-controlled checklist | Locked | Prevents accidental publication and scope errors |

## Open decisions that must not block foundation work

- Final public legal name and business entity details
- GST registration and invoice requirements
- Approved privacy, terms, cancellation, refund, procurement, and warranty wording
- Exact owner email destination and support aliases
- Confirmed supplier, logistics, and manufacturer-warranty language
- Which real projects have permission and evidence for public case studies
- Whether Resend will be configured at launch
