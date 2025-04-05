import React from "react";

const Button = ({ text }) => {
  return (
    <>
      <button className="text-white px-4 py-2 md:px-6 bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600 text-sm md:text-base lg:text-lg">
        {text}
      </button>
    </>
  );
};

export default Button;
