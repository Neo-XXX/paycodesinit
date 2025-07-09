import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'MCC' },
  { to: '/processor-codes', label: 'Processor' },
  { to: '/chargeback-codes', label: 'Chargebacks' },
  { to: '/statement-analysis', label: 'Statements' },
  { to: '/fee-checker', label: 'Fees' },
  { to: '/settings', label: 'Settings' },
];

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-60 bg-[#202123] border-r border-[#343541] shadow-md flex flex-col p-4 space-y-8 z-20">
      <h2 className="text-xl font-semibold text-gray-100">PayCodes</h2>
      <nav className="flex-1 flex flex-col space-y-1 mt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `rounded px-3 py-2 text-sm hover:bg-[#343541] ${isActive ? 'bg-[#343541] text-white' : 'text-gray-300'}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
