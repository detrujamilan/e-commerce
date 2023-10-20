import React from "react";

export const InputFiled = ({
  onChange,
  placeholder,
  type,
  value,
  className,
}) => {
  return (
    <input
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
      className={`${className}] h-12 pl-5 border-2 rounded-lg outline-none bg-gray-100 text-gray-800 transition duration-500 placeholder-gray-400 hover:outline-none hover:border-indigo-500 hover:bg-white hover:shadow-md`}
    />
  );
};
