"use client"; // Mark as a client-side component

import { useState, useEffect } from "react";
import Link from "next/link";
import useCart from "@/hooks/useCart";

const Navbar = () => {
  const { cart } = useCart();
  const [cartCount, setCartCount] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false); // Track hydration

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsMenuOpen(false);
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(count);
    setIsHydrated(true); // Mark as hydrated after cart updates
  }, [cart]);

  return (
    <nav className="bg-pink-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* POS System on the left */}
        <h1 className="text-2xl font-bold">POS System</h1>

        {/* Hamburger Menu Button (visible only on small screens) */}
        <div className={`lg:hidden ${isMenuOpen ? "hidden" : ""}`}>
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            &#9776;
          </button>
        </div>

        {/* Links Container (visible on large screens only) */}
        <div className="hidden lg:flex space-x-8 flex-grow justify-center">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/products" className="hover:underline">
            Products
          </Link>
          <Link href="/cart" className="hover:underline">
            Cart
            {isHydrated && cartCount > 0 && (
              <span className="ml-1 bg-red-500 text-white text-sm rounded-full px-2">
                {cartCount}
              </span>
            )}
          </Link>
          <Link href="/checkout" className="hover:underline">
            Checkout
          </Link>
          <Link href="#" className="hover:underline">
            Login
          </Link>
        </div>

        {/* Sign Up Button */}
        <div className="hidden lg:flex space-x-4">
          <Link
            href="#"
            className="bg-white text-black px-6 py-2 rounded-full transition duration-300 hover:text-blue-500"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white p-6 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } rounded-l-3xl text-black`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="text-black text-3xl absolute top-5 right-6"
        >
          &times;
        </button>

        <h1 className="text-2xl font-bold text-black mb-4 pb-4">POS System</h1>

        <div className="border-t-2 border-gray-300 my-4 w-full" />

        <div className="flex flex-col space-y-6 items-start">
          <Link href="/" className="hover:underline text-black">
            Home
          </Link>
          <Link href="/products" className="hover:underline text-black">
            Products
          </Link>
          <Link href="/cart" className="hover:underline text-black">
            Cart
            {isHydrated && cartCount > 0 && (
              <span className="ml-2 bg-red-500 text-white text-sm rounded-full px-2">
                {cartCount}
              </span>
            )}
          </Link>
          <Link href="/checkout" className="hover:underline text-black">
            Checkout
          </Link>
          <Link href="#" className="hover:underline text-black">
            Login
          </Link>

          <div className="border-t-2 border-gray-300 my-4 w-full" />

          <div className="mt-8 flex justify-center w-full">
            <Link
              href="#"
              className="bg-white text-black border-2 border-black px-6 py-2 rounded-full w-full text-center hover:bg-gray-100 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
