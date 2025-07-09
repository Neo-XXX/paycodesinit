import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Sidebar />
      <Topbar />
      <main className="pt-16 pl-20 p-8 space-y-6">{children}</main>
    </div>
  );
}
