import React from "react";
import { FaHome, FaUsers, FaGift, FaHeart } from "react-icons/fa";

const Stats = () => {
  const statsData = [
    {
      id: 1,
      icon: <FaHome />,
      color: "#198754",
      number: "250+",
      title: "Verified Orphanages"
    },
    {
      id: 2,
      icon: <FaUsers />,
      color: "#ff6a00",
      number: "12,500+",
      title: "Active Donors"
    },
    {
      id: 3,
      icon: <FaGift />,
      color: "#6f42c1",
      number: "28,000+",
      title: "Needs Fulfilled"
    },
    {
      id: 4,
      icon: <FaHeart />,
      color: "#0d6efd",
      number: "50+",
      title: "Cities Reached"
    }
  ];

  return (
    <section
      className="position-relative"
      style={{
        marginTop: "-50px",
        zIndex: 10
      }}
    >
      <div className="container">
        <div className="bg-white shadow rounded-4 px-4 py-3">
          <div className="row align-items-center text-center">

            {statsData.map((item, index) => (
              <div className="col-6 col-md-3" key={item.id}>
                <div
                  className={`d-flex align-items-center justify-content-center gap-3 py-2 ${
                    index !== statsData.length - 1 ? "border-end" : ""
                  }`}
                >
                  {/* Icon */}
                  <div
                    className="fs-4"
                    style={{ color: item.color }}
                  >
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div className="text-start">
                    <h5
                      className="fw-bold mb-0"
                      style={{ color: item.color }}
                    >
                      {item.number}
                    </h5>

                    <small className="text-muted">
                      {item.title}
                    </small>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;