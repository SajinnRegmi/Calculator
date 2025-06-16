import React, { useState } from "react";

const Change = () => {
  const [change, setChange] = useState(true);
  return (
    <div className="flex justify-center items-center flex-col gap-5">
      {change == true ? (
        <div className="bg-red-500 h-100 w-100 " />
      ) : (
        <div className="bg-green-500 h-100 w-100 " />
      )}
      <div
        className={`border h-10 w-50 flex justify-center rounded-xl ${
          change
            ? ` bg-green-500 hover:bg-green-600`
            : `bg-red-500 hover:bg-red-600`
        } bg-green-500 hover:bg-green-600 cursor-pointer`}
        onClick={() => setChange((change) => !change)}
      >
        Change
      </div>
    </div>
  );
};

export default Change;
