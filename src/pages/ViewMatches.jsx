import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/header-logo.svg";
import { PiVideoBold } from "react-icons/pi";
import MatchesTable from "../components/Table/MatchesTable";
import { getData } from "../services/api/requests";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";
import useSWR from "swr";
import {
  fightInfosEndpoints,
  filtersEndpoints,
} from "../services/api/endponits";
import { FilterContext } from "../context/FilterContext";
import nodata from "../assets/empty.svg";

export default function ViewMatches() {
  const LIMIT = 200;
  const { filterParams, setFilterParams } = useContext(FilterContext);
  const [page, setPage] = useState(1);

  const handlePage = (page) => {
    console.log('nextpage', page)
    setPage(page);
    setFilterParams((prevParams) => ({
      ...prevParams,
      page: page,
    }));
  };

  const {
    data: matches,
    isLoading,
    error,
  } = useSWR(fightInfosEndpoints.search({ ...filterParams, page : filterParams.page }), getData);

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
              <button className="filter text-[#26719B] py-3 px-5 flex transition-all duration-200 hover:text-wMain hover:bg-[#eaeaea] hover:border-transparent items-center justify-center gap-2 border rounded border-[#26719B]">
                Filter <PiVideoBold />
              </button>
              <Link to={"/login"}>
                <button className="filter text-[#26719B] transition-all duration-200 hover:text-wMain hover:bg-[#eaeaea] hover:border-transparent py-3 px-5 flex items-center justify-center gap-2 border rounded border-[#26719B]">
                  Find Match by ID
                </button>
              </Link>
            </div>
            <Filter />
            {isLoading ? (
              <div className="loading">Loading...</div>
            ) : error ? (
              <div>Oops! Something went wrong</div>
            ) : (
              <>
                {matches?.data?.length > 0 ? (
                  <>
                    <MatchesTable fightInfos={matches.data} />
                    <Pagination
                      total={matches.count}
                      nextPage={matches.next_page}
                      prevPage={matches.previous_page}
                      onPageChange={handlePage}
                    />
                  </>
                ) : (
                  <div className="no-data flex justify-center items-center text-red-400">
                    <img src={nodata} className="" />
                  </div>
                )}
              </>
            )}
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
