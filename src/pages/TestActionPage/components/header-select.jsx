import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../newcomponents/ui/select";
import { FormControl, FormItem, FormMessage } from "../../../newcomponents/ui/form";
import { cn } from "../../../lib/utils";

export default function HeaderSelect({ datas, field}) {
  console.log("header select", field.value);

  return (
    <FormItem>
      <Select onValueChange={field.onChange} defaultValue={field.value} className={cn("bg-[#080C2B] border-none")} {...field}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select Order" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {datas?.map((item, idx) => (
            <SelectItem key={idx} value={item.data}>
              {item.data.charAt(0).toUpperCase() + item.data.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
}
