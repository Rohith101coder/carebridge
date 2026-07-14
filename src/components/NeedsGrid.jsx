import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NeedCard from "./NeedCard";
import { getAllPublicNeeds } from "../apis/browseApis";
import { getCategoryIcon } from "../utils/categoryIcons";
import { Navigate } from "react-router-dom";

const NeedsGrid = ({ filters }) => {
  const [sortOption, setSortOption] = useState("urgent");
  const [needs, setNeeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadNeeds = async () => {
      try {
        const response = await getAllPublicNeeds();
        setNeeds(response);
      } catch (error) {
        console.error("Unable to load needs", error);
      } finally {
        setLoading(false);
      }
    };

    loadNeeds();
  }, []);

  // console.log(needs);

  const preFilterNeeds = needs.filter((item)=> (item.quantity -item.reservedQuantity - item.fulfilledQuantity) !== 0);

  // Apply Filters
  const filteredNeeds = preFilterNeeds.filter((item) => {
    const categoryMatch =
      filters.categories.length === 0 ||
      filters.categories.includes(item.category);

    const priorityMatch =
      filters.priorities.length === 0 ||
      filters.priorities.includes(item.priority);

    return categoryMatch && priorityMatch;
  });

  // Apply Sorting
  const sortedNeeds = [...filteredNeeds].sort((a, b) => {
    if (sortOption === "low") {
      return Number(a.pricePerQuantity || 0) - Number(b.pricePerQuantity || 0);
    }

    if (sortOption === "high") {
      return Number(b.pricePerQuantity || 0) - Number(a.pricePerQuantity || 0);
    }

    // Most urgent
    return Number(b.remainingQuantity || 0) - Number(a.remainingQuantity || 0);
  });

  return (
    <div className="w-100 overflow-hidden">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">
        <div>
          <h2 className="fw-bold mb-1 fs-3">All Needs</h2>

          <p className="text-muted mb-0 small">
            Showing {sortedNeeds.length} need
            {sortedNeeds.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="w-100 w-md-auto">
          <select
            className="form-select"
            style={{
              minWidth: "220px",
              maxWidth: "100%",
            }}
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="urgent">Sort by: Most Urgent</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="text-center py-5">Loading needs...</div>
      ) : sortedNeeds.length === 0 ? (
        <div className="text-center py-5">
          <h4 className="fw-bold">No needs found</h4>
          <p className="text-muted">Try changing your selected filters.</p>
        </div>
      ) : (
        <div className="row g-3 mx-0">
          {sortedNeeds.map((item) => {
            const target =
              Number(item.pricePerQuantity || 0) * Number(item.quantity || 0);

            const raised =
              Number(item.pricePerQuantity || 0) *
              (Number(item.quantity || 0) -
                Number(item.remainingQuantity || 0));

            const progress =
              target > 0 ? Math.round((raised / target) * 100) : 0;

            return (
              <div
                className="col-12 col-sm-6 col-lg-4 col-xl-3 px-2"
                key={item.needItemId}
              >
                <div
                  onClick={() =>
                    navigate(`/need/${item.needItemId}`, {
                      state: { need: item },
                    })
                  }
                  style={{ cursor: "pointer" }}
                  className="text-decoration-none text-dark"
                >
                  <NeedCard
                    image={getCategoryIcon(item.category)}
                    title={item.name}
                    place={item.orphanageName}
                    needed={`${item.quantity - item.reservedQuantity - item.fulfilledQuantity} remaining`}
                    amount={raised}
                    target={target}
                    progress={progress}
                    priority={item.priority || "LOW"}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NeedsGrid;
