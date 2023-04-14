import React, { useEffect, useState } from 'react';
// add custom css
import './HomePackage.css';
import { Link, useNavigate } from 'react-router-dom';

const HomePackage = () => {
    const [packageData, setPackageData] = useState([]);
    useEffect(() => {
        const url = 'https://event-api.nurhossainfarid.com/v1/package';
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setPackageData(data.data);
            })
    }, [packageData]);
    const navigate = useNavigate();
    const packageNavigate = (packageId) => {
        navigate(`/orderPackage/${packageId}`)
    }
    return (
        <div className="home-package-container">
            <section className="relative">
                <div className="home-package relative">
                    <div className="absolute bg-black w-full h-full opacity-60"></div>
                    <div className="md:mx-10 lg:mx-28 text-white relative py-10 md:py-16 lg:pt-28 lg:pb-64 
                    text-center">
                        <p className="pb-5">CHOOSE YOUR</p>
                        <h1 className="home-package-header text-2xl md:text-5xl animate-bounce">Organizers Events 
                         Packages</h1>
                        <p className="text-sm md:text-xl lg:w-1/2 mx-auto pt-3 md:pt-10">
                        আপনার অনুষ্ঠানের ধরন অনুযায়ী আপনি যে কোন প্যাকেজ বেছে নিতে পারেন এবং কাস্টম ভাবে প্যাকেজ 
                         তৈরি করতে পারে</p>
                    </div>
                </div>                              
            </section>
            <section className="grid grid-cols-3 gap-10 lg:absolute mx-28" >
                {
                    packageData.map((pack) => 
                    <div className="flex flex-col items-center justify-center md:mx-10 lg:mx-0 mt-10 
                    lg:-mt-40 home_pack_main">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-3 lg:gap-6 pb-20 
                    lg:pb-32 justify-center items-center w-full">
                        <div className="show-package1 border-8 border-white hover:border-secondary 
                        hover:scale-95 ease-in duration-300">
                            <div className="card lg:w-96 shadow-xl relative rounded-none mx-2 my-2 
                            home-package-cover">
                                <div className="absolute bg-black w-full h-full hover:bg-secondary opacity-80">
                                </div>
                                <div className="grid grid-cols-1 gap-2 py-10 pb-16 w-4/5 mx-auto relative 
                                text-white">
                                    <h2 className="card-title text-md md:text-2xl">Birthday Parties</h2>
                                    <h1 className="card-title text-lg md:text-3xl">{pack.name}</h1>
                                    <p className="text-sm md:text-lg font-semibold">{pack.price}</p>
                                    <p className="text-sm md:text-lg font-semibold">{pack.time}</p>
                                    <p className="text-sm md:text-lg font-semibold">Maximum: 
                                             {pack.attend}</p>
                                    <p>Decoration</p>
                                    <p>Catering</p>
                                    <div className="card-actions justify-center">
                                        <button onClick={() => packageNavigate(pack?._id)} className="btn 
                                        btn-outline text-white  
                                        border-white 
                                        hover:bg-purple-600"
                                        >Order</button>
                                        <button className="btn btn-outline text-white border-white 
                                        hover:bg-purple-600">See
                                            Details..</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                ).slice(0,3)
                }
                <div className="flex justify-center lg:pb-16">
                    <button className="border-2 rounded-lg border-purple-600 text-purple-600 p-2 text-xl 
                    font-semibold hover:bg-purple-600 hover:text-white ease-out duration-150">
                        View All !!
                    </button>
                </div>
            </section>
        </div>
    );
};

export default HomePackage;