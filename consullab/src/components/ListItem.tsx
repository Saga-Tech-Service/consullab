import {
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import React from 'react';
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/routing"

export const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
    return (
        <li>
            <Link href={href ?? ""} passHref legacyBehavior>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground  ",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none text-[#091622]">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </Link>
        </li>
    )
})
ListItem.displayName = "ListItem"