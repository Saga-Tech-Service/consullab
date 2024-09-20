"use client"
import { usePathname } from "next/navigation";

interface Props {
    targetPath: string,
    activeClass: string,
    inactiveClass: string
}
const useActiveLinkClass = ({ activeClass, inactiveClass, targetPath }: Props) => {
    const pathname = usePathname();
    return pathname === targetPath ? activeClass : inactiveClass;
};

export { useActiveLinkClass };
