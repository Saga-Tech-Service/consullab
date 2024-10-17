import React from "react";
import Image from "next/image";
import Service1 from "@public/assets/service1.jpg";
import { Button } from "@/components/ui/button";
import { TopicSection } from "@/components/TopicSection";
import { TopicItem } from "@/components/TopicSection";
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FiArrowDown } from "react-icons/fi";
import { ServiceNews } from "@/components/TopicSection";
import { SectionService } from "@/components/sectionService";
import { Link } from "@/i18n/routing";
import DiagnosticList from "@/components/DiagnosticList";
import NewsSection from "@/components/NewsSection";
import { AdvancedNewsComponent } from "@/components/news";
import { Separator } from "@/components/Separator";
import ServiceList from "@/components/ServiceList";
import { useTypedTranslations } from "@/hooks/useTypedTranslations";
import { useMessages, useTranslations } from "next-intl";

const ServiceConsullab = () => {
    const t = useTypedTranslations("servicesDetails4");
    const tDatails = useTypedTranslations("DiagnosticsServiceDetails4");
    const tNews = useTranslations("itemsNews4");
    const tService = useTranslations("servicesList");
    const messages = useMessages();
    const Keys = Object.keys(messages.itemsNews4);
    const keysServices = Object.keys(messages.servicesList);

    const diagnostics = [
        {
            id: tDatails("1.id"),
            number: tDatails("1.number"),
            title: tDatails("1.title"),
            description: [
                tDatails("1.description.1"),
                tDatails("1.description.2"),
                tDatails("1.description.3"),
            ],
        }
    ];

    const newsItems = Keys.map((key) => ({
        date: tNews(`${key}.date`),
        content: tNews(`${key}.content`),
        url: tNews(`${key}.url`),
    }));

    const services = () => {
        return keysServices.map((key) => ({
            id: tService(`${key}.id`),
            title: tService(`${key}.title`),
            number: tService(`${key}.id`),
            href: tService(`${key}.href`)
        }));
    };

    return (
        <main className="flex flex-col top-margin">
            <section className="containerConssulab flex flex-col">
                <Breadcrumb>
                    <BreadcrumbList className="text-[10px] md:text-base">
                        <BreadcrumbItem>
                            <Link href={"/servico"} className="font-inter">
                                {t("breadcrumb.services")}
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>•</BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbPage className="font-inter uppercase">
                                {t("diagnostics.title")}
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <header className="w-full flex justify-between">
                    <h1 className="w-[175px] font-montserrat sm:w-[814px] text-[#091622] text-2xl lg:text-5xl font-bold leading-normal lg:leading-[76.80px] mt-8">
                        {t("diagnostics.title")}
                    </h1>
                    <FiArrowDown className="self-end w-6 h-6 p-1 ring-1 ring-[#091622]  justify-center items-center inline-flex" />
                </header>

                <figure className="w-full h-[394px] sm:h-[720px] bg-[#152232]/20 mt-16 flex justify-center items-center">
                    <Image
                        className="w-full h-full object-cover bg-left-top bg-no-repeat"
                        src={Service1}
                        alt="Serviços 1 da Consullab"
                    />
                </figure>

                <section className="flex flex-col md:flex-row mt-8 space-y-6 lg:space-y-0">
                    <h2 className="font-inter flex flex-1 text-[#091622] text-lg font-normal leading-[27px]">
                        {t("diagnostics.descriptionLabel")}
                    </h2>
                    <p className="font-inter flex flex-1  lg:w-[488px] text-[#091622] text-lg font-normal leading-[27px]">
                        {t("diagnostics.description")}
                    </p>
                </section>

                <Separator className="flex border-b border-[#e0dfe6] w-full mt-[99px]" />

                <h3 className="w-[175px] font-inter  text-[#091622] text-base font-medium  leading-normal mt-6">
                    {t("diagnostics.areasLabel")}
                </h3>

                <p className="mt-12 mb-72 font-montserrat flex w-full text-[#091622] text-xl lg:text-[32px] font-bold leading-[44.80px]">
                    {t("diagnostics.areasDescription")}
                </p>

                <section className="flex-col justify-start items-start space-y-72 inline-flex">
                    <DiagnosticList diagnostics={diagnostics} />
                </section>
            </section>

            <section className="containerConssulab mt-72">
                <AdvancedNewsComponent
                    BackToBegin={t("news.BackToBegin")}
                    ViewAllNews={t("news.ViewAllNews")}
                    title={t("news.title")}
                    news={newsItems}
                    itemsPerPage={2}
                />
            </section>

            <section className="flex flex-col bg-white mt-72 py-72">
                <div className="containerConssulab">
                    <ServiceList
                        className=""
                        variant="default"
                        title={t("serviceList.title")}
                        services={services()}
                    />
                </div>
                <Button
                    variant={"outline"}
                    type="button"
                    className="mt-24 bg-white rounded-none  h-10 w-[181px] px-4 py-2 border border-[#091622] self-center gap-2.5 inline-flex text-[#091622] text-base font-semibold leading-normal"
                >
                    {t("buttons.viewAllNews")}
                </Button>
            </section>
        </main>
    );
};

export default ServiceConsullab;
