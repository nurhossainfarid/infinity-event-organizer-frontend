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
            Welcome to IEO Service
          </h1>
          <p className="text-primary text-md">What Do You Want</p>
        </div>
      </div>
      {/* About Present Up */}
      <div className="bg-slate-100">
        <div className="mx-6 md:mx-10 lg:mx-28 flex flex-col gap-5 pt-6 md:pt-10">
          <div className="" id="great_service">
            <h2 className="md:text-xl lg:text-2xl">Great Service</h2>
            <p>খুব অল্প সময়ের মধ্য আপনি খুঁজে পাবেন আপনার পছন্দের অরগানাইজার। কোনো রকম কষ্ট ও জামেলা ছাড়াই আপনি 
               আপনার যেকোনো অনুষ্ঠানের জন্য অর্গানাইজারের প্যাকেজগুলো বুক করতে পারবেন। আপনি চাইলে আপনার পছন্দের 
                প্যাকেজগুলোর মধ্য তুলনা করতে পারবেন। তুলনা করে আপনি আপনার পছন্দমতো প্যাকেজ বেঁচে নিতে পারবেন। 
                 এছাড়াও আপনি চাইলে আপনার ইভেন্টের  ছবিগুলো এবং ডিট্লেস আমাদের সাথে শেয়ার করতে পারবেন, যা আমরা 
                  আমাদের সাইটে প্রদর্শন করব এবং প্রত্যেক সপ্তাহে আমরা তিনজন কে বেঁচে নিবো এবং পুরস্কৃত করবো।</p>
          </div>
          <div id="great_food">
            <h2 className="md:text-xl lg:text-2xl">Great Food</h2>
            <p>ঘরে বসেই আপনি টেস্ট করতে পারেন আপনার পছন্দের যেকোনো ধরেন খাবার। আপনার অনুষ্ঠানের জন্য আপনার 
               পছন্দ মতো যেকোনো ধরনের খাবারের প্যাকেজ ওডার করতে পারবেন।  এছাড়াও চাইলে আপনি নিজের ইচ্ছা মতো 
                খাবারের প্যাকেজগুলো কাস্টমাইজড করতে পারবেন।  অথবা প্রতি জনের জন্য একটা নিদিষ্ট পরিমানের খাবার নিবাচন 
                 করতে পারবেন। এতে করে আপনার খাবারে অপচয় কম হবে এবং অতিরিক্ত টাকাও বেঁচে যাবে।</p>
          </div>
          <div id="great_ideas">
            <h2 className="md:text-xl lg:text-2xl">Great Ideas</h2>
            <p>আপনি আপনার পছন্দের যেকোনো অর্গানাইজারের থেকে আপনার অনুষ্ঠান সুন্দর করার জন্য বিভিন্ন আইডিয়া নিতে 
              পারেন এবং চাইলে আপনার আইডিয়া তাদের সাথে শেয়ার করে আপনার অনুষ্ঠান কে করতে পারেন আরো ঝাকঝমক। 
              আপনি আপনার ইচ্ছামত আপনার অনুষ্ঠানের সাজসজ্জা  করতে পারবেন, এতে আপনাকে অর্গানাইজার গুলো সর্বোচ্চ 
               সাহায্য করবে। আবার আপনি চাইলে আপনার বাড়ির  অনুষ্ঠানের সাজসজ্জা করার জন্য অর্গানাইজার গুলো বুক  করতে 
                পারবেন এবং আমাদের ব্লক সিস্টেমের মাধ্যমে আপনার আইডি এবং বুদ্ধিমত্তাকে অন্যদের মধ্যে ছড়িয়ে দিতে পারবেন।
                </p>
          </div>
          <div id="great_venues">
            <h2 className="md:text-xl lg:text-2xl">Perfect Venues</h2>
            <p>আপনার অনুষ্ঠানের ভেন্যুর জন্য, আপনি পাচ্ছেন বাংলাদেশের সব থেকে বেস্ট কোয়ালিটির অর্গানাইজার গুলো। তাই 
              আপনি আপনার অনুষ্ঠানের ধরণ অনুযায়ী বেঁচে নিতে পারেন পারফেক্ট ভেন্যু</p>
          </div>
          <div id="satisfaction">
            <h2 className="md:text-xl lg:text-2xl">Satisfaction</h2>
            <p>আপনার কাছে আছে বাংলাদেশের বেস্ট অর্গানাইজার গুলো এবং ওদের প্যাকেজগুলো। আপনি চাইলে আপনার নিজের 
               মত করে প্যাকেজ তৈরি করতে পারেন। এছাড়াও</p>
          </div>
          <div id="save_t_m">
            <h2 className="md:text-xl lg:text-2xl">Save Time & Money</h2>
            <p>খুব অল্প সময়ের মধ্যে আপনি পেয়ে যাচ্ছেন আপনার পছন্দের অর্গানাইজার গুলোর বেস্ট প্যাকেজ। এছাড়াও আপনি 
               চাইলে আপনার সাধ্যর মধ্যে প্যাকেজ বুকিং করতে পারেন এবং অন্যান্য অর্গানাইজারের প্যাকেজগুলোর</p>
          </div>
        </div>
        <div>
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
                <ul className="menu mx-28 p-4 overflow-y-auto text-primary flex flex-row gap-6 justify-center 
                items-center">
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
            <div className="flex flex-col items-center bg-primary py-10 hover:bg-secondary ease-in duration-300 
             hover:text-primary">
              <div className="border-4 border-pink-500 icon-div flex justify-center items-center hover:bg-primary 
               hover:text-primary">
                <MdOutlineInsertInvitation className="text-6xl text-pink-500"></MdOutlineInsertInvitation>
              </div>
              <h1 className="text-2xl font-semibold mt-5">Invitation Card</h1>
              <p className="text-center mt-2 mx-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                non.
              </p>
            </div>
            <div className="flex flex-col items-center bg-primary py-10 hover:bg-secondary ease-in duration-300 
             hover:text-primary">
              <div className="border-4 border-pink-500 icon-div flex justify-center items-center hover:bg-primary 
               hover:text-primary">
                <MdOutlineCelebration className="text-6xl text-pink-500"></MdOutlineCelebration>
              </div>
              <h1 className="text-2xl font-semibold mt-5">Floral</h1>
              <p className="text-center mt-2 mx-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                non.
              </p>
            </div>
            <div className="flex flex-col items-center bg-primary py-10 hover:bg-secondary ease-in duration-300 
             hover:text-primary">
              <div className="border-4 border-pink-500 icon-div flex justify-center items-center hover:bg-primary 
               hover:text-primary">
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
            <div className="flex flex-col items-center bg-primary py-10 hover:bg-secondary ease-in duration-300 
             hover:text-primary">
              <div className="border-4 border-pink-500 icon-div flex justify-center items-center hover:bg-primary 
               hover:text-primary">
                <FaPeopleCarry className="text-6xl text-pink-500"></FaPeopleCarry>
              </div>
              <h1 className="text-2xl font-semibold mt-5">Entertainment</h1>
              <p className="text-center mt-2 mx-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                non.
              </p>
            </div>
            <div className="flex flex-col items-center bg-primary py-10 hover:bg-secondary ease-in duration-300 
             hover:text-primary">
              <div className="border-4 border-pink-500 icon-div flex justify-center items-center hover:bg-primary 
               hover:text-primary">
                <MdOutlineInsertInvitation className="text-6xl text-pink-500"></MdOutlineInsertInvitation>
              </div>
              <h1 className="text-2xl font-semibold mt-5">Invitation</h1>
              <p className="text-center mt-2 mx-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                non.
              </p>
            </div>
            <div className="flex flex-col items-center bg-primary py-10 hover:bg-secondary ease-in duration-300 
             hover:text-primary">
              <div className="border-4 border-pink-500 icon-div flex justify-center items-center hover:bg-primary 
               hover:text-primary">
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
