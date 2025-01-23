const CartItem = ({ item, onRemove, onQuantityChange }) => {
  const handleRemove = () => {
    onRemove(item.id);
  };

  const handleQuantityChange = (e) => {
    onQuantityChange(item.id, e.target.value);
  };

  return (
    <div className="flex items-center justify-between border-b py-2">
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-500">Price: ${item.price}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-12 p-1 border rounded"
        />
        <button onClick={handleRemove} className="text-red-500 hover:underline">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
