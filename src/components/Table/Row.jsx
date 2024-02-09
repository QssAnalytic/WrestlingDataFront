import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { FaFlag } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import useSWRMutation from "swr/mutation";

export default function Row(props) {
  const { editAction, deleteAction } = useContext(FormContext);

  const handleActionEdit = (target) => {
    editAction(target.id);
    console.log("action name", props.action);
  };

  const handleDeleteAction = (target) => {
    deleteAction(target.id);
  };

  const handleFlag = (id) => {};

  return (
    <tr className="text-center bg-[#121C34]  cursor-pointer transition-all duration-300 text-[#C7E0EE] hover:bg-[#1E264B] hover:text-[#fff]">
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
          className="w-[1.5rem] h-[1.5rem] rounded-3xl p-[5px] bg-[#2C354A]"
          onClick={(e) => handleActionEdit(e.currentTarget)}
        >
          <FiEdit2 />
        </button>
      </td>
      <td>
        <button
          id={props.id}
          onClick={(e) => handleDeleteAction(e.currentTarget)}
          className="w-[1.5rem] h-[1.5rem] rounded-3xl p-[5px] bg-[#2C354A]"
        >
          <RiDeleteBinLine />
        </button>
      </td>
      <td className="view rounded-tr-md rounded-br-md">
        <button
          id={props.id}
          className={`w-[1.5rem] h-[1.5rem] rounded-3xl p-[5px] bg-[#2C354A] ${
            props.flag ? "text-red-600" : "text-[#eaeaea]"
          } `}
          onClick={(e) => handleFlag(e.currentTarget)}
        >
          <FaFlag />
        </button>
      </td>
    </tr>
  );
}
