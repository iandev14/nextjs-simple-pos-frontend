const AdminProductPage = () => {
  const products = [
    { id: 1, name: "Product 1", price: 20.0 },
    { id: 2, name: "Product 2", price: 30.0 },
    { id: 3, name: "Product 3", price: 40.0 },
  ];

  return (
    <div>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">ID</th>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Price</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-4 py-2 border-b">{product.id}</td>
              <td className="px-4 py-2 border-b">{product.name}</td>
              <td className="px-4 py-2 border-b">${product.price}</td>
              <td className="px-4 py-2 border-b">
                <button className="text-blue-600 hover:underline">Edit</button>{" "}
                |{" "}
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductPage;
