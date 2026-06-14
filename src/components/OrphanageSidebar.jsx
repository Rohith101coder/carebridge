import React from "react";
import logo from "../assets/logo.png";
import {
  FaTachometerAlt,
  FaBox,
  FaGift,
  FaCalendarAlt,
  FaChild,
  FaEnvelope,
  FaUser,
  FaSignOutAlt
} from "react-icons/fa";

const OrphanageSidebar = () => {
  const menuItems = [
    {
      icon: <FaTachometerAlt />,
      name: "Dashboard"
    },
    {
      icon: <FaBox />,
      name: "Needs Management"
    },
    {
      icon: <FaGift />,
      name: "Donation Requests"
    },
    {
      icon: <FaCalendarAlt />,
      name: "Visit Bookings"
    },
    {
      icon: <FaChild />,
      name: "Children"
    },
    {
      icon: <FaEnvelope />,
      name: "Messages"
    },
    {
      icon: <FaUser />,
      name: "Profile"
    },
    {
      icon: <FaSignOutAlt />,
      name: "Logout"
    }
  ];

  return (
    <div
      className="bg-white shadow-sm p-3"
      style={{
        width: "250px",
        height: "100vh",
        overflowY: "auto"
      }}
    >
      <div className="d-flex align-items-center gap-2 mb-4">
        <img
          src={logo}
          alt="logo"
          width="45"
        />

        <h4 className="fw-bold mb-0">
          CareBridge
        </h4>
      </div>

      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`d-flex align-items-center gap-3 p-3 rounded mb-2 ${
            index === 0
              ? "bg-success text-white"
              : ""
          }`}
        >
          {item.icon}
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default OrphanageSidebar;