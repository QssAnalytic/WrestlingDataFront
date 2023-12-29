import React from "react";
import { useState, useEffect, useRef } from "react";

export default function Chekbox({
  name,
  checkboxName,
  setActiveAction,
  activeAction,
  errors,
}) {
  const [translateEl, setTranslateEl] = useState("");
  const parentRef = useRef(null);

  useEffect(() => {
    setTranslateEl(`${parentRef.current?.clientWidth / 2}px`);
  }, [parentRef.current?.clientWidth]);

  console.log("active checkbox", activeAction["Succesful"]);

  const handleSuccess = () => {
    setActiveAction((activeAction) => ({
      ...activeAction,
      [checkboxName]: !activeAction?.[checkboxName],
    }));

    setTranslateEl(`${parentRef.current.clientWidth / 2 - 10}px`);
  };

  return (
    <>
      <div className="success-container cursor-pointer flex flex-col basis-[45%] gap-3">
        <p className="text-center">{name} : </p>
        <div
          className={`success rounded-[3.5rem] overflow-x-hidden py-[0.4rem] px-[0.6rem] bg-[#1E264B] ${
            errors?.errors[checkboxName]
              ? `border border-red-600 transition-all`
              : `border-wMain`
          }`}
          ref={parentRef}
          onClick={handleSuccess}
        >
          <div
            className={`transition-all yes-no px-[1.12rem] py-[0.6rem] w-[50%] rounded-[3.5rem]  
                          ${
                            activeAction?.[checkboxName] === undefined
                              ? "bg-[#7A817A] h-11"
                              : `${
                                  activeAction[checkboxName]
                                    ? "bg-wGreen"
                                    : "bg-[#D52B1E]"
                                }`
                          }
                           flex items-center justify-center`}
            style={
              activeAction?.[checkboxName] === undefined ||
              activeAction?.[checkboxName]
                ? { transform: "translateX(0)" }
                : { transform: `translateX(${translateEl})` }
            }
          >
            {activeAction?.[checkboxName] === undefined
              ? ""
              : `${!activeAction?.[checkboxName] ? "No" : "Yes"}`}
          </div>
        </div>
      </div>
    </>
  );
}
