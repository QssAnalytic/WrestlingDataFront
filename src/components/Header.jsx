import React, { useContext } from "react";
import logo from "../assets/header-logo.svg";
import level from "../assets/level.svg";
import weight from "../assets/weight.svg";
import { IoIosArrowForward } from "react-icons/io";
import OpponentsInput from "./FormInputs/OpponentsInput";
import { FormContext } from "../context/FormContext";
import { getData } from "../services/api/requests";
import { Link } from "react-router-dom";

export default function Header({ fightInfo }) {
  const { actionsBase, singleAction } = useContext(FormContext);

  return (
    <header className="header w-full">
      <div className="container m-auto">
        <div className="header-inner flex justify-between gap-[1.75rem]">
          <div className="header-left flex flex-col gap-[0.31rem]">
            <div className="header-logo flex gap-[0.62rem]">
              <h2 className="text-wBlue text-[1.875rem]">World Championship</h2>
              <img src={logo} alt="header-logo" />
            </div>
            <div className="type-wrestling">
              <p className="text-wGreen text-[1.5rem]">{fightInfo?.wrestling_type}</p>
            </div>
            <div className="location-date text-wTextSec flex gap-[0.69rem] text-[1.125rem]">
              <p className="location">{fightInfo?.location}</p>
              <p className="date">{fightInfo?.fight_date}</p>
            </div>
            <div className="match-id border w-fit p-2 border-[#474A5B] rounded-sm">
              <p className="text-wTextSec">
                Match ID: <span className="id text-wGreen">{fightInfo?.id}</span>{" "}
              </p>
            </div>
          </div>
          <div className="header-middle flex flex-col justify-center items-center gap-[1.69rem]">
            <div className="stage-name">
              <p className="text-wOrange text-[1.5rem]">
                <span>{fightInfo?.stage}</span> - stage
              </p>
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
            {actionsBase?.map((action) => {
              return action.actionId === singleAction.actionId ? (
                <OpponentsInput activeAction={action} fighter={fightInfo?.fighter} opponent={fightInfo?.oponent}/>
              ) : null;
            })}
          </div>
          <div className="header-right">
            <div className="righ-btn rounded-sm bg-[#ffffff] bg-opacity-[0.08] py-[0.62rem] px-[1.88rem]">
              <Link to={'/view-matches'}>
                <button className="view-matches flex justify-between items-center gap-[1.88rem] text-wShadow">
                  View matches <IoIosArrowForward className="text-[20px]" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
