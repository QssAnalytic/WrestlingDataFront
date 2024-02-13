import { Switch } from "../../../newcomponents/ui/switch";
import { FormControl, FormItem, FormLabel } from "../../../newcomponents/ui/form";
import { cn } from "../../../lib/utils";


export default function FormSwitch({field, name}) {
  return (
    <FormItem className="flex flex-row items-center gap-3 rounded-lg p-3 shadow-sm">
      <div className="space-y-0.5">
        <FormLabel className={cn("text-white")}>{name}</FormLabel>
      </div>
      <FormControl>
        <Switch checked={field.value} onCheckedChange={field.onChange} />
      </FormControl>
    </FormItem>
  );
}
