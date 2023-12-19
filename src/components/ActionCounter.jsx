import React from "react";
import { IoMdAdd } from "react-icons/io";

export default function ActionCounter() {
  return (
    <div className="action-counter">
      <p>Action No:</p>
      <div className="flex items-center gap-2">
        <div className="actions flex gap-[0.31rem]">
          <div className="action rounded flex justify-center items-center p-4 w-12 h-12 border border-wGreen">
            1
          </div>
        </div>
        <div className="add-action">
          <button className="rounded-[2rem] text-[20px] flex justify-center items-center bg-wSecMain p-2">
            <IoMdAdd className="text-wGreen" />
          </button>
        </div>
      </div>
    </div>
  );
}
