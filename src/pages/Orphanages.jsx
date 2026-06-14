import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import OrphanagesHero from "../components/OrphanagesHero";
import OrphanagesFilters from "../components/OrphanagesFilters";
import OrphanagesGallery from "../components/OrphanagesGallery";
import DonateCTA from "../components/DonateCTA";

const Orphanages = () => {
  return (
    <>
      {/* Navbar with profile + notification */}
      <Navbar />

      {/* Hero */}
      <OrphanagesHero />

      {/* Main Section */}
      <div className="container-fluid py-4 px-2 px-md-4 overflow-hidden">

        <div className="row g-3 mx-0">

          {/* Left Filters */}
          <div className="col-12 col-lg-3 px-2">

            <div
              className="sticky-lg-top"
              style={{
                top: "90px"
              }}
            >
              <OrphanagesFilters />
            </div>

          </div>

          {/* Right Orphanages */}
          <div className="col-12 col-lg-9 px-2 overflow-hidden">

            <OrphanagesGallery />

            {/* Bottom CTA */}
            <div className="mt-4">

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

export default Orphanages;