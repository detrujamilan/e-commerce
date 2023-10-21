import React from "react";
import CarousalSection from "./CarousalSection";
import Carousel from "./Carousel";

const DashBoard = () => {
  return (
    <div>
      <Carousel />
      <CarousalSection/>
      <CarousalSection/>
    </div>
  );
};

export default DashBoard;
