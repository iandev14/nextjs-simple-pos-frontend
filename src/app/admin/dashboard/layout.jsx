const DashboardLayout = ({ children }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Admin Dashboard</h1>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
