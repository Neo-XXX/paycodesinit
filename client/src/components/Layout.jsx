import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Sidebar />
      <Topbar />
      <main className="pt-12 pl-20 p-6">{children}</main>
    </div>
  );
}
