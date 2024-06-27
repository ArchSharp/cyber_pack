import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import { MarqueeHolder } from "../Components/MarqueeHolder";
import { partners } from "../Data/partners";
import typescript from "../Images/TechStacks/typescript.svg";
import cbp01 from "../Images/cbp01.jpg";
import mobile from "../Images/mobile.png";
import { FaArrowCircleRight } from "react-icons/fa";
// import strategy from "../Images/strategy.png";
// import design from "../Images/design.png";
// import develop from "../Images/develop.jpg";
// import test from "../Images/test.png";
// import deploy from "../Images/deploy.jpg";
import { useAppDispatch, useAppSelector } from "../Store/store";
import responsive_design from "../Images/responsive-design.svg";
import customui from "../Images/custom-ui-ux-design.svg";
import interactive_element from "../Images/interactive-elements.svg";
import cross_browser from "../Images/cross-browser-compatibility.svg";
import optimized from "../Images/optimised-performance.svg";
import accessibility from "../Images/accessibility.svg";
import integration_backend from "../Images/integration-with-back-end.svg";
import { useMediaQuery } from "react-responsive";
import js from "../Images/TechStacks/javascript.svg";
import htmlv2 from "../Images/TechStacks/html5v2.svg";
import css from "../Images/TechStacks/css.svg";
import react_native from "../Images/TechStacks/react-native2.svg";
import angular from "../Images/TechStacks/angular.svg";
import { setHeader, setLastRoute } from "../Features/User/userSlice";
import { useLocation } from "react-router-dom";
// import programmer from "../Images/programmer.jpg";
import { Challenges } from "../Components/Challenges";
import media from "../Images/media.png";
import { ConnectWithUs } from "../Components/ConnectWithUs";
import { ClientsReview } from "../Components/ClientsReview";
import macbook from "../Images/macbook.png";
// import { LuDot } from "react-icons/lu";
import experienced_team from "../Images/experienced-team.svg";
import collaborate from "../Images/collaborative-approach.svg";
import cuting_edge_tech from "../Images/cutting-edge-technology.svg";
import client_focus from "../Images/client-centric-focus.svg";

export const WebAppServices = () => {
  const dispatch = useAppDispatch();
  const { header } = useAppSelector((state) => state.user);
  const location = useLocation();
  const [lslide, setLslide] = useState("cbp01");
  const [lslide2, setLslide2] = useState("cbp03");
  const [lslide3, setLslide3] = useState("cbp04");
  const [lslide4, setLslide4] = useState("cbp05");

  // Accessing the current route
  const currentRoute = location.pathname;

  useEffect(() => {
    const LSlide = setInterval(() => {
      setLslide((prev) => (prev === "cbp02" ? "cbp01" : "cbp02"));
      setLslide2((prev) => (prev === "cbp03" ? "cbp06" : "cbp03"));
      setLslide3((prev) => (prev === "cbp04" ? "cbp07" : "cbp04"));
      setLslide4((prev) => (prev === "cbp05" ? "cbp08" : "cbp05"));
    }, 12000);
    return () => {
      clearInterval(LSlide);
    };
  }, []);

  const settings: Settings = {
    rtl: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          // arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          // arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2: Settings = {
    rtl: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  // const isDesktopOrLaptop = useMediaQuery({
  //   query: "(min-width: 1224px)",
  // });
  // const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

  const connect = useRef<HTMLDivElement>(null);
  const handleScrollToBottom = () => {
    if (connect.current) {
      // Scroll to the third div
      connect.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-transparent h-fit pb-10 flex flex-col">
        <div className="flex items-center italic ml-[5vw] mt-16">
          <div className="mr-3 size-3 bg-yellow-600 -skew-x-12"></div>
          <div className="text-lg md:text-xl text-white font-poppins font-medium">
            Software Engineering
          </div>
        </div>
        <div className="text-[40px] md:text-6xl text-white w-[90vw] lg:w-[60vw] mt-[30px] mx-[2vw] md:mx-[5vw] pr-0 md:pr-[10vw] font-bold">
          Web Application Development Services
        </div>
        {/* <div className="w-fit mx-[2vw] md:mx-[5vw] my-5 font-semibold text-orange-600 text-2xl md:text-lg">
          Global Scale. Local Engagement.
        </div> */}
        <div className="w-[100vw] lg:w-[50vw] font-medium text-lg text-white px-[5vw] lg:px-0 lg:mx-[5vw] mt-5">
          CyberPack offers software development consultants to complement client
          development capabilities, both internationally and locally, alongside
          collaborative teams. Additionally, we provide services in software
          development outsourcing, application re-platforming, and enterprise
          application integration.
        </div>
        <div className="flex w-fit ml-[2vw] md:ml-[5vw] my-8">
          <div className="size-[80px] md:size-[150px] rounded-[50%] mr-2 border-2 flex items-center justify-center flex-col">
            <div className="text-lg md:text-4xl text-white font-medium">
              24+
            </div>
            <div className="text-xxs md:text-xs w-fit text-white">
              Years of service
            </div>
          </div>
          <div className="size-[80px] md:size-[150px] rounded-[50%] mr-2 border-2 flex items-center justify-center flex-col">
            <div className="text-lg md:text-4xl text-white font-medium">
              50+
            </div>
            <div className="text-xxs md:text-xs w-fit text-white">
              IT Professionals
            </div>
          </div>
          <div className="size-[80px] md:size-[150px] rounded-[50%] mr-2 border-2 flex items-center justify-center flex-col">
            <div className="text-lg md:text-4xl text-white font-medium">
              100+
            </div>
            <div className="text-xxs md:text-xs text-white w-fit">
              Completed projects
            </div>
          </div>
          <div className="size-[80px] md:size-[150px] rounded-[50%] border-2 flex items-center justify-center flex-col">
            <div className="text-lg md:text-4xl text-white font-medium">6+</div>
            <div className="text-xxs md:text-xs text-white">
              Digital services
            </div>
          </div>
        </div>
        <div className="mb-16">
          <button
            className="ml-[2vw] md:ml-[5vw] px-7 py-2 border-[3px] italic border-white text-lg font-bold text-white bg-gradient-to-r from-yellow-900 via-yellow-500 to-yellow-300 rounded-full"
            onClick={handleScrollToBottom}
          >
            CONNECT WITH US
          </button>
        </div>
        <MarqueeHolder
          mSpeed={70}
          mDelay={5}
          mGradient={false}
          mgradientColor={"rgb(126, 200, 227)"}
        >
          <div className="flex items-center py-2">
            {partners.map((eachImage, index) => (
              <div
                key={index}
                className="mx-2 h-[90px] sm:h-[130px] w-[150px] md:w-[250px] flex items-center justify-center rounded-lg bg-main"
              >
                <img
                  src={eachImage.src}
                  alt={eachImage.alt}
                  className="w-[70px]"
                />
              </div>
            ))}
          </div>
        </MarqueeHolder>
      </div>

      <div className="flex flex-col lg:flex-row items-center py-[8vh]">
        <div className="w-[90vw] lg:w-[30vw] ml-[1vw] md:ml-[2vw] lg:ml-[5vw]">
          <div className="text-main text-lg lg:text-xl font-bold italic w-fit">
            ADVANCED SOLUTIONS IN
          </div>
          <div className="text-blue-700 text-xl lg:text-2xl font-bold italic w-fit">
            WEB APPLICATIONS{" "}
          </div>

          <p className="my-10 text-slate-600">
            We specialise in crafting exceptional user experiences through our
            leading Front-End Web Development services. Our team of skilled
            designers and developers work collaboratively to bring your digital
            vision to life, ensuring your website captivates visitors and drives
            engagement.
            <br />
            <br />
            We deliver specialist consulting and development skills With our
            expertise in the latest technologies and design trends, we are
            committed to delivering user-friendly, visually appealing, and
            responsive web solutions.
          </p>
        </div>

        <div className="w-[100vw] lg:w-[65vw] mt-16 lg:mt-0">
          <div className="w-[90vw] lg:w-[51vw] h-[60vh] md:h-[70vh] ml-[5vw] lg:ml-20 flex flex-col top-display">
            <div className="loader w-[10px] md:w-[13px] lg:w-[20px] ml-auto mr-2 mt-2"></div>
            <div className="flex">
              <div
                style={
                  {
                    "--cbpo1-width": `${isTablet ? "150px" : "300px"}`,
                  } as any
                }
                className={`${lslide} mt-[17vh] bg-cbp01_blue h-[30vh] italic flex items-center`}
              >
                <div className="ml-5 md:ml-10">
                  <div className="text-xs md:text-sm font-semibold text-white">
                    CYBERPACKHQ'S DEVELOPMENT
                  </div>
                  <div className="text-lg w-fit md:text-2xl lg:text-4xl font-bold text-white">
                    CAPABILITIES
                  </div>
                </div>
              </div>
              <div className="ml-auto w-[35vw] md:w-[28vw] overflow-hidden">
                <div
                  style={
                    {
                      "--cbpo3-ml": `${isTablet ? "5%" : "35%"}`,
                    } as any
                  }
                  className={`${lslide2} flex w-[90%] md:w-[80%] items-center mr-auto mt-14`}
                >
                  <img
                    src={cbp01}
                    alt="cbp02"
                    className="w-[35px] md:w-[50px] lg:w-[80px]"
                  />
                  <div className="text-white ml-2 md:ml-3">
                    <div className="font-bold text-xl md:text-3xl">21+</div>
                    <div className=" font-medium text-xs md:text-sm">
                      Development Frameworks
                    </div>
                  </div>
                </div>
                <div
                  style={
                    {
                      "--cbpo3-ml": `${isTablet ? "5%" : "35%"}`,
                    } as any
                  }
                  className={`${lslide3} flex w-[90%] md:w-[80%] items-center mr-auto my-12`}
                >
                  <img
                    src={cbp01}
                    alt="cbp01"
                    className="w-[35px] md:w-[50px] lg:w-[80px]"
                  />
                  <div className="text-white ml-2 md:ml-3">
                    <div className=" font-bold text-xl md:text-3xl">50+</div>
                    <div className=" font-medium text-xs md:text-sm">
                      IT Professionals
                    </div>
                  </div>
                </div>
                <div
                  style={
                    {
                      "--cbpo3-ml": `${isTablet ? "5%" : "35%"}`,
                    } as any
                  }
                  className={`${lslide4} flex w-[90%] md:w-[80%] items-center mr-auto`}
                >
                  <img
                    src={cbp01}
                    alt="cbp01"
                    className="w-[35px] md:w-[50px] lg:w-[80px]"
                  />
                  <div className="text-white ml-2 md:ml-3">
                    <div className=" font-bold text-xl md:text-3xl">100+</div>
                    <div className=" font-medium text-xs md:text-sm">
                      Projects Completed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[650px] pb-10 bg-customsoftware flex flex-col">
        <div className="text-center mt-16 mb-5 text-white text-4xl font-bold flex flex-col">
          <div>Web Application Development Services</div>
          <hr className="w-[100px] border-2 border-yellow-500 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-y-5 lg:gap-y-0 px-[1vw] py-10 w-[98vw] md:w-[85vw] lg:w-[90vw] mx-auto mt-10 overflow-x-auto">
          <div className="flex flex-col items-center">
            <img src={responsive_design} alt="responsive_design" />
            <div className="text-white font-poppins text-sm font-bold mt-2 text-center">
              Responsive Design
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-white font-poppins text-sm font-bold text-center">
              Custom UI/UX Design
            </div>
            <img src={customui} alt="customui" className="mt-2" />
          </div>
          <div className="flex flex-col items-center">
            <img src={interactive_element} alt="Interactive Elements" />
            <div className="text-white font-poppins text-sm font-bold mt-2 text-center">
              Interactive Elements
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-white font-poppins text-sm font-bold text-center">
              Cross-browser Compatibility
            </div>
            <img src={cross_browser} alt="Cross-browser" className="mt-2" />
          </div>
          <div className="flex flex-col items-center">
            <img src={optimized} alt="Optimised Performance" />
            <div className="text-white font-poppins text-sm font-bold mt-2 text-center">
              Optimised Performance
            </div>
          </div>
          <div className="w-[20vw] hidden md:block lg:hidden"></div>
          <div className="flex flex-col items-center">
            <div className="text-white font-poppins text-sm font-bold text-center">
              Accessibility
            </div>
            <img src={accessibility} alt="Accessibility" className="mt-2" />
          </div>
          <div className="w-[20vw] lg:hidden"></div>
          <div className="flex flex-col items-center">
            <img src={integration_backend} alt="backend_integration" />
            <div className="text-white font-poppins text-sm font-bold mt-2 text-center">
              Integration with Back-end
            </div>
          </div>
        </div>

        <div className="text-center mt-16 mb-5 text-white text-4xl font-bold flex flex-col">
          <div>Supported Software Frameworks</div>
          <hr className="w-[100px] border-2 border-yellow-500 mx-auto mt-5" />
        </div>

        <div className="flex flex-col lg:flex-row items-center mx-auto mt-10">
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <img src={typescript} alt="typescript" />
              <img src={js} alt="js" className="ml-5" />
            </div>
            <div className=" text-center text-white text-lg mt-4">
              Typescript and JavaScript fundamentals
            </div>
          </div>

          <div className="flex flex-col items-center w-[70vw] lg:w-[25vw] mt-10 lg:mx-5">
            <div className="flex items-center">
              <img src={css} alt="css" />
              <img src={htmlv2} alt="html5v2" className="ml-5" />
            </div>
            <div className=" text-center text-white text-lg mt-4">
              HTML, CSS, Material and other utility class libraries like
              Tailwind
            </div>
          </div>

          <div className="flex flex-col items-center w-[70vw] lg:w-[25vw] mt-10">
            <div className="flex items-center">
              <img src={react_native} alt="react_native" />
              <img src={angular} alt="angular" className="ml-5" />
            </div>
            <div className=" text-center text-white text-lg mt-4">
              React & NextJS, Angular and Vue frameworks and meta-frameworks
            </div>
          </div>
        </div>

        <div className="text-center mt-16 mb-5 text-white text-4xl font-bold flex flex-col">
          <div>Why work with CyberPack?</div>
          <hr className="w-[100px] border-2 border-yellow-500 mx-auto mt-5" />
        </div>

        <div className="flex items-center flex-col lg:flex-row mx-auto mt-10 mb-5">
          <div className="w-[90vw] lg:w-[20vw]">
            <img src={experienced_team} alt="experienced_team" />
            <div className="text-white font-bold text-lg font-poppins mt-4">
              Experienced Team
            </div>
            <div className="mt-2 text-white font-medium">
              Our skilled designers and developers have a proven track record of
              creating visually stunning and highly functional websites.
            </div>
          </div>

          <div className="w-[90vw] lg:w-[20vw] mt-10 lg:mt-0 lg:ml-5">
            <img src={collaborate} alt="collaborate" />
            <div className="text-white font-bold text-lg font-poppins mt-4">
              Collaborative Approach
            </div>
            <div className="mt-2 text-white font-medium">
              We work closely with you to understand your goals and preferences,
              ensuring your website reflects your unique vision.
            </div>
          </div>

          <div className="w-[90vw] lg:w-[20vw] mt-10 lg:mt-0 lg:mx-5">
            <img src={cuting_edge_tech} alt="cuting_edge_tech" />
            <div className="text-white font-bold text-lg font-poppins mt-4">
              Cutting-edge Technology
            </div>
            <div className="mt-2 text-white font-medium">
              We stay up-to-date with the latest front-end technologies and
              trends to deliver modern and future-proof solutions.
            </div>
          </div>

          <div className="w-[90vw] lg:w-[20vw] mt-10 lg:mt-0">
            <img src={client_focus} alt="client_focus" />
            <div className="text-white font-bold text-lg font-poppins mt-4">
              Client-centric Focus
            </div>
            <div className="mt-2 text-white font-medium">
              Our skilled designers and developers have a proven track record of
              creating visually stunning and highly functional websites.
            </div>
          </div>
        </div>
      </div>

      {/* fixed right side navbar */}
      <div className=" bg-sidenavbar w-[170px] rounded-tl-[30px] rounded-bl-[30px] z-[3] h-[300px] fixed right-0 top-[35vh] hidden lg:block">
        <div className=" text-main font-bold pl-7 pt-5">Quick Nav</div>
        <hr className="ml-7 mr-4 border-main my-3" />
        <ul className=" text-main pl-7">
          <li className=" cursor-pointer hover:text-orange-400">Services</li>
          <li className="py-2 cursor-pointer hover:text-orange-400">
            Featured
          </li>
          <li className=" cursor-pointer hover:text-orange-400">References</li>
          <li className="py-2 cursor-pointer hover:text-orange-400">
            Client Projects
          </li>
          <li className=" cursor-pointer hover:text-orange-400">Contact Us</li>
          <li className="pt-2 cursor-pointer hover:text-orange-400">FAQ's</li>
        </ul>
      </div>

      {/* Featured Case Study */}
      <div className=" bg-main h-fit lg:h-[140vh] pt-10 lg:pt-0 pb-16 lg:pb-0 flex flex-col">
        <div className="text-center font-poppins mt-10 flex flex-col">
          <div className="text-white text-3xl font-bold">
            Featured Case Study
          </div>
          <hr className="border-[3px] border-orange-500 w-[100px] mx-auto mt-6" />
        </div>
        <div className="text-white italic font-semibold font-poppins text-lg text-center mt-10">
          Soccer League on-line News Portal​
        </div>

        <div className="flex flex-col lg:flex-row items-center mt-24">
          <div className="w-[100vw] lg:w-[50vw] flex flex-col items-center justify-center">
            <img src={mobile} alt="mobile" className="w-[70%]" />
          </div>

          <div className="w-[95vw] lg:w-[50vw] mt-10 lg:mt-0">
            <div className=" text-orange-400 font-bold text-center lg:text-left text-lg italic font-poppins">
              Business Challenge
            </div>
            <div className="mt-3 text-white lg:pr-20 text-center lg:text-left">
              Multichoice/Supersport embarked on a mission to revamp the entire
              PSL (Premier Soccer League) website, aiming to deliver a fresh
              user experience enriched with up-to-the-minute soccer news, live
              scores, fixture updates, team profiles, and a “Goal of the Month”
              feature.
            </div>

            <div className=" text-orange-400 font-bold mt-10 text-lg italic font-poppins text-center lg:text-left">
              CyberPack Solution
            </div>
            <div className="mt-3 text-white lg:pr-20 text-center lg:text-left">
              Leveraging CyberPack’s outsourced software development expertise
              and cutting-edge UX/UI design, Multichoice/Supersport embarked on
              a comprehensive website redevelopment project to meet their
              objectives.​
            </div>

            <div className=" text-orange-400 font-bold mt-10 text-lg italic font-poppins text-center lg:text-left">
              Result
            </div>
            <div className="mt-3 text-white lg:pr-20 text-center lg:text-left">
              The project delivered an engaging and informative PSL website,
              featuring real-time updates, team insights, and the exciting “Goal
              of the Month” feature. This transformed portal has elevated the
              league’s digital presence, delighting soccer enthusiasts and
              boosting user engagement.
            </div>

            <div className=" text-center lg:text-left">
              <button className="rounded-[30px] text-white bg-blue-500 hover:bg-main py-2 px-5 mt-10 lg:mt-7 shadow-2xl shadow-black italic font-semibold text-sm">
                VIEW CASE STUDY
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* transparent background */}
      <ClientsReview clients={clients} />

      {/* News and Insight */}
      <div className="flex flex-col mt-24">
        <div className="w-fit mx-auto md:mx-[5vw]">
          <div className="font-Cervanttis text-blue-500 text-5xl md:text-7xl">
            Case Studies
          </div>
          <hr className="ml-[40%] md:ml-[10%] mt-5 w-[90px] border-orange-500 border-[1px]" />
        </div>

        <div className="h-[520px] mt-10 mb-10 w-[98vw] md:w-[96vw] lg:w-[94vw] mx-auto">
          <Slider {...settings}>
            {partners.map((image, index) => (
              <div
                key={index}
                className="rounded-[30px] shadow-lg slider-news flex flex-col relative my-2"
              >
                <img
                  src={media}
                  alt={`Slide ${index + 1}`}
                  className="rounded-t-[30px] w-full h-[180px]"
                />
                <div className="text-blue-800 font-bold px-4 py-2">
                  THE IT TRENDS THAT MATTER IN 2024
                </div>
                <hr className="border-[1px] my-4 mx-2" />
                <div className="text-sm text-slate-400 flex items-center pl-5">
                  <div className="mr-3 size-3 bg-yellow-600 -skew-x-12"></div>
                  Company Announcement
                </div>
                <div className="py-2 px-4 text-slate-700">
                  Greetings and my very best wishes to you for 2024. This year,
                  just as last, seems tobe on fast-forward....
                </div>
                <div className="pl-5 text-sm font-semibold flex items-center absolute bottom-5 hover:cursor-pointer">
                  READ MORE
                  <FaArrowCircleRight className="ml-3 text-2xl text-blue-700 hover:text-orange-500" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* video */}
      <div className="cyberpack_video-bg h-fit lg:h-[500px] mt-10 flex flex-col lg:flex-row items-center">
        <div className="w-[100vw] lg:w-[50vw] text-center lg:text-left mt-10 lg:mt-0">
          <div className="text-white pl-[5vw] text-lg md:text-2xl italic font-poppins font-bold">
            Meet
          </div>
          <div className="text-orange-600 pl-[5vw] text-xl md:text-3xl italic font-poppins font-bold">
            Olakunle Igbaroola
          </div>
          <div className="text-white pl-[5vw] text-lg md:text-2xl italic font-poppins font-bold">
            Executive Head: Software Development Services
          </div>
        </div>

        <div className="w-[100vw] lg:w-[50vw] h-full flex flex-col justify-center mt-10 lg:mt-0">
          <div className="relative w-[95vw] lg:w-[43vw] mx-auto lg:mx-0 h-[35vh] md:h-[65vh] lg:h-[58vh]">
            <div className="absolute top-[] left-0 w-full h-full">
              <img src={macbook} alt="macbook" className="w-full h-full" />
            </div>
            <iframe
              className="absolute w-[71.80232558139535vw] lg:w-[32.5vw] top-[2.2vh] lg:top-[3.6vh] left-[12vw] lg:left-[5.4vw] h-[27.56551724137931vh] md:h-[53vh] lg:h-[45.68vh]"
              // width="491"
              // height="315"
              src="https://www.youtube.com/embed/JT0rkZd29ck"
              title="You Are the Most High (Tungba) | Bisimanuel Live Session 2022"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Connect with cyberpack */}
      <ConnectWithUs connect={connect} mt={"mt-0"} />

      {/* FAQ's */}
      <div className="mb-16">
        <div className="flex flex-col mt-20">
          <div className="text-5xl font-poppins font-bold text-main text-center">
            FAQ's
          </div>
          <hr className="border-[3px] border-orange-500 w-[50px] mx-auto mt-5" />
        </div>
        <Challenges
          classes={"w-[95vw] md:w-[80vw] mt-10 mx-auto"}
          titleClass={"text-blue-600 text-lg md:text-xl font-bold font-poppins"}
          title={"What are the different types of mobile app development?"}
          details="The two main types of mobile app development are native app development and cross-platform app development. Native app development involves building an app specifically for a particular operating system, such as iOS or Android. Cross-platform app development involves building an app that can run on multiple operating systems, such as iOS, Android, and Windows."
        />
        <Challenges
          classes={"w-[95vw] md:w-[80vw] mt-2 mx-auto"}
          titleClass={"text-blue-600 text-lg md:text-xl font-bold font-poppins"}
          title={"What is the process of mobile app development?"}
          details="The process of mobile app development typically involves the following steps: ideation and planning, design, development, testing and quality assurance, and deployment and maintenance."
        />
        <Challenges
          classes={"w-[95vw] md:w-[80vw] mt-2 mx-auto"}
          titleClass={"text-blue-600 text-lg md:text-xl font-bold font-poppins"}
          title={
            "How can I ensure the success of my mobile app development project?"
          }
          details="To ensure the success of your mobile app development project, it is important to have a clear and well-defined plan, choose the right development team, engage in constant communication and collaboration with the development team, and have a strong focus on user experience and customer satisfaction. Additionally, it is important to have a solid marketing and launch plan in place to ensure the app reaches the right audience and achieves its desired goals."
        />
      </div>

      <div className="h-[25vh] flex flex-col items-center justify-center">
        <div className="text-2xl w-fit mx-auto text-blue-600 flex items-center italic">
          <div className="mr-3 size-4 bg-yellow-600 -skew-x-12"></div>
          CyberPack is your
        </div>
        <div className="h-[50px] w-[100vw] md:w-[30vw] mt-2 mx-auto">
          <Slider {...settings2}>
            {[
              "Application Modernisation Company",
              "UX/UI Design Company",
              "Software Testing Company",
              "BI & Data Analytics Company",
              "Chatbot Solutions Company",
              "Artificial Intelligence Solutions Company",
              "Robotic Process Automation Company",
              "Project Management Company",
              "Business Analysis Company",
              "Agile Consulting Company",
              "DevOps Consulting Company",
              "Software Development Company",
              "Custom Application Development Company",
              "Mobile App Development Company",
              "Cloud Application Services Company",
            ].map((image, index) => (
              <div key={index} className="text-center text-lg text-slate-700">
                {image}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
