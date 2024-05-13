import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import { MarqueeHolder } from "../Components/MarqueeHolder";
import { partners } from "../Data/partners";
import microsoft from "../Images/microsoft.png";
import cbp01 from "../Images/cbp01.jpg";
import programmer from "../Images/programmer.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import ceo from "../Images/ceo.png";
import crypto from "../Images/crypto-shield.jpg";
import { useAppDispatch, useAppSelector } from "../Store/store";
// import { IServiceEnquiry } from "../Features/User/type";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import * as routes from "../Data/Routes";
import { setHeader } from "../Features/User/userSlice";
import { ConnectWithUs } from "../Components/ConnectWithUs";
import { ClientsReview } from "../Components/ClientsReview";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { header, lastRoute } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const [lslide, setLslide] = useState("cbp01");
  const [lslide2, setLslide2] = useState("cbp03");
  const [lslide3, setLslide3] = useState("cbp04");
  const [lslide4, setLslide4] = useState("cbp05");

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
  const services = useRef<HTMLDivElement>(null);
  const clients = useRef<HTMLDivElement>(null);
  const handleScrollToBottom = () => {
    if (connect.current) {
      connect.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    if (lastRoute !== "/") {
      const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Optional: smooth scrolling animation
        });
      };

      handleScrollToTop();
    }
  }, [lastRoute]);

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-transparent h-fit pb-10 flex flex-col">
        <div className="text-[40px] md:text-6xl text-white w-[90vw] lg:w-[60vw] mt-[80px] mx-[2vw] md:mx-[5vw] pr-0 md:pr-[10vw] font-bold">
          Custom Software and Data Engineering services.
        </div>
        <div className="w-fit mx-[2vw] md:mx-[5vw] my-5 font-semibold text-orange-600 text-2xl md:text-lg">
          Global Scale. Local Engagement.
        </div>
        <div className="w-[100vw] lg:w-[50vw] font-medium text-lg text-white px-[5vw] lg:px-0 lg:mx-[5vw]">
          Need an experienced software technology team or staff to build,
          enhance or maintain your software applications?
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
        <div className="w-[90vw] lg:w-[25vw] mx-[1vw] md:mx-[2vw] lg:mx-[5vw]">
          <div className="text-main text-lg lg:text-xl font-bold italic w-fit">
            CUSTOM SOFTWARE DEVELOPMENT
          </div>
          <div className="text-blue-700 text-xl lg:text-2xl font-bold italic w-fit">
            DRIVES DIGITAL BUSINESS DISTINCTION
          </div>

          <p className="my-10 text-slate-600">
            Need to build a new web or mobile application, enhance an existing
            application or require support to maintain your current application?
            CyberPackHQ have the custom software development services you need
            in Microsoft .NET, JAVA and open-source technology development
            stacks.
          </p>

          <img src={microsoft} alt="microsoft" className="" />
        </div>

        <div className="w-[100vw] lg:w-[70vw] mt-16 lg:mt-0">
          <div className="w-[90vw] lg:w-[56vw] h-[60vh] md:h-[70vh] ml-[5vw] lg:ml-20 flex flex-col top-display">
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

      {/* our services */}

      <div
        className="ml-[5vw] mt-8 md:mt-16 mb-10 md:mb-28 w-fit"
        ref={services}
      >
        <div className="font-Cervanttis text-blue-500 text-4xl md:text-6xl">
          Our Services
        </div>
        <hr className="w-[30px] border-orange-400 border-2 ml-[25%] mt-2" />
      </div>

      <div className="mt-10 md:mt-20 flex flex-col lg:flex-row items-center">
        <div className="w-[100vw] lg:w-[55vw] pl-[5vw] lg:pl-0 lg:ml-[5vw]">
          <div className="text-2xl md:text-4xl text-blue-600 flex items-center italic">
            <div className="mr-3 size-4 bg-yellow-600 -skew-x-12"></div>
            Software <span className="ml-1 font-bold"> Engineering</span>
          </div>
          <div className="pl-7 mt-5 text-slate-600 text-left">
            With more than 24 years of success in custom (bespoke) software
            development, CyberPackHQ has the expertise, experience and scale to
            service enterprise requirements in web and mobile applications.
            Whether your requirement is to build a new application, enhance an
            existing application or require support to maintain your current
            application, we have the services you need in Microsoft .NET, JAVA
            and open-source technology development stacks.
          </div>
          {ServicesComponent(
            "CUSTOM SOFTWARE DEVELOPMENT",
            "#",
            routes.custom_softwareDev
          )}
          {ServicesComponent(
            "MOBILE APP DEVELOPMENT",
            "#",
            routes.custom_softwareDev
          )}
          {ServicesComponent(
            "MICROSOFT SERVICES",
            "#",
            routes.custom_softwareDev
          )}
          {ServicesComponent(
            "WEB APPLICATION SERVICES",
            "#",
            routes.custom_softwareDev
          )}
        </div>

        <div className="w-[90vw] md:w-[70vw] lg:w-[26vw] h-[55vw] md:h-[45vw] lg:h-[26vw] mb-6 mt-6 lg:mt-0 ml-[5vw] rounded-xl">
          <img
            src={programmer}
            alt="programmer"
            className="h-full w-full rounded-xl"
          />
        </div>
      </div>

      {/* IT Staff augumentation */}
      <div className="mt-20 mb-10 flex flex-col lg:flex-row items-center">
        <div className="w-[90vw] md:w-[70vw] lg:w-[26vw] h-[55vw] md:h-[45vw] lg:h-[26vw] mb-6 mt-0 ml-[5vw] rounded-xl">
          <img
            src={programmer}
            alt="programmer"
            className="h-full w-full rounded-xl"
          />
        </div>

        <div className="w-[100vw] lg:w-[55vw] pl-[5vw] lg:pl-0 lg:ml-[5vw]">
          <div className="text-2xl md:text-4xl text-blue-600 flex items-center italic">
            <div className="mr-3 size-4 bg-yellow-600 -skew-x-12"></div>
            IT Staff
            <span className="ml-1 font-bold"> Augmentation</span>
          </div>
          <div className="pl-7 mt-5 text-slate-600 text-left">
            CyberPackHQ solves your challenge to find scarce, high-performing IT
            staff for your IT projects and capacity needs. We provide remote,
            hybrid and on-site IT professionals to augment your team. Our
            capability to rapidly fulfil your staff requirements based on our
            600+ employees and global presence means a solution to your on-hold
            projects, late or delayed delivery and backlog of business requests.
          </div>
          {ServicesComponent(
            "AGILE TECHNOLOGY TEAMS",
            "#",
            routes.custom_softwareDev
          )}
          {ServicesComponent(
            "STAFF AUGMENTATION",
            "#",
            routes.custom_softwareDev
          )}
          {ServicesComponent("MICROSOFT", "#", routes.custom_softwareDev)}
          {ServicesComponent(
            "OPEN-SOURCE/JAVA",
            "#",
            routes.custom_softwareDev
          )}
        </div>
      </div>

      {/* Data and Automation */}
      <div className="mt-20 mb-10 flex flex-col lg:flex-row items-center">
        <div className="w-[100vw] lg:w-[55vw] pl-[5vw] lg:pl-0 lg:ml-[5vw]">
          <div className="text-2xl md:text-4xl text-blue-600 flex items-center italic">
            <div className="mr-3 size-4 bg-yellow-600 -skew-x-12"></div>
            Data and
            <span className="ml-1 font-bold">Automation</span>
          </div>
          <div className="pl-7 mt-5 text-slate-600 text-left">
            Transform your business decision-making, customer acquisition,
            retention and service leveraging our expertise in data, analytics
            and automation. Data, business intelligence, analytics and
            automation are critical capabilities in the modern, digital
            business. CyberPackHQ enables your business to become data-driven,
            gain key insights from analytics and benefit from efficiencies
            through automation. Our comprehensive services in data, business
            intelligence, analytics and automation are ready to service your
            requirements and progress your digital business enablement maturity.
          </div>
          {ServicesComponent(
            "BI & DATA ANALYTICS",
            "#",
            routes.custom_softwareDev
          )}
          {ServicesComponent(
            "ROBOTIC PROCESS AUTOMATION",
            "#",
            routes.custom_softwareDev
          )}
          {ServicesComponent("AI SOLUTIONS", "#", routes.custom_softwareDev)}
          {ServicesComponent(
            "DATABRICKS SERVICES",
            "#",
            routes.custom_softwareDev
          )}
        </div>

        <div className="w-[90vw] md:w-[70vw] lg:w-[26vw] h-[55vw] md:h-[45vw] lg:h-[26vw] mb-6 mt-6 lg:mt-0 ml-[5vw] rounded-xl">
          <img
            src={programmer}
            alt="programmer"
            className="h-full w-full rounded-xl"
          />
        </div>
      </div>

      {/* Digital Transformation */}
      <div className="mt-20 mb-10 flex flex-col lg:flex-row items-center">
        <div className="w-[90vw] md:w-[70vw] lg:w-[26vw] h-[55vw] md:h-[45vw] lg:h-[26vw] mb-6 mt-0 ml-[5vw] rounded-xl">
          <img
            src={programmer}
            alt="programmer"
            className="h-full w-full rounded-xl"
          />
        </div>

        <div className="w-[100vw] lg:w-[55vw] pl-[5vw] lg:pl-0 lg:ml-[5vw]">
          <div className="text-2xl md:text-4xl text-blue-600 flex items-center italic">
            <div className="mr-3 size-4 bg-yellow-600 -skew-x-12"></div>
            Digital
            <span className="ml-1 font-bold">Transformation</span>
          </div>
          <div className="pl-7 mt-5 text-slate-600 text-left">
            Digital transformation of business goes beyond the implementation of
            technology to the adoption of processes, methodology and progression
            of skills maturity that truly enable digital capability. Realise
            your digital business aspirations with CyberPackHQ’s services
            focused on enterprise Agile transformation, business analysis,
            change management and technology project delivery management.
            CyberPackHQ partners with our customers on their Agile journey to
            achieve greater success in IT projects, faster delivery, improved
            quality and real ROI.
          </div>
          {ServicesComponent(
            "BUSINESS ANALYSIS",
            "#",
            routes.custom_softwareDev
          )}
          {ServicesComponent(
            "CHANGE MANAGEMENT",
            "#",
            routes.custom_softwareDev
          )}
          {ServicesComponent(
            "DELIVERY MANAGEMENT",
            "#",
            routes.custom_softwareDev
          )}
          {ServicesComponent(
            "AGILE CONSULTING",
            "#",
            routes.custom_softwareDev
          )}
        </div>
      </div>

      {/* Cloud Solutions */}
      <div className="mt-20 mb-10 flex flex-col lg:flex-row items-center">
        <div className="w-[100vw] lg:w-[55vw] pl-[5vw] lg:pl-0 lg:ml-[5vw]">
          <div className="text-2xl md:text-4xl text-blue-600 flex items-center italic">
            <div className="mr-3 size-4 bg-yellow-600 -skew-x-12"></div>
            Cloud
            <span className="ml-1 font-bold">Solutions</span>
          </div>
          <div className="pl-7 mt-5 text-slate-600 text-left">
            Cloud adoption is a key enabler and critical success factor for
            modern digital business. CyberPackHQ provides expertise in Microsoft
            Azure, AWS and Google Cloud to ensure your successful migration,
            adoption and PAAS management on the world’s best cloud platforms.
            Realise the real benefits of cloud adoption through our application
            modernization and migration services. Scalable, reliable and secure
            applications that are architected and developed to run in the cloud
            as intended. DevSecOps implementation to optimize your development
            process management.
          </div>
          {ServicesComponent(
            "APPLICATION MODERNISATION",
            "#",
            routes.custom_softwareDev
          )}
          {ServicesComponent(
            "CLOUD APPLICATION SERVICES",
            "#",
            routes.custom_softwareDev
          )}
          {ServicesComponent(
            "DEVOPS CONSULTING",
            "#",
            routes.custom_softwareDev
          )}
        </div>

        <div className="w-[90vw] md:w-[70vw] lg:w-[26vw] h-[55vw] md:h-[45vw] lg:h-[26vw] mb-6 mt-6 lg:mt-0 ml-[5vw] rounded-xl">
          <img
            src={programmer}
            alt="programmer"
            className="h-full w-full rounded-xl"
          />
        </div>
      </div>

      {/* Design Services */}
      <div className="mt-20 mb-10 flex flex-col lg:flex-row items-center">
        <div className="w-[90vw] md:w-[70vw] lg:w-[26vw] h-[55vw] md:h-[45vw] lg:h-[26vw] mb-6 mt-0 ml-[5vw] rounded-xl">
          <img
            src={programmer}
            alt="programmer"
            className="h-full w-full rounded-xl"
          />
        </div>

        <div className="w-[100vw] lg:w-[55vw] pl-[5vw] lg:pl-0 lg:ml-[5vw]">
          <div className="text-2xl md:text-4xl text-blue-600 flex items-center italic">
            <div className="mr-3 size-4 bg-yellow-600 -skew-x-12"></div>
            Design
            <span className="ml-1 font-bold">Services</span>
          </div>
          <div className="pl-7 mt-5 text-slate-600 text-left">
            With a keen eye for digital experience design and user interfaces,
            we craft seamless digital experience solutions for your business,
            marrying business goals with user needs. Great UX and UI are the
            competitive edge in the modern digital business world. Your digital
            channels have the functional capability. We make it an incredible
            experience.
          </div>
          {ServicesComponent(
            "UX REVIEW & ANALYSIS",
            "#",
            routes.custom_softwareDev
          )}
          {ServicesComponent("UX DESIGN", "#", routes.custom_softwareDev)}
          {ServicesComponent("UI DESIGN", "#", routes.custom_softwareDev)}
          {ServicesComponent(
            "OTHER DESIGN SERVICES",
            "#",
            routes.custom_softwareDev
          )}
        </div>
      </div>

      {/* transparent background */}
      <ClientsReview clients={clients} />

      {/* Meet our CEO */}
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="size-72 lg:size-96 rounded-[50%] bg-blue-700 relative overflow-clip">
          <img src={ceo} alt="ceo" className="w-[610px] h-[420px]" />
        </div>
        <div className="ml-0 md:ml-8 mt-16 md:mt-0">
          <div className="w-[100vw] md:w-fit">
            <div className="font-Cervanttis text-blue-500 text-3xl md:text-5xl text-center md:text-left">
              Meet our CEO
            </div>
            <hr className="ml-[30%] mt-5 w-[130px] border-orange-500 border-[1px]" />
          </div>
          <div className=" text-slate-600 w-[100vw] md:w-[50vw] my-7 text-center md:text-left">
            I have been passionate about software solutions since I wrote my
            first software program on a ZX Spectrum in primary school! Leading a
            team of IT professionals at CyberPackHQ who share this passion, is
            immensely rewarding and a great privilege.
          </div>
          <div className=" text-blue-700 font-bold text-center md:text-left">
            Prof. OLAKUNLE IGBAROOLA
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-36">
        <div className="ml-0 md:ml-8">
          <div className="w-[100vw] md:w-fit text-center md:text-left">
            <div className="font-Cervanttis text-blue-500 text-3xl md:text-5xl">
              Meet our MD
            </div>
            <hr className="ml-[30%] mt-5 w-[130px] border-orange-500 border-[1px]" />
          </div>
          <div className=" text-slate-600 w-[100vw] md:w-[400px] px-5 md:px-2 my-7 text-center md:text-left">
            At CyberPackHQ, we are privileged to provide quality software
            development services and solutions to our clients in Southern
            Africa, while also contributing meaningfully to addressing the
            technology skills gap in the region.
          </div>
          <div className=" text-blue-700 font-bold text-center md:text-left">
            Prof. OLAKUNLE IGBAROOLA
          </div>
        </div>

        <div className="size-72 lg:size-96 rounded-[50%] bg-blue-700 relative overflow-clip mt-10 md:mt-0">
          <img src={ceo} alt="ceo" className="w-[610px] h-[420px]" />
        </div>
      </div>

      {/* News and Insight */}
      <div className="flex flex-col mt-24">
        <div className="w-fit mx-auto md:mx-[5vw]">
          <div className="font-Cervanttis text-blue-500 text-4xl md:text-5xl">
            News and insights
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
                  src={crypto}
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

      {/* Connect with cyberpack */}
      <ConnectWithUs connect={connect} mt={"mt-28"} />

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

  function ServicesComponent(text: string, link: string, route: string) {
    return (
      <div className="border-b-[1px] border-slate-500 w-[90%] mx-auto mt-7 flex items-center">
        <div
          // href={`https://${link}`}
          // target="_self"
          className="italic font-semibold mb-3 text-slate-700 text-sm cursor-pointer"
          onClick={() => navigate(route)}
        >
          {text}
        </div>
        <div
          // href={`https://${link}`}
          // target="_self"
          className="ml-auto mr-2 mb-2 cursor-pointer"
        >
          <FaArrowCircleRight
            className="text-blue-700"
            onClick={() => navigate(route)}
          />
        </div>
      </div>
    );
  }
};
