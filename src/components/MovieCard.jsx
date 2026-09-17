export default function MovieCard({ show, onSeeDetails }) {
  const poster = show.image?.medium;
  const year = show.premiered ? show.premiered.slice(0, 4) : "—";
  const rating = show.rating?.average ?? null;

  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-reel-700 bg-reel-800 transition-colors hover:border-marquee-500/70">
      <div className="aspect-[2/3] w-full overflow-hidden bg-reel-700">
        {poster ? (
          <img
            src={poster}
            alt={`${show.name} poster`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-bone-500">
            No poster available
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="line-clamp-2 font-display text-xl leading-tight tracking-wide text-bone-100">
          {show.name}
        </h3>
        <p className="text-sm text-bone-500">
          {rating ? `⭐ ${rating}` : "⭐ —"} &nbsp;•&nbsp; 📅 {year}
        </p>
        <button
          type="button"
          onClick={() => onSeeDetails(show)}
          className="mt-auto rounded-sm border border-marquee-500/60 py-2 text-sm font-medium text-marquee-400 transition-colors hover:bg-marquee-500 hover:text-reel-950"
        >
          See Details
        </button>
      </div>
    </article>
  );
}
