import { createContext, useState } from "react";
import { v4 as aId } from "uuid";
import { deleteData, getData } from "../services/api/requests";
import toast from "react-hot-toast";

export const FormContext = createContext();
const FormContextProvider = (props) => {
  const action_number = aId();
  const defaultV = {
    action_number: action_number,
    successful: null,
    fighter_id: undefined,
    opponent_id: undefined,
    fight_id: undefined,
    defense_reason: null,
    action_name_id: null,
    score_id: undefined,
    technique_id: null,
    action_time_second: 0,
    video_link: "https://example.com/",
    action_submitted: false,
    flag : false,
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
    score: undefined,
    action_number: action_number,
    flag : false,
  };

  const [singleAction, setSingleAction] = useState({});
  const [response, setResponse] = useState({ ...defaultResponse });
  const [actionsBase, setActionsBase] = useState([defaultResponse]);
  const [editable, setEditable] = useState(false);
  const [deletedId, setDeletedId] = useState(0);
  const [fightInfos, setFightInfos] = useState([]);

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
        fight_id: response.fight_id,
        score_id: response.score,
        successful: response.successful,
        defense_reason: response.defense_reason,
        flag : response.flag
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
      const response = (await getData(`/fight-infos/${id}`))
        .fight_statistic;
      setActionsBase([...response]);
      console.log('load data id', response.status)
      return actionsBase;
    } catch (err) {
      toast('Wrong match ID. Try again.', {style : {background : 'red' , color : '#eaeaea'}})
      console.log("Oops! something went wrong", err.code);
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
        fightInfos,
        setFightInfos,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
