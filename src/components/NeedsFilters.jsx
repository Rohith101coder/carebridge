import React from "react";
import {
  FaUtensils,
  FaBook,
  FaTshirt,
  FaHeartbeat,
  FaHome,
  FaBookOpen,
  FaEllipsisH,
} from "react-icons/fa";

const NeedsFilters = ({ filters, setFilters }) => {
  const categories = [
    {
      label: "Food",
      value: "FOOD",
      icon: <FaUtensils className="text-success" />,
    },
    {
      label: "Education",
      value: "EDUCATION",
      icon: <FaBook className="text-warning" />,
    },
    {
      label: "Clothes",
      value: "CLOTHES",
      icon: <FaTshirt className="text-primary" />,
    },
    {
      label: "Medical",
      value: "MEDICAL",
      icon: <FaHeartbeat className="text-danger" />,
    },
    {
      label: "Daily Needs",
      value: "DAILY_NEEDS",
      icon: <FaHome className="text-info" />,
    },
    {
      label: "Books",
      value: "BOOKS",
      icon: <FaBookOpen className="text-primary" />,
    },
    {
      label: "Other",
      value: "OTHER",
      icon: <FaEllipsisH className="text-secondary" />,
    },
  ];

  const toggleCategory = (category) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  const togglePriority = (priority) => {
    setFilters((prev) => ({
      ...prev,
      priorities: prev.priorities.includes(priority)
        ? prev.priorities.filter((p) => p !== priority)
        : [...prev.priorities, priority],
    }));
  };

  const resetFilters = () => {
    setFilters({
      categories: [],
      priorities: [],
    });
  };

  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold mb-0">Filters</h4>

        <small
          className="text-success fw-semibold"
          style={{ cursor: "pointer" }}
          onClick={resetFilters}
        >
          Reset
        </small>
      </div>

      <hr />

      {/* Categories */}
      <div className="mb-4">
        <h6 className="fw-bold mb-3">Categories</h6>

        {/* All Categories */}
        <div
          className="d-flex align-items-center gap-3 bg-light rounded-3 p-3 mb-2"
          style={{ cursor: "pointer" }}
          onClick={() =>
            setFilters((prev) => ({
              ...prev,
              categories: [],
            }))
          }
        >
          <input
            type="checkbox"
            checked={filters.categories.length === 0}
            readOnly
            className="form-check-input"
          />

          <span>All Categories</span>
        </div>

        {/* Category List */}
        {categories.map((item) => (
          <div
            key={item.value}
            className="d-flex align-items-center gap-3 p-2 rounded-3 mb-1"
            style={{ cursor: "pointer" }}
            onClick={() => toggleCategory(item.value)}
          >
            <input
              type="checkbox"
              checked={filters.categories.includes(item.value)}
              readOnly
              className="form-check-input"
            />

            <span className="fs-6">{item.icon}</span>

            <span className="small">{item.label}</span>
          </div>
        ))}
      </div>

      <hr />

      {/* Priority */}
      <div>
        <h6 className="fw-bold mb-3">Urgency</h6>

        <div
          className="mb-3 d-flex align-items-center gap-2"
          style={{ cursor: "pointer" }}
          onClick={() => togglePriority("HIGH")}
        >
          <input
            type="checkbox"
            checked={filters.priorities.includes("HIGH")}
            readOnly
            className="form-check-input"
          />

          <span className="text-danger">●</span>

          <small>High Priority</small>
        </div>

        <div
          className="mb-3 d-flex align-items-center gap-2"
          style={{ cursor: "pointer" }}
          onClick={() => togglePriority("MEDIUM")}
        >
          <input
            type="checkbox"
            checked={filters.priorities.includes("MEDIUM")}
            readOnly
            className="form-check-input"
          />

          <span className="text-warning">●</span>

          <small>Medium Priority</small>
        </div>

        <div
          className="d-flex align-items-center gap-2"
          style={{ cursor: "pointer" }}
          onClick={() => togglePriority("LOW")}
        >
          <input
            type="checkbox"
            checked={filters.priorities.includes("LOW")}
            readOnly
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
