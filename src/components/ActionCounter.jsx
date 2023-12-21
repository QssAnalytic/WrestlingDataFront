import React from "react";
import { IoMdAdd } from "react-icons/io";
import uniqid from "uniqid";

export default function ActionCounter({ setActionBase, actionsBase }) {
  const handleNewAction = () => {
    setActionBase((prevActions) => [
      ...prevActions,
      {
        actionId: uniqid(),
      },
    ]);
  };

  const handleActiveAction = (e)=>{
    console.log('active action id', e.currentTarget.id)
  }

  return (
    <div className="action-counter">
      <p>Action No:</p>
      <div className="flex items-center gap-2">
        {actionsBase.map((action, index) => {
          return (
            <div className="actions flex gap-[0.31rem] cursor-pointer" id={action.actionId} onClick={handleActiveAction}>
              <div className="action rounded flex justify-center items-center p-4 w-12 h-12 border border-wGreen">
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
