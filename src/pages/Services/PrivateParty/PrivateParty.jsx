import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

// import images
import img1 from '../../../images/couple-dancing-ther-wedding.jpg';

// reveal animation
import Roll from 'react-reveal/Roll';

const PrivateParty = () => {
    return (
        <Roll right cascade>
            <div className="lg:mx-24 grid grid-cols lg:grid-cols-2 gap-10 mt-5">
                <div className=" ">
                    <img src={img1} className="w-full h-full" alt="" />
                </div>
                <div>
                    <h1 className="text-3xl font-semibold">Private Party</h1>
                    <p className="mt-5">আপনি যদি অন্যের মতো একটি পার্টি চান - অনন্য, সাহসী এবং অত্যন্ত বিনোদনমূলক, 
                        তাহলে আর তাকাবেন না।
                        <br /><br />
                        একটি ব্যক্তিগত পার্টির পরিকল্পনা করা সময়সাপেক্ষ এবং চাপযুক্ত হতে পারে।  IEO ইভেন্টগুলিতে, আমাদের 
                         লক্ষ্য হল বিলাসবহুল ব্যক্তিগত ইভেন্টগুলিকে সহজ করা।  এমনকি আপনার সবচেয়ে বিচক্ষণ অতিথিদেরও 
                          বাহ করার জন্য আমরা শ্বাসরুদ্ধকর, পছন্দসই পার্টিগুলি তৈরি করি যা চমত্কার বিনোদন সহ।  আমরা 
                           আপনার স্বপ্নের ইভেন্ট ডিজাইন করতে আপনার সাথে ঘনিষ্ঠভাবে কাজ করব এবং একটি সুপার রিলাক্সড 
                            এবং স্ট্রেস-মুক্ত অভিজ্ঞতার জন্য শুরু থেকে শেষ পর্যন্ত সবকিছু পরিচালনা করব।
                    </p>
                    <ul className="my-5">
                        <li className="text-xl mb-2 fs-bold flex gap-3 items-center"><BsCheckCircleFill 
                        className="text-green-600"></BsCheckCircleFill>Spectacular themes</li>
                        <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill 
                        className="text-green-600"></BsCheckCircleFill>Gourmet Food</li>
                        <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill 
                        className="text-green-600"></BsCheckCircleFill>Fine wine & Delicious cocktails</li>
                        <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill 
                        className="text-green-600"></BsCheckCircleFill>Electric lighting</li>
                        <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill 
                        className="text-green-600"></BsCheckCircleFill>Invitation design</li>
                        <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill 
                        className="text-green-600"></BsCheckCircleFill>Guest list management</li>
                        <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill 
                        className="text-green-600"></BsCheckCircleFill>Security and facilities</li>
                    </ul>
                </div>
            </div>
        </Roll>
    );
};

export default PrivateParty;