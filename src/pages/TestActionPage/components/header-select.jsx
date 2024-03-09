import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../newcomponents/ui/select";
import { FormControl, FormItem, FormMessage } from "../../../newcomponents/ui/form";
import { cn } from "../../../lib/utils";

export default function HeaderSelect({ datas, field}) {
  console.log("header select", field.value);

  return (
    <FormItem>
      <Select  onValueChange={field.onChange} defaultValue={field.value} {...field}>
        <FormControl>
          <SelectTrigger className={'bg-[#080C2B] text-white border-none'}>
            <SelectValue placeholder="Select Order" />
          </SelectTrigger>
        </FormControl>
        <SelectContent className={'bg-[#253F74] text-white border-none'}>
          {datas?.map((item, idx) => (
            <SelectItem key={idx} value={item.data} className={'cursor-pointer'}>
              {item.data.charAt(0).toUpperCase() + item.data.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
}
