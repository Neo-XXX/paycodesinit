import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'MCC Code Lookup' },
  { to: '/processor-codes', label: 'Processor Response Codes' },
  { to: '/chargeback-codes', label: 'Chargeback Codes' },
  { to: '/statement-analysis', label: 'Statement Analysis' },
  { to: '/fee-checker', label: 'Transaction Fee Checker' },
  { to: '/settings', label: 'Settings' },
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
              `block rounded-lg px-3 py-2 hover:bg-gray-100 ${isActive ? 'text-lightspeed font-medium' : 'text-gray-600'}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
