import React from "react";

const UpcomingBookings = () => {
  const bookings = [
    {
      id: 1,
      date: "18",
      month: "May",
      title: "Birthday Celebration",
      place: "Green Valley Home",
      time: "10:00 AM",
      status: "Pending"
    },
    {
      id: 2,
      date: "25",
      month: "May",
      title: "Weekend Visit",
      place: "Bright Future Home",
      time: "11:00 AM",
      status: "Confirmed"
    },
    {
      id: 3,
      date: "02",
      month: "Jun",
      title: "Teaching Session",
      place: "Hope Foundation",
      time: "02:00 PM",
      status: "Pending"
    }
  ];

  return (
    <div className="card border-0 shadow-sm rounded-4 p-3 h-100">

      {/* Heading */}
      <div className="d-flex justify-content-between mb-3">
        <h6 className="fw-bold">
          Upcoming Bookings
        </h6>

        <small className="text-success fw-semibold" style={{cursor:"pointer"}}>
          View all
        </small>
      </div>

      {/* Booking List */}
      {bookings.map((item) => (
        <div
          key={item.id}
          className="d-flex justify-content-between align-items-center mb-4"
        >
          {/* Left */}
          <div className="d-flex gap-2">

            {/* Date */}
            <div className="text-center">
              <h5 className="fw-bold mb-0">
                {item.date}
              </h5>

              <small className="text-muted">
                {item.month}
              </small>
            </div>

            {/* Details */}
            <div>
              <h6 className="fw-bold small mb-1">
                {item.title}
              </h6>

              <small className="text-muted d-block">
                {item.place}
              </small>

              <small className="text-muted">
                {item.time}
              </small>
            </div>

          </div>

          {/* Status */}
          <span
            className={`badge px-2 py-2 ${
              item.status === "Confirmed"
                ? "bg-success"
                : "bg-warning text-dark"
            }`}
            style={{cursor: "pointer"}}
          >
            {item.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default UpcomingBookings;