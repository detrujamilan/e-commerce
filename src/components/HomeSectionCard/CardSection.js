import React from "react";
import kurta from "../../assets/images/796mw15-1515 1.jpg";
import CardCrousal from "./CardCrousel/CardCrousal";

const CardSection = () => {
  return (
    <div>
      <span>Men's Kurta </span>
      <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-60 mx-3">
        <div className=" h-[13rem] w-[10rem]">
          <img src={kurta} className="object-cover object-top w-full h-full " />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-500">Nofilter </h3>
          <p className=" mt-2 text-sm  text-gray-500">
            Men Solid Pure Cotton Kurta
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
