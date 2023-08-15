import React from "react";
import timelineImage from "../../../assets/wallofframe.png";
import "./WallofFrame.css"
import HighlightText from "../HomePage/HighlightText";
import frame from "../../../assets/Card/frame.png"

const WallofFrame = () => {
  return (
    <div className="pb-10 h-[650px] justify-center items-center">
      <div className='bg-[frame] text-4xl font-semibold text-center pt-10'>
                Wall of
                <HighlightText text={" Frame"} />
            </div>
      <div className="relative shadow-blue-400 pt-24 wallofframe">
        <img
          src={timelineImage}
          alt="timelineImage"
          className="object-cover h-fit ml-32 img shadow-[rgba(0,_0,_0,_0.7)_0px_30px_90px]"
        />

        <div
          className="filter absolute bg-[#004e3a] flex flex-row text-white uppercase py-7
                          w-[30%]  left-[50%] translate-x-[-50%] translate-y-[-50%] "
        >
          <div className="flex flex-row gap-5 items-center  px-7">
            <p className="text-3xl font-bold">5</p>
            <p className=" text-md">
              Year Journey
            </p>
          </div>
<div className="border-r-[2px]"></div>
          <div className="flex gap-5 items-center px-8">
            <p className="text-3xl font-bold">100+</p>
            <p className=" text-md">Skin Experts</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default WallofFrame;
