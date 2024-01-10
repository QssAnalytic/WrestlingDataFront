import React, { useEffect, useState } from "react";
import logo from "../assets/header-logo.svg";
import { PiVideoBold } from "react-icons/pi";
import MatchesTable from "../components/Table/MatchesTable";
import { getData } from "../services/api/requests";

export default function ViewMatches() {
  const [fightInfos, setFightInfos] = useState([]);

  const getFightInfos = async () => {
    setFightInfos((await getData("/fight-infos/")).slice(0,10));
  };

  useEffect(() => {
    getFightInfos();
  }, []);

  console.log("viewMatches", fightInfos);

  return (
    <>
      <div className="view-header text-white h-auto">
        <div className="container m-auto">
          <div className="view-header-inner">
            <div className="view-logo flex gap-3 justify-center">
              <p className="text-[1.25rem] text-wBlue">World Championship</p>
              <img src={logo} alt="logo" />
            </div>
            <div className="text-header text-wOrange text-2xl flex justify-center">
              All Match
            </div>
            <div className="filter-matches flex justify-end mb-4">
              <button className="filter text-[#26719B] py-3 px-5 flex items-center justify-center gap-2 border rounded border-[#26719B]">
                Video view <PiVideoBold />
              </button>
            </div>
            <MatchesTable fightInfos={fightInfos} />
          </div>
        </div>
      </div>
    </>
  );
}
