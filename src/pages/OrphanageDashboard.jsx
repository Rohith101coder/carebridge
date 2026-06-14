import React, { useState, useEffect } from "react";
import OrphanageSidebar from "../components/OrphanageSidebar";
import OrphanageHeader from "../components/OrphanageHeader";
import OrphanageStats from "../components/OrphanageStats";
import ActiveNeeds from "../components/ActiveNeeds";
import UpcomingVisits from "../components/UpcomingVisits";
import RecentDonations from "../components/RecentDonations";
import RecentActivity from "../components/RecentActivity";
import Messages from "../components/Messages";
import Footer from "../components/Footer";

const OrphanageDashboard = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;

      setIsMobile(mobile);

      if (mobile) {
        setShowSidebar(false);
      } else {
        setShowSidebar(true);
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
            <OrphanageSidebar />
          </div>
        )}

        {/* Mobile Overlay */}
        {isMobile && showSidebar && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{
              backgroundColor:
                "rgba(0,0,0,0.4)",
              zIndex: 1040
            }}
            onClick={toggleSidebar}
          />
        )}

        {/* Main Content */}
        <div className="flex-grow-1 p-4 bg-light">

          <OrphanageHeader
            isMobile={isMobile}
            toggleSidebar={toggleSidebar}
            showSidebar={showSidebar}
          />

          <h2 className="fw-bold">
            Welcome back, Hope Children Home!
          </h2>

          <p className="text-muted">
            Manage your needs and donations.
          </p>

          <OrphanageStats />

          {/* Row 1 */}
          <div className="row g-4 mb-4">
            <div className="col-lg-4">
              <ActiveNeeds />
            </div>

            <div className="col-lg-4">
              <UpcomingVisits />
            </div>

            <div className="col-lg-4">
              <RecentDonations />
            </div>
          </div>

          {/* Row 2 */}
          <div className="row g-4">
            <div className="col-lg-8">
              <RecentActivity />
            </div>

            <div className="col-lg-4">
              <Messages />
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default OrphanageDashboard;