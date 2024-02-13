import React from "react";
import { cn } from "../lib/utils";
import { Button } from "../newcomponents/ui/button";
import { Form, FormField, FormControl, FormItem, FormLabel } from "../newcomponents/ui/form";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { formEndpoints } from "../services/api/endponits";
import { getData } from "../services/api/requests";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "../newcomponents/ui/use-toast";
import { Toaster } from "../newcomponents/ui/toaster";
import FormSelectBox from "./TestActionPage/components/form-select";
import { scores } from "../static/data";
import FormCheckbox from "./TestActionPage/components/form-checkbox";
import FormSwitch from "./TestActionPage/components/form-switch";

export default function TestForm() {
  const ActionFormSchema = z.object({
    action_name_id: z.number({ required_error: "Please select action" }),
    technique_id: z.number({ required_error: "Please select technique" }),
    score_id: z.number({ required_error: "Please select score" }),
    succesful: z.boolean({ required_error: "Please select succesful field" }),
    defense_reason: z.boolean({ required_error: "Please select defense field" }),
    flag: z.boolean({ required_error: "Identify flag yes/no" }),
  });

  const { toast } = useToast();

  const form = useForm({ resolver: zodResolver(ActionFormSchema), mode: onchange });

  console.log("form", form);

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

  const onSubmit = (values) => console.log("submit values", values);

  return (
    <div className="test-form-container container">
      <div className="form-inner bg-[#151B43] border border-[#30CD36] p-10 rounded">
        <div className="form">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex justify-between">
              {/* Selectbox 1st */}
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
                <FormField
                  control={form.control}
                  name="score_id"
                  render={({ field }) => (
                    <FormSelectBox form={form} datas={scores} id={"score_id"} field={field} name={"Score"} />
                  )}
                />
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
            </form>
          </Form>
        </div>
        <div className="form-data-table"></div>
      </div>
    </div>
  );
}
