import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

import img1 from '../../../images/birthday_party.jpg';

// reveal animation
import Rotate from 'react-reveal/Rotate';

const BirthdayParty = () => {
    return (
    <Rotate left top cascade>      
        <div className="lg:mx-24 grid grid-cols lg:grid-cols-2 gap-10 mt-5">
            <div className=" ">
                <img src={img1} className="w-full h-full" alt="" />
            </div>
            <div>
                <h1 className="text-3xl font-semibold">Birthday Party</h1>
                    <p className="mt-5">
                    আপনার জীবনে যা আছে এবং আপনি যা অর্জন করেছেন তার জন্য কৃতজ্ঞ হওয়া ভাল। কিন্তু বৃহত্তর ছবি আপনার 
                    চোখ খুলুন. আমরা যদি জীবনের ফলের প্রশংসা করতে চাই, তাহলে আমাদের প্রথমে সেই গাছের প্রশংসা করতে হবে 
                    যেটি ফল দেয়: জন্ম নিজেই। <br />

                        জন্ম তোমার শুরু। এটি একটি আজীবন সুযোগের একটি উইন্ডো, আপনার অনন্য মিশনটি পূরণ করার সুযোগ। 
                        তাই একটি জন্মদিন একটি গুরুত্বপূর্ণ উপলক্ষ, যেমন একটি জাতি তার জন্মের স্মৃতিচারণ করে বা একটি সংগঠন 
                        তার প্রতিষ্ঠার দিন উদযাপন করে। তবুও, উপহার গ্রহণ করা একটি উপলক্ষের চেয়ে অনেক বেশি। একটি বড় 
                        ঘটনা ঘটেছিল সেই দিনটিকে স্মরণ করার, উদযাপন এবং ধন্যবাদ জানানোর এবং আমরা আমাদের আহ্বান 
                        কতটা ভালভাবে পূরণ করছি তা প্রতিফলিত করার একটি সুযোগ।
                        
                        <br /><br />
                    সৃজনশীল জন্মদিন পরিকল্পনার মাধ্যমে স্মরণীয় অভিজ্ঞতা, আমরা ব্যবস্থা করি, আপনি উদযাপন 
                    করেন। আমাদের আপনি যোগাযোগ করুন এবং একটি বাজেটের জন্মদিনের পার্টি, সেরা সাজসজ্জা এবং ব্যবস্থাপনা, 
                        আজই বুক করুন, সর্বশেষ সজ্জা, বিশেষ শিল্পী, জন্মদিনে দক্ষতা। পরিষেবা: বেলুন সজ্জা, থিম সজ্জা।</p>
                <h1 class="text-2xl mt-10">How to Celebrate your birthday party: </h1>
                <ul className="my-5">
                    <li className="text-xl mb-2 fs-bold flex gap-3 items-center"><BsCheckCircleFill className="text-green-600"></BsCheckCircleFill>Rent a birthday party venue </li>
                    <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill className="text-green-600"></BsCheckCircleFill>Throw a costume party</li>
                    <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill className="text-green-600"></BsCheckCircleFill>Plan a photoshoot</li>
                    <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill className="text-green-600"></BsCheckCircleFill>Have a craft party</li>
                    <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill className="text-green-600"></BsCheckCircleFill>Have an axe-throwing party</li>
                </ul>
            </div>
        </div>
    </Rotate>
    );
};

export default BirthdayParty;