import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/logo1.png";
import Logo2 from "../../../assets/TimeLineLogo/logo2.png";
import Logo3 from "../../../assets/TimeLineLogo/logo3.png";


const timeline = [
  {
    Logo: Logo1,
    Heading: "Solve The Problem",
    Description: "Inspire Your Skin's Journey",
  },
  {
    Logo: Logo2,
    Heading: "Solve The Problem",
    Description: "Inspire Your Skin's Journey",
  },
  {
    Logo: Logo3,
    Heading: "Solve The Problem",
    Description: "Inspire Your Skin's Journey",
  },
];

const TimelineSection = () => {
  return (
    <div className="">
      <div className="w-[45%] flex flex-col gap-5">
        {timeline.map((element, index) => {
          return (
            <div className="flex flex-row gap-6 bg-white">
              <div className="w-[50px] h-[50px] flex items-center">
                <img src={element.Logo} alt="" />
              </div>
              <div>
                <h2 className="font-semibold text-[18px]">{element.Heading}</h2>
                <p className="'text-base">{element.Description}</p>
              </div>
            </div>
          );
        })}
      </div>
     
    </div >
  );
};

export default TimelineSection;
