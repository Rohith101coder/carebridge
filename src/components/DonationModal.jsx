import React, { useState } from "react";
import {
  FaTimes,
  FaBox,
  FaCalendarAlt,
  FaTruck,
  FaFileUpload,
  FaRegCommentDots,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { donate } from "../apis/donorNeedApis";


const DonationModal = ({ show, onClose, needItemId }) => {
  const [quantity, setQuantity] = useState("");
  const [donationType, setDonationType] = useState("IN_PERSON");
  const [expectedVisitDateTime, setExpectedVisitDateTime] = useState("");
  const [expectedDeliveryDate, setExpectedDeliveryDate] = useState("");
  const [orderProofImage, setOrderProofImage] = useState(null);
  const [platformName, setPlatformName] = useState("");
  const [trackingId, setTrackingId] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  if (!show) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        needItemId,
        quantity: parseInt(quantity, 10),
        donationType,
        message,
      };

      if (donationType === "IN_PERSON") {
        payload.expectedVisitDateTime = expectedVisitDateTime;
      } else if (donationType === "ONLINE_ORDER") {
        payload.expectedDeliveryDate = expectedDeliveryDate;
        payload.platformName = platformName;
        payload.trackingId = trackingId;
        if (orderProofImage) {
          payload.orderProofImage = orderProofImage;
        }
      }

      await donate(payload);
      toast.success("Donation initiated successfully!");
      onClose();
      // Reset form fields
      setQuantity("");
      setMessage("");
      setOrderProofImage(null);
    } catch (error) {
      console.error("Donation initiation error:", error);
      toast.error(
        error.response?.data?.message || "Failed to initiate donation.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="modal show d-block"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", overflowY: "auto" }}
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow rounded-4 p-4">
          {/* Modal Header */}
          <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3">
            <h5 className="fw-bold text-success mb-0">Fulfill Donation</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>

          {/* Modal Body Form */}
          <form onSubmit={handleSubmit}>
            {/* Quantity */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Quantity to Donate*
              </label>
              <div className="input-group">
                <span className="input-group-text bg-light">
                  <FaBox className="text-muted" />
                </span>
                <input
                  type="number"
                  min="1"
                  className="form-control"
                  placeholder="Enter quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Donation Type Selection */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Donation Method*</label>
              <div className="d-flex gap-2">
                <button
                  type="button"
                  className={`btn flex-fill ${donationType === "IN_PERSON" ? "btn-success" : "btn-outline-success"}`}
                  onClick={() => setDonationType("IN_PERSON")}
                >
                  In Person
                </button>
                <button
                  type="button"
                  className={`btn flex-fill ${donationType === "ONLINE_ORDER" ? "btn-success" : "btn-outline-success"}`}
                  onClick={() => setDonationType("ONLINE_ORDER")}
                >
                  Online Order
                </button>
              </div>
            </div>

            {/* Conditional Fields: IN_PERSON */}
            {donationType === "IN_PERSON" && (
              <div className="mb-3 p-3 bg-light rounded-3 border">
                <label className="form-label fw-semibold small d-flex align-items-center gap-1">
                  <FaCalendarAlt className="text-success" /> Expected Visit Date
                  & Time*
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  value={expectedVisitDateTime}
                  onChange={(e) => setExpectedVisitDateTime(e.target.value)}
                  required
                />
              </div>
            )}

            {/* Conditional Fields: ONLINE_ORDER */}
            {donationType === "ONLINE_ORDER" && (
              <div className="mb-3 p-3 bg-light rounded-3 border">
                <div className="mb-2">
                  <label className="form-label fw-semibold small">
                    Expected Delivery Date*
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    value={expectedDeliveryDate}
                    onChange={(e) => setExpectedDeliveryDate(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label fw-semibold small">
                    Platform Name (e.g., Amazon, Flipkart)*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Amazon"
                    value={platformName}
                    onChange={(e) => setPlatformName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label fw-semibold small">
                    Tracking ID*
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <FaTruck className="text-muted" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter tracking ID"
                      value={trackingId}
                      onChange={(e) => setTrackingId(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="mb-0">
                  <label className="form-label fw-semibold small d-flex align-items-center gap-1">
                    <FaFileUpload className="text-success" /> Order Proof Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={(e) => setOrderProofImage(e.target.files[0])}
                  />
                </div>
              </div>
            )}

            {/* Message / Remarks */}
            <div className="mb-3">
              <label className="form-label fw-semibold d-flex align-items-center gap-1">
                <FaRegCommentDots className="text-success" /> Remarks/Message
              </label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Any specific note for the orphanage..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="d-flex gap-2 mt-4">
              <button
                type="button"
                className="btn btn-outline-secondary w-50 py-2 fw-semibold"
                onClick={onClose}
                disabled={loading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-success w-50 py-2 fw-semibold d-flex align-items-center justify-content-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : (
                  "Donate Now"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
