import { useParams } from "react-router-dom";
import TestForm from "./components/TestForm/index";
import TestHeader from "./components/header/index";
import { useEffect } from "react";
import { useGetMatch } from "./hooks/useGetMatch";
import useActionsStore from "../../services/state/actionStore";
export default function TestActionPage() {
  const { setMutate, setActions } = useActionsStore();
  const { fightId } = useParams();
  const { data, mutate } = useGetMatch(fightId);

  console.log('daaa', data)

  useEffect(() => {
    if (data?.fight_statistic) {
      setActions(data.fight_statistic);
      setMutate(mutate);
    }
  }, [data?.fight_statistic, mutate, setActions, setMutate]); // Look at this why do we use such a dependecies??

  return (
    <>
      <div className="test-action-page container flex flex-col gap-6">
        <TestHeader match={data} />
        <TestForm match={data} />
      </div>
    </>
  );
}
