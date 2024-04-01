import React, { useState } from "react";
import { Link } from "react-router-dom";

const Allvehicle = () => {
  // Sample data for demonstration
  const vehicleinfo = [
    {
      id: 1,
      vehicleNo: "ABC123",
      vehicleType: "Car",
      numOfWheels: 4,
      manufacturer: "Toyota",
      loadingCapacity: "500 kg",
      rcNumber: "RC12345",
      fitnessUpToDate: true,
      vehicleColor: "Red",
      transporterName: "Transporter A",
      transportContact: "123-456-7890",
    },
    // Add more sample data as needed
  ];
  const [vehicles, setVehicles] = useState(vehicleinfo);

  // Function to delete a vehicle by ID
  const handleDelete = (id) => {
    const updatedVehicles = vehicles.filter((vehicle) => vehicle.id !== id);
    setVehicles(updatedVehicles);
  };

  return (
    <div className="ml-80 mt-8">
      <h1 className="text-xl font-bold mb-4 ml-4">All Vehicles</h1>
      <div className="overflow-x-auto">
        <table className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden text-sm">
          <thead className="bg-gray-200 uppercase font-bold">
            <tr>
              <th className="py-2 px-3 text-left text-xs">Vehicle No</th>
              <th className="py-2 px-3 text-left text-xs">Vehicle Type</th>
              <th className="py-2 px-3 text-left text-xs">Number of Wheels</th>
              <th className="py-2 px-3 text-left text-xs">Manufacturer</th>
              <th className="py-2 px-3 text-left text-xs">Loading Capacity</th>
              <th className="py-2 px-3 text-left text-xs">RC Number</th>
              <th className="py-2 px-3 text-left text-xs">
                Fitness Up To Date
              </th>
              <th className="py-2 px-3 text-left text-xs">Vehicle Color</th>
              <th className="py-2 px-3 text-left text-xs">Transporter Name</th>
              <th className="py-2 px-3 text-left text-xs">
                Transporter Contact
              </th>
              <th className="py-2 px-3"></th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id}>
                <td className="py-2 px-3 whitespace-no-wrap">
                  {vehicle.vehicleNo}
                </td>
                <td className="py-2 px-3 whitespace-no-wrap">
                  {vehicle.vehicleType}
                </td>
                <td className="py-2 px-3 whitespace-no-wrap">
                  {vehicle.numOfWheels}
                </td>
                <td className="py-2 px-3 whitespace-no-wrap">
                  {vehicle.manufacturer}
                </td>
                <td className="py-2 px-3 whitespace-no-wrap">
                  {vehicle.loadingCapacity}
                </td>
                <td className="py-2 px-3 whitespace-no-wrap">
                  {vehicle.rcNumber}
                </td>
                <td className="py-2 px-3 whitespace-no-wrap">
                  {vehicle.fitnessUpToDate.toString()}
                </td>
                <td className="py-2 px-3 whitespace-no-wrap">
                  {vehicle.vehicleColor}
                </td>
                <td className="py-2 px-3 whitespace-no-wrap">
                  {vehicle.transporterName}
                </td>
                <td className="py-2 px-3 whitespace-no-wrap">
                  {vehicle.transportContact}
                </td>
                <td className="py-2 px-3 whitespace-no-wrap text-right">
                  <Link
                    to={`/vehicleedit`}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(vehicle.id)}
                    className="text-red-600 hover:text-red-900 ml-2 cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allvehicle;
