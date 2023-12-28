import React, { useRef, useState } from "react";
import { IoCaretDownOutline } from "react-icons/io5";
import SelectList from "./SelectList";

export default function SelectBox({
  toggleSelect,
  openSelect,
  id,
  name,
  activeAction,
  setActiveAction,
  setValue,
  errors,
  clearErrors,
  ok,
}) {
  return (
    <>
      <div
        className={`select-action flex items-center rounded w-[100%] gap-[1.78rem] ${
          ok ? "w-[39%]" : "w-[100%]"
        }`}
      >
        <label htmlFor={id}>{id.charAt(0).toUpperCase() + id.slice(1)}: </label>
        <div
          className={`select-box flex justify-between cursor-pointer border transition-all ${
          errors?.errors[id] 
              ? "border border-red-600 transition-all "
              : "border-wMain"
          } w-[100%] bg-wMain px-5 py-4 relative`}
          id={id}
          onClick={toggleSelect}
        >
          <p>{activeAction?.[name]}</p>
          <button
            type="button"
            className="down-select"
            id="action"
            onClick={toggleSelect}
          >
            <IoCaretDownOutline />
          </button>
          <SelectList
            openSelect={openSelect}
            id={id}
            setActiveAction={setActiveAction}
            setValue={setValue}
            clearErrors={clearErrors}
            data={
              ok
                ? [0, 1, 2, 4]
                : [
                    "Takedown",
                    "Waist Roll",
                    "Reverse Headlock",
                    "Switch",
                    "Freestyle",
                  ]
            }
          />
        </div>
      </div>
    </>
  );
}
