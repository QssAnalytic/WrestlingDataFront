import React, { useContext, useEffect, useState } from "react";
import FilterSelectBox from "./FilterSelectBox";
import { getData } from "../services/api/requests";
import FilterInput from "./FilterInput";
import { FormContext } from "../context/FormContext";
import useSWR from "swr";
import { filtersEndpoints } from "../services/api/endponits";
import { FilterContext } from "../context/FilterContext";

export default function Filter() {
  const { loadData, setFightInfos } = useContext(FormContext);
  const { setFilterParams, filterParams } = useContext(FilterContext);
  const [filterSelects, setFilterSelects] = useState({});
  const [input, setInput] = useState({});


  const { data: dates } = useSWR(filtersEndpoints.dates, getData);
  const { data: tournaments } = useSWR(
    filterParams?.date
      ? filtersEndpoints.tournaments(filterParams?.date)
      : null,
    getData
  );
  const { data: weights } = useSWR(
    filterParams?.tournament_id
      ? filtersEndpoints.weights(filterParams?.tournament_id)
      : null,
    getData
  );

  const { data: stages } = useSWR(
    filterParams?.weight_category
      ? filtersEndpoints.stages(filterParams?.weight_category)
      : null,
    getData
  );

  useEffect(() => {
    loadFights(input?.matchId);
  }, [input?.matchId]);

  const loadFights = async (fightId) => {
    setFightInfos([await getData(`fight-infos/${fightId}`)]);
  };

  const handleFilterSelects = (id) => {
    console.log("filter", id);
    setFilterSelects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="filter mb-3 flex gap-5">
      <FilterInput
        id={"matchId"}
        setInput={setInput}
        input={input}
        placeholder={"Enter Match ID..."}
      />
      <FilterInput
        id={"wrestler_name"}
        setInput={setFilterParams}
        input={filterParams}
        placeholder={"Enter Wrestler name..."}
      />
      {/* <FilterInput id={"place"} setInput={setFilterParams} input={filterParams} placeholder={'Enter Place...'} /> */}
      <FilterSelectBox
        id={"date"}
        name={"year"}
        handleFilterSelects={handleFilterSelects}
        filterSelects={filterSelects}
        value={filterParams}
        setValue={setFilterParams}
        datas={dates}
      />
      <FilterSelectBox
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
        id={"weight_category"}
        name={"weight"}
        handleFilterSelects={handleFilterSelects}
        filterSelects={filterSelects}
        value={filterParams}
        setValue={setFilterParams}
        datas={weights}
      />
      <FilterSelectBox
        id={"stage"}
        name={"stages"}
        handleFilterSelects={handleFilterSelects}
        filterSelects={filterSelects}
        value={filterParams}
        setValue={setFilterParams}
        datas={stages}
      />
    </div>
  );
}
