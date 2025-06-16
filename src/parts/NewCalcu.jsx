import React, { useState } from "react";
import Button from "./Button";
import Sbutton from "./Sbuttton";
const NewCalcu = () => {
  const [input, setInput] = useState("");
  const body = [
    "x²",
    "√",

    ")",
    "(",
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "00",
    "+",
  ];
  const calc = () => {
    let temp = eval(input);
    setInput(temp);
  };

  return (
    <div className="flex-1 flex justify-center items-centre p-3 h-[100vh] w-[100vw] ">
      <div className="   bg-gray-300  text-white h-[60vh]  p-5">
        <div>
          <div className="bg-green-200 p-1 m-4 w-[20vw] h-[6vh]  text-xl text-right rounded font-bolder text-black justify-end items-end  ">
            {input}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 p-2 ">
          {body.map((item) => (
            <Button
              name={item}
              onClick={() => setInput((input) => input + item)}
            />
          ))}
        </div>
        <div className="flex p-2 ">
          <Sbutton name={"AC"} onClick={() => setInput("")} Sbutton />
          <Sbutton name={"="} onClick={() => calc()} />
        </div>
      </div>
    </div>
  );
};

export default NewCalcu;
