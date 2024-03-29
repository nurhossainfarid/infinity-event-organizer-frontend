import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

// import images 
import img1 from '../../../images/holiday_events.jpg';

// reveal animation
import Bounce from 'react-reveal/Bounce';

const HolidayParties = () => {
    return (
        <Bounce cascade>
            <div className="lg:mx-24">
                <div className="flex justify-center mt-5">
                    <img src={img1} className=" lg:w-1/2" alt="" />
                </div>
                <div>
                    <h1 className="text-3xl font-semibold mt-8">Holiday Plane</h1>
                    <p className="mt-5">অফিস ছুটির পার্টি কখনও কখনও ভয়ঙ্কর হয়. এটিকে একটি দুর্দান্ত ইভেন্টে পরিণত করার 
                    জন্য একটি কোম্পানির সর্বোত্তম প্রচেষ্টা থাকা সত্ত্বেও, অনেকগুলি কেবল সাধারণ বিরক্তিকর বা ভয়ঙ্করভাবে ভুল হয়ে 
                    যায়৷ ইনফিনিটি ইভেন্ট অর্গানাইজার ওয়েডিং এবং ইভেন্ট ম্যানেজমেন্ট নিয়োগ করে বিরক্তিকর এবং ভয়ঙ্কর এড়িয়ে 
                        চলুন যাতে এটি এমন একটি ইভেন্টে পরিণত হয় যা আপনার স্টাফদের নতুন বছরে ভালভাবে গুঞ্জন করা হবে।
                        <br /> <br />
                        আমাদের পেশাদার ইভেন্ট সমন্বয়কারী হবেন আপনার ডেডিকেটেড ইভেন্ট প্ল্যানার। একটি ক্যাটার করা আনুষ্ঠানিক 
                        সিট-ডাউন ডিনার থেকে একটি নৈমিত্তিক এবং আরামদায়ক হ্যাঙ্গআউট পর্যন্ত, আমাদের কাছে যে কোনও 
                        ধরণের ইভেন্ট আয়োজন করার দক্ষতা রয়েছে। একটি নিখুঁত ছুটির পার্টি তৈরি করতে আমরা আপনার 
                        কোম্পানির বাজেটের মধ্যে কাজ করব।
                    </p>
                </div>
            </div>
        </Bounce>
    );
};

export default HolidayParties;