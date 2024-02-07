import React from "react";

export default function FlagInput({ id, name, activeAction, setActiveAction }) {
  const handleFlag = (value) => {
    setActiveAction((prev) => ({
      ...prev,
      [id]: value === "yes" ? true : false,
    }));
  };

  return (
    <>
      <div id={id} className="flag flex items-center gap-4">
        <p className="flag-label">{name} :</p>
        <div className="flag-options p-2 bg-[#1B1E3B] gap-3 w-28 rounded-md flex justify-between">
          <button
            type="button"
            className={`rounded p-2 transition-all duration-300 hover:bg-[#2B416D] ${
              activeAction?.flag
                ? "bg-red-500"
                : "bg-[#1B1E3B]"
            }`}
            onClick={() => handleFlag("yes")}
          >
            Yes
          </button>
          <button
            type="button"
            className={`p-2 rounded transition-all duration-300 hover:bg-[#2B416D] ${
              !activeAction?.flag ? "bg-[#FEFFFE] bg-opacity-[48%]" : "bg-[#1B1E3B]"
            }`}
            onClick={() => handleFlag("no")}
          >
            No
          </button>
        </div>
      </div>
    </>
  );
}
