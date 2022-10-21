import React, { useEffect, useState } from "react";
import { GrFacebookOption, GrTwitter } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [activeNav, setActiveNav] = useState(false);
  const path = useLocation();
  const [activePage, setActivePage] = useState("");
  useEffect(() => {
    if (path.pathname === "/") {
      setActivePage("Home");
    } else {
      setActiveNav(path.pathname);
    }
  }, [path]);
  return (
    <header className="w-full">
      {/* Header top */}
      <div className="relative flex justify-between h-24 items-center px-[0.75rem] lg:px-20 flex-wrap gap-2 my-2">
        <div className="w-full lg:w-auto">
          <Link
            to={"/"}
            className="lg:text-[2rem] text-2xl text-headingColor hover:text-hoverColor ease-linear duration-200"
          >
            Meranda
          </Link>
        </div>
        <div className="flex gap-3 items-center">
          <ul className="lg:flex gap-4 items-center hidden">
            <li className="group">
              <Link to={"/"}>
                <GrFacebookOption className="text-lg group-hover:text-primaryColor ease-linear duration-200" />
              </Link>
            </li>
            <li className="group">
              <Link to={"/"}>
                <GrTwitter className="text-lg group-hover:text-primaryColor ease-linear duration-200" />
              </Link>
            </li>
            <li className="group">
              <Link to={"/"}>
                <AiOutlineInstagram className="text-lg group-hover:text-primaryColor ease-linear duration-200" />
              </Link>
            </li>
          </ul>

          <form action="" className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="border-b-[1px] border-b-boderColor border-solid rounded-3xl border-t-0 border-l-0 border-r-0 lg:px-4 px-3 lg:py-[12px] py-2 w-2/3 lg:w-full lg:text-base text-sm placeholder:text-sm placeholder:text-[#717c88]"
            />
            <button className="bg-headingColor lg:px-[20px] px-[12px] lg:py-3 py-[10px] rounded-full ml-3 hover:bg-hoverColor ease-linear duration-200">
              <FiSearch className="text-white text-base lg:text-xl" />
            </button>
          </form>
        </div>
        <div
          className="flex lg:hidden absolute top-6 right-4 cursor-pointer"
          onClick={() => setActiveNav(true)}
        >
          <MdOutlineMenu className="text-2xl text-headingColor" />
        </div>
      </div>
      {/* Navigation */}
      <div
        className={`lg:h-10 lg:px-20 lg:flex fixed lg:relative bg-white top-0 right-0 h-screen w-3/5 z-10 px-[40px] pt-14 lg:pt-0 shadow-2xl opacity-0 ease-linear duration-[300ms] ${
          activeNav
            ? "translate-x-0 opacity-100 visible"
            : "translate-x-full invisible"
        }`}
      >
        <ul className="flex h-full lg:gap-4 gap-2 flex-col lg:flex-row">
          <li className="lg:h-full group flex items-center">
            <Link
              className={`pr-4 lg:py-2 py-[6px] lg:uppercase text-[0.8rem] lg:text-headingColor hover:text-headingColor tracking-[.05rem] font-['B612_Mono'] relative after:content-none lg:after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-headingColor after:hover:w-full after:ease-linear after:duration-200 ${
                activePage === "Home" ? "text-hoverColor" : "text-headingColor"
              }`}
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li className="lg:h-full group flex items-center">
            <Link
              className="pr-4 py-[6px] lg:uppercase text-[0.8rem] text-[#212529] lg:text-headingColor hover:text-headingColor tracking-[.05rem] font-['B612_Mono'] after:content-none relative lg:after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-headingColor after:hover:w-full after:ease-linear after:duration-200"
              to={"/"}
            >
              Categories
            </Link>
          </li>
          <li className="lg:h-full group flex items-center">
            <Link
              className="pr-4 py-[6px] lg:uppercase text-[0.8rem] text-[#212529] lg:text-headingColor hover:text-headingColor tracking-[.05rem] font-['B612_Mono'] after:content-none relative lg:after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-headingColor after:hover:w-full after:ease-linear after:duration-200"
              to={"/"}
            >
              Politics
            </Link>
          </li>
          <li className="lg:h-full group flex items-center">
            <Link
              className="pr-4 py-[6px] lg:uppercase text-[0.8rem] text-[#212529] lg:text-headingColor hover:text-headingColor tracking-[.05rem] font-['B612_Mono'] after:content-none relative lg:after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-headingColor after:hover:w-full after:ease-linear after:duration-200"
              to={"/"}
            >
              Business
            </Link>
          </li>
          <li className="lg:h-full group flex items-center">
            <Link
              className="pr-4 py-[6px] lg:uppercase text-[0.8rem] text-[#212529] lg:text-headingColor hover:text-headingColor tracking-[.05rem] font-['B612_Mono'] after:content-none relative lg:after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-headingColor after:hover:w-full after:ease-linear after:duration-200"
              to={"/"}
            >
              Health
            </Link>
          </li>
          <li className="lg:h-full group flex items-center">
            <Link
              className="pr-4 py-[6px] lg:uppercase text-[0.8rem] text-[#212529] lg:text-headingColor hover:text-headingColor tracking-[.05rem] font-['B612_Mono'] after:content-none relative lg:after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-headingColor after:hover:w-full after:ease-linear after:duration-200"
              to={"/"}
            >
              Design
            </Link>
          </li>
          <li className="lg:h-full group flex items-center">
            <Link
              className="pr-4 py-[6px] lg:uppercase text-[0.8rem] text-[#212529] lg:text-headingColor hover:text-headingColor tracking-[.05rem] font-['B612_Mono'] after:content-none relative lg:after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-headingColor after:hover:w-full after:ease-linear after:duration-200"
              to={"/"}
            >
              Sport
            </Link>
          </li>
          <li className="lg:h-full group flex items-center">
            <Link
              className="pr-4 py-[6px] lg:uppercase text-[0.8rem] text-[#212529] lg:text-headingColor hover:text-headingColor tracking-[.05rem] font-['B612_Mono'] after:content-none relative lg:after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-headingColor after:hover:w-full after:ease-linear after:duration-200"
              to={"/"}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div
          className="absolute top-6 right-4"
          onClick={() => setActiveNav(false)}
        >
          <IoMdClose className="text-2xl text-headingColor" />
        </div>
      </div>
      <hr className="text-boderColor lg:mt-2 mt-4" />
    </header>
  );
};

export default Header;
