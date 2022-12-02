import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar, Autoplay} from "swiper";

// import images
import img1 from '../../../images/couple_banner.jpg';
import img2 from '../../../images/couple-dancing-ther-wedding.jpg';
import img3 from '../../../images/corporate_event.jpg';
import img4 from '../../../images/birthday_party.jpg';
import img5 from '../../../images/black_flower.jpg';

// import react icons
import { SlArrowRight } from "react-icons/sl";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

// import custom css
import './UpcomingEventHome.css';

const UpcomingEvent = () => {
    return (
        <div className="upcoming-bg">
            <div className="pt-44 pb-16 grid grid-cols-2 gap-10 mx-28">
                <section>
                    <h1 className="text-6xl text-white text-semibold upcoming-header">Upcoming <span className="text-secondary">Events</span></h1>
                    <p className="text-gray-300 py-10 text-lg">As the premier event planning company in the area. Each event and client is unique and we believe our services should be as well.</p>
                    <div className="grid grid-cols-1 gap-10 mt-5">
                        <div className="flex items-center gap-10">
                            <div className="upcoming-event-bg px-16 py-5 rounded-md">
                                <ul className="text-primary flex gap-5 items-start">
                                    <li className="text-4xl font-bold -mt-1">31</li>
                                    <li>8:00 am - 5:00 pm</li>
                                    <li>|</li>
                                    <li>Uttara ,Dhaka</li>
                                </ul>
                                <ul className="text-primary flex gap-5 items-end pt-1">
                                    <li className="font-semibold text-sm">DEC</li>
                                    <li className="text-3xl font-bold hover:text-secondary ease-in-out duration-300">Thirty First Night Festival</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className="text-primary text-3xl ease-in duration-300 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 py-10 px-2 rounded-md"><SlArrowRight className="font-bold"></SlArrowRight></h1>
                            </div>
                        </div>
                        <div className="flex items-center gap-10">
                            <div className="upcoming-event-bg px-16 py-5 rounded-md">
                                <ul className="text-primary flex gap-5 items-start">
                                    <li className="text-4xl font-bold -mt-1">6</li>
                                    <li>10:00 am - 10:00 pm</li>
                                    <li>|</li>
                                    <li>Uttara ,Dhaka</li>
                                </ul>
                                <ul className="text-primary flex gap-5 items-end pt-1">
                                    <li className="font-semibold text-sm">DEC</li>
                                    <li className="text-3xl font-bold hover:text-secondary ease-in-out duration-300">Nur and Afsana Wedding</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className="text-primary text-3xl ease-in duration-300 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 py-10 px-2 rounded-md"><SlArrowRight className="font-bold"></SlArrowRight></h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start animate-bounce mt-28">
                        <button className="btn btn-outline btn-primary text-lg hover:font-bold hover:btn-secondary flex gap-2">See More Event <AiOutlineArrowRight></AiOutlineArrowRight></button>
                    </div>
                </section>
                <section>
                    <div className="cube mx-auto">
                            <div className="top">
                                <img src={img5} alt="" className="w-full h-full" />
                            </div>
                            <div>
                                <span style={{ "--i":0 }}>
                                    <img src={img1} alt="" className="w-full h-full" />
                                </span>
                                <span style={{ "--i":1 }}>
                                    <img src={img2} alt="" className="w-full h-full" />
                                </span>
                                <span style={{ "--i":2 }}>
                                    <img src={img3} alt="" className="w-full h-full" />
                                </span>
                                <span style={{"--i":3}}>
                                    <img src={img4} alt="" className="w-full h-full" />
                                </span>
                            </div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-3/5 mx-auto mt-52 rounded-lg">
                        <Swiper
                            scrollbar={{
                            hide: true,
                            }}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            modules={[Scrollbar, Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="p-8 ">
                                    <h1 className="text-2xl text-primary font-semibold">Oct 24, 2023</h1>
                                    <h3 className="text-lg py-2 text-gray-200 flex gap-2 items-center"><MdLocationOn></MdLocationOn>Time Square Kingstreet</h3>
                                    <p className="mt-3 text-md text-gray-200">Join 400 others in Manhattan, NY for a full day of inspiring keynotes and new connections at the premier conference.</p>
                                    <div className="flex justify-start animate-bounce mt-16">
                                        <button className="btn btn-outline btn-primary text-lg hover:font-bold hover:btn-secondary flex gap-2">Get Ticket <AiOutlineArrowRight></AiOutlineArrowRight></button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="p-8 ">
                                    <h1 className="text-2xl text-primary font-semibold">Oct 24, 2023</h1>
                                    <h3 className="text-lg py-2 text-gray-200 flex gap-2 items-center"><MdLocationOn></MdLocationOn>Time Square Kingstreet</h3>
                                    <p className="mt-3 text-md text-gray-200">Join 400 others in Manhattan, NY for a full day of inspiring keynotes and new connections at the premier conference.</p>
                                    <div className="flex justify-start animate-bounce mt-16">
                                        <button className="btn btn-outline btn-primary text-lg hover:font-bold hover:btn-secondary flex gap-2">Get Ticket <AiOutlineArrowRight></AiOutlineArrowRight></button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="p-8 ">
                                    <h1 className="text-2xl text-primary font-semibold">Oct 24, 2023</h1>
                                    <h3 className="text-lg py-2 text-gray-200 flex gap-2 items-center"><MdLocationOn></MdLocationOn>Time Square Kingstreet</h3>
                                    <p className="mt-3 text-md text-gray-200">Join 400 others in Manhattan, NY for a full day of inspiring keynotes and new connections at the premier conference.</p>
                                    <div className="flex justify-start animate-bounce mt-16">
                                        <button className="btn btn-outline btn-primary text-lg hover:font-bold hover:btn-secondary flex gap-2">Get Ticket <AiOutlineArrowRight></AiOutlineArrowRight></button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="p-8 ">
                                    <h1 className="text-2xl text-primary font-semibold">Oct 24, 2023</h1>
                                    <h3 className="text-lg py-2 text-gray-200 flex gap-2 items-center"><MdLocationOn></MdLocationOn>Time Square Kingstreet</h3>
                                    <p className="mt-3 text-md text-gray-200">Join 400 others in Manhattan, NY for a full day of inspiring keynotes and new connections at the premier conference.</p>
                                    <div className="flex justify-start animate-bounce mt-16">
                                        <button className="btn btn-outline btn-primary text-lg hover:font-bold hover:btn-secondary flex gap-2">Get Ticket <AiOutlineArrowRight></AiOutlineArrowRight></button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UpcomingEvent;