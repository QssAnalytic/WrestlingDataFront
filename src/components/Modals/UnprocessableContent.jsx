import React from "react";
import { IoMdClose } from "react-icons/io";

export default function UnprocessableContent({setOpenModal}) {
  return (
    <>
      <div className="error-modal absolute top-[50%] left-[50%] bg-wSecMain w-28 h-14 rounded-lg">
        <div className="modal-header">
          <button className="close" type="button" onClick={setOpenModal((prevModal)=>false)}>
            <IoMdClose />
          </button>
        </div>
        <div className="modal-body">
            <div className="message">Unprocessable Content !</div>
        </div>
      </div>
    </>
  );
}
