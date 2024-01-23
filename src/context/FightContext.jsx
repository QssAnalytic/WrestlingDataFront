import { createContext, useState } from "react";

export const FightContex = createContext();

const FightContextProvider = (props) => {
  const [newFight, setNewFight] = useState({});

  return (
    <FightContex.Provider
      value={{
        newFight,
        setNewFight,
      }}
    >
      {props.children}
    </FightContex.Provider>
  );
};
