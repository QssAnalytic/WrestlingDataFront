import React from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";

export default function CreateSelectBox({
  id,
  datas,
  selectOpen,
  setSelectOpen,
  value,
  setValue,
  response,
  fightInfo
}) {

    const iconStyle = {
        color : 'green',
        fontSize : '10px',
    }

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

  return (
    <>
      <div
        id={id}
        className={`bg-[#575968] flex relative cursor-pointer text-[#eaeaea] gap-[0.62rem] rounded`}
        onClick={(e) => triggerSelect(e.currentTarget.id)}
      >
        <div className="selectbox w-full flex justify-between">
          <p className="px-2 py-3 capitalize">{value?.[id] ? value?.[id] : (fightInfo?.[id] || id) }</p>
          <button
            className="open-select px-2 py-3 bg-[#6A6B79] rounded-r"
            type="button"
          >
            <BiSolidDownArrow />
          </button>
        </div>
        <div
          className={`${
            selectOpen[id] ? "block" : "hidden"
          } w-full rounded absolute top-14 bg-[#6A6B79] left-0 z-20`}
        >
          <ul>
            {datas?.map((data) => (
              <li className="hover:bg-slate-200 hover:text-black py-3 px-3 flex justify-between items-center" onClick={()=> setValue((prev)=>({...prev, [id] : (value?.[id] === data ? '' : data)}))}>
                {data}
                {value?.[id] === data || fightInfo?.[id] === data ? <FaCircle style={iconStyle} /> : null}
                
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
