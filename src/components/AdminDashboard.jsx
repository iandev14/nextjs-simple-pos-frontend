import Link from "next/link";

const AdminDashboard = ({ productList, onUpdateStock }) => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Management */}
        <div className="bg-white p-6 border rounded shadow">
          <h3 className="text-xl font-semibold text-gray-800">
            Product Management
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Add, edit, or remove products and manage inventory levels.
          </p>
          <Link
            href="/admin/products"
            className="text-blue-600 hover:underline font-medium"
          >
            Go to Product Management &rarr;
          </Link>
        </div>

        {/* Order Management */}
        <div className="bg-white p-6 border rounded shadow">
          <h3 className="text-xl font-semibold text-gray-800">
            Order Management
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            View and manage customer orders and transactions.
          </p>
          <Link
            href="/admin/orders"
            className="text-blue-600 hover:underline font-medium"
          >
            Go to Order Management &rarr;
          </Link>
        </div>

        {/* Inventory Summary */}
        <div className="bg-white p-6 border rounded shadow">
          <h3 className="text-xl font-semibold text-gray-800">
            Inventory Overview
          </h3>
          <ul className="mt-4 space-y-2">
            {productList.slice(0, 5).map((product) => (
              <li key={product.id} className="text-gray-700">
                <span className="font-semibold">{product.name}</span> -{" "}
                {product.quantityInStock} {product.unit || "pcs"} in stock
              </li>
            ))}
          </ul>
          <Link
            href="/admin/products"
            className="mt-4 block text-blue-600 hover:underline font-medium"
          >
            View All Products &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
