import { useState } from 'react';

export default function ProcessorCodes() {
  const [query, setQuery] = useState('');
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <input
        type="text"
        placeholder="Search processor response"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded-xl p-2 w-full"
      />
      <div className="mt-4">
        <p className="font-medium">Response 05</p>
        <p className="text-sm">Do Not Honor</p>
      </div>
    </div>
  );
}
