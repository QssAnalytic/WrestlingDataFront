import { FormControl, FormItem, FormLabel } from "../../../newcomponents/ui/form";
import { cn } from "../../../lib/utils";
import { Checkbox } from "../../../newcomponents/ui/checkbox";

export default function FormCheckbox({ field, name }) {
  return (
    <FormItem className="flex  text-white flex-col gap-4 border-none space-x-3 space-y-0 rounded-md p-4 shadow">
      <div className="space-y-1 leading-none self-center">
        <FormLabel>{name}</FormLabel>
      </div>
      <FormLabel className={cn("bg-[#1E264B] px-[10px] py-2 w-40 rounded-[54.44px]")}>
        <FormControl>
          <Checkbox
            className={cn(
              "bg-[#7A817A] border-none transition-all duration-200",
              field.value ? "translate-x-[100%] bg-[#0D7818]" : field?.value === undefined ? "" : "bg-[#D52B1E]",
            )}
            value={field.value}
            name={field.value === true ? "Yes" : ''}
            checked={field.value}
            onCheckedChange={field.onChange}
          />
        </FormControl>
      </FormLabel>
    </FormItem>
  );
}
