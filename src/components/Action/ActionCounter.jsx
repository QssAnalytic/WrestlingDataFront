import React, { useContext } from "react";
import { IoMdAdd } from "react-icons/io";
import { FormContext } from "../../context/FormContext";

export default function ActionCounter({
  actionsBase,
  setActiveAction,
  activeAction,
}) {
  const { createNewAction } = useContext(FormContext);

  const handleActiveAction = (target) => {
    console.log("action id selected", target.id);
    // setActiveAction(...actionsBase.filter((action)=> action.id === target.id))
    console.log("action counter id", activeAction);
  };

  const handleNewAction = () => {
    console.log('added')
    createNewAction();
  };

  return (
    <div className="action-counter">
      <p>Action No:</p>
      <div className="flex items-center gap-2">
        {actionsBase?.map((action, index) => {
          return (
            <div
              className="actions flex gap-[0.31rem] cursor-pointer"
              id={action?.id}
              // onClick={(e)=>handleActiveAction(e.currentTarget)}
            >
              <div
                className={`action rounded flex justify-center items-center p-4 w-12 h-12 border border-[#474A5B] ${
                  action?.id === activeAction?.id ? "border-wGreen" : ""
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
