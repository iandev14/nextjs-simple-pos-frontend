import { useState } from "react";

const ProductManagement = ({ products, onUpdateStock }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantityInStock, setQuantityInStock] = useState("");
  const [unit, setUnit] = useState("");
  const [image, setImage] = useState("");

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name,
      price: parseFloat(price),
      category,
      quantityInStock: parseInt(quantityInStock, 10),
      unit,
      image,
    };
    onUpdateStock(newProduct);
    setName("");
    setPrice("");
    setCategory("");
    setQuantityInStock("");
    setUnit("");
    setImage("");
  };

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-2xl font-semibold">Product Management</h2>
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
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Quantity in Stock"
          value={quantityInStock}
          onChange={(e) => setQuantityInStock(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Unit (e.g., kg, pcs)"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
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
      <div>
        <h3 className="text-lg font-semibold">Product List</h3>
        <ul>
          {products.map((product) => (
            <li key={product.id} className="border p-4 mb-2 rounded shadow">
              <h4 className="text-lg font-semibold">{product.name}</h4>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>Category: {product.category}</p>
              <p>
                Stock: {product.quantityInStock} {product.unit || "pcs"}
              </p>
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
