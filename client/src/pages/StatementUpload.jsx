import { useState } from 'react';
import Card from '../components/Card';

export default function StatementUpload() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  function handleDrop(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setResults({ fees: 120, effectiveRate: 3.1 });
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="space-y-6">
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center bg-white"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {loading ? 'Extracting data…' : 'Drag & drop statement PDF'}
      </div>
      {results && (
        <Card>
          <div className="flex justify-between">
            <h3 className="font-medium">Parsed Results</h3>
            <div>
              Effective Rate:
              <span className="font-bold ml-1 text-red-600">{results.effectiveRate}%</span>
            </div>
          </div>
          <ul className="mt-2 text-sm text-red-600 list-disc list-inside">
            <li>Junk fee detected: $10</li>
          </ul>
        </Card>
      )}
    </div>
  );
}
