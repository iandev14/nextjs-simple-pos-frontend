"use client";

import { useState, useEffect } from "react";
import useCart from "@/hooks/useCart";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();
  const [isHydrated, setIsHydrated] = useState(false);

  // Mark the component as hydrated on the client side
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Render a loading state while waiting for hydration
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
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between border-b py-2">
                <div>
                  <span className="font-bold">{item.name}</span> - ${item.price}
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-300 px-2 py-1 rounded-l"
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-300 px-2 py-1 rounded-r"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h2 className="mt-4 text-xl font-bold">
            Total: ${getTotalPrice().toFixed(2)}
          </h2>
        </div>
      )}
    </div>
  );
}
