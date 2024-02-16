import { FormControl, FormItem, FormLabel, FormMessage } from "../../../newcomponents/ui/form";
import { Input } from "../../../newcomponents/ui/input";
import { cn } from "../../../lib/utils";

export default function HeaderInput({ name, field, disabled, placeholder }) {
  return (
    <FormItem>
      <FormLabel>{name}</FormLabel>
      <FormControl>
        <Input
          placeholder={placeholder || name}
          disabled={disabled}
          className={cn("bg-[#080C2B] border-none")}
          {...field}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
