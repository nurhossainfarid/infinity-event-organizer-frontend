import React from 'react';

// import images 
import img1 from '../../../images/wedding.jpg';
import img2 from '../../../images/private_party_events.jpg';
import img3 from '../../../images/birthday_party.jpg'; 
import img4 from '../../../images/holiday_events.jpg';
import img5 from '../../../images/wedding_events.jpg';
import img6 from '../../../images/banner_bg4.jpg';

// import react icons 
import { FcSearch } from "react-icons/fc";

// import custom css
import './GalleryHome.css';

const GalleryHome = () => {
    return (
        <div className="gallery-container ">
            {/* gallery text */}
            <section className="gallery-bg relative">
                <div className="absolute bg-black w-full h-full opacity-60"></div>
                <div className="gallery-text mx-28 text-white relative py-28">
                    <div className="flex justify-between items-center gap-10">
                        <div>
                            <h1 className="gallery-header text-5xl">Photo Gallery</h1>
                            <p className="text-lg py-5">We can offer a stress free solution to help you, plan your dream wedding day, so you can enjoy every moment and treasure <br /> it forever.  plan your dream wedding day, so you can enjoy every moment and treasure it</p>
                        </div>
                        <div>
                            <button className="border-2 p-2 btn-outline btn-primary rounded-sm text-lg font-semibold hover:text-white ease-in duration-300 animate-bounce">More Service..</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* gallery photo */}
            <section>
                <div className="mx-28 absolute z-10 md:-mt-16">
                    <div className="grid grid-cols-3 gap-3 gallery-img-bg">
                        <div className="relative">
                            <img src={img1} alt="wedding"/>
                            {/* <div className="absolute top-0 left-0 bg-secondary opacity-70 user-bg w-full"></div>
                            <div className="absolute top-0 left-0 user-info mx-20 my-32">
                                <FcSearch className="text-white text-5xl"></FcSearch>
                                <h1 className="text-white font-bold text-2xl">Nur Afsana Wedding</h1>
                                <p className="text-white text-lg">Wedding</p>
                                <h3 className="text-white font-semibold text-xl">Venue: Grand Central</h3>
                            </div> */}
                        </div>
                        <div className="relative">
                            <img src={img2} alt="private party" className="gallery-img" />
                            {/* <div className="absolute top-0 left-0 bg-secondary opacity-70 user-bg w-full"></div>
                            <div className="absolute top-0 left-0 user-info mx-20 my-32">
                                <FcSearch className="text-white text-5xl"></FcSearch>
                                <h1 className="text-white font-bold text-2xl">Nur Afsana Wedding</h1>
                                <p className="text-white text-lg">Wedding</p>
                                <h3 className="text-white font-semibold text-xl">Venue: Grand Central</h3>
                            </div> */}
                        </div>
                        <div>
                            <img src={img3} alt="birthday party" />
                        </div>
                        <div>
                            <img src={img4} alt="Holiday" />
                        </div>
                        <div>
                            <img src={img5} alt="wedding" />
                        </div>
                        <div>
                            <img src={img6} alt="General Party" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex justify-center pb-16 animate-bounce gallery-view-button relative">
                    <button className="btn btn-outline btn-secondary text-2xl hover:font-bold">View All !!</button>
            </div>
        </div>
    );
};

export default GalleryHome;