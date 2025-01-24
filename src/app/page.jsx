"use client";

import { useState } from "react";
import useProducts from "@/hooks/useProducts";
import useCart from "@/hooks/useCart";
import ProductCard from "@/components/ProductCard";
import { toast } from "react-hot-toast";

export default function HomePage() {
  const { productList, loading, error } = useProducts();
  const { addToCart } = useCart();

  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on search term
  const filteredProducts = productList.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product) => {
    // Prompt for weight if the product is weight-based
    if (product.unit === "kg") {
      const weight = parseFloat(
        prompt(`Enter weight (kg) for ${product.name}:`, "1")
      );
      if (!isNaN(weight) && weight > 0) {
        addToCart(product, 0, weight);
        toast.success(`Added ${weight} kg of ${product.name} to cart!`);
      }
    } else {
      addToCart(product, 1);
      toast.success(`Added ${product.name} to cart!`);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div role="status" className="flex flex-col items-center">
          <svg
            aria-hidden="true"
            className="w-16 h-16 text-gray-200 animate-spin fill-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 101"
          >
            <path
              d="M100 50.59C100 78.2 77.6 100.59 50 100.59S0 78.2 0 50.59 22.4 0.59 50 0.59 100 22.98 100 50.59Z"
              fill="currentColor"
            />
            <path
              d="M93.97 39.04c2.43-.63 3.9-3.12 3.05-5.47-1.71-4.73-4.14-9.18-7.19-13.2-3.97-5.23-8.93-9.62-14.59-12.94-5.66-3.33-11.92-5.5-18.43-6.37C51.77.37 46.7.45 41.73 1.28 39.26 1.69 37.81 4.2 38.45 6.62c.64 2.43 3.12 3.9 5.47 3.05 3.8-.56 7.67-.58 11.49-.06 5.32.73 10.45 2.5 15.09 5.2 4.65 2.7 8.71 6.28 12 10.57 2.33 3.07 4.2 6.46 5.58 10.06 1.05 2.34 3.5 3.8 5.92 3.17Z"
              fill="currentFill"
            />
          </svg>
          <p className="text-gray-500 mt-4">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-red-500 font-bold text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Welcome to Grocery POS!
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by product name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-blue-600 px-4 py-3 rounded-full w-full md:w-1/2 lg:w-1/3 text-blue-600 placeholder:text-blue-300 focus:border-blue-600 focus:outline-none"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
