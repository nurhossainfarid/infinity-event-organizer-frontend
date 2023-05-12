import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import images
import img1 from "../../../images/feedback1.jpg";
import img2 from "../../../images/feedback2.jpg";
import img3 from "../../../images/feedback3.jpg";
import img4 from "../../../images/party-plane.jpg";

// reveal animation
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';

// custom css
import "./HomeClient.css";

// import required modules
import { Autoplay } from "swiper";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const HomeClient = () => {
  const [randomBooking, setRandomBooking] = useState([]);
  const [user] = useAuthState(auth);
  // const { email } = user;
  const { register, handleSubmit } = useForm();
  // let bookingId;
  const onSubmit = data => {
    // bookingId = data._id;
  };
  // useEffect(() => {
  //   const url = `http://localhost:5000/v1/booking/email/${email}`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setRandomBooking(data.data);
  //     });
  // }, [randomBooking]);
  // const result = randomBooking.map((book) => {
  //   if (book._id === bookingId) {
  //     toast.success(`congratulation your Booking Ref. id correct`);
  //   }
  // })
  // console.log(result);

  return (
    <div className="lg:grid grid-cols-2 pb-40 bg-slate-100">
      <section className="client-feedback-bg relative">
        <div className="absolute bg-secondary opacity-60 h-full w-full"></div>
        <div className="ml-6 md:ml-10 lg:ml-28 relative py-10 lg:pt-20">
          <div>
            <h1 className="text-3xl md:text-5xl text-white client-feedback-header">
              Client Feedback
            </h1>
          </div>
          <div className="mt-10">
            <Swiper
              loop={true}
              loopFillGroupWithBlank={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="flex gap-5 items-start">
                  <img src={img1} className="rounded-full" alt="client-img" />
                  <div>
                    <h1 className="text-white text-xl font-semibold mt-3">
                      Afsana
                    </h1>
                    <h3 className="text-slate-300 text-md">Dhaka City</h3>
                  </div>
                </div>
                <div className="mt-6 border-l-4 border-white mr-6 md:mr-16">
                  <p className="px-3 md:px-5 text-md md:text-lg text-slate-200">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloret quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex gap-5 items-start">
                  <img src={img2} className="rounded-full" alt="client-img" />
                  <div>
                    <h1 className="text-white text-xl font-semibold mt-3">
                      Nur
                    </h1>
                    <h3 className="text-slate-300 text-md">Dhaka City</h3>
                  </div>
                </div>
                <div className="mt-6 border-l-4 border-white mr-6 md:mr-16">
                  <p className="px-3 md:px-5 text-md md:text-lg text-slate-200">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloret quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex gap-5 items-start">
                  <img src={img3} className="rounded-full" alt="client-img" />
                  <div>
                    <h1 className="text-white text-xl font-semibold mt-3">
                      Afsana
                    </h1>
                    <h3 className="text-slate-300 text-md">Dhaka City</h3>
                  </div>
                </div>
                <div className="mt-6 border-l-4 border-white mr-6 md:mr-16">
                  <p className="px-3 md:px-5 text-md md:text-lg text-slate-200">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloret quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <Link to="/dashboard/userBookingHistory" className="btn mt-10 bg-fuchsia-600 border-none text-white hover:bg-fuchsia-600"
            htmlFor="modal-feedback"> 
          Send FeedBack</Link>
          {/* Put this part before </body> tag */}
            </div>
      </section>
      <section className="lg:absolute lg:block hidden left-1/2 -ml-20 mt-10">
        <Slide right>
          <img src={img4} alt="" />
        </Slide>
      </section>
    </div>
  );
};

export default HomeClient;
