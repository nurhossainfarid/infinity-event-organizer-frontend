import React from "react";

// import images
import img1 from "../../../images/private_party_events.jpg";

// react front
import { BsCheckCircleFill } from "react-icons/bs";

const Vision = () => {
  return (
    <div className="lg:mx-24 py-10">
      <div className="grid grid-cols md:grid-cols-2 gap-10">
        <div>
          <img src={img1} alt="Album" />
        </div>
        <div>
          <p className="text-lg text-gray-700">
            Infinity Event Organizer is an online event management system that
            provide the information about all party center or community center
            details information with their updated schedule to the customers and
            save customers time and provide best service in his budget.
          </p>
          <ul className="my-5">
            <li className="text-xl mb-2 fs-bold flex gap-3 items-center">
              <BsCheckCircleFill className="text-green-600"></BsCheckCircleFill>
              Provide Digital Solution
            </li>
            <li className="text-xl mb-2 fs-bold flex gap-2 items-center">
              <BsCheckCircleFill className="text-green-600"></BsCheckCircleFill>
              Save Customer Time
            </li>
            <li className="text-xl mb-2 fs-bold flex gap-2 items-center">
              <BsCheckCircleFill className="text-green-600"></BsCheckCircleFill>
              Send Feedback to Organizers
            </li>
            <li className="text-xl mb-2 fs-bold flex gap-2 items-center">
              <BsCheckCircleFill className="text-green-600"></BsCheckCircleFill>
              Make Customer life more easy to arrange a event
            </li>
          </ul>
          <div className="card-actions justify-start mt-10">
            <button
              className="border-2 border-secondary px-5 py-2 text-xl text-secondary font-semibold 
                     hover:bg-secondary hover:text-white ease-in duration-300"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
