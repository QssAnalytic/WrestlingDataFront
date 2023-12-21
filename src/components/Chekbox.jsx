import React from "react";
import { useState, useEffect, useRef } from "react";

export default function Chekbox({ checkboxName, setActionDatas, actionDatas }) {
  const [success, setSuccess] = useState(null);
  const [translateEl, setTranslateEl] = useState("");
  const parentRef = useRef(null);

  useEffect(() => {
    setTranslateEl(`${parentRef.current?.clientWidth / 2}px`);
  }, [parentRef.current?.clientWidth]);

  const handleSuccess = () => {
    // setSuccess((prev) => !prev);
    setActionDatas((prevDatas) => ({
      ...prevDatas,
      [checkboxName]: !actionDatas[checkboxName],
    }));
    setTranslateEl(`${parentRef.current.clientWidth / 2 - 10}px`);
  };

  return (
    <>
      <div className="success-container flex flex-col basis-[45%] gap-3">
        <p className="text-center">{checkboxName} : </p>
        <div
          className="success rounded-[3.5rem] overflow-x-hidden py-[0.4rem] px-[0.6rem] bg-[#1E264B]"
          ref={parentRef}
        >
          <div
            className={`transition-all yes-no px-[1.12rem] py-[0.6rem] w-[50%] rounded-[3.5rem]  
                          ${
                            actionDatas[checkboxName] === undefined
                              ? "bg-[#7A817A] h-11"
                              : `${
                                  actionDatas[checkboxName]
                                    ? "bg-wGreen"
                                    : "bg-[#D52B1E]"
                                }`
                          }
                           flex items-center justify-center`}
            onClick={handleSuccess}
            style={
             actionDatas[checkboxName] === undefined || actionDatas[checkboxName]
                ? { transform: "translateX(0)" }
                : { transform: `translateX(${translateEl})` }
            }
          >
            {actionDatas[checkboxName] === undefined
              ? ""
              : `${!actionDatas[checkboxName] ? "No" : "Yes"}`}
          </div>
        </div>
      </div>
    </>
  );
}
