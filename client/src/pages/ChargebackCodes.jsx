import { useState } from 'react';
import Card from '../components/Card';

export default function ChargebackCodes() {
  const [query, setQuery] = useState('');
  return (
    <Card>
      <input
        type="text"
        placeholder="Search code"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full"
      />
      <div className="mt-4">
        <p className="font-medium">Code 4837 - Visa</p>
        <p className="text-sm">No cardholder authorization</p>
      </div>
    </Card>
  );
}
