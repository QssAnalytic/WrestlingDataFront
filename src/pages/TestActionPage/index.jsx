import { useParams } from "react-router-dom";
import TestForm from "../TestActionPage/components/TestForm/index";
import TestHeader from "../TestActionPage/components/TestHeader/index";
import useSWR from "swr";
import { fightInfosEndpoints } from "../../services/api/endponits";
import { getData } from "../../services/api/requests";
export default function TestActionPage() {
  const { fightId } = useParams();
  const { data: match } = useSWR(fightId ? fightInfosEndpoints.byId(Number(fightId)) : null, getData);
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
