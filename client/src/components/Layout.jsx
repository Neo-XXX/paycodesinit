import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Sidebar />
      <Topbar />
      <main className="max-w-7xl mx-auto pt-16 pl-16 pr-6 pb-8 space-y-8">{children}</main>
    </div>
  );
}
