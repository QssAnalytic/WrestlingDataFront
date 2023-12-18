import React from "react";
import { IoCaretDownOutline } from "react-icons/io5";


export default function SelectBox({toggleSelect, openSelect, id}) {
  return (
    <>
      <div className="select-action flex items-center rounded w-[40%] gap-[1.88rem]">
        <label htmlFor="action">{id} :</label>
        <div
          className="select-box flex justify-between cursor-pointer bg-wMain px-5 py-4 relative"
          id={id}
          onClick={toggleSelect}
        >
          <p>Select {id}</p>
          <button className="down-select" id="action" onClick={toggleSelect}>
            <IoCaretDownOutline />
          </button>
          <div
            className={`drop-select-box absolute top-14 w-full font-light left-0 ${
              !openSelect[id] ? "hidden" : "block"
            }`}
          >
            <ul>
              <li className="select-item bg-[#2E4E8F] py-4 px-5">Takedown</li>
              <li className="select-item bg-[#2E4E8F] py-4 px-5">Takedown</li>
              <li className="select-item bg-[#2E4E8F] py-4 px-5">Takedown</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
