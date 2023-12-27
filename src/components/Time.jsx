import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "../context/FormContext";

export default function Time({ id, name, activeAction, setActiveAction }) {
  // const { singleAction } = useContext(FormContext);

  const [minute, setMinute] = useState(null);
  const [second, setSecond] = useState(null);

  useEffect(() => {
    handleTime();
  }, [minute, second]);

  const handleTime = () => {
    setActiveAction((currAction) => ({
      ...currAction,
      [name]: Number(minute) * 60 + Number(second),
    }));
  };

  return (
    <>
      <div className="second-container flex items-center gap-5">
        <label htmlFor="minute">Second:</label>
        <div className="time flex justify-between px-3 py-5 bg-wMain gap-3">
          <div className="minute basis-[50%]">
            <input
              type="text"
              name="minute"
              value={minute === null ? Math.floor(activeAction.time / 60) : minute}
              onChange={(e) => {
                setMinute(e.target.value);
              }}
              className="w-[2.75rem] h-[1.875rem] rounded outline-none bg-[#D9D9D9] bg-opacity-10 text-white text-center"
            />
          </div>
          <p>:</p>
          <div className="second">
            <input
              type="text"
              name="second"
              value={second === null ?  Math.floor(activeAction.time % 60) : second}
              onChange={(e) => {
                setSecond(e.target.value);
              }}
              className={`w-[2.75rem] h-[1.875rem] rounded outline-none bg-[#D9D9D9] bg-opacity-10 text-white text-center`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
