import React from "react";

export default function EditMatch({ openEditMatch, setOpenEditMatch, editableMatch }) {

    const handleCancelEdit = ()=>{
        setOpenEditMatch(false)
    }

  return (
    <>
      <div
        className={`edit-match  h-[100%] w-[100%] absolute top-0 left-0 rounded-lg transition-all duration-500  text-[#eaeaea] ${
          openEditMatch
            ? "opacity-[100%] pointer-events-auto backdrop-blur-md"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="edit-container h-full w-full relative">
          <div className="h-[500px] w-[600px] rounded-md bg-wSecMain sticky top-[10%] left-[30%] flex flex-col justify-between py-7 px-4">
            <div className="edit-header text-center">
                <h2 className="text-[20px]">Edit Match : {editableMatch?.id}</h2>
            </div>
            <div className="edit-form"></div>
            <div className="edit-btns flex gap-5 self-end">
              <button className="update w-28 px-6 py-2 bg-wGreen rounded">Update</button>
              <button className="cancel w-28 px-6 py-2 bg-wGray transition-all duration-200 rounded" type="button" onClick={handleCancelEdit}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
