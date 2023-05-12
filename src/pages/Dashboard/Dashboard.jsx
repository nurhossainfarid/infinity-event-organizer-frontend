import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useUserRole from "../share/CustomHooks/useUserRole";

// import custom css
import "./Dashboard.css";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [userRole] = useUserRole(user);
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content bg-slate-100 flex flex-col pt-20 px-1 md:px-5">
          <div className="flex">
            <label
              for="dashboard-sidebar"
              tabindex="1"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <h2 className="text-md md:text-3xl text-secondary font-bold">
              <span className="uppercase text-center">
                Welcome To {userRole?.role}
              </span>{" "}
              DashBoard
            </h2>
          </div>
          <Outlet />
        </div>
        <div className="drawer-side mt-16">
          <label for="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu md:p-4 overflow-y-auto w-1/2 md:w-64 bg-secondary text-white">
            <label
              htmlFor="dashboard-sidebar"
              className="btn btn-sm btn-circle absolute right-2 
            top-2 md:hidden"
            >
              ✕
            </label>
            {/* <!-- Sidebar content here --> */}
            {userRole?.role === "super admin" && (
              <>
                <li className="mr-16">
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
                  <Link to="/dashboard/handleClientFeedBack">
                    Client FeedBack
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/createPackage">Add Package</Link>
                </li>
                <li>
                  <Link to="/dashboard/createOrganization">Add Organizer</Link>
                </li>
              </>
            )}
            {userRole?.role === "organizeradmin" && (
              <>
                <li>
                  <Link to="/dashboard/organizerAdminBookingHistory">
                    Booking History
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/organizerAdminPackage">Package</Link>
                </li>
                <li>
                  <Link to="/dashboard/organizerAdminClientFeedback">
                    Client FeedBack
                  </Link>
                </li>
              </>
            )}
            {userRole?.role === "user" && (
              <>
                <li>
                  <Link to="/dashboard/userBookingHistory">
                    Booking History
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/feedbackHistory">
                    Feedback History
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/createCustomPackage">
                    Create Custom Package
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
