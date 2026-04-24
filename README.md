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
4. Add these environment variables before production use:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `CONTACT_TO_EMAIL`
5. Add your production domain: `fieldandhabitat.com`.
6. Deploy.

## Contact form setup with Resend

The contact form posts to `src/app/api/contact/route.ts`.

Set these in Vercel:

- `RESEND_API_KEY`
  - Your Resend API key.
- `RESEND_FROM_EMAIL`
  - A verified sender such as `Field and Habitat <contact@fieldandhabitat.com>`.
- `CONTACT_TO_EMAIL`
  - Where inquiries should be delivered, for example `editorial@fieldandhabitat.com`.

Notes:

- The `from` address must use a domain you verify in Resend.
- If `CONTACT_TO_EMAIL` is omitted, the site falls back to `editorial@fieldandhabitat.com`.
- After adding the variables in Vercel, redeploy once so the live form can use them.

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
