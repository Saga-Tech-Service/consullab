"use client"
import typeReact, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { FiMenu } from "react-icons/fi"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

const MobileNavigation: React.FC = () => {
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const pathname = usePathname()

    const closeSheet = () => setOpen(false)

    const handleNavigation = (href: string) => {
        router.push(href)
        closeSheet()
    }

    const isActive = (path: string) => pathname === path

    const isActiveParent = (path: string) => pathname.startsWith(path)

    const renderNavItem = (label: string, href: string, isParent = false) => {
        const active = isParent ? isActiveParent(href) : isActive(href)
        return (
            <div className={cn(
                "relative flex items-center",
                active && "before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#CB935D]"
            )}>
                <Button
                    variant="ghost"
                    className={cn(
                        "justify-start pl-4 w-full",
                        active ? "text-[#CB935D] font-semibold" : "text-[#091622]"
                    )}
                    onClick={() => handleNavigation(href)}
                >
                    {label}
                </Button>
            </div>
        )
    }

    const renderSubItem = (label: string, href: string) => {
        const active = isActive(href)
        return (
            <div className={cn(
                "relative flex items-center",
                active && "before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#CB935D]"
            )}>
                <Button
                    variant="link"
                    className={cn(
                        "justify-start pl-8 w-full",
                        active ? "text-[#CB935D] font-semibold" : "text-[#8C8A97]"
                    )}
                    onClick={() => handleNavigation(href)}
                >
                    {label}
                </Button>
            </div>
        )
    }

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button className="md:hidden flex flex-row gap-x-2" size={"sm"} variant="ghost" >
                    Menu
                    <FiMenu className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0 bg-white">
                <nav className="flex flex-col space-y-1 py-4">
                    {renderNavItem('Início', '/')}
                    <div className="flex flex-col">
                        {renderNavItem('Serviços', '/servico', true)}
                        {isActiveParent('/servico') && (
                            <div className="ml-4 flex flex-col space-y-1 mt-1">
                                {renderSubItem('Realização de diagnósticos institucionais', '/servico/realizacao-de-diagnosticos-institucionais')}
                                {renderSubItem('Consultoria em contratação pública', '/servico/consultoria-em-contratacao-publica')}
                                {renderSubItem('Elaboração de planos estratégicos', '/servico/elaboracao-de-planos-estratetigicos')}
                                {renderSubItem('Consultoria jurídica especializada', '/servico/consultoria-juridica-especializada')}
                                {renderSubItem('Elaboração de normas', '/servico/elaboracao-de-normas')}
                                {renderSubItem('Formações especializadas', '/servico/Formacoes-especializadas')}
                                {renderSubItem('Consultoria em matéria de recursos humanos', '/servico/consultoria-em-materia-de-recursos-humanos')}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col">
                        {renderNavItem('Equipa', '/equipa', true)}
                        {isActiveParent('/equipa') && (
                            <div className="ml-4 flex flex-col space-y-1 mt-1">
                                {renderSubItem('Nossa Equipa', '/equipa/#nossa-equipa')}
                                {renderSubItem('Carreira', '/equipa/carreira')}
                            </div>
                        )}
                    </div>
                    {renderNavItem('Sobre nós', '/sobre-nos')}
                    {renderNavItem('Blog', '/blog')}
                    <div className="px-4 mt-4">
                        <Select onValueChange={(value) => console.log(`Idioma alterado para: ${value}`)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Selecione o idioma" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel className="hover:text-[#CB935D] uppercase">
                                        Idioma
                                    </SelectLabel>
                                    <SelectItem value="pt" className="inline-flex gap-2 items-center">
                                        <span className="text-[#091622] text-sm font-normal uppercase leading-[21px] flex items-center justify-center space-x-2 w-full">
                                            <Image src="/path-to-your-language-icon.png" alt="Português" width={20} height={20} />
                                            <b>Português</b>
                                        </span>
                                    </SelectItem>
                                    <SelectItem value="en" className="inline-flex gap-2 items-center">
                                        <span className="text-[#091622] text-sm font-normal uppercase leading-[21px] flex items-center justify-center space-x-2 w-full">
                                            <Image src="/path-to-your-language-icon.png" alt="English" width={20} height={20} />
                                            <b>Inglês</b>
                                        </span>
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNavigation