import useSWR from "swr";
import { getData } from "../../services/api/requests";

const useGetData = (path) => {
  const { data, mutate, ...swr } = useSWR(path, getData);
  console.log('data at hook', data)

  return {
    data : data || [],
    mutate,
    ...swr,
  };
};

export default useGetData;
