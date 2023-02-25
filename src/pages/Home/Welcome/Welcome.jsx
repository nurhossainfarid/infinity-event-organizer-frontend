import React from "react";
import { Link } from "react-router-dom";
// custom css
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="lg:py-24 md:py-10 py-6 bg-slate-100">
      <section className="text-center md:mx-8 mx-5 lg:mx-28">
        <h1 className="lg:text-5xl md:text-3xl text-2xl welcome-header text-purple-600 flex justify-center 
        gap-3">
        স্বাগত আপনাকে <p className="animate-bounce"> IEO </p>তে 
        </h1>
        <p className=" md:text-md text-sm lg:text-lg pt-5 pb-16 lg:mx-48">
        আধুনিক বিশ্বে থেকে আমরা পিছিয়ে থাকবো? না, কোনো দিনই না। তাই আমরা আপনাদের কথা ভেবে নিয়ে এসেছি এমন 
         একটা প্লাটফর্ম, যেখানে আপনি বাংলাদেশের যেকোনো জায়গা 
          থেকে বসে আপনার বিভিন্ন অনুষ্ঠানের জন্য আপনার পছন্দের অরগানাইজার বুকিং করতে পারেন। এছাড়াও আপনি চাইলে 
           আপনার যেকোনো অনুষ্ঠানের এর জন্য খাবার অর্ডার করতে পারেন।
        </p>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mx-6 md:mx-28 ">
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
              <Link to="/services" for="#great_service" className="border-2 read-btn btn-outline btn-secondary 
               lg:w-1/3 w-1/2 text-center rounded-md font-semibold ease-in duration-300 hover:rotate-6">
                Read More....
              </Link>
              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                  <h2 className="card-title text-black">Great Services</h2>
                  <p className="text-base text-black welcome-p">
                  খুব অল্প সময়ের মধ্য আপনি খুঁজে পাবেন আপনার পছন্দের অরগানাইজার। কোনো রকম কষ্ট ও জামেলা ছাড়াই 
                   আপনি আপনার যেকোনো অনুষ্ঠানের জন্য অরগানাইজার বুকিং করতে পারবেন। এছাড়াও আপনি আপনার  
                   অনুষ্ঠানের সাজসজ্জা ও খাবার অডার করতে পারবেন।
                  </p>
                </div>
              </div>
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
              <button className="border-2 read-btn btn-outline btn-secondary lg:w-1/3 w-1/2 text-center 
              rounded-md font-semibold ease-in duration-300 hover:rotate-6">
                Read More....
              </button>
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
              <button className="border-2 read-btn btn-outline btn-secondary lg:w-1/3 w-1/2 text-center 
              rounded-md font-semibold ease-in duration-300 hover:rotate-6">
                Read More....
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
