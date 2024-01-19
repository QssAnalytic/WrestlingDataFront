import React from "react";
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
  datas,
  ok,
}) {
  const scores = [
    {
      name: 0,
      id: 0,
    },
    {
      name: 1,
      id: 1,
    },
    {
      name: 2,
      id: 2,
    },
    {
      name: 4,
      id: 4,
    },
    {
      name: 5,
      id: 5,
    },
  ];
  console.log('active action in selctbox', activeAction)
  console.log('selectbox id', id)

  return (
    <>
      <div
        className={`select-action flex items-center rounded w-[100%] gap-[1.78rem] ${
          ok ? "w-[39%]" : "w-[100%]"
        }`}
      >
        <label htmlFor={id}>
          {name.charAt(0).toUpperCase() + name.slice(1)}:{" "}
        </label>
        <div
          className={`select-box flex justify-between cursor-pointer border transition-all ${
            errors ? "border border-red-600 transition-all " : "border-wMain"
          } w-[100%] bg-wMain px-5 py-4 relative`}
          id={id}
          onClick={toggleSelect}
        >
          <p>
            {console.log('edittt', activeAction[id])}
            {ok
              ? scores.map((item) =>
                  item.id === activeAction?.[`${id}_id`] ? item.name : null
                )
              : datas?.map((item) =>
                  item.id === activeAction?.[`${id}_id`] ? item.name : null
                )}
          </p>
          <button
            type="button"
            className="down-select"
            id={id}
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
            data={ok ? scores : datas}
          />
        </div>
      </div>
    </>
  );
}
