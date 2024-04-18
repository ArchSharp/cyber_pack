import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface NavBarProps {
  head: string;
}

export const Navbar = ({ head }: NavBarProps) => {
  const [isRotate, setIsRotate] = useState(false);

  return (
    <div>
      <div className="flex items-center" onClick={() => setIsRotate(!isRotate)}>
        {head}
        <IoIosArrowForward
          className={`ml-auto mr-5 text-2xl ${
            isRotate ? "arrow-rotate" : "reverse-rotate"
          }`}
        />
      </div>
      {isRotate && (
        <ul
          className={`${
            isRotate ? "open-height" : "close-height"
          } overflow-y-auto`}
        >
          <li className="text-slate-200 text-base px-2 py-2 font-bold">
            Company Overview
          </li>
          <li className="text-slate-200 text-base px-2 py-2 font-bold">
            Our Leadership
          </li>
          <li className="text-slate-200 text-base px-2 py-2 font-bold">
            Social Contribution
          </li>
          <li className="text-slate-200 text-base px-2 py-2 font-bold">
            Dynamic Technologies Group
          </li>
          <li className="text-slate-200 text-base px-2 py-2 font-bold">
            Softwares Partners
          </li>
        </ul>
      )}
    </div>
  );
};
