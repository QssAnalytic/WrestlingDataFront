import { fightInfosEndpoints } from "../../../services/api/endponits";
import useGetData from "../../../common/hooks/useGetData";

const useGetMatch = (id) => {
  // console.log('pathh at get match',fightInfosEndpoints.byId(Number(id)))
  return useGetData(`${fightInfosEndpoints.byId(Number(id))}`);
};

export { useGetMatch };
