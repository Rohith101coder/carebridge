import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
 import { useState } from "react";
import NeedsHero from "../components/NeedsHero";
import NeedsFilters from "../components/NeedsFilters";
import NeedsGrid from "../components/NeedsGrid";
import DonateCTA from "../components/DonateCTA";

const Needs = () => {

   

    const [filters, setFilters] = useState({
      categories: [],
      priorities: [],
    });


  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <NeedsHero />

      {/* Main Section */}
      <div className="container-fluid py-4 px-2 px-md-3 overflow-hidden">
        <div className="row g-3 mx-0">
          {/* Filters */}
          <div className="col-12 col-lg-3 px-2">
            <div
              className="sticky-lg-top"
              style={{
                top: "90px",
              }}
            >
              <NeedsFilters filters={filters} setFilters={setFilters} />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-12 col-lg-9 px-2 overflow-hidden">
            {/* Grid */}
            <NeedsGrid filters={filters} />

            {/* CTA */}
            <div className="mt-4 mt-md-5">
              <DonateCTA />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Needs;