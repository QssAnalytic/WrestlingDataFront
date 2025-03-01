import React, { useContext } from "react";
import { IoMdAdd } from "react-icons/io";
import { FormContext } from "../../context/FormContext";

export default function ActionCounter({
  actionsBase,
  activeAction,
  fightInfo,
}) {
  const { createNewAction } = useContext(FormContext);

  const handleNewAction = () => {
    console.log("active action in counter", activeAction);
    console.log("added");
    createNewAction();
  };

  console.log("counterdaki", fightInfo);

  return (
    <div className="action-counter">
      <p>Action No:</p>
      <div className="flex items-center gap-2">
        {actionsBase?.map((action, index) => {
          return (
            <div
              className="actions flex relative gap-[0.31rem] cursor-pointer"
              id={action?.id}
            >
              <div
                className={`action rounded flex justify-center items-center p-4 w-12 h-12 border border-[#474A5B] ${
                  action?.id === activeAction?.id ? "border-wGreen" : ""
                } `}
              >
                {index + 1}
              </div>

              {/* <div className="close absolute top-[-10px] right-0">x</div> */}
            </div>
          );
        })}
        <div
          className={`${
            fightInfo?.status === "completed" || fightInfo?.status === "checked"
              ? "hidden"
              : "block"
          } add-action`}
        >
          <button
            className={`rounded-[2rem] text-[20px] flex justify-center items-center bg-wSecMain p-2 ${activeAction?.current ? 'pointer-events-none' : 'pointer-events-auto'}`}
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
