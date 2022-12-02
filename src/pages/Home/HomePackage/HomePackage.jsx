import React from 'react';
// add custom css
import './HomePackage.css';

const HomePackage = () => {
    return (
        <div className="home-package-container">
            <section className="relative">
                <div className="home-package relative">
                    <div className="absolute bg-black w-full h-full opacity-60"></div>
                    <div className="mx-28 text-white relative pt-28 pb-64 text-center">
                        <p className="pb-5">CHOOSE YOUR</p>
                        <h1 className="home-package-header text-5xl animate-bounce">Our Events Packages</h1>
                        <p className="text-xl md:w-1/2 mx-auto pt-10">Integer sollicitudin ligula non enim sodales, non lacinia nunc ornare. Sed commodo tempor dapibus tortor volutpat, eget rhoncus nisi fringilla. Phasellus ornare risus ineuismod varius.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="mx-28 absolute">
                    <div className="grid md:grid-cols-3 gap-6 pb-32 -mt-40">
                        <div className="show-package1 border-8 border-white hover:border-secondary hover:scale-95 ease-in duration-300 ">
                            <div className="card w-96 shadow-xl relative rounded-none mx-2 my-2 home-package-cover">
                                <div className="absolute bg-black w-full h-full hover:bg-secondary opacity-80"></div>
                                <div className="grid grid-cols-1 gap-2 py-10 pb-16 w-4/5 mx-auto relative text-white ">
                                    <h2 className="card-title text-2xl">Birthday Parties</h2>
                                    <h1 className="card-title text-3xl">B.C.P Friday Black Night</h1>
                                    <p className="text-lg font-semibold">Price: $100</p>
                                    <p className="text-lg font-semibold">Time: 3 Hours</p>
                                    <p className="text-lg font-semibold">Maximum: Up to 10 Persons</p>
                                    <p>Decoration</p>
                                    <p>Catering</p>
                                    <div className="card-actions justify-center">
                                        <button className="btn btn-outline btn-primary">See Details..</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="show-package2 border-8 border-white hover:border-secondary hover:scale-95 ease-in duration-300 ">
                            <div className="card w-96 shadow-xl relative rounded-none mx-auto my-2 home-package-cover">
                                <div className="absolute bg-black w-full h-full hover:bg-secondary opacity-80"></div>
                                <div className="grid grid-cols-1 gap-2 py-10 pb-16 w-4/5 mx-auto relative text-white">
                                    <h2 className="card-title text-2xl">Weddings Celebrations</h2>
                                    <h1 className="card-title text-3xl">W.C.P Friday Black Night</h1>
                                    <p className="text-lg font-semibold">Price: $950</p>
                                    <p className="text-lg font-semibold">Time: 5 Hours</p>
                                    <p className="text-lg font-semibold">Maximum: Up to 50 Persons</p>
                                    <p>Decoration</p>
                                    <p>Catering</p>
                                    <div className="card-actions justify-center">
                                        <button className="btn btn-outline btn-primary">See Details..</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="show-package3 border-8 border-white hover:border-secondary hover:scale-95 ease-in duration-300 ">
                            <div className="card w-96 shadow-xl relative rounded-none mx-auto my-2 home-package-cover">
                                <div className="absolute bg-black w-full h-full hover:bg-secondary opacity-80"></div>
                                <div className="grid grid-cols-1 gap-2 py-10 pb-16 w-4/5 mx-auto relative text-white">
                                    <h2 className="card-title text-2xl">Corporate Events</h2>
                                    <h1 className="card-title text-3xl">C.E.P Friday Black Night</h1>
                                    <p className="text-lg font-semibold">Price: $740</p>
                                    <p className="text-lg font-semibold">Time: 10 Hours</p>
                                    <p className="text-lg font-semibold">Maximum: Up to 100 Persons</p>
                                    <p>Decoration</p>
                                    <p>Catering</p>
                                    <div className="card-actions justify-center">
                                        <button className="btn btn-outline btn-primary">See Details..</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center pb-16 animate-bounce">
                        <button className="btn btn-outline btn-secondary text-2xl hover:font-bold">View All !!</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePackage;