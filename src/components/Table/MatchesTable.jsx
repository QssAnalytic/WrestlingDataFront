import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormContext } from "../../context/FormContext";
import Checked from "../../assets/checked.svg";
import Unchecked from "../../assets/Unchecked.svg";
import { BiEdit } from "react-icons/bi";
import EditMatch from "../EditMatch";
import useSWR, { mutate } from "swr";
import { fightInfosEndpoints } from "../../services/api/endponits";
import { getData } from "../../services/api/requests";
import { FightContext } from "../../context/FightContext";

export default function MatchesTable({
  fightInfos,
  openEditMatch,
  setOpenEditMatch,
  editMutate
}) {
  const { loadData, actionsBase } = useContext(FormContext);
  const { setFightInfo } = useContext(FightContext);
  const [editId, setEditId] = useState(0);

  const navigate = useNavigate();

  const handleFight = (target) => {
    loadData(target.id);
    console.log("matches table", actionsBase);
  };

  const { data: editableMatch, mutate } = useSWR(
    editId ? fightInfosEndpoints.byId(editId) : null,
    getData
  );

  const handleMatchEdit = (e, id) => {
    e.stopPropagation();
    mutate();
    setEditId(id);
    setOpenEditMatch(true);
  };

  useEffect(()=>{
    setFightInfo(editableMatch);
  },[editableMatch,openEditMatch])

  return (
    <>
      <EditMatch
        openEditMatch={openEditMatch}
        setOpenEditMatch={setOpenEditMatch}
        editableMatch={editableMatch}
        mutate={editMutate}
      />
      <div className="all-matches-table mb-5 text-xs">
        <table className="text-[#C7E0EE] font-normal w-full text-xs">
          <thead className="p-[10px] text-sm border border-[#fefefe] border-opacity-[31%] bg-[#090D29]">
            <tr className="">
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Match ID:
              </th>
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Wrestling type:
              </th>
              {/* <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Level:
              </th> */}
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Tournament:
              </th>
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Palace:
              </th>
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Weight:
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
              <th className="p-3 tracking-wide truncate font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Status
              </th>
              <th className="p-3 tracking-wide truncate font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Check
              </th>
              <th className="p-3 tracking-wide truncate font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Submited / Checked Date
              </th>
              <th className="p-3 tracking-wide truncate font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Created Date
              </th>
              <th className="p-3 tracking-wide truncate font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Author
              </th>
              <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]"></th>
              {/* <th className="p-3 tracking-wide font-semibold text-center text-sm border border-[#fefefe] border-opacity-[31%]">
                Enter Match
              </th> */}
            </tr>
          </thead>
          <tbody>
            {fightInfos?.map((fight, index) => {
              return (
                <tr
                  id={fight.id}
                  key={index}
                  className="bg-[#2A2D50] bg-opacity-30 text-xs cursor-pointer transition-all hover:bg-[#090D29] border border-[#269B85] border-opacity-[30%]"
                  onClick={(e) => {
                    handleFight(e.currentTarget);
                    navigate(`/${fight.id}`);
                  }}
                >
                  <td className="p-1  text-xs text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.id}
                  </td>
                  <td className="p-1  text-xs text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.wrestling_type}
                  </td>
                  {/* <td className="p-3 text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.fighter?.level}
                  </td> */}
                  <td className="p-1  truncate text-xs text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.tournament?.name}
                  </td>
                  <td className="p-1 text-xs text-center truncate border border-[#fefefe] border-opacity-[31%]">
                    {fight.location}
                  </td>
                  <td className="p-1   text-xs text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.weight_category}
                  </td>
                  <td className="p-1 text-[12px] truncate text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.fight_date}
                  </td>
                  <td className="p-1 text-xs text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.stage}
                  </td>
                  {/* <td className="p-3 text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.fighter.natinality_name}
                  </td> */}
                  <td className="p-1 text-xs text-center border border-[#fefefe] border-opacity-[31%] text-green-400">
                    {fight.fighter?.name}
                  </td>
                  <td className="p-1 text-xs text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.oponent?.name}
                  </td>
                  {/* <td className="p-3 text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.oponent.natinality_name}
                  </td> */}
                  <td className="p-1  text-xs text-center border border-[#fefefe] border-opacity-[31%]">
                    <span className="text-green-400">
                      {fight.oponent1_point}
                    </span>
                    :<span>{fight.oponent2_point}</span>
                  </td>
                  <td className="p-1  text-xs text-center border border-[#fefefe] border-opacity-[31%]">
                    {fight.status}
                  </td>
                  <td className="p-1 text-xs text-center   border border-[#fefefe] border-opacity-[31%]">
                    {fight.is_submitted ? (
                      <img src={Checked} className="pl-[21px]" />
                    ) : (
                      <img src={Unchecked} className="pl-[21px]" />
                    )}
                  </td>
                  <td className="p-3 text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                    {!fight.submited_date ? "---" : fight?.submited_date} /{" "}
                    {!fight.checked_date ? "---" : fight?.checked_date}
                  </td>
                  <td className="p-3 text-sm text-center border border-[#fefefe] border-opacity-[31%]">
                    {!fight.created_date ? "---" : fight?.created_date}
                  </td>
                  <td className="p-3 text-sm text-center border border-[#fefefe] border-opacity-[31%] truncate">
                    {!fight?.author ? "---" : fight?.author}
                  </td>
                  <td
                    className="p-3 text-sm text-center border border-[#fefefe] border-opacity-[31%] truncate"
                    onClick={(e) => handleMatchEdit(e, fight?.id)}
                  >
                    <BiEdit />
                  </td>
                  {/* <td className="p-1 text-xs  text-center border cursor-pointer border-[#fefefe] border-opacity-[31%]">
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
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
