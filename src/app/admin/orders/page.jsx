const AdminOrdersPage = () => {
  const orders = [
    { id: 1, customer: "Customer 1", total: 100.0, status: "Pending" },
    { id: 2, customer: "Customer 2", total: 50.0, status: "Completed" },
    { id: 3, customer: "Customer 3", total: 75.0, status: "Pending" },
  ];

  return (
    <div>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">ID</th>
            <th className="px-4 py-2 border-b">Customer</th>
            <th className="px-4 py-2 border-b">Total</th>
            <th className="px-4 py-2 border-b">Status</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="px-4 py-2 border-b">{order.id}</td>
              <td className="px-4 py-2 border-b">{order.customer}</td>
              <td className="px-4 py-2 border-b">${order.total}</td>
              <td className="px-4 py-2 border-b">{order.status}</td>
              <td className="px-4 py-2 border-b">
                <button className="text-blue-600 hover:underline">View</button>{" "}
                |{" "}
                <button className="text-green-600 hover:underline">
                  Mark as Complete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrdersPage;
