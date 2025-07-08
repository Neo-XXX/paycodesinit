import { NavLink } from 'react-router-dom';

function IconSearch() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
}

function IconDocument() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    </svg>
  );
}

function IconCard() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 8.25h19.5M2.25 9h19.5M4.5 14.25h6M4.5 16.5h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z"
      />
    </svg>
  );
}

function IconSettings() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281a1.125 1.125 0 00.865.997l1.217.456a1.125 1.125 0 011.37-.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.758 6.758 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.572 6.572 0 01-.22.128 1.125 1.125 0 00-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941H10.7a1.125 1.125 0 01-1.11-.94l-.213-1.281a1.125 1.125 0 00-.645-.87l-.219-.127a1.125 1.125 0 00-1.076-.124l-1.217.456a1.125 1.125 0 01-1.37-.491L4.85 14.52a1.125 1.125 0 01.26-1.43l1.004-.827c.292-.24.437-.613.43-.992a6.934 6.934 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.073-.044.147-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

const navItems = [
  { to: '/', label: 'MCC', icon: IconSearch },
  { to: '/processor-codes', label: 'Processor', icon: IconDocument },
  { to: '/chargeback-codes', label: 'Chargebacks', icon: IconCard },
  { to: '/statement-analysis', label: 'Statements', icon: IconDocument },
  { to: '/fee-checker', label: 'Fees', icon: IconCard },
  { to: '/settings', label: 'Settings', icon: IconSettings },
];

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-16 bg-white border-r border-gray-200 shadow-sm flex flex-col items-center py-4 space-y-8 z-20">
      <h2 className="text-lg font-semibold">PC</h2>
      <nav className="flex flex-col space-y-6 mt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs px-2 py-2 rounded-md ${isActive ? 'text-indigo-600 font-medium bg-gray-100' : 'text-gray-500 hover:text-indigo-600 hover:bg-gray-50'}`
            }
          >
            <item.icon />
            <span className="mt-1">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
