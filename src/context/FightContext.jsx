import { createContext, useState } from "react";
import toast from "react-hot-toast";
import { updateData } from "../services/api/requests";
import { fightInfosEndpoints } from "../services/api/endponits";
import { stateMatch } from "../models/model";

export const FightContext = createContext();

const FightContextProvider = (props) => {
  // Creating new Match in dataBase, during POST request this structure must be
  const [newFight, setNewFight] = useState({
    // wrestling_type: undefined,
    // location: undefined,
    // weight_category: undefined,
    // stage: undefined,
    // decision: undefined,
    // opponent1_nationality: undefined,
    // opponent2_nationality: undefined,
    // level: undefined,
    // opponent1: undefined,
    // opponent2: undefined,
    // tournament_name: undefined,
    // tournament_date: undefined,
  });

  // const [selectOpen, setSelectOpen] = useState({
  //   opponent1_nationality: false,
  //   opponent2_nationality: false,
  //   wrestling_type: false,
  //   opponent1: false,
  //   opponent2: false,
  //   status: false,
  //   decision: false,
  //   stage: false,
  //   quality: false,
  //   level: false,
  //   order: false,
  // });

  // When update Match we use that data structure during PUT request
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
    source_type: undefined, //String
    fighter_id: undefined, //Number
    oponet_id: undefined, //Number
    winner_id: undefined, //Number
    tournament_id: undefined, //Number
    oponent1_point: undefined, //Number
    oponent2_point: undefined, //Number
    fight_date: undefined,
    author: undefined, //String
  });

  const [stateFight, setStateFight] = useState(stateMatch);

  const updateMatch = async (openEditMatch, data, id) => {
    try {
      const response = await updateData(
        fightInfosEndpoints.updateFight(id),
        data
      );
      toast("Fight succesfully updated", {
        style: { background: "green", color: "#eaeaea" },
      });
      setFightInfo({});
      console.log("updated match", response);
    } catch (err) {
      toast("Please fill correctly", {
        style: { background: "red", color: "#eaeaea" },
      });
      openEditMatch(true);
      console.log("err update fight", err);
    }
  };

  return (
    <FightContext.Provider
      value={{
        newFight,
        setNewFight,
        // selectOpen,
        // setSelectOpen,
        fightInfo,
        setFightInfo,
        updateMatch,
        stateFight,
        setStateFight
      }}
    >
      {props.children}
    </FightContext.Provider>
  );
};

export default FightContextProvider;
