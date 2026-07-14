import React from "react";
import {getCategoryIcon} from "../utils/categoryIcons";

const ActiveNeeds = ({ needs }) => {
  // Helper function to get category icon/image
  // const getCategoryIcon = (category) => {
  //   // You can replace these placeholder URLs with your actual asset imports or icon mapping logic
  //   const icons = {
  //     Education: "https://img.icons8.com/color/48/graduation-cap.png",
  //     Sports: "https://img.icons8.com/color/48/football2--v1.png",
  //     Medical: "https://img.icons8.com/color/48/plus--v1.png",
  //     Food: "https://img.icons8.com/color/48/ingredients.png",
  //     Default: "https://img.icons8.com/color/48/box.png",
  //   };
  //   return icons[category] || icons.Default;
  // };

  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
      {/* Heading */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold mb-0">Active Needs</h5>
        <small
          className="text-success fw-semibold"
          style={{ cursor: "pointer" }}
        >
          View all
        </small>
      </div>

      {/* Needs List */}
      {needs.map((item, index) => (
        <div
          key={index}
          className="d-flex justify-content-between align-items-center border rounded-3 p-3 mb-3 bg-light bg-opacity-10 hover-shadow transition"
        >
          {/* Left: Icon + Info */}
          <div className="d-flex align-items-center gap-3">
            <img
              src={getCategoryIcon(item.category)}
              alt={item.category || "Category"}
              width="40"
              height="40"
              className="rounded-circle bg-white p-1 border shadow-sm object-fit-contain"
            />
            <div>
              <h6 className="fw-bold mb-1">{item.itemName}</h6>
              <div className="d-flex gap-2 align-items-center">
                <small className="text-muted">
                  Needed:{" "}
                  <span className="fw-medium text-dark">
                    {item.requiredQuantity}
                  </span>
                </small>
                {item.category && (
                  <>
                    <span className="text-muted">•</span>
                    <small className="text-secondary">{item.category}</small>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right: Priority Badge */}
          <span
            className={`badge px-3 py-2 rounded-pill ${
              item.priority === "High Priority"
                ? "bg-danger"
                : item.priority === "Medium"
                  ? "bg-warning text-dark"
                  : "bg-success"
            }`}
          >
            {item.priority}
          </span>
        </div>
      ))}

      {/* Add Button */}
      <button className="btn btn-success w-100 mt-2 py-2 fw-semibold rounded-3 shadow-sm">
        + Add New Need
      </button>
    </div>
  );
};

export default ActiveNeeds;
