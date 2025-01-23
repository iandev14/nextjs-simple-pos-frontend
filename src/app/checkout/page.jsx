"use client";

export default function Checkout() {
  const handleCheckout = () => {
    alert("Checkout complete!");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <button
        onClick={handleCheckout}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Complete Checkout
      </button>
    </div>
  );
}
