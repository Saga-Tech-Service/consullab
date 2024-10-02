"use client";
import React from "react";
import Image from "next/image";
import LogoHeader from "@public/assets/Logo Consullab.svg";
import Language from "@public/assets/portugal.svg";
import Link from "next/link";
import { FaBars as Icons } from "react-icons/fa";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ListItem } from "@/components/ListItem";
import { AiOutlinePhone } from "react-icons/ai";
import { VscMail } from "react-icons/vsc";
import Flag from "react-world-flags";
import { cn } from "@/lib/utils";
import { useActiveLinkClass } from "@/lib/router";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FiMenu } from "react-icons/fi";
import {
    DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioItem, DropdownMenuRadioGroup,
    DropdownMenuGroup, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub,
    DropdownMenuSubTrigger, DropdownMenuTrigger, DropdownMenuSubContent
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Menu: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
];

export function Header() {
    const homeLinkClass = useActiveLinkClass({
        targetPath: "/",
        activeClass:
            "border-b-4 border-[#CB935D] text-[#CB935D] hover:text-[#CB935D]",
        inactiveClass: "border-transparent",
    });

    const serviceLinkClass = useActiveLinkClass({
        targetPath: "/servico",
        activeClass:
            "border-b-4 border-[#CB935D] text-[#CB935D] hover:text-[#CB935D]",
        inactiveClass: "border-transparent",
    });

    const teamLinkClass = useActiveLinkClass({
        targetPath: "/equipa",
        activeClass:
            "border-b-4 border-[#CB935D] text-[#CB935D] hover:text-[#CB935D]",
        inactiveClass: "border-transparent",
    });

    const blogLinkClass = useActiveLinkClass({
        targetPath: "/blog",
        activeClass:
            "border-b-4 border-[#CB935D] text-[#CB935D] hover:text-[#CB935D]",
        inactiveClass: "border-transparent",
    });

    const aboutUsLinkClass = useActiveLinkClass({
        targetPath: "/sobre-nos",
        activeClass:
            "border-b-4 border-[#CB935D] text-[#CB935D] hover:text-[#CB935D]",
        inactiveClass: "border-transparent",
    });

    return (
        <header className="border-b border-gray-100 bg-white ">
            <div className="w-full bg-primaryConsullab">
                <div className="containerConssulab  flex items-center  justify-end h-10 gap-4 text-sm">
                    <div className="flex items-center justify-center gap-2">
                        <AiOutlinePhone className="text-yellow-500" />
                        <Link className="text-TonsCinza100 truncate" href={"tel:+244931931182"}>
                            + 244 931 931 182
                        </Link>
                        {/* <Flag code="AO" style={{ borderRadius: '99%', width: '20px', height: '20px' }} /> */}
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <VscMail className="text-yellow-500" />
                        <Link
                            className="text-TonsCinza100 truncate"
                            href={"mailto:geral@consullab.co.ao"}
                        >
                            geral@consullab.co.ao
                        </Link>
                    </div>
                </div>
            </div>

            <div className="containerConssulab  flex items-center  justify-between gap-4">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <Link href="/" passHref>
                        <Image src={LogoHeader} alt="Logo da Consullab" />
                    </Link>
                </h1>

                <NavigationMenu className="hidden lg:grid">
                    <NavigationMenuList>
                        <NavigationMenuItem
                            className={cn("uppercase hover:text-[#CB935D]", homeLinkClass)}
                        >
                            <NavigationMenuLink
                                href="/"
                                className={cn(
                                    navigationMenuTriggerStyle(),
                                    "hover:text-[#CB935D]"
                                )}
                            >
                                Início
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger
                                className={cn(
                                    "uppercase text-sm rounded-none hover:text-[#CB935D]",
                                    serviceLinkClass
                                )}
                            >
                                <NavigationMenuLink
                                    href="/servico"
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Serviços
                                </NavigationMenuLink>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/servico"
                                            >
                                                <div className="text-[#091622] mb-2 mt-4 text-lg font-medium">
                                                    Serviços
                                                </div>

                                                <p className="text-sm leading-tight text-[#8C8A97] ">
                                                    Primamos pelos objectivos de cada instituição.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>

                                    <div className="flex flex-col">
                                        <span className="text-[#8c8996] text-base font-semibold  leading-normal">
                                            NOSSOS SERVIÇOS
                                        </span>
                                        <br />
                                        <div className="">
                                            <ListItem
                                                href="/servico/realizacao-de-diagnosticos-institucionais"
                                                title="Realização de diagnosticos institucionais"
                                            />
                                            <ListItem
                                                href="/servico/consultoria-em-contratacao-publica"
                                                title="Consultoria em contratação pública"
                                            />
                                            <ListItem
                                                href="/servico/elaboracao-de-planos-estratetigicos"
                                                title="Elaboração de planos estratétigicos"
                                            />
                                            <ListItem
                                                href="/servico/consultoria-juridica-especializada"
                                                title="Consultoria jurídica especializada"
                                            />
                                        </div>
                                        <div className="">
                                            <ListItem
                                                href="/servico/elaboracao-de-normas"
                                                title="Elaboração de normas"
                                            />
                                            <ListItem
                                                href="/servico/installation"
                                                title="Formacoes-especializadas"
                                            />
                                            <ListItem
                                                href="/servico/consultoria-em-materia-de-recursos-humanos"
                                                title="Consultoria em matéria de recursos humanos"
                                            />
                                        </div>
                                    </div>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger
                                className={cn("uppercase text-sm", teamLinkClass)}
                            >
                                <NavigationMenuLink href="/equipa">Equipa</NavigationMenuLink>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/equipa"
                                            >
                                                <div className="text-[#091622] text-[32px] leading-[44.80px] mb-2 mt-4 text-lg font-medium">
                                                    Equipa
                                                </div>
                                                <p className="text-sm leading-tight text-[#8C8A97] ">
                                                    Organização multifuncional pronta para solucionar os
                                                    seu problema.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>

                                    <div className="flex flex-col">
                                        <span className="text-[#8c8996] text-base font-semibold  leading-normal">
                                            EQUIPA
                                        </span>
                                        <ListItem href="/equipa/#nossa-equipa" title="Equipa" />
                                        <ListItem href="/equipa/carreira" title="Carreira" />
                                    </div>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="sobre-nos"
                                className={cn(
                                    navigationMenuTriggerStyle(),
                                    aboutUsLinkClass,
                                    "hover:text-[#CB935D] uppercase"
                                )}
                            >
                                Sobre nós
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                className={cn(
                                    navigationMenuTriggerStyle(),
                                    "hover:text-[#CB935D] uppercase",
                                    blogLinkClass
                                )}
                                href="/blog"
                            >
                                BLOG
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Select defaultValue="pt">
                                <SelectTrigger className="w-[180px]" >
                                    <SelectValue placeholder="Selecione o idioma" />
                                </SelectTrigger>
                                <SelectContent >
                                    <SelectGroup>
                                        <SelectLabel
                                            className={cn("hover:text-[#CB935D] uppercase gap-2")}
                                        >
                                            Idioma
                                        </SelectLabel>
                                        <SelectItem
                                            aria-checked
                                            value="pt"
                                            className=" inline-flex gap-2 items-center"
                                        >
                                            <span className="text-[#091622] text-sm font-normal uppercase leading-[21px] flex items-center justify-center space-x-2  w-full ">
                                                <Image src={Language} alt={"idioma en"} />
                                                <b className="">Portugês</b>
                                            </span>
                                        </SelectItem>
                                        <SelectItem
                                            aria-checked
                                            value="en"
                                            className=" inline-flex gap-2 items-center"
                                        >
                                            <span className="text-[#091622] text-sm font-normal uppercase leading-[21px] flex items-center justify-center space-x-2  w-full ">
                                                <Image src={Language} alt={"idioma en"} />
                                                <b>Inglês</b>
                                            </span>
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu >
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="lg:hidden flex gap-2 items-center justify-center text-center text-[#091622] text-base font-semibold leading-normal" variant="outline">Menu <FiMenu /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                Profile
                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Billing
                                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Settings
                                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Keyboard shortcuts
                                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem>Email</DropdownMenuItem>
                                        <DropdownMenuItem>Message</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>More...</DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                            <DropdownMenuItem>
                                New Team
                                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>GitHub</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuItem disabled>API</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            Log out
                            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
