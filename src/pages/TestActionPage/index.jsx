import { useParams } from "react-router-dom";
import TestForm from "../TestActionPage/components/TestForm/index";
import TestHeader from "../TestActionPage/components/TestHeader/index";
import useSWR from "swr";
import { fightInfosEndpoints } from "../../services/api/endponits";
import { getData } from "../../services/api/requests";
import { useContext, useEffect } from "react";
import { TestFightContext } from "../../context/TestFightContext";
export default function TestActionPage() {
  const { setStatiticsBase } = useContext(TestFightContext);
  const { fightId } = useParams();
  const { data: match } = useSWR(fightId ? fightInfosEndpoints.byId(Number(fightId)) : null, getData);

  useEffect(() => {
    setStatiticsBase(match?.fight_statistic);
  }, []);
  console.log("match", match);

  return (
    <>
      <div className="test-action-page container flex flex-col gap-6">
        <TestHeader match={match} />
        <TestForm match={match} />
      </div>
    </>
  );
}
