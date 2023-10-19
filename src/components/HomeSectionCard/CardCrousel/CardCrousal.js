import React from "react";
import AliceCarousel from "react-alice-carousel";
import CardSection from "../CardSection";

const CardCrousal = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 5 },
  };

  const items = [1, 1, 1, 1].map((item) => <CardSection />);
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

export default CardCrousal;
