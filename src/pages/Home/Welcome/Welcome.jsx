import React from "react";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

// Reveal animation
import Roll from 'react-reveal/Roll';

// custom css
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="lg:py-24 md:py-10 py-6 bg-slate-100 relative">
      <Fade left cascade>
        <section className="text-center md:mx-8 mx-5 lg:mx-28">
            <h1 className="lg:text-5xl md:text-3xl text-2xl welcome-header text-purple-600 flex justify-center 
            gap-3"   data-aos="fade-down-righ"
            data-aos-duration="2000">
            স্বাগত আপনাকে <p className=""> IEO </p>তে 
            </h1>
            <p className=" md:text-md text-sm lg:text-lg pt-5 pb-16 lg:mx-48">
            আধুনিক বিশ্বে থেকে আমরা পিছিয়ে থাকবো? না, কোনো দিনই না। তাই আমরা আপনাদের কথা ভেবে নিয়ে এসেছি এমন 
            একটা প্লাটফর্ম, যেখানে আপনি বাংলাদেশের যেকোনো জায়গা 
              থেকে বসে আপনার বিভিন্ন অনুষ্ঠানের জন্য আপনার পছন্দের অরগানাইজার বুকিং করতে পারেন। এছাড়াও আপনি চাইলে 
              আপনার যেকোনো অনুষ্ঠানের এর জন্য খাবার অর্ডার করতে পারেন।
            </p>
        </section>
      </Fade>
      <Roll right cascade>
        <section className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mx-6 md:mx-28 relative z-10">
          <div className="card ease-in-out duration-300 bg-base-100 shadow-xl hover:bg-purple-700 hover:text-white 
          hover:scale-110 ">
            <div className="card-body">
              <h2 className="card-title">Great Services</h2>
              <p className="text-base text-slate-500 welcome-p">
              খুব অল্প সময়ের মধ্য আপনি খুঁজে পাবেন আপনার পছন্দের অরগানাইজার। কোনো রকম কষ্ট ও জামেলা ছাড়াই আপনি 
              আপনার যেকোনো অনুষ্ঠানের....
              </p>
              <div className="flex justify-end">
                {/* The button to open modal */}
                <label htmlFor="my-modal-5" className="border-2 read-btn btn-outline btn-secondary 
                lg:w-1/3 w-1/2 text-center rounded-md font-semibold ease-in duration-300 hover:rotate-6">
                  Read More....
                </label>
              </div>
            </div>
          </div>
          <div className="card ease-in-out duration-300 bg-base-100 shadow-xl hover:bg-purple-700 hover:text-white 
          hover:scale-110">
            <div className="card-body">
              <h2 className="card-title">Great Food</h2>
              <p className="text-base text-slate-500 welcome-p">
              ঘরে বসেই আপনি টেস্ট করতে পারেন আপনার পছন্দের যেকোনো ধরেন খাবার। আপনার অনুষ্ঠানের জন্য পছন্দের 
              যেকোনো ধরেন খাবার বেঁচে....
              </p>
              <div className="flex justify-end">
                <label htmlFor="my-modal6" className="border-2 read-btn btn-outline btn-secondary 
                lg:w-1/3 w-1/2 text-center rounded-md font-semibold ease-in duration-300 hover:rotate-6">
                  Read More....
                </label>
              </div>
            </div>
          </div>
          <div className="card ease-in-out duration-300 bg-base-100 shadow-xl hover:bg-purple-700 hover:text-white 
          hover:scale-110">
            <div className="card-body">
              <h2 className="card-title">Great Ideas</h2>
              <p className="text-base text-slate-500 welcome-p">
              আপনি আপনার পছন্দের যেকোনো অর্গানাইজারের থেকে আপনার অনুষ্ঠান সুন্দর করার জন্য বিভিন্ন আইডিয়া নিতে পারেন 
              এবং চাইলে আপনার আইডিয়া তাদের সাথে শেয়ার করে আপনার অনুষ্ঠান কে করতে পারেন....
              </p>
              <div className="flex justify-end">
                <label htmlFor="my-modal7" className="border-2 read-btn btn-outline btn-secondary 
                lg:w-1/3 w-1/2 text-center rounded-md font-semibold ease-in duration-300 hover:rotate-6">
                  Read More....
                </label>
              </div>
            </div>
          </div>
          {/* Great Service Model */}
          <input type="checkbox" id="my-modal-5" className="modal-toggle" />
          <div className="modal absolute bg-transparent text-white">
            <div className="modal-box w-11/12 max-w-5xl bg-purple-600">
            <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="font-bold text-lg">Great Services</h3>
              <p className="py-4">খুব অল্প সময়ের মধ্য আপনি খুঁজে পাবেন আপনার পছন্দের অরগানাইজার। কোনো রকম কষ্ট ও 
              জামেলা ছাড়াই আপনি আপনার যেকোনো অনুষ্ঠানের জন্য অর্গানাইজারের প্যাকেজগুলো বুক করতে পারবেন। আপনি 
                চাইলে আপনার পছন্দের প্যাকেজগুলোর মধ্য তুলনা করতে পারবেন। তুলনা করে আপনি আপনার পছন্দমতো প্যাকেজ 
                বেঁচে নিতে পারবেন। এছাড়াও আপনি চাইলে আপনার ইভেন্টের ছবিগুলো এবং ডিট্লেস আমাদের সাথে শেয়ার করতে 
                  পারবেন, যা আমরা আমাদের সাইটে প্রদর্শন করব এবং প্রত্যেক সপ্তাহে আমরা তিনজন কে বেঁচে নিবো এবং পুরস্কৃত 
                  করবো।</p>
            </div>
          </div>
          {/* Great Food Model */}
          <input type="checkbox" id="my-modal6" className="modal-toggle" />
          <div className="modal absolute bg-transparent text-white">
            <div className="modal-box w-11/12 max-w-5xl bg-purple-600">
              <label htmlFor="my-modal6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="font-bold text-lg">Great Food</h3>
              <p className="py-4">ঘরে বসেই আপনি টেস্ট করতে পারেন আপনার পছন্দের যেকোনো ধরেন খাবার। আপনার 
              অনুষ্ঠানের জন্য আপনার পছন্দ মতো যেকোনো ধরনের খাবারের প্যাকেজ ওডার করতে পারবেন। এছাড়াও চাইলে আপনি 
                নিজের ইচ্ছা মতো খাবারের প্যাকেজগুলো কাস্টমাইজড করতে পারবেন। অথবা প্রতি জনের জন্য একটা নিদিষ্ট পরিমানের 
                খাবার নিবাচন করতে পারবেন। এতে করে আপনার খাবারে অপচয় কম হবে এবং অতিরিক্ত টাকাও বেঁচে যাবে।
              </p>
            </div>
          </div>
          {/* Great Ideas Model */}
          <input type="checkbox" id="my-modal7" className="modal-toggle" />
          <div className="modal absolute bg-transparent text-white">
            <div className="modal-box w-11/12 max-w-5xl bg-purple-600">
            <label htmlFor="my-modal7" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="font-bold text-lg">Great Ideas</h3>
              <p className="py-4">আপনি আপনার পছন্দের যেকোনো অর্গানাইজারের থেকে আপনার অনুষ্ঠান সুন্দর করার জন্য 
              বিভিন্ন আইডিয়া নিতে পারেন এবং চাইলে আপনার আইডিয়া তাদের সাথে শেয়ার করে আপনার অনুষ্ঠান কে করতে পারেন 
                আরো ঝাকঝমক। আপনি আপনার ইচ্ছামত আপনার অনুষ্ঠানের সাজসজ্জা করতে পারবেন, এতে আপনাকে অর্গানাইজার 
                গুলো সর্বোচ্চ সাহায্য করবে। আবার আপনি চাইলে আপনার বাড়ির অনুষ্ঠানের সাজসজ্জা করার জন্য অর্গানাইজার গুলো 
                  বুক করতে পারবেন এবং আমাদের ব্লক সিস্টেমের মাধ্যমে আপনার আইডি এবং বুদ্ধিমত্তাকে অন্যদের মধ্যে ছড়িয়ে 
                  দিতে পারবেন।</p>
            </div>
          </div>
        </section>
      </Roll>
    </div>
  );
};

export default Welcome;
