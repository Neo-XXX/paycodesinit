import { useState } from 'react';

export default function CodeLookup() {
  const [tab, setTab] = useState('mcc');
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <div className="border-b mb-4 flex space-x-4">
        <button
          className={`p-2 ${tab === 'mcc' ? 'border-b-2 border-indigo-600' : ''}`}
          onClick={() => setTab('mcc')}
        >
          MCC Search
        </button>
        <button
          className={`p-2 ${tab === 'chargeback' ? 'border-b-2 border-indigo-600' : ''}`}
          onClick={() => setTab('chargeback')}
        >
          Dispute Reason Codes
        </button>
      </div>
      {tab === 'mcc' ? (
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Search MCC"
            className="border rounded-xl p-2 w-full"
          />
          <div className="mt-4">
            <p className="font-medium">MCC 5999</p>
            <p className="text-sm">Miscellaneous retail stores</p>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Search code"
            className="border rounded-xl p-2 w-full"
          />
          <div className="mt-4">
            <p className="font-medium">Code 4837 - Visa</p>
            <p className="text-sm">No cardholder authorization</p>
          </div>
        </div>
      )}
    </div>
  );
}
