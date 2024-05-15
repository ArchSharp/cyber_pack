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
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
// import { Navbar } from "./NavBar";
import { useAppDispatch } from "../Store/store";
import { setHeader } from "../Features/User/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import * as routes from "../Data/Routes";
// import { useAppSelector } from "../Store/store";

export const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hideTopNav, setHideTopNav] = useState(false);
  const isTabletOrPhone = useMediaQuery({ query: "(max-width: 768px)" });
  const isPhone = useMediaQuery({ query: "(max-width: 425px)" });

  // Accessing the current route
  const currentRoute = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      // Update the scroll position
      setScrollPosition(window.scrollY);
    };

    // Add the event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 60) {
      setHideTopNav(true);
    } else if (scrollPosition === 0) {
      setHideTopNav(false);
    }
  }, [scrollPosition]);

  // const handleScrollToTop = () => {
  //   // Scroll the window to the top of the document smoothly
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  // console.log("current route: ", currentRoute);

  return (
    <div
      className={`flex flex-col items-center justify-center bg-main text-white font-poppins z-[4] ${
        hideTopNav === true
          ? "sticky top-0 header-minH"
          : "relative header-maxH"
      }`}
    >
      {/* {!hideTopNav && ( */}
      <div
        className={`${
          hideTopNav ? "header-fade" : ""
        } ml-auto mr-[8vw] mb-[1vh] hidden lg:flex items-center`}
      >
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
      {/* )} */}
      <div className="h-[12vh] lg:h-fit flex items-center w-screen">
        <img
          src={cyberpack}
          alt="cyberpack"
          className="w-[100px] lg:w-[180px] h-[30px] ml-[6vw] cursor-pointer"
          onClick={() => navigate(routes.homepage)}
        />
        <div className="hidden lg:flex ml-auto mr-[8vw] text-sm">
          <div
            className="ml-auto mr-6 cursor-pointer"
            onClick={() => dispatch(setHeader("aboutus"))}
          >
            About Us
          </div>
          <div
            className="mr-6 cursor-pointer"
            onClick={() => {
              dispatch(setHeader("services"));
              if (currentRoute !== "/") {
                navigate(routes.homepage);
              }
            }}
          >
            Services
          </div>
          <div
            className="mr-6 cursor-pointer"
            onClick={() => dispatch(setHeader("clients"))}
          >
            Clients
          </div>
          <div className="mr-6 cursor-pointer">Careers</div>
          <div
            className="cursor-pointer"
            onClick={() => dispatch(setHeader("contactus"))}
          >
            Contact Us
          </div>
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
                style={
                  {
                    "--navbar-width": `${isPhone ? "85vw" : "60vw"}`,
                  } as any
                }
                className={`lg:hidden fixed top-0 right-0 h-[100vh] bg-navbar z-[2] ${
                  isOpen ? "navbar1" : "navbar2"
                }`}
              >
                <IoClose
                  className="lg:hidden ml-auto mt-6 md:mt-14 mr-5 cursor-pointer text-3xl"
                  onClick={() => setIsOpen(!isOpen)}
                />

                <ul className="pl-5 mt-10">
                  <li
                    className="text-slate-200 text-lg px-2 py-2 font-bold"
                    onClick={() => {
                      dispatch(setHeader("aboutus"));
                      if (currentRoute === "/custom-software-development") {
                        navigate(routes.homepage);
                      }
                      setIsOpen(!isOpen);
                    }}
                  >
                    {/* <Navbar head={"About Us"} /> */}
                    About Us
                  </li>
                  <li
                    className="text-slate-200 text-lg px-2 py-2 font-bold"
                    onClick={() => {
                      dispatch(setHeader("services"));
                      if (currentRoute === "/custom-software-development") {
                        navigate(routes.homepage);
                      }
                      setIsOpen(!isOpen);
                    }}
                  >
                    {/* <Navbar head={"Services"} /> */}
                    Services
                  </li>
                  <li
                    className="text-slate-200 text-lg px-2 py-2 font-bold"
                    onClick={() => {
                      dispatch(setHeader("clients"));
                      if (currentRoute === "/custom-software-development") {
                        navigate(routes.homepage);
                      }
                      setIsOpen(!isOpen);
                    }}
                  >
                    Clients
                  </li>
                  <li className="text-slate-200 text-lg px-2 py-2 font-bold">
                    Careers
                  </li>
                  <li
                    className="text-slate-200 text-lg px-2 py-2 font-bold"
                    onClick={() => {
                      dispatch(setHeader("contactus"));
                      if (currentRoute === "/custom-software-development") {
                        navigate(routes.homepage);
                      }
                      setIsOpen(!isOpen);
                    }}
                  >
                    Contact Us
                  </li>
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
