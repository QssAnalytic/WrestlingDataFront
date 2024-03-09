import { useForm } from "react-hook-form";
import { Button } from "../../../../newcomponents/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ActionFormSchema } from "../../types/index";
import { useToast } from "../../../../newcomponents/ui/use-toast";

import FormInput from "../form-input";
import FormRadio from "../form-radio";
import FormSwitch from "../form-switch";
import FormSelectBox from "../form-select";
import { Form, FormField, FormLabel } from "../../../../newcomponents/ui/form";
import { cn } from "../../../../lib/utils";
import { Toaster } from "../../../../newcomponents/ui/toaster";
import useSWR from "swr";
import { formEndpoints, fightInfosEndpoints, statisticsEndpoints } from "../../../../services/api/endponits";
import { getData, newUpdateData, postDataNew } from "../../../../services/api/requests";
import useSWRMutation from "swr/mutation";
import { scores } from "../../../../static/data";
import useActionsStore from "../../../../services/state/actionStore";

export function UpdateForm({ match }) {
  const { setDialogOpen, editedAction: action, mutate } = useActionsStore();
  const { toast } = useToast();

  //   Data Fetching
  const { data: actions } = useSWR(formEndpoints.actions, getData);
  const { data: techniques } = useSWR(formEndpoints.techniques, getData);
  const { trigger: updateAction } = useSWRMutation(statisticsEndpoints.byId(action?.id), newUpdateData);

  const form = useForm({
    resolver: zodResolver(ActionFormSchema),
    values: {
      ...action,
      score_id: action?.score,
      minute: String(Math.floor(action.action_time_second / 60)),
      second: String(action.action_time_second % 60),
    },
  });

  const handleErrors = async () => {
    await form.trigger();
    if (Object.values(form.formState.errors).length > 0) {
      toast({
        variant: "destructive",
        title: "Empty field",
        description: Object.values(form.formState?.errors)[0]?.message,
      });
    }
  };

  const onSubmit = async (data) => {
    const { minute, second, ...rest } = data;
    try {
      const response = await updateAction({
        ...rest,
        action_time_second: Number(minute) * 60 + Number(second),
        fight_id: match?.id,
        video_link: "https://example.com/",
        action_number: "acdskajsd",
      });
      toast({
        title: "Succesful",
        description: "Action updated succesfully",
      });
      mutate();
      setDialogOpen();
      console.log("updtae modal", response);
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Update error",
        description: "Oops. Something went wrong. Pay attention to field which you changed",
      });
    }
  };

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
        <Button type="submit" onClick={handleErrors}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
