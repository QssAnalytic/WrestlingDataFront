import React from "react";
import { cn } from "../../../../lib/utils";
import { Button } from "../../../../newcomponents/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../../newcomponents/ui/form";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { formEndpoints } from "../../../../services/api/endponits";
import { getData } from "../../../../services/api/requests";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "../../../../newcomponents/ui/use-toast";
import { Toaster } from "../../../../newcomponents/ui/toaster";
import FormSelectBox from "../form-select";
import { scores } from "../../../../static/data";
import FormCheckbox from "../form-checkbox";
import FormSwitch from "../form-switch";
import FormInput from "../form-input";
import { RadioGroup, RadioGroupItem } from "../../../../newcomponents/ui/radio-group";

export default function TestForm() {
  const ActionFormSchema = z.object({
    action_name_id: z.number({ required_error: "Please select action" }),
    technique_id: z.number({ required_error: "Please select technique" }),
    score_id: z.number({ required_error: "Please select score" }),
    succesful: z.boolean({ required_error: "Please select succesful field" }),
    defense_reason: z.boolean({ required_error: "Please select defense field" }),
    flag: z.boolean({ required_error: "Identify flag yes/no" }),
    minute: z.string({ required_error: "Daxil ele minute" }),
    second: z.string({ required_error: "Daxil ele second" }),
    fighter_id: z.number({ required_error: "Select Fighter for action" }),
  });

  const { toast } = useToast();

  const form = useForm({ resolver: zodResolver(ActionFormSchema), mode: onchange });

  const time = Number(form.watch("minute")) * 60 + Number(form.watch("second"));

  const { data: actions } = useSWR(formEndpoints.actions, getData);
  const { data: techniques } = useSWR(formEndpoints.techniques, getData);

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

  const onSubmit = (values) => {
    const { minute, second, ...rest } = values;
    console.log("values", { ...rest, time: Number(minute) * 60 + Number(second) });
  };

  return (
    <div className="test-form-container">
      <div className="form-inner bg-[#151B43] border border-[#30CD36] p-10 rounded">
        <div className="form">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex flex-col">
              {/* Selectbox 1st */}
              <div className="upper-form text-[#eaeaea]">
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex items-center justify-center">
                          <FormItem className="flex flex-col items-center gap-3 space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="all" className={cn("w-12 h-12 rounded bg-[#243562]")} name={'salam'} />
                            </FormControl>
                            <FormLabel className="font-normal">Tamerlan Aliyev</FormLabel>
                          </FormItem>
                          <FormItem className="flex flex-col items-center gap-3 space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="mentions" className={cn("w-12 h-12 rounded bg-[#243562]")} name={'ajajaj'} />
                            </FormControl>
                            <FormLabel className="font-normal">Eltun Mammadov</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
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
                      <FormSelectBox
                        form={form}
                        datas={techniques}
                        id={"technique_id"}
                        field={field}
                        name={"Technique"}
                      />
                    )}
                  />
                  {/* Selectbox 3rd for Score */}
                  <div className="flex items-center">
                    <FormField
                      control={form.control}
                      name="score_id"
                      render={({ field }) => (
                        <FormSelectBox form={form} datas={scores} id={"score_id"} field={field} name={"Score"} />
                      )}
                    />
                    <div className="flex items-center text-[#fff] gap-4">
                      <FormLabel>Time :</FormLabel>
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
                        name="succesful"
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
        <div className="form-data-table"></div>
      </div>
    </div>
  );
}
