import React, { useContext } from "react";
import useSWR from "swr";
import {
  createNewMatchEnpoints,
  fightInfosEndpoints,
} from "../services/api/endponits";
import { getDashboardData, postData } from "../services/api/requests";
import { FightContext } from "../context/FightContext";
import CreateSelectBox from "./CreateSelectBox";
import { WrestlingTypes, desicions, level, stage } from "../static/data";
import CreateInput from "./CreateInput";
import toast, { Toaster } from "react-hot-toast";

export default function CreateNewMatch({ id, openComponent }) {
  const { newFight, setNewFight, setSelectOpen, selectOpen } =
    useContext(FightContext);

  const { data: countries } = useSWR(
    createNewMatchEnpoints.countries,
    getDashboardData
  );

  const { data: fighters } = useSWR(
    newFight?.opponent1_nationality
      ? createNewMatchEnpoints.fighters(newFight?.opponent1_nationality)
      : null,
    getDashboardData
  );

  const { data: opponents } = useSWR(
    newFight?.opponent2_nationality
      ? createNewMatchEnpoints.fighters(newFight?.opponent2_nationality)
      : null,
    getDashboardData
  );

  const handleAddNewMatch = async (e) => {
    e.preventDefault();
    // console.log('created', newFight)
    try {
      const response = await postData(
        fightInfosEndpoints.addNewFigth,
        newFight
      );
      console.log("macth successfully created", response);
      toast(`Copy match id : ${response.id}`, {style : {background : 'lightblue', color : 'white'}, duration : 7000})
    } catch (err) {
      console.log("created err", err);
    }
  };
  console.log("createnew match", selectOpen);

  return (
    <>
      <div
        className={`create-new-match-container flex justify-center items-center ${
          !openComponent[id] ? "hidden" : "block"
        }`}
      >
        <form action="" className="flex flex-col gap-4">
          <div className="create-new-macth flex flex-col gap-5 justify-center items-center w-full">
            <div className="first-line flex gap-4 items-center">
              <CreateInput
                id={"tournament_name"}
                name={"Tournament"}
                value={newFight}
                setValue={setNewFight}
                type={"text"}
              />
              <CreateInput
                id={"location"}
                name={"Place"}
                value={newFight}
                setValue={setNewFight}
                type={"text"}
              />
              <CreateInput
                id={"weight_category"}
                name={"Weight"}
                value={newFight}
                setValue={setNewFight}
                type={"text"}
              />
              <CreateInput
                id={"tournament_date"}
                name={"Date"}
                value={newFight}
                setValue={setNewFight}
                type={"date"}
              />
            </div>
            <div className="second-line flex gap-4 items-center">
              <CreateSelectBox
                id={"opponent1_nationality"}
                name={"Nationality(2)"}
                datas={countries}
                selectOpen={selectOpen}
                setSelectOpen={setSelectOpen}
                value={newFight}
                setValue={setNewFight}
              />
              <CreateSelectBox
                id={"opponent1"}
                name={"Opponent(2)"}
                datas={fighters}
                selectOpen={selectOpen}
                setSelectOpen={setSelectOpen}
                value={newFight}
                setValue={setNewFight}
              />
              <CreateSelectBox
                id={"opponent2_nationality"}
                name={"Nationality(2)"}
                datas={countries}
                selectOpen={selectOpen}
                setSelectOpen={setSelectOpen}
                value={newFight}
                setValue={setNewFight}
              />
              <CreateSelectBox
                id={"opponent2"}
                name={"Opponent(2)"}
                datas={opponents}
                selectOpen={selectOpen}
                setSelectOpen={setSelectOpen}
                value={newFight}
                setValue={setNewFight}
              />
            </div>

            <div className="third-line flex gap-6">
              <CreateSelectBox
                id={"level"}
                name={"Level"}
                datas={level}
                selectOpen={selectOpen}
                setSelectOpen={setSelectOpen}
                value={newFight}
                setValue={setNewFight}
              />
              <CreateSelectBox
                id={"stage"}
                name={"Stage"}
                datas={stage}
                selectOpen={selectOpen}
                setSelectOpen={setSelectOpen}
                value={newFight}
                setValue={setNewFight}
              />
              <CreateSelectBox
                id={"decision"}
                name={"Decision"}
                datas={desicions}
                selectOpen={selectOpen}
                setSelectOpen={setSelectOpen}
                value={newFight}
                setValue={setNewFight}
              />
              <CreateSelectBox
                id={"wrestling_type"}
                name={"Wrestling Type"}
                datas={WrestlingTypes}
                selectOpen={selectOpen}
                setSelectOpen={setSelectOpen}
                value={newFight}
                setValue={setNewFight}
              />
            </div>
          </div>
          <div className="create-btn text-[#fff] flex justify-center items-center">
            <button
              className="bg-[#1B234F] py-4 w-[25rem] rounded"
              onClick={handleAddNewMatch}
            >
              Create
            </button>
            <Toaster/>
          </div>
        </form>
      </div>
    </>
  );
}
