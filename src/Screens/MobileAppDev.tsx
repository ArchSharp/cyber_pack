import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import { MarqueeHolder } from "../Components/MarqueeHolder";
import { partners } from "../Data/partners";
import flutter from "../Images/TechStacks/flutter.svg";
import cbp01 from "../Images/cbp01.jpg";
import mobile from "../Images/mobile.png";
import { FaArrowCircleRight } from "react-icons/fa";
import strategy from "../Images/strategy.png";
import design from "../Images/design.png";
import develop from "../Images/develop.jpg";
import test from "../Images/test.png";
import deploy from "../Images/deploy.jpg";
import { FcViewDetails } from "react-icons/fc";
import { useAppDispatch, useAppSelector } from "../Store/store";
// import { IServiceEnquiry } from "../Features/User/type";
import { useMediaQuery } from "react-responsive";
import ios from "../Images/TechStacks/ios.svg";
import android from "../Images/TechStacks/android.svg";
import react_native from "../Images/TechStacks/react-native.svg";
import xamarin from "../Images/TechStacks/xamarin2.svg";
import ionic from "../Images/TechStacks/ionic2.svg";
import { setHeader, setLastRoute } from "../Features/User/userSlice";
import { useLocation } from "react-router-dom";
import programmer from "../Images/programmer.jpg";
import { Challenges } from "../Components/Challenges";
import media from "../Images/media.png";
import { ConnectWithUs } from "../Components/ConnectWithUs";
import { ClientsReview } from "../Components/ClientsReview";
import macbook from "../Images/macbook.png";
import { LuDot } from "react-icons/lu";

export const MobileAppDev = () => {
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
          Mobile App Development
        </div>
        {/* <div className="w-fit mx-[2vw] md:mx-[5vw] my-5 font-semibold text-orange-600 text-2xl md:text-lg">
          Global Scale. Local Engagement.
        </div> */}
        <div className="w-[100vw] lg:w-[50vw] font-medium text-lg text-white px-[5vw] lg:px-0 lg:mx-[5vw] mt-5">
          Need an app to increase sales, improve efficiency, improve
          productivity, increase workforce flexibility or to be a market
          disruptor?
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
              600+
            </div>
            <div className="text-xxs md:text-xs w-fit text-white">
              IT Professionals
            </div>
          </div>
          <div className="size-[80px] md:size-[150px] rounded-[50%] mr-2 border-2 flex items-center justify-center flex-col">
            <div className="text-lg md:text-4xl text-white font-medium">
              500+
            </div>
            <div className="text-xxs md:text-xs text-white w-fit">
              Completed projects
            </div>
          </div>
          <div className="size-[80px] md:size-[150px] rounded-[50%] border-2 flex items-center justify-center flex-col">
            <div className="text-lg md:text-4xl text-white font-medium">
              10+
            </div>
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
            MOBILE FIRST DEVELOPMENT FOR A
          </div>
          <div className="text-blue-700 text-xl lg:text-2xl font-bold italic w-fit">
            MOBILE FIRST WORLD
          </div>

          <p className="my-10 text-slate-600">
            DVT’s mobile application development services connect you with your
            customers and employees in the mobile channel. Enable, enhance and
            extend your business mobile presence with our mobile services.
            <br />
            <br /> We deliver specialist consulting and development skills
            across all the major mobile application platforms and technologies,
            including native Android and iOS, Flutter and React Native.
            <br />
            <br />
            Our Mobile App development practice provides our customers with
            access to the full set of capabilities needed to build world class
            mobile solutions. From UI/UX design to App store deployment,
            CyberPackHQ offers end-to-end service in respect to mobile
            application development, services and consulting.
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
                    <div className=" font-bold text-xl md:text-3xl">600+</div>
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
                    <div className=" font-bold text-xl md:text-3xl">500+</div>
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
          <div>Custom Software Development Services</div>
          <hr className="w-[100px] border-2 border-yellow-500 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 px-[1vw] lg:h-[700px] xl:h-[600px] w-[98vw] md:w-[80vw] lg:w-[85vw] xl:w-[65vw] mx-auto mt-10 overflow-x-auto">
          {FlipCard(
            "",
            "orange",
            "Custom Mobile Application",
            "Our expert developers specialise in iOS, Android and flutter development platforms."
          )}
          {FlipCard(
            "",
            "#1F456E",
            "IT Staff Augumentation",
            "Providing software development consultants to augment client development capacity, off-shore and near-shore skills augmentation, and co-sourced teams."
          )}
          {FlipCard(
            "",
            "rgb(70,130,180)",
            "Code Reviews",
            "We analyse, identify and fix any faults in your code."
          )}
          {FlipCard(
            "",
            "#33363D",
            "Technical Analysis",
            "To define the application and required technical implementation architecture to meet your mobile audience requirements."
          )}
          <div className="w-[20vw] hidden lg:block"></div>
          {FlipCard(
            "justify-self-center",
            "#666362",
            "Mobile App Consulting",
            "Expert advisory services in respect to mobile application concepts, architecture, development and maintenance."
          )}
          {FlipCard(
            "justify-self-center",
            "#666362",
            "Application store policies",
            "Review and guidance to ensure quality levels and best practices are implemented and so ensure acceptance by the major app stores."
          )}
        </div>

        <div className="text-center mt-16 mb-5 text-white text-4xl font-bold flex flex-col">
          <div>Supported Mobile Frameworks</div>
          <hr className="w-[100px] border-2 border-yellow-500 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-3 gap-y-5 lg:flex items-end justify-between px-[1vw] h-[250px] md:h-[420px] lg:h-[220px] w-[98vw] md:w-[70vw] lg:w[60vw] mx-auto mt-10 overflow-x-auto">
          <div className="flex flex-col items-center justify-center">
            <img
              src={ios}
              alt="ios"
              className="w-[50px] md:w-[100px] mb-[50px]"
            />
            <div className=" text-white font-bold">iOS</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={android}
              alt="android"
              className="w-[50px] md:w-[100px]"
            />
            <div className="mt-3 text-white font-bold text-sm">Android</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={react_native}
              alt="react_native"
              className="w-[50px] md:w-[120px]"
            />
            <div className="mt-3 text-white font-bold text-sm">
              React Native
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img
              src={xamarin}
              alt="xamarin"
              className="w-[50px] md:w-[130px]"
            />
            <div className="mt-3 text-white font-bold text-sm">Xamarin</div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img src={ionic} alt="ionic" className="w-[50px] md:w-[100px]" />
            <div className="mt-3 text-white font-bold text-sm">Ionic</div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img
              src={flutter}
              alt="flutter"
              className="w-[50px] md:w-[100px]"
            />
            <div className="mt-3 text-white font-bold text-sm">Flutter</div>
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

      {/* solve the business challenges */}
      <div className="mt-20">
        <div className="text-lg md:text-xl pl-[5vw] italic font-bold text-customsoftware">
          CyberPackHQ MOBILE DEVELOPMENT SERVICES
        </div>
        <div className="text-2xl md:text-3xl pl-[5vw] italic font-bold text-blue-600">
          SOLVE THESE BUSINESS CHALLENGES:
        </div>
      </div>
      <div className="mt-0 mb-10 flex flex-col lg:flex-row items-start">
        <div className="w-[100vw] lg:w-[55vw] pl-[5vw] lg:pl-0 lg:ml-[5vw]">
          <Challenges
            classes={"mt-12"}
            titleClass={
              "text-blue-600 text-xl md:text-2xl font-medium italic font-poppins"
            }
            title={"Sourcing scarce mobile development skills"}
            details={
              "Globally businesses struggle to find and hire scarce mobile developers to build and maintain mobile applications. The global shortage of iOS and Android skills means delays in development of apps,  new functionality, updates to align with OS releases or correction of non-performing apps. CyberPackHQ's mobile software development services across a range of technologies can help businesses overcome these challenges by providing access to highly skilled IT professionals with a range of expertise and experience in building mobile solutions."
            }
          />
          <Challenges
            classes={"mt-1"}
            titleClass={
              "text-blue-600 text-xl md:text-2xl font-medium italic font-poppins"
            }
            title={"Faster delivery of your mobile app"}
            details="To deliver at the pace required by business, IT functions in organisations need burst capacity in respect to their development teams. CyberPackHQ has the depth in mobile development personnel to provide IT professionals in all project roles on short notice and for the duration that is needed to address backlogs and meet demand. Scale your mobile capacity up and down as needed, quickly and cost-effectively."
          />
          <Challenges
            classes={"mt-1"}
            titleClass={
              "text-blue-600 text-xl md:text-2xl font-medium italic font-poppins"
            }
            title={"Mobile App technical complexity and poor performance"}
            details="Modern mobile apps can be complex in both deisgn and deployment. CyberPackHQ's experience in mobile application development will accellerate your builds, improve quality and shorten timelines to deployment of your apps to the mobile stores."
          />
        </div>

        <div className="w-[90vw] md:w-[70vw] lg:w-[26vw] h-[55vw] md:h-[45vw] lg:h-[26vw] mb-6 mt-6 lg:mt-0 ml-[5vw] md:ml-auto md:mr-auto lg:mr-0 lg:ml-0 rounded-xl">
          <img
            src={programmer}
            alt="programmer"
            className="h-full w-full rounded-xl"
          />
        </div>
      </div>

      {/* Benefit of cybepack */}
      <div className="mt-20 mb-10">
        <div className="text-lg md:text-xl pl-[5vw] italic font-bold text-customsoftware">
          BENEFITS OF CYBERPACKHQ'S
        </div>
        <div className="text-2xl md:text-3xl pl-[5vw] italic font-bold text-blue-600">
          MOBILE APP DEVELOPMENT SERVICES
        </div>
      </div>
      <div className="mt-0 mb-10 flex flex-col lg:flex-row items-start">
        <div className="w-[90vw] md:w-[70vw] lg:w-[26vw] h-[55vw] md:h-[45vw] lg:h-[65vh] mb-6 mt-0 ml-[5vw] rounded-xl">
          <img
            src={programmer}
            alt="programmer"
            className="h-full w-full rounded-xl"
          />
        </div>

        <div className="w-[100vw] lg:w-[55vw] pl-[2vw] lg:pl-0 lg:ml-[2vw]">
          <Challenges
            classes={"mt-0"}
            titleClass={
              "text-blue-600 text-xl md:text-2xl font-medium italic font-poppins"
            }
            title={"Skilled Development Capacity On-Demand"}
            details={
              "Engage and scale to meet your high-performing software development team requirements rapidly. With deep skills capacity, CyberPackHQ are able to assemble and provide you with the development capacity scale you need when you need it."
            }
          />
          <Challenges
            classes={"mt-1"}
            titleClass={
              "text-blue-600 text-xl md:text-2xl font-medium italic font-poppins"
            }
            title={"Fast ramp-up and efficient delivery"}
            details="Our experienced team members ramp-up quickly and as senior developers have the experience that ensures they are productive sooner."
          />
          <Challenges
            classes={"mt-1"}
            titleClass={
              "text-blue-600 text-xl md:text-2xl font-medium italic font-poppins"
            }
            title={"No language barrier"}
            details="All CyberPackHQ team members have English as either their first language or as a second, high proficiency (business-level) language ensuring communication is as easy and effective as you need it to be."
          />
          <Challenges
            classes={"mt-1"}
            titleClass={
              "text-blue-600 text-xl md:text-2xl font-medium italic font-poppins"
            }
            title={"Favourable time-zone"}
            details="All CyberPackHQ team members are within 2 hours of our client zone. This ensures our team members are able to work and overlap your business day."
          />
          <Challenges
            classes={"mt-1"}
            titleClass={
              "text-blue-600 text-xl md:text-2xl font-medium italic font-poppins"
            }
            title={"Flexible engagement models"}
            details="Client on-site, hybrid or remote work assignments are all facilitated to ensure the best fit with your needs and time-frames."
          />
        </div>
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
          Case study for web dashboard for customers to view their loyalty
          status in the financial services industry.
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
              Our client provides financial wellness products & services in
              South Africa including medical aid, retirement annuities,
              investments & insurance. Our client launched a new insurance plan
              for the middle market segment, including an improved dashboard and
              needed a way for customers to know how to improve their status
              level, and to view partners.
            </div>

            <div className=" text-orange-400 font-bold mt-10 text-lg italic font-poppins text-center lg:text-left">
              CyberPackHQ Solution
            </div>
            <div className="mt-3 text-white lg:pr-20 text-center lg:text-left">
              DVT assisted our client through a skills augmentation service. DVT
              provided software development professional services that ensured
              our client had a high performing software development team that
              can deliver business value faster in Scrum Agile Sprints. DVT
              utilised Scrum Masters, Java developer and mobile developer
              consultants on the assignment.
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

      {/* Our Mobile App Development */}
      <div>
        <div className="text-center font-poppins mt-10 flex flex-col">
          <div className="text-main text-4xl font-poppins font-bold">
            Our Mobile App Development Process
          </div>
          <hr className="border-[2px] border-orange-500 w-[100px] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-5 lg:gap-y-0 px-[1vw] py-[1vh] lg:h-[700px] xl:h-[350px] w-[98vw] md:w-[80vw] lg:w-[85vw] xl:w-[90vw] mx-auto mt-10 overflow-x-auto">
          {FlipCard2(
            "",
            "white",
            "Strategise",
            [
              "MEAP decision",
              "Build vs. buy",
              "Hardware selection",
              "Mobile Application Development Platform",
              "Cross-platform/native/ hybrid approach",
            ],
            "border-blue-400",
            strategy
          )}
          {FlipCard2(
            "",
            "white",
            "Design",
            [
              "System architecture",
              "Application architecture",
              "Security focus",
              "User experience (UX) analysis",
              "User interface (UI) design",
            ],
            "border-slate-700",
            design
          )}
          {FlipCard2(
            "",
            "white",
            "Develop",
            [
              "Cross-platform development",
              "Fully native development",
              "HTML/ hybrid app development",
              "Continuous integration",
              "Agile methodology",
            ],
            "border-slate-300",
            develop
          )}
          {FlipCard2(
            "",
            "white",
            "Test",
            [
              "Test-driven development",
              "UI automation testing",
              "Integration testing",
              "Performance testing",
              "Testing lab",
            ],
            "border-blue-900",
            test
          )}
          <div className="w-[25vw] hidden lg:block xl:hidden"></div>
          {FlipCard2(
            "",
            "white",
            "Deploy",
            [
              "Maintenence and support",
              "Analytics and reporting",
              "Enterprise Mobility Management",
              "Mobile Application Management",
              "Mobile Device Management",
            ],
            "border-yellow-400",
            deploy
          )}
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
          CyberPackHQ is your
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

  function FlipCard(
    flipcss: string,
    bgcolour: string,
    frontText: string,
    backText: string
  ) {
    return (
      <div
        style={
          {
            "--flip-card-bg-colour": `${bgcolour}`,
          } as any
        }
        className={`flip-card h-[280px] w-[45vw] md:w-[35vw] lg:w-[20vw] xl:w-[15vw] rounded-[30px] text-center ${flipcss} shadow-xl`}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front flex items-center justify-center text-xl md:text-2xl text-white font-bold px-5 rounded-[30px]">
            {frontText}
          </div>
          <div className="flip-card-back rounded-[30px] flex items-center justify-center px-4 ">
            {backText}
          </div>
        </div>
      </div>
    );
  }

  function FlipCard2(
    flipcss: string,
    bgcolour: string,
    frontText: string,
    backText: string[],
    borderColor: string,
    image: string
  ) {
    return (
      <div
        style={
          {
            "--flip-card-bg-colour": `${bgcolour}`,
          } as any
        }
        className={`flip-card h-fit md:h-[300px] py-2 w-[92vw] md:w-[35vw] lg:w-[25vw] xl:w-[15vw] mx-auto md:mx-0 text-center ${flipcss}`}
      >
        <div className="flip-card-inner hidden md:block">
          <div className="flip-card-front flex flex-col items-center justify-center px-5 rounded-[30px]">
            <div
              className={`border-[17px] ${borderColor} size-[170px] rounded-[50%] flex items-center justify-center shadow-xl shadow-black`}
            >
              <img src={image} alt="deploy-1" className="w-[100px]" />
            </div>
            <div className="text-lg text-slate-500 font-poppins font-semibold mt-4">
              {frontText}
            </div>
          </div>
          <div
            style={{ backgroundColor: "slategray" }}
            className="flip-card-back rounded-[30px] flex items-center"
          >
            <ul className=" text-left">
              {backText.map((text, index) => (
                <li key={index}>
                  <div className="flex items-center">
                    <LuDot className="text-2xl mr-2" /> {text}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* small screen */}
        <div className="flex items-start md:hidden">
          <div
            className={`border-[7px] ${borderColor} size-[100px] rounded-[50%] flex items-center justify-center shadow-xl shadow-black`}
          >
            <FcViewDetails className="w-[100px]" />
          </div>

          <div className="flex flex-col px-4">
            <div className="text-slate-600 text-left font-bold pl-2">
              {frontText}
            </div>
            <ul className="text-left text-xs md:text-base">
              {backText.map((text, index) => (
                <li key={index}>
                  <div className="flex items-center">
                    <LuDot className="text-2xl mr-1" /> {text}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
};
