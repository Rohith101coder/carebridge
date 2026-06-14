import React from "react";
import logo from "../assets/logo1.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-white pt-4 pb-2"
      style={{
        background: "linear-gradient(to right, #0b3d2e, #145a32)"
      }}
    >
      <div className="container">

        <div className="row g-4">

          {/* Logo Section */}
          <div className="col-md-3">
            <div className="d-flex align-items-center gap-2 mb-3">
              <img
                src={logo}
                alt="logo"
                width="40"
              />
              <div>
                <h5 className="fw-bold mb-0">
                  CareBridge
                </h5>
                <small>
                  Bridging Hearts, Building Futures
                </small>
              </div>
            </div>

            <p
              className="small text-light"
              style={{ maxWidth: "220px" }}
            >
              A platform that connects kind hearts
              with real needs to build a better future
              for children.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2">
            <h6 className="fw-bold mb-3">
              Quick Links
            </h6>

            <ul className="list-unstyled small">
              <li>Home</li>
              <li>About Us</li>
              <li>How It Works</li>
              <li>Orphanages</li>
            </ul>
          </div>

          {/* Needs */}
          <div className="col-md-2">
            <h6 className="fw-bold mb-3">
              Needs
            </h6>

            <ul className="list-unstyled small">
              <li>Needs</li>
              <li>Events</li>
              <li>Contact Us</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* For Orphanages */}
          <div className="col-md-2">
            <h6 className="fw-bold mb-3">
              For Orphanages
            </h6>

            <ul className="list-unstyled small">
              <li>Register</li>
              <li>Post Needs</li>
              <li>Manage Donations</li>
              <li>Resources</li>
            </ul>
          </div>

          {/* For Donors */}
          <div className="col-md-2">
            <h6 className="fw-bold mb-3">
              For Donors
            </h6>

            <ul className="list-unstyled small">
              <li>Browse Needs</li>
              <li>My Donations</li>
              <li>My Bookings</li>
              <li>Profile</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-1">
            <h6 className="fw-bold mb-3">
              Contact
            </h6>

            <p className="small mb-1">
              support@carebridge.org
            </p>

            <p className="small mb-2">
              +91 98765 43210
            </p>

            <div className="d-flex gap-2">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>

        </div>

        <hr className="border-light my-3" />

        <div className="d-flex justify-content-between small">
          <span>
            © 2026 CareBridge. All rights reserved.
          </span>

          <div className="d-flex gap-3">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;