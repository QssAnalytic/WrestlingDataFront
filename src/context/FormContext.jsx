import { createContext, useState } from "react";
import { v4 as aId } from "uuid";

export const FormContext = createContext();
const FormContextProvider = (props) => {
  const [singleAction, setSingleAction] = useState({});
  const [actionsBase, setActionsBase] = useState([]);

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
