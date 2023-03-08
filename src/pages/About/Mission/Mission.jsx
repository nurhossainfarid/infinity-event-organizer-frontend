import React from 'react';

// import images 
import img1 from '../../../images/private_party_events.jpg';

// react front 
import { BsCheckCircleFill } from "react-icons/bs";

const Mission = () => {
    return (
        <div className="lg:mx-24 py-10">
            <div className="grid grid-cols lg:grid-cols-2 gap-10">
                <div className="order-2">
                    <img src={img1} alt="Album"/>
                </div>
                <div className="order-1">
                    <p className="text-lg text-gray-700">The goal of this events management system is save 
                     customers time and provide best service in his budget. This system can monitor multiple 
                      events at a time and customers can give feedback to community center owner or party center 
                       owner to improve their service.</p>
                    <ul className="my-5">
                        <li className="text-xl mb-2 fs-bold flex gap-3 items-center"><BsCheckCircleFill         
                         className="text-green-600"></BsCheckCircleFill>User can easily find party center by 
                          using this website.</li>
                        <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill 
                         className="text-green-600"></BsCheckCircleFill>User can compare any package with 
                          multiple party center package.</li>
                        <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill 
                         className="text-green-600"></BsCheckCircleFill>User can give feedback about party center 
                          service.</li>
                        <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill 
                         className="text-green-600"></BsCheckCircleFill>Party center management can promote their 
                          package.</li>
                        <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill 
                         className="text-green-600"></BsCheckCircleFill>Party center management can improve their 
                          service.</li>
                    </ul>
                    <div className="card-actions justify-start mt-10">
                    <button className="border-2 border-secondary px-5 py-2 text-xl text-secondary font-semibold 
                     hover:bg-secondary hover:text-primary ease-in duration-300">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;