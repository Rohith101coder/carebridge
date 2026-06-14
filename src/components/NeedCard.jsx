import React from "react";

const NeedCard = ({
  image,
  title,
  place,
  needed,
  amount,
  target,
  progress,
  priority
}) => {
  return (
    <div
      className="card border-0 shadow-sm rounded-4 h-100 p-2 p-md-3 overflow-hidden"
      style={{
        transition: "0.3s",
        cursor: "pointer"
      }}
    >

      {/* Priority Badge */}
      <div className="mb-2">

        <span
          className={`badge px-2 px-md-3 py-2 small fw-semibold ${
            priority === "High"
              ? "bg-danger-subtle text-danger"
              : priority === "Medium"
              ? "bg-warning-subtle text-warning"
              : "bg-success-subtle text-success"
          }`}
        >
          {priority} Priority
        </span>

      </div>

      {/* Image */}
      <div className="text-center mb-3">

        <img
          src={image}
          alt={title}
          className="img-fluid"
          style={{
            height: "100px",
            objectFit: "contain"
          }}
        />

      </div>

      {/* Content */}
      <div className="flex-grow-1">

        <h6 className="fw-bold mb-1">
          {title}
        </h6>

        <p className="text-muted small mb-1">
          {place}
        </p>

        <p className="small mb-3">
          {needed}
        </p>

      </div>

      {/* Progress */}
      <div
        className="progress mb-2"
        style={{
          height: "6px"
        }}
      >
        <div
          className="progress-bar bg-success"
          style={{
            width: `${progress}%`
          }}
        ></div>
      </div>

      {/* Amount */}
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-1 small mb-3">

        <span className="text-muted">
          ₹ {amount.toLocaleString()} of ₹ {target.toLocaleString()}
        </span>

        <span className="fw-bold text-success">
          {progress}%
        </span>

      </div>

      {/* Button */}
      <button className="btn btn-success btn-sm w-100 rounded-3">

        Donate Now →

      </button>

    </div>
  );
};

export default NeedCard;