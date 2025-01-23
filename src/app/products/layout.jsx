const ProductsLayout = ({ children }) => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Optional title or additional elements specific to products */}
      <h1 className="text-3xl font-semibold mb-6">Our Products</h1>
      <div>{children}</div>
    </div>
  );
};

export default ProductsLayout;
