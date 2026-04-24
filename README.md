# Field and Habitat

Production-ready Next.js site for `fieldandhabitat.com`.

Stack:

- Next.js 16
- App Router
- TypeScript
- Tailwind CSS 4
- SEO metadata, sitemap, robots, and Open Graph image support

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Import the repo into Vercel.
3. Keep the framework preset as `Next.js`.
4. Add your production domain: `fieldandhabitat.com`.
5. Deploy.

## CMS integration notes

The content layer is intentionally typed and isolated in `src/lib/content.ts`.
Replace the in-memory arrays with CMS fetch utilities from Sanity, Contentful, or another headless CMS.

Recommended future content models:

- `article`
- `author`
- `category`
- `tag`
- `newsletterSettings`
- `siteSettings`

## Main routes

- `/`
- `/articles`
- `/articles/template`
- `/categories`
- `/categories/hunting`
- `/categories/fishing`
- `/categories/gear`
- `/categories/conservation`
- `/categories/cooking`
- `/writers`
- `/about`
- `/contact`
