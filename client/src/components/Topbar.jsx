export default function Topbar() {
  return (
    <header className="fixed top-0 left-16 right-0 h-14 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm flex items-center justify-end px-6 space-x-4 z-10">
      <button className="text-gray-500 hover:text-gray-700" aria-label="Notifications">
        🔔
      </button>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gray-200 rounded-full" />
        <span className="text-sm font-medium text-gray-700">Admin</span>
      </div>
    </header>
  );
}
