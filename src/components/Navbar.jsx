import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
      <div className="container-fluid">
{/* Logo + Name */}
<Link
  to="/"
  className="navbar-brand d-flex align-items-center gap-2"
>
  <img
    src={logo}
    alt="CareBridge Logo"
    width="50"
    height="50"
    className="img-fluid"
  />
  <div>

  <span className="fw-bold fs-4">
    CareBridge
  </span>
  <p className="text-secondary small m-0">Bridging Hearts, Building Futures</p>
  </div>
</Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">

          {/* Center Links */}
          <ul className="navbar-nav mx-auto gap-3">
            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/">
                How It Works
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/">
                Orphanages
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/about">
                
                Needs
              </Link>
            </li>

            

            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3 mx-5">
            <FaSearch
              style={{
                cursor: "pointer",
                fontSize: "18px"
              }}
            />

            <button className="btn btn-outline-success">
              Login
            </button>

            <button className="btn btn-success">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;