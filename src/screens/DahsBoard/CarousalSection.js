import React from "react";
import AliceCarousel from "react-alice-carousel";
import CardSections from "./CardSections";
import { mens_kurta } from "../../data/Mens Clothes/Kurta";

const CarousalSection = ({ sectionName }) => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 6 },
  };

  const items = mens_kurta
    .slice(0, 10)
    .map((item) => <CardSections product={item} />);
  return (
    <div className="relative px-4 lg:px-8">
      <h2 className="text-lg font-medium pt-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          autoPlayInterval={1000}
          disableDotsControls
          disableButtonsControls
        />
      </div>
    </div>
  );
};

export default CarousalSection;
