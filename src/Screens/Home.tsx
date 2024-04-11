import { useEffect, useState } from "react";
import { MarqueeHolder } from "../Components/MarqueeHolder";
import { partners } from "../Data/partners";
import microsoft from "../Images/microsoft.png";
import cbp01 from "../Images/cbp01.jpg";

export const Home = () => {
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

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-transparent h-fit pb-10 flex flex-col">
        <div className="text-5xl text-white w-[60vw] mt-[120px] ml-[5vw] font-bold">
          Custom Software and <br /> Data Engineering services.
        </div>
        <div className="w-fit ml-[5vw] my-5 font-semibold text-orange-600 text-lg">
          Global Scale. Local Engagement.
        </div>
        <div className="w-[50vw] font-medium text-lg text-white pl-[5vw]">
          Need an experienced software technology team or staff to build,
          enhance or maintain your software applications?
        </div>
        <div className="flex w-fit ml-[5vw] my-8">
          <div className="w-[150px] h-[150px] rounded-[50%] mr-3 border-2 flex items-center justify-center flex-col">
            <div className=" text-4xl text-white font-medium">24+</div>
            <div className="text-xs text-white">Years of service</div>
          </div>
          <div className="w-[150px] h-[150px] rounded-[50%] mr-3 border-2 flex items-center justify-center flex-col">
            <div className=" text-4xl text-white font-medium">600+</div>
            <div className="text-xs text-white">IT Professionals</div>
          </div>
          <div className="w-[150px] h-[150px] rounded-[50%] mr-3 border-2 flex items-center justify-center flex-col">
            <div className=" text-4xl text-white font-medium">500+</div>
            <div className="text-xs text-white">Completed projects</div>
          </div>
          <div className="w-[150px] h-[150px] rounded-[50%] mr-3 border-2 flex items-center justify-center flex-col">
            <div className=" text-4xl text-white font-medium">10+</div>
            <div className="text-xs text-white">Digital services</div>
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
                className="mx-2 h-[90px] sm:h-[130px] w-[250px] flex items-center justify-center rounded-lg bg-main"
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

      <div className="flex items-center py-[8vh]">
        <div className="w-[25vw] ml-[5vw]">
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
        <div className="w-[70vw]">
          <div className="w-[56vw] h-[70vh] ml-24 bg-main flex flex-col top-display">
            <div className="loader w-[20px] ml-auto mr-2 mt-2"></div>
            <div className="flex">
              <div
                className={`${lslide} mt-[17vh] bg-blue-400 h-[30vh] w-[300px] italic flex items-center justify-center`}
              >
                <div className="">
                  <div className="text-md font-semibold text-white">
                    CYBERPACK'S DEVELOPMENT
                  </div>
                  <div className="text-4xl font-bold text-white">
                    CAPABILITIES
                  </div>
                </div>
              </div>
              <div className="ml-auto w-[28vw] overflow-hidden">
                <div
                  className={`${lslide2} flex w-[70%] items-center ml-[35%] mr-auto mt-14`}
                >
                  <img src={cbp01} alt="cbp01" className="w-[80px]" />
                  <div className="text-white ml-3">
                    <div className=" font-bold text-3xl">21+</div>
                    <div className=" font-medium text-sm">
                      Development Frameworks
                    </div>
                  </div>
                </div>
                <div
                  className={`${lslide3} flex w-[70%] items-center ml-[35%] mr-auto my-16`}
                >
                  <img src={cbp01} alt="cbp01" className="w-[80px]" />
                  <div className="text-white ml-3">
                    <div className=" font-bold text-3xl">600+</div>
                    <div className=" font-medium text-sm">IT Professionals</div>
                  </div>
                </div>
                <div
                  className={`${lslide4} flex w-[70%] items-center ml-[35%] mr-auto`}
                >
                  <img src={cbp01} alt="cbp01" className="w-[80px]" />
                  <div className="text-white ml-3">
                    <div className=" font-bold text-3xl">500+</div>
                    <div className=" font-medium text-sm">
                      Projects Completed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
