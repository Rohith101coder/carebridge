import React from "react";
import {
  FaUtensils,
  FaBook,
  FaTshirt,
  FaHeartbeat,
  FaHome,
  FaBolt,
  FaBookOpen,
  FaEllipsisH
} from "react-icons/fa";

const NeedsFilters = () => {
  const categories = [
    {
      icon: <FaUtensils className="text-success" />,
      name: "Food & Groceries"
    },
    {
      icon: <FaBook className="text-warning" />,
      name: "Education"
    },
    {
      icon: <FaTshirt className="text-primary" />,
      name: "Clothing"
    },
    {
      icon: <FaHeartbeat className="text-danger" />,
      name: "Health & Hygiene"
    },
    {
      icon: <FaHome className="text-info" />,
      name: "Shelter & Living"
    },
    {
      icon: <FaBolt className="text-warning" />,
      name: "Utilities"
    },
    {
      icon: <FaBookOpen className="text-primary" />,
      name: "Books & Supplies"
    },
    {
      icon: <FaEllipsisH className="text-secondary" />,
      name: "Other Essentials"
    }
  ];

  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 h-100">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">

        <h4 className="fw-bold mb-0">
          Filters
        </h4>

        <small
          className="text-success fw-semibold"
          style={{ cursor: "pointer" }}
        >
          Reset
        </small>

      </div>

      <hr />

      {/* Categories */}
      <div className="mb-4">

        <h6 className="fw-bold mb-3">
          Categories
        </h6>

        {/* All Categories */}
        <div
          className="d-flex align-items-center gap-3 bg-light rounded-3 p-3 mb-2"
          style={{ cursor: "pointer" }}
        >
          <input
            type="checkbox"
            checked
            readOnly
            className="form-check-input"
          />

          <span>All Categories</span>
        </div>

        {/* Category List */}
        {categories.map((item, index) => (
          <div
            key={index}
            className="d-flex align-items-center gap-3 p-2 rounded-3 mb-1"
            style={{ cursor: "pointer" }}
          >
            <span className="fs-6">
              {item.icon}
            </span>

            <span className="small">
              {item.name}
            </span>
          </div>
        ))}

      </div>

      <hr />

      {/* Urgency */}
      <div>

        <h6 className="fw-bold mb-3">
          Urgency
        </h6>

        <div className="mb-3 d-flex align-items-center gap-2">
          <input
            type="checkbox"
            className="form-check-input"
          />

          <span className="text-danger">●</span>

          <small>High Priority</small>
        </div>

        <div className="mb-3 d-flex align-items-center gap-2">
          <input
            type="checkbox"
            className="form-check-input"
          />

          <span className="text-warning">●</span>

          <small>Medium Priority</small>
        </div>

        <div className="d-flex align-items-center gap-2">
          <input
            type="checkbox"
            className="form-check-input"
          />

          <span className="text-success">●</span>

          <small>Low Priority</small>
        </div>

      </div>

    </div>
  );
};

export default NeedsFilters;