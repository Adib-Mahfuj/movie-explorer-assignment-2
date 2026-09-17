import { Link } from "react-router-dom";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden border-b border-reel-700/80">
      <div className="sprockets h-1 w-full" aria-hidden="true" />

      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(227,178,60,0.14), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <span className="mb-4 text-sm text-bone-500">Now screening online</span>
        <h1 className="font-display text-6xl leading-none tracking-marquee text-bone-100 sm:text-8xl">
          Discover Movies
        </h1>
        <p className="mt-6 max-w-md text-balance text-base text-bone-300 sm:text-lg">
          Search thousands of titles, check ratings before you commit two
          hours of your evening, and keep a shortlist of what to watch next.
        </p>
        <Link
          to="/movies"
          className="mt-10 rounded-sm bg-marquee-500 px-8 py-3 font-display text-xl tracking-marquee text-reel-950 transition-transform hover:-translate-y-0.5 hover:bg-marquee-400"
        >
          Explore Now
        </Link>
      </div>

      <div className="sprockets h-1 w-full" aria-hidden="true" />
    </section>
  );
}
