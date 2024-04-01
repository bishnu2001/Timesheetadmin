import React, { useState, useEffect } from "react";
import UserEdit from "../Useredit/UserEdit";

const RegisterUser = () => {
  const [formData, setFormData] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Store form data in local storage
    console.log("Form data stored:", formData);
  };
  return (
    <div className="flex justify-center bg-slate-200 h-3/4">
      <form
        className="rounded px-4 mt-5 pt-1 pb-1 mb-4 grid grid-cols-2 gap-1 ml-80 w-full"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-1"
            htmlFor="userId"
          >
            Empolyee ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userId"
            type="text"
            placeholder="Enter User ID"
            value={formData.userId}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-1"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-1"
            htmlFor="mobileNumber"
          >
            Mobile Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="mobileNumber"
            type="tel"
            placeholder="Enter Mobile Number"
            value={formData.mobileNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter Email Address"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-1"
            htmlFor="role"
          >
            Role
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="role"
            value={formData.role}
            onChange={handleInputChange}
          >
            <option value="Admin">Admin</option>
            <option value="User">Gate User</option>
            <option value="Guest">Weighbridge Operator</option>
            <option value="Guest">Quality User</option>
            <option value="Guest">Management</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-1"
            htmlFor="dob"
          >
            Date of Birth
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="dob"
            type="date"
            value={formData.dob}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4 col-span-2">
          <label
            className="block text-gray-700 text-sm font-semibold mb-1"
            htmlFor="responsibility"
          >
            Responsibility
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="responsibility"
            placeholder="Enter Responsibility"
            rows="3"
            value={formData.responsibility}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="flex justify-end col-span-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            type="submit"
          >
            Save
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterUser;
