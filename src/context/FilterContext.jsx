import { createContext, useState } from "react";

export const FilterContext = createContext();
const FilterContextProvider = (props) => {
  const [filterParams, setFilterParams] = useState({
    tournament_id: undefined,
    place: undefined,
    wrestler_name: undefined,
    author: undefined,
    wrestling_type: undefined,
    weight_category : undefined,
    is_submitted: undefined,
    status: undefined,
    page: 1,
    limit: 200,
    date: undefined,
    check_author : undefined,
  });

  return (
    <FilterContext.Provider value={{ setFilterParams, filterParams }}>
      {props.children}
    </FilterContext.Provider>
  );
};
export default FilterContextProvider;
