import React from "react";
import animatedBg from "../../assets/images/animated-bg.svg";

const Hero: React.FunctionComponent = () => {
  return (
    <div className="component-Hero">
      <div className="component-Hero__title">
        <img src={animatedBg} alt="nice couple" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </div>
    </div>
  );
};

export default Hero;
