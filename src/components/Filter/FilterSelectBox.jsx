import React, { useEffect, useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";

export default function FilterSelectBox({
  id,
  ref,
  name,
  handleFilterSelects,
  filterSelects,
  value,
  setValue,
  datas = [],
  valueKey,
  filterKey,
}) {
  const [selectedValue, setSelectedValue] = useState();
  const [filterSearchValue, setFilterSearchValue] = useState(null);
  const [datass, setDatass] = useState([...datas]);

  const handleInput = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const val = datas?.find((item) => item?.[filterKey || id] === value?.[id])?.[valueKey || id];
    setSelectedValue(val);
  }, [value[valueKey || id]]);

  // Filter search system
  useEffect(() => {
    if (filterSearchValue) {
      const filteredData = datas?.filter((item) =>
        String(item?.[valueKey || id])
          ?.toLowerCase()
          .includes(filterSearchValue.toLowerCase()),
      );
      setDatass(filteredData);
    } else {
      setDatass(datas);
    }
  }, [filterSearchValue]);

  const setFilterParams = (value) => {
    setValue((prevParams) => ({
      ...prevParams,
      [id]: value,
    }));
  };

  return (
    <>
      <div
        ref={ref}
        id={id}
        onClick={(e) => handleFilterSelects(e.currentTarget.id)}
        className={`${
          !datas?.length > 0 ? "pointer-events-none bg-[#1B3458]/40 text-[#DADADA]/40" : null
        } filter-select relative cursor-pointer bg-[#1B3458] text-[#DADADA] w-60 py-3 px-3 rounded flex items-center justify-between`}>
        <p className="p-0 capitalize truncate">{selectedValue || name}</p>
        <button className="drop-select" onClick={(e) => handleFilterSelects(e.target.id)}>
          <BiSolidDownArrow />
        </button>

        <div
          className={`transition-all duration-300 ${
            filterSelects[id] ? "opacity-[100%] pointer-events-auto" : "opacity-0 pointer-events-none"
          } filter-select-drop absolute overflow-auto h-30 bg-[#1B3458] w-full left-0 top-14 rounded-lg`}>
          <ul id="salam" className="select-item-container overflow-auto h-64">
            <li>
              <input
                type="text"
                name="search"
                id="search"
                value={filterSearchValue}
                className="p-2 outline-none bg-[#1B3458] text-xs"
                placeholder="Search Level..."
                onClick={handleInput}
                onChange={(e) => {
                  setFilterSearchValue(e.target.value);
                }}
              />
            </li>
            {console.log("datss", datass)}
            {datass.length > 0
              ? datass?.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="item p-2 text-xs hover:bg-wShadow hover:text-[#000000] cursor-pointer"
                      onClick={() => {
                        setFilterParams(item[filterKey || id]);
                        setSelectedValue(item[valueKey || id]);
                      }}>
                      {id === "tournament_id"
                        ? `${item[Object.keys(item)[0]]} - ${item[Object.keys(item)[2]]}`
                        : item[Object.keys(item)[0]]}
                    </li>
                  );
                })
              : datas?.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="item p-2 text-xs hover:bg-wShadow hover:text-[#000000] cursor-pointer"
                      onClick={() => {
                        setFilterParams(item[filterKey || id]);
                        setSelectedValue(item[valueKey || id]);
                      }}>
                      {id === "tournament_id"
                        ? `${item[Object.keys(item)[0]]} - ${item[Object.keys(item)[2]].slice(0, 4)}`
                        : item[Object.keys(item)[0]]}
                    </li>
                  );
                })}
          </ul>
        </div>
      </div>
    </>
  );
}
