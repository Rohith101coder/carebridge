import React, { useState } from "react";
import { Link } from "react-router-dom";

import NeedCard from "./NeedCard";

import riceImg from "../assets/ricebag.jpg";
import groceryImg from "../assets/grocery.jpg";
import booksImg from "../assets/books.jpg";
import blanketsImg from "../assets/blankets.jpg";
import hygieneImg from "../assets/hygiene.jpg";
import mealsImg from "../assets/meals.jpg";
import uniformImg from "../assets/uniform.jpg";
import bedsheetImg from "../assets/bedsheets.jpg";

const NeedsGrid = () => {

  const [sortOption, setSortOption] =
    useState("urgent");

  const needs = [
    {
      id: 1,
      image: riceImg,
      title: "Rice (25 kg)",
      place: "Green Valley Home",
      needed: "25 kg needed",
      amount: 7500,
      target: 12500,
      progress: 60,
      priority: "High"
    },

    {
      id: 2,
      image: groceryImg,
      title: "Grocery Kit",
      place: "Hope Foundation",
      needed: "40 kits needed",
      amount: 18000,
      target: 30000,
      progress: 60,
      priority: "High"
    },

    {
      id: 3,
      image: booksImg,
      title: "School Books Set",
      place: "Bright Future Home",
      needed: "50 sets needed",
      amount: 6000,
      target: 10000,
      progress: 60,
      priority: "Medium"
    },

    {
      id: 4,
      image: blanketsImg,
      title: "Blankets",
      place: "New Hope Home",
      needed: "30 blankets needed",
      amount: 6000,
      target: 12000,
      progress: 50,
      priority: "Medium"
    },

    {
      id: 5,
      image: hygieneImg,
      title: "Hygiene Kit",
      place: "Safe Haven Home",
      needed: "60 kits needed",
      amount: 3000,
      target: 8000,
      progress: 37,
      priority: "Low"
    },

    {
      id: 6,
      image: mealsImg,
      title: "Daily Meals",
      place: "Little Angels Home",
      needed: "Support daily meals",
      amount: 15000,
      target: 25000,
      progress: 60,
      priority: "High"
    },

    {
      id: 7,
      image: uniformImg,
      title: "School Uniforms",
      place: "Bright Future Home",
      needed: "40 uniforms needed",
      amount: 8000,
      target: 16000,
      progress: 50,
      priority: "Medium"
    },

    {
      id: 8,
      image: bedsheetImg,
      title: "Bedsheets",
      place: "Care & Share Home",
      needed: "25 bedsheets needed",
      amount: 2500,
      target: 7500,
      progress: 33,
      priority: "Low"
    }
  ];

  // Sorting
  const sortedNeeds = [...needs].sort(
    (a, b) => {

      // Low to High
      if (sortOption === "low") {
        return a.amount - b.amount;
      }

      // High to Low
      if (sortOption === "high") {
        return b.amount - a.amount;
      }

      // Most Urgent
      return b.progress - a.progress;
    }
  );

  return (
    <div className="w-100 overflow-hidden">

      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">

        {/* Left */}
        <div>

          <h2 className="fw-bold mb-1 fs-3">
            All Needs
          </h2>

          <p className="text-muted mb-0 small">
            Choose a need below to see details and contribute.
          </p>

        </div>

        {/* Sort */}
        <div className="w-100 w-md-auto">

          <select
            className="form-select"
            style={{
              minWidth: "220px",
              maxWidth: "100%"
            }}

            value={sortOption}

            onChange={(e) =>
              setSortOption(e.target.value)
            }
          >
            <option value="urgent">
              Sort by: Most Urgent
            </option>

            <option value="low">
              Low to High
            </option>

            <option value="high">
              High to Low
            </option>

          </select>

        </div>

      </div>

      {/* Grid */}
      <div className="row g-3 mx-0">

        {sortedNeeds.map((item) => (
          <div
            className="col-12 col-sm-6 col-lg-4 col-xl-3 px-2"
            key={item.id}
          >

            <Link
              to={`/need/${item.id}`}
              className="text-decoration-none text-dark"
            >
              <NeedCard {...item} />
            </Link>

          </div>
        ))}

      </div>

    </div>
  );
};

export default NeedsGrid;