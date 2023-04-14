import React from "react";

// import images
import img1 from "../../../images/private_party_events.jpg";

// react front
import { BsCheckCircleFill } from "react-icons/bs";

const WhoWeAre = () => {
  return (
    <div className="lg:mx-24 py-10">
      <div className="grid grid-cols lg:grid-cols-2 gap-10">
        <div>
          <img src={img1} alt="Album" />
        </div>
        <div>
          <p className="text-lg text-gray-700">
          ইনফিনিটি অ্যালগো স্টেশন এক ধরনের সফটওয়্যার ফার্ম। আপনার প্রয়োজন অনুযায়ী আমরা যেকোনো ধরনের সফটওয়্যার   
           সমাধান প্রদান করি। আমাদের প্রথম লক্ষ্য ক্লায়েন্ট সন্তুষ্টি অর্জন করা হয়. আমরা সব আপডেট প্রযুক্তি দিয়ে আমাদের 
            সফটওয়্যার তৈরি করি। আমরা আমাদের ক্লায়েন্টকে যেকোন ধরনের ওয়েব অ্যাপ, ওয়েবসাইট এবং অ্যান্ড্রয়েড অ্যাপ দিয়ে 
             থাকি। শীঘ্রই আমরা আপনাকে ওয়েব নিরাপত্তা এবং অ্যাপ নিরাপত্তা প্রদান করব। ক্লায়েন্টের চাহিদা পূরণ করার জন্য 
              আমাদের একটি নিবেদিত পরিশ্রমী দল রয়েছে।
          </p>
          <div className="card-actions justify-start mt-10">
            <a href="https://infinityalgostation.com/" target="_blank"
              className="border-2 border-secondary px-5 py-2 text-xl text-secondary font-semibold 
                     hover:bg-secondary hover:text-white ease-in duration-300"
            >
              Visit Our Official Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
