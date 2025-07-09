import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Sidebar />
      <Topbar />
      <main className="pt-24 pl-64 p-8 max-w-5xl mx-auto space-y-6">{children}</main>
    </div>
  );
}
