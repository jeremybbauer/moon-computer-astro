# Moon Computer — Astro + Sveltia CMS

This is the new version of mooncomputer.space: a static site (built with
[Astro](https://astro.build)) with a free content editor
([Sveltia CMS](https://github.com/sveltia/sveltia-cms)) at `/admin` for
adding new posts without touching code.

Everything below is a one-time setup. Once it's done, publishing a new post
is just: open `/admin`, log in, fill out a form, hit publish.

---

## 1. Try it on your computer (optional but recommended)

You'll need [Node.js](https://nodejs.org) installed (get the "LTS" version).

```
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:4321`). This runs the
site locally so you can see changes before they go live. Press Ctrl+C to stop it.

## 2. Add your real images

The sample posts reference images at `public/images/posts/`, e.g.
`public/images/posts/cowboy-dogs.jpg`. Create that folder and drop your real
post images in, named to match (or update the `image:` field in each post's
`.md` file in `src/content/posts/` to point wherever you put them).

Also add your real logo files (the ones you sent me) into `public/` — I've
left the header using a simple gradient circle as a placeholder for now.

## 3. Push this to GitHub

If you don't already have a GitHub account, make one (free) at github.com.

1. Create a new repository (e.g. `moon-computer`) — don't initialize it with
   a README, since this folder already has one.
2. From inside this project folder, run:

```
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/moon-computer.git
git push -u origin main
```

## 4. Deploy to Cloudflare Pages (free hosting)

1. Sign up at [pages.cloudflare.com](https://pages.cloudflare.com) (free).
2. Click "Create a project" → "Connect to Git" → pick the `moon-computer`
   repo you just pushed.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. Cloudflare gives you a free `*.pages.dev` URL immediately.
5. In the project's "Custom domains" tab, add `mooncomputer.space` and follow
   the DNS instructions (you'll update your domain's nameservers or DNS
   records — same kind of step as pointing it at Bluehost originally).

From now on, every time you push to GitHub, Cloudflare automatically
rebuilds and redeploys the site.

## 5. Connect Sveltia CMS so you can post from `/admin`

Sveltia needs permission to write to your GitHub repo on your behalf. This
is the one genuinely fiddly step, and I'd rather walk you through it live
when you get here rather than have you follow static instructions blind —
just tell me when you've finished steps 1–4 and we'll do this together.

Two things worth updating before then, in `public/admin/config.yml`:
- Change `repo: YOUR-GITHUB-USERNAME/moon-computer` to your actual GitHub
  username and repo name.

## What's already built

- `src/content/posts/` — your posts, as plain text files (Markdown with a
  little metadata at the top). I've migrated 10 of your real posts as
  examples, including two linked as a serial ("WHAAAAT…Chill Monsters" 1 & 2).
- `src/pages/index.astro` — the homepage (directory listing + filters)
- `src/pages/files/[slug].astro` — the template every post uses automatically
- `src/pages/system-info.astro` and `contact.astro` — the two other nav pages
- `src/styles/global.css` — the full design system (colors, type, layout)
- `public/admin/` — the Sveltia CMS editor

## Adding the rest of your posts

For each remaining post from the old site, create a new file in
`src/content/posts/` (copy an existing one as a starting point) or, once
Sveltia's connected, just use the `/admin` form instead — no file editing
needed at that point.
