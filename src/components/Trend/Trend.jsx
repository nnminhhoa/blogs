import React from "react";
import { Link } from "react-router-dom";
import PostMeta from "../PostMeta/PostMeta";
import { MdOutlineNavigateNext } from "react-icons/md";

const Trend = () => {
  return (
    <div className="flex lg:px-20 px-[0.75rem] py-16 flex-wrap lg:flex-nowrap">
      <div className="w-full lg:w-2/3">
        <h2 className="text-xl inline-block font-normal text-headingColor mb-10 relative after:absolute after:content-[''] after:w-full after:h-[0.5px] after:bg-headingColor after:bottom-0 after:left-0">
          Editor's Pick
        </h2>
        <div className="flex gap-[30px] flex-wrap md:flex-nowrap">
          <div className="w-full md:w-1/2">
            <div>
              <img
                src="../../Assets/Images/ximg_h_1.jpg.pagespeed.ic.IUFbLUay1G.jpg"
                alt=""
              />
            </div>
            <h2 className="lg:text-xl text-base md:text-lg leading-tight mt-4 mb-2">
              News Needs to Meet Its Audiences Where They Are
            </h2>
            <p className="text-primaryColor text-xs md:text-sm lg:text-[.9rem] leading-6 lg:mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              temporibus praesentium neque, voluptatum quam quibusdam.
            </p>
            <PostMeta />
          </div>

          <div className="flex-1">
            <div className="flex mb-[30px] gap-3 bg-[#f8f9fa] items-center">
              <div className="h-24 w-28">
                <img
                  src="../../Assets/Images/ximg_h_1.jpg.pagespeed.ic.IUFbLUay1G.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1">
                <h2 className="mb-2 text-[#000] text-sm lg:text-[15px] leading-5 cursor-pointer">
                  News Needs to Meet Its Audiences Where They Are
                </h2>
                <PostMeta />
              </div>
            </div>
            <div className="flex mb-[30px] gap-3 bg-[#f8f9fa]">
              <div className="h-24 w-28">
                <img
                  src="../../Assets/Images/ximg_v_2.jpg.pagespeed.ic.LvRqrfFXI1.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1">
                <h2 className="mb-2 text-[#000] text-sm lg:text-[15px] leading-5 cursor-pointer">
                  News Needs to Meet Its Audiences Where They Are
                </h2>
                <PostMeta />
              </div>
            </div>
            <div className="flex mb-[30px] gap-3 bg-[#f8f9fa]">
              <div className="h-24 w-28">
                <img
                  src="../../Assets/Images/xbig_img_1.jpg.pagespeed.ic.K2N7KNYATl.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1">
                <h2 className="mb-2 text-[#000] text-sm lg:text-[15px] leading-5 cursor-pointer">
                  News Needs to Meet Its Audiences Where They Are
                </h2>
                <PostMeta />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex-1 mt-[1rem] lg:mt-0">
        <h2 className="text-xl inline-block font-normal text-headingColor mb-10 relative after:absolute after:content-[''] after:w-full after:h-[0.5px] after:bg-headingColor after:bottom-0 after:left-0">
          Trending
        </h2>
        <div className="flex items-start gap-3 mb-3">
          <div className="w-1/6 text-left text-[#ccc] text-3xl">01</div>
          <div className="flex-1">
            <h2 className="lg:mb-2 text-[#000] text-sm lg:text-lg leading-5 lg:leading-6 cursor-pointer">
              News Needs to Meet Its Audiences Where They Are
            </h2>
            <PostMeta />
          </div>
        </div>
        <div className="flex items-start gap-3 mb-3">
          <div className="w-1/6 text-left text-[#ccc] text-3xl">02</div>
          <div className="flex-1">
            <h2 className="lg:mb-2 text-[#000] text-sm lg:text-lg leading-5 lg:leading-6 cursor-pointer">
              News Needs to Meet Its Audiences Where They Are
            </h2>
            <PostMeta />
          </div>
        </div>
        <div className="flex items-start gap-3 mb-3">
          <div className="w-1/6 text-left text-[#ccc] text-3xl">03</div>
          <div className="flex-1">
            <h2 className="lg:mb-2 text-[#000] text-sm lg:text-lg leading-5 lg:leading-6 cursor-pointer">
              News Needs to Meet Its Audiences Where They Are
            </h2>
            <PostMeta />
          </div>
        </div>
        <div className="flex items-start gap-3 mb-3">
          <div className="w-1/6 text-left text-[#ccc] text-3xl">04</div>
          <div className="flex-1">
            <h2 className="lg:mb-2 text-[#000] text-sm lg:text-lg leading-5 lg:leading-6 cursor-pointer">
              News Needs to Meet Its Audiences Where They Are
            </h2>
            <PostMeta />
          </div>
        </div>

        <Link to={"/"} className="text-hoverColor text-sm flex gap-[2px] items-center hover:text-green-600 mt-8">
          SEE ALL TRENDS <MdOutlineNavigateNext className="text-hoverColor text-lg"/>
        </Link>
      </div>
    </div>
  );
};

export default Trend;
