import { useForm } from "react-hook-form";
import { Button } from "../../../../newcomponents/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ActionFormSchema } from "../../types/index";
import FormInput from "../form-input";
import FormRadio from "../form-radio";
import FormSwitch from "../form-switch";
import FormSelectBox from "../form-select";
import { Form, FormField, FormLabel } from "../../../../newcomponents/ui/form";
import { cn } from "../../../../lib/utils";
import { Toaster } from "../../../../newcomponents/ui/toaster";
import useSWR from "swr";
import { formEndpoints, fightInfosEndpoints } from "../../../../services/api/endponits";
import { getData, postDataNew } from "../../../../services/api/requests";
import useSWRMutation from "swr/mutation";
import { scores } from "../../../../static/data";
import useActionsStore from "../../../../services/state/actionStore";

export function UpdateForm({ match }) {
  const action = useActionsStore((state) => state.editedAction);

  //   Data Fetching
  const { data: actions } = useSWR(formEndpoints.actions, getData);
  const { data: techniques } = useSWR(formEndpoints.techniques, getData);
  const { trigger: postAction } = useSWRMutation(fightInfosEndpoints.statitics, postDataNew);

  const form = useForm({ resolver: zodResolver(ActionFormSchema), values: { ...action } });


  console.log('valueees in update', form.getValues())

  const onSubmit = (data) => console.log("updateee", data);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-1">
        {/* Fighter Inpur */}
        <div className="box-container flex gap-4 justify-center items-center">
          <div className="fighter flex flex-col gap-4 items-center">
            <FormLabel>Fighter</FormLabel>
            <FormField
              control={form.control}
              name="fighter_id"
              render={({ field }) => <FormRadio field={field} form={form} match={match} />}
            />
          </div>
          <div className="flex flex-col items-center gap-2 text-[#fff]">
            <FormLabel>Time</FormLabel>
            <div className="flex gap-3 py-3 px-5 bg-[#080C2B] items-center rounded">
              <FormField control={form.control} name="minute" render={({ field }) => <FormInput field={field} />} />
              <span className="text-[#fff]">:</span>
              <FormField control={form.control} name="second" render={({ field }) => <FormInput field={field} />} />
            </div>
          </div>
        </div>
        {/* Action select */}
        <div className="box-container flex justify-center items-center">
          <FormField
            control={form.control}
            name="action_name_id"
            render={({ field }) => (
              <FormSelectBox form={form} field={field} datas={actions} id={"action_name_id"} name={"Action"} />
            )}
          />
        </div>
        {/* Technique select */}
        <div className="box-container flex justify-center items-center">
          <FormField
            control={form.control}
            name="technique_id"
            render={({ field }) => (
              <FormSelectBox form={form} field={field} datas={techniques} id={"technique_id"} name={"Technique"} />
            )}
          />
        </div>
        {/* Score select */}
        <div className="box-container flex justify-center items-center">
          <FormField
            control={form.control}
            name="score_id"
            render={({ field }) => (
              <FormSelectBox form={form} field={field} datas={scores} id={"score_id"} name={"Score"} />
            )}
          />
        </div>
        {/* Checkboxes in edit for succesful, defense_reason, flag */}
        <div className="box-container flex justify-center items-center">
          <FormField
            control={form.control}
            name="flag"
            render={({ field }) => <FormSwitch field={field} name={"Flag"} />}
          />
          <FormField
            control={form.control}
            name="successful"
            render={({ field }) => <FormSwitch field={field} name={"Succesful"} />}
          />
          <FormField
            control={form.control}
            name="defense_reason"
            render={({ field }) => <FormSwitch field={field} name={"Defense Reason"} />}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
