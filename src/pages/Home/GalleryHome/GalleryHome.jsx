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
                <div className="gallery-text mx-6 md:mx-10 lg:mx-28 text-white relative py-10 md:py-16 lg:py-28">
                    <div className="flex justify-between items-center md:gap-5 lg:gap-10">
                        <div>
                            <h1 className="gallery-header text-3xl md:text-5xl">Photo Gallery</h1>
                            <p className="text-sm md:text-md lg:text-lg py-5">আপনিও প্যাকেজগুলো ট্রাই করে 
                             কন্ট্রিবিউট করতে  পারেন আমাদের গ্যালারি সেকশানে সাথে</p>
                        </div>
                        <div>
                            <button className="border-2 p-1 lg:p-2 btn-outline btn-primary rounded-sm md:text-md 
                             lg:text-lg font-semibold hover:text-white ease-in duration-300 animate-bounce">More 
                              Service..
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* gallery photo */}
            <section>
                <div className="mx-6 md:mx-10 lg:mx-28 z-10 -mt-10 md:-mt-16 lg:-mt-20">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 gallery-img-bg">
                        <div className="relative">
                            <img className='w-full' src={img1} alt="wedding"/>
                        </div>
                        <div className="relative">
                            <img src={img2} alt="private party" className="w-full"/>
                        </div>
                        <div className="relative">
                            <img className='w-full' src={img3} alt="birthday party" />
                        </div>
                        <div>
                            <img className='w-full' src={img4} alt="Holiday"  />
                        </div>
                        <div>
                            <img className='w-full' src={img5} alt="wedding" />
                        </div>
                        <div>
                            <img className='w-full' src={img6} alt="General Party" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex justify-center animate-bounce gallery-view-button relative my-10 lg:my-16">
                    <button className="btn btn-outline btn-secondary text-2xl hover:font-bold">View All !! 
                     </button>
            </div>
        </div>
    );
};

export default GalleryHome;