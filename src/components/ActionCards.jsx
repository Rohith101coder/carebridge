import React from "react";
import urgentImg from "../assets/banner1.png";
import visitImg from "../assets/banner2.png";

const ActionCards = () => {
  const cards = [
    {
      id: 1,
      title: "Explore Urgent Needs",
      desc: "Browse needs posted by orphanages and make a difference today.",
      btn: "Explore Needs",
      image: urgentImg,
      bg: "#e8f8ef"
    },
    {
      id: 2,
      title: "Book a Visit",
      desc: "Celebrate birthdays, festivals, or spend quality time with children.",
      btn: "Book a Visit",
      image: visitImg,
      bg: "#f8f5ff"
    }
  ];

  return (
    <section className="pb-5">
      <div className="container">
        <div className="row g-4">

          {cards.map((card) => (
            <div className="col-md-6" key={card.id}>
              <div
                className="rounded-4 p-4 d-flex align-items-center justify-content-between shadow-sm"
                style={{
                  backgroundColor: card.bg
                }}
              >
                {/* Left content */}
                <div>
                  <h5 className="fw-bold">
                    {card.title}
                  </h5>

                  <p className="text-muted small mb-3">
                    {card.desc}
                  </p>

                  <button className="btn btn-link text-success p-0 fw-semibold text-decoration-none">
                    {card.btn} →
                  </button>
                </div>

                {/* Right image */}
                <img
                  src={card.image}
                  alt={card.title}
                  style={{
                    width: "250px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "15px"
                  }}
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ActionCards;