import React, { useContext, useState, useEffect } from "react";
import Wrestler from "../Wrestler";
import wrestlerImg from "../../assets/wrestler.png";
import otherWrestler from "../../assets/otherwrestler.png";
import change from "../../assets/change.svg";
import { FormContext } from "../../context/FormContext";
import { WrestlerContext } from "../../context/WrestlerContext";

export default function OpponentsInput({activeAction}) {
  const { singleAction, setSingleAction } = useContext(FormContext);
  const {wrestler, handleWrestler, changeWrestler} = useContext(WrestlerContext);

  useEffect(()=>{
    setSingleAction({
        ...singleAction,
        fighter : Object.keys(wrestler).find((wrest)=> wrestler[wrest] === true),
        opponent : Object.keys(wrestler).find((wrest)=> wrestler[wrest] === false),
    })

  },[wrestler])


  return (
    <>
      <div className={`wrestlers flex justify-between items-center gap-[5.62rem] ${activeAction.isSubmitted ? 'opacity-[50%] pointer-events-none' : null}`}>
        {/* Wrestler first */}
        <Wrestler
          id={"T.Aliyev"}
          activeWrestler={wrestler}
          handleWrestler={handleWrestler}
          wrestlerImg={wrestlerImg}
        />
        {/* Button for changing player */}
        <div className="btn-container">
          <button className="btn-chnage" onClick={changeWrestler}>
            <img src={change} alt="change" />
          </button>
        </div>
        {/* Wrestler second */}
        <Wrestler
          id={"E.Mammadov"}
          activeWrestler={wrestler}
          handleWrestler={handleWrestler}
          wrestlerImg={otherWrestler}
        />
      </div>
    </>
  );
}
