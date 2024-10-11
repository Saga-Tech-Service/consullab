"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { setCookie, getCookie } from "cookies-next";
import { useTypedTranslations } from "@/hooks/useTypedTranslations";
import { cn } from "@/lib/utils";
import { useActiveLinkClass } from "@/lib/router";
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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { AiOutlinePhone } from "react-icons/ai";
import { VscMail } from "react-icons/vsc";

import LogoHeader from "@public/assets/Logo Consullab.svg";
import Language from "@public/assets/portugal.svg";
import Inglish from "@public/assets/English.svg";
import MobileNavigation from "./mobileNavegation";

type TypeLocale = "en" | "pt";

export function Header() {
    const { scrollY } = useScroll();
    const topSectionOpacity = useTransform(scrollY, [0, 50], [1, 0]);
    const topSectionHeight = useTransform(scrollY, [0, 50], [40, 0]);

    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [currentLocale, setCurrentLocale] = useState(locale);
    const t = useTypedTranslations("header");

    useEffect(() => {
        const savedLocale = getCookie("NEXT_LOCALE");
        if (savedLocale && savedLocale !== currentLocale) {
            setCurrentLocale(savedLocale as string);
            router.replace(pathname, { locale: savedLocale as TypeLocale });
        }
    }, [currentLocale, pathname, router]);

    const handleLanguageChange = (newLocale: TypeLocale) => {
        setCurrentLocale(newLocale);
        setCookie("NEXT_LOCALE", newLocale, { maxAge: 365 * 24 * 60 * 60 });
        router.replace(pathname, { locale: newLocale });
    };

    const languages = [
        { code: "pt", name: t("menu.languages.options.pt"), flag: Language },
        { code: "en", name: t("menu.languages.options.en"), flag: Inglish },
    ];

    const activeLinkClass =
        "border-b-2 border-[#CB935D] text-[#CB935D] hover:text-[#CB935D]";
    const inactiveLinkClass = "border-transparent hover:text-[#CB935D]";

    const homeLinkClass = useActiveLinkClass({
        targetPath: "/",
        activeClass: activeLinkClass,
        inactiveClass: inactiveLinkClass,
    });

    const serviceLinkClass = useActiveLinkClass({
        targetPath: "/servico",
        activeClass: activeLinkClass,
        inactiveClass: inactiveLinkClass,
    });

    const teamLinkClass = useActiveLinkClass({
        targetPath: "/equipa",
        activeClass: activeLinkClass,
        inactiveClass: inactiveLinkClass,
    });

    const blogLinkClass = useActiveLinkClass({
        targetPath: "/blog",
        activeClass: activeLinkClass,
        inactiveClass: inactiveLinkClass,
    });

    const aboutUsLinkClass = useActiveLinkClass({
        targetPath: "/sobre-nos",
        activeClass: activeLinkClass,
        inactiveClass: inactiveLinkClass,
    });

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
            <motion.div
                className="w-full bg-primaryConsullab overflow-hidden"
                style={{ opacity: topSectionOpacity, height: topSectionHeight }}
            >
                <div className="containerConssulab flex items-center justify-end h-10 gap-4 text-sm">
                    <div className="flex items-center justify-center gap-2">
                        <AiOutlinePhone className="text-yellow-500" />
                        <Link
                            className="text-TonsCinza100 truncate font-inter"
                            href={"tel:+244931931182"}
                        >
                            + 244 931 931 182
                        </Link>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <VscMail className="text-yellow-500" />
                        <Link
                            className="text-TonsCinza100 truncate font-inter"
                            href={"mailto:geral@consullab.co.ao"}
                        >
                            geral@consullab.co.ao
                        </Link>
                    </div>
                </div>
            </motion.div>

            <div className="containerConssulab flex items-center justify-between gap-4 py-[17px]">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <Link href="/" passHref>
                        <Image
                            src={LogoHeader}
                            className="h-[46.02px] w-[98px] lg:h-[54px] lg:w-[115px]"
                            alt="Logo da Consullab"
                        />
                    </Link>
                </h1>

                <NavigationMenu className="hidden md:block">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/" passHref legacyBehavior>
                                <NavigationMenuLink
                                    className={cn(
                                        navigationMenuTriggerStyle(),
                                        "font-inter rounded-none",
                                        homeLinkClass
                                    )}
                                >
                                    {t("menu.home")}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger
                                className={cn(
                                    "text-sm rounded-none font-inter",
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
                                            <p className="text-sm leading-tight text-[#8C8A97]">
                                                {t("menu.services.description")}
                                            </p>
                                        </Link>
                                    </li>
                                    <div className="flex flex-col">
                                        <span className="text-[#8c8996] text-base font-semibold leading-normal">
                                            {t("menu.services.sections.title")}
                                        </span>
                                        <br />
                                        <div>
                                            <ListItem
                                                href="/servico/realizacao-de-diagnosticos-institucionais"
                                                title={t("menu.services.sections.items.diagnostics")}
                                            />
                                            <ListItem
                                                href="/servico/consultoria-em-contratacao-publica"
                                                title={t(
                                                    "menu.services.sections.items.public_contracting"
                                                )}
                                            />
                                            <ListItem
                                                href="/servico/elaboracao-de-planos-estratetigicos"
                                                title={t(
                                                    "menu.services.sections.items.strategic_plans"
                                                )}
                                            />
                                            <ListItem
                                                href="/servico/consultoria-juridica-especializada"
                                                title={t(
                                                    "menu.services.sections.items.legal_consulting"
                                                )}
                                            />
                                        </div>
                                        <div>
                                            <ListItem
                                                href="/servico/elaboracao-de-normas"
                                                title={t(
                                                    "menu.services.sections.items.standards_development"
                                                )}
                                            />
                                            <ListItem
                                                href="/servico/Formacoes-especializadas"
                                                title={t(
                                                    "menu.services.sections.items.specialized_training"
                                                )}
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
                                className={cn("text-sm font-inter rounded-none", teamLinkClass)}
                            >
                                {t("menu.team.label")}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <Link href="/equipa" legacyBehavior passHref>
                                            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                                            <a className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                                                <div className="text-[#091622] text-[32px] leading-[44.80px] mb-2 mt-4 text-lg font-medium">
                                                    {t("menu.team.label")}
                                                </div>
                                                <p className="text-sm leading-tight text-[#8C8A97]">
                                                    {t("menu.team.description")}
                                                </p>
                                            </a>
                                        </Link>
                                    </li>
                                    <div className="flex flex-col">
                                        <span className="text-[#8c8996] text-base font-semibold leading-normal">
                                            {t("menu.team.sections.title")}
                                        </span>
                                        <ListItem
                                            href="/equipa/#nossa-equipa"
                                            title={t("menu.team.label")}
                                        />
                                        <ListItem
                                            href="/equipa/carreira"
                                            title={t("menu.team.sections.items.careers")}
                                        />
                                    </div>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/sobre-nos" passHref legacyBehavior>
                                <NavigationMenuLink
                                    className={cn(
                                        navigationMenuTriggerStyle(),
                                        "font-inter rounded-none",
                                        aboutUsLinkClass
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
                                        "font-inter rounded-none",
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
                                <SelectTrigger className="w-[50px] lg:w-full font-inter rounded-none border-none shadow-none">
                                    <SelectValue placeholder="Selecione o idioma " />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel
                                            className={cn("hover:text-[#CB935D] gap-2 font-inter")}
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
                                                    <b className="hidden lg:flex font-inter">
                                                        {lang.name}
                                                    </b>
                                                </span>
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <MobileNavigation />
            </div>
        </header>
    );
}
