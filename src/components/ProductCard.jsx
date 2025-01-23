const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-600">Price: ${product.price}</p>
      <button
        className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
