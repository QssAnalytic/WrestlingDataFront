import React, { useContext } from "react";
import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";
import { FormContext } from "../../context/FormContext";

export default function Row(props) {
  const { editAction, deleteAction } = useContext(FormContext);

  const handleActionEdit = (target) => {
    editAction(target.id);
    console.log("action name", props.action);
  };

  const handleDeleteAction = (target) => {
    deleteAction(target.id);
  };

  return (
    <tr className="text-center bg-[#121C34]  cursor-pointer transition-all duration-300 hover:bg-slate-300 hover:text-red-500">
      <td className="rounded-tl-md rounded-bl-md">{props.index}</td>
      <td className="p-2 truncate">{props.fighter}</td>
      <td className="truncate">{props.opponent}</td>
      <td>
        {props.time
          ? `${Math.floor(props.time / 60)} : ${Math.floor(props.time % 60)}`
          : "00:00"}
      </td>
      <td>{props.score}</td>
      <td>{props.action}</td>
      <td>{props.succesful ? "Yes" : "No"}</td>
      <td>{props.technique}</td>
      <td>{props.defenseReason ? "Yes" : "No"}</td>
      <td>
        <button
          id={props.id}
          className="w-[1.5rem] h-[1.5rem] flex items-center rounded-3xl p-[5px] bg-[#2C354A]"
          onClick={(e) => handleActionEdit(e.currentTarget)}
        >
          <img src={editIcon} alt="edit" />
        </button>
      </td>
      <td className="rounded-tr-md rounded-br-md">
        <button
          id={props.id}
          onClick={(e) => handleDeleteAction(e.currentTarget)}
          className="w-[1.5rem] h-[1.5rem] flex items-center rounded-3xl p-[5px] bg-[#2C354A]"
        >
          <img src={deleteIcon} alt="delete" />
        </button>
      </td>
    </tr>
  );
}
