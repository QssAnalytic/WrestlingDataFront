import React, { useContext, useEffect, useRef, useState } from "react";
import FilterSelectBox from "./FilterSelectBox";
import { getData } from "../../services/api/requests";
import FilterInput from "./FilterInput";
import { FormContext } from "../../context/FormContext";
import useSWR from "swr";
import { filtersEndpoints } from "../../services/api/endponits";
import { FilterContext } from "../../context/FilterContext";
import { GrUpdate } from "react-icons/gr";

export default function Filter() {
  const { loadData, setFightInfos } = useContext(FormContext);
  const { setFilterParams, filterParams } = useContext(FilterContext);
  const [filterSelects, setFilterSelects] = useState({});
  const [input, setInput] = useState({});
  const filterBoxRef = useRef(null);

  const { data: dates } = useSWR(filtersEndpoints.dates, getData);
  const { data: tournaments } = useSWR(filtersEndpoints.tournaments(filterParams?.date), getData);

  const { data: styles } = useSWR(filtersEndpoints.style(filterParams?.tournament_id), getData);
  const { data: weights } = useSWR(
    filtersEndpoints.weights({
      tournament_id: filterParams?.tournament_id,
      wrestling_type: filterParams?.wrestling_type,
    }),
    getData,
  );
  const { data: stages } = useSWR(filtersEndpoints.stages(filterParams?.weight_category), getData);

  useEffect(() => {
    loadFights(input?.matchId);
    console.log("effect", input.matchId);
  }, [input?.matchId]);

  const loadFights = async (fightId) => {
    setFightInfos(await getData(`fight-infos/${Number(fightId)}`));
  };

  const handleFilterSelects = (id) => {
    console.log("filter", id);
    setFilterSelects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const resetFilter = () => {
    setFilterParams({
      // tournament_id: undefined,
      // place: undefined,
      // wrestler_name: undefined,
      // author: undefined,
      // weight_category: undefined,
      // is_submitted: undefined,
      // status: undefined,
      // page: 1,
      // limit: 200,
      // date: undefined,
    });

    setFilterSelects({});
  };

  return (
    <div className="filter mb-3 flex gap-5">
      <FilterInput
        id={"wrestler_name"}
        setInput={setFilterParams}
        input={filterParams}
        placeholder={"Wrestler name..."}
      />
      <FilterInput id={"author"} setInput={setFilterParams} input={filterParams} placeholder={"Author name..."} />
      <FilterInput
        id={"check_author"}
        setInput={setFilterParams}
        input={filterParams}
        placeholder={"Check Author name..."}
      />
      <FilterSelectBox
        ref={filterBoxRef}
        id={"date"}
        name={"year"}
        handleFilterSelects={handleFilterSelects}
        filterSelects={filterSelects}
        value={filterParams}
        setValue={setFilterParams}
        datas={dates}
      />
      <FilterSelectBox
        ref={filterBoxRef}
        id={"tournament_id"}
        name={"tournament"}
        handleFilterSelects={handleFilterSelects}
        filterSelects={filterSelects}
        value={filterParams}
        setValue={setFilterParams}
        datas={tournaments}
        valueKey={"name"}
        filterKey={"id"}
      />
      <FilterSelectBox
        ref={filterBoxRef}
        id={"wrestling_type"}
        name={"style"}
        handleFilterSelects={handleFilterSelects}
        filterSelects={filterSelects}
        value={filterParams}
        setValue={setFilterParams}
        datas={styles}
        // valueKey={"name"}
        // filterKey={"id"}
      />
      <FilterSelectBox
        ref={filterBoxRef}
        id={"weight_category"}
        name={"weight"}
        handleFilterSelects={handleFilterSelects}
        filterSelects={filterSelects}
        value={filterParams}
        setValue={setFilterParams}
        datas={weights}
      />
      <FilterSelectBox
        ref={filterBoxRef}
        id={"stage"}
        name={"stages"}
        handleFilterSelects={handleFilterSelects}
        filterSelects={filterSelects}
        value={filterParams}
        setValue={setFilterParams}
        datas={stages}
      />
      <FilterSelectBox
        ref={filterBoxRef}
        id={"status"}
        name={"status"}
        handleFilterSelects={handleFilterSelects}
        filterSelects={filterSelects}
        value={filterParams}
        setValue={setFilterParams}
        datas={[{ status: "not started" }, { status: "in progress" }, { status: "completed" }, { status: "checked" }]}
      />
      {/* <FilterSelectBox
        id={"is_submitted"}
        name={"check"}
        handleFilterSelects={handleFilterSelects}
        filterSelects={filterSelects}
        value={filterParams}
        setValue={setFilterParams}
        valueKey={"name"}
        datas={[
          { name: "Checked", is_submitted: true },
          { name: "Unchecked", is_submitted: false },
        ]}
      /> */}

      <button
        className="reset rounded text-[#ffffff]/50 text-lg transition-all hover:rotate-180 hover:text-[#ffffff] duration-700"
        onClick={resetFilter}>
        <GrUpdate></GrUpdate>
      </button>
    </div>
  );
}
