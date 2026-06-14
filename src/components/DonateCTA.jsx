import React from "react";
import {
  FaHeart,
  FaArrowRight
} from "react-icons/fa";

const DonateCTA = () => {
  return (
    <div className="bg-success rounded-4 p-3 p-md-5 mt-4 mt-md-5 text-white overflow-hidden position-relative w-100">

      <div className="row align-items-center g-4">

        {/* Left Content */}
        <div className="col-12 col-lg-8">

          {/* Icon + Heading */}
          <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-3 mb-3">

            {/* Icon */}
            <div
              className="bg-white text-success rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
              style={{
                width: "55px",
                height: "55px"
              }}
            >
              <FaHeart className="fs-4" />
            </div>

            {/* Heading */}
            <h2 className="fw-bold mb-0 fs-3">
              Make a Bigger Impact Today
            </h2>

          </div>

          {/* Text */}
          <p
            className="mb-0 small"
            style={{
              maxWidth: "700px",
              lineHeight: "1.7"
            }}
          >
            Your support can change lives and bring
            hope to children in need. Every donation,
            no matter how small, creates a brighter future.
          </p>

        </div>

        {/* Right Button */}
        <div className="col-12 col-lg-4 text-lg-end">

          <button className="btn btn-light text-success fw-bold px-4 py-2 py-md-3 rounded-3 w-100 w-lg-auto">

            Start Donating
            <FaArrowRight className="ms-2" />

          </button>

        </div>

      </div>

      

    </div>
  );
};

export default DonateCTA;