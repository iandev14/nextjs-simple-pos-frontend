import { useRouter } from "next/router";
import { mockProducts } from "../../../mockData/products"; // Assuming you're using mock data for now

const ProductDetailPage = () => {
  const { query } = useRouter();
  const { id } = query;

  // Find the product with the matching ID
  const product = mockProducts.find((p) => p.id === id);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 object-cover rounded-lg"
        />
        <div className="md:w-1/2">
          <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-lg font-semibold mb-4">Price: ${product.price}</p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
