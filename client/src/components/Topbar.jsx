export default function Topbar() {
  return (
    <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
      <div className="flex-1 max-w-sm">
        <input
          type="text"
          placeholder="Search"
          className="border rounded-lg p-2 w-full bg-gray-50"
        />
      </div>
      <div className="space-x-4 flex items-center">
        <button className="text-gray-500">Alerts</button>
        <div className="w-8 h-8 bg-gray-200 rounded-full" />
      </div>
    </header>
  );
}
