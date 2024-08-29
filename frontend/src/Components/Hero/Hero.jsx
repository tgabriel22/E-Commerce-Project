import React from "react";
import "./Hero.css";
// import hero_image from "../Assets/hero_image.png";
import hero_image from "../Assets/womenTwo-pieceset Product.png";
// import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        {/* <h2>NEW ARRIVALS ONLY</h2> */}
        {/* <h2>Step into Comfort and Creativity</h2> */}
        <div className="hero-title">
          <div className="hero-hand-icon">
            <p>Discover </p>
            {/* <img src={hand_icon} alt="" /> */}
          </div>
          <p>the Latest</p>
          <p>
            in Crochet <br /> Fashion
          </p>
        </div>
        <a href="#new-collections">
          <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
          </div>
        </a>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
