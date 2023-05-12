import React from "react";
import { Outlet } from "react-router-dom";
import AboutCustomLink from "../About/AboutCustomLink";

// reveal animation
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';

// custom css
import "./Packages.css";

const Packages = () => {

  return (
    <div className=" bg-slate-100 pb-10">
      {/* Packages background and header */}
      <div className="packages-bg relative">
        <div className="absolute bg-black w-full h-full opacity-60"></div>
        <div className="relative py-28 flex flex-col justify-center items-center gap-3">
          <h1 className="text-5xl text-white uppercase font-semibold">
            <Bounce top cascade>
              Packages
            </Bounce>
          </h1>
          <p className="text-white text-md">What Do You Want!</p>
        </div>
      </div>
      <div>
        <h1 className="text-5xl text-center py-5">
          <Flip left cascade>
            All Packages Here
          </Flip>
        </h1>
      </div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content bg-slate-100 flex flex-col pt-16 px-10">
          <Outlet />
        </div>
        <div className="drawer-side mt-10">
          <label for="dashboard-sidebar" className="drawer-overlay"></label>
          <Slide left cascade>
            <ul className="menu pt-5 overflow-y-auto w-80 text-white ml-28 flex flex-col justify-center 
            items-center bg-pink-500">
              {/* <!-- Sidebar content here --> */}
              <li>
                <AboutCustomLink
                  className="py-3 rounded-none text-lg font-semibold about-custom-button"
                  to="/packages"
                >
                  Wedding
                </AboutCustomLink>
              </li>
              <li>
                <AboutCustomLink
                  className="py-3 rounded-none text-lg font-semibold about-custom-button"
                  to="/packages/birthdayParties"
                >
                  Birthday Parties
                </AboutCustomLink>
              </li>
              <li>
                <AboutCustomLink
                  className="py-3 rounded-none text-lg font-semibold about-custom-button"
                  to="/packages/holidayPartiesPackages"
                >
                  Holiday Parties
                </AboutCustomLink>
              </li>
              <li>
                <AboutCustomLink
                  className="py-3 rounded-none text-lg font-semibold about-custom-button"
                  to="/packages/privateParties"
                >
                  Private Parties
                </AboutCustomLink>
              </li>
              <li>
                <AboutCustomLink
                  className="py-3 rounded-none text-lg font-semibold about-custom-button"
                  to="/packages/corporateFunction"
                >
                  Corporate Function
                </AboutCustomLink>
              </li>
              <li>
                <AboutCustomLink
                  className="px-10 py-3 rounded-none text-lg font-semibold about-custom-button"
                  to="/packages/concerts"
                >
                  Concerts
                </AboutCustomLink>
              </li>
              <li>
                <AboutCustomLink
                  className="px-10 py-3 rounded-none text-lg font-semibold about-custom-button"
                  to="/packages/anniversariesPackages"
                >
                  Anniversaries
                </AboutCustomLink>
              </li>
              <li>
                <AboutCustomLink
                  className="py-3 rounded-none text-lg font-semibold about-custom-button"
                  to="/packages/comparePackage"
                >
                  Compare Package
                </AboutCustomLink>
              </li>
            </ul>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Packages;
