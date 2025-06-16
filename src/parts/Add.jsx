import React, { useState } from "react";
import Button from "./Button";

const Add = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [answer, setAnswer] = useState(0);
  const add = () => {
    setAnswer(first + second);
  };

  const sub = () => {
    setAnswer(first - second);
  };
  const multi = () => {
    setAnswer(first * second);
  };

  const div = () => {
    setAnswer(first / second);
  };
  const Clear = () => {
    setFirst("");
    setSecond("");
    setAnswer(0);
  };

  return (
    <div className="bg-black p-5 text-white  w-100">
      <div className="p-5 m-3 border rounded-3xl">
        <div className="">
          <div>
            <input
              type="number"
              className="m-2 border rounded"
              onChange={(e) => setFirst(Number(e.target.value))}
              placeholder="First Number"
              value={first}
            />
          </div>
        </div>
        <div className="flex-col">
          <div>
            <input
              type="number"
              className=" m-2 border rounded"
              onChange={(e) => setSecond(Number(e.target.value))}
              placeholder="Second Number"
              value={second}
            />
          </div>
          <div className="flex-col">
            <div> Answer</div>
            <input type="number" className="border rounded" value={answer} />
          </div>
        </div>
      </div>
      <div className="md:flex justify-center">
        <Button name={"+"} onClick={() => add()} />
        <Button name={"-"} onClick={() => sub()} />
        <Button name={"/"} onClick={() => div()} />
        <Button name={"*"} onClick={() => multi()} />
        <Button name={"Clear"} onClick={() => Clear()} />
      </div>
    </div>
  );
};

export default Add;
