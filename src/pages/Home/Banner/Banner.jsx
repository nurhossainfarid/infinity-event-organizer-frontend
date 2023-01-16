// Dependencies
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Parallax } from "swiper";

// custom css
import "./Banner.css";

// background images
import Background1 from "../../../images/banner_bg1.jpg";
import Background2 from "../../../images/banner_bg2.jpg";
import Background3 from "../../../images/banner_bg3.jpg";
import Background4 from "../../../images/banner_bg4.jpg";
import Background5 from "../../../images/banner_bg5.jpg";
import Background6 from "../../../images/banner_bg6.jpg";
import Background8 from "../../../images/banner_bg7.jpg";
import Background7 from "../../../images/food_banner_bg.jpg";

const Banner = () => {
  return (
    <div className="banner-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        Parallax={true}
        modules={[Autoplay, Pagination, Parallax]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img
            style={{ height: "800px" }}
            className="w-full parallax-bg"
            src={Background1}
            alt=""
          />
          <div className="absolute w-2/5 top-48 text-white left-16">
            <div className="slider-title p-5">
              <div className="title text-5xl" data-swiper-parallax="-300">
                Slide 1
              </div>
              <div
                className="subtitle text-2xl my-4"
                data-swiper-parallax="-200"
              >
                Subtitle
              </div>
              <div className="text text-lg" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </p>
              </div>
            </div>
            <div className="mt-20 flex gap-10 justify-end ">
              <button className="btn btn-outline border-none bg-secondary hover:bg-primary text-black hover:text-white text-3xl">
                Order
              </button>
              <button className="btn btn-outline border-secondary hover:border-none text-secondary hover:bg-secondary hover:text-primary text-3xl">
                view
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            style={{ height: "800px" }}
            className="w-full"
            src={Background2}
            alt=""
          />
          <div className="absolute w-2/5 top-48 text-white left-16">
            <div className="slider-title p-5">
              <div className="title text-5xl" data-swiper-parallax="-300">
                Slide 1
              </div>
              <div
                className="subtitle text-2xl my-4"
                data-swiper-parallax="-200"
              >
                Subtitle
              </div>
              <div className="text text-lg" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </p>
              </div>
            </div>
            <div className="mt-20 flex gap-10 justify-end ">
              <button className="btn btn-outline border-none bg-secondary hover:bg-primary text-black hover:text-white text-3xl">
                Order
              </button>
              <button className="btn btn-outline border-secondary hover:border-none text-secondary hover:bg-secondary hover:text-primary text-3xl">
                view
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            style={{ height: "800px" }}
            className="w-full"
            src={Background3}
            alt=""
          />
          <div className="absolute w-2/5 top-48 text-white left-16">
            <div className="slider-title p-5">
              <div className="title text-5xl" data-swiper-parallax="-300">
                Slide 1
              </div>
              <div
                className="subtitle text-2xl my-4"
                data-swiper-parallax="-200"
              >
                Subtitle
              </div>
              <div className="text text-lg" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </p>
              </div>
            </div>
            <div className="mt-20 flex gap-10 justify-end ">
              <button className="btn btn-outline border-none bg-secondary hover:bg-primary text-black hover:text-white text-3xl">
                Order
              </button>
              <button className="btn btn-outline border-secondary hover:border-none text-secondary hover:bg-secondary hover:text-primary text-3xl">
                view
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            style={{ height: "800px" }}
            className="w-full"
            src={Background4}
            alt=""
          />
          <div className="absolute w-2/5 top-48 text-white left-16">
            <div className="slider-title p-5">
              <div className="title text-5xl" data-swiper-parallax="-300">
                Slide 1
              </div>
              <div
                className="subtitle text-2xl my-4"
                data-swiper-parallax="-200"
              >
                Subtitle
              </div>
              <div className="text text-lg" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </p>
              </div>
            </div>
            <div className="mt-20 flex gap-10 justify-end ">
              <button className="btn btn-outline border-none bg-secondary hover:bg-primary text-black hover:text-white text-3xl">
                Order
              </button>
              <button className="btn btn-outline border-secondary hover:border-none text-secondary hover:bg-secondary hover:text-primary text-3xl">
                view
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            style={{ height: "800px" }}
            className="w-full"
            src={Background5}
            alt=""
          />
          <div className="absolute w-2/5 top-48 text-white left-16">
            <div className="slider-title p-5">
              <div className="title text-5xl" data-swiper-parallax="-300">
                Slide 1
              </div>
              <div
                className="subtitle text-2xl my-4"
                data-swiper-parallax="-200"
              >
                Subtitle
              </div>
              <div className="text text-lg" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </p>
              </div>
            </div>
            <div className="mt-20 flex gap-10 justify-end ">
              <button className="btn btn-outline border-none bg-secondary hover:bg-primary text-black hover:text-white text-3xl">
                Order
              </button>
              <button className="btn btn-outline border-secondary hover:border-none text-secondary hover:bg-secondary hover:text-primary text-3xl">
                view
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            style={{ height: "800px" }}
            className="w-full"
            src={Background6}
            alt=""
          />
          <div className="absolute w-2/5 top-48 text-white left-16">
            <div className="slider-title p-5">
              <div className="title text-5xl" data-swiper-parallax="-300">
                Slide 1
              </div>
              <div
                className="subtitle text-2xl my-4"
                data-swiper-parallax="-200"
              >
                Subtitle
              </div>
              <div className="text text-lg" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </p>
              </div>
            </div>
            <div className="mt-20 flex gap-10 justify-end ">
              <button className="btn btn-outline border-none bg-secondary hover:bg-primary text-black hover:text-white text-3xl">
                Order
              </button>
              <button className="btn btn-outline border-secondary hover:border-none text-secondary hover:bg-secondary hover:text-primary text-3xl">
                view
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            style={{ height: "800px" }}
            className="w-full"
            src={Background7}
            alt=""
          />
          <div className="absolute w-2/5 top-48 text-white left-16">
            <div className="slider-title p-5">
              <div className="title text-5xl" data-swiper-parallax="-300">
                Slide 1
              </div>
              <div
                className="subtitle text-2xl my-4"
                data-swiper-parallax="-200"
              >
                Subtitle
              </div>
              <div className="text text-lg" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </p>
              </div>
            </div>
            <div className="mt-20 flex gap-10 justify-end ">
              <button className="btn btn-outline border-none bg-secondary hover:bg-primary text-black hover:text-white text-3xl">
                Order
              </button>
              <button className="btn btn-outline border-secondary hover:border-none text-secondary hover:bg-secondary hover:text-primary text-3xl">
                view
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            style={{ height: "800px" }}
            className="w-full"
            src={Background8}
            alt=""
          />
          <div className="absolute w-2/5 top-48 text-white left-16">
            <div className="slider-title p-5">
              <div className="title text-5xl" data-swiper-parallax="-300">
                Slide 1
              </div>
              <div
                className="subtitle text-2xl my-4"
                data-swiper-parallax="-200"
              >
                Subtitle
              </div>
              <div className="text text-lg" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </p>
              </div>
            </div>
            <div className="mt-20 flex gap-10 justify-end ">
              <button className="btn btn-outline border-none bg-secondary hover:bg-primary text-black hover:text-white text-3xl">
                Order
              </button>
              <button className="btn btn-outline border-secondary hover:border-none text-secondary hover:bg-secondary hover:text-primary text-3xl">
                view
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
