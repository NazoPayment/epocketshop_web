# ePocketShop Web

Marketing site for the ePocketShop mobile app, rebuilt with React (JavaScript) and Vite. It reproduces https://epocketshop.online/ and replaces the original jQuery code with React components.

## Requirements

- Node.js 18 or newer (developed on Node 24)
- npm

## Getting started

```bash
# install dependencies
npm install

# start the dev server (http://localhost:5173)
npm run dev
```

## Scripts

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Starts the Vite dev server with hot reload    |
| `npm run build`   | Creates a production build in `dist/`         |
| `npm run preview` | Serves the production build locally           |

## Deploying

Run `npm run build` and upload the contents of `dist/` to any static host.

The site uses client-side routing (`/policy`), so the host must serve `index.html` for unknown paths. On Netlify add a `public/_redirects` file containing `/* /index.html 200`. On Nginx use `try_files $uri /index.html;`.

## Project structure

```
public/                  Favicon
src/
  assets/images/         Logos, app screenshots, store badges, avatars
  components/
    sections/            Hero, Overview, About, Steps, Features, OrderFlow, VideoSection, Faq, Contact, Download
    Navbar.jsx           Fixed navbar, scroll state, section highlighting, mobile menu
    ScrollManager.jsx    Smooth scroll to #sections, scroll reset on page change
    SectionHeader.jsx    Shared section title and divider
    StoreBadges.jsx      Google Play button and App Store "Coming soon" badge
    Footer.jsx
  data/content.js        Page copy, links and config
  pages/                 Home.jsx, Policy.jsx
  styles/main.css        Site styles
  App.jsx, main.jsx      Routes and entry point
```

## Editing content

Most text lives in `src/data/content.js`: about items, features, FAQs, the video URL and the contact email.

Still to fill in:

- The App Store badge in `src/components/StoreBadges.jsx` shows "Coming soon". Replace it with a real link once the iOS app is live.
- The placeholder phone number in `src/components/sections/Contact.jsx`

## Contact form

There is no backend. Submitting the form opens the visitor's mail client with the message addressed to the contact email. To send messages directly, connect a service such as Formspree or EmailJS in `src/components/sections/Contact.jsx`.

## Tech

React, React Router, Vite and Font Awesome 5, with a hand-written stylesheet (no CSS framework).

## Design system

The look follows Astryx design system conventions: neutral surfaces, hairline dividers, small radii, one accent color, and light and dark themes.

All colors, radii and fonts are CSS variables at the top of `src/styles/main.css`.

- **Accent color:** edit `--accent`, `--accent-tint` and `--accent-border`. They are green now; for Astryx blue use `#0064e0` (light) and `#2694fe` (dark).
- **Theme:** it follows the visitor's system setting, and the toggle in the navbar overrides it. The choice is saved in `localStorage`.
- **Font:** Figtree, loaded from Google Fonts in `index.html`.
