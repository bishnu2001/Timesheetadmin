import React, { useState } from "react";

const Customer = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSave = () => {
    // Here you can handle saving the form data
    console.log("Supplier data:", {
      name,
      address,
      phoneNumber,
      email,
    });
  };

  const handleReset = () => {
    // Reset all form fields
    setName("");
    setAddress("");
    setPhoneNumber("");
    setEmail("");
  };

  return (
    <div className="ml-80">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Customer Information
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Customer Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-400 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="address" className="block mb-1">
            Customer Address:
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border border-gray-400 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block mb-1">
            Customer Phone Number:
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border border-gray-400 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            Customer Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

export default Customer;
