import React from "react";
import { IoCaretDownOutline } from "react-icons/io5";
import SelectList from "./SelectList";


export default function SelectBox({toggleSelect, openSelect, id, ok}) {
  return (
    <>
      <div className={`select-action flex items-center rounded w-[100%] gap-[1.78rem] ${ok ? 'w-[39%]' : 'w-[100%]'}`}>
        <label htmlFor="action">{id}: </label>
        <div
          className="select-box flex justify-between cursor-pointer w-[100%] bg-wMain px-5 py-4 relative"
          id={id}
          onClick={toggleSelect}
        >
          <p>Select {id}</p>
          <button className="down-select" id="action" onClick={toggleSelect}>
            <IoCaretDownOutline />
          </button>
          <SelectList openSelect={openSelect} id={id}/>
        </div>
      </div>
    </>
  );
}
