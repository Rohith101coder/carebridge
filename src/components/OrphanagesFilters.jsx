import React from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaBook,
  FaHeartbeat,
  FaUtensils,
  FaHome,
  FaBriefcase
} from "react-icons/fa";

const OrphanagesFilters = () => {
  return (
    <div className="bg-white shadow-sm rounded-4 p-4">

      {/* Top */}
      <div className="d-flex justify-content-between align-items-center mb-4">

        <h4 className="fw-bold mb-0">
          Filters
        </h4>

        <button className="btn btn-link text-success text-decoration-none p-0">

          Reset

        </button>

      </div>

      {/* Search */}
      <div className="position-relative mb-4">

        <FaSearch
          className="position-absolute text-muted"
          style={{
            top: "14px",
            left: "15px"
          }}
        />

        <input
          type="text"
          placeholder="Search orphanage"
          className="form-control ps-5 py-2 rounded-3"
        />

      </div>

      {/* Location */}
      <div className="mb-4">

        <label className="fw-semibold mb-2">
          Location
        </label>

        <select className="form-select rounded-3 py-2">

          <option>
            All Locations
          </option>

          <option>
            Hyderabad
          </option>

          <option>
            Bangalore
          </option>

          <option>
            Chennai
          </option>

        </select>

      </div>

      {/* Children Supported */}
      <div className="mb-4">

        <h6 className="fw-bold mb-3">
          Children Supported
        </h6>

        {[
          "0 - 25",
          "26 - 50",
          "51 - 100",
          "100+"
        ].map((item, index) => (
          <div
            className="form-check mb-2"
            key={index}
          >

            <input
              className="form-check-input"
              type="checkbox"
            />

            <label className="form-check-label">
              {item}
            </label>

          </div>
        ))}

      </div>

      {/* Services */}
      <div className="mb-4">

        <h6 className="fw-bold mb-3">
          Services Offered
        </h6>

        {[
          {
            icon: <FaBook />,
            name: "Education"
          },

          {
            icon: <FaHeartbeat />,
            name: "Healthcare"
          },

          {
            icon: <FaUtensils />,
            name: "Food"
          },

          {
            icon: <FaHome />,
            name: "Shelter"
          },

          {
            icon: <FaBriefcase />,
            name: "Skill Development"
          }
        ].map((item, index) => (
          <div
            className="form-check d-flex align-items-center gap-2 mb-3"
            key={index}
          >

            <input
              className="form-check-input"
              type="checkbox"
            />

            <span className="text-success">
              {item.icon}
            </span>

            <label className="form-check-label">
              {item.name}
            </label>

          </div>
        ))}

      </div>

      {/* Button */}
      <button className="btn btn-outline-success w-100 rounded-3 py-2">

        Clear All Filters

      </button>

    </div>
  );
};

export default OrphanagesFilters;