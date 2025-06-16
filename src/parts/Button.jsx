import React from "react";

const Button = ({ name, ...prop }) => {
  return (
    <div
      className="flex justify-center
      items-center  p-2 border text-black bg-blue-700 rounded-xl
      hover:text-red-600 hover:bg-white cursor-pointer shadow shadow-black h-10 w-15"
      {...prop}
    >
      {name}
    </div>
  );
};

export default Button;
