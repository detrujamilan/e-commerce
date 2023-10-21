import React from "react";
import AliceCarousel from "react-alice-carousel";
import CardSections from "./CardSections";

const CarousalSection = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
  };

  const items = [1].map((item) => <CardSections />);
  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative p-5">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          autoPlayInterval={1000}
          infinite
        />
      </div>
    </div>
  );
};

export default CarousalSection;
