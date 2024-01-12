import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as aId } from "uuid";
import { getData } from "../services/api/requests";

export const FormContext = createContext();
const FormContextProvider = (props) => {
  const defaultV = {
    action_number: aId(),
    successful: null,
    fighter_id: undefined,
    opponent_id: undefined,
    defense_reason: null,
    action_name_id: null,
    score: null,
    technique_id: null,
    action_time_second: 0,
    video_second_begin: "2024-01-10T08:53:43.354000",
    video_second_end: "2024-01-10T08:53:43.354000",
    video_link: "https://example.com/",
    action_time: "string2",
  };

  const [singleAction, setSingleAction] = useState({});
  const [actionsBase, setActionsBase] = useState([singleAction]);

  const createNewAction = () => {
    const action_number = aId();
    setSingleAction({ action_number: action_number, ...defaultV });
    setActionsBase((prevActions) => [
      ...prevActions,
      { action_number: action_number },
    ]);
  };

  const addAction = (id) => {
    setActionsBase((prevActions) => [
      ...prevActions.map((action) =>
        action.action_number === id
          ? {
              ...singleAction,
              isSubmitted: true,
            }
          : action
      ),
    ]);
  };

  const editAction = (id) => {
    const updatedAction = actionsBase.find(
      (action) => action.action_number === id
    );
    updatedAction.isSubmitted = false;
    setSingleAction(updatedAction);
  };

  const loadData = async (id) => {
    try {
      const fightActions = (await getData(`/fight-infos/${id}`))
        .fight_statistic;
      setActionsBase((prevActions) => [...fightActions]);
      return actionsBase;
    } catch (err) {
      console.log("Oops! something went wrong");
    }
  };

  return (
    <FormContext.Provider
      value={{
        addAction,
        actionsBase,
        singleAction,
        createNewAction,
        setSingleAction,
        setActionsBase,
        editAction,
        loadData,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
