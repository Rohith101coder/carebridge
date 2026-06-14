import React from "react";
import { Link } from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaUsers,
  FaHandHoldingHeart,
  FaCheckCircle
} from "react-icons/fa";

import orphanage1 from "../assets/orphanage1.jpg";
import orphanage2 from "../assets/orphanage2.jpg";
import orphanage3 from "../assets/orphanage3.jpg";
import orphanage4 from "../assets/orphanage4.jpg";
import orphanage5 from "../assets/orphanage5.jpg";
import orphanage6 from "../assets/orphanage6.jpg";

const OrphanagesGallery = () => {

  const orphanages = [
    {
      id: 1,
      image: orphanage1,
      name: "Hope Children Home",
      location: "Bangalore, Karnataka",
      description:
        "Providing shelter, education and care for underprivileged children.",
      children: 32,
      needs: 7
    },

    {
      id: 2,
      image: orphanage2,
      name: "Bright Future Home",
      location: "Pune, Maharashtra",
      description:
        "Empowering children through education and healthcare.",
      children: 45,
      needs: 9
    },

    {
      id: 3,
      image: orphanage3,
      name: "Little Angels Home",
      location: "Mysore, Karnataka",
      description:
        "A nurturing home for children with love and care.",
      children: 28,
      needs: 6
    },

    {
      id: 4,
      image: orphanage4,
      name: "New Hope Foundation",
      location: "Hyderabad, Telangana",
      description:
        "Supporting vulnerable children with shelter and education.",
      children: 60,
      needs: 12
    },

    {
      id: 5,
      image: orphanage5,
      name: "Care & Share Home",
      location: "Coimbatore, Tamil Nadu",
      description:
        "Building brighter futures by meeting basic needs.",
      children: 38,
      needs: 8
    },

    {
      id: 6,
      image: orphanage6,
      name: "Sunshine Orphanage",
      location: "Indore, Madhya Pradesh",
      description:
        "A safe and happy environment for children to learn.",
      children: 25,
      needs: 5
    }
  ];

  return (
    <div className="container-fluid px-0 overflow-hidden">

      {/* Top */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">

        <div>

          <h2 className="fw-bold mb-1">
            All Orphanages
          </h2>

          <p className="text-muted small mb-0">
            Choose an orphanage to learn more and support their needs.
          </p>

        </div>

        {/* Sort */}
        <select
          className="form-select"
          style={{
            width: "220px",
            maxWidth: "100%"
          }}
        >
          <option>
            Sort by: Recently Added
          </option>

          <option>
            Most Supported
          </option>

          <option>
            Most Urgent
          </option>

        </select>

      </div>

      {/* Grid */}
      <div className="row g-3 mx-0">

        {orphanages.map((item) => (
          <div
            className="col-12 col-sm-6 col-lg-4 px-2"
            key={item.id}
          >

            <div className="card border-0 shadow-sm rounded-4 h-100 overflow-hidden">

              {/* Image */}
              <div className="position-relative">

                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid w-100"
                  style={{
                    height: "170px",
                    objectFit: "cover"
                  }}
                />

                {/* Verified */}
                <div
                  className="position-absolute top-0 end-0 bg-white shadow-sm rounded-pill px-3 py-2 m-2 small fw-semibold text-success"
                >

                  <FaCheckCircle className="me-1" />

                  Verified

                </div>

              </div>

              {/* Content */}
              <div className="p-3">

                {/* Title */}
                <h5 className="fw-bold mb-1">
                  {item.name}
                </h5>

                {/* Location */}
                <div className="d-flex align-items-center gap-2 text-muted small mb-3">

                  <FaMapMarkerAlt className="text-success" />

                  <span>{item.location}</span>

                </div>

                {/* Description */}
                <p
                  className="text-muted small mb-3"
                  style={{
                    minHeight: "48px"
                  }}
                >
                  {item.description}
                </p>

                {/* Divider */}
                <hr />

                {/* Stats */}
                <div className="d-flex justify-content-between align-items-center mb-3">

                  {/* Children */}
                  <div className="d-flex align-items-center gap-2">

                    <FaUsers className="text-primary" />

                    <div>

                      <small className="text-muted d-block">
                        Children
                      </small>

                      <span className="fw-bold">
                        {item.children}
                      </span>

                    </div>

                  </div>

                  {/* Needs */}
                  <div className="d-flex align-items-center gap-2">

                    <FaHandHoldingHeart className="text-warning" />

                    <div>

                      <small className="text-muted d-block">
                        Needs
                      </small>

                      <span className="fw-bold">
                        {item.needs}
                      </span>

                    </div>

                  </div>

                  {/* Donate */}
                  <button className="btn btn-light btn-sm text-success fw-semibold rounded-pill">

                    Donate Now ❤

                  </button>

                </div>

                {/* View Details */}
                <Link
                  to={`/orphanage/${item.id}`}
                  className="btn btn-success w-100 rounded-3"
                >

                  View Details →

                </Link>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default OrphanagesGallery;