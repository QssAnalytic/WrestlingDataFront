import React, { useEffect, useState } from "react";

export default function Time({
  id,
  name,
  activeAction,
  setActiveAction,
  errors,
}) {
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");

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
              placeholder="00"
              value={!activeAction.time ? minute : Math.floor(activeAction.time / 60)}
              onChange={(e) => {
                setMinute(e.target.value);
              }}
              className={`w-[2.75rem] h-[1.875rem] rounded outline-none bg-[#D9D9D9] bg-opacity-10 text-white text-center ${
                errors.errors?.[name]
                  ? `border border-red-600 transition-all`
                  : `border-wMain`
              }`}
            />
          </div>
          <p>:</p>
          <div className="second">
            {console.log('time', activeAction.time)}
            <input
              type="text"
              name="second"
              placeholder="00"
              value={!activeAction.time ? second : Math.floor(activeAction.time % 60)}
              onChange={(e) => {
                setSecond(e.target.value);
              }}
              className={`w-[2.75rem] h-[1.875rem] rounded outline-none bg-[#D9D9D9] bg-opacity-10 text-white border text-center ${
                errors.errors?.[name]
                  ? `border border-red-600 transition-all`
                  : `border-wMain`
              }`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
