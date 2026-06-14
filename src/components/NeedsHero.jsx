import React from "react";
import heroImg from "../assets/donate-hero.png";

const NeedsHero = () => {
  return (
    <div className="bg-light border-bottom py-4 py-md-5">

      <div className="container px-3 px-md-4">

        <div className="row align-items-center g-4">

          {/* Left Content */}
          <div className="col-12 col-lg-6 text-center text-lg-start">

            <h1 className="fw-bold mb-2 display-6">
              I Want to Donate
            </h1>

            <h3 className="text-success fw-semibold mb-3 fs-4">
              Every contribution brings hope
              and changes lives.
            </h3>

            <p
              className="text-muted fs-6 mb-0 mx-auto mx-lg-0"
              style={{
                maxWidth: "600px"
              }}
            >
              Explore urgent needs of orphanages
              and support causes that create
              a real impact.
            </p>

          </div>

          {/* Right Image */}
          <div className="col-12 col-lg-6 text-center">

            <img
              src={heroImg}
              alt="donation"
              className="img-fluid"
              style={{
                maxHeight: "220px",
                objectFit: "contain"
              }}
            />

          </div>

        </div>

      </div>
    </div>
  );
};

export default NeedsHero;