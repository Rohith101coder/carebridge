import React from "react";
import riceImg from "../assets/ricebag.jpg";
import booksImg from "../assets/books.jpg";
import blanketImg from "../assets/blankets.jpg";

const RecentDonations = () => {
  const donations = [
    {
      id: 1,
      item: "Rice (25 kg)",
      place: "Green Valley Home",
      date: "10 May 2026",
      image: riceImg
    },
    {
      id: 2,
      item: "School Books Set",
      place: "Bright Future Home",
      date: "04 May 2026",
      image: booksImg
    },
    {
      id: 3,
      item: "Towels (10 pcs)",
      place: "Hope Foundation",
      date: "28 Apr 2026",
      image: blanketImg
    }
  ];

  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 h-100">

      {/* Heading */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold">
          Recent Donations
        </h5>

        <small className="text-success fw-semibold">
          View all
        </small>
      </div>

      {/* Donation List */}
      {donations.map((item) => (
        <div
          key={item.id}
          className="d-flex justify-content-between align-items-center mb-4"
        >
          <div className="d-flex gap-3 align-items-center">

            <img
              src={item.image}
              alt={item.item}
              className="rounded"
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover"
              }}
            />

            <div>
              <h6 className="fw-bold small mb-1">
                {item.item}
              </h6>

              <small className="text-muted d-block">
                {item.place}
              </small>
            </div>

          </div>

          <small className="text-muted">
            {item.date}
          </small>
        </div>
      ))}

    </div>
  );
};

export default RecentDonations;