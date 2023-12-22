import React, { useRef, useState } from "react";
import { IoCaretDownOutline } from "react-icons/io5";
import SelectList from "./SelectList";

export default function SelectBox({
  toggleSelect,
  openSelect,
  id,
  name,
  actionData,
  setActionDatas,
  ok,
}) {

  console.log('action nmae', actionData?.[name])

  return (
    <>
      <div
        className={`select-action flex items-center rounded w-[100%] gap-[1.78rem] ${
          ok ? "w-[39%]" : "w-[100%]"
        }`}
      >
        <label htmlFor={id}>{id.charAt(0).toUpperCase() + id.slice(1)}: </label>
        <div
          className="select-box flex justify-between cursor-pointer w-[100%] bg-wMain px-5 py-4 relative"
          id={id}
          onClick={toggleSelect}
        >
          <p>{actionData?.[name]}</p>

          <button
            type="button"
            className="down-select"
            id="action"
            onClick={toggleSelect}
          >
            <IoCaretDownOutline />
          </button>
          <SelectList openSelect={openSelect} id={id} actionData={actionData} setActionDatas={setActionDatas}/>
        </div>
      </div>
    </>
  );
}
