import { useParams } from "react-router-dom";
import TestForm from "../TestActionPage/components/TestForm/index";
import TestHeader from "../TestActionPage/components/TestHeader/index";
import useSWR from "swr";
import { fightInfosEndpoints } from "../../services/api/endponits";
import { getData } from "../../services/api/requests";
import { useContext, useEffect } from "react";
import { TestFightContext } from "../../context/TestFightContext";
import { useGetMatch } from "./hooks/useGetMatch";
export default function TestActionPage() {
  const { setStatiticsBase } = useContext(TestFightContext);
  const { fightId } = useParams();
  console.log('test action page', fightId)
  // const { data, mutate } = useSWR(fightId ? fightInfosEndpoints.byId(Number(fightId)) : null, getData);
  const { data, mutate } = useGetMatch(fightId);
  useEffect(() => {
    setStatiticsBase(data?.fight_statistic);
  }, []);
  console.log("match", data);
  return (
    <>
      <div className="test-action-page container flex flex-col gap-6">
        <TestHeader match={data} />
        <TestForm match={data} mutateMatch={mutate} />
      </div>
    </>
  );
}
