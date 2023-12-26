import React from "react";
import wrestler from "../assets/wrestler.png";
import nationality from "../assets/nationality.svg";

export default function Wrestler({ id, activeWrestler, handleWrestler }) {
  return (
    <div
      className={`wrestler flex flex-col  items-center justify-center`}
      onClick={handleWrestler}
    >
      <div
        className={`wrestler-img w-fit border-[2px] rounded-md ${
          activeWrestler[id]
            ? " border-wGreen"
            : "border-[#000] border-opacity-[60%] opacity-[50%]"
        }`}
      >
        <img src={wrestler} alt="wrestler" />
      </div>
      <div className="wrestler-name-nationality flex gap-2 ">
        <p className="name text-wGreen">Muhammad Aliyev</p>
        <img src={nationality} alt="nationality" className="" />
      </div>
    </div>
  );
}
