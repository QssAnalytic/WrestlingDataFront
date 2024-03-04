import { fightInfosEndpoints } from "../../../services/api/endponits";
import useGetData from "../../../common/hooks/useGetData";

const useGetMatch = (id) => {
  return useGetData(`${fightInfosEndpoints.byId(Number(id))}`);
};

export { useGetMatch };
