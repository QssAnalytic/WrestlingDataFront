import { FormControl, FormItem } from "../../../newcomponents/ui/form";
import { Input } from "../../../newcomponents/ui/input";
import { cn } from "../../../lib/utils";

export default function FormInput({ field }) {
  return (
    <FormItem className={cn("flex items-center gap-3 text-[#fff]")}>
      <FormControl>
        <Input placeholder="00" className={cn("bg-[#414866] w-12 border-none text-center")} {...field} />
      </FormControl>
    </FormItem>
  );
}
