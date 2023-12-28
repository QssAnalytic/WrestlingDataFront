import React from "react";
import nationality from "../assets/nationality.svg";

export default function Wrestler({
  id,
  activeWrestler,
  handleWrestler,
  wrestlerImg,
}) {
  return (
    <div
      id={id}
      className={`wrestler flex flex-col  items-center justify-center`}
      onClick={(e) => handleWrestler(e.currentTarget.id)}
    >
      <div
        className={`wrestler-img w-fit border-[2px] rounded-md ${
          activeWrestler[id]
            ? " border-wGreen"
            : "border-[#000] border-opacity-[60%] opacity-[50%]"
        }`}
      >
        <img src={wrestlerImg} alt="wrestler" />
      </div>
      <div className="wrestler-name-nationality flex gap-2 ">
        <p className="name text-wGreen">{id}</p>
        <img src={nationality} alt="nationality" className="" />
      </div>
    </div>
  );
}
