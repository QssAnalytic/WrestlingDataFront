import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef(({ className, align = "left", sideOffset = 4, ...props }, ref) => (
  //  PopoverPrimitive.Portal has been removed for scroll problem in dialog
  <>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={"PopoverContent z-[99]"}
      {...props}
    />
  </>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
