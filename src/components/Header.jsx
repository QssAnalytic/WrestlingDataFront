import React from "react";
import logo from "../assets/header-logo.svg";
import level from "../assets/level.svg";
import weight from "../assets/weight.svg";
import wrestler from "../assets/wrestler.png";
import nationality from "../assets/nationality.svg";
import change from "../assets/change.svg";
import { IoIosArrowForward } from "react-icons/io";

export default function Header() {
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
              <p className="text-wGreen text-[1.5rem]">Freestyle Wrestling</p>
            </div>
            <div className="location-date text-wTextSec flex gap-[0.69rem] text-[1.125rem]">
              <p className="location">Krasnoyarsk, Russia</p>
              <p className="date">28.10.2022</p>
            </div>
            <div className="match-id border w-fit p-2 border-[#474A5B] rounded-sm">
              <p className="text-wTextSec">
                Match ID: <span className="id text-wGreen">43214232</span>{" "}
              </p>
            </div>
          </div>
          <div className="header-middle flex flex-col justify-center items-center gap-[1.69rem]">
            <div className="stage-name">
              <p className="text-wOrange text-[1.5rem]">
                <span>Semifinal</span> - stage
              </p>
            </div>
            <div className="skill-weight flex gap-[1.88rem]">
              <div className="skill-level gap-[0.5rem] rounded flex bg-wSecGreen bg-opacity-[0.21] text-wShadow items-center px-[1.25rem] py-[0.5rem]">
                <p className="level-name">Seniors</p>
                <p className="level-img">
                  <img src={level} alt="level" />
                </p>
              </div>
              <div className="weight bg-wSecGreen bg-opacity-[0.21] flex items-center rounded px-[1.25rem] py-[0.5rem] gap-2">
                <p className="weight-number text-wShadow">
                  <span>65</span>kg weight
                </p>
                <p className="weight-img">
                  <img src={weight} alt="weight" />
                </p>
              </div>
            </div>
            <div className="wrestlers flex justify-between items-center gap-[5.62rem]">
              {/* Wrestler first */}
              <div className="wrestler flex flex-col  items-center justify-center">
                <div className="wrestler-img w-fit border-[2px] rounded-md border-wGreen">
                  <img src={wrestler} alt="wrestler" />
                </div>
                <div className="wrestler-name-nationality flex gap-2 ">
                  <p className="name text-wGreen">Muhammad Aliyev</p>
                  <img src={nationality} alt="nationality" className="" />
                </div>
              </div>
              {/* Button for changing player */}
              <div className="btn-container">
                <button className="btn-chnage">
                  <img src={change} alt="change" />
                </button>
              </div>
              {/* Wrestler second */}
              <div className="wrestler opacity-[50%] flex flex-col items-center justify-center">
                <div className="wrestler-img w-fit border-[3px] rounded-md border-[#000] border-opacity-[30%]">
                  <img src={wrestler} alt="wrestler" />
                </div>
                <div className="wrestler-name-nationality flex gap-2">
                  <p className="name text-wShadow">Muhammad Aliyev</p>
                  <img src={nationality} alt="nationality" />
                </div>
              </div>
            </div>
          </div>
          <div className="header-right">
            <div className="righ-btn rounded-sm bg-[#ffffff] bg-opacity-[0.08] py-[0.62rem] px-[1.88rem]">
              <button className="view-matches flex justify-between items-center gap-[1.88rem] text-wShadow">
                View matches <IoIosArrowForward className="text-[20px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
