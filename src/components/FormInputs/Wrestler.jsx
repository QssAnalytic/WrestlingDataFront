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
      className={`wrestler flex flex-col  items-center justify-center cursor-pointer`}
      onClick={(e) => handleWrestler(e.currentTarget.id)}
    >
      <div
        className={`wrestler-img w-fit border-[2px] transition-all duration-300 rounded-md hover:opacity-[100%] bg-[#243562] ${
          activeWrestler[opponent?.id]
            ? "border-wGreen bg-[#08276C]"
            : "border-[#BBBBBD] opacity-[50%]"
        }`}
      > 
        <p className="nationality-name text-white text-xl p-5 flex items-center justify-center">{nationality}</p>
      </div>
      <div className="wrestler-name-nationality flex gap-2 ">
        <p className="name text-wGreen text-base">{opponent?.name}</p>
      </div>
    </div>
  );
}
