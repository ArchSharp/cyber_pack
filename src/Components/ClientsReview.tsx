import { useEffect, useState } from "react";
import { partners } from "../Data/partners";

interface ClientsReviewProps {
  clients: any;
}

export const ClientsReview = ({ clients }: ClientsReviewProps) => {
  const [isSlideUp, setIsSlideUp] = useState(false);
  const [isSlideDown, setIsSlideDown] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const LSlide = setInterval(() => {
      setIndex((prev) => (prev < 6 ? prev + 1 : 0));
      setIsSlideUp((prev) => (prev === true ? false : true));
      setIsSlideDown((prev) => (prev === true ? false : true));
    }, 5000);
    return () => {
      clearInterval(LSlide);
    };
  }, []);

  return (
    <div
      className="glacier h-[260px] md:h-[650px] mb-16 overflow-hidden"
      ref={clients}
    >
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
            <img
              src={partners[index].src}
              alt="nasa"
              className="w-[50px] md:w-[85%]"
            />
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
            <img
              src={partners[index + 1].src}
              alt="cisco"
              className="w-[50px] md:w-[85%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
