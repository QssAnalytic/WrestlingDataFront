import React, { useContext, useState, useEffect } from "react";
import Wrestler from "../Wrestler";
import change from "../../assets/change.svg";
import { FormContext } from "../../context/FormContext";

export default function OpponentsInput({ activeAction, fighter, opponent }) {
  const { singleAction, setSingleAction } = useContext(FormContext);

  const [wrestler, setWrestler] = useState({});

  useEffect(() => {
    if (fighter?.id && opponent?.id) {
      setWrestler({
        [fighter.id]: false,
        [opponent.id]: false,
      });
    }
  }, [fighter, opponent]);

  useEffect(() => {
    setSingleAction({
      ...singleAction,
      fighter_id: Number(
        Object.keys(wrestler).find((id) => (wrestler[id] === true ? id : null))
      ),
    });
  }, [wrestler, fighter, opponent]);

  console.log("input", wrestler);

  const handleWrestler = (wrestlerId) => {
    setWrestler((prevWrestlers) => ({
      [Object.keys(prevWrestlers).find(
        (wrestler) => wrestler !== wrestlerId
      )]: false,
      [wrestlerId]: true,
    }));
    console.log("activeWrestlers", wrestler);
  };

  const changeWrestler = () => {
    setWrestler((prevWrestlers) => ({
      [Object.keys(prevWrestlers)[0]]:
        !prevWrestlers[Object.keys(prevWrestlers)[0]],
      [Object.keys(prevWrestlers)[1]]:
        !prevWrestlers[Object.keys(prevWrestlers)[1]],
    }));
  };

  return (
    <>
      <div
        className={`wrestlers flex justify-between items-center gap-[5.62rem] ${
          activeAction.isSubmitted ? "opacity-[50%] pointer-events-none" : null
        }`}
      >
        {/* Wrestler first */}
        <Wrestler
          opponent={fighter}
          activeWrestler={wrestler}
          handleWrestler={handleWrestler}
          nationality={fighter?.natinality_name}
          wrestlerColor={"bg-blue-700"}
        />
        {/* Button for changing player */}
        <div className="btn-container">
          <button className="btn-chnage" onClick={changeWrestler}>
            <img src={change} alt="change" />
          </button>
        </div>
        {/* Wrestler second */}
        <Wrestler
          opponent={opponent}
          activeWrestler={wrestler}
          handleWrestler={handleWrestler}
          nationality={opponent?.natinality_name}
          wrestlerColor={"bg-red-700"}
        />
      </div>
    </>
  );
}
