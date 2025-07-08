import { useEffect, useState } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function MccLookup() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [debounced, setDebounced] = useState('');

  const onSearchSubmit = (e) => {
  const handleSearch = (e) => {

    if (e) e.preventDefault();
    setDebounced(query.trim());
  };

  useEffect(() => {
    const id = setTimeout(() => setDebounced(query.trim()), 300);
    return () => clearTimeout(id);
  }, [query]);

  useEffect(() => {
    if (!debounced) {
      setResults([]);
      return;
    }
    let cancelled = false;
    const search = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/api/mcc?q=${encodeURIComponent(debounced)}`
        );
        const data = await response.json();
        const res = await fetch(`${API_BASE_URL}/api/mcc?q=${encodeURIComponent(debounced)}`);
        const res = await fetch(`${API_URL}/api/mcc?q=${encodeURIComponent(debounced)}`);
        const data = await res.json();

        if (!cancelled) setResults(data);
      } catch (err) {
        console.error('Search failed', err);
      }
    };
    search();
    return () => {
      cancelled = true;
    };
  }, [debounced]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <form onSubmit={onSearchSubmit} className="flex space-x-2">

  const handleSearch = async (e) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;
    try {
      const res = await fetch(`${API_URL}/api/mcc?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error('Search failed', err);
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
        {debounced && results.length === 0 && (
          <p className="text-sm text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
}
