import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import { getGlobalVisitSlots } from "../apis/globalslotApis";
import { bookVisit } from "../apis/donorSlotApis";

// Helper utility to decode JWT safely on the client side
const decodeJwt = (token) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join(""),
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    return null;
  }
};

const GlobalSlotsPage = () => {
  const navigate = useNavigate();
  const [orphanagesWithSlots, setOrphanagesWithSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedOrphanage, setSelectedOrphanage] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Modal and Booking Form States
  const [showModal, setShowModal] = useState(false);
  const [numberOfVisitors, setNumberOfVisitors] = useState(1);
  const [bookingMessage, setBookingMessage] = useState("");
  const [bookingLoading, setBookingLoading] = useState(false);

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        setLoading(true);
        const data = await getGlobalVisitSlots();
        setOrphanagesWithSlots(data);
      } catch (err) {
        setError("Failed to load available slots. Please try again later.");
        toast.error("Failed to load available slots.");
      } finally {
        setLoading(false);
      }
    };

    fetchSlots();
  }, []);

  const filteredOrphanages = orphanagesWithSlots.filter((org) => {
    const matchesSearch =
      org.orphanageName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedOrphanage
      ? org.orphanageId === selectedOrphanage
      : true;
    return matchesSearch && matchesFilter;
  });

  const handleSlotSelect = (slot, orgName) => {
    const slotData = {
      ...slot,
      orphanageName: orgName,
    };
    setSelectedSlot(slotData);

    // If width is mobile view (< 992px bootstrap lg breakpoint), automatically trigger the dialog modal
    if (window.innerWidth < 992) {
      setNumberOfVisitors(1);
      setBookingMessage("");
      setShowModal(true);
    }
  };

  const handleOpenModal = () => {
    if (!selectedSlot) return;
    setNumberOfVisitors(1);
    setBookingMessage("");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleExecuteBooking = async (e) => {
    e.preventDefault();
    if (!selectedSlot) return;

    // 1. Check if number of visitors satisfies available slot capacity
    const availableSeats = Number(selectedSlot.availableSeats);
    const requestedVisitors = Number(numberOfVisitors);

    if (requestedVisitors > availableSeats) {
      toast.error(
        `Requested visitors (${requestedVisitors}) exceed the available seats (${availableSeats}).`,
      );
      return;
    }

    // 2. Retrieve JWT token from localStorage
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login", {
        state: { message: "Session expired please login again" },
      });
      return;
    }

    // 3. Decode JWT and check expiration
    const decodedToken = decodeJwt(token);
    const currentTime = Date.now() / 1000;

    if (!decodedToken || (decodedToken.exp && decodedToken.exp < currentTime)) {
      localStorage.removeItem("token");
      navigate("/login", {
        state: { message: "Session expired please login again" },
      });
      return;
    }

    // 4. Verify role is "DONOR"
    const userRole = decodedToken.role || decodedToken.roles;
    const isDonor = Array.isArray(userRole)
      ? userRole.includes("DONOR")
      : userRole === "DONOR";

    if (!isDonor) {
      toast.error(
        "Access denied. Only users with the DONOR role are permitted to book visit slots.",
      );
      setShowModal(false);
      return;
    }

    // 5. Trigger the API if all checks pass
    try {
      setBookingLoading(true);

      const requestPayload = {
        slotId: selectedSlot.slotId,
        numberOfVisitors: requestedVisitors,
        message: bookingMessage,
      };

      const response = await bookVisit(requestPayload);
      toast.success(
        response.message ||
          `Slot reserved successfully! (Booking ID: ${response.bookingId})`,
      );
      setShowModal(false);
      setSelectedSlot(null);
    } catch (err) {
      toast.error("Failed to book the slot. Please try again later.");
    } finally {
      setBookingLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-light font-sans text-dark">
        <Navbar />
        <div className="container py-5 text-center">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-muted mt-2 small">Loading available slots...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-light font-sans text-dark">
        <Navbar />
        <div className="container py-5 text-center">
          <div className="alert alert-danger py-3 small" role="alert">
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light font-sans text-dark position-relative">
      <Navbar />
      <ToastContainer position="top-right" autoClose={4000} />

      <div className="container py-4">
        <div className="mb-4 bg-white p-4 rounded-4 shadow-sm border border-light-subtle">
          <h1 className="h3 fw-bold text-dark mb-1">
            Available Visitation & Booking Slots
          </h1>
          <p className="text-muted mb-0 small">
            Browse active partner orphanages, pick a preferred schedule slot,
            and confirm your visit.
          </p>
        </div>

        <div className="row g-3 mb-4 bg-white p-3 rounded-4 shadow-sm border border-light-subtle align-items-center">
          <div className="col-md-8">
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0 text-muted">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control bg-light border-start-0 ps-0 shadow-none"
                placeholder="Search by orphanage name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <select
              className="form-select bg-light shadow-none"
              value={selectedOrphanage}
              onChange={(e) => setSelectedOrphanage(e.target.value)}
            >
              <option value="">All Partner Centers</option>
              {orphanagesWithSlots.map((org) => (
                <option key={org.orphanageId} value={org.orphanageId}>
                  {org.orphanageName}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-8">
            <div className="d-flex flex-column gap-3">
              {filteredOrphanages.map((org) => (
                <div
                  key={org.orphanageId}
                  className="card border-0 shadow-sm rounded-4 p-4 bg-white"
                >
                  <div className="d-flex flex-sm-row flex-column justify-content-between align-items-sm-center pb-3 border-bottom gap-2">
                    <div className="d-flex align-items-center gap-3">
                      {org.profileImage && (
                        <img
                          src={org.profileImage}
                          alt={org.orphanageName}
                          className="rounded-circle object-fit-cover shadow-sm"
                          style={{ width: "48px", height: "48px" }}
                        />
                      )}
                      <div>
                        <h5 className="fw-bold mb-1 text-dark d-flex align-items-center gap-2">
                          <i className="bi bi-building text-success"></i>
                          {org.orphanageName}
                        </h5>
                        <div className="d-flex align-items-center gap-3 text-muted small mt-1">
                          <span>
                            <i className="bi bi-geo-alt me-1"></i>
                            {org.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3">
                    <span
                      className="text-uppercase text-muted fw-bold mb-2 d-block"
                      style={{ fontSize: "0.75rem" }}
                    >
                      Available Schedule Slots
                    </span>

                    {org.orpSlots && org.orpSlots.length > 0 ? (
                      <div className="row g-2">
                        {org.orpSlots.map((slot) => {
                          const isSelected =
                            selectedSlot?.slotId === slot.slotId;
                          const availableCount = Number(slot.availableSeats);
                          return (
                            <div key={slot.slotId} className="col-sm-6">
                              <button
                                onClick={() =>
                                  handleSlotSelect(slot, org.orphanageName)
                                }
                                className={`w-100 p-3 rounded-3 text-start border transition-all d-flex flex-column justify-content-between ${
                                  isSelected
                                    ? "bg-success bg-opacity-10 border-success shadow-sm"
                                    : "bg-light bg-opacity-50 border-light-subtle"
                                }`}
                                style={{ cursor: "pointer" }}
                              >
                                <div className="d-flex justify-content-between align-items-center w-100 mb-2">
                                  <span className="small text-muted d-flex align-items-center gap-1">
                                    <i className="bi bi-calendar-event text-success"></i>{" "}
                                    {slot.date}
                                  </span>
                                  <span
                                    className={`badge ${
                                      availableCount > 2
                                        ? "bg-success"
                                        : "bg-warning text-dark"
                                    } bg-opacity-20 text-dark fw-semibold`}
                                    style={{ fontSize: "0.7rem" }}
                                  >
                                    {slot.availableSeats} available
                                  </span>
                                </div>
                                <div className="fw-semibold text-dark small d-flex align-items-center gap-2">
                                  <i className="bi bi-clock text-secondary"></i>
                                  {slot.startTime} - {slot.endTime}
                                </div>
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="p-3 bg-light rounded-3 text-muted small text-center border border-light-subtle">
                        <i className="bi bi-info-circle me-1"></i>
                        Currently no slots available for this orphanage
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {filteredOrphanages.length === 0 && (
                <div className="text-center py-5 bg-white rounded-4 shadow-sm border border-light-subtle">
                  <p className="text-muted mb-0">
                    No centers or slots match your search criteria.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Reservation Summary Sidebar (Hidden on mobile via d-none d-lg-block) */}
          <div className="col-lg-4 d-none d-lg-block">
            <div
              className="card border-0 shadow-sm rounded-4 p-4 bg-white sticky-top"
              style={{ top: "90px" }}
            >
              <h5 className="fw-bold text-dark pb-3 border-bottom mb-3">
                Reservation Summary
              </h5>

              {selectedSlot ? (
                <div className="d-flex flex-column gap-3">
                  <div className="bg-light p-3 rounded-3 border border-light-subtle">
                    <span
                      className="text-success fw-bold text-uppercase d-block mb-1"
                      style={{ fontSize: "0.7rem" }}
                    >
                      Selected Center
                    </span>
                    <h6 className="fw-bold text-dark mb-2">
                      {selectedSlot.orphanageName}
                    </h6>

                    <div className="pt-2 border-top text-muted small d-flex flex-column gap-1">
                      <div>
                        <i className="bi bi-calendar-event text-success me-2"></i>
                        Date: {selectedSlot.date}
                      </div>
                      <div>
                        <i className="bi bi-clock text-secondary me-2"></i>Time:{" "}
                        {selectedSlot.startTime} - {selectedSlot.endTime}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleOpenModal}
                    className="btn btn-success w-100 py-3 fw-bold rounded-pill shadow-sm"
                  >
                    Confirm Slot Reservation
                  </button>
                </div>
              ) : (
                <div className="text-center py-4 text-muted">
                  <i className="bi bi-clock-history fs-2 text-secondary opacity-50 mb-2 d-block"></i>
                  <p className="small mb-0">
                    Select an available schedule slot from the left list to
                    review and confirm your visit booking.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50"
          style={{ zIndex: 1060 }}
        >
          <div
            className="bg-white rounded-4 p-4 shadow-lg w-100 mx-3"
            style={{ maxWidth: "420px" }}
          >
            <div className="d-flex justify-content-between align-items-center pb-3 border-bottom mb-3">
              <h5 className="fw-bold text-dark m-0">Complete Visit Booking</h5>
              <button
                type="button"
                className="btn-close shadow-none"
                onClick={handleCloseModal}
              ></button>
            </div>

            {selectedSlot && (
              <form onSubmit={handleExecuteBooking}>
                <div className="mb-3 bg-light p-2.5 rounded-3 small text-muted border border-light-subtle">
                  <strong>{selectedSlot.orphanageName}</strong> <br />
                  <span>
                    {selectedSlot.date} ({selectedSlot.startTime} -{" "}
                    {selectedSlot.endTime})
                  </span>
                  <br />
                  <span className="text-success fw-semibold">
                    Max available: {selectedSlot.availableSeats}
                  </span>
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-semibold text-dark">
                    Number of Visitors
                  </label>
                  <input
                    type="number"
                    min="1"
                    max={selectedSlot.availableSeats}
                    className="form-control form-control-sm bg-light shadow-none"
                    value={numberOfVisitors}
                    onChange={(e) => setNumberOfVisitors(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label small fw-semibold text-dark">
                    Message (Optional)
                  </label>
                  <textarea
                    className="form-control form-control-sm bg-light shadow-none"
                    rows="3"
                    placeholder="Add a special note or visit context..."
                    value={bookingMessage}
                    onChange={(e) => setBookingMessage(e.target.value)}
                  ></textarea>
                </div>

                <div className="d-flex gap-2">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm w-50 py-2 rounded-pill fw-semibold"
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-success btn-sm w-50 py-2 rounded-pill fw-bold shadow-sm"
                    disabled={bookingLoading}
                  >
                    {bookingLoading ? "Validating..." : "Book Slot"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobalSlotsPage;
