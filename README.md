# Purple Martin Watchers

[![Deploy to GitHub Pages](https://github.com/lifeissad21/purple-martin-monitoring-app/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/lifeissad21/purple-martin-monitoring-app/actions/workflows/deploy-pages.yml)
[![MIT License](https://img.shields.io/badge/license-MIT-17352d.svg)](LICENSE)

A polished, privacy-friendly field journal for tracking Purple Martin colonies,
nest checks, seasonal activity, and site maintenance. This project completes
and modernizes the original Purple Martins Monitoring App prototype.

**[Open the live app](https://lifeissad21.github.io/purple-martin-monitoring-app/dashboard/)**
 · [Source code](https://github.com/lifeissad21/purple-martin-monitoring-app)
 · [Report an issue](https://github.com/lifeissad21/purple-martin-monitoring-app/issues)

## What it does

Purple Martin Watchers gives volunteer landlords and conservation teams one
place to record and review a breeding season:

- Track multiple colonies, locations, housing capacity, occupancy, and status.
- Log arrivals, routine visits, nest checks, fledging events, and maintenance.
- Record adult, egg, nestling, and fledgling counts with weather and field notes.
- Review activity in a chronological journal and monthly calendar.
- Compare occupancy and current nest stages across sites.
- Export observation records as CSV for archival or further analysis.
- Configure observer details, season timing, units, and reminder preferences.
- Use a responsive interface designed for desktop and field use.

The app includes realistic sample data so every workflow can be explored
immediately. Data changes persist in the current browser through `localStorage`;
no account or backend is required.

## Privacy and data storage

Monitoring records are stored only in the browser under the
`purple-martin-watchers-data-v1` key. They are not transmitted to this
repository, GitHub Pages, or a third-party database. Clearing site data removes
the records. Use **Reports → Export CSV** to keep a portable copy.

The sign-in screen also supports optional Google authentication through
Firebase. Authentication is independent of the local monitoring dataset and is
not required for the hosted demo.

## Technology

- [Next.js](https://nextjs.org/) App Router with static export
- [React](https://react.dev/) and TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide](https://lucide.dev/) icons
- Optional [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Bun](https://bun.sh/) for dependency management and scripts
- GitHub Actions and GitHub Pages for continuous deployment

## Local development

Requirements: [Bun](https://bun.sh/docs/installation) 1.3 or newer.

```bash
git clone https://github.com/lifeissad21/purple-martin-monitoring-app.git
cd purple-martin-monitoring-app
bun install
bun run dev
```

Open the URL printed by Next.js. Development mode opens the dashboard directly;
the sign-in experience remains available at `/login`.

### Quality checks

```bash
bun run lint
bun run build
```

The production build writes the static site to `out/`.

## Optional Firebase sign-in

1. Copy `.env.example` to `.env.local`.
2. Add the `NEXT_PUBLIC_FIREBASE_*` values from a Firebase web app.
3. Enable Google in **Firebase Console → Authentication → Sign-in method**.
4. Add local and deployed domains to Firebase's authorized domains.

Without those variables, the app automatically offers local mode.

## Deployment

Every push to `main` runs [the Pages workflow](.github/workflows/deploy-pages.yml),
builds a repository-prefixed static export, and publishes it to GitHub Pages.
No secrets are required for the default local-storage version.

## Conservation resources

- [Purple Martin Conservation Association](https://www.purplemartin.org/)
- [PMCA Scout-Arrival Study](https://www.purplemartin.org/research/8/scout-arrival-study/)
- [Cornell Lab: Purple Martin species account](https://www.allaboutbirds.org/guide/Purple_Martin/overview)
- [eBird](https://ebird.org/home) for broader bird observation reporting

This community project is not affiliated with or endorsed by those organizations.

## Contributing

Bug reports and focused improvements are welcome through
[GitHub Issues](https://github.com/lifeissad21/purple-martin-monitoring-app/issues).
Please run lint and the production build before opening a pull request.

## License

Released under the [MIT License](LICENSE).
