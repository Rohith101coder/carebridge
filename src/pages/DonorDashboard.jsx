import React, { useState, useEffect } from "react";
import DonorSidebar from "../components/DonorSidebar";
import DonorHeader from "../components/DonorHeader";
import DonorStats from "../components/DonorStats";
import UrgentNeeds from "../components/UrgentNeeds";
import UpcomingBookings from "../components/UpcomingBookings";
import RecentDonations from "../components/RecentDonations";
import ImpactSummary from "../components/ImpactSummary";
import Footer from "../components/Footer";

const DonorDashboard = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;

      setIsMobile(mobile);

      if (mobile) {
        setShowSidebar(false); // hide sidebar on mobile
      } else {
        setShowSidebar(true); // show sidebar on tablet/laptop
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setShowSidebar(!showSidebar);
    }
  };

  return (
    <>
      <div className="d-flex position-relative">

        {/* Sidebar */}
        {showSidebar && (
          <div
            className={`${
              isMobile ? "position-fixed" : ""
            } bg-white`}
            style={{
              width: "250px",
              height: "100vh",
              top: 0,
              left: 0,
              zIndex: 1050
            }}
          >
            <DonorSidebar />
          </div>
        )}

        {/* Mobile Overlay */}
        {isMobile && showSidebar && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{
              backgroundColor: "rgba(0,0,0,0.4)",
              zIndex: 1040
            }}
            onClick={toggleSidebar}
          />
        )}

        {/* Main Content */}
        <div
          className="flex-grow-1 p-4 bg-light"
          style={{
            marginLeft: !isMobile ? "0" : "0"
          }}
        >
          {/* Header */}
          <DonorHeader
            isMobile={isMobile}
            toggleSidebar={toggleSidebar}
            showSidebar={showSidebar}
          />

          {/* Welcome Section */}
          <h2 className="fw-bold">
            Welcome back, Vamshi!
          </h2>

          <p className="text-muted">
            Thank you for making the world a better place...!
          </p>

          {/* Stats */}
          <DonorStats />

          {/* Top Section */}
          <div className="row g-4 mb-4">
            <div className="col-lg-8">
              <UrgentNeeds />
            </div>

            <div className="col-lg-4">
              <UpcomingBookings />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="row g-4">
            <div className="col-lg-8">
              <RecentDonations />
            </div>

            <div className="col-lg-4">
              <ImpactSummary />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default DonorDashboard;