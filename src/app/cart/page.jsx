"use client";

import { useState, useEffect } from "react";
import useCart from "@/hooks/useCart";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();
  const [isHydrated, setIsHydrated] = useState(false);

  // Mark the component as hydrated on the client side
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return <p className="text-center text-gray-500">Loading cart...</p>;
  }

  return (
    <div>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">
          Your cart is empty. Add some products!
        </p>
      ) : (
        <div className="space-y-4">
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li
                key={item.id}
                className="py-4 flex items-center justify-between"
              >
                {/* Product Details */}
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-500">
                      Price: ${item.price.toFixed(2)}{" "}
                      {item.unit && `/${item.unit}`}
                    </p>
                    <p className="text-gray-500">
                      Subtotal: $
                      {item.weight
                        ? (item.price * item.weight).toFixed(2)
                        : (item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Quantity/Weight Controls */}
                <div className="flex items-center space-x-4">
                  {item.unit === "kg" ? (
                    <input
                      type="number"
                      min="0.1"
                      step="0.1"
                      value={item.weight || 0}
                      onChange={(e) =>
                        updateQuantity(
                          item.id,
                          null,
                          parseFloat(e.target.value)
                        )
                      }
                      className="w-20 p-2 border rounded text-center"
                    />
                  ) : (
                    <div className="flex items-center">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="bg-gray-300 px-3 py-1 rounded-l"
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="bg-gray-300 px-3 py-1 rounded-r"
                      >
                        +
                      </button>
                    </div>
                  )}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Total Price */}
          <h2 className="text-2xl font-bold text-gray-800">
            Total: ${getTotalPrice().toFixed(2)}
          </h2>
        </div>
      )}
    </div>
  );
}
