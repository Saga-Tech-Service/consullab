import React from "react";
import { FiArrowDown } from "react-icons/fi";
import Image from "next/image";
import ServiceJustice from "@public/assets/servicoJustice.png"
import ServiceList from "@/components/ServiceList";
import { AdvancedNewsComponent } from "@/components/news";
import { useTypedTranslations } from "@/hooks/useTypedTranslations";
import { useMessages, useTranslations } from "next-intl";


const Servico = () => {
    const t = useTypedTranslations("services");
    const tService = useTranslations("servicesList");
    const messages = useMessages();
    const keys = Object.keys(messages.servicesList);

    const services = () => {

        return keys.map((key) => ({
            id: tService(`${key}.id`),
            title: tService(`${key}.title`),
            number: tService(`${key}.id`),
            href: tService(`${key}.href`)
        }));
    };


    return (
        <main className="containerConssulab top-margin">
            <h1 className="mt-16  text-[#091622]  text-[28px] sm:text-5xl font-bold leading-[39.20px] sm:leading-[76.80px] font-montserrat">
                {t("title")}
            </h1>
            <span className="flex border-b border-[#e0dfe6] mt-[77px]" />
            <section className="w-full flex flex-col gap-y-10 md:gap-y-0 md:flex-row mt-8">
                <span className="flex-1">
                    <p className=" w-full max-w-[280px] text-[#091622] text-base font-normal leading-normal font-inter">
                        {t("subtitle")}
                    </p>
                </span>
                <span className="flex flex-col">
                    <p className="w-full md:w-[479px] text-[#091622] text-xl font-normal  leading-[30px] font-inter">
                        {t("description")}
                    </p>

                    <span className="self-end mt-72 w-10 h-10 p-2  border border-[#091622] justify-start items-center inline-flex">
                        <FiArrowDown className="w-6 h-6 relative" />
                    </span>
                </span>
            </section>
            <section className="my-72">
                <Image className="w-full h-full object-cover" src={ServiceJustice} alt={t("imageAlt")} />
            </section>
            <ServiceList
                className="mb-[120px]"
                variant="default"
                title={t('listTitle')}
                services={services()}
            />

        </main>
    );
};

export default Servico;
