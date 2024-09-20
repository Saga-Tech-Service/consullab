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
        targetPath: "/equipa",
        activeClass:
            "border-b-4 border-[#CB935D] text-[#CB935D] hover:text-[#CB935D]",
        inactiveClass: "border-transparent",
    });

    const aboutUsLinkClass = useActiveLinkClass({
        targetPath: "/equipa",
        activeClass:
            "border-b-4 border-[#CB935D] text-[#CB935D] hover:text-[#CB935D]",
        inactiveClass: "border-transparent",
    });

    return (
        <header className="border-b border-gray-100 bg-white ">
            <div className="w-full bg-primaryConsullab">
                <div className="w-full  mx-auto flex items-center justify-end max-w-max-width-consullab h-10 py-6 gap-4">
                    <div className="flex items-center justify-center gap-2">
                        <AiOutlinePhone className="text-yellow-500" />
                        <Link className="text-TonsCinza100" href={"tel:+244931931182"}>
                            + 244 931 931 182
                        </Link>
                        {/* <Flag code="AO" style={{ borderRadius: '99%', width: '20px', height: '20px' }} /> */}
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <VscMail className="text-yellow-500" />
                        <Link
                            className="text-TonsCinza100"
                            href={"mailto:geral@consullab.co.ao"}
                        >
                            geral@consullab.co.ao
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mx-auto flex items-center justify-between max-w-max-width-consullab py-6">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <Link href="/" passHref>
                        <Image src={LogoHeader} alt="Logo da Consullab" />
                    </Link>
                </h1>

                <NavigationMenu>
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

                                        <span className="text-[#8c8996] text-base font-semibold  leading-normal">NOSSOS SERVIÇOS</span>
                                        <br />
                                        <div className="">
                                            <ListItem
                                                href="/servico/realizacao-de-diagnosticos-institucionais"
                                                title="Realização de diagnosticos institucionais"
                                            ></ListItem>
                                            <ListItem
                                                href="/servico/consultoria-em-contratacao-publica"
                                                title="Consultoria em contratação pública"
                                            ></ListItem>
                                            <ListItem
                                                href="/servico/elaboracao-de-planos-estratetigicos"
                                                title="Elaboração de planos estratétigicos"
                                            ></ListItem>
                                            <ListItem
                                                href="/servico/consultoria-juridica-especializada"
                                                title="Consultoria jurídica especializada"
                                            ></ListItem>
                                        </div>
                                        <div className="">
                                            <ListItem href="/servico/elaboracao-de-normas" title="Elaboração de normas">
                                            </ListItem>
                                            <ListItem href="/servico/installation" title="Formacoes-especializadas">
                                            </ListItem>
                                            <ListItem
                                                href="/servico/consultoria-em-materia-de-recursos-humanos"
                                                title="Consultoria em matéria de recursos humanos"
                                            >
                                            </ListItem>
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
                                                    Organização multifuncional pronta para solucionar os seu problema.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>

                                    <div className="flex flex-col">

                                        <span className="text-[#8c8996] text-base font-semibold  leading-normal">EQUIPA</span>
                                        <ListItem
                                            href="/equipa/nossa-equipa"
                                            title="Equipa"
                                        ></ListItem>
                                        <ListItem
                                            href="/equip/carreira"
                                            title="Carreira"
                                        ></ListItem>
                                    </div>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="sobre-nos"
                                className={cn(
                                    navigationMenuTriggerStyle(), aboutUsLinkClass,
                                    "hover:text-[#CB935D] uppercase"
                                )}
                            >
                                Sobre nós
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={cn(
                                navigationMenuTriggerStyle(),
                                "hover:text-[#CB935D] uppercase", blogLinkClass
                            )} href="/blog">BLOG</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={cn(
                                "hover:text-[#CB935D] uppercase gap-2"
                            )}>
                                {" "}
                                <Image src={Language} alt={""} /> português
                            </NavigationMenuTrigger>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
}
