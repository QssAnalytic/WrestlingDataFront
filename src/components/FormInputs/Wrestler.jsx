import React from "react";

export default function Wrestler({
  opponent,
  activeWrestler,
  handleWrestler,
  nationality,
  wrestlerColor
}) {
  return (
    <div
      id={opponent?.id}
      className={`wrestler flex flex-col  items-center justify-center`}
      onClick={(e) => handleWrestler(e.currentTarget.id)}
    >
      <div
        className={`wrestler-img w-fit border-[2px] rounded-md ${wrestlerColor} ${
          activeWrestler[opponent?.id]
            ? " border-wGreen"
            : "border-[#000] border-opacity-[60%] opacity-[50%]"
        }`}
      > 
        <p className="nationality-name text-white text-xl w-32 h-12 flex items-center justify-center">{nationality}</p>
      </div>
      <div className="wrestler-name-nationality flex gap-2 ">
        <p className="name text-wGreen text-xs">{opponent?.name}</p>
      </div>
    </div>
  );
}
