import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

// import images 
import img1 from '../../../images/holiday_events.jpg';

const HolidayParties = () => {
    return (
        <div className="mx-24">
            <div className="flex justify-center mt-5">
                <img src={img1} className="w-1/2" alt="" />
            </div>
            <div>
                <h1 className="text-3xl font-semibold mt-8">Engaging event attendees can be difficult – and blowing them away is even harder.</h1>
                <p className="mt-5">Lorem ipsum dolor sit amet, eos alia alterum efficiendi ut, te essent albucius conclusionemque his. Cums suasas eligendi perfecto te. Eos posse semper officiis an. Qui ex tale partiendo, his te affert mediocrem molestiae, eama vide appetere ne. Qui ex tale partiendo, his te affert mediocrem molestiae.
                    At Cole, Scott & Kissane, P.A. our commitment to a diverse law firm and inclusive work environment is paramount to the success of our firm and our communities.</p>
                <ul className="my-5">
                    <li className="text-xl mb-2 fs-bold flex gap-3 items-center"><BsCheckCircleFill className="text-green-600"></BsCheckCircleFill>User can easily find party center by using this website.</li>
                    <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill className="text-green-600"></BsCheckCircleFill>User can compare any package with multiple party center package.</li>
                    <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill className="text-green-600"></BsCheckCircleFill>User can give feedback about party center service.</li>
                    <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill className="text-green-600"></BsCheckCircleFill>Party center management can promote their package.</li>
                    <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill className="text-green-600"></BsCheckCircleFill>Party center management can improve their service.</li>
                </ul>
            </div>
        </div>
    );
};

export default HolidayParties;