import React from 'react';

// import images
import sponsorImg1 from '../../../images/sponsor1.png';
import sponsorImg2 from '../../../images/sponsor2.png';
import sponsorImg3 from '../../../images/sponsor3.png';
import sponsorImg4 from '../../../images/sponsor4.png';
import sponsorImg5 from '../../../images/sponsor5.png';
import sponsorImg6 from '../../../images/sponsor6.png';
import sponsorImg7 from '../../../images/sponsor7.png';
import sponsorImg8 from '../../../images/sponsor8.png';

// custom css
import './HomeSponsors.css';

const HomeSponsors = () => {
    return (
        <div>
            {/* sponsors info */}
            <section>
                {/* sponsors header */}
                {/* <section className="sponsor-bg relative">
                    <div className="absolute bg-black opacity-60 h-full w-full"></div>
                    <div className="relative py-16">
                        <h3 className="font-semibold text-sm text-primary text-center mb-3">WE PROVIDE AWESOME DEALS</h3>
                        <h1 className="sponsors-header text-primary text-center text-5xl animate-bounce">Event Sponsors</h1>
                        <p className="text-lg text-gray-100 mx-auto py-5 md:w-2/3 text-center">Aiusmod tempor incididunt ut labore magna aliqua.</p>
                    </div>
                </section> */}
                {/* show sponsors */}
                {/* <section className="bg-slate-100 py-20">
                    <div className="grid grid-cols-4 gap-5 mx-28">
                        <div className="sponsor-showup-sec bg-primary hover:scale-105 hover:border-4 hover:border-secondary ease-in duration-300">
                            <img src={sponsorImg1} className="z-10" alt="" />
                        </div>
                        <div className="sponsor-showup-sec bg-primary hover:scale-105 hover:border-4 hover:border-secondary ease-in duration-300">
                            <img src={sponsorImg2} className="z-10" alt="" />
                        </div>
                        <div className="sponsor-showup-sec bg-primary hover:scale-105 hover:border-4 hover:border-secondary ease-in duration-300">
                            <img src={sponsorImg3} className="z-10" alt="" />
                        </div>
                        <div className="sponsor-showup-sec bg-primary hover:scale-105 hover:border-4 hover:border-secondary ease-in duration-300">
                            <img src={sponsorImg4} className="z-10" alt="" />
                        </div>
                        <div className="sponsor-showup-sec bg-primary hover:scale-105 hover:border-4 hover:border-secondary ease-in duration-300">
                            <img src={sponsorImg5} className="z-10" alt="" />
                        </div>
                        <div className="sponsor-showup-sec bg-primary hover:scale-105 hover:border-4 hover:border-secondary ease-in duration-300">
                            <img src={sponsorImg6} className="z-10" alt="" />
                        </div>
                        <div className="sponsor-showup-sec bg-primary hover:scale-105 hover:border-4 hover:border-secondary ease-in duration-300">
                            <img src={sponsorImg7} className="z-10" alt="" />
                        </div>
                        <div className="sponsor-showup-sec bg-primary hover:scale-105 hover:border-4 hover:border-secondary ease-in duration-300">
                            <img src={sponsorImg8} className="z-10" alt="" />
                        </div>
                    </div>
                </section> */}
            </section>
            {/* create sponsors */}
            <section className="bg-slate-100 pt-48">
                <div className="absolute z-10 -mt-40 ">
                    <div className="w-1/2 mx-auto create-sponsor-bg relative border-8 border-primary">
                        <div className="absolute bg-secondary opacity-80 h-full w-full"></div>
                        <div className="py-16 relative">
                            <h1 className="text-center text-5xl text-white animate-pulse mb-3">Our Happy Customer</h1>
                            <p className="text-lg text-gray-200 mx-auto py-5 md:w-2/3 text-center">Integer sollicitudin ligula non enim sodales, non lacinia nunc ornare. Sed commodo tempor dapibus tortor volutpat, eget rhoncus nisi fringilla. Phasellus ornare risus ineuismod varius.</p>
                        </div>
                    </div>
                </div>
                <div className="create-sponsor-bg2 relative">
                    <div className="absolute bg-secondary opacity-70 h-full w-full"></div>
                    <div className="py-20 relative z-20 mx-36">
                        <div className="grid grid-cols-4 gap-8 mt-40">
                            <div className="relative hover:scale-95 hover:border-4 hover:border-primary ease-in-out duration">
                                <div className="absolute bg-black opacity-80 h-full w-full"></div>
                                <div className="relative text-center py-10">
                                    <h1 className="text-white text-2xl text-uppercase font-bold">FUN PARTIES</h1>
                                    <h2 className="text-red-700 text-4xl font-bold">280</h2>
                                </div>
                            </div>
                            <div className="relative hover:scale-95 hover:border-4 hover:border-primary ease-in-out duration">
                                <div className="absolute bg-black opacity-80 h-full w-full"></div>
                                <div className="relative text-center py-20">
                                    <h1 className="text-white text-2xl text-uppercase font-bold">FUN PARTIES</h1>
                                    <h2 className="text-red-700 text-4xl font-bold">280</h2>
                                </div>
                            </div>
                            <div className="relative hover:scale-95 hover:border-4 hover:border-primary ease-in-out duration">
                                <div className="absolute bg-black opacity-80 h-full w-full"></div>
                                <div className="relative text-center py-20">
                                    <h1 className="text-white text-2xl text-uppercase font-bold">FUN PARTIES</h1>
                                    <h2 className="text-red-700 text-4xl font-bold">280</h2>
                                </div>
                            </div>
                            <div className="relative hover:scale-95 hover:border-4 hover:border-primary ease-in-out duration">
                                <div className="absolute bg-black opacity-80 h-full w-full"></div>
                                <div className="relative text-center py-20">
                                    <h1 className="text-white text-2xl text-uppercase font-bold">FUN PARTIES</h1>
                                    <h2 className="text-red-700 text-4xl font-bold">280</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeSponsors;