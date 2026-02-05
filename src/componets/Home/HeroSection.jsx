import React from "react";
import { useNavigate } from "react-router-dom";
import RightImage from "./heroComponents/RightImage";
import LeftContent from "./heroComponents/LeftContent";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <section
        className="
          w-[95%]
          md:px-10
          sm:mt-20
          
          grid
          grid-cols-1
          md:grid-cols-2
          gap-3
          items-center
        "
      >
        {/* Left Content */}
        <div className="order-2 md:order-1">
          <LeftContent />
        </div>

        {/* Right Illustration */}
        <div className="order-1 md:order-2 ">
          <RightImage />
        </div>
      </section>
    </div>
  );
};



export default HeroSection;
