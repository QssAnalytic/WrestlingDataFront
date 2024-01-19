import React from "react";
import { BiSolidDownArrow } from "react-icons/bi";

export default function FilterSelectBox({
  id,
  handleFilterSelects,
  filterSelects,
  value,
  setValue,
  datas,
  ok,
}) {
  const handleInput = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <div
        id={id}
        onClick={(e) => handleFilterSelects(e.currentTarget.id)}
        className="filter-select relative cursor-pointer bg-[#1B3458] text-[#DADADA] w-60 py-3 px-3 rounded flex items-center justify-between"
      >
        <p className="p-0">{`${id.charAt(0).toUpperCase() + id.slice(1)}`}</p>
        <button
          className="drop-select"
          onClick={(e) => handleFilterSelects(e.target.id)}
        >
          <BiSolidDownArrow />
        </button>

        <div
          className={`${
            filterSelects[id] ? "block" : "hidden"
          } filter-select-drop absolute overflow-auto h-30 bg-[#1B3458] w-full left-0 top-14 rounded-lg`}
        >
          <ul id="salam" className="select-item-container overflow-auto h-64">
            <li>
              <input
                type="text"
                name="search"
                id="search"
                className="p-2 outline-none bg-[#1B3458] text-xs"
                placeholder="Search Level..."
                onClick={handleInput}
              />
            </li>
            {datas?.map((item, index) => {
                {console.log('item', item[Object.keys(item)[0]])}
                {console.log(`${ok ? null : item.id}`)}
              return (
                <li
                  key={index}
                  className="item p-3 hover:bg-wShadow hover:text-[#000000] cursor-pointer"
                  onClick={() => setValue(ok ? item[Object.keys(item)[0]] : item.id)}
                >
                  {item[Object.keys(item)[0]]}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
