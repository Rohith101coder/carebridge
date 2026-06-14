import React from "react";

import {
  FaUtensils,
  FaBook,
  FaTshirt,
  FaBed
} from "react-icons/fa";

const OrphanageNeeds = () => {

  const needs = [
    {
      icon: <FaUtensils />,
      title: "Food Supplies",
      needed: "Rice, vegetables, grocery kits",
      amount: "₹ 12,000"
    },

    {
      icon: <FaBook />,
      title: "Education Support",
      needed: "Books, bags, school kits",
      amount: "₹ 8,500"
    },

    {
      icon: <FaTshirt />,
      title: "Clothing",
      needed: "School uniforms and clothes",
      amount: "₹ 6,000"
    },

    {
      icon: <FaBed />,
      title: "Beds & Blankets",
      needed: "Bedsheets and blankets",
      amount: "₹ 5,000"
    }
  ];

  return (
    <div className="container pb-5">

      {/* Heading */}
      <div className="mb-4">

        <h2 className="fw-bold">
          Current Needs
        </h2>

        <p className="text-muted">
          Support the most urgent requirements
          of this orphanage.
        </p>

      </div>

      {/* Needs Grid */}
      <div className="row g-4">

        {needs.map((item, index) => (
          <div
            className="col-12 col-sm-6 col-lg-3"
            key={index}
          >

            <div className="card border-0 shadow-sm rounded-4 h-100 p-4 text-center">

              {/* Icon */}
              <div
                className="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{
                  width: "70px",
                  height: "70px"
                }}
              >
                <span className="fs-3">
                  {item.icon}
                </span>
              </div>

              {/* Title */}
              <h5 className="fw-bold mb-2">
                {item.title}
              </h5>

              {/* Description */}
              <p className="text-muted small mb-3">
                {item.needed}
              </p>

              {/* Amount */}
              <h4 className="fw-bold text-success mb-4">
                {item.amount}
              </h4>

              {/* Button */}
              <button className="btn btn-success w-100 rounded-3">

                Donate

              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default OrphanageNeeds;