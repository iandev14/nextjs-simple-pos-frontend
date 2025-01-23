const AdminDashboardPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Total Products</h3>
          <p>20</p> {/* Placeholder data */}
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Total Orders</h3>
          <p>45</p> {/* Placeholder data */}
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Pending Orders</h3>
          <p>5</p> {/* Placeholder data */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
