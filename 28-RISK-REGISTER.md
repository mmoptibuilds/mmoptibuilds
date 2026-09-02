# Risk register

| Risk | Likelihood | Impact | Control |
|---|---:|---:|---|
| Commercial use on an ineligible free plan | Medium | High | Cloudflare production; verify terms before release |
| Unverified legal/tax language | High | High | Lawyer/CA launch gate |
| Fake or ambiguous portfolio proof | Medium | High | Evidence file and content-truth review |
| Form spam or notification abuse | High | Medium | Turnstile, throttling, honeypot, verified destination |
| Public data exposure through Supabase | Medium | Critical | RLS, server-only secrets, authorization tests |
| Free Supabase pause or weak backup | Medium | High | Activity monitoring, encrypted exports, paid trigger |
| Heavy motion damages CWV | High | High | Static-first, budgets, dynamic imports, fallbacks |
| Agent context drift | High | High | Authority hierarchy and task-sized briefs |
| Concurrent agent file conflicts | Medium | Medium | One owner per file and checkpoints |
| Dependency sprawl | High | Medium | Core allowlist and per-dependency gate |
| Quote error from changing supply | High | High | Manual distributor confirmation and quote validity |
| Warranty confusion | Medium | High | Separate manufacturer, workmanship, and Studio terms |
| Owner workload becomes bottleneck | Medium | Medium | Structured forms, dashboard, templates, follow-ups |
| Inquiry data retained too long | Medium | High | Retention schedule and quarterly deletion |
| Client illegal use after handoff | Low–medium | High | Client ownership, contract, access removal, no management |

Risk owners and review dates belong in the dashboard or project tracker once implementation begins.
