import { useState, useEffect } from "react";
import products from "../mockData/products"; // Replace with API endpoint when available

const useProducts = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // Simulate API call
        setTimeout(() => {
          setProductList(products);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError("Failed to load products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products by category
  const filterByCategory = (category) => {
    return productList.filter((product) => product.category === category);
  };

  // Search for products by name
  const searchProducts = (query) => {
    return productList.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  // Update stock levels
  const updateStock = (productId, newStock) => {
    const updatedProducts = productList.map((product) =>
      product.id === productId
        ? { ...product, quantityInStock: newStock }
        : product
    );
    setProductList(updatedProducts);
  };

  return {
    productList,
    loading,
    error,
    filterByCategory,
    searchProducts,
    updateStock,
  };
};

export default useProducts;
