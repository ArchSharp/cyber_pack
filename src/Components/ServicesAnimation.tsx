import { useEffect, useState } from "react";
import cbp01 from "../Images/development-frameworks.svg";
import cbp02 from "../Images/it-professionals.svg";
import cbp03 from "../Images/projects-completed.svg";
import { useMediaQuery } from "react-responsive";

export const ServicesAnimation = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
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
    <div className="w-[100vw] lg:w-fit mt-16 lg:mt-0 relative">
      <div className="absolute top-10 right-10 z-[3]">
        <div className="loader w-[10px] md:w-[13px] lg:w-[20px]"></div>
      </div>
      <div className="relative w-[90vw] lg:w-[56vw] h-[60vh] md:h-[70vh] flex flex-col justify-center top-display">
        <div className="flex justify-center items-center">
          <div
            style={
              {
                "--cbpo1-width": `${isTablet ? "150px" : "300px"}`,
              } as any
            }
            className={`${lslide} bg-cbp01_blue h-[30vh] italic flex items-center`}
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
                src={cbp02}
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
                src={cbp03}
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
  );
};
