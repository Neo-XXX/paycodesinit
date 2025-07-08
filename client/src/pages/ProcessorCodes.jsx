import { useState } from 'react';
import Card from '../components/Card';

export default function ProcessorCodes() {
  const [query, setQuery] = useState('');
  return (
    <Card>
      <input
        type="text"
        placeholder="Search processor response"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full"
      />
      <div className="mt-4">
        <p className="font-medium">Response 05</p>
        <p className="text-sm">Do Not Honor</p>
      </div>
    </Card>
  );
}
