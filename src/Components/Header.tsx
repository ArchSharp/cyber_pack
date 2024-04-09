import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import cyberpack from "../CyberPack/Jpgs/Cyberpack.png";

export const Header = () => {
  return (
    <div className="header flex flex-col items-center h-[20vh] bg-main text-white font-poppins">
      <div className="ml-auto mr-[8vw] mt-[2vh] mb-[3vh] flex items-center">
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
      <div className="flex w-screen">
        <img src={cyberpack} alt="cyberpack" className="w-[180px] ml-[6vw]" />
        <div className="flex ml-auto mr-[8vw] text-sm">
          <div className="ml-auto mr-6 cursor-pointer">About Us</div>
          <div className="mr-6 cursor-pointer">Services</div>
          <div className="mr-6 cursor-pointer">Clients</div>
          <div className="mr-6 cursor-pointer">Careers</div>
          <div className="cursor-pointer">Contact Us</div>
        </div>
      </div>
    </div>
  );
};
