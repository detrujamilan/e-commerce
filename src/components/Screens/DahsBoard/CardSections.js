import React from "react";
import Kurta from "../../../assets/images/4.jpg";

const CardSections = () => {
  return (
    <div className="max-w-[1800px] mx-auto">
      <h2 className="my-5 font-medium text-lg tracking-wide hover:underline ">
        Men's Kurta
      </h2>
      <div className="mb-5">
        <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden w-60 mx-4">
          <div className="mt-3">
            <img src={Kurta} alt="Kurta" className="rounded-md" />
          </div>
          <div className="p-4">
            <div className="flex justify-between">
              <h3 className="text-base font-medium text-gray-500">Nofilter </h3>
              <h3 className="text-base font-medium text-gray-500">₹300</h3>
              <h3 className="text-base font-medium text-gray-500">₹300</h3>
            </div>
            <p className="text-sm font-normal text-[#6B7280]">
              Men Solid Pure Cotton Kurta
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSections;
