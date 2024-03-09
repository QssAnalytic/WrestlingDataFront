import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "../../../newcomponents/ui/command";
import { FormControl, FormItem, FormLabel } from "../../../newcomponents/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../../../newcomponents/ui/popover";
import { Button } from "../../../newcomponents/ui/button";
import { cn } from "../../../lib/utils";

import { ChevronDown, Circle } from "lucide-react";
import { ScrollArea } from "../../../newcomponents/ui/scroll-area";

export default function FormSelectBox({ field, id, datas, name, form }) {
  return (
    <FormItem className="flex items-center gap-4 justify-between w-full relative">
      <FormLabel className={cn("text-white basis-[19%]")}>{name} :</FormLabel>
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant="outline"
              role="combobox"
              className={cn(
                "w-full justify-between bg-[#080C2B] hover:bg-[#0F285B] text-[#BBBBBD] border-none hover:text-[#fff]",
                !field.value && "text-muted-foreground",
              )}>
              {field.value ? datas.map((item) => (item.id === field.value ? item.name : null)) : `Select ${name}`}
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className={cn("w-full p-0 border-none text-[#BBBBBD] z-[99]")}>
          <Command className={cn("border-none bg-[#253F74] w-[100%] text-[#BBBBBD]")}>
            <CommandInput placeholder="Search framework..." className="h-9 border-none py-4" />
            {/* <ScrollArea className='h-96 overflow-scroll'> */}
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup className={cn("overflow-scroll h-[200px]")}>
                {datas?.map((item) => (
                  <CommandItem
                    className={cn("text-[#BBBBBD] bg-[#253F74] hover:bg-[#121C34] cursor-pointer px-6 py-4")}
                    value={item.name}
                    key={item.name}
                    onSelect={() => {
                      form.setValue(`${id}`, item.id);
                    }}>
                    {item.name}
                    <Circle className={cn("ml-auto h-4 w-4", item.id === field.value ? "opacity-100" : "opacity-0")} />
                  </CommandItem>
                ))}
              </CommandGroup>
            {/* </ScrollArea> */}
          </Command>
        </PopoverContent>
      </Popover>
    </FormItem>
  );
}
