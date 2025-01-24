import { useState } from "react";

const CheckoutForm = ({ totalAmount, onCheckout }) => {
  const [name, setName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && paymentMethod) {
      onCheckout({ name, paymentMethod });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-6 rounded shadow-md border max-w-lg mx-auto mt-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800">Checkout</h2>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mt-1 p-3 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
          required
        />
      </div>
      <div>
        <label
          htmlFor="paymentMethod"
          className="block text-sm font-medium text-gray-700"
        >
          Payment Method
        </label>
        <select
          id="paymentMethod"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full mt-1 p-3 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
          required
        >
          <option value="">Select Payment Method</option>
          <option value="cash">Cash</option>
          <option value="card">Card</option>
        </select>
      </div>
      <div className="text-lg text-gray-800">
        <p>
          Total Amount: <span className="font-bold">${totalAmount}</span>
        </p>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
      >
        Complete Order
      </button>
    </form>
  );
};

export default CheckoutForm;
