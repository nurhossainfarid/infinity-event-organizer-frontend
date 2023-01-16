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

// import custom css
import "./service.css";

const Services = () => {
  return (
    <div>
      {/* about background and header */}
      <div className="about-bg relative">
        <div className="absolute bg-black w-full h-full opacity-60"></div>
        <div className="relative py-40 flex flex-col justify-center items-center gap-3">
          <h1 className="text-5xl text-primary uppercase font-semibold">
            Service
          </h1>
          <p className="text-primary text-md">What We Do</p>
        </div>
      </div>
      {/* About Present Up */}
      <div className="bg-slate-100">
        <h2 className="text-5xl text-secondary text-center pt-16 about-header ">
          {" "}
          The Event Management Specialists
        </h2>
        <p className="text-md text-center w-1/2 mt-5 mx-auto">
          From Wedding Functions to Birthday Parties or Corporate Events to
          Musical Functions, We offer full range of Events Management Services
          that scale to your needs & budget.
        </p>
        <div className="drawer-content flex flex-col py-10">
          <div className="w-full navbar">
            <div className="">
              <ul className="menu mx-28 p-4 overflow-y-auto text-primary flex flex-row gap-6 justify-center items-center">
                <AboutCustomLink
                  to="/services"
                  className="px-5 py-3 rounded-none text-lg font-semibold "
                >
                  Anniversaries
                </AboutCustomLink>
                <AboutCustomLink
                  to="/services/holidayParties"
                  className="px-5 py-3 rounded-none text-lg font-semibold "
                >
                  Holiday Parties
                </AboutCustomLink>
                <AboutCustomLink
                  to="/services/corporateFunction"
                  className="px-5 py-3 rounded-none text-lg font-semibold "
                >
                  Corporate Function
                </AboutCustomLink>
                <AboutCustomLink
                  to="/services/fashionConcert"
                  className="px-5 py-3 rounded-none text-lg font-semibold "
                >
                  Fashion Concert
                </AboutCustomLink>
                <AboutCustomLink
                  to="/services/conferencePlanning"
                  className="px-5 py-3 rounded-none text-lg font-semibold "
                >
                  Conference Planning
                </AboutCustomLink>
                <AboutCustomLink
                  to="/services/stageDecoration"
                  className="px-5 py-3 rounded-none text-lg font-semibold "
                >
                  Stage Decorations
                </AboutCustomLink>
              </ul>
            </div>
          </div>
          <div className="drawer-content bg-slate-100 flex flex-col px-10">
            <Outlet />
          </div>
        </div>
        <div className="bg-slate-100">
          <div className="service-bg relative mt-10">
            <div className="absolute bg-black w-full h-full opacity-60"></div>
            <div className="relative py-20">
              <h1 className="text-5xl text-primary text-center">
                Great Service
              </h1>
              <p className="text-slate-100 text-md w-1/2 mx-auto text-center mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium saepe esse facilis quibusdam optio. Incidunt quas
                molestiae veritatis nihil ratione.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-10 gap-y-20 py-20 mx-28">
            <div className="flex flex-col items-center bg-primary py-10 hover:bg-secondary ease-in duration-300 hover:text-primary">
              <div className="border-4 border-pink-500 icon-div flex justify-center items-center hover:bg-primary hover:text-primary">
                <MdOutlineInsertInvitation className="text-6xl text-pink-500"></MdOutlineInsertInvitation>
              </div>
              <h1 className="text-2xl font-semibold mt-5">Invitation Card</h1>
              <p className="text-center mt-2 mx-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                non.
              </p>
            </div>
            <div className="flex flex-col items-center bg-primary py-10 hover:bg-secondary ease-in duration-300 hover:text-primary">
              <div className="border-4 border-pink-500 icon-div flex justify-center items-center hover:bg-primary hover:text-primary">
                <MdOutlineCelebration className="text-6xl text-pink-500"></MdOutlineCelebration>
              </div>
              <h1 className="text-2xl font-semibold mt-5">Floral</h1>
              <p className="text-center mt-2 mx-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                non.
              </p>
            </div>
            <div className="flex flex-col items-center bg-primary py-10 hover:bg-secondary ease-in duration-300 hover:text-primary">
              <div className="border-4 border-pink-500 icon-div flex justify-center items-center hover:bg-primary hover:text-primary">
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
            <div className="flex flex-col items-center bg-primary py-10 hover:bg-secondary ease-in duration-300 hover:text-primary">
              <div className="border-4 border-pink-500 icon-div flex justify-center items-center hover:bg-primary hover:text-primary">
                <FaPeopleCarry className="text-6xl text-pink-500"></FaPeopleCarry>
              </div>
              <h1 className="text-2xl font-semibold mt-5">Entertainment</h1>
              <p className="text-center mt-2 mx-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                non.
              </p>
            </div>
            <div className="flex flex-col items-center bg-primary py-10 hover:bg-secondary ease-in duration-300 hover:text-primary">
              <div className="border-4 border-pink-500 icon-div flex justify-center items-center hover:bg-primary hover:text-primary">
                <MdOutlineInsertInvitation className="text-6xl text-pink-500"></MdOutlineInsertInvitation>
              </div>
              <h1 className="text-2xl font-semibold mt-5">Invitation</h1>
              <p className="text-center mt-2 mx-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                non.
              </p>
            </div>
            <div className="flex flex-col items-center bg-primary py-10 hover:bg-secondary ease-in duration-300 hover:text-primary">
              <div className="border-4 border-pink-500 icon-div flex justify-center items-center hover:bg-primary hover:text-primary">
                <GiStairsCake className="text-6xl text-pink-500"></GiStairsCake>
              </div>
              <h1 className="text-2xl font-semibold mt-5">Wedding Cakes</h1>
              <p className="text-center mt-2 mx-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                non.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
