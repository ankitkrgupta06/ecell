# E-Cell Static Website

A modern React + Vite + Tailwind CSS static website inspired by the structure and editorial feel of the E-Cell IIT Kanpur website.

## Run

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Customize

1. Replace the content in `src/data/siteData.js`.
2. Replace the Unsplash/Pravatar URLs with your ImageKit assets.
3. Update social links in `src/components/Footer.jsx`.
4. Update contact information in `src/pages/Contact.jsx`.
5. Add/remove pages in `src/App.jsx`.

## Suggested production assets

public/
  logo.svg
  favicon.svg
  images/
    hero.webp
    events/
    gallery/
    team/

For your college deployment, keep all image URLs in `siteData.js` or move them to a dedicated `src/data/assets.js`.
