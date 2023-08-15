import React from "react";
import HighlightText from "./HighlightText";
import consult_with_dermo from "../../../assets/Card/consultWithDermo.png";
import interactive_skin_soln from "../../../assets/Card/interactiveSkinSolutions.png";
import your_skin_your_terms from "../../../assets/Card/yourSkinYourTems.png";
import CTAButton from "./Button";

const CardSection = () => {
  return (
    <div>
      <div className="mt-[130px] mb-32">
        <div className="flex flex-col gap-5 items-center">
          <div className="text-4xl font-semibold text-center">
            Your Swiss Knife for
            <HighlightText text={" learning any language"} />
          </div>

          <div className="text-center text-richblack-600 mx-auto text-base font-medium w-[70%]">
            Using spin making learning multiple languages easy. with 20+
            languages realistic voice-over, progress tracking, custom schedule
            and more.
          </div>

          <div className="flex flex-row items-center justify-center mt-5 ">
            <div className="flex flex-rows mr-5 ">
                <img
              src={your_skin_your_terms}
              alt="yourskinyourterms"
              className="object-contain -mr-52 z-40"
            /><img
              src={consult_with_dermo}
              alt="consultwithdermo"
              className="object-contain z-30"
            />
            </div>
            <img
              src={interactive_skin_soln}
              alt="interactiveskinsoln"
              className="object-contain -ml-6 z-50"
            />
          </div>

          <div className="w-fit">
            <CTAButton active={true} linkto={"/signup"}>
              <div>Learn more</div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
