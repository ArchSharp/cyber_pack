import React from "react";

export const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-transparent h-[100vh] flex flex-col">
      <div className="text-5xl text-white w-[60vw] mt-[120px] ml-[5vw] font-bold">
        Custom Software and <br /> Data Engineering services.
      </div>
      <div className="w-fit ml-[5vw] my-5 font-semibold text-orange-600 text-lg">
        Global Scale. Local Engagement.
      </div>
      <div className="w-[50vw] font-medium text-lg text-white pl-[5vw]">
        Need an experienced software technology team or staff to build, enhance
        or maintain your software applications?
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
    </div>
  );
};
