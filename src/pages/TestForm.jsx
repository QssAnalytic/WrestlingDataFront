import React, { useEffect } from "react";
import { cn } from "../lib/utils";
import { Button } from "../newcomponents/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "../newcomponents/ui/command";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../newcomponents/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../newcomponents/ui/popover";
import { ChevronDown, Circle } from "lucide-react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { formEndpoints } from "../services/api/endponits";
import { getData } from "../services/api/requests";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "../newcomponents/ui/use-toast";
import { Toaster } from "../newcomponents/ui/toaster";

export default function TestForm() {
  const ActionFormSchema = z.object({
    action_id: z.number({ required_error: "Please select action" }),
  });

  const { toast } = useToast();

  const form = useForm({ resolver: zodResolver(ActionFormSchema) , mode : onchange});

  const { data: actions } = useSWR(formEndpoints.actions, getData);

  // useEffect(()=>{
  //   handleErrors()
  // },[form.formState.errors])

  const handleErrors = () => {
    console.log('handle', form.formState.errors)
    if (form.formState.errors) {
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
      <div className="form-inner bg-[#151B43] border border-[#30CD36] rounded">
        <div className="form">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Selectbox 1st */}
              <FormField
                control={form.control}
                name="action_id"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2">
                    {form.formState.errors && (
                      <span className="text-red-500">{form.formState.errors?.action_id?.message}</span>
                    )}
                    <FormLabel className="text-white">Actions :</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn("w-[200px] justify-between", !field.value && "text-muted-foreground")}>
                            {field.value
                              ? actions.map((action) => (action.id === field.value ? action.name : null))
                              : "Select language"}
                            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0">
                        <Command>
                          <CommandInput placeholder="Search framework..." className="h-9 text-white" />
                          <CommandEmpty>No framework found.</CommandEmpty>
                          <CommandGroup>
                            {actions?.map((action) => (
                              <CommandItem
                                value={action.name}
                                key={action.name}
                                onSelect={() => {
                                  form.setValue("action_id", action.id);
                                }}>
                                {action.name}
                                <Circle
                                  className={cn(
                                    "ml-auto h-4 w-4",
                                    action.id === field.value ? "opacity-100" : "opacity-0",
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant="outline"
                onClick={() => {
                  handleErrors();
                }}>
                Submit
              </Button>
              <Toaster />
            </form>
          </Form>
        </div>
        <div className="form-data-table"></div>
      </div>
    </div>
  );
}
