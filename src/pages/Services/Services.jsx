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
          <h1 className="text-2xl md:text-5xl text-white uppercase font-semibold">
            Welcome to IEO Service
          </h1>
          <p className="text-white text-md">What Do You Want</p>
        </div>
      </div>
      {/* About Present Up */}
      <div className="bg-slate-100">
        <div className="mx-6 md:mx-10 lg:mx-28 flex flex-col gap-5 md:gap-10 pt-6 md:pt-10">
          <div
            className="flex flex-col gap-3 py-3 px-5 bg-purple-600 hover:bg-fuchsia-600 
          text-white ease-in-out duration-200"
            id="great_service"
          >
            <h2 className="text-2xl">Great Service</h2>
            <p className="text-sm md:text-base">
              খুব অল্প সময়ের মধ্য আপনি খুঁজে পাবেন আপনার পছন্দের অরগানাইজার।
              কোনো রকম কষ্ট ও জামেলা ছাড়াই আপনি আপনার যেকোনো অনুষ্ঠানের জন্য
              অর্গানাইজারের প্যাকেজগুলো বুক করতে পারবেন। আপনি চাইলে আপনার
              পছন্দের প্যাকেজগুলোর মধ্য তুলনা করতে পারবেন। তুলনা করে আপনি আপনার
              পছন্দমতো প্যাকেজ বেঁচে নিতে পারবেন। এছাড়াও আপনি চাইলে আপনার
              ইভেন্টের ছবিগুলো এবং ডিট্লেস আমাদের সাথে শেয়ার করতে পারবেন, যা
              আমরা আমাদের সাইটে প্রদর্শন করব এবং প্রত্যেক সপ্তাহে আমরা তিনজন কে
              বেঁচে নিবো এবং পুরস্কৃত করবো।
            </p>
          </div>
          <div
            className="flex flex-col gap-3 py-3 px-5 bg-purple-600 hover:bg-fuchsia-600 
          text-white ease-in-out duration-200"
            id="great_food"
          >
            <h2 className="text-2xl">Great Food</h2>
            <p className="text-sm md:text-base">
              ঘরে বসেই আপনি টেস্ট করতে পারেন আপনার পছন্দের যেকোনো ধরেন খাবার।
              আপনার অনুষ্ঠানের জন্য আপনার পছন্দ মতো যেকোনো ধরনের খাবারের প্যাকেজ
              ওডার করতে পারবেন। এছাড়াও চাইলে আপনি নিজের ইচ্ছা মতো খাবারের
              প্যাকেজগুলো কাস্টমাইজড করতে পারবেন। অথবা প্রতি জনের জন্য একটা
              নিদিষ্ট পরিমানের খাবার নিবাচন করতে পারবেন। এতে করে আপনার খাবারে
              অপচয় কম হবে এবং অতিরিক্ত টাকাও বেঁচে যাবে।
            </p>
          </div>
          <div
            className="flex flex-col gap-3 py-3 px-5 bg-purple-600 hover:bg-fuchsia-600 
          text-white ease-in-out duration-200"
            id="great_ideas"
          >
            <h2 className="text-2xl">Great Ideas</h2>
            <p className="text-sm md:text-base">
              আপনি আপনার পছন্দের যেকোনো অর্গানাইজারের থেকে আপনার অনুষ্ঠান সুন্দর
              করার জন্য বিভিন্ন আইডিয়া নিতে পারেন এবং চাইলে আপনার আইডিয়া তাদের
              সাথে শেয়ার করে আপনার অনুষ্ঠান কে করতে পারেন আরো ঝাকঝমক। আপনি আপনার
              ইচ্ছামত আপনার অনুষ্ঠানের সাজসজ্জা করতে পারবেন, এতে আপনাকে
              অর্গানাইজার গুলো সর্বোচ্চ সাহায্য করবে। আবার আপনি চাইলে আপনার
              বাড়ির অনুষ্ঠানের সাজসজ্জা করার জন্য অর্গানাইজার গুলো বুক করতে
              পারবেন এবং আমাদের ব্লক সিস্টেমের মাধ্যমে আপনার আইডি এবং
              বুদ্ধিমত্তাকে অন্যদের মধ্যে ছড়িয়ে দিতে পারবেন।
            </p>
          </div>
          <div
            className="flex flex-col gap-3 py-3 px-5 bg-purple-600 hover:bg-fuchsia-600 
          text-white ease-in-out duration-200"
            id="great_venues"
          >
            <h2 className="text-2xl">Perfect Venues</h2>
            <p className="text-sm md:text-base">
              আপনার অনুষ্ঠানের ভেন্যুর জন্য, আপনি পাচ্ছেন বাংলাদেশের সব থেকে
              বেস্ট কোয়ালিটির অর্গানাইজার গুলো। তাই আপনি আপনার অনুষ্ঠানের ধরণ
              অনুযায়ী বেঁচে নিতে পারেন পারফেক্ট ভেন্যু
            </p>
          </div>
          <div
            className="flex flex-col gap-3 py-3 px-5 bg-purple-600 hover:bg-fuchsia-600 
          text-white ease-in-out duration-200"
            id="satisfaction"
          >
            <h2 className="text-2xl">Satisfaction</h2>
            <p className="text-sm md:text-base">
              আপনার কাছে আছে বাংলাদেশের বেস্ট অর্গানাইজার গুলো এবং ওদের
              প্যাকেজগুলো। আপনি চাইলে আপনার নিজের মত করে প্যাকেজ তৈরি করতে পারেন
              এবং প্যাকেজ গুলোর মধ্যে কম্পেয়ার করে সবচেয়ে বেস্ট প্যাকেজ বাছাই
              করতে পারে। এদিক থেকে অর্গানাইজার গুলো আপনাকে দিচ্ছে সম্পূর্ণ
              স্বাধীনতা। আপনি আপনার ইচ্ছামত আপনার ইভেন্টগুলো কে সাজাতে পারেন।
              এছাড়াও প্রতিনিয়ত আমাদের ব্লগ গুলো অনুসরণ করলে আপনি ইভেন্ট
              সম্পর্কে নতুন নতুন আইডিয়া পাবেন এবং আপনার এই ইভেন্টগুলোকে আরও
              সুন্দর করতে পারবেন। এবং প্রত্যেক সপ্তাহে আপনাদের জন্য থাকবে একটি
              পুরস্কারের ব্যবস্থা। আপনি আপনার ইভেন্টের ছবি গুলো আমাদের সাথে
              শেয়ার করে জিতে নিতে পারেন এই পুরস্কার গুলো। আপনাদের সন্তুষ্টি
              হচ্ছে আমাদের প্রধান উদ্দেশ্য
            </p>
          </div>
          <div
            className="flex flex-col gap-3 py-3 px-5 bg-purple-600 hover:bg-fuchsia-600 
          text-white ease-in-out duration-200"
            id="save_t_m"
          >
            <h2 className="text-2xl">Save Time & Money</h2>
            <p className="text-sm md:text-base">
              খুব অল্প সময়ের মধ্যে আপনি পেয়ে যাচ্ছেন আপনার পছন্দের অর্গানাইজার
              গুলোর বেস্ট প্যাকেজ। এছাড়াও আপনি চাইলে আপনার সাধ্যর মধ্যে প্যাকেজ
              বুকিং করতে পারেন এবং অন্যান্য অর্গানাইজারের প্যাকেজগুলোর মধ্যে
              তুলনা করে আপনার পছন্দের প্যাকেজ বেঁচে নিতে পারেন। এখন প্রশ্ন থেকে
              যায়, আমাদের প্ল্যাটফর্মের মাধ্যমে কিভাবে আপনার টাকা ও সময়
              বাঁচবে? <br /> প্রথমে বলতে চাই, আমাদের প্লাটফর্মের মাধ্যমে আপনি
              খুব সহজে বাংলাদেশের যেকোনো অর্গানাইজারের সাথে যোগাযোগ করতে পারবেন।
              এতে করে আপনাকে ফিজিক্যালি কোনো কষ্ট করতে হবে না এবং বাংলাদেশের সব
              থেকে বড় সমস্যা যানজটের সম্মুখী হতে হবে না, আপনি খুব সহজে যেকোনো
              অর্গানাইজারের সাথে আপনার ইভেন্টের বেপারে কথা বলতে পারবেন। <br />{" "}
              দ্বিতীয়ত, আপনি সব অর্গানাইজারের প্যাকেজগুলো ডিটেইলসে দেখতে পারবেন
              এবং চাইলে প্যাকেজগুলোর মধ্যে তুলনা করতে পারবেন। এতে করে আপনার জন্য
              পারফেক্ট প্যাকেজ বেছে নিতে পারবেন। কেউ আপনাকে ঠকাবে বা আপনি কারো
              কাছে ঠকবেন এর কোনো সম্বাবনা এই নাই। এইদিক থেকে আমরা আপনাকে
              নিশ্চয়তা দিতে পারি
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-5xl text-secondary text-center pt-16 about-header ">
            {" "}
            The Event Management Specialists
          </h2>
          <p className="text-md text-center lg:w-1/2 mt-2 md:mt-5 lg:mx-auto md:mx-10">
            From Wedding Functions to Birthday Parties or Corporate Events to
            Musical Functions, We offer full range of Events Management Services
            that scale to your needs & budget.
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
                    to="/services/fashionConcert"
                    className="px-2 md:px-5 py-1 md:py-3 rounded-none text-md md:text-lg font-semibold"
                  >
                    Fashion Concert
                  </AboutCustomLink>
                  <AboutCustomLink
                    to="/services/conferencePlanning"
                    className="px-2 md:px-5 py-1 md:py-3 rounded-none text-md md:text-lg font-semibold"
                  >
                    Conference Planning
                  </AboutCustomLink>
                  <AboutCustomLink
                    to="/services/stageDecoration"
                    className="px-2 md:px-5 py-1 md:py-3 rounded-none text-md md:text-lg font-semibold"
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
        </div>
        <div className="bg-slate-100">
          <div className="service-bg relative mt-10">
            <div className="absolute bg-black w-full h-full opacity-60"></div>
            <div className="relative py-20">
              <h1 className="text-5xl text-white text-center">Great Service</h1>
              <p className="text-slate-100 text-md mx-6 md:mx-10 lg:w-1/2 lg:mx-auto text-center mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium saepe esse facilis quibusdam optio. Incidunt quas
                molestiae veritatis nihil ratione.
              </p>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Services;
