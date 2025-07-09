import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Layout({ children }) {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="content-area">
        <Topbar />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}
