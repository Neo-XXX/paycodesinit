export default function Topbar() {
  return (
    <header className="fixed top-0 left-20 right-0 h-12 bg-white border-b shadow-sm flex items-center justify-end px-6 z-10">
      <button className="text-gray-500 mr-4" aria-label="Notifications">
        🔔
      </button>
      <div className="w-8 h-8 bg-gray-200 rounded-full" />
    </header>
  );
}
