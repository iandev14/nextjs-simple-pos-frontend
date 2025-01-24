"use client";

import { useState } from "react";
import useProducts from "@/hooks/useProducts";
import useCart from "@/hooks/useCart";
import ProductCard from "@/components/ProductCard";
import { toast } from "react-hot-toast";

export default function ProductsPage() {
  const { productList, loading, error } = useProducts();
  const { addToCart } = useCart();

  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100]);

  // Filter products based on search term and price range
  const filteredProducts = productList.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
  );

  const handleAddToCart = (product) => {
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
    return <p className="text-center">Loading products...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div>
      {/* Search and Price Filter */}
      <div className="mb-6">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border px-4 py-2 rounded w-full sm:w-1/2"
          />
          <div className="flex items-center space-x-2">
            <span>Price:</span>
            <input
              type="number"
              min="0"
              placeholder="Min"
              value={priceRange[0]}
              onChange={(e) =>
                setPriceRange([Number(e.target.value), priceRange[1]])
              }
              className="border px-2 py-1 rounded"
            />
            <input
              type="number"
              min="0"
              placeholder="Max"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value)])
              }
              className="border px-2 py-1 rounded"
            />
          </div>
        </div>
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
