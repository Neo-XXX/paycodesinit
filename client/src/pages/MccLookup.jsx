import { useEffect, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || '';

export default function MccLookup() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Debounce input so we don't fire on every keystroke
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query.trim());
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  // Fetch when the debounced query changes
  useEffect(() => {
    if (!debouncedQuery) {
      setResults([]);
      return;
    }
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/mcc?q=${encodeURIComponent(debouncedQuery)}`
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!cancelled) {
          setResults(data);
        }
      } catch (err) {
        console.error('Search failed', err);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [debouncedQuery]);

  // Handle explicit “Search” button presses too
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setDebouncedQuery(query.trim());
    }
  };

  return (
    <div className="card">
      <form onSubmit={handleSearch} className="flex space-x-3">
        <input
          type="text"
          placeholder="Search MCC"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-500 rounded-md p-3 w-full bg-transparent"
        />
        <button type="submit" className="btn-primary">
          Search
        </button>
      </form>

      <div className="mt-6 space-y-3">
        {results.map((item) => (
          <div key={item._id} className="border border-[#e5e7eb] rounded-md p-3">
            <p className="font-medium">MCC {item.mcc_code}</p>
            <p className="text-sm">{item.category}</p>
          </div>
        ))}

        {debouncedQuery && results.length === 0 && (
          <p className="text-sm text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
}
