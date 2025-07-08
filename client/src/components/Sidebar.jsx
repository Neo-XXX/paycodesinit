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
    <aside className="bg-white text-gray-700 p-4 w-60 space-y-2">
      <h2 className="text-xl font-bold mb-4">PayCodes</h2>
      <nav className="space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `block rounded-xl p-3 hover:text-blue-600 ${isActive ? 'text-blue-600 font-medium' : ''}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="pt-4">
        <button className="w-full bg-indigo-600 text-white rounded-xl p-3 mt-4">Upgrade Plan</button>
      </div>
    </aside>
  );
}
