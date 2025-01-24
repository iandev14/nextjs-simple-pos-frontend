"use client";

import { useRouter } from "next/router";
import useProducts from "@/hooks/useProducts";
import useCart from "@/hooks/useCart";
import { toast } from "react-hot-toast";

const ProductDetailPage = () => {
  const { query } = useRouter();
  const { productList } = useProducts();
  const { addToCart } = useCart();
  const { id } = query;

  const product = productList.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="text-red-500">Product not found.</p>;
  }

  const handleAddToCart = () => {
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

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:w-1/2 object-cover rounded-lg"
      />
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          {product.name}
        </h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-lg font-semibold mb-4">
          Price: ${product.price.toFixed(2)}{" "}
          {product.unit && `/${product.unit}`}
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Stock: {product.quantityInStock} {product.unit || "pcs"}
        </p>
        <button
          onClick={handleAddToCart}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
