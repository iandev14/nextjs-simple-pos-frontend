const CartItem = ({ item, onRemove, onUpdate }) => {
  const handleQuantityChange = (e) => {
    const value = parseFloat(e.target.value);
    if (item.unit === "kg") {
      // Update weight for weight-based items
      onUpdate(item.id, null, value);
    } else {
      // Update quantity for quantity-based items
      onUpdate(item.id, value);
    }
  };

  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
          <p className="text-sm text-gray-600">Price: ${item.price}</p>
          <p className="text-sm text-gray-600">
            Subtotal: $
            {(item.weight
              ? item.price * item.weight
              : item.price * item.quantity
            ).toFixed(2)}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="number"
          min="0.1"
          step="0.1"
          value={item.unit === "kg" ? item.weight : item.quantity}
          onChange={handleQuantityChange}
          className="w-16 p-1 border rounded text-center"
        />
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
