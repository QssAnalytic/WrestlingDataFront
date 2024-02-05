import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/header-logo.svg";
import level from "../assets/level.svg";
import weight from "../assets/weight.svg";
import { IoIosArrowForward } from "react-icons/io";
import OpponentsInput from "./FormInputs/OpponentsInput";
import { FormContext } from "../context/FormContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateData } from "../services/api/requests";
import { fightInfosEndpoints } from "../services/api/endponits";
import { FightContext } from "../context/FightContext";
import CreateSelectBox from "./NewMatch/CreateSelectBox";
import useSWR from "swr";
import { orders, status } from "../static/data";
import CreateInput from "./NewMatch/CreateInput";

export default function Header({ fightInfo, isLoading, mutate }) {
  const { actionsBase, singleAction, loadData, setActionsBase } =
    useContext(FormContext);

  const { fightId } = useParams();
  const { selectOpen, setSelectOpen, stateFight, setStateFight } =
    useContext(FightContext);
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

  const { data: state } = useSWR(
    stateFight && isFinal
      ? fightInfosEndpoints.changeState(Number(fightId))
      : null,
    () =>
      updateData(
        fightInfosEndpoints.changeState(Number(fightId)),
        stateFight?.status === "checked"
          ? stateFight
          : { ...stateFight, check_author: null }
      )
  );

  useEffect(() => {
    setIsFinal(false);
    loadData(fightId);
    fetchData();
    console.log("header id", fightId);
  }, [fightId]);

  const handleFinalSubmit = async () => {
    setIsFinal((prev) => !prev);
    setTimeout(() => {
      navigate("/");
      setStateFight({});
    }, 10);
  };

  return (
    <header className="header w-full p-9">
      <div className="container m-auto">
        <div className="header-inner gap-[1.75rem] flex justify-between ">
          <div className="header-left flex flex-col gap-[0.31rem]">
            <div className="header-logo flex gap-[0.62rem]">
              <h2 className="text-wBlue text-[1.875rem]">World Championship</h2>
              <img src={logo} alt="header-logo" />
            </div>
            <div className="type-wrestling">
              <p className="text-wGreen text-[1.5rem]">
                {fightInfo?.wrestling_type}
              </p>
            </div>
            <div className="location-date text-wTextSec flex gap-[0.69rem] text-[1.125rem]">
              <p className="location">{fightInfo?.location}</p>
              <p className="date">{fightInfo?.fight_date}</p>
            </div>
          </div>
          <div className="header-middle flex flex-col justify-center items-center gap-[1.69rem]">
            <div className="stage-name">
              <p className="text-wOrange text-[1.5rem]">
                <span>{fightInfo?.stage}</span> - stage
              </p>
            </div>
            <div className="flex gap-[10px] items-center text-wTextSec">
              <div className="match-id flex flex-col basis-[50%]">
                <p>Match ID:</p>
                <p className="border w-fit p-2 border-[#474A5B] rounded-sm pr-28">
                  {/* Match ID:{" "} */}
                  <span className="id text-wGreen">{fightInfo?.id}</span>{" "}
                </p>
              </div>
              <div className="author flex flex-col basis-[50%]">
                <p>Author :</p>
                <input
                  className="bg-inherit text-wTextSec border border-[#474A5B] rounded-sm outline-none p-2"
                  value={stateFight?.author || ""}
                  type="text"
                  placeholder="Author"
                  onChange={(e) =>
                    setStateFight((prev) => ({
                      ...prev,
                      author: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="skill-weight flex gap-[1.88rem]">
              <div className="skill-level gap-[0.5rem] rounded flex bg-wSecGreen bg-opacity-[0.21] text-wShadow items-center px-[1.25rem] py-[0.5rem]">
                <p className="level-name">{fightInfo?.level}</p>
                <p className="level-img">
                  <img src={level} alt="level" />
                </p>
              </div>
              <div className="weight bg-wSecGreen bg-opacity-[0.21] flex items-center rounded px-[1.25rem] py-[0.5rem] gap-2">
                <p className="weight-number text-wShadow">
                  <span>{fightInfo?.weight_category}</span>kg weight
                </p>
                <p className="weight-img">
                  <img src={weight} alt="weight" />
                </p>
              </div>
            </div>
            {/*  Wrestlers Input */}
            {console.log("fightinfo in header", fightInfo)}
            <OpponentsInput
              activeAction={singleAction}
              fighter={fightInfo?.fighter}
              opponent={fightInfo?.oponent}
            />
          </div>
          <div className="header-right flex flex-col gap-6">
            <Link to={"/"}>
              <div className="righ-btn rounded-sm bg-[#ffffff] bg-opacity-[0.08] opacity-50 transition-all duration-300 hover:opacity-100 py-[0.62rem] px-[1.88rem]">
                <button className="view-matches flex justify-between  items-center gap-[1.88rem] text-[#eaeaea]">
                  View matches <IoIosArrowForward className="text-[20px]" />
                </button>
              </div>
            </Link>
            <div className="ascending-descending">
              <CreateSelectBox
                id={"order"}
                name={"Order"}
                datas={orders}
                value={stateFight}
                setValue={setStateFight}
                selectOpen={selectOpen}
                setSelectOpen={setSelectOpen}
              />
            </div>
            <CreateSelectBox
              id={"status"}
              datas={status}
              selectOpen={selectOpen}
              setSelectOpen={setSelectOpen}
              setValue={setStateFight}
              value={stateFight}
              fightInfo={fightInfo}
              mutate={mutate}
              isLoading={isLoading}
            />
            {stateFight?.status === "checked" ? (
              <CreateInput
                id={"check_author"}
                name={"Check author"}
                value={stateFight}
                setValue={setStateFight}
                type="text"
              />
            ) : null}
            <div
              className="final-submit rounded bg-[#ffffff] bg-opacity-[0.08] opacity-50 transition-all duration-300 hover:opacity-100 py-[0.62rem] px-[1.88rem]"
              onClick={handleFinalSubmit}
            >
              <button
                className="submit flex justify-center items-center gap-[1.88rem] text-[#eaeaea]"
                type="button"
              >
                Final Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
