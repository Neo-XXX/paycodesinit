import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Layout({ children }) {
  return (
    <div>
      <Sidebar />
      <Topbar />
      <main className="main-content">{children}</main>
    </div>
  );
}
