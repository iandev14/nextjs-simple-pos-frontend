const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="border p-4 rounded shadow bg-pink-600">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h2 className="text-lg text-center">{product.name}</h2>
    </div>
  );
};

export default ProductCard;
