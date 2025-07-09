import { useState } from 'react';

export default function ProcessorCodes() {
  const [query, setQuery] = useState('');
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
      <input
        type="text"
        placeholder="Search processor response"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full"
      />
      <div>
        <p className="font-medium">Response 05</p>
        <p className="text-sm">Do Not Honor</p>
      </div>
    </div>
  );
}
