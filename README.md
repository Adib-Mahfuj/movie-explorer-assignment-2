# MovieExplorer

A responsive movie browsing app built with React, Vite, and Tailwind CSS,
using the [TVMaze API](https://www.tvmaze.com/api) for show data.

## Features

- **Home page** — navbar, hero banner with a CTA into the listing page, footer.
- **Movie listing page** — live search (`GET /search/shows?q=`) with the full
  catalog (`GET /shows`) shown by default, responsive card grid.
- **Details modal** — backdrop image, summary, rating, release date, genre,
  and network; closes via the ✕ button, the "Close" button, clicking the
  backdrop, or the Escape key.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  api/tvmaze.js         TVMaze fetch helpers (getAllShows, searchShows)
  components/           Navbar, Footer, HeroBanner, SearchBar, MovieCard, MovieModal
  pages/                Home, MovieListing
  App.jsx               Route definitions (/, /movies)
  main.jsx              App entry point
```
## 👨‍💻 Author

**Adib Mahfuj**

Built with React and Tailwind CSS.