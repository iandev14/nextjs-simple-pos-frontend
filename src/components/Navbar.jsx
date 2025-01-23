import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">POS System</h1>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/cart" className="hover:underline">
            Cart
          </Link>
          <Link href="/checkout" className="hover:underline">
            Checkout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
