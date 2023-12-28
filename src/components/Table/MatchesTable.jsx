import React from "react";

export default function MatchesTable() {
  return (
    <>
      <div className="all-matches-table">
        <table className="text-[#C7E0EE] font-normal">
          <thead className="p-[10px] text-sm border border-[#fefefe] border-opacity-[31%] bg-[#090D29]">
            <tr>
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
          </thead>
          <tbody>
            <tr className="bg-[#2A2D50] cursor-pointer transition-all hover:bg-[#090D29] border border-[#269B85] border-opacity-[30%]">
              <td className="p-[0.5rem] text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                1
              </td>
              <td className="p-[0.5rem] text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                Freestyle
              </td>
              <td className="p-[0.5rem] text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                Seniors
              </td>
              <td className="p-[0.5rem] text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                Ivan Yarugin
              </td>
              <td className="p-[0.5rem] text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                Russia, Krasnoyarsk
              </td>
              <td className="p-[0.5rem] text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                57
              </td>
              <td className="p-[0.5rem] text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                28.01.18
              </td>
              <td className="p-[0.5rem] text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                Final
              </td>
              <td className="p-[0.5rem] text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                RUS
              </td>
              <td className="p-[0.5rem] text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                Zaur Ugayev
              </td>
              <td className="p-[0.5rem] text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                Zaur Ugayev
              </td>
              <td className="p-[0.5rem] text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                RUS
              </td>
              <td className="p-[0.5rem] text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                2:0
              </td>
              <td className="p-[0.5rem] text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                VPO1
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
