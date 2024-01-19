import React, { useContext, useEffect, useState } from "react";
import FilterSelectBox from "./FilterSelectBox";
import { getData } from "../services/api/requests";
import FilterInput from "./FilterInput";
import { FormContext } from "../context/FormContext";

export default function () {
  const { loadData, setFightInfos } = useContext(FormContext);
  const [filterSelects, setFilterSelects] = useState({});
  const [dateInput, setDateInput] = useState("");
  const [dates, setDates] = useState([]);
  const [tournaments, setTournaments] = useState([]);
  const [tournamentInput, setTournamentInput] = useState(0);
  const [weightInput, setWeightInput] = useState("");
  const [weights, setWeights] = useState([]);

  const [input, setInput] = useState({});

  useEffect(() => {
    loadDates();
  }, []);

  useEffect(() => {
    loadFights(input?.matchId)
  }, [input?.matchId]);

  useEffect(() => {
    console.log("dateInput def", dateInput);
    if (dateInput !== "") {
      loadTournaments(dateInput);
    }
  }, [dateInput]);

  useEffect(() => {
    if (tournamentInput !== "") {
      loadWeight(tournamentInput);
    }
  }, [tournamentInput]);

  const loadDates = async () => {
    try {
      const response = await getData(`filters/dates/`);
      setDates(response);
      setDateInput(response[0].date);
    } catch (err) {
      console.log("dates", err);
    }
  };

  const loadFights = async(fightId)=>{
    setFightInfos([await getData(`fight-infos/${fightId}`)])
  }
  const loadTournaments = async (date) => {
    try {
      const response = await getData(`filters/tournaments/${date}/`);
      setTournaments(response);
      setTournamentInput(response[0].id);
    } catch (err) {
      console.log("err", err);
    }
  };

  const loadWeight = async (tournament) => {
    try {
      const response = await getData(`filters/weights/${tournament}/`);
      console.log("weight", response);
      setWeights(response);
      setWeightInput(response[0]);
    } catch (err) {
      console.log("weight err", err);
    }
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
      <FilterInput id={"matchId"} setInput={setInput} input={input} />
      <FilterSelectBox
        id={"year"}
        handleFilterSelects={handleFilterSelects}
        filterSelects={filterSelects}
        value={dateInput}
        setValue={setDateInput}
        datas={dates}
        ok
      />
      <FilterSelectBox
        id={"tournament"}
        handleFilterSelects={handleFilterSelects}
        filterSelects={filterSelects}
        value={tournamentInput}
        setValue={setTournamentInput}
        datas={tournaments}
      />
      <FilterSelectBox
        id={"weight"}
        handleFilterSelects={handleFilterSelects}
        filterSelects={filterSelects}
        value={weightInput}
        setValue={setWeightInput}
        datas={weights}
      />
    </div>
  );
}
