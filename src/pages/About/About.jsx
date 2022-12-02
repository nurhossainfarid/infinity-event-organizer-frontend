import React from 'react';
import { Outlet } from 'react-router-dom';

// react icons 
import { MdCelebration } from "react-icons/md";
import { GiGlassCelebration } from "react-icons/gi";


// custom Link
import AboutCustomLink from './AboutCustomLink';

// import custom css
import './About.css';

const About = () => {
    return (
        <div>
            {/* about background and header */}
            <div className="about-bg relative">
                <div className="absolute bg-black w-full h-full opacity-60"></div>
                <div className="relative py-40 flex flex-col justify-center items-center gap-3">
                    <h1 className="text-5xl text-primary uppercase font-semibold">About Us</h1>
                    <p className="text-primary text-md">I Do What I Love</p>
                </div>
            </div>
            {/* About Present Up */}
            <div className="bg-slate-100">
                <h2 className='text-5xl text-secondary font-semibold text-center pt-16 about-header '> About Present Up</h2>
                <div className="drawer-content flex flex-col py-10">
                    <div className="w-full navbar">
                    <div className="">
                        <ul class="menu p-4 overflow-y-auto text-primary flex flex-row gap-6 justify-center items-center mx-28">
                            <AboutCustomLink to="/about" className="px-10 py-3 rounded-none text-lg font-semibold about-custom-button">Who We Are!</AboutCustomLink>
                            <AboutCustomLink to="/about/mission" className="px-10 py-3 rounded-none text-lg font-semibold about-custom-button">Our Mission</AboutCustomLink>
                            <AboutCustomLink to="/about/vision" className="px-10 py-3 rounded-none text-lg font-semibold about-custom-button">Our Vision</AboutCustomLink>
                            <AboutCustomLink to="/about/honorAward" className="px-10 py-3 rounded-none text-lg font-semibold about-custom-button">Honor & Award</AboutCustomLink>
                        </ul>
                    </div>
                    </div>
                    <div class="drawer-content bg-slate-100 flex flex-col px-10">
                        <Outlet/>
                    </div> 
                </div>
            </div>
            <div className="bg-slate-100">
                <h2 className='text-5xl text-secondary font-semibold text-center pt-16 about-header '>Our Working Process</h2>
                <p className='text-center text-gray-500 mt-3 text-md'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’type specimen book.</p>
                <div className="flex gap-10 mx-28 justify-center items-center py-20">
                    <div>
                        <div className="w-1/2 mx-auto">
                            <div className="bg-secondary icon-width flex justify-center items-center rounded-full border-4 border-accent hover:bg-accent ease-in duration-300">
                                <MdCelebration className="text-5xl text-primary"></MdCelebration>
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold mt-5">Find The Perfect Venue For Free</h1>
                    </div>
                    <div>
                        <div className="w-1/2 mx-auto">
                            <div className="bg-secondary icon-width flex justify-center items-center rounded-full border-4 border-accent hover:bg-accent ease-in duration-300">
                                <GiGlassCelebration className="text-5xl text-primary"></GiGlassCelebration>
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold mt-5">Connect with the best vendor</h1>
                    </div>
                    <div>
                        <div className="w-1/2 mx-auto">
                            <div className="bg-secondary icon-width flex justify-center items-center rounded-full border-4 border-accent hover:bg-accent ease-in duration-300">
                                <MdCelebration className="text-5xl text-primary"></MdCelebration>
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold mt-5">Let us help you with the event</h1>
                    </div>
                    <div>
                        <div className="w-1/2 mx-auto">
                            <div className="bg-secondary icon-width flex justify-center items-center rounded-full border-4 border-accent hover:bg-accent ease-in duration-300">
                                <GiGlassCelebration className="text-5xl text-primary"></GiGlassCelebration>
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold mt-5">Enjoy the party with your friends</h1>
                    </div>
                </div>
                <div className="flex gap-20 justify-center items-center pb-20 pt-10">
                    <button className="bg-secondary hover:bg-accent ease-in-out duration-300 text-primary px-4 py-2 text-xl">Book Events</button>
                    <button className="bg-secondary hover:bg-accent ease-in-out duration-300 text-primary px-4 py-2 text-xl">Gallery</button>
                </div>
            </div>
        </div>
    );
};

export default About;