import { useState } from "react";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleAddProduct = () => {
    const newProduct = { id: products.length + 1, name, price, image };
    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
    setImage("");
  };

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-2xl font-semibold">Product Management</h2>
      <div>
        <h3 className="text-lg font-semibold">Add New Product</h3>
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={handleAddProduct}
            className="bg-blue-600 text-white p-2 rounded"
          >
            Add Product
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Product List</h3>
        <ul>
          {products.map((product) => (
            <li key={product.id} className="border p-4 mb-2 rounded shadow">
              <h4 className="text-lg font-semibold">{product.name}</h4>
              <p>Price: ${product.price}</p>
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-cover mt-2"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductManagement;
