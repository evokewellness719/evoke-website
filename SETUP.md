# EVOKE Wellness — Setup Guide

## Before you start: Install Node.js

1. Go to https://nodejs.org
2. Download the **LTS version** (big green button)
3. Run the installer with default settings
4. Restart your terminal / Claude Code

## Running the site locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Things to update before launch

- [ ] **Shop URL** — in `src/app/shop/page.tsx`, replace `https://your-shop-link.com` with your real shop link
- [ ] **Email** — confirm `hello@evokewellness.net` is correct (Navbar, Footer, Contact page)
- [ ] **Instagram URL** — update in `src/components/Navbar.tsx` and `src/components/Footer.tsx`
- [ ] **Facebook URL** — update in `src/components/Footer.tsx`
- [ ] **Contact form** — wire up to an email service (recommended: Resend.com or Formspree.io)
- [ ] **Your photo / headshot** — add to the About page

## Deploying to Vercel (free)

1. Push this folder to GitHub
2. Go to https://vercel.com and sign in with GitHub
3. Click "Add New Project" and select this repo
4. Click Deploy — done!
5. Add your custom domain `evokewellness.net` in Vercel's domain settings

## Folder structure

```
src/
  app/
    page.tsx          ← Home page
    about/page.tsx    ← About page
    shop/page.tsx     ← Shop / Apothecary
    blog/page.tsx     ← Blog / Journal
    faq/page.tsx      ← FAQs
    contact/page.tsx  ← Contact form
    layout.tsx        ← Site-wide layout (Navbar + Footer)
    globals.css       ← Global styles + fonts
  components/
    Navbar.tsx        ← Navigation header
    Footer.tsx        ← Site footer
```
