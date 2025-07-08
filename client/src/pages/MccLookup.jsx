import { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function MccLookup() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

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
      </div>
    </div>
  );
}
