import { cn } from "@/lib/utils";
import React from "react";

interface ConsultingNumberProps extends React.ComponentPropsWithoutRef<"div"> {
}
const ConsultingNumber = React.forwardRef<
    React.ElementRef<"div">,
    ConsultingNumberProps
>(({ className, children, ...props }, ref) => {
    return (
        <div {...props} ref={ref} className={cn(className)}>
            {children}
        </div>
    )
})
ConsultingNumber.displayName = "ConsultingNumber"

interface ConsultingNumberTitleProps extends React.ComponentPropsWithoutRef<"div"> {
}

const ConsultingNumberTitle = React.forwardRef<
    React.ElementRef<"span">,
    ConsultingNumberTitleProps
>(({ className, title, ...props }, ref) => {
    return (
        <span ref={ref} {...props} className={cn("font-montserrat", className)}>
            {title}
        </span>
    );
});
ConsultingNumberTitle.displayName = "ConsultingNumberContentTitle"


interface ConsultingNumberContentProps extends React.ComponentPropsWithoutRef<"div"> {
}
const ConsultingNumberContent = React.forwardRef<
    React.ElementRef<"div">,
    ConsultingNumberContentProps
>(({ className, children, ...props }, ref) => {
    return (
        <div ref={ref} className={cn(className)} {...props}>
            {children}
        </div>
    )
})
ConsultingNumberContent.displayName = "ConsultingNumberContent"


interface ConsultingNumberContentTitleProps extends React.ComponentPropsWithoutRef<"div"> {
}

const ConsultingNumberContentTitle = React.forwardRef<
    React.ElementRef<"span">,
    ConsultingNumberContentTitleProps
>(({ className, title, ...props }, ref) => {
    return (
        <span ref={ref} {...props} className={cn("font-montserrat", className)}>
            {title}
        </span>
    );
});
ConsultingNumberContentTitle.displayName = "ConsultingNumberContentTitle"


interface ConsultingNumberContentDescriptionProps extends React.ComponentPropsWithoutRef<"div"> {
}
const ConsultingNumberContentDescription = React.forwardRef<
    React.ElementRef<"p">,
    ConsultingNumberContentDescriptionProps
>(({ className, content, ...props }, ref) => {
    return (
        <p ref={ref} {...props} className={cn("font-inter", className)}>
            {content}
        </p>
    );
});

ConsultingNumberContentDescription.displayName = "ConsultingNumberContentDescription"

export {
    ConsultingNumber,
    ConsultingNumberTitle,
    ConsultingNumberContent,
    ConsultingNumberContentTitle,
    ConsultingNumberContentDescription
}

