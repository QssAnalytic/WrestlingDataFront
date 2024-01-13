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
    setValue(id, value);
    clearErrors(id);
    setActiveAction((currAction) => ({
      ...currAction,
      [id]: value,
      video_second_begin: "2024-01-10T08:53:43.354000",
      video_second_end: "2024-01-10T08:53:43.354000",
      video_link: "https://example.com/",
      action_time: "string2",
      fight_id : Number(fightId),
    }));
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
