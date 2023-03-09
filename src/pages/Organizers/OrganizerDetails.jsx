import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";


// import required modules
import {Autoplay, EffectCube, Pagination } from "swiper";
import { useEffect } from 'react';

const OrganizerDetails = () => {
    const { oId } = useParams();
    const [organizerData, setOrganizerData] = useState();
    useEffect(() => {
        const url = `https://infinity-event-organizer-backend.vercel.app/v1/organization/${oId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setOrganizerData(data.data);
            })
    }, [organizerData]);
    return (
        <div className="mx-28 mt-28 mb-10">
            <section className='grid md:grid-cols-2'>
                <div>
                    <h1 className="text-5xl uppercase">{organizerData?.name}</h1>
                    <div className="mt-10">
                        <h3 className="text-2xl">Contact Information</h3>
                        <div className="ml-24 mt-1 flex flex-col gap-1">
                            <div>
                                <h5 className="text-lg">Phone Number: {organizerData?.contactNumber}</h5>
                            </div>
                            <div>
                                <h5 className="text-lg">Email: {organizerData?.email}</h5>
                            </div>
                            <div>
                                <h5 className="text-lg">Facebook: {organizerData?.facebook}</h5>
                            </div>
                            <div>
                                <h5 className="text-lg">Instagram: {organizerData?.instagram}</h5>
                            </div>
                            <div>
                                <h5 className="text-lg"><span className="text-xl">What's App: </span> 
                                  {organizerData?.whatsapp}</h5>
                            </div>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <h1 className='text-2xl'>Location</h1>
                        <p className='md:ml-24'>{organizerData?.address}</p>
                    </div>
                </div>
                <Swiper
                effect={"cube"}
                grabCursor={true}
                loop={true}
                autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                }}
                cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
                }}
                pagination={true}
                modules={[Autoplay, EffectCube, Pagination]}
                className="mySwiper w-full mt-20" style={{height: "500px"}}
                >
                    <SwiperSlide className='h-full'>
                    <img className="h-full w-full" src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className='h-full'>
                    <img className='h-full w-full' src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className='h-full'>
                    <img className='h-full w-full' src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                </Swiper>
            </section>
            <section className='mt-20'>
                <h1 className='text-3xl text-center uppercase mb-10'>{organizerData?.name} All Packages</h1>
                <div className='grid grid-cols-3 gap-5'>
                    {organizerData?.packages.map(pack => 
                        <div className="card card-compact w-96 bg-fuchsia-600 shadow-xl text-white">
                            <div className="card-body">
                                <h2 className="card-title">{pack?.name}</h2>
                                <p className="text-lg">Price: ${pack?.price}</p>
                                <p className="text-lg">Time: {pack?.time}</p>
                                <p className="text-lg">Attend: {pack?.attend}</p>
                                <p className="text-lg">Category: {pack?.category}</p>
                                <p className="text-lg">Event Name: {pack?.eventName}</p>
                                <p className="text-lg">Food Menu: {pack?.foodMenu}</p>
                                <p className="text-lg">Status: {pack?.status}</p>
                            <div className="card-actions justify-end mt-4">
                                <button className="btn bg-white hover:bg-white text-white 
                                hover:text-fuchsia-600">Custom 
                                 Package</button>
                                <button className="btn bg-white hover:bg-white text-white 
                                hover:text-fuchsia-600">Booking Now</button>
                            </div>
                            </div>
                        </div>    
                    )}
                </div>
            </section>
        </div>
    );
};
 
export default OrganizerDetails;