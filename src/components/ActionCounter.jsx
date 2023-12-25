import React, { useContext } from "react";
import { IoMdAdd } from "react-icons/io";
import { v4 as aId } from "uuid";
import { useState } from "react";
import { FormContext } from "../context/FormContext";

export default function ActionCounter({
  actionsBase,
  setActiveAction,
  activeAction,
  setActiveId,
  activeId
}) {

  const {createNewAction} = useContext(FormContext);
  // const [actionNumber, setActionNumber] = useState(0);
  // const actionDummies = Array.from(
  //   { length: actionNumber },
  //   (_, index) => index
  // );

  const handleActiveAction = (e) => {
    console.log("action id selected", e.currentTarget.id);
    setActiveId(e.currentTarget.id);
    setActiveAction(...actionsBase.filter((action)=> action.actionId === e.currentTarget.id))
  };

  const handleNewAction = () => {
    createNewAction();
    // setActionNumber((actionNum) => actionNum + 1);
  };


  return (
    <div className="action-counter">
      <p>Action No:</p>
      <div className="flex items-center gap-2">
        {actionsBase?.map((action, index) => {
          return (
            <div
              className="actions flex gap-[0.31rem] cursor-pointer"
              id={action?.actionId}
              onClick={handleActiveAction}
            >
              <div
                className={`action rounded flex justify-center items-center p-4 w-12 h-12 border border-[#474A5B] ${
                  action?.actionId === activeAction?.actionId
                    ? "border-wGreen"
                    : ""
                } `}
              >
                {index + 1}
              </div>
            </div>
          );
        })}
        <div className="add-action">
          <button
            className="rounded-[2rem] text-[20px] flex justify-center items-center bg-wSecMain p-2"
            onClick={handleNewAction}
            type="button"
          >
            <IoMdAdd className="text-wGreen" />
          </button>
        </div>
      </div>
    </div>
  );
}
