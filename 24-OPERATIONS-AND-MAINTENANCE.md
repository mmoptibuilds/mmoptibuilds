# Operations and maintenance

## Daily and weekly

- Review inquiries and spam; respond manually by email.
- Record status, notes, quote state, and next follow-up.
- Check production errors after a release and investigate repeated form failures.
- Verify supplier, availability, warranty, and delivery facts before every Systems quote.

## Monthly

- Review dependency and security updates in a branch.
- Review Search Console, analytics, Core Web Vitals, broken links, 404s, and top inquiry routes.
- Export the inquiry database to encrypted owner-controlled storage if the free platform lacks suitable downloadable backups.
- Test owner recovery, email routing, Turnstile, and one complete form journey.
- Remove stale collaborator access and unused secrets.

## Quarterly

- Review service copy, case-study truth, privacy notice, retention, warranty and terms versions.
- Delete data that has exceeded the approved retention period.
- Replace temporary visuals with real assets where possible.
- Review whether free-tier limits or pausing risk now justify paid infrastructure.

## Incident priorities

1. Protect people and data.
2. Stop unsafe writes or public exposure.
3. Preserve evidence without logging more personal data.
4. Restore a known-good service.
5. Notify affected parties and authorities when legally required.
6. Document cause, impact, remediation, and preventive work.

## Scaling triggers

Pay for infrastructure only when a measured limit affects reliability, commercial terms, recovery, email deliverability, support, or owner time. Likely first upgrades are transactional email, Supabase Pro for non-pausing/backups, and paid hosting if Cloudflare limits or requirements change.
