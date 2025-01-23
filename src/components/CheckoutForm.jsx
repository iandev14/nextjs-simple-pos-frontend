import { useState } from "react";

const CheckoutForm = ({ totalAmount, onCheckout }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && address) {
      onCheckout({ name, email, address });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold">Checkout</h2>
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="address" className="block text-sm font-medium">
          Shipping Address
        </label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mt-4 text-lg">
        <p>Total Amount: ${totalAmount}</p>
      </div>
      <button
        type="submit"
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded"
      >
        Complete Order
      </button>
    </form>
  );
};

export default CheckoutForm;
