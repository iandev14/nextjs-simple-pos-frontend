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
  const [priceRange, setPriceRange] = useState([0, 50]);

  const filteredProducts = productList.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
  );

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`Added ${product.name} to cart!`);
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      {/* Search and Filter */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded mr-4"
        />
        <div className="flex items-center">
          <span className="mr-2">Price:</span>
          <input
            type="number"
            placeholder="Min"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
            className="border px-2 py-1 rounded mr-2"
          />
          <input
            type="number"
            placeholder="Max"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="border px-2 py-1 rounded"
          />
        </div>
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
