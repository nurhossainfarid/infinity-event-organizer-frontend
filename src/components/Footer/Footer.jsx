import React from "react";

// import images
import img1 from "../../images/party-plane.jpg";

// import react icons
import {
  FaDribbble,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import {
  MdLocationOn,
  MdOutlineEmail,
  MdOutlinePhoneInTalk,
} from "react-icons/md";

// reveal animation
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


// import custom css
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-bg relative">
      <div className="absolute bg-secondary w-full h-full opacity-70"></div>
      <div className="relative py-6 md:py-10 lg:py-20">
        <Zoom>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 pb-20 mx-6 md:mx-10 
          lg:mx-28"
          >
            <div>
              <h1 className="text-white text-3xl animate-pulse footer-header">
                Infinity Event Organizer
              </h1>
              <p className="text-slate-200 text-md mt-5">
                Infinity Event Organizer offers a web-based solution to the
                customers difficulties that saves time, minimize hassle, best
                service in his budget and get solution quickly.
              </p>
              {/* <div className="divider"></div>  */}
              <div className="w-full h-0.5 bg-gray-300 my-5 opacity-30"></div>
              <h1 className="text-xl text-white font-semibold">
                Booking Your Events!
              </h1>
            </div>
            <div>
              <h1 className="text-white text-2xl animate-pulse font-semibold mb-5">
                Get In Touch __
              </h1>
              <ul>
                <li className="flex gap-2 items-center">
                  <MdLocationOn className="text-red-700 text-4xl"></MdLocationOn>
                  <p className="text-md text-gray-300 hover:text-white ease-in duration-300 ">
                    Themeforest, Envanto HQ 24 Fifth st., Los Angeles, USA
                  </p>
                </li>
                <div className="w-full h-0.5 bg-gray-300 my-3 opacity-30"></div>
                <li className="flex gap-2 items-center">
                  <MdOutlineEmail className="text-red-700 text-2xl"></MdOutlineEmail>
                  <p className="text-md text-gray-300">
                    Email:{" "}
                    <span className="hover:text-white ease-in duration-300">
                      ieo7447@gmail.com
                    </span>
                  </p>
                </li>
                <div className="w-full h-0.5 bg-gray-300 my-3 opacity-30"></div>
                <li className="flex gap-2 items-center">
                  <MdOutlinePhoneInTalk className="text-red-700 text-2xl"></MdOutlinePhoneInTalk>
                  <p className="text-md text-gray-300">
                    Phone:{" "}
                    <span className="hover:text-white ease-in duration-300">
                      {" "}
                      +12 (3) 4567 899
                    </span>{" "}
                    <br /> Support:{" "}
                    <span className="hover:text-white ease-in duration-300">
                      +12 (3) 4567 445
                    </span>
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-white text-2xl animate-pulse font-semibold">
                Our Service __
              </h1>
              <ul className="mt-5 flex flex-col gap-2">
                <li className="text-gray-300 hover:text-white ease-out duration-300 text-lg">
                  - Wedding
                </li>
                <li className="text-gray-300 hover:text-white ease-out duration-300 text-lg">
                  - Parties / Concerts
                </li>
                <li className="text-gray-300 hover:text-white ease-out duration-300 text-lg">
                  - Events for Kids
                </li>
                <li className="text-gray-300 hover:text-white ease-out duration-300 text-lg">
                  - Lighting / Decor
                </li>
                <li className="text-gray-300 hover:text-white ease-out duration-300 text-lg">
                  - Public Event
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-white text-2xl animate-pulse font-semibold">
                Recent Post __
              </h1>
              <div className="flex flex-col gap-3 mt-5">
                <div className="flex gap-5">
                  <img src={img1} alt="" className="w-28" />
                  <div className="text-gray-300 hover:text-white">
                    <h1>5 Step Guide To Choosing Event</h1>
                    <p>SEP 4, 2022</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <img src={img1} alt="" className="w-28" />
                  <div className="text-gray-300 hover:text-white">
                    <h1>5 Steps To Planning A Sweet Party</h1>
                    <p>SEP 2, 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Zoom>
        <Fade bottom>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 mx-2 md:mx-6 md:w-4/5">
            <div
              className="py-6 flex flex-col  md:flex-row justify-center items-center gap-5 md:gpa-0 
            md:justify-around"
            >
              <div className="form-control">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Search…"
                    className="input input-bordered"
                  />
                  <button className="btn text-white hover:text-secondary hover:scale-105">
                    Subscribe Us
                  </button>
                </div>
              </div>
              <div>
                <ul className="flex gap-5">
                  <a
                    href="https://www.facebook.com/profile.php?id=100089942713091"
                    className="tooltip bg-white p-3 rounded-md hover:bg-secondary hover:text-white 
                    ease-in duration-300"
                    data-tip="Facebook"
                    target="_blank"
                  >
                    <FaFacebookF className="text-lg"></FaFacebookF>
                  </a>
                  <li
                    className="tooltip bg-white p-3 rounded-md hover:bg-secondary hover:text-white ease-in      
                    duration-300"
                    data-tip="Twitter"
                  >
                    <FaTwitter className="text-lg"></FaTwitter>
                  </li>
                  <li
                    className="tooltip bg-white p-3 rounded-md hover:bg-secondary hover:text-white ease-in 
                    duration-300"
                    data-tip="Dribble"
                  >
                    <FaDribbble className="text-lg"></FaDribbble>
                  </li>
                  <li
                    className="tooltip bg-white p-3 rounded-md hover:bg-secondary hover:text-white ease-in 
                    duration-300"
                    data-tip="Linked In"
                  >
                    <FaLinkedinIn className="text-lg"></FaLinkedinIn>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </footer>
  );
};

export default Footer;
