import React, { useEffect, useState } from "react";
import { FaAddressCard, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

import img from "../../images/organization6-min.jpg";

// custom css
import "./Organizers.css";

const Organizers = () => {
  const [organizationData, setOrganizationData] = useState([]);
  const [orgCount, setOrgCount] = useState([]);
  let [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const navigate = useNavigate();

  const navigateOrganizer = (oId) => {
    navigate(`/organizerDetails/${oId}`);
  };
  useEffect(() => {
    const url = `http://localhost:5000/v1/organization/count`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrgCount(data.data);
      });
  }, []);
  const pagesCount = Math.ceil(orgCount / size);
  useEffect(() => {
    const url = `http://localhost:5000/v1/organization/?page=${
      page + 1
    }&limit=${size}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrganizationData(data.data);
      });
  }, [page, size]);

  return (
    <div className="">
      {/* about background and header */}
      <div className="organizer-header-bg relative">
        <div className="absolute bg-black w-full h-full opacity-60"></div>
        <div className="relative py-40 flex flex-col justify-center items-center gap-3">
          <h1 className="text-3xl md:text-5xl text-white uppercase font-semibold">
            Organization
          </h1>
          <p className="text-white text-sm md:text-md">
            Choose Your Best Organization
          </p>
        </div>
      </div>
      {/* show organizers */}
      <div className="bg-slate-100 py-10 md:py-16">
        <div className="mb-20">
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-secondary organizer-subtext text-center">
            Best Organizers in Bangladesh
          </h1>
          <p className="text-sm md:text-md text-gray-600 pt-5 text-center lg:w-2/3 mx-auto">
            এখানে পাচ্ছেন বাংলাদেশের সব ধরনের অর্গানাইজার গুলোকে। যেখান থেকে
            আপনি চাইলে আপনার পছন্দ অনুযায়ী অর্গানাইজারের প্যাকেজগুলো বুকিং করতে
            পারেন অথবা কাস্টম ভাবে তৈরি করতে পারেন। এছাড়াও আপনি চাইলে আপনার
            অনুষ্ঠানের জন্য খাবার ও সাজসজ্জা জন্য ওডার করতে পারবেন।
          </p>
        </div>
        <div className="flex justify-center mt-6 md:mt-16 lg:mt-32 gap-2 pagination mb-10 lg:mb-16">
          {page === 0 ? (
            <button className="btn" disabled>
              «
            </button>
          ) : (
            <button className="btn" onClick={() => setPage(page - 1)}>
              «
            </button>
          )}
          {[...Array(pagesCount).keys()].map((num) => (
            <>
              <button
                className={page === num ? "selected" : ""}
                onClick={() => setPage(num)}
              >
                {num + 1}
              </button>
            </>
          ))}
          {page === pagesCount - 1 ? (
            <button className="btn" disabled>
              »
            </button>
          ) : (
            <button className="btn" onClick={() => setPage(page + 1)}>
              »
            </button>
          )}
          <select onChange={(e) => setSize(e.target.value)}>
            <option value="5">5</option>
            <option value="10" selected>
              10
            </option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 mx-6 md:mx-10 lg:mx-28">
          {organizationData.map((organizer) => (
            <div className="organizer-bg relative lg:w-96">
              <div>
                <img className="" src={img} alt="" />
              </div>
              <div
                className="organizer-info bg-secondary text-white absolute z-10 w-full md:h-76 lg:h-full top-0 
               left-0 ease-in duration-300 scale-50 hover:scale-100 rotate-0 hover:rotate-360 text-center"
              >
                <span className="flex">
                  <span className="absolute inline-flex h-full w-full bg-gray-800 opacity-50"></span>
                </span>
                <ul className="text-white flex flex-col gap-1 justify-center items-start ml-8 my-5">
                  <li className="flex items-center gap-2 mt-10">
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
                  <button
                    className="btn btn-white text-purple-600 hover:bg-purple-700 hover:text-white text-md 
                   animate-pulse border-2 hover:border-purple-700 "
                    onClick={() => navigateOrganizer(organizer?._id)}
                  >
                    See Details..
                  </button>
                </div>
              </div>
              <h1
                className="text-xl lg:text-2xl mt-2 font-semibold text-purple-600 hover:text-fuchsia-600 
              ease-in duration-200 uppercase"
              >
                {organizer.name}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-16 lg:mt-32 gap-2 pagination mb-10 lg:mb-16">
          {page === 0 ? (
            <button className="btn" disabled>
              «
            </button>
          ) : (
            <button className="btn" onClick={() => setPage(page - 1)}>
              «
            </button>
          )}
          {[...Array(pagesCount).keys()].map((num) => (
            <>
              <button
                className={page === num ? "selected" : ""}
                onClick={() => setPage(num)}
              >
                {num + 1}
              </button>
            </>
          ))}
          {page === pagesCount - 1 ? (
            <button className="btn" disabled>
              »
            </button>
          ) : (
            <button className="btn" onClick={() => setPage(page + 1)}>
              »
            </button>
          )}
          <select onChange={(e) => setSize(e.target.value)}>
            <option value="5">5</option>
            <option value="10" selected>
              10
            </option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Organizers;
