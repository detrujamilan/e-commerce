import React from "react";
import CarousalSection from "./CarousalSection";
import Carousel from "./Carousel";
import Product from "../../components/Product/Product";

const DashBoard = () => {
  return (
    <div>
      {/* <Carousel />
      <CarousalSection sectionName={"Men's Kurta"} />
      <CarousalSection sectionName={"Men's Shoes"} />
      <CarousalSection sectionName={"Men's Shirt"} />
      <CarousalSection sectionName={"Women's Saree"} />
      <CarousalSection sectionName={"Women's Dress"} /> */}
      <Product />
    </div>
  );
};

export default DashBoard;
