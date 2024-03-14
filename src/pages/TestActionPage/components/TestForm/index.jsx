import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ActionFormSchema } from "../../types/index";
import TestActionTable from "../TestActionTable";
import { PlusCircle } from "lucide-react";
import useActionsStore from "../../../../services/state/actionStore";
import CreateAction from "../create";
import { ActionDetails } from "../ActionDetails";
import { RxUpdate } from "react-icons/rx";

export default function TestForm({ match }) {
  const { actionList } = useActionsStore();
  const form = useForm({ resolver: zodResolver(ActionFormSchema), mode: onchange });

  const addNewAction = () => {
    form.reset();
    form.setValue('minute', '')
    form.setValue('second', '')
  };

  return (
    <div className="test-form-container">
      <div className="add-new">
        <button onClick={addNewAction}>
          <RxUpdate className="text-green-500 hover:animate-spin" size={20} />
        </button>
      </div>
      <div className="form-inner bg-[#151B43] border border-[#30CD36] p-10 rounded">
        <ActionDetails match={match} />
        <CreateAction form={form} match={match} />
        <TestActionTable statistics={actionList} />
      </div>
    </div>
  );
}
