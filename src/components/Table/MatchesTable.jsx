import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FormContext } from "../../context/FormContext";
import Checked from "../../assets/checked.svg";
import Unchecked from "../../assets/Unchecked.svg";

export default function MatchesTable({ fightInfos }) {
  const { loadData, actionsBase } = useContext(FormContext);

  const handleFight = (target) => {
    loadData(target.id);
    console.log("matches table", actionsBase);
  };

  return (
    <>
      <div className="all-matches-table mb-5">
        <table className="text-[#C7E0EE] font-normal w-full">
          <thead className="p-[10px] text-sm border border-[#fefefe] border-opacity-[31%] bg-[#090D29]">
            <tr className="">
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Match ID:
              </th>
              {/* <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Wrestling type:
              </th> */}
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Level:
              </th>
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Tournament:
              </th>
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Palace:
              </th>
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Weight (kg):
              </th>
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Date:
              </th>
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Stage:
              </th>
              {/* <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Nation (Op.1):
              </th> */}
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Opponent 1:
              </th>
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Opponent 2:
              </th>
              {/* <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Nation (Op.2):
              </th> */}
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Points:
              </th>
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Status
              </th>
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Check
              </th>
              {/* <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Win by
              </th> */}
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Enter Match
              </th>
            </tr>
          </thead>
          <tbody>
            {fightInfos?.map((fight, index) => {
              return (
                <tr
                  id={fight.id}
                  key={index}
                  className="bg-[#2A2D50] text-xs cursor-pointer transition-all hover:bg-[#090D29] border border-[#269B85] border-opacity-[30%]"
                  onClick={(e) => handleFight(e.currentTarget)}
                >
                  <td className="p-3  text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.id}
                  </td>
                  {/* <td className="p-3  text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.wrestling_type}
                  </td> */}
                  <td className="p-3 text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.fighter?.level}
                  </td>
                  <td className="p-3   text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.tournament?.name}
                  </td>
                  <td className="p-3 text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.location}
                  </td>
                  <td className="p-3   text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.weight_category}
                  </td>
                  <td className="p-3 text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.fight_date}
                  </td>
                  <td className="p-3 text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.stage}
                  </td>
                  {/* <td className="p-3 text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.fighter.natinality_name}
                  </td> */}
                  <td className="p-3 text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.fighter?.name}
                  </td>
                  <td className="p-3 text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.oponent?.name}
                  </td>
                  {/* <td className="p-3 text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.oponent.natinality_name}
                  </td> */}
                  <td className="p-3  text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.oponent1_point}:{fight.oponent2_point}
                  </td>
                  <td className="p-3  text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.status}
                  </td>
                  <td className="p-3  text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.is_submitted ? (
                      <img src={Checked} />
                    ) : (
                      <img className="pl-[10px]" src={Unchecked} />
                    )}
                  </td>
                  {/* <td className="p-3 text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.decision}
                  </td> */}
                  <td className="p-3 text-sm w-full text-center border cursor-pointer border-[#fefefe] border-opacity-[31%]">
                    <Link to={`/${fight.id}`} className="border-none">
                      <button
                        className="enter border-none bg-none outline-none w-full"
                        id={fight.id}
                        type="button"
                        onClick={handleFight}
                      >
                        Enter
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
