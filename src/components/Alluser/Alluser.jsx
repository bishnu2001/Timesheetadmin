import React, { useState } from "react";
import { Link } from "react-router-dom";

const Alluser = () => {
  const TempUserData = [
    {
      id: 1,
      username: "Bishnu Narayan Pradhan",
      mobileNumber: "9348452267",
      email: "Bishnu2001@gmail.com",
      password: "********",
      role: "Admin",
      dob: "1990-01-01",
    },
    {
      id: 2,
      username: "JaneSmith",
      mobileNumber: "9876543210",
      email: "janesmith@example.com",
      password: "********",
      role: "User",
      dob: "1995-05-15",
    },
    {
      id: 3,
      username: "Jane dom",
      mobileNumber: "9876541130",
      email: "janedom@example.com",
      password: "********",
      role: "Gate User",
      dob: "1995-05-15",
    },
  ];
  const [users, setUsers] = useState(TempUserData);

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="container ml-80">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {users.map((user) => (
          <div key={user.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <span className="font-semibold">Username:</span> {user.username}
            </div>
            <div className="mb-4">
              <span className="font-semibold">Mobile Number:</span>{" "}
              {user.mobileNumber}
            </div>
            <div className="mb-4">
              <span className="font-semibold">Email:</span> {user.email}
            </div>
            <div className="mb-4">
              <span className="font-semibold">Password:</span> {user.password}
            </div>
            <div className="mb-4">
              <span className="font-semibold">Role:</span> {user.role}
            </div>
            <div className="mb-4">
              <span className="font-semibold">DOB:</span> {user.dob}
            </div>
            <div className="flex justify-between">
              <Link
                to={`/user`}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(user.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alluser;
