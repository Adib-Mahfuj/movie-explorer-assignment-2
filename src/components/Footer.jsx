export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-reel-700/80 bg-reel-900">
      <div className="sprockets h-1 w-full" aria-hidden="true" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-display text-lg tracking-marquee text-marquee-400">
          MovieExplorer
        </p>
        <p className="text-sm text-bone-500">
          © {year} MovieExplorer. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm text-bone-500">
          <a
            href="https://github.com/Adib-Mahfuj/movie-explorer-assignment-2.git"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-marquee-400"
          >
            GitHub
          </a>
          <a
            href="https://www.tvmaze.com"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-marquee-400"
          >
            TVMaze
          </a>
        </div>
      </div>
    </footer>
  );
}
