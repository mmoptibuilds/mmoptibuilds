# SEO strategy

## Principle

Separate SEO by search intent, not by visual identity alone. Every indexable page must answer a distinct query with original, useful content and a conversion path. Do not generate thin city pages, duplicate service pages, or mass AI copy.

## Intent map

| Cluster | Example intent | Target route |
|---|---|---|
| Custom gaming PC | custom gaming PC builder/supplier in Bengaluru or India | `/systems/gaming-pcs` |
| Workstation | workstation for editing, 3D, AI, CAD, or engineering | `/systems/workstations` |
| Enterprise sourcing | source server/storage/network part by SKU | `/systems/enterprise-hardware` |
| Business website | website design for a small business | `/studio/business-websites` |
| Startup website | launch or investor-ready startup site | `/studio/startup-websites` |
| Redesign | replace an outdated business website | `/studio/website-redesign` |
| Brand | MMOptiBuilds identity and services | `/`, `/about` |

## On-page requirements

- Unique title, description, H1, canonical, Open Graph data, and useful body copy
- Descriptive internal links and breadcrumbs where hierarchy helps
- Accurate `Organization`, `WebSite`, `Service`, `BreadcrumbList`, and `Article`/`CreativeWork` JSON-LD only where facts support them
- Indexable text must not depend on canvas, animation, or client-only rendering
- Image dimensions, descriptive filenames, useful alt text, and responsive formats
- One meaningful page per intent; consolidate cannibalizing pages

## Technical controls

- Generate sitemap from public routes; exclude `/admin`, form steps, previews, and internal filters
- `noindex` admin, staging, search results, and unapproved case studies
- Server-render primary metadata and content
- Monitor Search Console coverage, queries, CWV, canonical selection, and structured-data errors
- Use permanent redirects for retired URLs and preserve backlinks during future changes

## Editorial roadmap

Publish only articles grounded in actual expertise: workload-to-hardware explanations, procurement checklists, website redesign diagnostics, accessibility decisions, and honest project breakdowns. Every article must have an accountable author, review date, sources where needed, and a relevant next step.
