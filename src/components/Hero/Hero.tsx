import React from "react";
import animatedBg from "../../assets/images/animated-bg.svg";
import Music from "../Music";

const Hero: React.FunctionComponent = () => {
  return (
    <div className="component-Hero">
      <div className="component-Hero__content">
        <img
          className="component-Hero__content__image"
          src={animatedBg}
          alt="nice couple"
        />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <Music />
      </div>
    </div>
  );
};

export default Hero;
