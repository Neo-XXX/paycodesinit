import { useState } from 'react';

export default function MccLookup() {
  const [query, setQuery] = useState('');
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <input
        type="text"
        placeholder="Search MCC"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded-xl p-2 w-full"
      />
      <div className="mt-4">
        <p className="font-medium">MCC 5999</p>
        <p className="text-sm">Miscellaneous retail stores</p>
      </div>
    </div>
  );
}
