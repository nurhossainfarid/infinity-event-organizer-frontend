import React from 'react';

// import images 
import img1 from '../../../images/private_party_events.jpg';

// react front 
import { BsCheckCircleFill } from "react-icons/bs";

const HonorAward = () => {
    return (
        <div className="mx-24 py-10">
            <div className="grid grid-cols-2 gap-10">
                <div className="order-2">
                    <img src={img1} alt="Album"/>
                </div>
                <div className="order-1">
                    <p className="text-lg text-gray-700">Updated</p>
                    <div className="card-actions justify-start mt-10">
                    <button className="border-2 border-secondary px-5 py-2 text-xl text-secondary font-semibold hover:bg-secondary hover:text-primary ease-in duration-300">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HonorAward;