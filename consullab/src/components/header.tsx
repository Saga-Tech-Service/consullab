"use client";
import React from "react";
import Image from "next/image";
import LogoHeader from "@public/assets/Logo Consullab.svg";
import Language from "@public/assets/portugal.svg";
import { Link } from "@/i18n/routing";
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
import MobileNavegation from "@/components/mobileNavegation";
import Inglish from "@public/assets/English.svg";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { setCookie, getCookie } from "cookies-next";
import { useState, useEffect } from "react";
import { useTypedTranslations } from "@/hooks/useTypedTranslations";



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

type TypeLocale = "en" | "pt";
export function Header() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [currentLocale, setCurrentLocale] = useState(locale);
    const t = useTypedTranslations("header");


    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        const savedLocale = getCookie("NEXT_LOCALE");
        if (savedLocale && savedLocale !== currentLocale) {
            setCurrentLocale(savedLocale as string);
            router.replace(pathname, { locale: savedLocale as TypeLocale });
        }
    }, []);

    const handleLanguageChange = (newLocale: TypeLocale) => {
        setCurrentLocale(newLocale);
        setCookie("NEXT_LOCALE", newLocale, { maxAge: 365 * 24 * 60 * 60 }); // Set cookie to expire in 1 year
        router.replace(pathname, { locale: newLocale });
    };


    const languages = [
        { code: "pt", name: t("menu.languages.options.pt"), flag: Language },
        { code: "en", name: t("menu.languages.options.en"), flag: Inglish },
    ];


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
                        <Link
                            className="text-TonsCinza100 truncate"
                            href={"tel:+244931931182"}
                        >
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

            <div className="containerConssulab  flex items-center  justify-between gap-4  py-[17px]">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <Link href="/" passHref>
                        <Image
                            src={LogoHeader}
                            className="h-[46.02px] w-[98px]  lg:h-[54px]  lg:w-[115px]"
                            alt="Logo da Consullab"
                        />
                    </Link>
                </h1>

                <NavigationMenu className="hidden md:grid">
                    <NavigationMenuList>
                        <NavigationMenuItem
                            className={cn("uppercase hover:text-[#CB935D]", homeLinkClass)}
                        >
                            <Link href={"/"} passHref legacyBehavior>
                                <NavigationMenuLink
                                    className={cn(
                                        navigationMenuTriggerStyle(),
                                        "hover:text-[#CB935D]"
                                    )}
                                >
                                    {t("menu.home")}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger
                                className={cn(
                                    "uppercase text-sm rounded-none hover:text-[#CB935D]",
                                    serviceLinkClass
                                )}
                            >
                                {t("menu.services.label")}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <Link
                                            className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/servico"
                                        >
                                            <div className="text-[#091622] mb-2 mt-4 text-lg font-medium">
                                                {t("menu.services.label")}
                                            </div>
                                            <p className="text-sm leading-tight text-[#8C8A97] ">
                                                {t("menu.services.description")}
                                            </p>
                                        </Link>
                                    </li>

                                    <div className="flex flex-col">
                                        <span className="text-[#8c8996] text-base font-semibold  leading-normal">
                                            {t("menu.services.sections.title")}
                                        </span>
                                        <br />
                                        <div className="">
                                            <ListItem
                                                href="/servico/realizacao-de-diagnosticos-institucionais"
                                                title={t("menu.services.sections.items.diagnostics")}
                                            />
                                            <ListItem
                                                href="/servico/consultoria-em-contratacao-publica"
                                                title={t("menu.services.sections.items.public_contracting")}
                                            />
                                            <ListItem
                                                href="/servico/elaboracao-de-planos-estratetigicos"
                                                title={t("menu.services.sections.items.strategic_plans")}
                                            />
                                            <ListItem
                                                href="/servico/consultoria-juridica-especializada"
                                                title={t("menu.services.sections.items.legal_consulting")}
                                            />
                                        </div>
                                        <div className="">
                                            <ListItem
                                                href="/servico/elaboracao-de-normas"
                                                title={t("menu.services.sections.items.standards_development")}
                                            />
                                            <ListItem
                                                href="/servico/Formacoes-especializadas"
                                                title={t("menu.services.sections.items.specialized_training")}
                                            />
                                            <ListItem
                                                href="/servico/consultoria-em-materia-de-recursos-humanos"
                                                title={t("menu.services.sections.items.hr_consulting")}
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
                                {t("menu.team.label")}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <Link href="/equipa" legacyBehavior passHref>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/equipa"
                                            >
                                                <div className="text-[#091622] text-[32px] leading-[44.80px] mb-2 mt-4 text-lg font-medium">
                                                    {t("menu.team.label")}
                                                </div>
                                                <p className="text-sm leading-tight text-[#8C8A97] ">
                                                    {t("menu.team.description")}
                                                </p>
                                            </a>
                                        </Link>
                                    </li>

                                    <div className="flex flex-col">
                                        <span className="text-[#8c8996] text-base font-semibold  leading-normal">
                                            {t("menu.team.sections.title")}
                                        </span>
                                        <ListItem href="/equipa/#nossa-equipa" title={t("menu.team.label")} />
                                        <ListItem href="/equipa/carreira" title={t("menu.team.sections.items.careers")} />
                                    </div>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href={"/sobre-nos"} passHref legacyBehavior>
                                <NavigationMenuLink
                                    className={cn(
                                        navigationMenuTriggerStyle(),
                                        aboutUsLinkClass,
                                        "hover:text-[#CB935D] uppercase"
                                    )}
                                >
                                    {t("menu.about_us")}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/blog" passHref legacyBehavior>
                                <NavigationMenuLink
                                    className={cn(
                                        navigationMenuTriggerStyle(),
                                        "hover:text-[#CB935D] uppercase",
                                        blogLinkClass
                                    )}
                                >
                                    {t("menu.blog")}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Select
                                value={currentLocale}
                                onValueChange={handleLanguageChange}
                            >
                                <SelectTrigger className="w-[50px] lg:w-full">
                                    <SelectValue placeholder="Selecione o idioma" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel
                                            className={cn("hover:text-[#CB935D] uppercase gap-2")}
                                        >
                                            {t("menu.languages.label")}
                                        </SelectLabel>
                                        {languages.map((lang) => (
                                            <SelectItem
                                                key={lang.code}
                                                value={lang.code}
                                                className="inline-flex gap-2 items-center"
                                            >
                                                <span className="text-[#091622] text-sm font-normal uppercase leading-[21px] flex items-center justify-center space-x-2 w-full">
                                                    <Image
                                                        src={lang.flag}
                                                        alt={`idioma ${lang.code}`}
                                                        width={24}
                                                        height={24}
                                                    />
                                                    <b className="hidden lg:flex">{lang.name}</b>
                                                </span>
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <MobileNavegation />
            </div>
        </header>
    );
}
