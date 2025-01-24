"use client";

import { useEffect, useState } from "react";
import useCart from "@/hooks/useCart";
import CheckoutForm from "@/components/CheckoutForm";

export default function CheckoutPage() {
  const { cart, getTotalPrice } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false); // Hydration state

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleCheckout = (formData) => {
    console.log("Order Details:", { formData, cart });
    alert("Order placed successfully!");
    setOrderPlaced(true);
  };

  if (!isHydrated) {
    return <p>Loading...</p>;
  }

  if (orderPlaced) {
    return (
      <div className="p-6 text-center">
        <p className="text-2xl text-green-600 font-semibold">
          Thank you for your order!
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-lg text-gray-600">Your cart is empty.</p>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h1>
          <div className="bg-white p-6 rounded shadow-md border">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Your Cart
            </h2>
            <ul>
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between border-b py-3"
                >
                  <span className="text-gray-700">
                    {item.name} x {item.quantity}
                  </span>
                  <span className="font-semibold text-gray-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <h3 className="mt-4 text-lg font-bold text-gray-800">
              Total: <span>${getTotalPrice().toFixed(2)}</span>
            </h3>
          </div>

          {/* Use CheckoutForm Component */}
          <CheckoutForm
            totalAmount={getTotalPrice().toFixed(2)}
            onCheckout={handleCheckout}
          />
        </>
      )}
    </div>
  );
}
