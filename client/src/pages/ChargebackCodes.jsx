import { useState } from 'react';

export default function ChargebackCodes() {
  const [query, setQuery] = useState('');
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
      <input
        type="text"
        placeholder="Search code"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full"
      />
      <div>
        <p className="font-medium">Code 4837 - Visa</p>
        <p className="text-sm">No cardholder authorization</p>
      </div>
    </div>
  );
}
