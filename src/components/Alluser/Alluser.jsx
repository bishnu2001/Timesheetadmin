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
    <div className="ml-80">
      <h1 className="text-lg font-bold mb-2">User List</h1>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="divide-gray-200 w-full mr-9">
          <thead>
            <tr>
              <th className="px-3 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Username
              </th>
              <th className="px-3 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mobile Number
              </th>
              <th className="px-3 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-3 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-3 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                DOB
              </th>
              <th className="px-3 py-2 bg-gray-50"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-3 py-2 whitespace-no-wrap text-xl">
                  {user.username}
                </td>
                <td className="px-3 py-2 whitespace-no-wrap text-xl">
                  {user.mobileNumber}
                </td>
                <td className="px-3 py-2 whitespace-no-wrap text-xl">
                  {user.email}
                </td>
                <td className="px-3 py-2 whitespace-no-wrap text-xl">
                  {user.role}
                </td>
                <td className="px-3 py-2 whitespace-no-wrap text-x">
                  {user.dob}
                </td>
                <td className="px-3 py-2 whitespace-no-wrap text-right text-xl">
                  <Link
                    to={`/user`}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
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

export default Alluser;
