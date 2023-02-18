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

// custom css
import "./Events.css";

// background images
import event1 from "../../../images/birthday_events.jpg";
import event3 from "../../../images/corporate_event.jpg";
import event5 from "../../../images/holiday_events.jpg";
import event4 from "../../../images/private_party_events.jpg";
import event6 from "../../../images/socail_events.jpg";
import event2 from "../../../images/wedding_events.jpg";

const Events = () => {
  return (
    <div className="bg-img relative">
      <div className="absolute bg-black w-full h-full opacity-60"></div>
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
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
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
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
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
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
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
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
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
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
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
                    Social Party
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
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
                <button className="border-2 py-2 read-btn btn-outline hover:btn-outline-0 btn-secondary md:w-1/3 
                w-1/2 text-center rounded-md font-semibold ease-in duration-300 hover:rotate-6 animate-pulse">
                  View More....
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
