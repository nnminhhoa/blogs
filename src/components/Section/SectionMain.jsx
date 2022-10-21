import React from "react";
import PostMeta from "../PostMeta/PostMeta";

const SectionMain = () => {
  return (
    <div className="px-[0.75rem] lg:px-20 my-16">
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad
            reiciendis. Enim praesentium magni delectus cum, tempore deserunt
            aliquid quaerat culpa nemo veritatis, iste adipisci excepturi
            consectetur doloribus aliquam accusantium beatae?
          </p>
          <PostMeta />
        </div>
      </div>
    </div>
  );
};

export default SectionMain;
