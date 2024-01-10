import React from "react";
import { Link } from "react-router-dom";

export default function MatchesTable({ fightInfos }) {
  const handleFight = (target) => {
    console.log(target.id);
  };

  return (
    <>
      <div className="all-matches-table">
        <table className="text-[#C7E0EE] font-normal">
          <thead className="p-[10px] text-sm border border-[#fefefe] border-opacity-[31%] bg-[#090D29]">
            {/* <div > */}
            <tr className="flex">
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Match ID:
              </th>
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Wrestling type:
              </th>
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
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Nation (Op.1):
              </th>
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Opponent 1:
              </th>
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Opponent 2:
              </th>
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Nation (Op.2):
              </th>
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Points:
              </th>
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Win by
              </th>
            </tr>
            {/* </div> */}
          </thead>
          <tbody>
            {fightInfos?.map((fight, index) => {
              return (
                <Link to={`/${fight.id}`}>
                  <tr
                    id={fight.id}
                    key={index}
                    className="bg-[#2A2D50] text-xs flex w-full cursor-pointer transition-all hover:bg-[#090D29] border border-[#269B85] border-opacity-[30%]"
                    onClick={(e) => handleFight(e.currentTarget)}
                  >
                    <td className="p-3 w-full text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                      {fight.id}
                    </td>

                    <td className="p-2  w-full text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                      {fight.wrestling_type}
                    </td>
                    <td className="p-2 w-full text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                      {fight.fighter.level}
                    </td>
                    <td className="p-2  w-full text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                      Ivan Yarugin
                    </td>
                    <td className="p-2  w-full text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                      {fight.location}
                    </td>
                    <td className="p-2  w-full text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                      {fight.weight_category}
                    </td>
                    <td className="p-2 w-full text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                      {fight.fight_date}
                    </td>
                    <td className="p-2 w-ful  text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                      {fight.stage}
                    </td>
                    <td className="p-2  w-full text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                      {fight.fighter.natinality_name}
                    </td>
                    <td className="p-2  w-full text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                      {fight.fighter.name}
                    </td>
                    <td className="p-2  w-full text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                      {fight.oponent.name}
                    </td>
                    <td className="p-2 w-full  text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                      {fight.oponent.natinality_name}
                    </td>
                    <td className="p-2 w-full text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                      {fight.oponent1_point}:{fight.oponent2_point}
                    </td>
                    <td className="p-2 w-full text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                      {fight.decision}
                    </td>
                  </tr>
                </Link>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
