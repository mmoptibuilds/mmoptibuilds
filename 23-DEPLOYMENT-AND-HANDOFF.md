# Deployment and handoff

## Production

Deploy the Next.js application to Cloudflare Workers using OpenNext. Route `mmoptibuilds.com` through Cloudflare DNS and TLS. Keep preview data synthetic and separate from production Supabase.

## Release sequence

1. Freeze content and migrations for the release candidate.
2. Run install from lockfile, typecheck, lint, tests, production build, OpenNext build, security checks, and browser suite.
3. Apply reviewed database migrations and verify RLS.
4. Deploy to a production-equivalent preview and run smoke tests.
5. Confirm environment variables, Turnstile hostnames, email destination, analytics, sitemap, robots, and canonical host.
6. Deploy production, run smoke tests, and monitor logs and inquiries.
7. Record release SHA, migration version, operator, evidence, and rollback point.

## Rollback

Application rollback must not assume a destructive schema rollback. Prefer backward-compatible migrations, feature flags for risky behavior, and a previous known-good Worker deployment. Pause form acceptance with a clear message if data integrity is uncertain.

## Studio client handoff model

- Client creates and owns domain, hosting, email, analytics, database, and third-party accounts.
- Client grants time-limited collaborator access; primary passwords are not shared.
- MMOptiBuilds records configuration, environment-variable names, repository ownership, deployment steps, backups, and recovery contacts.
- Remove access after acceptance and confirm removal in writing.
- The 30-day warranty starts at documented acceptance or launch, according to the approved agreement.
- Later changes are separately scoped.

## No managed-hosting promise

Do not describe deployment help as permanent hosting management. The agreement must identify who monitors uptime, renews domains, pays vendors, handles abuse notices, and maintains content after handoff.
