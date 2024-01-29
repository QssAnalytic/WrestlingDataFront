import React, { useContext, useEffect, useState } from "react";
import { FightContext } from "../context/FightContext";
import CreateSelectBox from "./CreateSelectBox";
import {
  WrestlingTypes,
  desicions,
  level,
  scores,
  sources,
  stage,
  status,
} from "../static/data";
import CreateInput from "./CreateInput";
import useSWR from "swr";
import { fightInfosEndpoints } from "../services/api/endponits";
import { updateData } from "../services/api/requests";
import toast, { ToastBar, Toaster } from "react-hot-toast";

export default function EditMatch({
  openEditMatch,
  setOpenEditMatch,
  editableMatch,
  mutate,
}) {
  const { fightInfo, setFightInfo } = useContext(FightContext);
  const [selectOpen, setSelectOpen] = useState({
    level: false,
    stage: false,
    decision: false,
    status: false,
    wrestling_type: false,
    source_type: false,
    oponent1_point: false,
    oponent2_point: false,
  });

  const handleCancelEdit = () => {
    setOpenEditMatch(false);
    // setFightInfo({})
  };

  const handleMatchUpdate = async () => {
    console.log("before match update", fightInfo);
    setTimeout(() => {
      mutate();
    }, 10);
    setOpenEditMatch(false);
    try {
      const response = await updateData(
        fightInfosEndpoints.updateFight(editableMatch?.id),
        fightInfo
      );
      toast("Fight succesfully updated", {
        style: { background: "green", color: "#eaeaea" },
      });
      setFightInfo({});
      console.log("updated match", response);
    } catch (err) {
      toast("Please fill correctly", {
        style: { background: "red", color: "#eaeaea" },
      });
      setOpenEditMatch(true);
      console.log("err update fight", err);
    }
  };

  return (
    <>
      <div
        className={`edit-match  h-[100%] w-[100%] absolute top-0 left-0 rounded-lg transition-all duration-500  text-[#eaeaea] ${
          openEditMatch
            ? "opacity-[100%] pointer-events-auto backdrop-blur-md"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="edit-container h-full w-full relative">
          <div className="h-[910px] w-[900px] rounded-md bg-wSecMain sticky top-0 left-[27%] flex flex-col justify-between py-10 px-10">
            <div className="edit-header text-center">
              <h2 className="text-[20px]">Edit Match : {editableMatch?.id}</h2>
            </div>
            <div className="edit-form flex flex-col gap-3">
              <div className="flex gap-3">
                <CreateSelectBox
                  datas={level}
                  id={"level"}
                  name={"Level"}
                  selectOpen={selectOpen}
                  setSelectOpen={setSelectOpen}
                  value={fightInfo}
                  setValue={setFightInfo}
                />
                <CreateSelectBox
                  datas={stage}
                  id={"stage"}
                  name={"Stage"}
                  selectOpen={selectOpen}
                  setSelectOpen={setSelectOpen}
                  value={fightInfo}
                  setValue={setFightInfo}
                />
              </div>
              <div className="flex gap-4">
                <CreateSelectBox
                  datas={WrestlingTypes}
                  id={"wrestling_type"}
                  name={"Wrestling Type"}
                  selectOpen={selectOpen}
                  setSelectOpen={setSelectOpen}
                  value={fightInfo}
                  setValue={setFightInfo}
                />
                <CreateSelectBox
                  datas={desicions}
                  id={"decision"}
                  name={"Decision"}
                  selectOpen={selectOpen}
                  setSelectOpen={setSelectOpen}
                  value={fightInfo}
                  setValue={setFightInfo}
                />
              </div>
              <div className="flex gap-4">
                <CreateSelectBox
                  datas={status}
                  id={"status"}
                  name={"Status"}
                  selectOpen={selectOpen}
                  setSelectOpen={setSelectOpen}
                  value={fightInfo}
                  setValue={setFightInfo}
                />
                <CreateSelectBox
                  datas={sources}
                  id={"source_type"}
                  name={"Source Type"}
                  selectOpen={selectOpen}
                  setSelectOpen={setSelectOpen}
                  value={fightInfo}
                  setValue={setFightInfo}
                />
              </div>
              <div className="edit-inputs flex flex-col gap-5">
                <div className="inputs-first-container flex gap-4">
                  <CreateInput
                    id={"submited_date"}
                    name={"Submited Date"}
                    value={fightInfo}
                    setValue={setFightInfo}
                    type={"date"}
                  />
                  <CreateInput
                    id={"checked_date"}
                    name={"Checked Date"}
                    value={fightInfo}
                    setValue={setFightInfo}
                    type={"date"}
                  />
                  <CreateInput
                    id={"created_date"}
                    name={"Created Date"}
                    value={fightInfo}
                    setValue={setFightInfo}
                    type={"date"}
                  />
                  <CreateInput
                    id={"fight_date"}
                    name={"Fight Date"}
                    value={fightInfo}
                    setValue={setFightInfo}
                    type={"date"}
                  />
                </div>
                <div className="inputs-third-container flex gap-4 flex-wrap">
                  <CreateInput
                    id={"tournament_id"}
                    name={"Tournament"}
                    value={fightInfo}
                    setValue={setFightInfo}
                    type={"text"}
                  />
                  <CreateInput
                    id={"oponent_id"}
                    name={"Opponent"}
                    value={fightInfo}
                    setValue={setFightInfo}
                    type={"text"}
                  />
                  <CreateInput
                    id={"fighter_id"}
                    name={"Fighter"}
                    value={fightInfo}
                    setValue={setFightInfo}
                    type={"text"}
                  />
                  <CreateInput
                    id={"winner_id"}
                    name={"Winner"}
                    value={fightInfo}
                    setValue={setFightInfo}
                    type={"text"}
                  />
                </div>
                <div className="inputs-second-container flex gap-8">
                  <CreateInput
                    id={"author"}
                    name={"Author"}
                    value={fightInfo}
                    setValue={setFightInfo}
                    type={"text"}
                  />
                  <CreateInput
                    id={"weight_category"}
                    name={"Weight"}
                    value={fightInfo}
                    setValue={setFightInfo}
                    type={"text"}
                  />
                  <CreateInput
                    id={"location"}
                    name={"Location"}
                    value={fightInfo}
                    setValue={setFightInfo}
                    type={"text"}
                  />
                </div>
                <div className="inputs-third-container flex gap-8">
                  <CreateSelectBox
                    datas={scores}
                    id={"oponent1_point"}
                    name={"Opponent(1) Point"}
                    selectOpen={selectOpen}
                    setSelectOpen={setSelectOpen}
                    value={fightInfo}
                    setValue={setFightInfo}
                  />
                  <CreateSelectBox
                    datas={scores}
                    id={"oponent2_point"}
                    name={"Opponent(2) Point"}
                    selectOpen={selectOpen}
                    setSelectOpen={setSelectOpen}
                    value={fightInfo}
                    setValue={setFightInfo}
                  />
                </div>
              </div>
            </div>
            <div className="edit-btns flex gap-5 self-end">
              <div className="">
                <button
                  className="update w-28 px-6 py-2 bg-wGreen rounded"
                  type="button"
                  onClick={handleMatchUpdate}
                >
                  Update
                </button>
                <Toaster />
              </div>
              <button
                className="cancel w-28 px-6 py-2 bg-wGray transition-all duration-200 rounded"
                type="button"
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
