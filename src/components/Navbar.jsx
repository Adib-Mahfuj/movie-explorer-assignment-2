import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-reel-700/80 bg-reel-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-2xl tracking-marquee text-marquee-400"
        >
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-full border border-marquee-500/60 text-sm text-marquee-400"
          >
            ▶
          </span>
          MovieExplorer
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="hidden text-sm text-bone-300 transition-colors hover:text-bone-100 sm:inline"
          >
            Home
          </Link>
          <Link
            to="/movies"
            className="rounded-sm border border-marquee-500/70 px-4 py-2 text-sm font-medium text-marquee-400 transition-colors hover:bg-marquee-500 hover:text-reel-950"
          >
            Movies
          </Link>
        </nav>
      </div>
    </header>
  );
}
