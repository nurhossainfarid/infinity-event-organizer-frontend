import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

// import Images
import img1 from '../../../images/kids-birthday.jpg';
import img2 from '../../../images/party-plane.jpg';
import img3 from '../../../images/holiday_events.jpg';

// import custom css 
import './HomeBlogs.css';

const HomeBlogs = () => {
    return (
        <div className="bg-slate-100 py-28">
            {/* blogs header section */}
            <section className="md:mx-28">
                <h1 className="blogs-header text-secondary text-center text-5xl animate-bounce">Our Latest News/Blogs</h1>
                <p className="text-lg text-gray-500 mx-auto py-5 md:w-2/3 text-center">Integer sollicitudin ligula non enim sodales, non lacinia nunc ornare. Sed commodo tempor dapibus tortor volutpat, eget rhoncus nisi fringilla. Phasellus ornare risus ineuismod varius.</p>
            </section>
            <section className="md:mx-28 mt-10">
                <Swiper
                    spaceBetween={30}
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
                    className="mySwiper"
                >
                    <SwiperSlide className="grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-10 ">
                        <div className="col-span-2">
                            <div className="grid grid-cols-2 gap-5 bg-white">
                                <img src={img1} className="" alt="birthday"/>
                                <div className="m-5 mt-8">
                                    <ul className="flex items-center gap-5 mb-5">
                                        <li className="text-red-600 "><span className="text-3xl font-bold">1</span><br /> <span className="">Oct</span></li>
                                        <li className="text-4xl text-gray-500">|</li>
                                        <li><h1 className="text-2xl font-bold">Best Kids’ Birthday Party Ideas</h1></li>
                                    </ul>
                                    <p className="text-gray-500">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10...</p>
                                    <div className="mt-10">
                                        <button className="btn btn-secondary text-secondary hover:text-primary">Read More ...</button>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-5 bg-white mt-8">
                                <img src={img2} className="" alt="party"/>
                                <div className="m-5 mt-8">
                                    <ul className="flex items-center gap-5 mb-5">
                                        <li className="text-red-600 "><span className="text-3xl font-bold">24</span><br /> <span className="">Oct</span></li>
                                        <li className="text-4xl text-gray-500">|</li>
                                        <li><h1 className="text-2xl font-bold">5 Steps To Planning A Sweet Party</h1></li>
                                    </ul>
                                    <p className="text-gray-500">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10...</p>
                                    <div className="mt-10">
                                        <button className="btn btn-secondary text-secondary hover:text-primary">Read More ...</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img src={img3} alt="party" /></figure>
                                <div className="card-body">
                                    <div className="m-5">
                                        <ul className="flex items-center gap-5 mb-5">
                                            <li className="text-red-600 "><span className="text-3xl font-bold">6</span><br /> <span className="">Jan</span></li>
                                            <li className="text-4xl text-gray-500">|</li>
                                            <li><h1 className="text-2xl font-bold">How to Find the Perfect Event Venue</h1></li>
                                        </ul>
                                        <p className="text-gray-500">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10...</p>
                                        <div className="mt-10">
                                            <button className="btn btn-secondary text-secondary hover:text-primary">Read More ...</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-10 ">
                        <div className="col-span-2">
                            <div className="grid grid-cols-2 gap-5 bg-white">
                                <img src={img1} className="" alt="birthday"/>
                                <div className="m-5 mt-8">
                                    <ul className="flex items-center gap-5 mb-5">
                                        <li className="text-red-600 "><span className="text-3xl font-bold">1</span><br /> <span className="">Oct</span></li>
                                        <li className="text-4xl text-gray-500">|</li>
                                        <li><h1 className="text-2xl font-bold">Best Kids’ Birthday Party Ideas</h1></li>
                                    </ul>
                                    <p className="text-gray-500">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10...</p>
                                    <div className="mt-10">
                                        <button className="btn btn-secondary text-secondary hover:text-primary">Read More ...</button>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-5 bg-white mt-8">
                                <img src={img2} className="" alt="party"/>
                                <div className="m-5 mt-8">
                                    <ul className="flex items-center gap-5 mb-5">
                                        <li className="text-red-600 "><span className="text-3xl font-bold">24</span><br /> <span className="">Oct</span></li>
                                        <li className="text-4xl text-gray-500">|</li>
                                        <li><h1 className="text-2xl font-bold">5 Steps To Planning A Sweet Party</h1></li>
                                    </ul>
                                    <p className="text-gray-500">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10...</p>
                                    <div className="mt-10">
                                        <button className="btn btn-secondary text-secondary hover:text-primary">Read More ...</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img src={img3} alt="party" /></figure>
                                <div className="card-body">
                                    <div className="m-5">
                                        <ul className="flex items-center gap-5 mb-5">
                                            <li className="text-red-600 "><span className="text-3xl font-bold">6</span><br /> <span className="">Jan</span></li>
                                            <li className="text-4xl text-gray-500">|</li>
                                            <li><h1 className="text-2xl font-bold">How to Find the Perfect Event Venue</h1></li>
                                        </ul>
                                        <p className="text-gray-500">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10...</p>
                                        <div className="mt-10">
                                            <button className="btn btn-secondary text-secondary hover:text-primary">Read More ...</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-10 ">
                        <div className="col-span-2">
                            <div className="grid grid-cols-2 gap-5 bg-white">
                                <img src={img1} className="" alt="birthday"/>
                                <div className="m-5 mt-8">
                                    <ul className="flex items-center gap-5 mb-5">
                                        <li className="text-red-600 "><span className="text-3xl font-bold">1</span><br /> <span className="">Oct</span></li>
                                        <li className="text-4xl text-gray-500">|</li>
                                        <li><h1 className="text-2xl font-bold">Best Kids’ Birthday Party Ideas</h1></li>
                                    </ul>
                                    <p className="text-gray-500">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10...</p>
                                    <div className="mt-10">
                                        <button className="btn btn-secondary text-secondary hover:text-primary">Read More ...</button>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-5 bg-white mt-8">
                                <img src={img2} className="" alt="party"/>
                                <div className="m-5 mt-8">
                                    <ul className="flex items-center gap-5 mb-5">
                                        <li className="text-red-600 "><span className="text-3xl font-bold">24</span><br /> <span className="">Oct</span></li>
                                        <li className="text-4xl text-gray-500">|</li>
                                        <li><h1 className="text-2xl font-bold">5 Steps To Planning A Sweet Party</h1></li>
                                    </ul>
                                    <p className="text-gray-500">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10...</p>
                                    <div className="mt-10">
                                        <button className="btn btn-secondary text-secondary hover:text-primary">Read More ...</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img src={img3} alt="party" /></figure>
                                <div className="card-body">
                                    <div className="m-5">
                                        <ul className="flex items-center gap-5 mb-5">
                                            <li className="text-red-600 "><span className="text-3xl font-bold">6</span><br /> <span className="">Jan</span></li>
                                            <li className="text-4xl text-gray-500">|</li>
                                            <li><h1 className="text-2xl font-bold">How to Find the Perfect Event Venue</h1></li>
                                        </ul>
                                        <p className="text-gray-500">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10...</p>
                                        <div className="mt-10">
                                            <button className="btn btn-secondary text-secondary hover:text-primary">Read More ...</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    );
};

export default HomeBlogs;