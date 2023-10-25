import React from "react";
const ProductCard = ({ item }) => {
  console.log("item", item);
  return (
    <>
      <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-md  w-60 mx-4 my-5">
        <div className="mt-3">
          <img
            src={item.imageUrl}
            alt="Kurta"
            className="rounded-md max-w-[250px] max-h-[240px]"
          />
        </div>
        <div className="p-3 text-center">
          <h3 className="text-base font-medium text-[#0f1111]">{item.brand}</h3>
          <p className="text-xs py-1 font-medium text-[#0f1111]">
            {item.title}
          </p>
          <h3 className="text-base pb-1 font-medium text-gray-500">
            &#8377;&nbsp;{item.price - item.discountedPrice}
          </h3>
          <h3 className="text-sm font-medium text-gray-500">
            <span className="text-[#565959]"> {item.discountPersent}% off</span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
