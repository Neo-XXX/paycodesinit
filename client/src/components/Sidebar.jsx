import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Dashboard' },
  { to: '/calculator', label: 'Fee Calculator' },
  { to: '/statement', label: 'Statement Analyzer' },
  { to: '/codes', label: 'MCC + Code Lookup' },
  { to: '/reports', label: 'Saved Reports' },
];

export default function Sidebar() {
  return (
    <aside className="bg-white border-r border-gray-200 text-gray-800 p-6 w-64 space-y-4">
      <h2 className="text-xl font-bold mb-4">PayCodes</h2>
      <nav className="space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `block rounded-lg px-3 py-2 hover:bg-gray-50 ${isActive ? 'text-indigo-600 font-medium' : 'text-gray-600'}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="pt-4">
        <button className="w-full bg-indigo-600 text-white rounded-lg p-3 mt-4">Upgrade Plan</button>
      </div>
    </aside>
  );
}
