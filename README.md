# Goodfolk

A responsive, buildless local services marketplace concept for JT. Working name only; name and trademark availability have not been researched.

## Product

Customer discovery, 31 services across eight categories, ten illustrative providers, service and budget filtering, rate/review/distance sorting, a schematic neighborhood map, provider profiles, saved people, a three step booking flow, explicit 12% sample fee calculation, estimate requests, booking rescheduling and cancellation, completion, reviews, repeat booking, local conversations, account preferences, a provider profile draft, sample opportunities, weekly availability, and a gross task value calculator.

The Bigger Picture page sets out a proposed city pilot, repeat booking strategy, fee model, and launch questions. These are planning assumptions rather than validated business projections.

## Files

- `dist/index.html` is the app shell.
- `dist/styles.css` contains responsive styling.
- `dist/data.js` contains illustrative service and provider records.
- `dist/app.js` handles hash routes, local state, forms, pricing, dialogs, and interactions.
- `dist/assets/sources.json` lists photographic sources and credits.
- `.openai/hosting.json` declares the private Sites project and static output.

## State and limits

All preview activity lives in the browser under the localStorage key `goodfolk.v1`. It does not sync between devices. No real provider is verified, contacted, booked, or paid. Profiles, jobs, ratings, reviews, rates, distances, availability, and map coordinates are illustrative. Account email and notification preferences do not send email or notifications. Recurring booking choices record a preference for the first visit only. The live product will require secure accounts, a shared backend, verification, real availability, payment and payout providers, policies, and operations.

The UI escapes user entered values before HTML insertion. No payment details are requested. This preview should use sample personal information.

## Verification

JavaScript syntax checks passed. A Node DOM harness exercised 41 flow groups, including all routes, search, combined filters, saved people, booking price updates, wizard back navigation, booking creation, rescheduling the same record, draft messages with escaped HTML, completion and review, repeat booking, estimate cancellation, provider acceptance and release, availability validation, provider draft persistence, earnings illustration, account preferences, and modal dismissal. Assets referenced by providers and categories were checked. A separate source review covered routing, accessibility, pricing state, and HTML interpolation.

Managed browser preview was unavailable in the environment, so responsive visual rendering was not verified in a live browser. Responsive layouts are implemented for desktop, tablet, and mobile.


## GitHub repository

This repository contains the complete Goodfolk source and assets exported from the published Sites version at https://goodfolk-jt.martystowing739.chatgpt.site. Both the original `dist/` directory and a ready-to-serve copy at the repository root are included. Photography, credits, service data, styling, scripts, and fonts are committed with the application.

No dependency installation is needed. Open a local static server at the repository root or `dist/`. With Node.js installed, `npm run build:pages` refreshes the root copy from `dist/`. Edit the source in `dist/` and run that command before committing. All app and asset paths are relative, so the app works under a GitHub Pages repository path.

The root copy and `.nojekyll` are prepared for GitHub Pages. To publish it there, enable Pages in the repository settings with `main` and `/ (root)`. The prepared address is https://master120344.github.io/bestjobapp/. Uploading this source does not change the existing private Sites publication.
