const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    if (product.unit === "kg") {
      // Prompt for weight if the product is weight-based
      const weight = parseFloat(
        prompt(`Enter weight (kg) for ${product.name}:`, "1")
      );
      if (!isNaN(weight) && weight > 0) {
        onAddToCart(product, 0, weight);
      }
    } else {
      // Default quantity-based addition
      onAddToCart(product, 1);
    }
  };

  return (
    <div className="border p-4 rounded shadow bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
      <p className="text-sm text-gray-600">Category: {product.category}</p>
      <p className="text-sm text-gray-600">
        Price: ${product.price.toFixed(2)} {product.unit && `/${product.unit}`}
      </p>
      <p className="text-sm text-gray-600">
        Stock: {product.quantityInStock} {product.unit || "pcs"}
      </p>
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
