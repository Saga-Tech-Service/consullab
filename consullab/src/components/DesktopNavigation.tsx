"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const DesktopNavigation: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    const ListItem = React.forwardRef<
        React.ElementRef<"a">,
        React.ComponentPropsWithoutRef<"a">
    >(({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            className
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {children}
                        </p>
                    </a>
                </NavigationMenuLink>
            </li>
        );
    });
    ListItem.displayName = "ListItem";

    return (
        <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={cn(
                                navigationMenuTriggerStyle(),
                                "hover:text-[#CB935D] uppercase",
                                isActive("/") && "text-[#CB935D] font-semibold"
                            )}
                        >
                            Início
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger
                        className={cn(
                            "uppercase text-sm rounded-none hover:text-[#CB935D]",
                            isActive("/servico") && "text-[#CB935D] font-semibold"
                        )}
                    >
                        Serviços
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute left-0 right-0 top-full w-full">
                        <div className="w-full p-6 md:container md:mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            <div className="space-y-3">
                                <h4 className="text-lg font-medium leading-none">Serviços</h4>
                                <p className="text-sm text-muted-foreground">
                                    Primamos pelos objectivos de cada instituição.
                                </p>
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-sm font-medium leading-none text-muted-foreground">
                                    NOSSOS SERVIÇOS
                                </h4>
                                <ul className="space-y-2">
                                    <ListItem
                                        href="/servico/realizacao-de-diagnosticos-institucionais"
                                        title="Realização de diagnósticos institucionais"
                                    />
                                    <ListItem
                                        href="/servico/consultoria-em-contratacao-publica"
                                        title="Consultoria em contratação pública"
                                    />
                                    <ListItem
                                        href="/servico/elaboracao-de-planos-estratetigicos"
                                        title="Elaboração de planos estratégicos"
                                    />
                                    <ListItem
                                        href="/servico/consultoria-juridica-especializada"
                                        title="Consultoria jurídica especializada"
                                    />
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-sm font-medium leading-none text-muted-foreground">
                                    MAIS SERVIÇOS
                                </h4>
                                <ul className="space-y-2">
                                    <ListItem
                                        href="/servico/elaboracao-de-normas"
                                        title="Elaboração de normas"
                                    />
                                    <ListItem
                                        href="/servico/Formacoes-especializadas"
                                        title="Formações especializadas"
                                    />
                                    <ListItem
                                        href="/servico/consultoria-em-materia-de-recursos-humanos"
                                        title="Consultoria em matéria de recursos humanos"
                                    />
                                </ul>
                            </div>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger
                        className={cn(
                            "uppercase text-sm",
                            isActive("/equipa") && "text-[#CB935D] font-semibold"
                        )}
                    >
                        Equipa
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute left-0 right-0 top-full w-full">
                        <div className="w-full p-6 md:container md:mx-auto grid gap-6 md:grid-cols-2">
                            <div className="space-y-3">
                                <h4 className="text-lg font-medium leading-none">Equipa</h4>
                                <p className="text-sm text-muted-foreground">
                                    Organização multifuncional pronta para solucionar o seu
                                    problema.
                                </p>
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-sm font-medium leading-none text-muted-foreground">
                                    EQUIPA
                                </h4>
                                <ul className="space-y-2">
                                    <ListItem href="/equipa/#nossa-equipa" title="Nossa Equipa" />
                                    <ListItem href="/equipa/carreira" title="Carreira" />
                                </ul>
                            </div>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/sobre-nos" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={cn(
                                navigationMenuTriggerStyle(),
                                "hover:text-[#CB935D] uppercase",
                                isActive("/sobre-nos") && "text-[#CB935D] font-semibold"
                            )}
                        >
                            Sobre nós
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/blog" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={cn(
                                navigationMenuTriggerStyle(),
                                "hover:text-[#CB935D] uppercase",
                                isActive("/blog") && "text-[#CB935D] font-semibold"
                            )}
                        >
                            Blog
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Select
                        onValueChange={(value) =>
                            console.log(`Idioma alterado para: ${value}`)
                        }
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Selecione o idioma" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel className="hover:text-[#CB935D] uppercase">
                                    Idioma
                                </SelectLabel>
                                <SelectItem
                                    value="pt"
                                    className="inline-flex gap-2 items-center"
                                >
                                    <span className="text-[#091622] text-sm font-normal uppercase leading-[21px] flex items-center justify-center space-x-2 w-full">
                                        <Image
                                            src="/path-to-your-language-icon.png"
                                            alt="Português"
                                            width={20}
                                            height={20}
                                        />
                                        <b>Português</b>
                                    </span>
                                </SelectItem>
                                <SelectItem
                                    value="en"
                                    className="inline-flex gap-2 items-center"
                                >
                                    <span className="text-[#091622] text-sm font-normal uppercase leading-[21px] flex items-center justify-center space-x-2 w-full">
                                        <Image
                                            src="/path-to-your-language-icon.png"
                                            alt="English"
                                            width={20}
                                            height={20}
                                        />
                                        <b>Inglês</b>
                                    </span>
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default DesktopNavigation;
