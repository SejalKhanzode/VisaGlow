import React from "react";
import CTAButton from "../components/core/HomePage/Button";
import HighlightText from "../components/core/HomePage/HighlightText";
import Banner from "../assets/banner.mp4";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import WallofFrame from "../components/core/HomePage/WallofFrame";
import CardSection from "../components/core/HomePage/CardSection";
import DermoSection from "../components/core/HomePage/DermoSection";

const Home = ({ isLoggedIn }) => {
  return (
    <div>
      {/* Section-1 */}
      <div
        className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
        text-[#9724b4] justify-between"
      >
        <div className="flex flex-row mt-24">
          <div>
            {" "}
            <div className="align-center text-4xl font-semibold mt-7">
              Empower Your <HighlightText text={"Skin's Health"} /> with Expert
              Consultations
            </div>
            <div className="mt-4 w-[90%] text-center text-lg font-bold  text-[#64766a]">
              Making Expert Advice Accessible Anytime, Anywhere. Elevate Your
              Skin's Potential with Seamless Virtual Care, Where Quality Skin
              Care Meets Virtual Convenience.
            </div>
            <div className="flex flex-row gap-7 mt-8 mx-5">
              <CTAButton active={true} linkto={"/signup"}>
                Connect
              </CTAButton>

              <CTAButton active={false} linkto={"/login"}>
                btn
              </CTAButton>
            </div>
          </div>
          <div className="mx-3 my-8 shadow-blue-500">
            <div class="shadow-lg border border-gray-500 dark:border-gray-700 rounded-xl">
              <video muted loop autoPlay>
                <source src={Banner} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* Crad section */}
        <CardSection />
      </div>

      {/* Section-2 */}
      <div className="items-center bg-[#c0a9bd] ">
        <WallofFrame />

        {/* Reviews  */}
        <h2 className="text-center text-4xl font-semobold mt-10">
          Review from Other Learners
        </h2>
      </div>

      {/* Section-3 */}
      <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter text-purple-900">
        <DermoSection />
      </div>

      {/* Footer */}
    </div>
  );
};

export default Home;
