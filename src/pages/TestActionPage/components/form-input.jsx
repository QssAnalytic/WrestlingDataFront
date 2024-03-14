import { FormControl, FormItem } from "../../../newcomponents/ui/form";
import { Input } from "../../../newcomponents/ui/input";
import { cn } from "../../../lib/utils";

export default function FormInput({ field }) {
  return (
    <FormItem className={cn("flex items-center gap-3 text-[#fff]")}>
      <FormControl>
        <Input
          placeholder="00"
          // removing arrows for type number input
          className={cn(
            "bg-[#414866] w-12 border-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
          )}
          type="number"
          maxLength={2}
          {...field}
        />
      </FormControl>
    </FormItem>
  );
}
