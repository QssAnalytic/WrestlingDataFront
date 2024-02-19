import { createContext, useState } from "react";

export const TestFightContext = createContext();

const TestFightContextProvider = (props) => {
  const [statisticsBase, setStatiticsBase] = useState([]);

  return (
    <TestFightContext.Provider
      value={{
        setStatiticsBase,
        statisticsBase,
      }}>
      {props.children}
    </TestFightContext.Provider>
  );
};


export default TestFightContextProvider;