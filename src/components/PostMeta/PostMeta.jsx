import React from "react";
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const PostMeta = () => {
  return (
    <div>
      <Link className="text-[10px] md:text-xs lg:text-[.8rem] hover:text-hoverColor" to={"/"}>
        Dave Rogers
      </Link>
      <span className="mx-1 text-xs lg:text-sm text-primaryColor">in</span>
      <Link className="text-[10px] md:text-xs lg:text-[.8rem] hover:text-hoverColor" to={"/"}>
        Food
      </Link>
      <div className="flex gap-1 items-center">
        <span className="text-primaryColor text-[10px] md:text-xs lg:text-[.8rem]">Jun 14</span>
        <BsDot className="text-primaryColor" />
        <span className="text-primaryColor text-[10px] md:text-xs lg:text-[.8rem]">3 min read</span>
        <AiFillStar className="text-primaryColor text-[10px] md:text-xs" />
      </div>
    </div>
  );
};

export default PostMeta;
