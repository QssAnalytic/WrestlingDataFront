import React from "react";

export default function SelectList({
  openSelect,
  id,
  actionData,
  setActionDatas,
}) {
  const handleOption = (value) => {
    setActionDatas((prev)=>({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <>
      <div
        className={`drop-select-box absolute top-14 w-full z-40 font-light left-0 ${
          !openSelect[id] ? "hidden" : "block"
        }`}
      >
        <ul>
          <li
            className="select-item bg-[#2E4E8F] py-4 px-5"
            onClick={(e) => handleOption(e.currentTarget.innerHTML)}
          >
            Takedown
          </li>
          <li
            className="select-item bg-[#2E4E8F] py-4 px-5"
            onClick={(e) => handleOption(e.currentTarget.innerHTML)}
          >
            Takedown
          </li>
          <li
            className="select-item bg-[#2E4E8F] py-4 px-5"
            onClick={(e) => handleOption(e.currentTarget.innerHTML)}
          >
            Takedown
          </li>
        </ul>
      </div>
    </>
  );
}
