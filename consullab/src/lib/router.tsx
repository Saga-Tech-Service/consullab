import { usePathname } from '@/i18n/routing'

export function useActiveLinkClass({
    targetPath,
    activeClass,
    inactiveClass,
}: {
    targetPath: string
    activeClass: string
    inactiveClass: string
}) {
    const pathname = usePathname()
    const isActive = pathname === targetPath || pathname.startsWith(`${targetPath}/`)
    return isActive ? activeClass : inactiveClass
}