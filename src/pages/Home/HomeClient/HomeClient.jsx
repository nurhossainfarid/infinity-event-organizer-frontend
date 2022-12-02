import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import images 
import img1 from '../../../images/feedback1.jpg';
import img2 from '../../../images/feedback2.jpg';
import img3 from '../../../images/feedback3.jpg';
import img4 from '../../../images/party-plane.jpg'

// custom css
import "./HomeClient.css";

// import required modules
import { Autoplay } from "swiper";

const HomeClient = () => {
    return (
        <div className="grid grid-cols-2 pb-40 bg-slate-100">
            <section className="client-feedback-bg relative">
                <div className="absolute bg-secondary opacity-60 h-full w-full"></div>
                <div className="ml-28 relative py-20">
                    <div>
                        <h1 className="text-5xl text-white client-feedback-header">Client Feedback</h1>
                    </div>
                    <div className="mt-10">
                        <Swiper
                                loop={true}
                                loopFillGroupWithBlank={true}
                                autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                className="mySwiper"
                            >
                            <SwiperSlide>
                                <img src={img1} className="rounded-full" alt="client-img" />
                                <h1 className="text-primary text-xl font-semibold mt-3">Afsana</h1>
                                <h3 className="text-slate-300 text-md">Dhaka City</h3>
                                <div className="mt-6 border-l-4 border-white mr-16">
                                    <p className="px-5 text-lg text-slate-200">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloret quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img2} className="rounded-full" alt="client-img" />
                                <h1 className="text-primary text-xl font-semibold mt-3">Nur</h1>
                                <h3 className="text-slate-300 text-md">Dhaka City</h3>
                                <div className="mt-6 border-l-4 border-white mr-16">
                                    <p className="px-5 text-lg text-slate-200">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloret quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img3} className="rounded-full" alt="client-img" />
                                <h1 className="text-primary text-xl font-semibold mt-3">Afsana</h1>
                                <h3 className="text-slate-300 text-md">Dhaka City</h3>
                                <div className="mt-6 border-l-4 border-white mr-16">
                                    <p className="px-5 text-lg text-slate-200">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloret quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
            <section className="absolute left-1/2 -ml-20 mt-10">
                <img src={img4} alt="" />
            </section>
        </div>
    );
};

export default HomeClient;