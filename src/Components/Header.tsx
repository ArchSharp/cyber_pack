import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaBars,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { IoClose, IoSearch } from "react-icons/io5";
import cyberpack from "../Images/CyberPack/Jpgs/Cyberpack.png";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isTabletOrPhone = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="header flex flex-col items-center h-[12vh] lg:h-[20vh] bg-main text-white font-poppins">
      <div className="ml-auto mr-[8vw] mt-[2vh] mb-[3vh] hidden lg:flex items-center">
        <IoSearch className="mr-2 text-2xl cursor-pointer" />
        <div className="w-6 h-6 flex items-center justify-center rounded-[50%] bg-iconBg mr-2 hover:bg-slate-400 cursor-pointer">
          <FaFacebookF className="text-xs" />
        </div>
        <div className="w-6 h-6 flex items-center justify-center rounded-[50%] bg-iconBg mr-2 hover:bg-slate-400 cursor-pointer">
          <FaXTwitter className="text-xs" />
        </div>
        <div className="w-6 h-6 flex items-center justify-center rounded-[50%] bg-iconBg mr-2 hover:bg-slate-400 cursor-pointer">
          <FaYoutube className="text-xs" />
        </div>
        <div className="w-6 h-6 flex items-center justify-center rounded-[50%] bg-iconBg mr-2 hover:bg-slate-400 cursor-pointer">
          <FaLinkedinIn className="text-xs" />
        </div>
        <div className="w-6 h-6 flex items-center justify-center rounded-[50%] bg-iconBg mr-2 hover:bg-slate-400 cursor-pointer">
          <FaInstagram className="text-xs" />
        </div>
      </div>
      <div className="h-[12vh] lg:h-fit flex items-center w-screen">
        <img
          src={cyberpack}
          alt="cyberpack"
          className="w-[100px] lg:w-[180px] h-[30px] ml-[6vw]"
        />
        <div className="hidden lg:flex ml-auto mr-[8vw] text-sm">
          <div className="ml-auto mr-6 cursor-pointer">About Us</div>
          <div className="mr-6 cursor-pointer">Services</div>
          <div className="mr-6 cursor-pointer">Clients</div>
          <div className="mr-6 cursor-pointer">Careers</div>
          <div className="cursor-pointer">Contact Us</div>
        </div>
        {isTabletOrPhone && (
          <>
            <FiSearch className="lg:hidden ml-auto mr-5 text-2xl" />
            <FaBars
              className="lg:hidden mr-5 text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            />
            {isOpen && (
              <div
                className={`lg:hidden fixed top-0 right-0 w-[75vw] h-[100vh] bg-navbar z-[2] ${
                  isOpen ? "navbar1" : "navbar2"
                }`}
              >
                <IoClose
                  className="lg:hidden ml-auto mt-6 md:mt-14 mr-5 cursor-pointer text-3xl"
                  onClick={() => setIsOpen(!isOpen)}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
