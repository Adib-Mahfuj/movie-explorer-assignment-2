export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-bone-500"
      >
        🔍
      </span>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a movie..."
        aria-label="Search for a movie by title"
        className="w-full rounded-sm border border-reel-600 bg-reel-800 py-3 pl-11 pr-4 text-bone-100 placeholder:text-bone-500 focus:border-marquee-500"
      />
    </div>
  );
}
