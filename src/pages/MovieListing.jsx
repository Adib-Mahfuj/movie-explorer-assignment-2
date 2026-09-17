import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import SearchBar from "../components/SearchBar.jsx";
import MovieCard from "../components/MovieCard.jsx";
import MovieModal from "../components/MovieModal.jsx";
import { getAllShows, searchShows } from "../api/tvmaze.js";

export default function MovieListing() {
  const [allShows, setAllShows] = useState([]);
  const [visibleShows, setVisibleShows] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedShow, setSelectedShow] = useState(null);

  // Initial load of the full catalog.
  useEffect(() => {
    let cancelled = false;

    setLoading(true);
    getAllShows()
      .then((data) => {
        if (cancelled) return;
        setAllShows(data);
        setVisibleShows(data);
        setError(null);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // Debounced search whenever the query changes.
  useEffect(() => {
    if (!query.trim()) {
      setVisibleShows(allShows);
      setError(null);
      return;
    }

    let cancelled = false;
    setLoading(true);

    const timeoutId = setTimeout(() => {
      searchShows(query)
        .then((results) => {
          if (cancelled) return;
          setVisibleShows(results);
          setError(null);
        })
        .catch((err) => {
          if (!cancelled) setError(err.message);
        })
        .finally(() => {
          if (!cancelled) setLoading(false);
        });
    }, 350);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
    // allShows intentionally excluded: search hits the API directly.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 sm:px-8">
        <div className="mb-8 max-w-xl">
          <SearchBar value={query} onChange={setQuery} />
        </div>

        {loading && (
          <p className="py-16 text-center text-bone-500">Loading movies…</p>
        )}

        {!loading && error && (
          <p className="py-16 text-center text-flame-500">
            Couldn't load movies: {error}
          </p>
        )}

        {!loading && !error && visibleShows.length === 0 && (
          <p className="py-16 text-center text-bone-500">
            No movies match "{query}". Try a different title.
          </p>
        )}

        {!loading && !error && visibleShows.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleShows.map((show) => (
              <MovieCard
                key={show.id}
                show={show}
                onSeeDetails={setSelectedShow}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />

      {selectedShow && (
        <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
      )}
    </div>
  );
}
