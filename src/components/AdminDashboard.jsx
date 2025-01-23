import Link from "next/link";

const AdminDashboard = () => {
  return (
    <div className="space-y-6 p-6">
      <h2 className="text-3xl font-semibold">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 border rounded shadow">
          <h3 className="text-lg font-semibold">Product Management</h3>
          <p className="text-gray-600">Manage products in the store</p>
          <Link
            href="/admin/products"
            className="text-blue-600 hover:underline"
          >
            Go to Product Management
          </Link>
        </div>
        <div className="bg-white p-4 border rounded shadow">
          <h3 className="text-lg font-semibold">Order Management</h3>
          <p className="text-gray-600">View and manage customer orders</p>
          <Link href="/admin/orders" className="text-blue-600 hover:underline">
            Go to Order Management
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
