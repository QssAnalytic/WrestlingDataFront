import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/header-logo.svg";
import level from "../assets/level.svg";
import weight from "../assets/weight.svg";
import { IoIosArrowForward } from "react-icons/io";
import OpponentsInput from "./FormInputs/OpponentsInput";
import { FormContext } from "../context/FormContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateData, updateState } from "../services/api/requests";
import { fightInfosEndpoints } from "../services/api/endponits";
import { FightContext } from "../context/FightContext";
import CreateSelectBox from "./NewMatch/CreateSelectBox";
import useSWR from "swr";
import { orders, status as statuses } from "../static/data";
import CreateInput from "./NewMatch/CreateInput";
import useSWRMutation from "swr/mutation";

export default function Header({ fightInfo, isLoading, mutate }) {
  const { actionsBase, singleAction, loadData, setActionsBase } = useContext(FormContext);

  const { fightId } = useParams();
  const { author, check_author, status, order } = fightInfo;
  const [fight, setFight] = useState({
    author: author || "",
    status: status || "",
    check_author: check_author || "",
    order: order || "",
  });
  const { selectOpen, setSelectOpen, stateFight, setStateFight } = useContext(FightContext);
  const [isFinal, setIsFinal] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const datas = await actionsBase;
      setActionsBase(datas);
      console.log("header fetchdata", datas);
    } catch (err) {
      console.log("salam men geldim err");
    }
  };

  const { data: state, trigger: changeState } = useSWRMutation(
    fightInfosEndpoints.changeState(Number(fightId)),
    updateState,
    fight,
  );

  useEffect(() => {
    setFight({
      author,
      check_author,
      status,
      order,
    });
  }, [fightInfo]);

  useEffect(() => {
    setIsFinal(false);
    loadData(fightId);
    fetchData();
    console.log("header id", fightId);
  }, [fightId]);

  const handleFinalSubmit = async () => {
    try {
      setIsFinal((prev) => !prev);
      const res = await changeState(fight);
      setFight(res);
      console.log("ress", res);
      setTimeout(() => {
        navigate("/");
      }, 10);
      setStateFight({});
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <header className="header w-full p-9">
      <div className="container m-auto">
        <div className="header-inner gap-[1.75rem] flex flex-col justify-between ">
          {/* Top of the header in Action Form Page */}
          <div className="header-top flex flex-col items-center">
            <div className="flex gap-3 justify-center items-center">
              <div className="header-logo flex gap-[0.62rem]">
                <h2 className="text-wBlue text-[1.875rem]">World Championship</h2>
                <img src={logo} alt="header-logo" />
              </div>
              <div className="type-wrestling">
                <p className="text-wGreen text-[1.5rem]">{fightInfo?.wrestling_type}</p>
              </div>
            </div>
            <div className="location-date text-wTextSec flex gap-[0.69rem] text-[1.125rem]">
              <p className="location">{fightInfo?.location}</p>
              <p className="date">{fightInfo?.fight_date}</p>
            </div>
            <div className="justify-end w-full flex">
              <Link to={"/"}>
                <div className="righ-btn rounded-sm bg-[#ffffff] bg-opacity-[0.08] opacity-50 transition-all duration-300 hover:opacity-100 py-[0.62rem] px-[1.88rem]">
                  <button className="view-matches flex justify-between  items-center gap-[1.88rem] text-[#eaeaea]">
                    View matches <IoIosArrowForward className="text-[20px]" />
                  </button>
                </div>
              </Link>
            </div>
          </div>
          {/* Bottom of Header */}
          <div className="header-bottom flex justify-between items-start">
            <div className="header-left gap-[0.31rem] bg-[#151B43] rounded">
              <div className="flex flex-col gap-[10px] text-wTextSec px-14 py-5">
                <div className="match-id flex flex-col w-full">
                  <p>Match ID:</p>
                  <p className="bg-[#080C2B] w-full p-2  rounded-sm pr-28">
                    <span className="id text-wGreen">{fightInfo?.id}</span>{" "}
                  </p>
                </div>
                <div className="author flex flex-col basis-[50%]">
                  <p>Author :</p>
                  <input
                    className=" text-wTextSec bg-[#080C2B] rounded-sm outline-none p-2"
                    value={fight?.author || ""}
                    type="text"
                    placeholder="Author"
                    onChange={(e) => {
                      setFight((prev) => ({
                        ...prev,
                        author: e.target.value,
                      }));
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="header-middle bg-[#0E1336] py-5 px-14 rounded flex flex-col justify-center items-center gap-[1.69rem]">
              <div className="bg-[#1C2142] flex flex-col items-center gap-3 py-1 px-4 rounded">
                <div className="stage-name">
                  <p className="text-wOrange text-[1.5rem]">
                    <span>{fightInfo?.stage}</span> - stage
                  </p>
                </div>
                <div className="skill-weight flex gap-[1.88rem]">
                  <div className="skill-level gap-[0.5rem] rounded flex text-wShadow items-center px-[1.25rem] py-[0.5rem]">
                    <p className="level-name">{fightInfo?.level}</p>
                    <p className="level-img">
                      <img src={level} alt="level" />
                    </p>
                  </div>
                  <div className="weight flex items-center justify-center rounded px-[1.25rem] py-[0.5rem] gap-2">
                    <p className="weight-number text-wShadow">
                      <span>{fightInfo?.weight_category}</span>
                    </p>
                    <p className="weight-img">
                      <img src={weight} alt="weight" />
                    </p>
                  </div>
                </div>
              </div>

              {/*  Wrestlers Input */}
              {console.log("fightinfo in header", fightInfo)}
              <OpponentsInput activeAction={singleAction} fighter={fightInfo?.fighter} opponent={fightInfo?.oponent} />
            </div>
            <div className="header-right flex flex-col gap-6">
              <div className="ascending-descending flex flex-col gap-3 bg-[#151B43] py-7 px-12 rounded">
                <CreateSelectBox
                  id={"order"}
                  name={"Order"}
                  datas={orders}
                  value={fight}
                  setValue={setFight}
                  selectOpen={selectOpen}
                  setSelectOpen={setSelectOpen}
                />
                <CreateSelectBox
                  id={"status"}
                  datas={statuses}
                  selectOpen={selectOpen}
                  setSelectOpen={setSelectOpen}
                  setValue={setFight}
                  value={fight}
                  fightInfo={fightInfo}
                  mutate={mutate}
                  isLoading={isLoading}
                />
                {fight?.status === "checked" ? (
                  <CreateInput
                    id={"check_author"}
                    name={"Check author"}
                    value={fight}
                    setValue={setFight}
                    type="text"
                  />
                ) : null}
                <div
                  className="final-submit rounded bg-[#3D66B5] transition-all duration-300 cursor-pointer py-[0.62rem] px-[1.88rem]"
                  onClick={handleFinalSubmit}>
                  <button
                    className="submit flex justify-center items-center gap-[1.88rem] text-[#eaeaea]"
                    type="button">
                    Final Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

{
}
