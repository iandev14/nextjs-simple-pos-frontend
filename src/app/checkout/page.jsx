"use client";

import { useState, useEffect } from "react";
import useCart from "@/hooks/useCart";

export default function CheckoutPage() {
  const { cart, getTotalPrice } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false); // Hydration state

  // Set hydrated state to true after component mounts
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleOrder = () => {
    if (formData.name && formData.email && formData.address) {
      alert("Order placed successfully!");
      setOrderPlaced(true);
    } else {
      alert("Please fill out all fields.");
    }
  };

  if (!isHydrated) {
    // Avoid rendering cart content until hydration is complete
    return <p>Loading...</p>;
  }

  if (orderPlaced) {
    return (
      <p className="text-center text-green-500">Thank you for your order!</p>
    );
  }

  return (
    <div className="p-6">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="border-b py-2 flex justify-between">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <h3 className="mt-4 text-lg font-bold">
            Total: ${getTotalPrice().toFixed(2)}
          </h3>

          <h2 className="text-xl font-semibold mt-6">Shipping Details</h2>
          <div className="mt-4 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="border px-4 py-2 w-full rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="border px-4 py-2 w-full rounded"
            />
            <textarea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              className="border px-4 py-2 w-full rounded"
            ></textarea>
          </div>

          <button
            onClick={handleOrder}
            className="bg-green-500 text-white px-6 py-2 rounded mt-4"
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
}
