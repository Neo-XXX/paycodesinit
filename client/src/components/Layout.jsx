import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#343541] font-sans text-gray-100">
      <Sidebar />
      <Topbar />
      <main className="pt-20 pl-60 p-6 max-w-3xl mx-auto space-y-6">{children}</main>
    </div>
  );
}
