export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium text-gray-900">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <p className="text-sm text-gray-500">Current Balance</p>
          <p className="mt-2 text-2xl font-semibold">$12,480</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <p className="text-sm text-gray-500">Payments this month</p>
          <p className="mt-2 text-2xl font-semibold">$98,000</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <p className="text-sm text-gray-500">New Customers</p>
          <p className="mt-2 text-2xl font-semibold">24</p>
        </div>
      </div>
    </div>
  );
}
