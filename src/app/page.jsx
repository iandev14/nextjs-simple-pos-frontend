"use client"; // Enables client-side interactivity
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../mockData/products";

export default function Home() {
  const [productList] = useState(products);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
