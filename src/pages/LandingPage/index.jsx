import React from "react";
import './landingpage.css'
import perfume from "./pink background.png";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const LandingPage = () => {
  return (
    <div className="landing-page">

   <div className="left-side">

<h1>Discover Your Perfect Scent</h1>
<h2>Explore our collection of unique fragrances</h2>
<h3>Find your next favorite fragrance today</h3>

<div className="button-container">
  <Button
  type="primary"
  icon={<ArrowRightOutlined />}
  iconPlacement="end"
  className="explore-button"
>
  Explore Now
</Button>

    <Button
    type="primary"
      icon={<ArrowRightOutlined />}
      iconPlacement="end"
      className="shop-button"
    >
      Shop Now

    </Button>
    
</div>
   </div>

    <div className="right-side">
          <img src={perfume} alt="perfume" />
    
    </div>

    </div>
  );

};

export default LandingPage;