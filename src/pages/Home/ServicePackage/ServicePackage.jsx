import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

// custom css
import "./ServicePackage.css";

// import images
import img1 from "../../../images/child_birthday_party.jpg";
import img2 from "../../../images/private_party_events.jpg";
import img3 from "../../../images/holiday_events.jpg";
import img4 from "../../../images/wedding.jpg";
import img5 from "../../../images/birthday_party.jpg";
import img6 from "../../../images/wedding2.jpg";
import img7 from "../../../images/party_night.jpg";
import img8 from "../../../images/wedding_events.jpg";
import { Link } from "react-router-dom";
const ServicePackage = () => {
  return (
    <div className="pt-10">
      {/* service */}
      <section>
        <div className="mx-4 md:mx-10 lg:mx-28">
          <div className="flex justify-between items-center gap-10">
            <div>
              <h1 className="md:text-5xl text-3xl event-planner font-bold lg:pt-5">
                Our Greatest Service
              </h1>
              <p className="text-md lg:text-lg lg:py-10 py-5">
                আপনার প্রয়োজন ভালো সেবা , আর আমাদের প্রধান উদ্দ্যেশই হচ্ছে
                কিভাবে আপনাকে সব থেকে ভালো সেবা দিতে পারি।
              </p>
            </div>
            <div className="lg:flex hidden">
              <button
                className="border-2 p-2 btn-outline btn-secondary rounded-sm text-lg 
                            font-semibold hover:text-white ease-in duration-300 animate-bounce"
              >
                More Service..
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 lg:absolute z-20 lg:mr-28">
            <div className="card bg-base-100 shadow-xl rounded-none">
              <figure>
                <img className="service-img" src={img1} alt="birthday" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl md:text-3xl fond-semibold">
                  Perfect Venues
                </h2>
                <p className="text-md md:text-lg">
                  আপনার অনুষ্ঠানের ভেন্যুর জন্য, আপনি পাচ্ছেন বাংলাদেশের সব থেকে
                  বেস্ট কোয়ালিটির অর্গানাইজার গুলো। তাই আপনি আপনার অনুষ্ঠানের
                  ধরণ অনুযায়ী বেঁচে নিতে পারেন পারফেক্ট ভেন্যু{" "}
                </p>
                <div className="card-actions justify-center">
                  <button
                    className="p-2 btn-outline btn-secondary rounded-sm text-lg 
                                font-semibold hover:text-white hover:scale-110 ease-out duration-300"
                  >
                    Read More..
                  </button>
                </div>
              </div>
            </div>
            <div className="card bg-slate-50 shadow-xl rounded-none">
              <figure>
                <img className="service-img" src={img2} alt="party" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl md:text-3xl fond-semibold">
                  Satisfaction
                </h2>
                <p className="text-md md:text-lg">
                  আপনার কাছে আছে বাংলাদেশের বেস্ট অর্গানাইজার গুলো এবং ওদের
                  প্যাকেজগুলো। আপনি চাইলে আপনার নিজের মত করে প্যাকেজ তৈরি করতে
                  পারেন। এছাড়াও....
                </p>
                <div className="card-actions justify-center">
                  <button
                    className="p-2 btn-outline btn-secondary rounded-sm text-lg font-semibold 
                                 hover:text-white hover:scale-110 ease-out duration-300"
                  >
                    Read More..
                  </button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl rounded-none">
              <figure>
                <img className="service-img" src={img3} alt="holiday" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl md:text-3xl fond-semibold">
                  Save Time & Money
                </h2>
                <p className="lg:text-lg text-md">
                  খুব অল্প সময়ের মধ্যে আপনি পেয়ে যাচ্ছেন আপনার পছন্দের
                  অর্গানাইজার গুলোর বেস্ট প্যাকেজ। এছাড়াও আপনি চাইলে আপনার
                  সাধ্যর মধ্যে প্যাকেজ বুকিং করতে পারেন এবং অন্যান্য
                  অর্গানাইজারের প্যাকেজগুলোর....
                </p>
                <div className="card-actions justify-center">
                  <button
                    className="p-2 btn-outline btn-secondary rounded-sm text-lg font-semibold 
                                 hover:text-white hover:scale-110 ease-out duration-300"
                  >
                    Read More..
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Latest Awesome Events */}
      <section className="relative mt-16 lg:mt-80 latest-bg">
        <div className="absolute bg-black w-full h-full opacity-60"></div>
        <div className="mx-4 md:mx-10 lg:mx-28 py-16 lg:py-80 z-20 text-white">
          {/* Events title */}
          <div className="relative mt-5 md:mt-10">
            <div className="text-center">
              <h1
                className="md:text-5xl text-3xl font-semibold latest-planner 
                            animate-bounce"
              >
                Latest Awesome Events
              </h1>
              <p className="text-lg py-5 md:py-10">
                চাইলে আপনিও রাঙিয়ে দিতে পারেন আপনার সময় গুলোকে আমাদের রংতুলি
                গুলো দিয়ে
              </p>
            </div>
          </div>
          <div className="pt-10">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide className="service-package-slide">
                <img className="relative latest-img w-full" src={img4} />
                <div
                  className="bg-secondary w-1/2 absolute bottom-0 right-0 p-5  hidden 
                                latest-event"
                >
                  <h1 className="text-xl font-bold text-white">
                    Afsana Birthday Party
                  </h1>
                  <ul className="py-3 grid grid-cols-1 gap-2 text-white">
                    <li>8.00AM-10.00PM</li>
                    <li>Uttara,Dhaka,Bangladesh</li>
                    <li>Venue: Ahsan Restaurant</li>
                  </ul>
                  <div>
                    <Link  to={'/events'}
                      className="border-2 p-2 btn-white rounded-sm text-lg 
                                        font-semibold hover:text-white hover:bg-black ease-in duration-300"
                    >
                      See Details..
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="service-package-slide">
                <img className="realtive latest-img" src={img5} />
                <div
                  className="bg-secondary w-1/2 absolute bottom-0 right-0 p-5  hidden 
                                latest-event"
                >
                  <h1 className="text-xl font-bold text-white">
                    Afsana Birthday Party
                  </h1>
                  <ul className="py-3 grid grid-cols-1 gap-2 text-white">
                    <li>8.00AM-10.00PM</li>
                    <li>Uttara,Dhaka,Bangladesh</li>
                    <li>Venue: Ahsan Restaurant</li>
                  </ul>
                  <div>
                  <Link  to={'/events'}
                      className="border-2 p-2 btn-white rounded-sm text-lg 
                                        font-semibold hover:text-white hover:bg-black ease-in duration-300"
                    >
                      See Details..
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="service-package-slide">
                <img className="relative latest-img" src={img6} />
                <div className="bg-secondary w-1/2 absolute bottom-0 right-0 p-5  hidden latest-event">
                  <h1 className="text-xl font-bold text-white">
                    Nur and Afsana wedding
                  </h1>
                  <ul className="py-3 grid grid-cols-1 gap-2 text-white">
                    <li>8.00AM-10.00PM</li>
                    <li>Uttara,Dhaka,Bangladesh</li>
                    <li>Venue: Ahsan Restaurant</li>
                  </ul>
                  <div>
                  <Link  to={'/events'}
                      className="border-2 p-2 btn-white rounded-sm text-lg 
                                        font-semibold hover:text-white hover:bg-black ease-in duration-300"
                    >
                      See Details..
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="service-package-slide">
                <img className="relative latest-img" src={img7} />
                <div className="bg-secondary w-1/2 absolute bottom-0 right-0 p-5  hidden latest-event">
                  <h1 className="text-xl font-bold text-white">
                    Nur and Afsana wedding
                  </h1>
                  <ul className="py-3 grid grid-cols-1 gap-2 text-white">
                    <li>8.00AM-10.00PM</li>
                    <li>Uttara,Dhaka,Bangladesh</li>
                    <li>Venue: Ahsan Restaurant</li>
                  </ul>
                  <div>
                  <Link  to={'/events'}
                      className="border-2 p-2 btn-white rounded-sm text-lg 
                                        font-semibold hover:text-white hover:bg-black ease-in duration-300"
                    >
                      See Details..
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="service-package-slide">
                <img className="relative latest-img" src={img8} />
                <div className="bg-secondary w-1/2 absolute bottom-0 right-0 p-5  hidden latest-event">
                  <h1 className="text-xl font-bold text-white">
                    Nur and Afsana wedding
                  </h1>
                  <ul className="py-3 grid grid-cols-1 gap-2 text-white">
                    <li>8.00AM-10.00PM</li>
                    <li>Uttara,Dhaka,Bangladesh</li>
                    <li>Venue: Ahsan Restaurant</li>
                  </ul>
                  <div>
                  <Link  to={'/events'}
                      className="border-2 p-2 btn-white rounded-sm text-lg 
                                        font-semibold hover:text-white hover:bg-black ease-in duration-300"
                    >
                      See Details..
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePackage;
