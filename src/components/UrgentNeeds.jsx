import React from "react";
import riceImg from "../assets/ricebag.jpg";
import booksImg from "../assets/books.jpg";
import blanketImg from "../assets/blankets.jpg";

const UrgentNeeds = () => {
    const needs = [
        {
            id: 1,
            title: "Rice (25 kg)",
            place: "Green Valley Home",
            needed: "25 kg needed",
            image: riceImg,
            priority: "High Priority"
        },
        {
            id: 2,
            title: "School Books Set",
            place: "Bright Future Home",
            needed: "50 sets needed",
            image: booksImg,
            priority: "High Priority"
        },
        {
            id: 3,
            title: "Blankets",
            place: "Hope Foundation",
            needed: "30 needed",
            image: blanketImg,
            priority: "Medium"
        },
        {
            id: 4,
            title: "Milk Packets",
            place: "Sunrise Shelter",
            needed: "40 packets needed",
            image: riceImg,
            priority: "High Priority"
        },
        {
            id: 5,
            title: "School Bags",
            place: "Little Stars Home",
            needed: "20 bags needed",
            image: booksImg,
            priority: "Medium"
        },
        {
            id: 6,
            title: "Winter Clothes",
            place: "Hope Children Home",
            needed: "35 sets needed",
            image: blanketImg,
            priority: "High Priority"
        }
    ];

    return (
        <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
            {/* Heading */}
            <div className="d-flex justify-content-between mb-4">
                <h5 className="fw-bold">
                    Urgent Needs Near You
                </h5>

                <small className="text-success fw-semibold" style={{cursor: "pointer"}}>
                    View all
                </small>
            </div>

            {/* Cards */}
            <div className="row g-3">
                {needs.map((item) => (
                    <div className="col-6 col-md-4 col-lg-2" key={item.id}>
                        <div className="card border-0 shadow-sm rounded-4 h-100 p-2 d-flex flex-column">

                            {/* Priority Badge */}
                            <div className="mb-2">
                                <span
                                    className={`badge small ${item.priority === "High Priority"
                                            ? ""
                                            : "bg-warning text-dark"
                                        }`}
                                    style={
                                        item.priority === "High Priority"
                                            ? { backgroundColor: "#e64d4d", color: "white" }
                                            : {}
                                    }
                                >
                                    {item.priority}
                                </span>
                            </div>

                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="card-img-top rounded-4"
                                style={{
                                    height: "90px",
                                    objectFit: "cover"
                                }}
                            />

                            {/* Body */}
                            <div className="card-body p-2 d-flex flex-column">
                                <h6
                                    className="fw-bold small mb-1"
                                    style={{ minHeight: "45px" }}
                                >
                                    {item.title}
                                </h6>

                                <small
                                    className="text-muted d-block small"
                                    style={{ minHeight: "45px" }}
                                >
                                    {item.place}
                                </small>

                                <small
                                    className="text-muted d-block mb-2 small"
                                    style={{ minHeight: "40px" }}
                                >
                                    {item.needed}
                                </small>

                                <button className="btn btn-success btn-sm w-100 mt-auto">
                                    Donate
                                </button>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UrgentNeeds;