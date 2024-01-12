import React, { useContext } from "react";
import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";
import { FormContext } from "../../context/FormContext";

export default function Row(props) {
  const { editAction } = useContext(FormContext);

  const handleActionEdit = (target) => {
    editAction(target.id);
    // console.log('id', target.id)
    console.log('action name', props.action)
  };

  return (
    <tr className="text-center mb-8">
      <td>{props.index}</td>
      <td className="p-2">{props.fighter}</td>
      <td>{props.opponent}</td>
      <td>
        {Math.floor(props.time / 60)} : {props.time % 60}
      </td>
      <td>{props.score}</td>
      <td>{props.action}</td>
      <td>{props.succesful ? "Yes" : "No"}</td>
      <td>{props.techniques}</td>
      <td>{props.defenseReason ? "Yes" : "No"}</td>
      <td>E.Mammadov</td>
      <td>
        <button
          id={props.id}
          className="w-[1.5rem] h-[1.5rem] flex items-center rounded-3xl p-[5px] bg-[#2C354A]"
          onClick={(e)=>handleActionEdit(e.currentTarget)}
        >
          <img src={editIcon} alt="edit" />
        </button>
      </td>
      <td>
        <button className="w-[1.5rem] h-[1.5rem] flex items-center rounded-3xl p-[5px] bg-[#2C354A]">
          <img src={deleteIcon} alt="delete" />
        </button>
      </td>
    </tr>
  );
}
