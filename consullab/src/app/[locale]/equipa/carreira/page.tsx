import React from "react";
import { useMessages, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { IoArrowDownOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { SectionService } from "@/components/sectionService";
import { Separator } from "@/components/Separator";
import { useTypedTranslations } from "@/hooks/useTypedTranslations";
import ServiceList from "@/components/ServiceList";

interface ICareerMessagesOfferings {
    career: {
        offerings: {
            items: Record<string, { title: string; number: string }>;
        };
    };
}
interface ICareerMessagesOpportunities {
    career: {
        opportunities: {
            jobs: Record<string, { title: string; Link: string }>;
        };
    };
}
const Servico = () => {
    const t = useTypedTranslations("career");
    const tItems = useTranslations("career.offerings.items");

    // Agora,  tipar o retorno de useMessages

    //#region [messagesOfferings]
    const messagesOfferings =
        useMessages() as unknown as ICareerMessagesOfferings | null;
    const keysItems = messagesOfferings?.career?.offerings?.items
        ? Object.keys(messagesOfferings.career.offerings.items)
        : [];
    const services = keysItems.map((key) => ({
        title: tItems(`${key}.title`),
        number: tItems(`${key}.number`),
    }));
    //#endregion

    const tJobs = useTranslations("career.opportunities.jobs");
    const CareerMessagesOpportunities =
        useMessages() as unknown as ICareerMessagesOpportunities | null;

    const keysJobs = CareerMessagesOpportunities?.career?.opportunities?.jobs
        ? Object.keys(CareerMessagesOpportunities.career?.opportunities.jobs)
        : [];
    const Opportunies = keysJobs.map((key) => ({
        title: tJobs(`${key}.title`),
        link: tJobs(`${key}.link`),
    }));

    return (
        <main className="containerConssulab flex flex-col top-margin">
            <h1 className="font-montserrat text-[#091622] text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[67.20px] mb-6">
                {t("title")}
            </h1>
            <section className="lg:self-end lg:mt-[95px] lg:w-[488px] flex-col justify-start items-start lg:gap-[72px] inline-flex">
                <div className="self-stretch text-[#091622] text-base font-normal leading-normal font-inter">
                    {t.rich("intro.description", {
                        guidelines: (chunks) => <p>{chunks}</p>,
                    })}
                </div>
                <Button
                    variant={"outline"}
                    className="uppercase font-montserrat text-[#091622] w-full lg:w-auto truncate ring-1 ring-[#091622] rounded-none text-sm lg:text-base font-semibold mt-6"
                >
                    {t("intro.button")}
                    <IoArrowDownOutline className="w-6 h-6 ml-2" />
                </Button>
            </section>

            <section className="flex-col justify-start items-start gap-4 inline-flex my-72">
                <h2 className="text-[#091622] text-lg font-bold font-montserrat leading-[25.20px]">
                    {t("benefits.title")}
                </h2>
                <h2 className="font-montserrat self-stretch text-[#091622] text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[39.20px]">
                    {t("benefits.subtitle")}
                </h2>
                <p className="font-inter self-stretch text-[#091622] text-lg font-normal leading-[27px]">
                    {t("benefits.description")}
                </p>
            </section>

            <ServiceList title={t("offerings.title")} services={services} />

            <section className="h-auto flex-col justify-start items-start gap-8 inline-flex mt-[184px] mb-[144px]">
                <h3 className="font-montserrat self-stretch text-[#091622] text-xl md:text-2xl font-bold leading-7">
                    OPORTUNIDADE DE CARREIRA EM DESTAQUE
                </h3>
                <div className=" w-full max-w-[800px] self-stretch h-[0px] border border-[#091622]" />
                <nav className="flex-col justify-start items-start gap-6 inline-flex w-full max-w-[800px]">
                    {Opportunies.map((job) => (
                        <Link
                            key={job.title}
                            href={job.link}
                            className="flex justify-between items-center w-full"
                        >
                            <p className="text-[#173049] font-inter text-lg font-normal leading-[27px]">
                                {job.title}
                            </p>
                            <IoIosArrowForward className="w-6 h-6 relative" />
                        </Link>
                    ))}
                </nav>
            </section>
        </main>
    );
};

export default Servico;
