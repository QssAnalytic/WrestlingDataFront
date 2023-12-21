import React from "react";

export default function Time() {
  return (
    <>
      <div className="second-container flex items-center">
        <label htmlFor="minute">Second:</label>
        <div className="time flex justify-between px-3 py-5 bg-wMain gap-3">
          <div className="minute basis-[50%]">
            <input
              type="text"
              name="minute"
              className="w-[2.75rem] h-[1.875rem] rounded outline-none bg-[#D9D9D9] bg-opacity-10 text-white text-center"
            />
          </div>
          <p>:</p>
          <div className="second">
            <input
              type="text"
              name="second"
              className={`w-[2.75rem] h-[1.875rem] rounded outline-none bg-[#D9D9D9] bg-opacity-10 text-white text-center`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
