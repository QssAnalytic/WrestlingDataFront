import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as aId } from "uuid";

export const FormContext = createContext();
const FormContextProvider = (props) => {
  const { watch } = useForm();

  const [singleAction, setSingleAction] = useState({
    actionId: aId(),
    Succesful: watch("Succesful"),
    fighter: undefined,
    opponent: undefined,
    defense_reason: watch("defense_reason"),
    action: null,
    score: null,
    techniques: null,
    time: 0,
  });
  const [actionsBase, setActionsBase] = useState([singleAction]);


  const createNewAction = () => {
    const actionId = aId();
    setSingleAction({ actionId: actionId });
    setActionsBase((prevActions) => [...prevActions, { actionId: actionId }]);
  };

  const addAction = (id) => {
    setActionsBase((prevActions) => [
      ...prevActions.map((action) =>
        action.actionId === id ? { ...singleAction, isSubmitted: true } : action
      ),
    ]);
  };

  const editAction = (id) => {
    const updatedAction = actionsBase.find((action) => action.actionId === id);
    updatedAction.isSubmitted = false;
    setSingleAction(updatedAction);
  };

  return (
    <FormContext.Provider
      value={{
        addAction,
        actionsBase,
        singleAction,
        createNewAction,
        setSingleAction,
        editAction,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
