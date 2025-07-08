import { useEffect, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

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
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <form onSubmit={handleSearch} className="flex space-x-2">
        <input
          type="text"
          placeholder="Search MCC"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border rounded-xl p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-xl px-4"
        >
          Search
        </button>
      </form>

      <div className="mt-4 space-y-2">
        {results.map((item) => (
          <div key={item._id} className="border rounded p-2">
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
