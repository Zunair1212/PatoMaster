import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/products">Manage Products</Link></li>
        <li><Link to="/orders">Manage Orders</Link></li>
        <li><Link to="/reservations">Manage Reservations</Link></li>
        <li><Link to="/users">Manage Users</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
