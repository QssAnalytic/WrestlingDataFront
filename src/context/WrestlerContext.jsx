import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { FormContext } from "./FormContext";

export const WrestlerContext = createContext();

const WrestlerContextProvider = (props) => {
  const [wrestler, setWrestler] = useState({
    // "T.Aliyev": true,
    // "E.Mammadov": false,
  });


  const handleWrestler = (wrestlerId) => {
    setWrestler((prevWrestlers) => ({
      [Object.keys(prevWrestlers).find(
        (wrestler) => wrestler !== wrestlerId
      )]: false,
      [wrestlerId]: true,
    }));
    // console.log("activeWrestlers", wrestler);
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
    <WrestlerContext.Provider
      value={{
        handleWrestler,
        changeWrestler,
        wrestler,
      }}
    >
      {props.children}
    </WrestlerContext.Provider>
  );
};

export default WrestlerContextProvider;
