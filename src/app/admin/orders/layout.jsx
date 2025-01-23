const OrdersLayout = ({ children }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Order Management</h1>
      <div>{children}</div>
    </div>
  );
};

export default OrdersLayout;
