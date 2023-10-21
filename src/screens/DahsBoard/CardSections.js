import React from "react";

const CardSections = ({ product }) => {
  return (
    <div className="max-w-[1800px] mx-auto">
      <div className="mb-1">
        <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden w-60 mx-4">
          <div className="mt-3">
            <img
              src={product.imageUrl}
              alt="Kurta"
              className="rounded-md max-w-[250px] max-h-[240px]"
            />
          </div>
          <div className="p-3 text-center">
            <h3 className="text-base font-medium text-[#0f1111]">
              {product.brand}
            </h3>
            <p className="text-xs py-1 font-medium text-[#0f1111]">
              {product.title}
            </p>
            <h3 className="text-base pb-1 font-medium text-gray-500">
              ₹ {product.price - product.discountedPrice}
            </h3>
            <h3 className="text-sm font-medium text-gray-500">
              <span className="text-[#565959]"> {product.price}</span> (
              {product.discountPersent}% off)
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSections;
