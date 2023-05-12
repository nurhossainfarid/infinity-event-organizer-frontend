import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

// import images
import img1 from '../../../images/corporate_event.jpg';

// reveal animation
import Rotate from 'react-reveal/Rotate';

const CorporateFunction = () => {
    return (
        <Rotate left bottom cascade>
            <div className="lg:mx-24 grid grid-cols lg:grid-cols-2 gap-10 mt-5">
                <div className=" ">
                    <img src={img1} className="w-full h-full" alt="" />
                </div>
                <div>
                    <h1 className="text-3xl font-semibold">Corporate Events</h1>
                    <p className="mt-5">খাবারের চেয়ে ব্যবসায়িক বিষয়গুলি হজম করার কি ভাল সময় আছে? সবচেয়ে আকর্ষণীয় 
                     কথোপকথন কিছু ডিনার টেবিলে ছিল. এছাড়াও, আমি সর্বদা শুনেছি যে কারও হৃদয়ের সর্বোত্তম উপায় হল 
                      তাদের পেটের মাধ্যমে। এটি বলার সাথে সাথে, একটি কর্পোরেট ডিনার হতে পারে একটি দুর্দান্ত, নৈমিত্তিক 
                        উপায়, আপনার দলকে একত্রিত করতে এবং তারা যে কাজটি করেছে তা উদযাপন করতে।
                        <br /> <br />
                        অনেক কোম্পানি দীর্ঘমেয়াদী দূরবর্তী কাজের কৌশল অবলম্বন করছে বা কর্মচারীদের হাইব্রিড সময়সূচীর 
                         অনুমতি দিচ্ছে যা অফিসে থাকার সাথে বাড়িতে কাজ করাকে একত্রিত করে। এই প্রবণতা অব্যাহত থাকায়, 
                          মজাদার কর্পোরেট রিট্রিটের প্রয়োজনীয়তা নাটকীয়ভাবে বৃদ্ধি পেয়েছে। কাজের সপ্তাহের অন্তত অংশে 
                           আমাদের মধ্যে আরও বেশি সংখ্যক লোকের সাথে, কাঠামোবদ্ধ মুখোমুখি সমাবেশের পরিকল্পনা করা 
                            আগের চেয়ে আরও গুরুত্বপূর্ণ।
                    </p>
                    <ul className="my-5">
                        <li className="text-xl mb-2 fs-bold flex gap-3 items-center"><BsCheckCircleFill 
                        className="text-green-600"></BsCheckCircleFill>Work party ideas</li>
                        <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill 
                        className="text-green-600"></BsCheckCircleFill>Company party ideas</li>
                        <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill 
                        className="text-green-600"></BsCheckCircleFill>Office party games</li>
                        <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill 
                        className="text-green-600"></BsCheckCircleFill>Annual staff party ideas</li>
                        <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill 
                        className="text-green-600"></BsCheckCircleFill>Office celebration ideas</li>
                        <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill 
                        className="text-green-600"></BsCheckCircleFill>Ideas for company parties</li>
                        <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill 
                        className="text-green-600"></BsCheckCircleFill>Corporate party ideas</li>
                    </ul>
                </div>
            </div>
        </Rotate>
    );
};

export default CorporateFunction;