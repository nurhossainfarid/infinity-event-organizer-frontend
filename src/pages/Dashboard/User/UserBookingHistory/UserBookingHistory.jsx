import React from "react";
import { Outlet } from "react-router-dom";
import AboutCustomLink from "../../../About/AboutCustomLink";

const UserBookingHistory = () => {
  return (
    <div className="mt-5">
      <div className="drawer-content flex flex-col py-6 md:py-10">
          <div className="w-full navbar">
            <div className="">
              <ul
                className="menu p-4 overflow-y-auto text-white flex flex-row gap-y-5 md:gap-y-10 gap-6 
               justify-center 
              items-center md:mx-28"
              >
                <AboutCustomLink
                  to="/dashboard/userBookingHistory"
                  className="px-3 md:px-10 py-1 md:py-3 rounded-none text-md md:text-lg font-semibold 
                  about-custom-button"
                >
                  Random Package
                </AboutCustomLink>
                <AboutCustomLink
                  to="/dashboard/userBookingHistory/customPackage"
                  className="px-3 md:px-10 py-1 md:py-3 rounded-none text-md md:text-lg font-semibold 
                  about-custom-button"
                >
                  Custom Package
                </AboutCustomLink>
              </ul>
            </div>
          </div>
          <div className="drawer-content bg-slate-100 flex flex-col">
            <Outlet />
          </div>
        </div>
    </div>
  );
};

export default UserBookingHistory;
