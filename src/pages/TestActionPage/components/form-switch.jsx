import { Switch } from "../../../newcomponents/ui/switch";
import { FormControl, FormItem, FormLabel } from "../../../newcomponents/ui/form";


export default function FormSwitch({field, name}) {
  return (
    <FormItem className="flex flex-row items-center gap-3 rounded-lg p-3 shadow-sm">
      <div className="space-y-0.5">
        <FormLabel className="text-white">{name} :</FormLabel>
      </div>
      <FormControl>
        <Switch
          checked={field.value}
          onCheckedChange={field.onChange}
          className={`${
            field.value === true ? "data-[state=checked]:bg-green-400" :
            field.value === undefined ? "data-[state=unchecked]:bg-[#1E264B]" :
            "data-[state=unchecked]:bg-red-500"
          }`}
        />
      </FormControl>
    </FormItem>
  );
}

