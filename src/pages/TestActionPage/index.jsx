import { useParams } from "react-router-dom";
import TestForm from "./components/TestForm/index";
import TestHeader from "./components/header/index";
import { useEffect } from "react";
import { useGetMatch } from "./hooks/useGetMatch";
import useActionsStore from "../../services/state/actionStore";
import { Loader2 } from "lucide-react";
export default function TestActionPage() {
  const { setMutate, setActions } = useActionsStore();
  const { fightId } = useParams();
  const { data, mutate, isLoading: loadMatch } = useGetMatch(fightId);

  console.log("daaa", data);

  useEffect(() => {
    if (data?.fight_statistic) {
      setActions(data.fight_statistic);
      setMutate(mutate);
    }
  }, [data?.fight_statistic, mutate, setActions, setMutate]); // Look at this why do we use such a dependecies??

  // Seperate Loader as component from that page

  return (
    <>
      {!loadMatch ? (
        <div className="test-action-page container flex flex-col gap-6">
          <TestHeader match={data} />
          <TestForm match={data} />
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          <Loader2 size={100} className="animate-spin text-white" />
        </div>
      )}
    </>
  );
}
