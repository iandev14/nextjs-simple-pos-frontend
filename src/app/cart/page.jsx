"use client";
import { useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([
    { id: 1, name: "Product A", price: 10, quantity: 1 },
    { id: 2, name: "Product B", price: 20, quantity: 2 },
  ]);

  const updateQuantity = (index, delta) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += delta;
    if (updatedCart[index].quantity < 1) updatedCart[index].quantity = 1;
    setCart(updatedCart);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">
          Your cart is empty. Add some products!
        </p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={item.id} className="flex justify-between border-b py-2">
                <div>
                  <span className="font-bold">{item.name}</span> - ${item.price}
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(index, -1)}
                      className="bg-gray-300 px-2 py-1 rounded-l"
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(index, 1)}
                      className="bg-gray-300 px-2 py-1 rounded-r"
                    >
                      +
                    </button>
                  </div>
                </div>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <h2 className="mt-4 text-xl font-bold">Total: ${total.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
}
