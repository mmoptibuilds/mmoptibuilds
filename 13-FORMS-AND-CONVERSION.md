# Forms and conversion

## Form families

### Systems build brief

Collect use case, key applications/games, performance priorities, existing preferred parts, private budget range, assembly choice, delivery location, target timing, and free-form constraints. Do not imply instant compatibility or availability.

### Enterprise RFQ

Collect organization, manufacturer, model, part/SKU, quantity, acceptable condition, technical requirements, delivery postcode, required date, warranty, tax invoice/PO needs, and optional procurement document.

### Studio brief

Collect organization, project type, current URL, audience, primary conversion, required pages/capabilities, assets already available, domain/hosting state, budget band, timeline, decision makers, and a free-form description.

## UX rules

- Begin with a small choice, then progressively disclose relevant fields.
- Show a persistent plain-language summary and allow edits before submission.
- Use real labels, descriptions, examples, and inline errors; never placeholder-only labels.
- Budget is private and expressed as a range or “not decided”; public prices remain absent.
- Never require account creation or email verification at launch.
- Preserve non-sensitive input after recoverable failures.
- Support keyboard, autofill, mobile input modes, and 44×44 px minimum targets.

## Abuse controls

Validate Turnstile on the server, enforce body and attachment limits, use a honeypot and minimum-completion-time signal, normalize email, throttle by several signals, and record a privacy-safe abuse fingerprint. Do not rely on client validation, CAPTCHA alone, or IP address alone.

## Conversion measurement

Track route view, meaningful CTA, form start, step completion, validation error category, successful submission, and reference screen. Never send names, email addresses, phone numbers, messages, part numbers, or budget details to analytics.

## Response expectation

Use honest wording such as “We’ll review your requirements and reply by email.” Publish a timeframe only after the owner can reliably meet it.
