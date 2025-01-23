"use client";
import { useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([
    { id: 1, name: "Product A", price: 10 },
    { id: 2, name: "Product B", price: 20 },
  ]);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="border-b py-2 flex justify-between">
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <h2 className="mt-4 text-xl font-bold">Total: ${total}</h2>
        </div>
      )}
    </div>
  );
}
