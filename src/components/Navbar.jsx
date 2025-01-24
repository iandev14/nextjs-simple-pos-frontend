"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import useCart from "@/hooks/useCart";

const Navbar = () => {
  const { cart } = useCart();
  const [cartCount, setCartCount] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false); // Track hydration
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const count = cart.reduce(
      (total, item) => total + (item.weight || item.quantity),
      0
    );
    setCartCount(count);
    setIsHydrated(true); // Mark as hydrated
  }, [cart]);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <h1 className="text-2xl font-bold">
          <Link href="/">Grocery POS</Link>
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6 items-center">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/products" className="hover:underline">
            Products
          </Link>
          <Link href="/cart" className="hover:underline flex items-center">
            Cart
            {isHydrated && cartCount > 0 && (
              <span className="ml-1 bg-red-500 text-sm rounded-full px-2">
                {cartCount}
              </span>
            )}
          </Link>
          <Link href="/checkout" className="hover:underline">
            Checkout
          </Link>
          <Link href="/admin" className="hover:underline">
            Admin Dashboard
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white text-2xl focus:outline-none"
        >
          &#9776;
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white text-black p-6 z-50 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } w-80 rounded-l-xl`}
      >
        <button
          onClick={toggleMenu}
          className="text-black text-3xl absolute top-5 right-6"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <div className="space-y-4">
          <Link href="/" className="block hover:underline" onClick={toggleMenu}>
            Home
          </Link>
          <Link
            href="/products"
            className="block hover:underline"
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            href="/cart"
            className="hover:underline flex items-center"
            onClick={toggleMenu}
          >
            Cart
            {isHydrated && cartCount > 0 && (
              <span className="ml-2 bg-red-500 text-sm rounded-full px-2">
                {cartCount}
              </span>
            )}
          </Link>
          <Link
            href="/checkout"
            className="block hover:underline"
            onClick={toggleMenu}
          >
            Checkout
          </Link>
          <Link
            href="/admin"
            className="block hover:underline"
            onClick={toggleMenu}
          >
            Admin Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
