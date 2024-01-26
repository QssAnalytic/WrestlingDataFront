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

  const triggerSelect = (id) => {
    console.log("id", id);
    setSelectOpen((prevSelects) => {
      const updatedSelects = {};
      Object.keys(prevSelects).forEach((key) => {
        return (updatedSelects[key] = key === id ? !prevSelects[id] : false);
      });
      return updatedSelects;
    });
  };

  const handleAddNew = () => {
    setNewInput((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="select-label text-[#eaeaea]">
        <p>{name}</p>
      </div>
      {!newInput ? (
        <div
          id={id}
          className={`bg-[#575968] flex relative cursor-pointer text-[#eaeaea] gap-[0.62rem] rounded w-52`}
          onClick={(e) => triggerSelect(e.currentTarget.id)}
        >
          <div className="selectbox w-full flex justify-between">
            <p className="px-2 py-3 capitalize truncate">
              {value?.[id] ? value?.[id] : fightInfo?.[id] || name}
            </p>
            <button
              className="open-select px-2 py-3 bg-[#6A6B79] rounded-r"
              type="button"
            >
              <BiSolidDownArrow />
            </button>
          </div>
          <div
            className={`${
              selectOpen?.[id] ? "block" : "hidden"
            } rounded absolute top-14 bg-[#6A6B79] h-[150px] left-0 z-20 overflow-y-scroll`}
          >
            <ul className="w-52">
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
