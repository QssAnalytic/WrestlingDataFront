import React from "react";
import Row from "./Row";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";

export default function Table() {
  const { actionsBase } = useContext(FormContext);

  return (
    <>
      <div className="match-info">
        <h4 className="text-wOrange text-center">Preview match info</h4>
        <div className="match-table w-full bg-wMain p-5">
          <table
            className="w-full"
            style={{
              border: "1px solid transparent",
              borderCollapse: "separate",
              borderSpacing: "8px",
            }}
          >
            <thead className="rounded-sm bg-wSecMain text-wText font-[400]">
              <tr>
                <th className="p-2">Action No:</th>
                <th>Fighter</th>
                <th>Opponent</th>
                <th>Second</th>
                <th>Score</th>
                <th>Action</th>
                <th>Successful</th>
                <th>Technique</th>
                <th>Defense Reason</th>
                <th>Autor</th>
                <th colSpan="2"></th>
              </tr>
            </thead>
            <tbody className="rounded-sm bg-[#121C34] text-wText font-[400]">
              {actionsBase.map((action, index) => {
                return (<Row 
                  index={index + 1}
                  time={action.time}
                  action={action.action}
                  techniques={action.techniques}
                  score={action.score}
                  succesful={action.Succesful}
                  defenseReason={action['defense_reason']}
                />);
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
