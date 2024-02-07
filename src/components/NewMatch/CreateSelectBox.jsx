import React, { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";

export default function CreateSelectBox({
  id,
  name,
  datas,
  value,
  setValue,
  fightInfo,
  mutate,
  isLoading,
}) {
  const iconStyle = {
    color: "black",
    fontSize: "10px",
  };
  const [open, setOpen] = useState(false);

  const triggerSelect = (id) => {
    console.log("id", id);
    setOpen((prev) => !prev);
  };
 

  return (
    <div className="flex flex-col gap-2 w-[200px]">
      <div className="select-label text-[#eaeaea]">
        <p>{name}</p>
      </div>
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
            {value?.[id] === "in progress" ? (
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            ) : null}
            {value?.[id] === "completed" ? (
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
                {value?.[id] === item.data ? (
                  <FaCircle style={iconStyle} />
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
