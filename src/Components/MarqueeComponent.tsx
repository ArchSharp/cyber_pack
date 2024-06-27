import React from "react";
import { MarqueeHolder } from "./MarqueeHolder";
import { partners } from "../Data/partners";

export const MarqueeComponent = () => {
  return (
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
            className="mx-2 h-[90px] sm:h-[130px] w-[150px] md:w-[250px] flex items-center justify-center rounded-lg bg-slate-50 overflow-clip"
          >
            <img src={eachImage.src} alt={eachImage.alt} className="w-[80%]" />
          </div>
        ))}
      </div>
    </MarqueeHolder>
  );
};
