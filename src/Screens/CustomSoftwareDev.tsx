import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useRef, useState } from "react";
import { MarqueeHolder } from "../Components/MarqueeHolder";
import { partners } from "../Data/partners";
import microsoft from "../Images/microsoft.png";
import cbp01 from "../Images/cbp01.jpg";
// import programmer from "../Images/programmer.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
// import ceo from "../Images/ceo.png";
import crypto from "../Images/crypto-shield.jpg";
import { useAppDispatch } from "../Store/store";
import { IServiceEnquiry } from "../Features/User/type";
import { useMediaQuery } from "react-responsive";
import nasa from "../Images/Companies/seven.png";
import cisco from "../Images/Companies/eight.png";
import ios from "../Images/ios-logo.png";
import android from "../Images/Android.png";
import windows from "../Images/windows.png";
import html from "../Images/html5.png";
import java from "../Images/java.png";

export const CustomSoftwareDev = () => {
  const dispatch = useAppDispatch();
  const [lslide, setLslide] = useState("cbp01");
  const [lslide2, setLslide2] = useState("cbp03");
  const [lslide3, setLslide3] = useState("cbp04");
  const [lslide4, setLslide4] = useState("cbp05");
  const [isRead, setIsRead] = useState(false);
  const [isSlideUp, setIsSlideUp] = useState(false);
  const [isSlideDown, setIsSlideDown] = useState(false);

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

  useEffect(() => {
    const LSlide = setInterval(() => {
      setIsSlideUp((prev) => (prev === true ? false : true));
      setIsSlideDown((prev) => (prev === true ? false : true));
    }, 5000);
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

  // useEffect(() => {
  //   const handleScrollToTop = () => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth", // Optional: smooth scrolling animation
  //     });
  //   };

  //   handleScrollToTop();
  // }, []);

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

      <div className="min-h-[650px] pb-10 bg-customsoftware flex flex-col">
        <div className="text-center mt-16 mb-5 text-white text-4xl font-bold flex flex-col">
          <div>Custom Software Development Services</div>
          <hr className="w-[100px] border-2 border-yellow-500 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-y-5 lg:gap-y-0 px-[1vw] lg:h-[700px] xl:h-[300px] w-[98vw] md:w-[80vw] lg:w-[85vw] mx-auto mt-10 overflow-x-auto">
          {FlipCard("", "orange", "IT Staff augumentation")}
          {FlipCard(
            "",
            "#1F456E",
            "Project based custom software development solutions"
          )}
          {FlipCard("", "rgb(70,130,180)", "Consulting services")}
          {FlipCard("", "#33363D", "Code Reviews")}
          {FlipCard("", "#666362", "Technical Analysis")}
        </div>

        <div className="text-center mt-16 mb-5 text-white text-4xl font-bold flex flex-col">
          <div>Supported Software Frameworks</div>
          <hr className="w-[100px] border-2 border-yellow-500 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-3 gap-y-5 lg:flex items-end justify-between px-[1vw] h-[250px] md:h-[420px] lg:h-[220px] w-[98vw] md:w-[70vw] lg:w[60vw] mx-auto mt-10 overflow-x-auto">
          <div className="flex flex-col items-center justify-center">
            <img src={ios} alt="ios" className="w-[50px] md:w-[100px]" />
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
              src={windows}
              alt="windows"
              className="w-[50px] md:w-[120px]"
            />
            <div className="mt-3 text-white font-bold text-sm">Windows</div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img src={html} alt="html" className="w-[50px] md:w-[130px]" />
            <div className="mt-3 text-white font-bold text-sm">HTML5</div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img src={java} alt="java" className="w-[50px] md:w-[100px]" />
            <div className="mt-3 text-white font-bold text-sm">Java</div>
          </div>
        </div>
      </div>

      {/* fixed right side navbar */}
      <div className=" bg-sidenavbar w-[170px] rounded-tl-[30px] rounded-bl-[30px] z-[1] h-[300px] fixed right-0 top-[35vh] hidden lg:block">
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

      {/* transparent background */}
      <div className="glacier h-[300px] md:h-[670px] mb-16 overflow-hidden">
        <div className="flex items-center h-full">
          <div className="w-[50vw] h-full flex relative">
            <div
              className={`${
                isSlideUp ? "slide-up-text" : "slide-up-text-off"
              } text-white font-poppins w-[20vw] absolute right-[90px] md:right-[170px] py-4 md:py-10 text-left font-semibold text-xxs md:text-xl`}
            >
              "Comforting to have such a professional partner on call to help
              you."
            </div>
            <div
              className={`${
                isSlideUp ? "slide-up" : "slide-up-off"
              } size-[20vw] md:size-40 bg-white rounded-[50%] absolute right-[0%] flex items-center justify-center`}
            >
              <img src={nasa} alt="nasa" className="w-[50px] md:w-[100px]" />
            </div>
          </div>
          <div className="w-[50vw] h-full flex relative">
            <div
              className={`${
                isSlideDown ? "slide-down-text" : "slide-down-text-off"
              } text-white font-poppins w-[20vw] absolute top-[34%] md:top-[37%] left-[20vw] md:left-[170px] py-4 md:py-10 text-left font-semibold text-xxs md:text-xl`}
            >
              "Creativity delivered what others couldn't; cost-effective and
              timely."
            </div>
            <div
              className={`${
                isSlideDown ? "slide-down" : "slide-down-off"
              } size-[20vw] md:size-40 bg-white rounded-[50%] absolute md:top-[37%] left-[-8%] md:left-[-3%] flex items-center justify-center`}
            >
              <img src={cisco} alt="cisco" className="w-[50px] md:w-[100px]" />
            </div>
          </div>
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
      <div className="connect-with-us mt-28 flex flex-col" ref={connect}>
        <div className=" font-Cervanttis text-blue-500 text-3xl md:text-5xl font-bold mt-10 text-center">
          Connect with CyberPackHQ
        </div>
        <div className="my-24 flex flex-col lg:flex-row items-center">
          <div className="w-[90vw] lg:w-[25vw] ml-[7vw]">
            <h3 className="text-orange-600 text-3xl font-bold">
              World Class IT services.
            </h3>
            <div className="text-white text-3xl font-bold">
              Regional presence to partner with you for{" "}
              <span className="text-orange-600 text-3xl font-bold">
                success.
              </span>
            </div>
            <div className="mt-5 text-slate-300 text-left">
              CyberPackHQ leadership and experts are located in our customer
              regions including the United Kingdom, Ireland, Netherlands,
              Switzerland, South Africa, Kenya and the United Arab Emirates.
              Local capability to partner with you for all your service
              requirements. Global scalability to ensure fast, efficient and
              effective fulfilment on your IT service and staffing needs. We are
              ready to partner with you. Contact your local CyberPackHQ
              leadership today.
            </div>
          </div>
          <div className="bg-white rounded-lg w-[90vw] md:w-[75vw] lg:w-[34vw] h-[515px] mx-[5vw] lg:mx-16 mt-10 lg:mt-0 overflow-y-auto">
            <div className="pl-7 pt-3 text-3xl text-blue-600 flex items-center italic">
              <div className="mr-3 size-4 bg-yellow-600 -skew-x-12"></div>
              <span className="mr-2 font-bold">SERVICE</span>ENQUIRIES
            </div>
            <form onSubmit={formik.handleSubmit} className="">
              <div className="my-4 mx-auto w-[80vw] md:w-[70vw] lg:w-[30vw]">
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

              <div className="my-4 mx-auto w-[80vw] md:w-[70vw] lg:w-[30vw]">
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

              <div className="my-4 mx-auto w-[80vw] md:w-[70vw] lg:w-[30vw]">
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

              <div className="my-4 mx-auto w-[80vw] md:w-[70vw] lg:w-[30vw]">
                <textarea
                  rows={4}
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

              <div className="my-4 mx-auto w-[80vw] md:w-[70vw] lg:w-[30vw]">
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

              <div className="my-4 mx-auto w-[80vw] md:w-[70vw] lg:w-[30vw]">
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
          <div></div>
        </div>
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

  function FlipCard(flipcss: string, bgcolour: string, frontText: string) {
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            culpa sit tempora. Odit quas animi qui exercitationem delectus eaque
          </div>
        </div>
      </div>
    );
  }
};
