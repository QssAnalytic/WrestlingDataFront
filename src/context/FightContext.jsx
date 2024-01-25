import { createContext, useState } from "react";

export const FightContext = createContext();

const FightContextProvider = (props) => {
  const [newFight, setNewFight] = useState({
    wrestling_type: "string",
    fight_date: "2024-01-23",
    location: "string",
    weight_category: 0,
    stage: "string",
    decision: "string",
    is_submitted: true,
    status: "string",
    oponent1_point: 0,
    oponent2_point: 0,
    level: "string",
    fight_name: "string",
    opponent_name: "string",
    winner_name: "string",
    tournament_name: "string",
    tournament_date: "2024-01-23",
  });

  const [selectOpen, setSelectOpen] = useState({
    nation1 : false,
    status : false,
    quality : false,
  });

  return (
    <FightContext.Provider
      value={{
        newFight,
        setNewFight,
        selectOpen,
        setSelectOpen
      }}
    >
      {props.children}
    </FightContext.Provider>
  );
};


export default FightContextProvider;
