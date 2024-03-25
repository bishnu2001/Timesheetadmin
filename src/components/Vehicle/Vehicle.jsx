import React, { useState } from "react";

const VehicleForm = () => {
  const [vehicleNo, setVehicleNo] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [numOfWheels, setNumOfWheels] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [loadingCapacity, setLoadingCapacity] = useState("");
  const [rcNumber, setRcNumber] = useState("");
  const [fitnessUpToDate, setFitnessUpToDate] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [transporterName, setTransporterName] = useState("");
  const [transportContact, setTransportContact] = useState("");

  const handleSave = () => {
    // Here you can handle saving the form data
    console.log("Form data:", {
      vehicleNo,
      vehicleType,
      numOfWheels,
      manufacturer,
      loadingCapacity,
      rcNumber,
      fitnessUpToDate,
      vehicleColor,
      transporterName,
      transportContact,
    });
  };

  const handleReset = () => {
    // Reset all form fields
    setVehicleNo("");
    setVehicleType("");
    setNumOfWheels("");
    setManufacturer("");
    setLoadingCapacity("");
    setRcNumber("");
    setFitnessUpToDate("");
    setVehicleColor("");
    setTransporterName("");
    setTransportContact("");
  };

  return (
    <div className="max-w-2xl ml-96 p-1 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Vehicle Registration
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="vehicleNo" className="block mb-1">
            Vehicle No:
          </label>
          <input
            type="text"
            id="vehicleNo"
            value={vehicleNo}
            onChange={(e) => setVehicleNo(e.target.value)}
            className="border border-gray-400 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="vehicleType" className="block mb-1">
            Vehicle Type:
          </label>
          <select
            id="vehicleType"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="border border-gray-400 rounded-md px-4 py-2 w-full"
          >
            <option value="">Select</option>
            <option value="dumper">Dumper</option>
            <option value="lorry">Lorry</option>
          </select>
        </div>
        <div>
          <label htmlFor="numOfWheels" className="block mb-1">
            Number of Wheels:
          </label>
          <input
            type="number"
            id="numOfWheels"
            value={numOfWheels}
            onChange={(e) => setNumOfWheels(e.target.value)}
            className="border border-gray-400 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="manufacturer" className="block mb-1">
            Manufacturer:
          </label>
          <input
            type="text"
            id="manufacturer"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
            className="border border-gray-400 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="loadingCapacity" className="block mb-1">
            Loading Capacity:
          </label>
          <input
            type="text"
            id="loadingCapacity"
            value={loadingCapacity}
            onChange={(e) => setLoadingCapacity(e.target.value)}
            className="border border-gray-400 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="rcNumber" className="block mb-1">
            Vehicle RC Number:
          </label>
          <input
            type="text"
            id="rcNumber"
            value={rcNumber}
            onChange={(e) => setRcNumber(e.target.value)}
            className="border border-gray-400 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="fitnessUpToDate" className="block mb-1">
            Fitness Up To Date:
          </label>
          <input
            type="date"
            id="fitnessUpToDate"
            value={fitnessUpToDate}
            onChange={(e) => setFitnessUpToDate(e.target.value)}
            className="border border-gray-400 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="vehicleColor" className="block mb-1">
            Vehicle Color:
          </label>
          <input
            type="text"
            id="vehicleColor"
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
            className="border border-gray-400 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="transporterName" className="block mb-1">
            Transporter Name:
          </label>
          <input
            type="text"
            id="transporterName"
            value={transporterName}
            onChange={(e) => setTransporterName(e.target.value)}
            className="border border-gray-400 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="transportContact" className="block mb-1">
            Transporter Contact:
          </label>
          <input
            type="text"
            id="transportContact"
            value={transportContact}
            onChange={(e) => setTransportContact(e.target.value)}
            className="border border-gray-400 rounded-md px-4 py-2 w-full"
          />
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Save
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default VehicleForm;
