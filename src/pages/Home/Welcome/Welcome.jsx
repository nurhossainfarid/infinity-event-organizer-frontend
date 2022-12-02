import React from 'react';
// custom css
import './Welcome.css';

const Welcome = () => {
    return (
        <div className="py-24 bg-slate-100">
            <section className="text-center mx-28 ">
                <h1 className="text-5xl welcome-header animate-bounce">Welcome to <span className="animate-bounce">E.M.S</span></h1>
                <p className="text-lg pt-5 pb-16 md:mx-48">From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions,
                We offer full range of Events Management Services that scale to your needs & budget.</p>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-28 ">
                <div className="card ease-in-out duration-300 bg-base-100 shadow-xl hover:bg-purple-700 hover:text-white hover:scale-110 ">
                    <div className="card-body">
                        <h2 className="card-title">Great Services</h2>
                        <p className="text-base text-slate-500 welcome-p">Corem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation</p>
                        <div className="flex justify-end">
                            <button class="border-2 read-btn btn-outline hover:btn-outline-0 btn-secondary w-1/3 text-center rounded-md font-semibold ease-in duration-300 hover:rotate-6">Read More....</button>
                        </div>
                    </div>
                </div>
                <div className="card ease-in-out duration-300 bg-base-100 shadow-xl hover:bg-purple-700 hover:text-white hover:scale-110">
                    <div className="card-body">
                        <h2 className="card-title">Great People</h2>
                        <p className="text-base text-slate-500 welcome-p">Corem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation</p>
                        <div className="flex justify-end">
                            <button class="border-2 read-btn btn-outline btn-secondary w-1/3 text-center rounded-md font-semibold ease-in duration-300 hover:rotate-6">Read More....</button>
                        </div>
                    </div>
                </div>
                <div className="card ease-in-out duration-300 bg-base-100 shadow-xl hover:bg-purple-700 hover:text-white hover:scale-110">
                    <div className="card-body">
                        <h2 className="card-title">Great Ideas</h2>
                        <p className="text-base text-slate-500 welcome-p">Corem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation</p>
                        <div className="flex justify-end">
                            <button class="border-2 read-btn btn-outline btn-secondary w-1/3 text-center rounded-md font-semibold ease-in duration-300 hover:rotate-6">Read More....</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Welcome;