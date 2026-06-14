import React from "react";
import heroImg from "../assets/donate-hero.png";

const OrphanagesHero = () => {
  return (
    <div className="bg-light border-bottom py-4 py-md-5 overflow-hidden">

      <div className="container-fluid px-3 px-md-4">

        <div className="row align-items-center g-4">

          {/* Left */}
          <div className="col-12 col-lg-6 text-center text-lg-start">

            <h1 className="fw-bold display-5 mb-2">
              Support Orphanages
            </h1>

            <h2 className="text-success fw-bold mb-3">
              Change Lives
            </h2>

            <p
              className="text-muted fs-5 mb-0"
              style={{
                maxWidth: "600px"
              }}
            >
              Your support helps orphanages
              provide a safe home, education,
              and a brighter future for children.
            </p>

          </div>

          {/* Right */}
          <div className="col-12 col-lg-6 text-center">

            <img
              src={heroImg}
              alt="hero"
              className="img-fluid"
              style={{
                maxHeight: "280px",
                objectFit: "contain"
              }}
            />

          </div>

        </div>

      </div>

    </div>
  );
};

export default OrphanagesHero;