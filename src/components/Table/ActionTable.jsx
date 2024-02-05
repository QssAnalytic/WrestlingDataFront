import React, { useEffect } from "react";
import Row from "./Row";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { useParams } from "react-router-dom";

export default function ActionTable() {
  const { actionsBase, loadData, deletedId } = useContext(FormContext);

  const { fightId } = useParams();

  useEffect(() => {
    loadData(fightId);
  }, [fightId, deletedId]);

  return (
    <>
      <div className="match-info">
        <h4 className="text-wOrange text-center">Preview match info</h4>
        <div className="match-table w-full bg-wMain p-5">
          <table
            className="w-full border-spacing-y-2 border-separate"
          >
            <thead className="rounded-lg bg-wSecMain text-wText font-[400] ">
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
                <th colSpan="2"></th>
              </tr>
            </thead>
            <tbody className="rounded-sm text-wText font-[400]">
              {actionsBase?.map((action, index) => {
                return (
                  <Row
                    index={index + 1}
                    id={action.id}
                    fighter={action.fighter?.name}
                    opponent={action.opponent?.name}
                    time={action.action_time_second}
                    action={action.action_name?.name}
                    technique={action.technique?.name}
                    score={action.score}
                    succesful={action.successful}
                    defenseReason={action.defense_reason}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
