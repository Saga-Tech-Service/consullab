import { cn } from "@/lib/utils";
import React from "react";

interface SeparatorProps extends React.ComponentPropsWithoutRef<"div"> {
}
export const Separator = React.forwardRef<
    React.ElementRef<"div">,
    SeparatorProps
>(({ className, children, ...props }, ref) => {
    return (
        <div {...props} ref={ref}
            className={cn("w-[336px] h-[0px] border border-[#e0dfe6]", className)} />
    )
})
Separator.displayName = "Separator"
