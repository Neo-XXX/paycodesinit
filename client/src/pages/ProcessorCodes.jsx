import { useState } from 'react';

export default function ProcessorCodes() {
  const [query, setQuery] = useState('');
  return (
    <div className="bg-[#444654] p-8 rounded-lg shadow-sm border border-[#343541] space-y-4 text-gray-100">
      <input
        type="text"
        placeholder="Search processor response"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-500 rounded-md p-3 w-full bg-transparent"
      />
      <div>
        <p className="font-medium">Response 05</p>
        <p className="text-sm">Do Not Honor</p>
      </div>
    </div>
  );
}
