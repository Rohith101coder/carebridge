import React from "react";
import { FaBell, FaBars, FaTimes } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";

const DonorHeader = ({
  isMobile,
  toggleSidebar,
  showSidebar
}) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">

      {/* Mobile Toggler */}
      <div>
        {isMobile && (
          <button
            className="btn btn-light shadow-sm rounded-circle"
            onClick={toggleSidebar}
          >
            {showSidebar ? <FaTimes /> : <FaBars />}
          </button>
        )}
      </div>

      {/* Right Side */}
      <div className="d-flex align-items-center">

        {/* Notification */}
        <div className="position-relative me-4">
          <FaBell
            size={22}
            style={{ cursor: "pointer" }}
          />

          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ fontSize: "10px" }}
          >
            3
          </span>
        </div>

        {/* Profile */}
        <div className="d-flex align-items-center gap-2">
          <img
            src={profileImg}
            alt="profile"
            className="rounded-circle"
            style={{
              width: "40px",
              height: "40px",
              objectFit: "cover"
            }}
          />

          <div>
            <h6 className="mb-0 fw-bold">
              Vamshi
            </h6>

            <small className="text-muted">
              Donor
            </small>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DonorHeader;