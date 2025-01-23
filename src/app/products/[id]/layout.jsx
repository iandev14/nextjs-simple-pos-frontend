const ProductLayout = ({ children }) => {
  return (
    <div>
      <div className="p-6 max-w-7xl mx-auto">
        <div className="text-lg mb-6">{children}</div>
      </div>
    </div>
  );
};

export default ProductLayout;
