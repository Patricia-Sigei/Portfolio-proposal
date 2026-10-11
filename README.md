# Portfolio landing page (React + Vite)

## Run it
```bash
npm install
npm run dev
```

## Make it yours
1. Open `src/config/site.js`: your name, WhatsApp number, headline, services, work, clients. Everything is in there.
2. Put your photo at `public/me.jpg` (portrait, 4:5 works best).
3. Put client logos in `public/logos/` and point to them in `src/config/site.js`.
4. Add videos: use a YouTube ID or a file in `public/videos/` (see the comments in `src/config/site.js`).
5. When you have testimonials, set `showTestimonials: true`.

## Publish
```bash
npm run build
```
Upload the `dist` folder to Netlify, Vercel or Cloudflare Pages (free).

## Where things live
```
src/
  config/site.js     All your text, links, videos, clients (edit this)
  sections/          One file per page section (Hero, Offer, Portfolio, Clients, Testimonials, Closing, Footer)
  components/        Reusable pieces (CTA button, Timeline graphic, WorkItem)
  styles/            One CSS file per section/component, plus base.css (colours, fonts)
  utils/links.js     Builds the WhatsApp link
  App.jsx            Order of the sections
  main.jsx           Entry point
public/              me.jpg, logos/, videos/
```
To add a section: create `sections/YourSection.jsx` and `styles/yoursection.css`, then add it to `App.jsx`.
