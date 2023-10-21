import React from "react";

const ButtonField = ({ title, onclick, className, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      className={` ${className} items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 transition ease-in-out delay-75  text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110`}
    >
      {title}
    </button>
  );
};

export default ButtonField;
