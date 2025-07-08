import { useState } from 'react';

export default function FeeCalculator() {
  const [volume, setVolume] = useState('');
  const [ticket, setTicket] = useState('');
  const [rate, setRate] = useState(null);

  function calculate(e) {
    e.preventDefault();
    const vol = parseFloat(volume) || 0;
    const tix = parseFloat(ticket) || 0;
    const fees = vol * 0.029 + tix * 0.1; // placeholder formula
    const eff = vol ? (fees / vol) * 100 : 0;
    setRate(eff.toFixed(2));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <form onSubmit={calculate} className="bg-white p-6 rounded-lg shadow-sm border space-y-4">
        <div>
          <label className="block mb-1">Monthly Volume</label>
          <input
            type="number"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="border rounded-xl p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1">Avg Ticket Size</label>
          <input
            type="number"
            value={ticket}
            onChange={(e) => setTicket(e.target.value)}
            className="border rounded-xl p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-indigo-600 text-white rounded-md px-4 py-2">
          Calculate
        </button>
      </form>
      <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col justify-center items-center">
        {rate !== null ? (
          <>
            <div className="text-lg">
              Effective Rate:{' '}
              <span className={`font-bold ${rate > 3 ? 'text-red-600' : 'text-green-600'}`}>{rate}%</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">You could save 0.47%!</p>
          </>
        ) : (
          <p className="text-gray-500">Enter details to calculate fees</p>
        )}
      </div>
    </div>
  );
}
