import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Images } from "../../common/dummyData/DummyData";

const Carousel = () => {
  const items = Images.map((img) => (
    <img src={img.image} alt="A cat" className="w-full" />
  ));

  return (
    <>
      <AliceCarousel
        mouseTracking
        items={items}
        controlsStrategy="alternate"
        autoPlay
        autoPlayInterval={1000}
        infinite
        disableDotsControls
        disableButtonsControls
      />
    </>
  );
};

export default Carousel;
