import cyber from "../Images/CyberPack/Jpgs/Cyberpack.png";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { BiUpArrow } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "../Store/store";
import { useEffect, useRef } from "react";

export const Footer = () => {
  const dispatch = useAppDispatch();
  const { header } = useAppSelector((state) => state.user);
  const aboutus = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (header === "aboutus") {
        if (aboutus.current) {
          aboutus.current.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch, header]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: smooth scrolling animation
    });
  };

  return (
    <div className="min-h-[70vh] bg-main pt-[10vh] pb-5" ref={aboutus}>
      <div
        className=" size-10 text-xl rounded-[50%] animate-bounce bg-slate-300 fixed bottom-4 right-5 cursor-pointer shadow-2xl"
        onClick={() => handleScrollToTop()}
      >
        <BiUpArrow className="mx-auto my-2" />
      </div>

      <div className="flex items-center lg:items-start lg:justify-center flex-col lg:flex-row">
        <div className="flex items-start lg:w-[45vw]">
          <div className="w-[45vw] lg:w-[21vw]">
            <div className="text-orange-600 font-bold">
              CONNECT
              <hr />
            </div>

            <div className="mt-10">
              <h3 className="text-white font-bold text-sm">Nigeria</h3>
              <div>
                <span className="text-xs text-white">Lagos: </span>
                <span className="text-orange-500 text-xs">
                  +234 904 933 8341
                </span>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-white font-bold text-sm">United Kingdom</h3>
              <div>
                <span className="text-xs text-white">UK: </span>
                <span className="text-orange-500 text-xs">+447366355226</span>
              </div>
            </div>

            <button className="mt-10 px-3 py-1 font-semibold text-sm text-white rounded-2xl bg-blue-400 hover:bg-orange-500">
              <a href="mailto:info@cyberpack.com">info@cyberpack.com</a>
            </button>
          </div>

          <div className="w-[45vw] lg:w-[21vw] ml-[2vw]">
            <div className="text-orange-600 font-bold">
              ABOUT US
              <hr />
            </div>

            <div className="mt-10 text-sm text-white">
              CyberPack was founded in 2014 and has grown to over 50 staff with
              offices in United Kingdom UK and Nigeria. We service more than 50
              medium and large organisations and build long term partnerships
              with our clients.
            </div>
            <button className="mt-10 px-3 py-1 font-semibold text-sm text-white rounded-2xl bg-blue-400 hover:bg-orange-500">
              LEARN MORE
            </button>
          </div>
        </div>

        <div className="flex items-start mt-5 lg:mt-0 lg:w-[45vw]">
          <div className="w-[45vw] lg:w-[21vw] mr-[2vw]">
            <div className="text-orange-600 font-bold">
              WORK FOR CYBERPACKHQ
              <hr />
            </div>

            <div className="mt-10 text-sm text-white">
              Grow your IT career with us. Remote and on-site vacancies
              available for mobile, Front-End, Java, Microsoft and Full-Stack
              developers. UX/UI Designers, Scrum Masters, Business Analysts,
              Project Managers and Agile Coaches.
            </div>
            <button className="mt-10 px-3 py-1 font-semibold text-sm text-white rounded-2xl bg-blue-400 hover:bg-orange-500">
              LEARN MORE
            </button>
          </div>

          <div className="w-[45vw] lg:w-[21vw]">
            <div className="text-orange-600 font-bold">
              CYBERPACKHQ VALUES
              <hr />
            </div>

            <div className="mt-10 text-sm text-white">
              Our values guide us in making a positive impact with our clients,
              partners and the communities we operate in.
              <h3 className="mt-1">Our Purpose:</h3>
              <div className="mt-2 text-sm font-bold text-white flex items-center italic">
                <div className="mr-2 size-3 bg-yellow-600 -skew-x-12"></div>
                to Serve
              </div>
              <div className="text-sm font-bold text-white flex items-center italic">
                <div className="mr-2 size-3 bg-yellow-600 -skew-x-12"></div>
                to Solve
              </div>
              <div className="text-sm font-bold text-white flex items-center italic">
                <div className="mr-2 size-3 bg-yellow-600 -skew-x-12"></div>
                to Grow
              </div>
            </div>
            <button className="mt-10 px-3 py-1 font-semibold text-sm text-white rounded-2xl bg-blue-400 hover:bg-orange-500">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      <hr className="w-[90vw] mt-16 border-slate-500 mx-auto" />

      <div className="flex flex-col lg:flex-row items-center justify-center mx-auto mt-4 md:w-[90vw]">
        <div className="mt-10 mb-5 lg:mt-0 lg:mb-0">
          <img src={cyber} alt="cyber" className="w-[250px]" />
        </div>

        <div className="w-[98vw] md:w-fit mx-auto text-center mb-5 lg:mb-0">
          <div className="text-xs text-white">
            Copyright © 2024 CyberPackHQ Ltd. All rights reserved.
          </div>
          <div className="text-xs text-orange-500">
            A Superb Technologies company
          </div>
          <div className="flex items-center justify-center text-xs text-orange-500">
            <div className="flex items-center">Contact Us |</div>
            <div className="mx-1">About Us |</div>
            <div className="">Sitemap |</div>
            <div className="mx-1">PAIA |</div>
            <div className="w-fit">Business Ethics Policy</div>
          </div>
        </div>

        <div className="ml-auto mt-[2vh] mb-[3vh] mx-auto lg:mx-0 flex items-center text-white">
          <div className="w-6 h-6 flex items-center justify-center rounded-[50%] bg-iconBg mr-2 hover:bg-orange-400 cursor-pointer">
            <FaFacebookF className="text-xs" />
          </div>
          <div className="w-6 h-6 flex items-center justify-center rounded-[50%] bg-iconBg mr-2 hover:bg-orange-400 cursor-pointer">
            <FaXTwitter className="text-xs" />
          </div>
          <div className="w-6 h-6 flex items-center justify-center rounded-[50%] bg-iconBg mr-2 hover:bg-orange-400 cursor-pointer">
            <FaYoutube className="text-xs" />
          </div>
          <div className="w-6 h-6 flex items-center justify-center rounded-[50%] bg-iconBg mr-2 hover:bg-orange-400 cursor-pointer">
            <FaLinkedinIn className="text-xs" />
          </div>
          <div className="w-6 h-6 flex items-center justify-center rounded-[50%] bg-iconBg mr-2 hover:bg-orange-400 cursor-pointer">
            <FaInstagram className="text-xs" />
          </div>
        </div>
      </div>
    </div>
  );
};
