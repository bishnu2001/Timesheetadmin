import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import RegisterUser from "./components/CreateUser/RegisterUser";
import { Routes, Route } from "react-router-dom";
import Headers from "./pages/Headers";
import Sidebar from "./pages/Sidebar";
import UserEdit from "./components/Useredit/UserEdit";
import Alluser from "./components/Alluser/Alluser";
import Vehicle from "./components/Vehicle/Vehicle";
import Supplier from "./components/Vendor/Supplier";
import Customer from "./components/Vendor/Customer";

function App() {
  return (
    <>
      <Headers />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/user" element={<UserEdit />} />
        <Route path="/alluser" element={<Alluser />} />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/supplier" element={<Supplier />} />
        <Route path="/customer" element={<Customer />} />
      </Routes>
    </>
  );
}

export default App;
