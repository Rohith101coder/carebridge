import React from "react";

const UpcomingVisits = () => {
  const visits = [
    {
      donor: "Rahul Sharma",
      purpose: "Birthday Celebration",
      date: "18 May",
      time: "10:00 AM",
      status: "Pending"
    },
    {
      donor: "Priya Verma",
      purpose: "Food Donation",
      date: "22 May",
      time: "11:30 AM",
      status: "Confirmed"
    },
    {
      donor: "Arjun Kumar",
      purpose: "Teaching Session",
      date: "25 May",
      time: "2:00 PM",
      status: "Pending"
    }
  ];

  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 h-100">

      {/* Heading */}
      <div className="d-flex justify-content-between mb-4">
        <h5 className="fw-bold">
          Upcoming Visits
        </h5>

        <small className="text-success fw-semibold">
          View all
        </small>
      </div>

      {/* Visit List */}
      {visits.map((item, index) => (
        <div
          key={index}
          className="border rounded-3 p-3 mb-3"
        >
          <div className="d-flex justify-content-between align-items-start">

            <div>
              <h6 className="fw-bold mb-1">
                {item.donor}
              </h6>

              <small className="text-muted d-block">
                {item.purpose}
              </small>

              <small className="text-muted">
                {item.date} • {item.time}
              </small>
            </div>

            {/* Status Badge */}
            <span
              className={`badge ${
                item.status === "Confirmed"
                  ? "bg-success"
                  : "bg-warning text-dark"
              }`}
            >
              {item.status}
            </span>

          </div>
        </div>
      ))}

    </div>
  );
};

export default UpcomingVisits;