# Portfolio (Static) — Muhammad Safiyan Roslan

Static build of my portfolio, deployed to **GitHub Pages**. This is the deployable-anywhere twin of my [Laravel version](https://github.com/ian9598/myPortfolio).

**Live:** https://ian9598.github.io/portfolio/

## Why two versions

| | Laravel version | This version |
|---|---|---|
| Stack | Laravel 12 + Blade | Astro 7 |
| Hosting | Needs PHP hosting | Any static host — GitHub Pages, Netlify, Cloudflare Pages |
| Contact form | Server-side validation + email | Opens your mail client with the message pre-filled |
| Content | `config/portfolio.php` | `src/data/portfolio.ts` |

## Stack

- **Astro 7** — static site output, zero client framework
- **Tailwind CSS v4** via the Vite plugin
- Vanilla JS for the mobile menu, scroll reveal and navbar state

## Local development

Requires **Node 22.23.4+** (see `.nvmrc`; `nvm use` picks it up).

```bash
npm install
npm run dev      # http://localhost:4321/portfolio/
npm run build    # static output in dist/
npm run preview  # serve the production build
```

Note the `/portfolio/` path: `base` in `astro.config.mjs` is set to `/portfolio`
because GitHub Pages serves this as a *project site*. If you fork this for a
user site (`username.github.io`), set `base` to `/`.

## Updating content

Everything lives in [`src/data/portfolio.ts`](src/data/portfolio.ts):

- `personal` — name, title, tagline, summary, location, email, LinkedIn
- `skills` / `languages`
- `experiences` — roles with nested highlight sections
- `projects` — cards with features and tags
- `education` / `certifications`

Replace the downloadable resume at
`public/resume/Muhammad-Safiyan-Roslan-Resume.pdf`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages. No manual step needed beyond enabling
Pages with **Source: GitHub Actions** in the repository settings.
