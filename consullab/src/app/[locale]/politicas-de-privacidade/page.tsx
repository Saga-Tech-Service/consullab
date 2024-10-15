import { useMessages, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useTypedTranslations } from '@/hooks/useTypedTranslations';

interface FAQ {
    privacyPolicy: {
        accordion: Record<string, {
            title: string,
            content: string
        }>

    }
}

const PoliticsPrivacy = () => {

    const t = useTypedTranslations("privacyPolicy")
    const tFAQ = useTranslations("privacyPolicy.accordion")
    const message = useMessages() as unknown as FAQ | null

    const KeysFAQ = message?.privacyPolicy?.accordion ?
        Object.keys(message.privacyPolicy.accordion) : []

    const Acordion = KeysFAQ.map((faq, index) => ({
        id: index,
        title: tFAQ(`${faq}.title`),
        content: tFAQ(`${faq}.content`)
    }))


    return (
        <main className="containerConssulab flex flex-col">
            <article className="flex flex-col items-center gap-8 top-margin w-full">
                <header className="self-start gap-2.5">
                    <h1 className=" text-[#091622] text-[28px] sm:text-3xl text-5xl font-bold leading-[76.80px]">
                        {t("title")}
                    </h1>
                </header>

                <p className="md:self-end text-[#091622] md:max-w-[488px] text-sm md:text-base font-normal leading-normal md:mt-[85px] w-full">
                    {t("intro")}
                </p>
            </article>

            <Accordion type="single" collapsible className="w-full mt-10 mb-72">
                {
                    Acordion.map((faq, index) => (
                        <AccordionItem value={`item-${index}`} key={faq.id}>
                            <AccordionTrigger className="text-[#091622] text-xl md:text-[32px] font-bold leading-[44.80px]">
                                {faq.title}
                            </AccordionTrigger>
                            <AccordionContent className="flex items-end justify-end">
                                <p className="text-[#173049] text-lg font-normal max-w-[488px] ">
                                    {faq.content}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </main>
    );
};

export default PoliticsPrivacy;
