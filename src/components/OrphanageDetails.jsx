import React from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaMapMarkerAlt,
  FaUsers,
  FaHandHoldingHeart,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

import orphanageImg from "../assets/orphanage1.jpg";

const OrphanageDetails = () => {

  const { id } = useParams();

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <div className="container py-4 py-md-5">

        <div className="row g-4">

          {/* Left Image */}
          <div className="col-12 col-lg-6">

            <img
              src={orphanageImg}
              alt="orphanage"
              className="img-fluid rounded-4 shadow-sm w-100"
              style={{
                height: "100%",
                objectFit: "cover",
                maxHeight: "500px"
              }}
            />

          </div>

          {/* Right Content */}
          <div className="col-12 col-lg-6">

            {/* Badge */}
            <span className="badge bg-success-subtle text-success px-3 py-2 mb-3">
              Verified Orphanage
            </span>

            {/* Title */}
            <h1 className="fw-bold mb-3">
              Hope Children Home
            </h1>

            {/* Location */}
            <div className="d-flex align-items-center gap-2 text-muted mb-3">

              <FaMapMarkerAlt />

              <span>
                Bangalore, Karnataka
              </span>

            </div>

            {/* Description */}
            <p
              className="text-muted"
              style={{
                lineHeight: "1.8"
              }}
            >
              Hope Children Home provides shelter,
              food, education, healthcare, and
              emotional support for underprivileged
              children. Your contribution helps
              create a brighter future for every child.
            </p>

            {/* Stats */}
            <div className="row g-3 my-4">

              <div className="col-6">

                <div className="border rounded-4 p-3 text-center">

                  <FaUsers className="text-success fs-3 mb-2" />

                  <h4 className="fw-bold mb-0">
                    32
                  </h4>

                  <small className="text-muted">
                    Children
                  </small>

                </div>

              </div>

              <div className="col-6">

                <div className="border rounded-4 p-3 text-center">

                  <FaHandHoldingHeart className="text-success fs-3 mb-2" />

                  <h4 className="fw-bold mb-0">
                    7
                  </h4>

                  <small className="text-muted">
                    Active Needs
                  </small>

                </div>

              </div>

            </div>

            {/* Contact */}
            <div className="border rounded-4 p-4 mb-4">

              <h5 className="fw-bold mb-3">
                Contact Information
              </h5>

              <div className="d-flex align-items-center gap-3 mb-3">

                <FaPhoneAlt className="text-success" />

                <span>
                  +91 98765 43210
                </span>

              </div>

              <div className="d-flex align-items-center gap-3">

                <FaEnvelope className="text-success" />

                <span>
                  hopehome@gmail.com
                </span>

              </div>

            </div>

            {/* Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3">

              <button className="btn btn-success px-4 py-3 w-100">

                Donate Now

              </button>

              <button className="btn btn-outline-success px-4 py-3 w-100">

                Visit Orphanage

              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default OrphanageDetails;