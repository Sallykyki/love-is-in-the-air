import React from "react";
import animatedBg from "../../assets/images/animated-bg.svg";

const Hero: React.FunctionComponent = () => {
  return (
    <div className="component-Hero">
      <div className="component-Hero__title">
        <img src={animatedBg} />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
  );
};

export default Hero;
