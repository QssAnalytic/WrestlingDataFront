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
    wrestling_type: false,
    opponent1: false,
    opponent2: false,
    status: false,
    decision: false,
    stage: false,
    quality: false,
    level: false,
  });

  const [fightInfo, setFightInfo] = useState({
    level: undefined, // String
    location: undefined, //String
    wrestling_type: undefined, // String
    weight_category: undefined, // Number
    status: undefined, // String
    stage: undefined, // String
    decision: undefined, // String
    submited_date: undefined, //Date
    checked_date: undefined, //Date
    created_date: undefined, //Date
    source_type : undefined, //String
    fighter_id: undefined, //Number
    oponet_id: undefined, //Number
    winner_id: undefined, //Number
    tournament_id: undefined, //Number
    oponent1_point : undefined, //Number
    oponent2_point : undefined, //Number
    fight_date : undefined,
    author : undefined, //String
  });
  

  return (
    <FightContext.Provider
      value={{
        newFight,
        setNewFight,
        selectOpen,
        setSelectOpen,
        fightInfo,
        setFightInfo,
      }}
    >
      {props.children}
    </FightContext.Provider>
  );
};

export default FightContextProvider;
