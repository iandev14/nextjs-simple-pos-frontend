import { useState, useEffect } from "react";
import products from "../mockData/products"; // You can replace this with an API call later

const useProducts = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch products (for now, using mock data)
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // Simulating an API call with a delay
        setTimeout(() => {
          setProductList(products); // Replace with actual API call if needed
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError("Failed to load products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { productList, loading, error };
};

export default useProducts;
