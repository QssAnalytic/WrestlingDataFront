import { cn } from "../../../../lib/utils";
import { Button } from "../../../../newcomponents/ui/button";
import { Form, FormField, FormLabel } from "../../../../newcomponents/ui/form";
import useSWR from "swr";
import { fightInfosEndpoints, formEndpoints } from "../../../../services/api/endponits";
import { getData, postDataNew } from "../../../../services/api/requests";
import { useToast } from "../../../../newcomponents/ui/use-toast";
import { Toaster } from "../../../../newcomponents/ui/toaster";
import FormSelectBox from "../form-select";
import { scores } from "../../../../static/data";
import FormCheckbox from "../form-checkbox";
import FormSwitch from "../form-switch";
import FormInput from "../form-input";
import FormRadio from "../form-radio";
import useSWRMutation from "swr/mutation";
import useActionsStore from "../../../../services/state/actionStore";

export default function CreateAction({ form, match }) {
  const { toast } = useToast();
  const { mutate } = useActionsStore();

  //   Data Fetching
  const { data: actions } = useSWR(formEndpoints.actions, getData);
  const { data: techniques } = useSWR(formEndpoints.techniques, getData);
  const { trigger: postAction } = useSWRMutation(fightInfosEndpoints.statitics, postDataNew);

  // Create utils folder and add this fn for reusable
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

  // Post action to db
  const onSubmit = async (values) => {
    const { minute, second, ...rest } = values;
    console.log("values", { ...rest, time: Number(minute) * 60 + Number(second) });
    try {
      const res = await postAction({
        ...rest,
        action_time_second: Number(minute) * 60 + Number(second),
        fight_id: match?.id,
        video_link: "https://example.com/",
        action_number: "acdskajsd",
      });
      mutate();
      form.reset();
      console.log("res", res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex flex-col">
          {/* Selectbox 1st */}
          <div className="upper-form text-[#eaeaea]">
            <FormField
              control={form.control}
              name="fighter_id"
              render={({ field }) => <FormRadio field={field} form={form} match={match} />}
            />
          </div>
          <div className="bottom-form flex justify-between">
            <div className="form-left basis-[49%]">
              <FormField
                control={form.control}
                name="action_name_id"
                render={({ field }) => (
                  <FormSelectBox form={form} field={field} datas={actions} id={"action_name_id"} name={"Action"} />
                )}
              />
              {/* SelectBox 2nd for technique*/}
              <FormField
                control={form.control}
                name="technique_id"
                render={({ field }) => (
                  <FormSelectBox form={form} datas={techniques} id={"technique_id"} field={field} name={"Technique"} />
                )}
              />
              {/* Selectbox 3rd for Score */}
              <div className="flex items-center gap-4 mt-2">
                <FormField
                  control={form.control}
                  name="score_id"
                  render={({ field }) => (
                    <FormSelectBox form={form} datas={scores} id={"score_id"} field={field} name={"Score"} />
                  )}
                />
                <div className="flex items-center text-[#fff] gap-4">
                  <FormLabel>Time</FormLabel>
                  <div className="flex gap-3 py-3 px-5 bg-[#080C2B] items-center rounded">
                    <FormField
                      control={form.control}
                      name="minute"
                      render={({ field }) => <FormInput field={field} />}
                    />
                    <span className="text-[#fff]">:</span>
                    <FormField
                      control={form.control}
                      name="second"
                      render={({ field }) => <FormInput field={field} />}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-right basis-[49%]">
              <div className="form-checkboxes w-full flex items-center flex-col bg-[#080C2B]">
                <div className="checkboxes basis-[50%] flex">
                  <FormField
                    control={form.control}
                    name="successful"
                    render={({ field }) => <FormCheckbox field={field} name={"Successful"} />}
                  />
                  <FormField
                    control={form.control}
                    name="defense_reason"
                    render={({ field }) => <FormCheckbox field={field} name={"Defense Reason"} />}
                  />
                </div>
              </div>
              <div className="submit-form flex items-center justify-between w-full">
                <FormField
                  control={form.control}
                  name="flag"
                  render={({ field }) => <FormSwitch field={field} name={"Flag"} />}
                />
                <Button
                  type="submit"
                  variant="outline"
                  className={cn(
                    "bg-[#3D66B5]  text-[#C9D4EA] border-none rounded py-4 w-[200px] transition-all duration-300 hover:bg-[#4B7FE4] hover:text-[#fff]",
                  )}
                  onClick={() => {
                    handleErrors();
                  }}>
                  Add action
                </Button>
              </div>
              <Toaster />
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
