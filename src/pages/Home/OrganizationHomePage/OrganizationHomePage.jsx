import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

// import react icons
import { ImLocation2 } from "react-icons/im";
import { FaAddressCard, FaPhoneAlt, FaMailBulk } from "react-icons/fa";

// images import
import img1 from "../../../images/Organization1-min.jpg";
import img2 from "../../../images/organization6-min.jpg";
import img3 from "../../../images/organization8-min.jpg";

// custom css
import './OrganizationHomePage.css';

const OrganizationHomePage = () => {
    return (
        <div className=" bg-slate-100">
            <div className="py-24 mx-28">
                <section className="py-8 organizer-text-bg rounded-lg">
                        <div className="mx-28 text-center">
                            <p className="font-semibold text-red-600 pb-3">Choose Best Organizers</p>
                            <h1 className="organizers-header text-primary text-5xl animate-bounce">Organizers in BD</h1>
                            <p className="text-lg text-gray-200 mx-auto pt-5">Integer sollicitudin ligula non enim sodales, non lacinia nunc ornare. Sed commodo tempor dapibus tortor volutpat, eget rhoncus nisi fringilla. Phasellus ornare risus ineuismod varius.</p>
                        </div>
                </section>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper mt-20"
                >
                    <SwiperSlide className="organization-bg w-96">
                            <div className="relative w-full h-full">
                                <img className="h-full w-full" src={img1} alt="" />
                            </div>
                            <div className="organization-name bg-secondary text-white absolute z-10 w-full h-full bottom-0 left-0 text-center opacity-10">
                                <h1 className="text-5xl font-bold mt-20 animation-pulse">Grandiose Restaurant</h1>
                            </div>
                            <div className="organization-info bg-secondary text-white absolute z-10 w-full h-full top-0 left-0 ease-in duration-300 scale-50 hover:scale-100 rotate-0  hover:rotate-360 text-center">
                                <span class="flex">
                                    <span class="animate-ping absolute inline-flex h-full w-full bg-gray-800 opacity-50"></span>
                                </span>
                                <h1 className="mt-10 text-3xl font-bold">Grandiose Restaurant</h1>
                                <ul className="text-white flex flex-col gap-1 justify-center items-start ml-8 my-5">
                                    <li className="flex items-center gap-2"><ImLocation2 className="text-red-600"></ImLocation2>Dhaka Regency Hotel & Resort</li>
                                    <li className="flex items-center gap-2"><FaAddressCard className="text-red-600"></FaAddressCard>Level 6, Tongi Diversion Rd, Dhaka 1229</li>
                                    <li className="flex items-center gap-2"><FaPhoneAlt className="text-red-600"></FaPhoneAlt>01713-332661</li>
                                    <li className="flex items-center gap-2"><FaMailBulk className="text-red-600"></FaMailBulk>grandiose4774@gmail.com</li>
                                </ul>
                                <div className="flex justify-center pb-16">
                                    <button className="btn btn-primary text-white text-md animate-pulse border-2 hover:btn-secondary ">See Details..</button>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className="organization-bg w-96">
                            <div className="relative w-full h-full">
                                <img className="h-full w-full" src={img2} alt="" />
                            </div>
                            <div className="organization-name bg-secondary text-white absolute z-10 w-full h-full bottom-0 left-0 text-center opacity-10">
                                <h1 className="text-5xl font-bold mt-20">Grandiose Restaurant</h1>
                            </div>
                            <div className="organization-info bg-secondary text-white absolute z-10 w-full h-full top-0 left-0 ease-in duration-300 scale-50 hover:scale-100 rotate-0  hover:rotate-360 text-center">
                                <span class="flex">
                                    <span class="animate-ping absolute inline-flex h-full w-full bg-gray-800 opacity-50"></span>
                                </span>
                                <h1 className="mt-10 text-3xl font-bold">Grandiose Restaurant</h1>
                                <ul className="text-white flex flex-col gap-1 justify-center items-start ml-8 my-5">
                                    <li className="flex items-center gap-2"><ImLocation2 className="text-red-600"></ImLocation2>Dhaka Regency Hotel & Resort</li>
                                    <li className="flex items-center gap-2"><FaAddressCard className="text-red-600"></FaAddressCard>Level 6, Tongi Diversion Rd, Dhaka 1229</li>
                                    <li className="flex items-center gap-2"><FaPhoneAlt className="text-red-600"></FaPhoneAlt>01713-332661</li>
                                    <li className="flex items-center gap-2"><FaMailBulk className="text-red-600"></FaMailBulk>grandiose4774@gmail.com</li>
                                </ul>
                                <div className="flex justify-center pb-16">
                                    <button className="btn btn-primary text-white text-md animate-pulse border-2 hover:btn-secondary ">See Details..</button>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className="organization-bg w-96">
                            <div className="relative w-full h-full">
                                <img className="h-full w-full" src={img3} alt="" />
                            </div>
                            <div className="organization-name bg-secondary text-white absolute z-10 w-full h-full bottom-0 left-0 text-center opacity-10">
                                <h1 className="text-5xl font-bold mt-20">Grandiose Restaurant</h1>
                            </div>
                            <div className="organization-info bg-secondary text-white absolute z-10 w-full h-full top-0 left-0 ease-in duration-300 scale-50 hover:scale-100 rotate-0  hover:rotate-360 text-center">
                                <span class="flex">
                                    <span class="animate-ping absolute inline-flex h-full w-full bg-gray-800 opacity-50"></span>
                                </span>
                                <h1 className="mt-10 text-3xl font-bold">Grandiose Restaurant</h1>
                                <ul className="text-white flex flex-col gap-1 justify-center items-start ml-8 my-5">
                                    <li className="flex items-center gap-2"><ImLocation2 className="text-red-600"></ImLocation2>Dhaka Regency Hotel & Resort</li>
                                    <li className="flex items-center gap-2"><FaAddressCard className="text-red-600"></FaAddressCard>Level 6, Tongi Diversion Rd, Dhaka 1229</li>
                                    <li className="flex items-center gap-2"><FaPhoneAlt className="text-red-600"></FaPhoneAlt>01713-332661</li>
                                    <li className="flex items-center gap-2"><FaMailBulk className="text-red-600"></FaMailBulk>grandiose4774@gmail.com</li>
                                </ul>
                                <div className="flex justify-center pb-16">
                                    <button className="btn btn-primary text-white text-md animate-pulse border-2 hover:btn-secondary ">See Details..</button>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className="organization-bg w-96">
                            <div className="relative w-full h-full">
                                <img className="h-full w-full" src={img1} alt="" />
                            </div>
                            <div className="organization-name bg-secondary text-white absolute z-10 w-full h-full bottom-0 left-0 text-center opacity-10">
                                <h1 className="text-5xl font-bold mt-20 animation-pulse">Grandiose Restaurant</h1>
                            </div>
                            <div className="organization-info bg-secondary text-white absolute z-10 w-full h-full top-0 left-0 ease-in duration-300 scale-50 hover:scale-100 rotate-0  hover:rotate-360 text-center">
                                <span class="flex">
                                    <span class="animate-ping absolute inline-flex h-full w-full bg-gray-800 opacity-50"></span>
                                </span>
                                <h1 className="mt-10 text-3xl font-bold">Grandiose Restaurant</h1>
                                <ul className="text-white flex flex-col gap-1 justify-center items-start ml-8 my-5">
                                    <li className="flex items-center gap-2"><ImLocation2 className="text-red-600"></ImLocation2>Dhaka Regency Hotel & Resort</li>
                                    <li className="flex items-center gap-2"><FaAddressCard className="text-red-600"></FaAddressCard>Level 6, Tongi Diversion Rd, Dhaka 1229</li>
                                    <li className="flex items-center gap-2"><FaPhoneAlt className="text-red-600"></FaPhoneAlt>01713-332661</li>
                                    <li className="flex items-center gap-2"><FaMailBulk className="text-red-600"></FaMailBulk>grandiose4774@gmail.com</li>
                                </ul>
                                <div className="flex justify-center pb-16">
                                    <button className="btn btn-primary text-white text-md animate-pulse border-2 hover:btn-secondary ">See Details..</button>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className="organization-bg w-96">
                            <div className="relative w-full h-full">
                                <img className="h-full w-full" src={img2} alt="" />
                            </div>
                            <div className="organization-name bg-secondary text-white absolute z-10 w-full h-full bottom-0 left-0 text-center opacity-10">
                                <h1 className="text-5xl font-bold mt-20">Grandiose Restaurant</h1>
                            </div>
                            <div className="organization-info bg-secondary text-white absolute z-10 w-full h-full top-0 left-0 ease-in duration-300 scale-50 hover:scale-100 rotate-0  hover:rotate-360 text-center">
                                <span class="flex">
                                    <span class="animate-ping absolute inline-flex h-full w-full bg-gray-800 opacity-50"></span>
                                </span>
                                <h1 className="mt-10 text-3xl font-bold">Grandiose Restaurant</h1>
                                <ul className="text-white flex flex-col gap-1 justify-center items-start ml-8 my-5">
                                    <li className="flex items-center gap-2"><ImLocation2 className="text-red-600"></ImLocation2>Dhaka Regency Hotel & Resort</li>
                                    <li className="flex items-center gap-2"><FaAddressCard className="text-red-600"></FaAddressCard>Level 6, Tongi Diversion Rd, Dhaka 1229</li>
                                    <li className="flex items-center gap-2"><FaPhoneAlt className="text-red-600"></FaPhoneAlt>01713-332661</li>
                                    <li className="flex items-center gap-2"><FaMailBulk className="text-red-600"></FaMailBulk>grandiose4774@gmail.com</li>
                                </ul>
                                <div className="flex justify-center pb-16">
                                    <button className="btn btn-primary text-white text-md animate-pulse border-2 hover:btn-secondary ">See Details..</button>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className="organization-bg w-96">
                            <div className="relative w-full h-full">
                                <img className="h-full w-full" src={img3} alt="" />
                            </div>
                            <div className="organization-name bg-secondary text-white absolute z-10 w-full h-full bottom-0 left-0 text-center opacity-10">
                                <h1 className="text-5xl font-bold mt-20">Grandiose Restaurant</h1>
                            </div>
                            <div className="organization-info bg-secondary text-white absolute z-10 w-full h-full top-0 left-0 ease-in duration-300 scale-50 hover:scale-100 rotate-0  hover:rotate-360 text-center">
                                <span class="flex">
                                    <span class="animate-ping absolute inline-flex h-full w-full bg-gray-800 opacity-50"></span>
                                </span>
                                <h1 className="mt-10 text-3xl font-bold">Grandiose Restaurant</h1>
                                <ul className="text-white flex flex-col gap-1 justify-center items-start ml-8 my-5">
                                    <li className="flex items-center gap-2"><ImLocation2 className="text-red-600"></ImLocation2>Dhaka Regency Hotel & Resort</li>
                                    <li className="flex items-center gap-2"><FaAddressCard className="text-red-600"></FaAddressCard>Level 6, Tongi Diversion Rd, Dhaka 1229</li>
                                    <li className="flex items-center gap-2"><FaPhoneAlt className="text-red-600"></FaPhoneAlt>01713-332661</li>
                                    <li className="flex items-center gap-2"><FaMailBulk className="text-red-600"></FaMailBulk>grandiose4774@gmail.com</li>
                                </ul>
                                <div className="flex justify-center pb-16">
                                    <button className="btn btn-primary text-white text-md animate-pulse border-2 hover:btn-secondary ">See Details..</button>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className="organization-bg w-96">
                            <div className="relative w-full h-full">
                                <img className="h-full w-full" src={img1} alt="" />
                            </div>
                            <div className="organization-name bg-secondary text-white absolute z-10 w-full h-full bottom-0 left-0 text-center opacity-10">
                                <h1 className="text-5xl font-bold mt-20 animation-pulse">Grandiose Restaurant</h1>
                            </div>
                            <div className="organization-info bg-secondary text-white absolute z-10 w-full h-full top-0 left-0 ease-in duration-300 scale-50 hover:scale-100 rotate-0  hover:rotate-360 text-center">
                                <span class="flex">
                                    <span class="animate-ping absolute inline-flex h-full w-full bg-gray-800 opacity-50"></span>
                                </span>
                                <h1 className="mt-10 text-3xl font-bold">Grandiose Restaurant</h1>
                                <ul className="text-white flex flex-col gap-1 justify-center items-start ml-8 my-5">
                                    <li className="flex items-center gap-2"><ImLocation2 className="text-red-600"></ImLocation2>Dhaka Regency Hotel & Resort</li>
                                    <li className="flex items-center gap-2"><FaAddressCard className="text-red-600"></FaAddressCard>Level 6, Tongi Diversion Rd, Dhaka 1229</li>
                                    <li className="flex items-center gap-2"><FaPhoneAlt className="text-red-600"></FaPhoneAlt>01713-332661</li>
                                    <li className="flex items-center gap-2"><FaMailBulk className="text-red-600"></FaMailBulk>grandiose4774@gmail.com</li>
                                </ul>
                                <div className="flex justify-center pb-16">
                                    <button className="btn btn-primary text-white text-md animate-pulse border-2 hover:btn-secondary ">See Details..</button>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className="organization-bg w-96">
                            <div className="relative w-full h-full">
                                <img className="h-full w-full" src={img2} alt="" />
                            </div>
                            <div className="organization-name bg-secondary text-white absolute z-10 w-full h-full bottom-0 left-0 text-center opacity-10">
                                <h1 className="text-5xl font-bold mt-20">Grandiose Restaurant</h1>
                            </div>
                            <div className="organization-info bg-secondary text-white absolute z-10 w-full h-full top-0 left-0 ease-in duration-300 scale-50 hover:scale-100 rotate-0  hover:rotate-360 text-center">
                                <span class="flex">
                                    <span class="animate-ping absolute inline-flex h-full w-full bg-gray-800 opacity-50"></span>
                                </span>
                                <h1 className="mt-10 text-3xl font-bold">Grandiose Restaurant</h1>
                                <ul className="text-white flex flex-col gap-1 justify-center items-start ml-8 my-5">
                                    <li className="flex items-center gap-2"><ImLocation2 className="text-red-600"></ImLocation2>Dhaka Regency Hotel & Resort</li>
                                    <li className="flex items-center gap-2"><FaAddressCard className="text-red-600"></FaAddressCard>Level 6, Tongi Diversion Rd, Dhaka 1229</li>
                                    <li className="flex items-center gap-2"><FaPhoneAlt className="text-red-600"></FaPhoneAlt>01713-332661</li>
                                    <li className="flex items-center gap-2"><FaMailBulk className="text-red-600"></FaMailBulk>grandiose4774@gmail.com</li>
                                </ul>
                                <div className="flex justify-center pb-16">
                                    <button className="btn btn-primary text-white text-md animate-pulse border-2 hover:btn-secondary ">See Details..</button>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className="organization-bg w-96">
                            <div className="relative w-full h-full">
                                <img className="h-full w-full" src={img3} alt="" />
                            </div>
                            <div className="organization-name bg-secondary text-white absolute z-10 w-full h-full bottom-0 left-0 text-center opacity-10">
                                <h1 className="text-5xl font-bold mt-20">Grandiose Restaurant</h1>
                            </div>
                            <div className="organization-info bg-secondary text-white absolute z-10 w-full h-full top-0 left-0 ease-in duration-300 scale-50 hover:scale-100 rotate-0  hover:rotate-360 text-center">
                                <span class="flex">
                                    <span class="animate-ping absolute inline-flex h-full w-full bg-gray-800 opacity-50"></span>
                                </span>
                                <h1 className="mt-10 text-3xl font-bold">Grandiose Restaurant</h1>
                                <ul className="text-white flex flex-col gap-1 justify-center items-start ml-8 my-5">
                                    <li className="flex items-center gap-2"><ImLocation2 className="text-red-600"></ImLocation2>Dhaka Regency Hotel & Resort</li>
                                    <li className="flex items-center gap-2"><FaAddressCard className="text-red-600"></FaAddressCard>Level 6, Tongi Diversion Rd, Dhaka 1229</li>
                                    <li className="flex items-center gap-2"><FaPhoneAlt className="text-red-600"></FaPhoneAlt>01713-332661</li>
                                    <li className="flex items-center gap-2"><FaMailBulk className="text-red-600"></FaMailBulk>grandiose4774@gmail.com</li>
                                </ul>
                                <div className="flex justify-center pb-16">
                                    <button className="btn btn-primary text-white text-md animate-pulse border-2 hover:btn-secondary ">See Details..</button>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className="organization-bg w-96">
                            <div className="relative w-full h-full">
                                <img className="h-full w-full" src={img1} alt="" />
                            </div>
                            <div className="organization-name bg-secondary text-white absolute z-10 w-full h-full bottom-0 left-0 text-center opacity-10">
                                <h1 className="text-5xl font-bold mt-20 animation-pulse">Grandiose Restaurant</h1>
                            </div>
                            <div className="organization-info bg-secondary text-white absolute z-10 w-full h-full top-0 left-0 ease-in duration-300 scale-50 hover:scale-100 rotate-0  hover:rotate-360 text-center">
                                <span class="flex">
                                    <span class="animate-ping absolute inline-flex h-full w-full bg-gray-800 opacity-50"></span>
                                </span>
                                <h1 className="mt-10 text-3xl font-bold">Grandiose Restaurant</h1>
                                <ul className="text-white flex flex-col gap-1 justify-center items-start ml-8 my-5">
                                    <li className="flex items-center gap-2"><ImLocation2 className="text-red-600"></ImLocation2>Dhaka Regency Hotel & Resort</li>
                                    <li className="flex items-center gap-2"><FaAddressCard className="text-red-600"></FaAddressCard>Level 6, Tongi Diversion Rd, Dhaka 1229</li>
                                    <li className="flex items-center gap-2"><FaPhoneAlt className="text-red-600"></FaPhoneAlt>01713-332661</li>
                                    <li className="flex items-center gap-2"><FaMailBulk className="text-red-600"></FaMailBulk>grandiose4774@gmail.com</li>
                                </ul>
                                <div className="flex justify-center pb-16">
                                    <button className="btn btn-primary text-white text-md animate-pulse border-2 hover:btn-secondary ">See Details..</button>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className="organization-bg w-96">
                            <div className="relative w-full h-full">
                                <img className="h-full w-full" src={img2} alt="" />
                            </div>
                            <div className="organization-name bg-secondary text-white absolute z-10 w-full h-full bottom-0 left-0 text-center opacity-10">
                                <h1 className="text-5xl font-bold mt-20">Grandiose Restaurant</h1>
                            </div>
                            <div className="organization-info bg-secondary text-white absolute z-10 w-full h-full top-0 left-0 ease-in duration-300 scale-50 hover:scale-100 rotate-0  hover:rotate-360 text-center">
                                <span class="flex">
                                    <span class="animate-ping absolute inline-flex h-full w-full bg-gray-800 opacity-50"></span>
                                </span>
                                <h1 className="mt-10 text-3xl font-bold">Grandiose Restaurant</h1>
                                <ul className="text-white flex flex-col gap-1 justify-center items-start ml-8 my-5">
                                    <li className="flex items-center gap-2"><ImLocation2 className="text-red-600"></ImLocation2>Dhaka Regency Hotel & Resort</li>
                                    <li className="flex items-center gap-2"><FaAddressCard className="text-red-600"></FaAddressCard>Level 6, Tongi Diversion Rd, Dhaka 1229</li>
                                    <li className="flex items-center gap-2"><FaPhoneAlt className="text-red-600"></FaPhoneAlt>01713-332661</li>
                                    <li className="flex items-center gap-2"><FaMailBulk className="text-red-600"></FaMailBulk>grandiose4774@gmail.com</li>
                                </ul>
                                <div className="flex justify-center pb-16">
                                    <button className="btn btn-primary text-white text-md animate-pulse border-2 hover:btn-secondary ">See Details..</button>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className="organization-bg w-96">
                            <div className="relative w-full h-full">
                                <img className="h-full w-full" src={img3} alt="" />
                            </div>
                            <div className="organization-name bg-secondary text-white absolute z-10 w-full h-full bottom-0 left-0 text-center opacity-10">
                                <h1 className="text-5xl font-bold mt-20">Grandiose Restaurant</h1>
                            </div>
                            <div className="organization-info bg-secondary text-white absolute z-10 w-full h-full top-0 left-0 ease-in duration-300 scale-50 hover:scale-100 rotate-0  hover:rotate-360 text-center">
                                <span class="flex">
                                    <span class="animate-ping absolute inline-flex h-full w-full bg-gray-800 opacity-50"></span>
                                </span>
                                <h1 className="mt-10 text-3xl font-bold">Grandiose Restaurant</h1>
                                <ul className="text-white flex flex-col gap-1 justify-center items-start ml-8 my-5">
                                    <li className="flex items-center gap-2"><ImLocation2 className="text-red-600"></ImLocation2>Dhaka Regency Hotel & Resort</li>
                                    <li className="flex items-center gap-2"><FaAddressCard className="text-red-600"></FaAddressCard>Level 6, Tongi Diversion Rd, Dhaka 1229</li>
                                    <li className="flex items-center gap-2"><FaPhoneAlt className="text-red-600"></FaPhoneAlt>01713-332661</li>
                                    <li className="flex items-center gap-2"><FaMailBulk className="text-red-600"></FaMailBulk>grandiose4774@gmail.com</li>
                                </ul>
                                <div className="flex justify-center pb-16">
                                    <button className="btn btn-primary text-white text-md animate-pulse border-2 hover:btn-secondary ">See Details..</button>
                                </div>
                            </div>
                    </SwiperSlide>
                </Swiper>
                <div className="flex justify-center mt-20 animate-bounce">
                    <button className="btn btn-outline btn-secondary text-2xl hover:font-bold">View All !!</button>
                </div>
            </div>
        </div>
    );
};

export default OrganizationHomePage;