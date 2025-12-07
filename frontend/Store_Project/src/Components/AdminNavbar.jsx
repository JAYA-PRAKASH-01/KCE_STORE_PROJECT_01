// src/components/AdminNavbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("admintoken");
    localStorage.removeItem("adminname");
    navigate("/");
  };

  return (
    <nav className="admin-navbar">
      <div className="brand">PrintStore Admin</div>
      <div className="nav-links">
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/orders">Orders</Link>
        <Link to="/admin/students">Students</Link>
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}
