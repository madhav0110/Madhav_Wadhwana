# Madhav Wadhwana — Applied AI Portfolio

A premium, mobile-first React portfolio for Madhav Wadhwana, positioned as an Applied AI Engineer building intelligent products across AI/ML, secure systems, full-stack development, and clean product interfaces.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, typically `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The build output is generated in `dist/`. The Vite `base` is configured with relative asset paths, so the same build can be hosted on GitHub Pages project URLs such as `https://madhav0110.github.io/Portfolio/` or `https://madhav0110.github.io/Madhav_Wadhwana/`.

## GitHub Pages hosting

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds the site and publishes `dist/` to GitHub Pages.

To host it:

1. Push the repository to GitHub.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to the `main` branch or run the **Deploy portfolio to GitHub Pages** workflow manually.
5. Your site will be available at your repository's Pages URL.

The committed `public/.nojekyll` file keeps GitHub Pages from applying Jekyll processing to the Vite output.

## Structure

```text
src/
  components/      Reusable page sections and animation primitives
  data/            Project and skill content arrays
  styles/          Global theme, Tailwind import, and accessibility styles
  App.tsx          Page composition
  main.tsx         React entry point
```

## Notes

- The animated hero uses lightweight SVG, CSS gradients, and Framer Motion rather than a heavy 3D scene.
- Motion honors `prefers-reduced-motion` and is simplified by CSS for accessibility.
- SEO metadata and JSON-LD Person schema are defined in `index.html`.
- The site includes an in-page resume preview modal with open/download fallbacks.
- Resume preview and download buttons use `public/resume.pdf`; replace that file with the latest resume when ready.
