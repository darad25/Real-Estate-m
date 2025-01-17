"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils";

const CustomAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-start md:items-center justify-between py-4 px-6 font-medium lg:text-[20px] text-[18px] transition-all hover:no-underline [&[data-state=open]>svg]:rotate-180 text-left",
        className
      )}
      {...props}
    >
      <span className="mr-2">{children}</span>
      <ChevronDown
        className="h-8 w-8 shrink-0 transition-transform duration-200 text-white bg-black rounded-full p-1"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
CustomAccordionTrigger.displayName = "CustomAccordionTrigger";

export { CustomAccordionTrigger };

