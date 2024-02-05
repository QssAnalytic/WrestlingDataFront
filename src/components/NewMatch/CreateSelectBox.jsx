import React, { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import CreateInput from "./CreateInput";

export default function CreateSelectBox({
  id,
  name,
  datas,
  selectOpen,
  setSelectOpen,
  value,
  setValue,
  response,
  fightInfo,
  mutate,
  isLoading,
}) {
  const iconStyle = {
    color: "green",
    fontSize: "10px",
  };

  const [newInput, setNewInput] = useState(false);
  const [open, setOpen] = useState(false)

  const triggerSelect = (id) => {
    console.log("id", id);
    // setSelectOpen((prevSelects) => {
    //   const updatedSelects = {};
    //   Object.keys(prevSelects).forEach((key) => {
    //     return (updatedSelects[key] = key === id ? !prevSelects[id] : false);
    //   });
    //   return updatedSelects;
    // });
    setOpen((prev)=> !prev)
  };

  const handleAddNew = () => {
    setNewInput((prev) => !prev);
    // setOpen((prev)=> !prev)
  };

  return (
    <div className="flex flex-col gap-2  w-full">
      <div className="select-label text-[#eaeaea]">
        <p>{name}</p>
      </div>
      {!newInput ? (
        <div
          id={id}
          className={`bg-[#575968] flex relative cursor-pointer text-[#eaeaea] gap-[0.62rem] rounded w-full`}
          onClick={(e) => triggerSelect(e.currentTarget.id)}
        >
          {/* This section is used for showing selected items in main part of selectbox */}
          {/* And in there exist some animations for some statuses. That`s all */}
          <div className="selectbox w-full flex justify-between">
            <p className="px-2 py-3 capitalize truncate flex gap-4 items-center">
              {isLoading ? "Processing..." : null}
              {value?.[id] || value?.[id] === 0
                ? value?.[id]
                : fightInfo?.[id] || name}
              {value?.[id] === "in progress" ||
              fightInfo?.[id] === "in progress" ? (
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
              ) : null}
              {value?.[id] === "completed" ||
              fightInfo?.[id] === "completed" ? (
                <span class="relative flex h-3 w-3">
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-wGreen"></span>
                </span>
              ) : null}
            </p>
            <button
              className="open-select px-2 py-3 bg-[#6A6B79] rounded-r"
              type="button"
            >
              <BiSolidDownArrow />
            </button>
          </div>
          {/* Selectbox items have been rendered in there until CreateInput component. U will see */}
          <div
            className={`${
              open ? "block" : "hidden"
            } rounded absolute top-14 bg-[#6A6B79] h-[150px] left-0 z-20 w-full overflow-y-scroll`}
          >
            <ul className="">
              {datas?.map((item) => (
                <li
                  className="hover:bg-slate-200 hover:rounded hover:text-black py-2 px-3 flex justify-between items-center"
                  onClick={() => {
                    setValue((prev) => ({
                      ...prev,
                      [id]:
                        id === "opponent1" || id === "opponent2"
                          ? value?.[id] === item.id
                            ? ""
                            : item.id
                          : value?.[id] === item.data
                          ? ""
                          : item.data,
                    }));
                    setTimeout(() => {
                      mutate && mutate();
                    }, 1);
                  }}
                >
                  {item.data}
                  {value?.[id] === item.data ||
                  fightInfo?.[id] === item.data ? (
                    <FaCircle style={iconStyle} />
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        // This component is responsible for if the user want to add new fightter or anything, he/she can enter succesfully through the help of it
        <CreateInput
          id={id}
          name={id}
          value={value}
          setValue={setValue}
          type={"text"}
        />
      )}

      {id === "opponent1" || id === "opponent2" ? (
        <div className="add-new" onClick={handleAddNew}>
          <button
            className="flex text-[#eaeaea] items-center transition-all duration-200 hover:text-green-300"
            type="button"
          >
            <MdAdd />
            Add new one
          </button>
        </div>
      ) : null}
    </div>
  );
}
