import React from "react";
import { Outlet } from "react-router-dom";
import AboutCustomLink from "../About/AboutCustomLink";

// react icons
import { FaCameraRetro, FaPeopleCarry } from "react-icons/fa";
import { GiStairsCake } from "react-icons/gi";
import {
  MdOutlineCelebration,
  MdOutlineInsertInvitation,
} from "react-icons/md";

// reveal animation
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';
import Bounce from 'react-reveal/Bounce';


// import custom css
import "./service.css";

const Services = () => {
  return (
    <div>
      {/* about background and header */}
      <div className="about-bg relative">
        <div className="absolute bg-black w-full h-full opacity-60"></div>
        <div className="relative py-40 flex flex-col justify-center items-center gap-3">
          <h1 className="text-2xl md:text-5xl text-white  font-semibold">
            <Zoom cascade left>
              Welcome To Ieo Service
            </Zoom>
          </h1>
          <p className="text-white text-md">What Do You Want</p>
        </div>
      </div>
      {/* About Present Up */}
      <div className="bg-slate-100">
        <div>
          <h2 className="text-2xl text-purple-600 md:text-5xl text-center pt-16 
          about-header ">
            <Rotate cascade>
              The Event Management Specialists
            </Rotate>
          </h2>
          <p className="text-md text-center lg:w-1/2 mt-2 md:mt-5 lg:mx-auto md:mx-10">
            ওয়েডিং ফাংশন থেকে শুরু করে জন্মদিনের পার্টি বা কর্পোরেট ইভেন্ট থেকে মিউজিক্যাল ফাংশন পর্যন্ত, আমরা ইভেন্ট 
             ম্যানেজমেন্ট পরিষেবাগুলির সম্পূর্ণ পরিসীমা অফার করি যা আপনার প্রয়োজন এবং বাজেটের পরিমাপ করে।
          </p>
          <div className="drawer-content flex flex-col py-10">
            <div className="w-full navbar"> 
                <div className="">
                  <ul
                    className="menu md:mx-10 lg:mx-28 pt-5 md:p-4 overflow-y-auto text-white flex flex-row 
                  gap-x-3 md:gap-x-5 gap-y-5 md:gap-y-10 lg:gap-6 justify-center items-center"
                  >
                    <AboutCustomLink
                      to="/services"
                      className="px-2 md:px-5 py-1 md:py-3 rounded-none text-md md:text-lg font-semibold "
                    >
                      Anniversaries
                    </AboutCustomLink>
                    <AboutCustomLink
                      to="/services/serviceWedding"
                      className="px-2 md:px-5 py-1 md:py-3 rounded-none text-md md:text-lg font-semibold "
                    >
                      Wedding
                    </AboutCustomLink>
                    <AboutCustomLink
                      to="/services/holidayParties"
                      className="px-2 md:px-5 py-1 md:py-3 rounded-none text-md md:text-lg font-semibold"
                    >
                      Holiday Parties
                    </AboutCustomLink>
                    <AboutCustomLink
                      to="/services/corporateFunction"
                      className="px-2 md:px-5 py-1 md:py-3 rounded-none text-md md:text-lg font-semibold"
                    >
                      Corporate Function
                    </AboutCustomLink>
                    <AboutCustomLink
                      to="/services/privateParty"
                      className="px-2 md:px-5 py-1 md:py-3 rounded-none text-md md:text-lg font-semibold"
                    >
                      Private Function
                    </AboutCustomLink>
                    <AboutCustomLink
                      to="/services/birthdayParty"
                      className="px-2 md:px-5 py-1 md:py-3 rounded-none text-md md:text-lg font-semibold"
                    >
                      Birthday Party
                    </AboutCustomLink>
                  </ul>
                </div>
            </div>
            <div className="drawer-content bg-slate-100 flex flex-col px-10">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="bg-slate-100">
          <div className="service-bg relative mt-10">
            <div className="absolute bg-black w-full h-full opacity-60"></div>
            <div className="relative py-20">
              <h1 className="text-5xl text-white text-center">
              <Bounce bottom cascade> 
                Great Service
              </Bounce>
              </h1>
              <p className="text-slate-100 text-md mx-6 md:mx-10 lg:w-1/2 lg:mx-auto text-center mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium saepe esse facilis quibusdam optio. Incidunt quas
                molestiae veritatis nihil ratione.
              </p>
            </div>
          </div>
          <Zoom top cascade>
            <div
              className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-20 py-20 mx-6 md:mx-10 
            lg:mx-28"
            >
              <div
                className="flex flex-col items-center bg-white py-10 hover:bg-secondary ease-in duration-300 
              hover:text-white"
              >
                <div
                  className="border-4 border-pink-500 icon-div flex justify-center items-center hover:bg-white 
                hover:text-white"
                >
                  <MdOutlineInsertInvitation className="text-6xl text-pink-500"></MdOutlineInsertInvitation>
                </div>
                <h1 className="text-2xl font-semibold mt-5">Invitation Card</h1>
                <p className="text-center mt-2 mx-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  non.
                </p>
              </div>
              <div
                className="flex flex-col items-center bg-white py-10 hover:bg-secondary ease-in duration-300 
              hover:text-white"
              >
                <div
                  className="border-4 border-pink-500 icon-div flex justify-center items-center hover:bg-white 
                hover:text-white"
                >
                  <MdOutlineCelebration className="text-6xl text-pink-500"></MdOutlineCelebration>
                </div>
                <h1 className="text-2xl font-semibold mt-5">Floral</h1>
                <p className="text-center mt-2 mx-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  non.
                </p>
              </div>
              <div
                className="flex flex-col items-center bg-white py-10 hover:bg-secondary ease-in duration-300 
              hover:text-white"
              >
                <div
                  className="border-4 border-pink-500 icon-div flex justify-center items-center hover:bg-white 
                hover:text-white"
                >
                  <FaCameraRetro className="text-6xl text-pink-500"></FaCameraRetro>
                </div>
                <h1 className="text-2xl font-semibold mt-5">
                  Photo, Video & Audio
                </h1>
                <p className="text-center mt-2 mx-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  non.
                </p>
              </div>
              <div
                className="flex flex-col items-center bg-white py-10 hover:bg-secondary ease-in duration-300 
              hover:text-white"
              >
                <div
                  className="border-4 border-pink-500 icon-div flex justify-center items-center hover:bg-white 
                hover:text-white"
                >
                  <FaPeopleCarry className="text-6xl text-pink-500"></FaPeopleCarry>
                </div>
                <h1 className="text-2xl font-semibold mt-5">Entertainment</h1>
                <p className="text-center mt-2 mx-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  non.
                </p>
              </div>
              <div
                className="flex flex-col items-center bg-white py-10 hover:bg-secondary ease-in duration-300 
              hover:text-white"
              >
                <div
                  className="border-4 border-pink-500 icon-div flex justify-center items-center hover:bg-white 
                hover:text-white"
                >
                  <MdOutlineInsertInvitation className="text-6xl text-pink-500"></MdOutlineInsertInvitation>
                </div>
                <h1 className="text-2xl font-semibold mt-5">Invitation</h1>
                <p className="text-center mt-2 mx-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  non.
                </p>
              </div>
              <div
                className="flex flex-col items-center bg-white py-10 hover:bg-secondary ease-in duration-300 
              hover:text-white"
              >
                <div
                  className="border-4 border-pink-500 icon-div flex justify-center items-center hover:bg-white 
                hover:text-white"
                >
                  <GiStairsCake className="text-6xl text-pink-500"></GiStairsCake>
                </div>
                <h1 className="text-2xl font-semibold mt-5">Wedding Cakes</h1>
                <p className="text-center mt-2 mx-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  non.
                </p>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Services;
