import { useEffect } from "react";
import { stripHtml } from "../api/tvmaze.js";

export default function MovieModal({ show, onClose }) {
  useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!show) return null;

  const backdrop = show.image?.original || show.image?.medium;
  const rating = show.rating?.average ?? "—";
  const premiered = show.premiered || "Unknown";
  const genres = show.genres?.length ? show.genres.join(", ") : "Unknown";
  const network = show.network?.name || show.webChannel?.name || "Unknown";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${show.name} details`}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-y-auto rounded-sm border border-reel-600 bg-reel-900"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-reel-950/80 text-bone-100 transition-colors hover:bg-marquee-500 hover:text-reel-950"
        >
          ✕
        </button>

        <div className="aspect-[16/7] w-full bg-reel-700">
          {backdrop ? (
            <img
              src={backdrop}
              alt={`${show.name} backdrop`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-bone-500">
              No image available
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 p-6 sm:p-8">
          <h2 className="font-display text-4xl tracking-wide text-bone-100">
            {show.name}
          </h2>

          <p className="text-sm text-bone-300">
            ⭐ Rating: {rating} &nbsp;|&nbsp; 📅 Release: {premiered}
          </p>

          <div>
            <h3 className="mb-1 text-xs uppercase tracking-marquee text-marquee-400">
              Overview
            </h3>
            <p className="text-bone-300">
              {stripHtml(show.summary) || "No summary available."}
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-3 border-t border-reel-700 pt-4 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-bone-500">Genre</dt>
              <dd className="text-bone-100">{genres}</dd>
            </div>
            <div>
              <dt className="text-bone-500">Network</dt>
              <dd className="text-bone-100">{network}</dd>
            </div>
          </dl>

          <button
            type="button"
            onClick={onClose}
            className="mt-2 self-start rounded-sm border border-reel-600 px-5 py-2 text-sm text-bone-300 transition-colors hover:border-marquee-500 hover:text-marquee-400"
          >
            ❌ Close
          </button>
        </div>
      </div>
    </div>
  );
}
