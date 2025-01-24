const ProductsLayout = ({ children }) => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Our Products</h1>
      <div>{children}</div>
    </div>
  );
};

export default ProductsLayout;
