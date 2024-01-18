import { createContext, useState } from "react";
import { v4 as aId } from "uuid";
import { deleteData, getData } from "../services/api/requests";

export const FormContext = createContext();
const FormContextProvider = (props) => {
  const action_number = aId();
  const defaultV = {
    action_number: action_number,
    successful: null,
    fighter_id: undefined,
    opponent_id: undefined,
    fight_id : undefined,
    defense_reason: null,
    action_name_id: null,
    score_id: undefined,
    technique_id: null,
    action_time_second: 0,
    video_link: "https://example.com/",
    author: undefined,
    action_submitted: false,
  };

  const defaultResponse = {
    id: undefined,
    action_name: undefined,
    technique: undefined,
    successful: undefined,
    defense_reason: undefined,
    fighter: undefined,
    opponent: undefined,
    fight_id: undefined,
    author: undefined,
    score: undefined,
    action_number: action_number,
  };

  const [singleAction, setSingleAction] = useState({});
  const [response, setResponse] = useState({...defaultResponse});
  const [actionsBase, setActionsBase] = useState([defaultResponse]);
  const [editable, setEditable] = useState(false);
  const [deletedId, setDeletedId] = useState(0);

  const createNewAction = () => {
    setSingleAction(defaultV);
    setActionsBase((prevActions) => [...prevActions, defaultResponse]);
    setEditable(false);
  };

  const addAction = (response) => {
    setActionsBase((prevActions) => [
      ...prevActions.map((action) =>
        action.action_number === response.action_number
          ? {
              ...response,
            }
          : action
      ),
    ]);
  };

  const editAction = async (id, fightId) => {
    console.log("edit parameters", [id, fightId]);
    try {
      const response = await getData(`/statistics/${id}/`);
      setSingleAction({
        id: response.id,
        action_name_id: response.action_name?.id,
        technique_id: response.technique?.id,
        action_number: response.action_number,
        action_time_second: response.action_time_second,
        fighter_id: response.fighter?.id,
        opponent_id: response.opponent?.id,
        fight_id : response.fight_id,
        score_id: response.score,
        successful: response.successful,
        defense_reason: response.defense_reason,
        author: response.author,
      });
      setEditable(true);
      console.log("editt", response);
    } catch (err) {
      console.log("edit err", err);
      setEditable(false);
    }
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

  const deleteAction = async (id) => {
    try {
      const response = await deleteData(`/statistics/${id}/`);
      setDeletedId(id);
      console.log("deleted action", response);
    } catch (err) {
      console.log("such an action does not exist in db");
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
        editable,
        setEditable,
        deleteAction,
        deletedId,
        response,
        setResponse,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
