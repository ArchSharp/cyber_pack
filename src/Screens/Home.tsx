import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { MarqueeHolder } from "../Components/MarqueeHolder";
import { partners } from "../Data/partners";
import microsoft from "../Images/microsoft.png";
import cbp01 from "../Images/cbp01.jpg";
import programmer from "../Images/programmer.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import ceo from "../Images/ceo.png";
import crypto from "../Images/crypto-shield.jpg";
import { useAppDispatch } from "../Store/store";
import { IServiceEnquiry } from "../Features/User/type";
import { useMediaQuery } from "react-responsive";

export const Home = () => {
  const dispatch = useAppDispatch();
  const [lslide, setLslide] = useState("cbp01");
  const [lslide2, setLslide2] = useState("cbp03");
  const [lslide3, setLslide3] = useState("cbp04");
  const [lslide4, setLslide4] = useState("cbp05");
  const [isRead, setIsRead] = useState(false);

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
    slidesToScroll: 1,
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
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
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
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });
  console.log("isMobile: ", isMobile);

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-transparent h-fit pb-10 flex flex-col">
        <div className="text-[40px] md:text-6xl text-white w-[90vw] md:w-[60vw] mt-[120px] mx-[5vw] pr-0 md:pr-[10vw] font-bold">
          Custom Software and Data Engineering services.
        </div>
        <div className="w-fit mx-[5vw] my-5 font-semibold text-orange-600 text-2xl md:text-lg">
          Global Scale. Local Engagement.
        </div>
        <div className="w-[100vw] md:w-[50vw] font-medium text-lg text-white px-[5vw]">
          Need an experienced software technology team or staff to build,
          enhance or maintain your software applications?
        </div>
        <div className="flex w-fit ml-[5vw] my-8">
          <div className="size-[70px] md:size-[150px] rounded-[50%] mr-2 border-2 flex items-center justify-center flex-col">
            <div className="text-lg md:text-4xl text-white font-medium">
              24+
            </div>
            <div className="text-xxs md:text-xs w-fit text-white">
              Years of service
            </div>
          </div>
          <div className="size-[70px] md:size-[150px] rounded-[50%] mr-2 border-2 flex items-center justify-center flex-col">
            <div className="text-lg md:text-4xl text-white font-medium">
              600+
            </div>
            <div className="text-xxs md:text-xs w-fit text-white">
              IT Professionals
            </div>
          </div>
          <div className="size-[70px] md:size-[150px] rounded-[50%] mr-2 border-2 flex items-center justify-center flex-col">
            <div className="text-lg md:text-4xl text-white font-medium">
              500+
            </div>
            <div className="text-xxs md:text-xs text-white w-fit">
              Completed projects
            </div>
          </div>
          <div className="size-[70px] md:size-[150px] rounded-[50%] border-2 flex items-center justify-center flex-col">
            <div className="text-lg md:text-4xl text-white font-medium">
              10+
            </div>
            <div className="text-xxs md:text-xs text-white">
              Digital services
            </div>
          </div>
        </div>
        <div className="mb-16">
          <button className="ml-[5vw] px-7 py-2 border-[3px] italic border-white text-lg font-bold text-white bg-gradient-to-r from-yellow-900 via-yellow-500 to-yellow-300 rounded-full">
            CONNECT WITH US
          </button>
        </div>
        <MarqueeHolder
          mSpeed={70}
          mDelay={5}
          mGradient={false}
          mgradientColor={"rgb(126, 200, 227)"}
        >
          <div className="flex items-center">
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

      <div className="flex flex-col md:flex-row items-center py-[8vh]">
        <div className="w-[90vw] md:w-[25vw] mx-[5vw]">
          <div className="text-main text-xl font-bold italic w-fit">
            CUSTOM SOFTWARE DEVELOPMENT
          </div>
          <div className="text-blue-700 text-2xl font-bold italic w-fit">
            DRIVES DIGITAL BUSINESS DISTINCTION
          </div>

          <p className="my-10 text-slate-600">
            Need to build a new web or mobile application, enhance an existing
            application or require support to maintain your current application?
            DVT have the custom software development services you need in
            Microsoft .NET, JAVA and open-source technology development stacks.
          </p>

          <img src={microsoft} alt="microsoft" className="" />
        </div>
        <div className="w-[100vw] md:w-[70vw] mt-16 md:mt-0">
          <div className="w-[98vw] md:w-[56vw] h-[70vh] ml-[1vw] md:ml-24 flex flex-col top-display">
            <div className="loader w-[10px] md:w-[20px] ml-auto mr-2 mt-2"></div>
            <div className="flex">
              <div
                style={
                  {
                    "--cbpo1-width": `${isMobile ? "150px" : "300px"}`,
                  } as any
                }
                className={`${lslide} mt-[17vh] bg-blue-400 h-[30vh] italic flex items-center`}
              >
                <div className="ml-5 md:ml-10">
                  <div className="text-xs md:text-md font-semibold text-white">
                    CYBERPACK'S DEVELOPMENT
                  </div>
                  <div className="text-lg w-fit md:text-4xl font-bold text-white">
                    CAPABILITIES
                  </div>
                </div>
              </div>
              <div className="ml-auto w-[35vw] md:w-[28vw] overflow-hidden">
                <div
                  style={
                    {
                      "--cbpo3-ml": `${isMobile ? "10%" : "35%"}`,
                    } as any
                  }
                  className={`${lslide2} flex w-[90%] md:w-[70%] items-center mr-auto mt-14`}
                >
                  <img
                    src={cbp01}
                    alt="cbp02"
                    className="w-[35px] md:w-[80px]"
                  />
                  <div className="text-white ml-2 md:ml-3">
                    <div className=" font-bold text-xl md:text-3xl">21+</div>
                    <div className=" font-medium text-xs md:text-sm">
                      Development Frameworks
                    </div>
                  </div>
                </div>
                <div
                  style={
                    {
                      "--cbpo3-ml": `${isMobile ? "10%" : "35%"}`,
                    } as any
                  }
                  className={`${lslide3} flex w-[90%] md:w-[70%] items-center mr-auto my-16`}
                >
                  <img
                    src={cbp01}
                    alt="cbp01"
                    className="w-[35px] md:w-[80px]"
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
                      "--cbpo3-ml": `${isMobile ? "10%" : "35%"}`,
                    } as any
                  }
                  className={`${lslide4} flex w-[90%] md:w-[70%] items-center mr-auto`}
                >
                  <img
                    src={cbp01}
                    alt="cbp01"
                    className="w-[35px] md:w-[80px]"
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

      <div className="ml-[5vw] mt-16 mb-28 w-fit">
        <div className=" font-Cervanttis text-blue-500 text-4xl md:text-6xl">
          Our Services
        </div>
        <hr className="w-[30px] border-orange-400 border-2 ml-[25%] mt-2" />
      </div>

      <div className="mt-20 flex items-center">
        <div className="w-[100vw] md:w-[55vw] ml-[5vw]">
          <div className="text-2xl md:text-4xl text-blue-600 flex items-center italic">
            <div className="mr-3 size-4 bg-yellow-600 -skew-x-12"></div>
            Software <span className="ml-1 font-bold"> Engineering</span>
          </div>
          <div className="pl-7 mt-5 text-slate-600 text-left">
            With more than 24 years of success in custom (bespoke) software
            development, DVT has the expertise, experience and scale to service
            enterprise requirements in web and mobile applications. Whether your
            requirement is to build a new application, enhance an existing
            application or require support to maintain your current application,
            we have the services you need in Microsoft .NET, JAVA and
            open-source technology development stacks.
          </div>
          {ServicesComponent("CUSTOM SOFTWARE DEVELOPMENT", "#")}
          {ServicesComponent("MOBILE APP DEVELOPMENT", "#")}
          {ServicesComponent("MICROSOFT SERVICES", "#")}
          {ServicesComponent("WEB APPLICATION SERVICES", "#")}
        </div>
        <div className="w-[26vw] h-[28vw] ml-[5vw] rounded-xl hidden md:block">
          <img
            src={programmer}
            alt="programmer"
            className="h-full w-full rounded-xl"
          />
        </div>
      </div>

      {/* IT Staff augumentation */}
      <div className="mt-20 mb-10 flex items-center">
        <div className="w-[26vw] h-[26vw] ml-[5vw] rounded-xl hidden md:block">
          <img
            src={programmer}
            alt="programmer"
            className="h-full w-full rounded-xl"
          />
        </div>

        <div className="w-[100vw] md:w-[55vw] ml-[5vw]">
          <div className="text-2xl md:text-4xl text-blue-600 flex items-center italic">
            <div className="mr-3 size-4 bg-yellow-600 -skew-x-12"></div>
            IT Staff
            <span className="ml-1 font-bold"> Augmentation</span>
          </div>
          <div className="pl-7 mt-5 text-slate-600 text-left">
            DVT solves your challenge to find scarce, high-performing IT staff
            for your IT projects and capacity needs. We provide remote, hybrid
            and on-site IT professionals to augment your team. Our capability to
            rapidly fulfil your staff requirements based on our 600+ employees
            and global presence means a solution to your on-hold projects, late
            or delayed delivery and backlog of business requests.
          </div>
          {ServicesComponent("AGILE TECHNOLOGY TEAMS", "#")}
          {ServicesComponent("STAFF AUGMENTATION", "#")}
          {ServicesComponent("MICROSOFT", "#")}
          {ServicesComponent("OPEN-SOURCE/JAVA", "#")}
        </div>
      </div>

      {/* Data and Automation */}
      <div className="mt-20 mb-10 flex items-center">
        <div className="w-[100vw] md:w-[55vw] ml-[5vw]">
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
            business. DVT enables your business to become data-driven, gain key
            insights from analytics and benefit from efficiencies through
            automation. Our comprehensive services in data, business
            intelligence, analytics and automation are ready to service your
            requirements and progress your digital business enablement maturity.
          </div>
          {ServicesComponent("BI & DATA ANALYTICS", "#")}
          {ServicesComponent("ROBOTIC PROCESS AUTOMATION", "#")}
          {ServicesComponent("AI SOLUTIONS", "#")}
          {ServicesComponent("DATABRICKS SERVICES", "#")}
        </div>

        <div className="w-[26vw] h-[26vw] ml-[5vw] rounded-xl hidden md:block">
          <img
            src={programmer}
            alt="programmer"
            className="h-full w-full rounded-xl"
          />
        </div>
      </div>

      {/* Digital Transformation */}
      <div className="mt-20 mb-10 flex items-center">
        <div className="w-[26vw] h-[26vw] ml-[5vw] rounded-xl hidden md:block">
          <img
            src={programmer}
            alt="programmer"
            className="h-full w-full rounded-xl"
          />
        </div>

        <div className="w-[100vw] md:w-[55vw] ml-[5vw]">
          <div className="text-2xl md:text-4xl text-blue-600 flex items-center italic">
            <div className="mr-3 size-4 bg-yellow-600 -skew-x-12"></div>
            Digital
            <span className="ml-1 font-bold">Transformation</span>
          </div>
          <div className="pl-7 mt-5 text-slate-600 text-left">
            Digital transformation of business goes beyond the implementation of
            technology to the adoption of processes, methodology and progression
            of skills maturity that truly enable digital capability. Realise
            your digital business aspirations with DVT’s services focused on
            enterprise Agile transformation, business analysis, change
            management and technology project delivery management. DVT partners
            with our customers on their Agile journey to achieve greater success
            in IT projects, faster delivery, improved quality and real ROI.
          </div>
          {ServicesComponent("BUSINESS ANALYSIS", "#")}
          {ServicesComponent("CHANGE MANAGEMENT", "#")}
          {ServicesComponent("DELIVERY MANAGEMENT", "#")}
          {ServicesComponent("AGILE CONSULTING", "#")}
        </div>
      </div>

      {/* Cloud Solutions */}
      <div className="mt-20 mb-10 flex items-center">
        <div className="w-[100vw] md:w-[55vw] ml-[5vw]">
          <div className="text-2xl md:text-4xl text-blue-600 flex items-center italic">
            <div className="mr-3 size-4 bg-yellow-600 -skew-x-12"></div>
            Cloud
            <span className="ml-1 font-bold">Solutions</span>
          </div>
          <div className="pl-7 mt-5 text-slate-600 text-left">
            Cloud adoption is a key enabler and critical success factor for
            modern digital business. DVT provides expertise in Microsoft Azure,
            AWS and Google Cloud to ensure your successful migration, adoption
            and PAAS management on the world’s best cloud platforms. Realise the
            real benefits of cloud adoption through our application
            modernization and migration services. Scalable, reliable and secure
            applications that are architected and developed to run in the cloud
            as intended. DevSecOps implementation to optimize your development
            process management.
          </div>
          {ServicesComponent("APPLICATION MODERNISATION", "#")}
          {ServicesComponent("CLOUD APPLICATION SERVICES", "#")}
          {ServicesComponent("DEVOPS CONSULTING", "#")}
        </div>

        <div className="w-[26vw] h-[26vw] ml-[5vw] rounded-xl hidden md:block">
          <img
            src={programmer}
            alt="programmer"
            className="h-full w-full rounded-xl"
          />
        </div>
      </div>

      {/* Design Services */}
      <div className="mt-20 mb-10 flex items-center">
        <div className="w-[26vw] h-[26vw] ml-[5vw] rounded-xl hidden md:block">
          <img
            src={programmer}
            alt="programmer"
            className="h-full w-full rounded-xl"
          />
        </div>

        <div className="w-[100vw] md:w-[55vw] ml-[5vw]">
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
          {ServicesComponent("UX REVIEW & ANALYSIS", "#")}
          {ServicesComponent("UX DESIGN", "#")}
          {ServicesComponent("UI DESIGN", "#")}
          {ServicesComponent("OTHER DESIGN SERVICES", "#")}
        </div>
      </div>

      {/* transparent background */}
      <div className="glacier mb-16"></div>

      {/* Meet our CEO */}
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="size-72 md:size-96 rounded-[50%] bg-blue-700 relative overflow-clip">
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
            team of IT professionals at DVT who share this passion, is immensely
            rewarding and a great privilege.
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
            At DVT, we are privileged to provide quality software development
            services and solutions to our clients in Southern Africa, while also
            contributing meaningfully to addressing the technology skills gap in
            the region.
          </div>
          <div className=" text-blue-700 font-bold text-center md:text-left">
            Prof. OLAKUNLE IGBAROOLA
          </div>
        </div>

        <div className="size-72 md:size-96 rounded-[50%] bg-blue-700 relative overflow-clip mt-10 md:mt-0">
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

        <div className="h-[520px] mt-10 mb-10 w-[98vw] md:w-[90vw] mx-auto">
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

      <div className="connect-with-us mt-28 flex flex-col">
        <div className=" font-Cervanttis text-blue-500 text-3xl md:text-5xl font-bold mt-10 text-center">
          Connect with CyberPack
        </div>
        <div className="my-24 flex flex-col md:flex-row items-center">
          <div className="w-[90vw] md:w-[25vw] ml-[7vw]">
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
              DVT leadership and experts are located in our customer regions
              including the United Kingdom, Ireland, Netherlands, Switzerland,
              South Africa, Kenya and the United Arab Emirates. Local capability
              to partner with you for all your service requirements. Global
              scalability to ensure fast, efficient and effective fulfilment on
              your IT service and staffing needs. We are ready to partner with
              you. Contact your local DVT leadership today.
            </div>
          </div>
          <div className="bg-white rounded-lg w-[90vw] md:w-[34vw] h-[515px] mx-[5vw] md:mx-16 mt-10 md:mt-0 overflow-y-auto">
            <div className="pl-7 pt-3 text-3xl text-blue-600 flex items-center italic">
              <div className="mr-3 size-4 bg-yellow-600 -skew-x-12"></div>
              <span className="mr-2 font-bold">SERVICE</span>ENQUIRIES
            </div>
            <form onSubmit={formik.handleSubmit} className="">
              <div className="my-4 mx-auto w-[80vw] md:w-[30vw]">
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

              <div className="my-4 mx-auto w-[80vw] md:w-[30vw]">
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

              <div className="my-4 mx-auto w-[80vw] md:w-[30vw]">
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

              <div className="my-4 mx-auto w-[80vw] md:w-[30vw]">
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

              <div className="my-4 mx-auto w-[80vw] md:w-[30vw]">
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

              <div className="my-4 mx-auto w-[80vw] md:w-[30vw]">
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
                    I grant DVT permission to process the personal information
                    provided
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

      {/* Footer */}
      <div className="h-[85vh] bg-main"></div>
    </div>
  );

  function ServicesComponent(text: string, link: string) {
    return (
      <div className="border-b-[1px] border-slate-500 w-[90%] mx-auto mt-7 flex items-center">
        <a
          href={`https://${link}`}
          target="_self"
          className="italic font-semibold mb-3 text-slate-700 text-sm"
        >
          {text}
        </a>
        <a
          href={`https://${link}`}
          target="_self"
          className="ml-auto mr-2 mb-2"
        >
          <FaArrowCircleRight className="text-blue-700" />
        </a>
      </div>
    );
  }
};
