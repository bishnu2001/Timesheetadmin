import React from "react";

const Dashboard = () => {
  // Dummy data for total users and total vehicle entry (replace with actual data)
  const totalUsers = 100;
  const totalVehicleEntry = 50;

  return (
    <div className="ml-80">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Total Users</h3>
          <p className="text-xl">{totalUsers}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Total Vehicle Entry</h3>
          <p className="text-xl">{totalVehicleEntry}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
