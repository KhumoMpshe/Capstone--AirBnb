import { Link, Outlet } from "react-router-dom";
import "./HostDashboard.css";

function HostDashboard() {
  return (
    <div className="host-dashboard">

      <aside className="dashboard-sidebar">

        <h2>Host Dashboard</h2>

        <nav>

          <Link to="/host/dashboard">
            Dashboard
          </Link>

          <Link to="/host/listings">
            My Listings
          </Link>

          <Link to="/host/add-listing">
            Add Listing
          </Link>

        </nav>

      </aside>

      <main className="dashboard-content">
        <Outlet />
      </main>

    </div>
  );
}

export default HostDashboard;