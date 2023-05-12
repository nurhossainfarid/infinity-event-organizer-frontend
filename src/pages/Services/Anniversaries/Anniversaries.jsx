import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

// import Images
import img1 from '../../../images/banner_bg6.jpg';
import img2 from '../../../images/couple_banner.jpg';

// reveal animation
import Fade from 'react-reveal/Fade';

const Anniversaries = () => {
    return (
        <Fade top cascade>
            <div className="lg:mx-24">
                <div className="grid grid-cols-2 gap-10 mt-5">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                </div>
                <div>
                    <h1 className="text-3xl font-semibold mt-8">Anniversary Party Plane</h1>
                    <p className="mt-5">একটি বার্ষিকী পার্টি একটি মাইলফলক চিহ্নিত করার একটি আদর্শ উপায়। এটি বন্ধু এবং 
                    পরিবারের সদস্যদের উদযাপনে অংশ নিতে দেয়। ইনফিনিটি ইভেন্ট অর্গানাইজারের চমৎকার সম্পদ, আপনি পঞ্চম 
                    বার্ষিকী উদযাপন করুন বা পঞ্চাশতম। <br /> <br /> লোকেরা যখন বার্ষিকীর কথা ভাবে, তখন প্রায়ই বিবাহের 
                    কথা মনে 
                    আসে। আপনি ভাগ করে নেওয়ার প্রথম বিবাহ বার্ষিকী হলেও, নিঃসন্দেহে অনেক উত্থান-পতন আছে আপনাদের 
                        দুজনের মধ্যে। এগুলি সত্ত্বেও, আপনার ভালবাসা রক-কঠিন এবং অকৃত্রিম থাকে। <br /> <br />
    
                        যদিও বিবাহের বার্ষিকীগুলি সম্ভবত সবচেয়ে সুপরিচিত, তবে অন্যান্য ধরণের বার্ষিকী রয়েছে যা আপনি পরিকল্পনা   
                        করতে পারেন। আপনার জীবনে বা আপনার প্রতিষ্ঠানের জন্য উল্লেখযোগ্য সময় সম্পর্কে চিন্তা করুন। আপনি 
                        সম্ভবত সেই স্মৃতিগুলি থেকে বার্ষিকী পার্টির জন্য ধারণাগুলি আঁকবেন। <br />

                        উদাহরণস্বরূপ, আপনার থাকতে পারে:</p>
                    <ul className="my-5">
                        <li className="text-xl mb-2 fs-bold flex gap-3 items-center"><BsCheckCircleFill 
                        className="text-green-600"></BsCheckCircleFill>ক্যান্সার থেকে মুক্ত হওয়ার জন্য একটি বার্ষিকী 
                        পার্টি</li>
                        <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill 
                        className="text-green-600"></BsCheckCircleFill>ইতিহাসের স্মরণীয় ঘটনা যা পরবর্তী প্রজন্মকে শেখা 
                        পাঠ বুঝতে সাহায্য করে</li>
                        <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill 
                        className="text-green-600"></BsCheckCircleFill>একটি পার্টি তারিখের সাথে মিলে যায় যখন কেউ 
                        সামরিক চাকরি শেষ করে</li>
                        <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill 
                        className="text-green-600"></BsCheckCircleFill>একটি উল্লেখযোগ্য সাংস্কৃতিক অনুষ্ঠান</li>
                        <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill 
                        className="text-green-600"></BsCheckCircleFill>একজন ব্যক্তি যখন তার নিজের কোম্পানি শুরু করেন 
                        তখন মনে রাখার জন্য একটি সমাবেশ</li>
                    </ul>
                </div>
            </div>
        </Fade>
    );
};

export default Anniversaries;