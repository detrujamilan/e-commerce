import React from "react";
import Carousel from "../../../common/Home_carousel/Carousel";
import CardSection from "../../HomeSectionCard/CardSection";
import Kurta from "../../../assets/images/4.jpg";
import Shoes from "../../../assets/images/photo-1560769629-975ec94e6a86.jpg";

const DashBoard = () => {
  return (
    <div>
      <Carousel />
      <CardSection title={"Men's Kurta"} img={Kurta} />
      <CardSection title={"Men's Shoes"} img={Shoes} />
    </div>
  );
};

export default DashBoard;
