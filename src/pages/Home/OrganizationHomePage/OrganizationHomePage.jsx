import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

// import react icons
import { FaAddressCard, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

// images import
import img1 from "../../../images/Organization1-min.jpg";

// custom css
import { Link, useNavigate } from "react-router-dom";
import "./OrganizationHomePage.css";

const OrganizationHomePage = () => {
  const [organizationData, setOrganizationData] = useState([]);
  const navigate = useNavigate();

  const navigateOrganizer = (oId) => {
    navigate(`/organizerDetails/${oId}`);
  };
  useEffect(() => {
    const url = `https://event-api.nurhossainfarid.com/v1/organization`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrganizationData(data.data);
      });
  }, []);
  return (
    <div className=" bg-slate-100">
      <div className="md:py-16 lg:py-24 md:mx-10 lg:mx-28">
        <section className="py-5 lg:py-8 organizer-text-bg rounded-lg">
          <div className="md:mx-4 lg:mx-28 text-center">
            <p className="font-semibold text-red-600 pb-3">
              Choose Best Organizers
            </p>
            <h1 className="organizers-header text-white text-3xl md:text-4xl lg:text-5xl animate-bounce">
              Organizers in BD
            </h1>
            <p className="text-md lg:text-lg text-gray-200 mx-auto pt-3 lg:pt-5">
              এখানে পাচ্ছেন বাংলাদেশের সব ধরনের অর্গানাইজার গুলোকে। যেখান থেকে
              আপনি চাইলে আপনার পছন্দ অনুযায়ী অর্গানাইজারের প্যাকেজগুলো বুকিং
              করতে পারেন অথবা কাস্টম ভাবে তৈরি করতে পারেন। এছাড়াও আপনি চাইলে
              আপনার অনুষ্ঠানের জন্য খাবার ও সাজসজ্জা জন্য ওডার করতে পারবেন।
            </p>
          </div>
        </section>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper mt-20"
        >
          {organizationData
            .map((organizer) => (
              <SwiperSlide className="organization-bg w-96">
                <div className="relative w-full h-full">
                  <img className="h-full w-full" src={img1} alt="" />
                </div>
                <div
                  className="organization-name bg-secondary text-white absolute z-20 w-full h-full bottom-0 left-0 
             text-center opacity-10"
                >
                  <h1 className="text-5xl font-bold mt-20 ">
                    {organizer.name}
                  </h1>
                </div>
                <div
                  className="organization-info bg-secondary text-white absolute z-40 w-full h-full top-0 left-0 
             ease-in duration-300 scale-50 hover:scale-100 rotate-0 hover:rotate-360 text-center"
                >
                  <h1 className="mt-10 text-3xl font-bold">{organizer.name}</h1>
                  <ul className="text-white flex flex-col gap-1 justify-center items-start ml-8 my-5">
                    <li className="flex items-center gap-2">
                      <ImLocation2 className="text-red-600"></ImLocation2>Dhaka
                      Regency Hotel & Resort
                    </li>
                    <li className="flex items-center gap-2">
                      <FaAddressCard className="text-red-600"></FaAddressCard>
                      {organizer.address}
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
                    <Link
                      className="btn btn-white text-secondary text-md border-2"
                      onClick={() => navigateOrganizer(organizer?._id)}
                    >
                      See Details..
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))
            .slice(0, 9)}
        </Swiper>
        <div className="flex justify-center mt-20">
          <Link
            to={"/organizers"}
            className="border-2 rounded-lg border-purple-600 text-purple-600 p-2 text-xl font-semibold 
           hover:bg-purple-600 hover:text-white ease-out duration-150"
          >
            View All !!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrganizationHomePage;
