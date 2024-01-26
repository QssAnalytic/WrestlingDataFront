import { createContext, useState } from "react";

export const FightContext = createContext();

const FightContextProvider = (props) => {
  const [newFight, setNewFight] = useState({
    wrestling_type: undefined,
    location: undefined,
    weight_category: undefined,
    stage: undefined,
    decision: undefined,
    opponent1_nationality: undefined,
    opponent2_nationality: undefined,
    level: undefined,
    opponent1: undefined,
    opponent2: undefined,
    tournament_name: undefined,
    tournament_date: undefined,
  });

  const [selectOpen, setSelectOpen] = useState({
    opponent1_nationality: false,
    opponent2_nationality: false,
    wrestling_type : false,
    opponent1: false,
    opponent2: false,
    status: false,
    decision: false,
    stage : false,
    quality: false,
    level: false,
  });

  return (
    <FightContext.Provider
      value={{
        newFight,
        setNewFight,
        selectOpen,
        setSelectOpen,
      }}
    >
      {props.children}
    </FightContext.Provider>
  );
};

export default FightContextProvider;
