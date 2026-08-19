# Sigurd Dam Portfolio

This is a personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion. It showcases a developer profile, technology stack, projects, and a blog section powered by a WordPress-based API.

## Tech Stack

- Next.js 15
- React 19
- Tailwind CSS
- Framer Motion
- WordPress REST API for portfolio and blog data

## Features

- Modern dark-themed landing page
- About section with developer profile
- Technology area highlights
- Projects showcase cards
- Contact section with email CTA
- Blog page with dynamic article listing and individual post pages

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```bash
src/
├── app/
│   ├── blog/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
├── api/
└── lib/
```

## Notes

- The portfolio data is fetched from the external API at `https://hecamefromsporting.com/wp-json/portfolio/v1`.
- The app is designed as a single-page portfolio with a blog feature integrated through dynamic routes.

## Deployment

This project is compatible with Vercel and can be deployed using the standard Next.js deployment flow.

```bash
npm run build
```
