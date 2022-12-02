import React from 'react';

// import images 
import img1 from '../../../images/private_party_events.jpg';

// react front 
import { BsCheckCircleFill } from "react-icons/bs";


const WhoWeAre = () => {
    return (
        <div className="mx-24 py-10">
            <div className="grid grid-cols-2 gap-10">
                <div>
                    <img src={img1} alt="Album"/>
                </div>
                <div>
                    <p className="text-lg text-gray-700">In the era of Digital Bangladesh, we have to solve every problem Digitally. In the present days we face many kinds of problem to organize an event. First of all we can not get any free space in party center or community center at our desired days. On the other hand many time party center take extra payment because we have not any chance to compare their service and payment with other community center. So this online website customer can compare between multiple party center service and fees. Infinity Event Organizer offers a web-based solution to the customers difficulties that saves time, minimize hassle, best service in his budget and get solution quickly. Infinity Event Organizer is an online event management system that provide the information about all party center or community center details information with their updated schedule to the customers.</p>
                    <div className="card-actions justify-start mt-10">
                    <button className="border-2 border-secondary px-5 py-2 text-xl text-secondary font-semibold hover:bg-secondary hover:text-primary ease-in duration-300">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;