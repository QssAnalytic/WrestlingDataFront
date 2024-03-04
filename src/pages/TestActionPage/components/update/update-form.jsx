import { useForm } from "react-hook-form";
import { Button } from "../../../../newcomponents/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ActionFormSchema } from "../../types/index";
import FormInput from "../form-input";
import FormRadio from "../form-radio";
import FormSwitch from "../form-switch";
import FormSelectBox from "../form-select";
import FormCheckbox from "../form-checkbox";
import { Form, FormField, FormLabel } from "../../../../newcomponents/ui/form";
import { cn } from "../../../../lib/utils";
import { Toaster } from "../../../../newcomponents/ui/toaster";
import useSWR from "swr";
import { formEndpoints, fightInfosEndpoints } from "../../../../services/api/endponits";
import { getData, postDataNew } from "../../../../services/api/requests";
import useSWRMutation from "swr/mutation";
import { scores } from "../../../../static/data";

export function UpdateForm() {
  const form = useForm({ resolver: zodResolver(ActionFormSchema), mode: onchange });

  //   Data Fetching
  const { data: actions } = useSWR(formEndpoints.actions, getData);
  const { data: techniques } = useSWR(formEndpoints.techniques, getData);
  const { trigger: postAction } = useSWRMutation(fightInfosEndpoints.statitics, postDataNew);

  const onSubmit = (data) => console.log(data);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex flex-col">
        <div className="box-container flex justify-center items-center">
          <FormField
            control={form.control}
            name="action_name_id"
            render={({ field }) => (
              <FormSelectBox form={form} field={field} datas={actions} id={"action_name_id"} name={"Action"} />
            )}
          />
        </div>
        <div className="box-container flex justify-center items-center">
          <FormField
            control={form.control}
            name="technique_id"
            render={({ field }) => (
              <FormSelectBox form={form} field={field} datas={techniques} id={"technique_id"} name={"Technique"} />
            )}
          />
        </div>
      </form>
    </Form>
  );
}
