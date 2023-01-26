import React, { useEffect, useState } from "react";
import { FaAddressCard, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

import img from "../../images/organization6-min.jpg";

// custom css
import "./Organizers.css";

const Organizers = () => {
  const [organizationData, setOrganizationData] = useState([]);
  const navigate = useNavigate();

  const navigateOrganizer = (oId) => {
    navigate(`/organizerDetails/${oId}`)
  }

  useEffect(() => {
    const url =
      "https://infinity-event-organizer-backend.vercel.app/v1/organization";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrganizationData(data.data);
      });
  }, []);
  return (
    <div className="">
      {/* about background and header */}
      <div className="organizer-header-bg relative">
        <div className="absolute bg-black w-full h-full opacity-60"></div>
        <div className="relative py-40 flex flex-col justify-center items-center gap-3">
          <h1 className="text-5xl text-primary uppercase font-semibold">
            Organization
          </h1>
          <p className="text-primary text-md">Choose Your Best Organization</p>
        </div>
      </div>
      {/* show organizers */}
      <div className="bg-slate-100 py-16">
        <div className="mb-20">
          <h1 className="text-5xl text-secondary organizer-subtext text-center">
            Best Organizers in Bangladesh
          </h1>
          <p className="text-mg text-gray-600 pt-5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            repudiandae.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 mx-28">
          {organizationData.map((organizer) => (
            <div className="organizer-bg relative w-96">
              <div>
                <img className="h-full w-full" src={img} alt="" />
              </div>
              <div className="organizer-name bg-secondary text-white absolute z-10 w-full h-full bottom-0 left-0 text-center opacity-10">
                <h1 className="text-5xl font-bold mt-20">{organizer.name}</h1>
              </div>
              <div className="organizer-info bg-secondary text-white absolute z-10 w-full h-full top-0 left-0 ease-in duration-300 scale-50 hover:scale-100 rotate-0  hover:rotate-360 text-center">
                <span className="flex">
                  <span className="absolute inline-flex h-full w-full bg-gray-800 opacity-50"></span>
                </span>
                <h1 className="mt-10 text-3xl font-bold">{organizer.name}</h1>
                <ul className="text-white flex flex-col gap-1 justify-center items-start ml-8 my-5">
                  <li className="flex items-center gap-2">
                    <ImLocation2 className="text-red-600"></ImLocation2>
                    {organizer.address}
                  </li>
                  <li className="flex items-center gap-2">
                    <FaAddressCard className="text-red-600"></FaAddressCard>
                    Level 6, Tongi Diversion Rd, Dhaka 1229
                  </li>
                  <li className="flex items-center gap-2">
                    <FaPhoneAlt className="text-red-600"></FaPhoneAlt>
                    {organizer.contactNumber}
                  </li>
                  <li className="flex items-center gap-2">
                    <FaMailBulk className="text-red-600"></FaMailBulk>
                    {organizer.email}
                  </li>
                </ul>
                <div className="flex justify-center pb-16">
                  <button className="btn btn-primary hover:bg-purple-700 text-white text-md animate-pulse 
                  border-2 hover:border-purple-700 " 
                   onClick={() => navigateOrganizer(organizer?._id)}>
                    See Details..
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Organizers;
