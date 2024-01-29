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
import { FallingLines } from "react-loader-spinner";

export default function ViewMatches() {
  const LIMIT = 200;
  const { filterParams, setFilterParams } = useContext(FilterContext);
  const [openEditMatch, setOpenEditMatch] = useState(false);
  const [page, setPage] = useState(1);

  const handlePage = (pageNum) => {
    console.log("nextpage", page);
    setPage(pageNum);
    setFilterParams((prevParams) => ({
      ...prevParams,
      page: pageNum,
    }));
    setTimeout(() => {
      mutate();
    }, 1);
  };

  const {
    data: matches,
    isLoading,
    error,
    mutate,
  } = useSWR(
    fightInfosEndpoints.search({ ...filterParams, page: filterParams.page }),
    getData
  );

  return (
    <>
      <div
        className={`view-header text-white relative h-auto px-9 ${
          openEditMatch ? "pointer-events-none" : null
        }`}
      >
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
              <Link to={"/login"}>
                <button className="filter text-[#26719B] transition-all duration-200 hover:text-wMain hover:bg-[#eaeaea] hover:border-transparent py-3 px-5 flex items-center justify-center gap-2 border rounded border-[#26719B]">
                  Record Match
                </button>
              </Link>
            </div>
            <Filter />
            {isLoading ? (
              <div className="w-[100vh] translate-x-[60%]">
                <FallingLines
                  color="#eaeaea"
                  width="400"
                  visible={true}
                  className='flex justify-center items-center'
                  ariaLabel="falling-circles-loading"
                />
               </div>
            ) : error ? (
              <div>Oops! Something went wrong</div>
            ) : (
              <>
                {matches?.data?.length > 0 ? (
                  <>
                    <MatchesTable
                      fightInfos={matches.data}
                      openEditMatch={openEditMatch}
                      setOpenEditMatch={setOpenEditMatch}
                      editMutate={mutate}
                    />
                    {/* <Pagination
                      total={matches.count}
                      nextPage={matches.next_page}
                      prevPage={matches.previous_page}
                      onPageChange={handlePage}
                      filterParams={filterParams}
                      mutate={mutate}
                    /> */}
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
                Copyright 2023
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
