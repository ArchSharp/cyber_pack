import { useFormik } from "formik";
import * as Yup from "yup";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import * as routes from "../Data/Routes";
import { tech_stack_v1 } from "../Data/partners";
// import { MarqueeHolder } from "../Components/MarqueeHolder";
// import ux_svg from "../Images/ux-svg.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import devCost from "../Images/development-cost.svg";
// import microsoft from "../Images/microsoft.png";
// import cbp01 from "../Images/cbp01.jpg";
import miningClient from "../Images/mining-client-mas.jpg";
import assupol from "../Images/assupol-sales.jpg";
// import { FaArrowCircleRight } from "react-icons/fa";
// import ceo from "../Images/ceo.png";
// import crypto from "../Images/crypto-shield.jpg";
import { useAppDispatch, useAppSelector } from "../Store/store";
// import { IServiceEnquiry } from "../Features/User/type";
// import { useMediaQuery } from "react-responsive";
// import ios from "../Images/ios-logo.png";
// import android from "../Images/Android.png";
// import windows from "../Images/windows.png";
// import html from "../Images/html5.png";
// import java from "../Images/java.png";
import { setHeader, setLastRoute } from "../Features/User/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
// import { UserFriendlySVG } from "../Components/UserFriendlySVG";
// import intuitive from "../Images/intuitiveexperience.svg";
// import userfriendly from "../Images/userfriendly.svg";
// import quality from "../Images/quality-of-products.svg";
// import human from "../Images/human-centred-approach.svg";
// import seo from "../Images/seo.svg";
// import { Challenges } from "../Components/Challenges";
// import pixa from "../Images/perkaloo.png";
// import { ConnectWithUs } from "../Components/ConnectWithUs";
// import { ClientsReview } from "../Components/ClientsReview";
// import macbook from "../Images/macbook.png";
import { UxSVG } from "../Components/UxSVG";
// import diagnosis from "../Images/diagnosis_frame.gif";
// import { LuDot } from "react-icons/lu";
// import { strategies } from "../Data/strategies";
import { UiDesignSVG } from "../Components/UiDesignSVG";
// import { UxDesignSVG } from "../Components/UxDesignSVG";
import { IoMail } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa6";
import { IServiceEnquiry } from "../Features/User/type";
// import { QualitySVG } from "../Components/QualitySVG";
import { OtherServicesSVG } from "../Components/OtherServicesSVG";
import { UserResearchSVG } from "../Components/UserResearchSVG";
import { RapidPrototypeSVG } from "../Components/RapidPrototypeSVG";
import { UxTrainingSVG } from "../Components/UxTrainingSVG";
import { UserTestingSVG } from "../Components/UserTestingSVG";
// import { UxTrainingSVG } from "../Components/UxTrainingSVG";
// import { UserTestingSVG } from "../Components/UserTestingSVG";

export const OtherServices = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { header } = useAppSelector((state) => state.user);
  const [isRead, setIsRead] = useState(false);
  const location = useLocation();
  // Accessing the current route
  const currentRoute = location.pathname;

  // const [lslide, setLslide] = useState("cbp01");
  // const [lslide2, setLslide2] = useState("cbp03");
  // const [lslide3, setLslide3] = useState("cbp04");
  // const [lslide4, setLslide4] = useState("cbp05");

  // useEffect(() => {
  //   const LSlide = setInterval(() => {
  //     setLslide((prev) => (prev === "cbp02" ? "cbp01" : "cbp02"));
  //     setLslide2((prev) => (prev === "cbp03" ? "cbp06" : "cbp03"));
  //     setLslide3((prev) => (prev === "cbp04" ? "cbp07" : "cbp04"));
  //     setLslide4((prev) => (prev === "cbp05" ? "cbp08" : "cbp05"));
  //   }, 12000);
  //   return () => {
  //     clearInterval(LSlide);
  //   };
  // }, []);

  // const isDesktopOrLaptop = useMediaQuery({
  //   query: "(min-width: 1224px)",
  // });
  // const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

  const connect = useRef<HTMLDivElement>(null);
  //   const handleScrollToBottom = () => {
  //     if (connect.current) {
  //       // Scroll to the third div
  //       connect.current.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };

  const services = useRef<HTMLDivElement>(null);
  const clients = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (header === "services") {
        if (services.current) {
          services.current.scrollIntoView({ behavior: "smooth" });
        }
        dispatch(setHeader(""));
      } else if (header === "clients") {
        if (clients.current) {
          clients.current.scrollIntoView({ behavior: "smooth" });
        }
        dispatch(setHeader(""));
      } else if (header === "contactus") {
        if (connect.current) {
          connect.current.scrollIntoView({ behavior: "smooth" });
        }
        dispatch(setHeader(""));
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch, header]);

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Optional: smooth scrolling animation
      });
    };

    handleScrollToTop();
  }, []);

  useEffect(() => {
    dispatch(setLastRoute(currentRoute));
  }, [currentRoute, dispatch]);

  const designServices = [
    "UX REVIEW/ANALYSIS",
    "UX DESIGN",
    "UI DESIGN",
    "OTHER SERVICES",
  ];

  const settings3: Settings = {
    rtl: true,
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 4,
    autoplay: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    autoplaySpeed: 8000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
          // arrows: true,
        },
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //     initialSlide: 1,
      //     // arrows: true,
      //   },
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //   },
      // },
    ],
  };

  const validationSchema = Yup.object({
    Name: Yup.string().required("Name is required"),
    Email: Yup.string().required("Email is required"),
    Country: Yup.string().required("Country is required"),
    Questions: Yup.string().required("Questions is required"),
    IsGrantCyberPack: Yup.boolean().required("Questions is required"),
  });

  const initialValues = {
    Name: "",
    Email: "",
    Country: "",
    Questions: "",
    IsGrantCyberPack: false,
  };

  // Submit handler
  const handleSubmit = (values: IServiceEnquiry) => {
    dispatch(() => {});
  };

  const formik = useFormik<IServiceEnquiry>({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="h-fit">
      <div className="oval-bottom h-[60vh] md:h-[100vh]">
        <div className="text-white font-semibold text-lg md:text-3xl lg:text-6xl font-poppins text-center mt-16 z-[3]">
          Other Services
          <br />
          <div className="mt-3 h-[4px] w-[150px] md:w-[300px] bg-gradient-to-r from-blue-400 via-blue-300 to-transparent" />
        </div>
        <div className="text-orange-800 md:text-white font-semibold md:text-xl lg:text-2xl px-5 md:px-0 font-poppins text-center mt-8 md:mt-16 z-[3]">
          “Supposing is good, but finding out is better.”
          <span className="font-medium text-base">- Mark Twain</span>
        </div>

        <OtherServicesSVG
          classes={
            "z-[2] absolute bottom-[7vh] md:bottom-[5vh] left-[25vw] md:left-[33vw] w-[50vw] md:w-[30vw]"
          }
        />
        {/* oval bottom */}
        <div className="custom-shape-divider-bottom-1715764172">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="h-[15vh] md:h-[70vh]"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      <div className="min-h-[600px] bg-ux_review_bg flex flex-col pb-20">
        <button className="mt-10 text-main lg:text-xl font-bold bg-orange-400 font-poppins px-3 lg:px-5 py-2 lg:py-3 rounded-[50px] flex items-center mx-auto">
          CONTACT US{" "}
          <IoIosArrowForward className="ml-2 text-xl lg:text-4xl font-bold text-blue-500" />
        </button>

        <div className=" text-main text-lg md:text-2xl mt-16 mb-20 font-semibold font-poppins w-[90vw] md:w-[80vw] mx-auto">
          DVT also offers a dynamic range of Design-Related services, such as
          Prototyping, User Testing and UX Info Sessions and Workshops.
        </div>
        {/* user research */}
        <div className="relative mt-[15vh] lg:mt-[5vh] lg:shadow-ux_bx bg-white bg-opacity-[0.5] w-[95vw] lg:w-[70vw] h-[430px] ml-[2.5vw] lg:ml-[7vw] flex flex-col lg:flex-row items-center">
          <div className="mr-auto lg:mr-0 w-fit lg:h-full pt-4 px-10 text-6xl font-bold text-main font-poppins">
            01
          </div>

          <div className="flex w-full mt-10 lg:mt-0 px-5 lg:px-0 lg:w-[40vw] mr-auto lg:mr-0">
            <div className="w-[98vw] lg:w-fit">
              <div className="mt-7 text-xl lg:text-5xl text-main font-poppins font-bold">
                User Research
              </div>
              <div className="mt-3 h-[4px] w-[150px] md:w-[600px] bg-gradient-to-r from-blue-400 via-blue-300 to-transparent" />

              <div className="text-main text-opacity-[0.8] mt-10 text-xl font-semibold font-poppins leading-8">
                Save money on development costs, use UX to get your design right
                up-front, shorten your release cycle and avoid costly
                refactoring of your product down the line.
              </div>
            </div>
          </div>

          <UserResearchSVG
            classes={
              "z-[2] absolute top-[-40px] lg:top-0 lg:bottom-[-50px] right-[0vw] lg:right-[-200px] w-[35vw] lg:w-[30vw]"
            }
          />
        </div>

        {/* Rapid Prototyping */}
        <div className="relative mt-[20vh] lg:mt-[20vh] lg:shadow-ux_bx bg-white bg-opacity-[0.5] w-[95vw] lg:w-[70vw] h-[430px] ml-[2.5vw] lg:ml-auto lg:mr-[7vw] flex flex-col lg:flex-row items-center">
          <RapidPrototypeSVG
            classes={
              "z-[2] absolute top-[-40px] lg:top-0 lg:bottom-[-50px] left-[0vw] lg:left-[-200px] w-[35vw] lg:w-[30vw]"
            }
          />

          <div className="flex w-full mt-24 md:mt-32 lg:mt-0 px-5 lg:px-0 lg:w-[40vw] ml-auto">
            <div className="w-[98vw] lg:w-fit">
              <div className="mt-7 text-xl lg:text-5xl text-main font-poppins font-bold">
                Rapid Prototyping
              </div>
              <div className="mt-3 h-[4px] w-[150px] md:w-[600px] bg-gradient-to-r from-blue-400 via-blue-300 to-transparent" />

              <div className="text-main text-opacity-[0.8] mt-10 text-xl font-semibold font-poppins leading-8">
                Save money on development costs, use UX to get your design right
                up-front, shorten your release cycle and avoid costly
                refactoring of your product down the line.
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 lg:relative w-fit lg:h-full lg:pt-[320px] px-10 text-6xl font-bold text-main font-poppins text-end">
            02
          </div>
        </div>

        {/* User Testing */}
        <div className="relative mt-[15vh] lg:mt-[20vh] lg:shadow-ux_bx bg-white bg-opacity-[0.5] w-[95vw] lg:w-[70vw] h-[430px] ml-[2.5vw] lg:ml-[7vw] flex flex-col lg:flex-row items-center">
          <div className="mr-auto lg:mr-0 w-fit lg:h-full pt-4 px-10 text-6xl font-bold text-main font-poppins">
            03
          </div>

          <div className="flex w-full mt-10 lg:mt-0 px-5 lg:px-0 lg:w-[40vw] mr-auto lg:mr-0">
            <div className="w-[98vw] lg:w-fit">
              <div className="mt-7 text-xl lg:text-5xl text-main font-poppins font-bold">
                User Testing
              </div>
              <div className="mt-3 h-[4px] w-[150px] md:w-[600px] bg-gradient-to-r from-blue-400 via-blue-300 to-transparent" />

              <div className="text-main text-opacity-[0.8] mt-10 text-xl font-semibold font-poppins leading-8">
                Save money on development costs, use UX to get your design right
                up-front, shorten your release cycle and avoid costly
                refactoring of your product down the line.
              </div>
            </div>
          </div>

          <UserTestingSVG
            classes={
              "z-[2] absolute top-[-40px] lg:top-0 lg:bottom-[-50px] right-[0vw] lg:right-[-200px] w-[55vw] lg:w-[50vw]"
            }
          />
        </div>

        {/* UX Training & Workshops */}
        <div className="relative mt-[15vh] lg:mt-[20vh] lg:shadow-ux_bx bg-white bg-opacity-[0.5] w-[95vw] lg:w-[70vw] h-[430px] ml-[2.5vw] lg:ml-auto lg:mr-[7vw] flex flex-col lg:flex-row items-center">
          <UxTrainingSVG
            classes={
              "z-[2] absolute top-[-40px] lg:top-0 lg:bottom-[-50px] left-[0vw] lg:left-[-200px] w-[35vw] lg:w-[30vw]"
            }
          />

          <div className="flex w-full mt-24 md:mt-32 lg:mt-0 px-5 lg:px-0 lg:w-[40vw] ml-auto">
            <div className="w-[98vw] lg:w-fit">
              <div className="mt-7 text-xl lg:text-5xl text-main font-poppins font-bold">
                UX Training & Workshops
              </div>
              <div className="mt-3 h-[4px] w-[150px] md:w-[600px] bg-gradient-to-r from-blue-400 via-blue-300 to-transparent" />

              <div className="text-main text-opacity-[0.8] mt-10 text-xl font-semibold font-poppins leading-8">
                Save money on development costs, use UX to get your design right
                up-front, shorten your release cycle and avoid costly
                refactoring of your product down the line.
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 lg:relative w-fit lg:h-full lg:pt-[320px] px-10 text-6xl font-bold text-main font-poppins text-end">
            04
          </div>
        </div>
      </div>

      {/*Our UX Strategy services*/}
      <div className="bg-ux_review_bg flex flex-col overflow-x-hidden">
        <div className="curved-div h-fit lg:h-fit ml-[-80vw] w-[260vw] md:ml-[-50vw] md:w-[200vw] lg:ml-0 lg:w-[100vw]">
          <div className="flex flex-col text-center mt-[30vh] w-[100vw] ml-[80vw] md:ml-[50vw] lg:ml-0">
            <h1 className="text-2xl lg:text-5xl font-bold font-poppins text-white mx-auto">
              Case Studies
            </h1>
            <div className="mt-3 h-[4px] w-[150px] md:w-[300px] bg-gradient-to-r from-blue-400 via-blue-300 to-transparent z-[5] ml-5 md:ml-[40vw]" />
          </div>

          {/* 2-cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-10 w-[90vw] md:w-[98vw] lg:w-[58vw] mx-auto mb-10">
            {/* 1-card */}
            <div className="w-[80vw] md:w-[45vw] lg:w-[27vw] h-[530px] overflow-hidden ml-[5vw] md:ml-[3vw] lg:ml-0 rounded-[28px] shadow-inner bg-white relative">
              {/* <div className="absolute top-[-80px] z-[1] left-3 ux-case-studies bg-blue-200 h-[252px] w-full"></div> */}
              <img src={miningClient} alt="mining" className="w-full" />
              <div className="text-center font-bold text-slate-800 text-xl mt-3">
                Mining Client MAS
              </div>
              <div className="text-center text-slate-900 text-base">
                Independent client
              </div>
              <div className="text-center text-slate-600 text-sm px-5 mt-3">
                Metal Accounting system's user experience was complex and poor
                after highly customising their off the shelf program. Informed
                by UX Research, we designed and
              </div>
              <button className="ml-[10vw] md:ml-[4.5vw] mt-8 text-white lg:text-lg font-semibold bg-main font-poppins w-[60vw] md:w-[35vw] lg:w-[18vw] py-1 rounded-[50px] flex items-center justify-center">
                View Case Studies
                <IoIosArrowForward className="ml-2 text-xl lg:text-4xl font-bold text-blue-500" />
              </button>
            </div>
            {/* 2-card */}
            <div className="ml-[5vw] md:ml-[3vw] lg:ml-[2vw] w-[80vw] md:w-[45vw] lg:w-[27vw] mt-10 md:mt-0 lg:mt-0 h-[530px] overflow-hidden rounded-[28px] shadow-inner bg-white relative">
              {/* <div className="absolute top-[-80px] z-[1] left-3 ux-case-studies bg-blue-200 h-[252px] w-full"></div> */}
              <img src={assupol} alt="assupol" className="w-full" />
              <div className="text-center font-bold text-slate-800 text-xl mt-3">
                Mining Client MAS
              </div>
              <div className="text-center text-slate-900 text-base">
                Independent client
              </div>
              <div className="text-center text-slate-600 text-sm px-5 mt-3">
                Metal Accounting system's user experience was complex and poor
                after highly customising their off the shelf program. Informed
                by UX Research, we designed and
              </div>
              <button className="ml-[10vw] md:ml-[4.5vw] mt-8 text-white lg:text-lg font-semibold bg-main font-poppins w-[60vw] md:w-[35vw] lg:w-[18vw] py-1 rounded-[50px] flex items-center justify-center">
                View Case Studies
                <IoIosArrowForward className="ml-2 text-xl lg:text-4xl font-bold text-blue-500" />
              </button>
            </div>
          </div>
          {/* buttons */}
          <div className="flex flex-col md:flex-row items-center justify-between w-[96vw] md:w-[90vw] lg:w-[80vw] mx-auto mb-[10vh]">
            <button
              onClick={() => {
                if (currentRoute === routes.uxDesign) navigate(routes.uxDesign);
              }}
              className="relative mt-10 text-main lg:text-lg font-bold bg-orange-400 font-poppins w-[280px] lg:w-[320px] px-3 lg:px-5 py-2 rounded-[50px] flex items-center justify-center"
            >
              <IoIosArrowBack className="ml-2 text-xl lg:text-3xl font-bold text-blue-500" />
              <div className="mr-auto">
                {currentRoute === routes.uxOtherServices && designServices[2]}
              </div>
              <UiDesignSVG
                classes={
                  "z-[2] absolute bottom-[-20px] right-[-30px] w-[100px]"
                }
              />
            </button>
            <button
              onClick={() => {
                if (currentRoute === routes.uxOtherServices)
                  navigate(routes.uxReviewAnalysis);
              }}
              className="relative mt-10 text-main lg:text-lg font-bold bg-orange-400 font-poppins w-[280px] lg:w-[320px] px-3 lg:px-5 py-2 rounded-[50px] flex items-center justify-center"
            >
              <div className="ml-auto">
                {currentRoute === routes.uxOtherServices && designServices[0]}
              </div>
              <IoIosArrowForward className="ml-2 text-xl lg:text-4xl font-bold text-blue-500" />
              <UxSVG
                classes={"z-[2] absolute bottom-[-20px] left-[-30px] w-[100px]"}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Our Clients */}
      <div className="h-[300px]">
        <div className="text-main text-center text-4xl mt-[40px] font-bold font-poppins">
          Our Clients
        </div>

        <div className="h-fit mt-10 mb-10 w-[98vw] md:w-[96vw] lg:w-[80vw] mx-auto">
          <Slider {...settings3}>
            {tech_stack_v1.map((image, index) => (
              <div
                key={index}
                className="slider-news-v2 flex flex-col relative my-2"
              >
                <img
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                  className="w-[70px] md:w-[100px] my-5 mx-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Let's do business together */}
      <div className="relative">
        {/* form */}
        <div className="bg-white w-[90vw] lg:w-[41vw] absolute top-[400px] lg:top-[75px] right-[5vw] lg:right-[8vw] h-[430px] shadow-ux_bx">
          <form onSubmit={formik.handleSubmit} className="">
            <div className="my-4 mx-auto w-[90%]">
              <input
                type="text"
                id="Name"
                name="Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Name || ""}
                placeholder="Name"
                className="w-[100%] border-[1px] border-gray-400 py-2 px-2 rounded-md text-sm"
              />
              {formik.touched.Name && formik.errors.Name && (
                <div className="error text-red-400 text-sm">
                  {formik.errors.Name}
                </div>
              )}
            </div>

            <div className="my-4 mx-auto w-[90%]">
              <input
                type="text"
                id="Email"
                name="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Email || ""}
                placeholder="Email"
                className="w-[100%] border-[1px] border-gray-400 py-2 px-2 rounded-md text-sm"
              />
              {formik.touched.Email && formik.errors.Email && (
                <div className="error text-red-400 text-sm">
                  {formik.errors.Email}
                </div>
              )}
            </div>

            <div className="my-4 mx-auto w-[90%]">
              <select
                id="Country"
                name="Country"
                value={formik.values.Country || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-[100%] border-[1px] border-gray-400 py-2 px-2 rounded-md text-sm"
              >
                <option value="" className="text-slate-400 option">
                  Country
                </option>
                <option value="saab">Nigeria</option>
                <option value="mercedes">Australia</option>
                <option value="audi">Texas</option>
              </select>
              {formik.touched.Country && formik.errors.Country && (
                <div className="error text-red-400 text-sm">
                  {formik.errors.Country}
                </div>
              )}
            </div>

            <div className="my-4 mx-auto w-[90%]">
              <textarea
                rows={3}
                id="Questions"
                name="Questions"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Questions || ""}
                placeholder="What can we help you with?"
                className="w-[100%] border-[1px] border-gray-400 py-2 px-2 rounded-md text-sm"
              />
              {formik.touched.Questions && formik.errors.Questions && (
                <div className="error text-red-400 text-sm">
                  {formik.errors.Questions}
                </div>
              )}
            </div>

            <div className="my-4 mx-auto w-[90%]">
              <div className="flex items-center">
                <label>
                  <input
                    type="checkbox"
                    name="IsRead"
                    checked={isRead}
                    onChange={(e) => setIsRead(!isRead)}
                  />
                </label>
                <div className="text-xs pl-2 underline">
                  I have read, understand and accept the Privacy Notice and
                  Terms of Service
                </div>
              </div>
            </div>

            <div className="my-4 mx-auto w-[90%]">
              <div className="flex items-center">
                <label>
                  <input
                    type="checkbox"
                    name="IsGrantCyberPack"
                    checked={formik.values.IsGrantCyberPack}
                    onChange={formik.handleChange}
                  />
                </label>
                <div className="text-xs pl-2">
                  I grant CyberPackHQ permission to process the personal
                  information provided
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="text-white font-bold rounded-3xl bg-main w-[90%] px-5 py-2"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center bg-yellow-400 h-[290px]">
          <div className="w-[90vw] lg:w-[50vw] mx-auto lg:mx-0">
            <div className="mb-0 flex flex-col lg:flex-row lg:items-center justify-start lg:justify-end lg:pr-7">
              <FaHandshake className="lg:mr-[5vw] text-5xl lg:text-8xl text-blue-700" />
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold font-poppins text-main">
                Let's do business together!
              </div>
            </div>
            <div className="text-main text-lg lg:text-xl font-poppins lg:text-right lg:pr-7 mt-5">
              Get in touch for a free digital experience consultation!
            </div>
            <div className="text-main text-lg lg:text-xl font-poppins lg:text-right lg:pr-7">
              We can have a look at your UX/UI needs.
            </div>
          </div>
        </div>
        <div className="flex items-center bg-ux_review_bg lg:bg-white h-[600px] lg:h-[290px]">
          <div className="w-[90vw] mx-auto lg:mx-0 lg:w-[50vw] h-full">
            <button className="lg:ml-auto mt-10 lg:mr-5 mx-auto lg:mx-0 flex items-center justify-center w-[60vw] lg:w-[16vw] px-3 py-3 lg:py-2 font-semibold text-sm text-white rounded-3xl bg-main hover:bg-orange-500">
              <IoMail className="mr-1 text-2xl" />
              <a
                href="mailto:info@cyberpack.com"
                className="text-lg lg:text-xl"
              >
                info@cyberpack.com
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
