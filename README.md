# Purple Martin Watchers

A frontend-only colony monitoring app built with Next.js, React, and Tailwind CSS.

This is the completed continuation of the original Purple Martins Monitoring
App. The earlier admin/form prototype remains available in Git history; the
active product now focuses directly on colony and field-observation workflows.

## Run locally

```bash
bun install
bun run dev
```

Open the local URL printed by Next.js. Development mode bypasses the mock login
screen and opens the dashboard. The login design remains available at `/login`.

## Included features

- Season overview with live totals and recent activity
- Colony management, status filtering, and site notes
- Field observations and nest-count logging
- Calendar view of monitoring activity
- Derived occupancy and nest-stage reports
- CSV export
- Observer and notification preferences
- Responsive desktop and mobile navigation
- Browser-local persistence with realistic starter data

All records are stored in the browser under the `purple-martin-watchers-data-v1`
local storage key. Settings includes a **Reset demo data** action.

## Optional Firebase sign-in

The original project used Firebase. Google sign-in remains supported without
making Firebase a requirement for local development:

1. Copy `.env.example` to `.env.local`.
2. Fill in the `NEXT_PUBLIC_FIREBASE_*` values from the Firebase project.
3. Enable Google as an authentication provider in Firebase.

When Firebase is not configured, the sign-in screen enters local mode and all
monitoring data remains in the current browser.

## Checks

```bash
bun run lint
bun run build
```
