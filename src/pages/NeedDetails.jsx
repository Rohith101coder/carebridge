import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { getNeedById } from "../apis/browseApis";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaCoins,
  FaBuilding,
  FaMapMarkerAlt,
  FaHeart,
  FaArrowLeft,
} from "react-icons/fa";
import { getCategoryIcon } from "../utils/categoryIcons";
import DonationModal from "../components/DonationModal";
import { toast } from "react-toastify";

// Helper utility to safely parse and validate JWT from localStorage
const checkDonorAuthorization = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join(""),
    );

    const decoded = JSON.parse(jsonPayload);

    // Check if token is expired
    if (decoded.exp && Date.now() >= decoded.exp * 1000) {
      return false;
    }

    return decoded.role === "DONOR";
  } catch (err) {
    console.error("Token parse error:", err);
    return false;
  }
};

const NeedDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Get data from location.state if available, fallback to API fetch state
  const stateNeed = location.state?.need || location.state?.item || null;
  const [need, setNeed] = useState(stateNeed);
  const [loading, setLoading] = useState(!stateNeed);
  const [error, setError] = useState(null);

  // Donation Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (stateNeed) {
      setLoading(false);
      return;
    }

    const loadNeed = async () => {
      try {
        const response = await getNeedById(id);
        setNeed(response);
      } catch (err) {
        setError(err.response?.data?.message || "Unable to load need details");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadNeed();
    }
  }, [id, stateNeed]);

  const handleDonateClick = () => {
    const isAuthorized = checkDonorAuthorization();
    if (!isAuthorized) {
      toast.error("Session expired or unauthorized. Please re-login.");
      navigate("/login", {
        state: { from: location.pathname },
      });
      return;
    }
    setIsModalOpen(true);
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "HIGH":
        return "bg-danger";
      case "MEDIUM":
        return "bg-warning text-dark";
      case "LOW":
        return "bg-success";
      default:
        return "bg-secondary";
    }
  };

  return (
    <>
      <Navbar />
      <div className="container py-5 min-vh-100">
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <div className="alert alert-danger">{error}</div>
        ) : need ? (
          <>
            <div className="d-flex justify-content-between align-items-start mb-4 gap-3 flex-wrap">
              <div>
                <h1 className="fw-bold fs-3 text-dark mb-1">{need.name}</h1>
                <p className="text-muted small mb-2">{need.description}</p>
                <span
                  className={`badge ${getPriorityBadge(need.priority)} x-small`}
                >
                  {need.priority} Priority
                </span>
              </div>
              <Link
                to="/needs"
                className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1"
              >
                <FaArrowLeft /> Back to Needs
              </Link>
            </div>

            <div className="row g-4">
              {/* Left Column: Image & Details */}
              <div className="col-lg-8">
                <div className="card rounded-4 shadow-sm p-4 mb-4 border-0 bg-white text-center">
                  <div className="bg-light rounded-3 py-4 mb-3">
                    <img
                      src={
                        
                        getCategoryIcon(need.category)
                      }
                      alt={need.name}
                      className="img-fluid object-fit-contain rounded-3"
                      style={{ maxHeight: "220px", width: "100%" }}
                    />
                  </div>
                  <div className="row g-4 text-start">
                    <div className="col-12 col-md-6">
                      <div className="mb-3">
                        <h6 className="mb-1 small fw-semibold text-muted">
                          Orphanage
                        </h6>
                        <p className="text-dark mb-0 fw-bold">
                          {need.orphanageName}
                        </p>
                      </div>
                      <div className="mb-3">
                        <h6 className="mb-1 small fw-semibold text-muted">
                          Location
                        </h6>
                        <p className="text-dark mb-0 small">
                          <FaMapMarkerAlt className="text-success me-1" />{" "}
                          {need.location}
                        </p>
                      </div>
                      <div className="mb-3">
                        <h6 className="mb-1 small fw-semibold text-muted">
                          Remaining Quantity
                        </h6>
                        <p className="text-dark mb-0 small fw-semibold">
                          {need.quantity - (need.reservedQuantity + need.fulfilledQuantity)}
                        </p>
                      </div>
                      <div className="mb-3">
                        <h6 className="mb-1 small fw-semibold text-muted">
                          Reserved Quantity
                        </h6>
                        <p className="text-dark mb-0 small fw-semibold">
                          {need.reservedQuantity}
                        </p>
                      </div>
                      <div className="mb-3">
                        <h6 className="mb-1 small fw-semibold text-muted">
                          Fulfilled Quantity
                        </h6>
                        <p className="text-dark mb-0 small fw-semibold">
                          {need.fulfilledQuantity}
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="mb-3">
                        <h6 className="mb-1 small fw-semibold text-muted">
                          Quantity Requested
                        </h6>
                        <p className="text-dark mb-0 small fw-semibold">
                          {need.quantity}
                        </p>
                      </div>
                      <div className="mb-3">
                        <h6 className="mb-1 small fw-semibold text-muted">
                          Price Per Unit
                        </h6>
                        <p className="text-dark mb-0 small fw-bold">
                          ₹{need.pricePerQuantity}
                        </p>
                      </div>
                      <div className="mb-3">
                        <h6 className="mb-1 small fw-semibold text-muted">
                          Progress
                        </h6>
                        <div
                          className="progress mb-1"
                          style={{ height: "10px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{ width: `${need.progress}%` }}
                          />
                        </div>
                        <small className="text-muted x-small">
                          {need.progress}% fulfilled
                        </small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card rounded-4 shadow-sm p-4 border-0 bg-white">
                  <h5 className="fw-bold mb-3 fs-6 text-success">
                    About this need
                  </h5>
                  <p className="text-muted small mb-0">{need.description}</p>
                </div>
              </div>

              {/* Right Column: Support Action */}
              <div className="col-lg-4">
                <div className="card rounded-4 shadow-sm p-4 h-100 border-0 bg-white d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="fw-bold mb-3 fs-6 text-success">
                      Support this orphanage
                    </h5>
                    <p className="text-muted small mb-4">
                      Share this need, contact the orphanage, or donate
                      directly.
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={handleDonateClick}
                      className="btn btn-success w-100 mb-3 fw-bold py-2.5 btn-sm d-flex align-items-center justify-content-center gap-2"
                    >
                      <FaHeart className="text-danger" /> Donate Now
                    </button>
                    <Link
                      to={`/orphanage/${need.orphanageCareBridgeId}`}
                      className="btn btn-outline-success w-100 fw-semibold py-2 btn-sm d-flex align-items-center justify-content-center gap-1"
                    >
                      <FaBuilding /> View Orphanage
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="alert alert-warning">Need not found.</div>
        )}
      </div>
      <Footer />

      {/* Donation Modal Integration */}
      <DonationModal
        show={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        needItemId={need?.needItemId}
      />
    </>
  );
};

export default NeedDetails;
