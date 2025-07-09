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
    <aside className="sidebar">
      <h2 className="sidebar-logo">PayCodes</h2>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
