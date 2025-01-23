import { useState } from "react";

// Helper function to get saved cart from localStorage (if available)
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
  const saveCartToLocalStorage = (newCart) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  // Add product to cart
  const addToCart = (product) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (productIndex >= 0) {
      // If product is already in cart, increase quantity
      updatedCart[productIndex].quantity += 1;
    } else {
      // If product isn't in cart, add it with quantity 1
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  // Update product quantity in cart
  const updateQuantity = (productId, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: parseInt(quantity) } : item
    );
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  // Get total price of items in the cart
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
  };
};

export default useCart;
