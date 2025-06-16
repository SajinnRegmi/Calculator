import React from "react";

const Button = ({ name, ...prop }) => {
  return (
    <div
      className="flex justify-center
      items-center m-1 p-2 border text-black bg-white rounded-xl
      hover:text-white hover:bg-blue-700 cursor-pointer shadow shadow-black h-10 w-33"
      {...prop}
    >
      {name}
    </div>
  );
};

export default Button;
