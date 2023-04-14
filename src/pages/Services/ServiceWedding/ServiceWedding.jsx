import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

// import Images
import img1 from '../../../images/gallery-4.jpg';
import img2 from '../../../images/gallery-5.jpg';


const ServiceWedding = () => {
    return (
    <div className="lg:mx-24">
        <div className="grid grid-cols-2 gap-10 mt-5">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
        </div>
        <div>
            <h1 className="text-3xl font-semibold mt-8">Wedding Plane</h1>
            <p className="mt-5">এমন একটি বিয়ের রহস্য কী যেখানে লোকেরা বিনা বাধায় জড়িয়ে পড়ে? অবশ্যই একজন শীর্ষ 
             বিবাহ পরিকল্পনাকারী নিয়োগ করা। বিষয়গুলি পরিচালনা করার জন্য একজন পেশাদার বিবাহের দিন পরিকল্পনাকারী না 
             পেয়ে কেন আপনার গাঁট বাঁধা উচিত নয় তা আবিষ্কার করতে পড়া চালিয়ে যান।
                    যদিও কিছু দম্পতি একজন ব্যক্তি প্রশ্নটি পপ করার আগে বেশ কয়েক বছর ধরে ডেট করে, অন্যরা খুব দ্রুত 
                     জড়িত হয়ে যায় কারণ তারা জানে যে অনিবার্য দেরি করে কোন লাভ নেই। আপনি যে বিভাগেই পড়ুন না কেন, 
                       আপনি একবার আপনার মিলন উদযাপনের জন্য প্রস্তুত হলে বিবাহ পরিকল্পনা পরিষেবার জন্য আপনি 
                        ইনফিনিটি ইভেন্ট অর্গানাইজার ওয়েডিং-এ আমাদের দলের উপর নির্ভর করতে পারেন। <br /> <br />

                        বিবাহের প্রতিজ্ঞার আন্তরিক বিনিময় প্রায়ই একটি বিবাহ অনুষ্ঠানের সবচেয়ে স্মরণীয় অংশ। এটি দুই ব্যক্তির 
                         স্পষ্ট অঙ্গীকারের প্রতীক যারা তাদের জীবন একসাথে ভাগ করতে চায়। যাইহোক, লোকেরা কেবল বিবাহের 
                          দিনেই প্রতিজ্ঞা বিনিময় করে না। আমাদের বিবাহ পরিকল্পনা পরিষেবাগুলি কীভাবে সহায়তা করতে পারে তা 
                           সন্ধান করুন। <br /><br />
                           আমরা কেন  :</p>
            <ul className="my-5">
                <li className="text-xl mb-2 fs-bold flex gap-3 items-center"><BsCheckCircleFill 
                 className="text-green-600"></BsCheckCircleFill>ডিজাইনার বিবাহের জন্য আপনার ওয়ান-স্টপ ওয়েবসাইট। 
                 </li>
                <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill 
                 className="text-green-600"></BsCheckCircleFill>আপনার বিবাহের ঘটনা অনন্যতা।</li>
                <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill 
                 className="text-green-600"></BsCheckCircleFill>বাংলাদেশের বিভিন্ন শহর থেকে আপনাকে বিভিন্ন বিশেষত্ব 
                  প্রদানের জন্য শক্তিশালী নেটওয়ার্ক।</li>
                <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill 
                 className="text-green-600"></BsCheckCircleFill>অত্যন্ত খরচ-কার্যকর।</li>
                <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill 
                 className="text-green-600"></BsCheckCircleFill>আমরা আপনাকে আপনার শহরের সেরা পরিষেবা প্রদানকারী 
                  খুঁজে বের করতে সাহায্য করি।</li>
                <li className="text-xl mb-2 fs-bold flex gap-2 items-center"><BsCheckCircleFill 
                 className="text-green-600"></BsCheckCircleFill>ঝামেলা মুক্ত বিবাহ.।</li>
            </ul>
        </div>
    </div>
    );
};

export default ServiceWedding;