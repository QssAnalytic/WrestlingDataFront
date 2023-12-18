import React from "react";
import deleteIcon from '../assets/delete.svg';
import editIcon from '../assets/edit.svg'

export default function Row() {
  return (
    <>
      <tr className="text-center">
        <td>3</td>
        <td className="p-2">A. Abakarov</td>
        <td>Isa Demir</td>
        <td>5:42</td>
        <td>0</td>
        <td>Takedown</td>
        <td>No</td>
        <td>Single leg Takedown</td>
        <td>1</td>
        <td>E.Mammadov</td>
        <td>
          <button className="w-[1.5rem] h-[1.5rem] flex items-center rounded-3xl p-[5px] bg-[#2C354A]">
            <img src={editIcon} alt="edit" />
          </button>
        </td>
        <td>
          <button className="w-[1.5rem] h-[1.5rem] flex items-center rounded-3xl p-[5px] bg-[#2C354A]">
            <img src={deleteIcon} alt="delete" />
          </button>
        </td>
      </tr>
    </>
  );
}
