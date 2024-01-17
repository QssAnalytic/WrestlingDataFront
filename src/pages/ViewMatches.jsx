import React, { useEffect, useState } from "react";
import logo from "../assets/header-logo.svg";
import { PiVideoBold } from "react-icons/pi";
import MatchesTable from "../components/Table/MatchesTable";
import { getData } from "../services/api/requests";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

export default function ViewMatches() {
  const LIMIT = 200;
  const [fightInfos, setFightInfos] = useState([]);

  const getFightInfos = async (page) => {
    setFightInfos(await getData(`/fight-infos/?page=${page}&limit=${LIMIT}`));
  };

  useEffect(() => {
    getFightInfos(1);
  }, []);

  console.log("viewMatches", fightInfos);

  return (
    <>
      <div className="view-header text-white h-auto px-9">
        <div className="container m-auto">
          <div className="view-header-inner">
            <div className="view-logo flex gap-3 justify-center">
              <p className="text-[1.25rem] text-wBlue">World Championship</p>
              <img src={logo} alt="logo" />
            </div>
            <div className="text-header text-wOrange text-2xl flex justify-center">
              All Match
            </div>
            <div className="filter-matches flex gap-4 mb-4">
              <button className="filter text-[#26719B] py-3 px-5 flex items-center justify-center gap-2 border rounded border-[#26719B]">
                Video view <PiVideoBold />
              </button>
              <Link to={"/login"}>
                <button className="filter text-[#26719B] py-3 px-5 flex items-center justify-center gap-2 border rounded border-[#26719B]">
                  Find Match by ID
                </button>
              </Link>
            </div>
            <MatchesTable fightInfos={fightInfos.data} />
            <Pagination
              perPage={LIMIT}
              total={fightInfos.count}
              nextPage={fightInfos.next_page}
              prevPage={fightInfos.previous_page}
              onPageChange={getFightInfos}
            />
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container m-auto">
          <div className="footer-inner">
            <div className="footer-info flex justify-center text-white">
              <p>
                Developed by Akshin Guseinov, Eltun Mammadov, Tamerlan Aliyev,
                Elvin Guseinov
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
