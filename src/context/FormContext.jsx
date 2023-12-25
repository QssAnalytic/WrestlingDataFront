import { createContext, useState } from "react";
import { v4 as aId } from "uuid";

export const FormContext = createContext();
const FormContextProvider = (props) => {
  const [singleAction, setSingleAction] = useState({
    actionId : aId(),
    Succesful : undefined,
    defense_reason : undefined,
    action : ''
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
        action.actionId === id ? {...singleAction, isSubmitted : true} : action
      )
    ]);
  };
  

  return (
    <FormContext.Provider
      value={{
        addAction,
        actionsBase,
        singleAction,
        createNewAction,
        setSingleAction,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
