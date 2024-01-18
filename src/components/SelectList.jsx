import React from "react";
import { useParams } from "react-router-dom";

export default function SelectList({
  openSelect,
  id,
  setActiveAction,
  setValue,
  clearErrors,
  data,
}) {

  const {fightId} = useParams();

  const handleOption = (value) => {
    console.log('salam',id, value)
    
    setActiveAction((currAction) => ({
      ...currAction,
      [`${id}_id`]: value,
      video_link: "https://example.com/",
      action_time: "string2",
      fight_id : Number(fightId),
    }));


    setValue(id, value);
    clearErrors(id);
  };

  return (
    <>
      <div
        className={`drop-select-box absolute top-14 w-full z-40 font-light left-0 ${
          !openSelect[id] ? "hidden" : "block"
        }`}
      >
        <ul>
          {data?.map((item, index) => {
            return (
              <li
                className="select-item bg-[#2E4E8F] py-4 px-5"
                id={item?.id}
                onClick={(e) => handleOption(Number(e.currentTarget.id))}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
