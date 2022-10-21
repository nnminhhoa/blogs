import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import PostMeta from "../PostMeta/PostMeta";

const Slide = () => {
  const slideRef = useRef();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots slick-thumb",
    appendDots: (dots) => (
      <div style={{ bottom: "-80px" }}>
        <ul>{dots}</ul>
      </div>
    ),
  };
  const nextSlide = () => {
    slideRef.current.slickNext();
  };
  const prevSlide = () => {
    slideRef.current.slickPrev();
  };
  return (
    <div className="relative px-[0.75rem] lg:px-20 my-16">
      <button
        onClick={() => prevSlide()}
        className="absolute top-1/2 left-3 -translate-y-1/2"
      >
        <GrLinkPrevious className="text-xl cursor-pointer" />
      </button>
      <button
        onClick={() => nextSlide()}
        className="absolute top-1/2 right-5 -translate-y-1/2"
      >
        <GrLinkNext className="text-xl cursor-pointer" />
      </button>
      <Slider ref={slideRef} {...settings}>
        <>
          <div className="flex items-center bg-[#f8f9fa] cursor-grab active:cursor-grabbing flex-wrap">
            <div className="w-full lg:w-1/2">
              <img
                src="../../Assets/Images/xbig_img_1.jpg.pagespeed.ic.K2N7KNYATl.jpg"
                alt=""
              />
            </div>
            <div className="flex-1 p-6 lg:px-14">
              <span className="text-primaryColor text-[10px] md:text-xs lg:text-[0.9rem] uppercase tracking-[.1rem]">
                Editor's Pick
              </span>
              <h2 className="text-base md:text-[26px] leading-tight mb-2">
                News Needs to Meet Its Audiences Where They Are
              </h2>
              <p className="text-primaryColor text-xs md:text-sm md:text-[.95rem] leading-5 lg:leading-6 lg:mb-3 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate vero obcaecati natus adipisci necessitatibus eius,
                enim vel sit ad reiciendis. Enim praesentium magni delectus cum,
                tempore deserunt aliquid quaerat culpa nemo veritatis, iste
                adipisci excepturi consectetur doloribus aliquam accusantium
                beatae?
              </p>
              <PostMeta />
            </div>
          </div>
        </>
        <>
          <div className="flex items-center bg-[#f8f9fa] cursor-grab active:cursor-grabbing flex-wrap">
            <div className="w-full lg:w-1/2">
              <img
                src="../../Assets/Images/xbig_img_1.jpg.pagespeed.ic.K2N7KNYATl.jpg"
                alt=""
              />
            </div>
            <div className="flex-1 p-6 lg:px-14">
              <span className="text-primaryColor text-[10px] md:text-xs lg:text-[0.9rem] uppercase tracking-[.1rem]">
                Editor's Pick
              </span>
              <h2 className="text-base md:text-[26px] leading-tight mb-2">
                News Needs to Meet Its Audiences Where They Are
              </h2>
              <p className="text-primaryColor text-xs md:text-sm md:text-[.95rem] leading-5 lg:leading-6 lg:mb-3 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate vero obcaecati natus adipisci necessitatibus eius,
                enim vel sit ad reiciendis. Enim praesentium magni delectus cum,
                tempore deserunt aliquid quaerat culpa nemo veritatis, iste
                adipisci excepturi consectetur doloribus aliquam accusantium
                beatae?
              </p>
              <PostMeta />
            </div>
          </div>
        </>
      </Slider>
    </div>
  );
};

export default Slide;
