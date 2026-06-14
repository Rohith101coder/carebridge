import React from "react";
import logo from "../assets/logo.png";
import {
  FaTachometerAlt,
  FaSearch,
  FaGift,
  FaCalendarAlt,
  FaHeart,
  FaBell,
  FaEnvelope,
  FaUser,
  FaSignOutAlt
} from "react-icons/fa";

const DonorSidebar = () => {
  const menuItems = [
    {
      icon: <FaTachometerAlt />,
      name: "Dashboard"
    },
    {
      icon: <FaSearch />,
      name: "Explore Needs"
    },
    {
      icon: <FaGift />,
      name: "My Donations"
    },
    {
      icon: <FaCalendarAlt />,
      name: "My Bookings"
    },
    {
      icon: <FaHeart />,
      name: "My Visits"
    },
    {
      icon: <FaBell />,
      name: "Notifications"
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
      {/* Logo */}
      <div className="d-flex align-items-center gap-2 mb-4">
        <img
          src={logo}
          alt="CareBridge Logo"
          width="45"
          height="45"
          className="img-fluid"
        />

        <h4 className="fw-bold mb-0">
          CareBridge
        </h4>
      </div>

      {/* Menu Items */}
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`d-flex align-items-center gap-3 p-3 rounded mb-2 ${
            index === 0
              ? "bg-success text-white"
              : "text-dark"
          }`}
          style={{
            cursor: "pointer",
            transition: "0.3s"
          }}
        >
          <span className="fs-5">
            {item.icon}
          </span>

          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default DonorSidebar;