import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { Autoplay, EffectCards } from "swiper";

// react front
import { BsCheckCircleFill } from "react-icons/bs";

// Reveal animation
import Rotate from 'react-reveal/Rotate';

// custom css
import "./Events.css";

// background images
import event1 from "../../../images/birthday_events.jpg";
import event3 from "../../../images/corporate_event.jpg";
import event5 from "../../../images/holiday_events.jpg";
import event4 from "../../../images/private_party_events.jpg";
import event6 from "../../../images/socail_events.jpg";
import event2 from "../../../images/wedding_events.jpg";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="bg-img relative">
      <div className="absolute bg-black w-full h-full opacity-60"></div>
      <Rotate top left cascade>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-16 lg:py-28 lg:mx-28 ">
          <section className="lg:w-3/5 md:w-1/2 w-2/3 mx-auto">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[EffectCards, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide className="relative">
                <div className="card md:w-96 w-full bg-base-100 shadow-xl slider-div">
                  <figure>
                    <img className="w-full" src={event1} alt="event" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      Birthday Party
                    </h2>
                    <p>সৃজনশীল জন্মদিন পরিকল্পনার মাধ্যমে স্মরণীয় অভিজ্ঞতা, আমরা ব্যবস্থা করি, আপনি উদযাপন করেন।</p>
                    <div className="card-actions justify-end">
                      <Link to={'/packages/birthdayParties'} className="btn btn-sm hover:btn-secondary">
                       See Packages
                      </Link>
                      <Link to={'/services/birthdayParty'} className="btn btn-sm hover:btn-secondary">
                        Read More...
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <div className="card md:w-96 w-full bg-base-100 shadow-xl slider-div">
                  <figure>
                    <img className="w-full" src={event2} alt="event" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      Wedding Party
                    </h2>
                    <p>বিবাহের প্রতিজ্ঞার আন্তরিক বিনিময় প্রায়ই একটি বিবাহ অনুষ্ঠানের সবচেয়ে স্মরণীয় অংশ। এটি দুই ব্যক্তির 
                       স্পষ্ট অঙ্গীকারের প্রতীক যারা তাদের জীবন একসাথে ভাগ করতে চায়।</p>
                    <div className="card-actions justify-end">
                      <Link to={'/packages'} className="btn btn-sm hover:btn-secondary">
                       See Packages
                      </Link>
                      <Link to={'/services/serviceWedding'} className="btn btn-sm hover:btn-secondary">
                        Read More...
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <div className="card md:w-96 w-full bg-base-100 shadow-xl slider-div">
                  <figure>
                    <img className="w-full" src={event3} alt="event" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      Corporate Party
                    </h2>
                    <p>একটি কর্পোরেট ডিনার হতে পারে একটি দুর্দান্ত, নৈমিত্তিক উপায়, আপনার দলকে একত্রিত করতে এবং তারা 
                       যে কাজটি করেছে তা উদযাপন করতে।</p>
                    <div className="card-actions justify-end">
                      <Link to={'/packages/corporateFunction'} className="btn btn-sm hover:btn-secondary">
                       See Packages
                      </Link>
                      <Link to={'/services/corporateFunction'} className="btn btn-sm hover:btn-secondary">
                        Read More...
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <div className="card md:w-96 w-full bg-base-100 shadow-xl slider-div">
                  <figure>
                    <img className="w-full" src={event4} alt="event" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      Private Party
                    </h2>
                    <p>আপনি যদি অন্যের মতো একটি পার্টি চান - অনন্য, সাহসী এবং অত্যন্ত বিনোদনমূলক, তাহলে আর 
                       তাকাবেন না।</p>
                    <div className="card-actions justify-end">
                      <Link to={'/packages/privateParties'} className="btn btn-sm hover:btn-secondary">
                       See Packages
                      </Link>
                      <Link to={'/services/privateParty'} className="btn btn-sm hover:btn-secondary">
                        Read More...
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <div className="card md:w-96 w-full bg-base-100 shadow-xl slider-div">
                  <figure>
                    <img className="w-full" src={event5} alt="event" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      Holiday Party
                    </h2>
                    <p>অফিস ছুটির পার্টি কখনও কখনও ভয়ঙ্কর হয়. এটিকে একটি দুর্দান্ত ইভেন্টে পরিণত করার জন্য একটি 
                       কোম্পানির সর্বোত্তম প্রচেষ্টা থাকা সত্ত্বেও, অনেকগুলি কেবল সাধারণ বিরক্তিকর বা ভয়ঙ্করভাবে ভুল হয়ে 
                        যায়৷</p>
                    <div className="card-actions justify-end">
                      <Link to={'/packages/holidayPartiesPackages'} className="btn btn-sm hover:btn-secondary">
                       See Packages
                      </Link>
                      <Link to={'/services/holidayParties'} className="btn btn-sm hover:btn-secondary">
                        Read More...
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <div className="card md:w-96 w-full bg-base-100 shadow-xl slider-div">
                  <figure>
                    <img className="w-full" src={event6} alt="event" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      Anniversary Party
                    </h2>
                    <p>একটি বার্ষিকী পার্টি একটি মাইলফলক চিহ্নিত করার একটি আদর্শ উপায়। এটি বন্ধু এবং পরিবারের সদস্যদের 
                       উদযাপনে অংশ নিতে দেয়।</p>
                    <div className="card-actions justify-end">
                      <Link to={'/packages/anniversariesPackages'} className="btn btn-sm hover:btn-secondary">
                       See Packages
                      </Link>
                      <Link to={'/services'} className="btn btn-sm hover:btn-secondary">
                        Read More...
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </section>
          <section className="">
            <div className="card md:w-3/4 w-11/12 mx-auto bg-base-100 shadow-xl bg-img2">
              <div className="absolute rounded-lg bg-purple-700 w-full h-full opacity-70"></div>
              <div className="card-body z-20 text-white">
                <h2 className="card-title md:text-5xl text-3xl event-planner">
                  The Best Event Planner
                </h2>
                <p className="my-3 text-lg">
                আমাদের আবেগ, জ্ঞান, সৃজনশীল ফ্লেয়ার এবং অনুপ্রেরণা সহ, আমরা আপনাকে অর্জন করতে সাহায্য করার জন্য 
                নিবেদিত।
                </p>
                <ul>
                  <li className="text-xl mb-2 fs-bold flex gap-2 items-center">
                    <BsCheckCircleFill className="text-red-600"></BsCheckCircleFill>
                    Wedding Cakes
                  </li>
                  <li className="text-xl mb-2 fs-bold flex gap-2 items-center">
                    <BsCheckCircleFill className="text-red-600"></BsCheckCircleFill>
                    Photo,Video
                  </li>
                  <li className="text-xl mb-2 fs-bold flex gap-2 items-center">
                    <BsCheckCircleFill className="text-red-600"></BsCheckCircleFill>
                    Venue Selections
                  </li>
                  <li className="text-xl mb-2 fs-bold flex gap-2 items-center">
                    <BsCheckCircleFill className="text-red-600"></BsCheckCircleFill>
                    Managing Your Guest List
                  </li>
                  <li className="text-xl mb-2 fs-bold flex gap-2 items-center">
                    <BsCheckCircleFill className="text-red-600"></BsCheckCircleFill>
                    Unforgatable Time
                  </li>
                  <li className="text-xl mb-2 fs-bold flex gap-2 items-center">
                    <BsCheckCircleFill className="text-red-600"></BsCheckCircleFill>
                    Venue finding
                  </li>
                </ul>
                <div className="flex justify-start mt-3">
                  <Link to={'/events'} className="border-2 py-2 read-btn btn-outline hover:btn-outline-0 
                  btn-secondary md:w-1/3 w-1/2 text-center rounded-md font-semibold ease-in duration-300 
                  hover:rotate-6 animate-pulse">
                    View More....
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Rotate>
    </div>
  );
};

export default Events;
