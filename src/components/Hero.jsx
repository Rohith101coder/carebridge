import React from "react";
import slider from "../assets/banner.png";
import './Hero.css';

const Hero = () => {
  return (
    <section className=" bg-light">
      <div className="container-fluid ps-5  text-center bg-white ">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-6">
            <h1 className="fw-bold display-5">
              Connect Donors with Orphanages
            </h1>

            <p className="text-muted my-4">
              Help orphanages by donating food, clothes, books,
              and supporting events.
            </p>

            <div className="d-flex gap-3 justify-content-center">
              <button className="btn btn-success">
                Donate Now
              </button>

              <button className="btn btn-outline-success">
                Learn More
              </button>
            </div>
          </div>
{/* Right Image */}
<div className="col-lg-6 position-relative text-center">
  
  {/* Left shadow overlay */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100px",
      height: "100%",
      background:
        "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))",
      zIndex: 1
    }}
  ></div>

  <img
    src={slider}
    alt="hero"
    className="img-fluid rounded shadow w-100"
    style={{
      maxHeight: "500px",
      objectFit: "cover"
    }}
  />
</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;