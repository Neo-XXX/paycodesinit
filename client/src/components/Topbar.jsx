export default function Topbar() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-xl p-2 w-full max-w-xs"
        />
      </div>
      <div className="space-x-4 flex items-center">
        <button className="text-gray-500">Alerts</button>
        <div className="w-8 h-8 bg-gray-200 rounded-full" />
      </div>
    </header>
  );
}
