import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function SelectList({ openSelect, id, setActiveAction, setValue, clearErrors, data, ok }) {
  const { fightId } = useParams();
  const [searchInput, setSearchInput] = useState("");
  const [datas, setDatas] = useState(data);

  useEffect(() => {
    if (searchInput) {
      setDatas(datas.filter((item) => item.name.toLowerCase().includes(searchInput)));
    } else {
      setDatas(data);
    }
  }, [searchInput]);

  const handleOption = (value) => {
    console.log("salam", id, value);

    setActiveAction((currAction) => ({
      ...currAction,
      [`${id}_id`]: value,
      video_link: "https://example.com/",
      action_time: "string2",
      fight_id: Number(fightId),
    }));

    setValue(id, value);
    clearErrors(id);
  };

  return (
    <>
      <div
        className={`drop-select-box absolute top-14 w-full h-44 overflow-auto z-40 font-light left-0 ${
          !openSelect[id] ? "hidden" : "block"
        }`}>
        <ul>
          {id !== 'score' ? (
            <li className={`select-item bg-[#2E4E8F] hover:bg-wSecGreen`}>
              <input
                type="text"
                className={`outline-none border-none bg-wSecMain w-full py-2 px-3`}
                placeholder={`Search ${id}`}
                name={"find"}
                value={searchInput}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </li>
          ) : null}
          {datas?.map((item, index) => {
            return (
              <>
                <li
                  className="select-item bg-[#253F74] border-[#2E4E8F] rounded hover:bg-[#121C34] py-6 px-5"
                  id={item?.id}
                  onClick={(e) => handleOption(Number(e.currentTarget.id))}>
                  {item.name}
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
