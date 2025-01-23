const ProductsLayout = ({ children }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Product Management</h1>
      <div>{children}</div>
    </div>
  );
};

export default ProductsLayout;
