import React, { useState } from "react";
import {
  FaUserPlus,
  FaSearch,
  FaGift,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";

const HowItWorks = () => {
  const [subscribeBox, setSubscribeBox] = useState(false);

  const handleClick = () => {
    setSubscribeBox(!subscribeBox);
  };

  const steps = [
    {
      id: 1,
      icon: <FaUserPlus />,
      color: "#198754",
      title: "Sign Up",
      desc: "Create your donor or orphanage account.",
    },
    {
      id: 2,
      icon: <FaSearch />,
      color: "#0d6efd",
      title: "Explore Needs",
      desc: "Browse urgent needs from verified orphanages.",
    },
    {
      id: 3,
      icon: <FaGift />,
      color: "#6f42c1",
      title: "Donate / Help",
      desc: "Contribute items or support real needs.",
    },
    {
      id: 4,
      icon: <FaCalendarAlt />,
      color: "#dc3545",
      title: "Book a Visit",
      desc: "Plan a visit and create joyful memories.",
    },
  ];

  return (
    <section className="py-4 py-lg-5 position-relative">
      <div className="container px-3 px-md-4">
        <div className="text-center mb-4">
          <h4 className="fw-bold">How It Works</h4>
        </div>

        <div className="row g-3 align-items-stretch">
          {/* Steps & Responsive Arrows */}
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="col-12 col-md">
                <div className="card border-0 shadow-sm rounded-4 p-3 text-center h-100">
                  <div className="fs-3 mb-2" style={{ color: step.color }}>
                    {step.icon}
                  </div>
                  <h6 className="fw-bold small">{step.title}</h6>
                  <p className="text-muted small mb-0">{step.desc}</p>
                </div>
              </div>

              {/* Arrow horizontal for desktop, hidden for mobile */}
              {index !== steps.length - 1 && (
                <div className="col-auto d-none d-md-flex align-items-center justify-content-center">
                  <FaArrowRight className="text-muted" />
                </div>
              )}
            </React.Fragment>
          ))}

          {/* Subscribe Card Column (Position relative to anchor popup) */}
          <div className="col-12 col-lg-3 mt-3 mt-lg-0 position-relative">
            <div className="card border-0 shadow-sm rounded-4 p-3 h-100">
              <h6 className="fw-bold mb-2">Get Updates</h6>
              <p className="text-muted small mb-3">
                Subscribe to receive email updates about needs and impact.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-2">
                <input
                  type="email"
                  className="form-control form-control-sm"
                  placeholder="Enter your email"
                />
                <button
                  className="btn btn-success btn-sm px-3"
                  onClick={handleClick}
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Anchored Dialog Box directly under the Subscribe card */}
            {subscribeBox && (
              <div
                className="position-absolute bg-white border rounded-4 shadow-sm p-3 text-center start-0 end-0 mt-2 mx-3 mx-sm-0"
                style={{
                  zIndex: 1050,
                }}
              >
                <div className="d-flex align-items-center justify-content-center text-success mb-2">
                  <i className="bi bi-bell-fill fs-5"></i>
                </div>
                <h6 className="fw-bold text-dark small mb-1">
                  Instant Orphanage Alerts
                </h6>
                <p
                  className="text-secondary mb-3 lh-sm"
                  style={{ fontSize: "0.75rem" }}
                >
                  Get notified via email whenever an orphanage posts an urgent
                  need. Coming soon! 🌱
                </p>
                <button
                  onClick={handleClick}
                  className="btn btn-success btn-sm w-100 py-1 fw-semibold rounded-pill"
                  style={{ fontSize: "12px" }}
                >
                  Got it
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
