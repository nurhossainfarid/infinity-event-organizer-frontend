// Dependencies
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Parallax } from "swiper";

// custom css
import "./Banner.css";

// background images
import Background1 from "../../../images/banner_bg1.jpg";
import Background2 from "../../../images/banner_bg2.jpg";
import Background3 from "../../../images/banner_bg3.jpg";
import Background4 from "../../../images/banner_bg4.jpg";
import Background5 from "../../../images/banner_bg5.jpg";
import Background6 from "../../../images/banner_bg6.jpg";
import Background8 from "../../../images/banner_bg7.jpg";
import Background7 from "../../../images/organization7-min.jpg";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';


const Banner = () => {
  return (
    <div className="banner-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        Parallax={true}
        modules={[Autoplay, Pagination, Parallax]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img className="w-full banner_img" src={Background1} alt="" />
          <div
            className="absolute lg:top-48 md:top-24 top-20 text-white lg:left-16 
          md:left-10 left-4 flex gap-20 banner_slide"
          >
            <Fade left cascade>
              <div className="slider-title p-5 w-1/2"> 
                <div
                  className="title md:text-2xl lg:text-4xl text-white"
                  data-swiper-parallax="-300"
                >
                  Infinity Event Organizer- এ আপনাকে স্বাগতম ।
                </div>
                <div
                  className="subtitle md:text-lg lg:text-2xl my-4 text-white"
                  data-swiper-parallax="-200"
                >
                  আপনার কষ্ট কমানো, সময় এবং টাকা বাচানোই আমাদের প্রধান উদ্দেশ্য
                </div>
                <div
                  className="text md:text-md lg:text-lg"
                  data-swiper-parallax="-100"
                >
                  <p>
                    আমাদের এই প্লাটফর্মে আমরা বাংলাদেশের সব অর্গানাইজার/সংস্থা
                    গুলোকে সাথে করছি যাতে আপনি আমাদের মাধ্যমে ঘরে বসে খুব
                    অল্পসময়ের মধ্যে সুলভ মূল্যে আপনার যে কোন অনুষ্ঠানের জন্য
                    সংস্থাগুলো বুকিং করতে পারেন বা খাবার অর্ডার দিতে পারে ।
                  </p>
                </div>
                <div className="mt-10 flex gap-10 justify-end ">
                  <Link to="/login">
                    <button
                      className="btn btn-outline bg-secondary text-white hover:bg-white 
                    lg:text-lg md:text-md border-none rounded-md hover:text-purple-600 normal-case ease-in 
                    duration-300 hover:rotate-6"
                    >
                      Join With Us
                    </button>
                  </Link>
                </div>
              </div>
            </Fade>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="w-full banner_img" src={Background2} alt="" />
          <div
            className="absolute w-1/2 lg:top-48 md:top-24 top-20 text-white lg:right-16 
          md:right-10 right-4"
          >
            <Fade right cascade>
              <div className="slider-title p-5">
                <div
                  className="title md:text-2xl lg:text-4xl text-xl font-bold text-white"
                  data-swiper-parallax="-300"
                >
                  বুকিং সেবা
                </div>
                <div
                  className="subtitle md:text-lg lg:text-2xl my-4 text-white"
                  data-swiper-parallax="-200"
                >
                  তৈরিকৃত প্যাকেজ অথবা নতুন প্যাকেজ তৈরি করে বুকিং
                </div>
                <div
                  className="text md:text-md lg:text-lg"
                  data-swiper-parallax="-100"
                >
                  <p>
                    আমাদের প্ল্যাটফর্ম এর মাধ্যমে আপনি আপনার অনুষ্ঠানের ধরন
                    (বিয়ে, জন্মদিন, কর্পোরেট পার্টি,প্রাইভেট পার্টি ইত্যাদি)
                    অনুযায়ী আপনার পছন্দের যে কোন সংস্থা থেকে ওদের তৈরিকৃত প্যাকেজ
                    বুকিং দিতে পারেন। অথবা আপনি আপনার পছন্দ ও চাহিদা অনুযায়ী নতুন
                    প্যাকেজ তৈরি করে বুকিং দিতে পারে। এছাড়াও চাইলে আপনি বিভিন্ন
                    অরগানাইজেশন বা সংস্থার প্যাকেজ গুলোর মধ্যে তুলনা করতে পারেন।
                  </p>
                </div>
                <div
                  className="md:mt-4 mt-2 lg:mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-3 gap-2 
                md:gap-3"
                >
                  <Link
                    to="/dashboard/createCustomPackage"
                    className="btn btn-outline border-none 
                  bg-secondary text-white 
                  hover:bg-white 
                  lg:text-lg md:text-md text-sm hover:text-purple-600 normal-case ease-in duration-300 
                  hover:rotate-6"
                  >
                    Custom Package
                  </Link>
                  <Link
                    to="/packages"
                    className="btn btn-outline border-none bg-secondary text-white 
                  hover:bg-white 
                  lg:text-lg md:text-md hover:text-purple-600 normal-case ease-in duration-300 
                  hover:rotate-6"
                  >
                    Booking
                  </Link>
                  <Link
                    to="/packages/comparePackage"
                    className="btn btn-outline border-none bg-secondary 
                  text-white hover:bg-white 
                  lg:text-lg md:text-md hover:text-purple-600 normal-case ease-in duration-300 
                  hover:rotate-6"
                  >
                    Comfare Packages
                  </Link>
                </div>
              </div>
            </Fade>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="w-full banner_img" src={Background6} alt="" />
          <div
            className="absolute w-1/2 lg:top-48 md:top-24 top-20 text-white lg:left-16 
             md:left-10 left-4 flex flex-col md:flex-row gap-20"
          >
            <Fade left cascade>
              <div className="slider-title p-5">
                <div>
                  <div
                    className="title md:text-2xl lg:text-4xl text-white"
                    data-swiper-parallax="-300"
                  >
                    অর্ডার পদ্ধতি
                  </div>
                  <div
                    className="subtitle md:text-lg lg:text-2xl my-4 text-white"
                    data-swiper-parallax="-200"
                  >
                    যেকোনো ধরনের অনুষ্ঠানের জন্য খাবার অর্ডার
                  </div>
                  <div
                    className="text md:text-md lg:text-lg"
                    data-swiper-parallax="-100"
                  >
                    <p>
                      আমাদের মাধ্যমে আপনি চাইলে যেকোন জায়গায় বসে আপনার যেকোন ধরনের
                      অনুষ্ঠানের জন্য খাবার অর্ডার করতে পারেন আপনার পছন্দের
                      অরগানাইজেশন বা সংস্থা থেকে। এখানে আপনি সংস্থা বা অরগানাইজেশন
                      গুলোর তৈরিকৃত খাবারের প্যাকেজ অর্ডার করতে পারেন অথবা আপনি
                      চাইলে আপনার চাহিদা অনুযায়ী নতুন করে খাবারের প্যাকেজ তৈরি করে
                      অর্ডার করতে পারেন।
                    </p>
                  </div>
                  <div className="lg:mt-10 md:mt-4 mt-2 flex gap-4 justify-end ">
                    <button
                      className="btn btn-outline bg-secondary text-white hover:bg-white 
                    text-sm md:text-md lg:text-lg border-none hover:text-purple-600 normal-case ease-in 
                    duration-300 
                    hover:rotate-6 "
                    >
                      Custom Order
                    </button>
                    <button
                      className="btn btn-outline bg-secondary text-white hover:bg-white 
                    text-sm md:text-md lg:text-lg border-none rounded-md hover:text-purple-600 normal-case 
                    ease-in
                    duration-300 hover:rotate-6"
                    >
                      Order
                    </button>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
