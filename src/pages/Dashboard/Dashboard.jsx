import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useUserRole from "../share/CustomHooks/useUserRole";

// import custom css
import "./Dashboard.css";

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [userRole] = useUserRole(user)
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content bg-slate-100 flex flex-col pt-20 px-5">
          <h2 className="text-3xl text-secondary font-bold">
            <span className="uppercase text-center">Welcome To {userRole?.role}</span> DashBoard
          </h2>
          <Outlet />
        </div>
        <div className="drawer-side mt-16">
          <label for="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-secondary text-primary">
            {/* <!-- Sidebar content here --> */}
            {
              userRole?.role === 'super admin' && <>
                <li>
                  <Link to="/dashboard/allPackage">All Package</Link>
                </li>
                <li>
                  <Link to="/dashboard/handleOrganizer">Organizer</Link>
                </li>
                <li>
                  <Link to="/dashboard/bookingHistory">Booking History</Link>
                </li>
                <li>
                  <Link to="/dashboard/handleUser">User</Link>
                </li>
                <li>
                  <Link to="/dashboard/handleClientFeedBack">Client FeedBack</Link>
                </li>
                <li>
                  <Link to="/dashboard/createPackage">Add Package</Link>
                </li>
                <li>
                  <Link to="/dashboard/createOrganization">Add Organizer</Link>
                </li>
              </>
            }
            {
              userRole?.role === 'organizeradmin' && <>
                <li><Link to="/dashboard/organizerAdminBookingHistory">Booking History</Link></li>
                <li><Link to="/dashboard/organizerAdminPackage">Package</Link></li>
                <li><Link to="/dashboard/organizerAdminClientFeedback">Client FeedBack</Link></li>
              </>
            }
            {
              userRole?.role === 'user' && <>
                <li><Link to="/dashboard/userBookingHistory">Booking History</Link></li>
                <li><Link to="/dashboard/createCustomPackage">Create Custom Package</Link></li>
              </>
            }

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
