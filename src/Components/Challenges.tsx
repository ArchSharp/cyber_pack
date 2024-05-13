import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface ChallengesProps {
  title: string;
  details: string;
  classes: string;
  titleClass: string;
}

export const Challenges = ({
  title,
  details,
  classes,
  titleClass,
}: ChallengesProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${classes}`}>
      <div
        className="flex items-center border-b-[1px] py-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="size-6 bg-yellow-500 rounded-[50%] flex items-center justify-center mr-[1vw]">
          <IoIosArrowForward
            className={`text-white text-xl ${
              isOpen ? "arrow-rotate" : "reverse-rotate"
            }`}
          />
        </div>
        <div className={`${titleClass}`}>{title}</div>
      </div>
      <div
        className={`pl-[3vw] py-3 text-slate-500 ${
          isOpen ? "show-details" : "hide-details"
        }`}
      >
        {details}
      </div>
    </div>
  );
};
