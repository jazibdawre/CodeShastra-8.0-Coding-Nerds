import React from "react";
import Button from "../common/Button";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section-wrapper">
      <div className="flex flex-col absolute-center hero-section max-width">
        <div className="hero-heading">
          Your Ultimate Rewards App
        </div>
        <div className="hero-subheading">
          join 7.5M+ members who win rewards and cashbacks everyday
        </div>
        <Button buttonText="Login" onClick={()=>window.open("/login","_blank")}/>
      </div>
    </div>
  );
};

export default HeroSection;
