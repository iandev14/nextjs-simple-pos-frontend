import { useState, useEffect } from "react";

// Helper function to get saved cart from localStorage
const getSavedCart = () => {
  if (typeof window !== "undefined") {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  }
  return [];
};

const useCart = () => {
  const [cart, setCart] = useState(getSavedCart);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Add product to cart (supporting weight-based items)
  const addToCart = (product, quantity = 1, weight = null) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (productIndex >= 0) {
      // If product is already in cart, increase quantity or weight
      if (weight) {
        updatedCart[productIndex].weight += weight;
      } else {
        updatedCart[productIndex].quantity += quantity;
      }
    } else {
      // If product isn't in cart, add it
      updatedCart.push({
        ...product,
        quantity,
        ...(weight && { weight }), // Add weight if applicable
      });
    }

    setCart(updatedCart);
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  // Update quantity or weight of a product in the cart
  const updateItem = (productId, newQuantity, newWeight = null) => {
    const updatedCart = cart.map((item) =>
      item.id === productId
        ? {
            ...item,
            quantity: newQuantity,
            ...(newWeight && { weight: newWeight }),
          }
        : item
    );
    setCart(updatedCart);
  };

  // Get total price of items in the cart
  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const itemTotal = item.weight
        ? item.price * item.weight
        : item.price * item.quantity;
      return total + itemTotal;
    }, 0);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateItem,
    getTotalPrice,
  };
};

export default useCart;
