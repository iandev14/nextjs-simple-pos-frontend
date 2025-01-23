const CartLayout = ({ children }) => {
  return (
    <div>
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Your Shopping Cart</h1>
        {children}
      </div>
    </div>
  );
};

export default CartLayout;
