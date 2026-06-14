import React from "react";
import profileImg from "../assets/profile.jpg";

const Messages = () => {
  const messages = [
    {
      name: "Rahul Sharma",
      message: "Can I visit this Sunday?"
    },
    {
      name: "Priya Verma",
      message: "Donation delivered successfully."
    },
    {
      name: "Arjun Kumar",
      message: "Need details for school supplies."
    }
  ];

  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 h-100">

      {/* Heading */}
      <div className="d-flex justify-content-between mb-4">
        <h5 className="fw-bold">
          Messages
        </h5>

        <small className="text-success fw-semibold">
          View all
        </small>
      </div>

      {/* Messages List */}
      {messages.map((item, index) => (
        <div
          key={index}
          className="d-flex align-items-center gap-3 mb-4"
        >
          {/* Profile */}
          <img
            src={profileImg}
            alt={item.name}
            className="rounded-circle"
            style={{
              width: "45px",
              height: "45px",
              objectFit: "cover"
            }}
          />

          {/* Message */}
          <div>
            <h6 className="fw-bold mb-1">
              {item.name}
            </h6>

            <small className="text-muted">
              {item.message}
            </small>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Messages;