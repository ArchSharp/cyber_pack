// import { /*Slider,*/ Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";
// import { MarqueeHolder } from "../Components/MarqueeHolder";
// import ux_svg from "../Images/ux-svg.svg";
import { IoIosArrowForward } from "react-icons/io";
// import { tech_stack_v1 } from "../Data/partners";
// import microsoft from "../Images/microsoft.png";
// import cbp01 from "../Images/cbp01.jpg";
// import programmer from "../Images/programmer.jpg";
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
import { useLocation } from "react-router-dom";
// import programmer from "../Images/programmer.jpg";
// import { Challenges } from "../Components/Challenges";
// import pixa from "../Images/perkaloo.png";
// import { ConnectWithUs } from "../Components/ConnectWithUs";
// import { ClientsReview } from "../Components/ClientsReview";
// import macbook from "../Images/macbook.png";
import { UxSVG } from "../Components/UxSVG";
// import diagnosis from "../Images/diagnosis_frame.gif";
import { DiagnosisSVG } from "../Components/DiagnosisSVG";
import { LuDot } from "react-icons/lu";

export const UxReviewAnalysis = () => {
  const dispatch = useAppDispatch();
  const { header } = useAppSelector((state) => state.user);
  const location = useLocation();
  // const [lslide, setLslide] = useState("cbp01");
  // const [lslide2, setLslide2] = useState("cbp03");
  // const [lslide3, setLslide3] = useState("cbp04");
  // const [lslide4, setLslide4] = useState("cbp05");

  // Accessing the current route
  const currentRoute = location.pathname;

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

  // const settings: Settings = {
  //   rtl: true,
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   autoplay: true,
  //   pauseOnFocus: true,
  //   pauseOnHover: true,
  //   autoplaySpeed: 3000,
  //   arrows: false,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 4,
  //         infinite: true,
  //         dots: true,
  //         arrows: false,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //         // arrows: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //         // arrows: true,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  // const settings2: Settings = {
  //   rtl: true,
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   pauseOnFocus: true,
  //   pauseOnHover: true,
  //   autoplaySpeed: 3000,
  //   arrows: false,
  // };

  // const settings3: Settings = {
  //   rtl: true,
  //   dots: true,
  //   infinite: true,
  //   speed: 3000,
  //   slidesToShow: 6,
  //   slidesToScroll: 4,
  //   autoplay: true,
  //   pauseOnFocus: true,
  //   pauseOnHover: true,
  //   autoplaySpeed: 8000,
  //   arrows: false,
  //   responsive: [
  //     {
  //       breakpoint: 1440,
  //       settings: {
  //         slidesToShow: 6,
  //         slidesToScroll: 4,
  //         infinite: true,
  //         dots: true,
  //         arrows: false,
  //       },
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         initialSlide: 2,
  //         // arrows: true,
  //       },
  //     },
  //     // {
  //     //   breakpoint: 600,
  //     //   settings: {
  //     //     slidesToShow: 1,
  //     //     slidesToScroll: 1,
  //     //     initialSlide: 1,
  //     //     // arrows: true,
  //     //   },
  //     // },
  //     // {
  //     //   breakpoint: 480,
  //     //   settings: {
  //     //     slidesToShow: 3,
  //     //     slidesToScroll: 3,
  //     //   },
  //     // },
  //   ],
  // };

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

  //   useEffect(() => {
  //     const handleScrollToTop = () => {
  //       window.scrollTo({
  //         top: 0,
  //         behavior: "smooth", // Optional: smooth scrolling animation
  //       });
  //     };

  //     handleScrollToTop();
  //   }, []);

  useEffect(() => {
    dispatch(setLastRoute(currentRoute));
  }, [currentRoute, dispatch]);

  return (
    <div className="h-fit">
      <div className="oval-bottom h-[60vh] md:h-[100vh]">
        <div className="text-white font-semibold text-lg md:text-3xl lg:text-6xl font-poppins text-center mt-16 z-[3]">
          UX Review & Analysis <br />
          <div className="mt-3 h-[4px] w-[150px] md:w-[300px] bg-gradient-to-r from-blue-400 via-blue-300 to-transparent" />
        </div>
        <div className="text-orange-800 md:text-white font-semibold md:text-xl lg:text-2xl px-5 md:px-0 font-poppins text-center mt-8 md:mt-16 z-[3]">
          “Supposing is good, but finding out is better.”{" "}
          <span className="font-medium text-base">- Mark Twain</span>
        </div>

        <UxSVG
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
          UX research analysis is not a linear path but rather a systematic
          journey consisting of discovery and diagnosis:
        </div>

        <div className="mt-[15vh] lg:mt-[25vh] lg:shadow-ux_bx lg:bg-ux_review_bg2 w-[95vw] lg:w-[80vw] min-h-[400px] mx-auto flex flex-col-reverse lg:flex-row">
          <div className="flex">
            <div className="hidden lg:block text-8xl leading-[90px] font-poppins px-5 pt-5 text-blue-800 font-extrabold not-italic w-fit">
              01
            </div>
            <div className="w-[98vw] lg:w-fit">
              <div className="mt-20 text-xl lg:text-5xl text-main font-poppins font-bold">
                Diagnosis
              </div>
              <div className="mt-3 h-[4px] w-[300px] md:w-[400px] bg-gradient-to-r from-blue-400 via-blue-300 to-blue-100" />
              <div className="text-blue-500 mt-10 lg:w-[400px] text-lg font-semibold font-poppins">
                Review and analysis are about discovering potential issues that
                could negatively affect user experience
              </div>
            </div>
          </div>

          <div className="w-[80vw] lg:w-[35vw] mx-auto lg:mx-0 lg:ml-10">
            <DiagnosisSVG classes={""} />
          </div>
        </div>

        <div className="mt-[15vh] lg:mt-[25vh] lg:shadow-ux_bx lg:bg-ux_review_bg2 w-[95vw] lg:w-[80vw] min-h-[400px] mx-auto flex flex-col lg:flex-row">
          <div className="w-[80vw] lg:w-[35vw] mx-auto lg:mx-0">
            <DiagnosisSVG classes={""} />
          </div>

          <div className="flex flex-1">
            <div className="w-[98vw] lg:w-fit ml-auto">
              <div className="mt-20 text-xl lg:text-5xl text-main font-poppins font-bold">
                Problem Solving
              </div>
              <div className="mt-3 h-[4px] w-[300px] md:w-[400px] bg-gradient-to-r from-blue-400 via-blue-300 to-blue-100" />
              <div className="text-blue-500 mt-10 lg:w-[400px] text-lg font-semibold font-poppins">
                Once these problems are spotted, we begin devising ways to fix
                them to create a practical and seamless user experience.
              </div>
            </div>

            <div className="hidden lg:block text-8xl leading-[90px] font-poppins px-5 pt-[350px] text-blue-800 font-extrabold not-italic w-fit text-end">
              02
            </div>
          </div>
        </div>

        <div className="mt-[15vh] lg:mt-[25vh] lg:shadow-ux_bx lg:bg-ux_review_bg2 w-[95vw] lg:w-[80vw] min-h-[400px] mx-auto flex flex-col-reverse lg:flex-row">
          <div className="flex">
            <div className="hidden lg:block text-8xl leading-[90px] font-poppins px-5 pt-5 text-blue-800 font-extrabold not-italic w-fit">
              03
            </div>
            <div className="w-[98vw] lg:w-fit">
              <div className="mt-20 text-xl lg:text-5xl text-main font-poppins font-bold">
                Discovery
              </div>
              <div className="mt-3 h-[4px] w-[300px] md:w-[400px] bg-gradient-to-r from-blue-400 via-blue-300 to-blue-100" />
              <div className="text-blue-500 mt-10 lg:w-[400px] text-lg font-semibold font-poppins">
                Additionally, UX Review and Analysis can identify apsects such
                as:
                <ul className="mt-5 text-base">
                  <li className="flex items-center">
                    <LuDot className="mr-2" />
                    Who will be using a product,
                  </li>
                  <li className="flex items-center">
                    <LuDot className="mr-2" />
                    give insights into the product's design process,
                  </li>
                  <li className="flex items-center">
                    <LuDot className="mr-2" />
                    benchmark your product in the market,
                  </li>
                  <li className="flex items-center">
                    <LuDot className="mr-2" />
                    determine its value,
                  </li>
                  <li className="flex items-center">
                    <LuDot className="mr-2" />
                    provide recommendations for current and future releases.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-[80vw] lg:w-[35vw] mx-auto lg:mx-0 lg:ml-10">
            <DiagnosisSVG classes={""} />
          </div>
        </div>
      </div>

      {/*Our UX Strategy services*/}
      <div className="bg-ux_review_bg flex flex-col">
        <div className="curved-div h-[140vh]">
          <div className="text-center mt-[30vh]">
            <h1 className="text-5xl font-bold font-poppins text-white mx-auto">
              Our UX Strategy services include
            </h1>
          </div>
          <div className="text-white text-xl font-bold font-poppins w-[80vw] mx-auto mt-16">
            We offer a wide variety of sub-services within UX research and
            analysis. Choose a unique selection of these sub-services to match
            the scope of your project and business goals.
          </div>
        </div>
        <div className="curved-div-2 h-[100px]"></div>
      </div>
    </div>
  );
};
