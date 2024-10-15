import { Button } from "@/components/ui/button";
import { useMessages, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useTypedTranslations } from "@/hooks/useTypedTranslations";

interface IJobs {
    job_opportunities: {
        paragraphs: Record<string, { title: string; paragraphs: string }>;
    };
}

interface Ibenefits {
    job_opportunities: {
        ListOfferings: {
            benefits: string[]
        }
    };
}
const News = () => {
    const t = useTypedTranslations("job_opportunities");
    const tJob = useTranslations("job_opportunities.paragraphs");
    const tListInfo = useTranslations("job_opportunities.ListOfferings");

    //#region job_opportunitie
    const messagesJobs = useMessages() as unknown as IJobs | null;

    const keysJobs = messagesJobs?.job_opportunities?.paragraphs
        ? Object.keys(messagesJobs.job_opportunities.paragraphs)
        : [];

    const JobsInfo = keysJobs.map((key) => ({
        title: tJob(`${key}.title`),
        paragraphs: tJob.rich(`${key}.paragraphs`, {
            paragraph: (chunks) => <p>{chunks}</p>,
        }),
    }));
    //#endregion

    //_______________________________________________________
    const messagesBenefits = useMessages() as unknown as Ibenefits | null;

    // Acessa diretamente o array de benefícios
    const benefits = messagesBenefits?.job_opportunities?.ListOfferings?.benefits || [];

    // Itera sobre o array de benefícios corretamente
    const JobsBenefits = benefits.map((benefit) => ({
        benefit: benefit, // Traduz o benefício se necessário
    }));

    return (
        <main className="containerConssulab flex flex-col">
            <section className="top-margin max-w-[800px] w-full  flex-col self-center flex justify-center items-center gap-8">
                <Link
                    href={"/equipa/carreira"}
                    passHref
                    className="justify-start items-center gap-2.5 inline-flex"
                >
                    <FiArrowLeft className="w-6 h-6" />
                    <Button
                        variant={"link"}
                        className="font-montserrat text-[#091622] text-base font-semibold leading-normal"
                    >
                        {t("buttonText1")}
                    </Button>
                </Link>
                <h1 className="self-stretch h-[111px] flex-col justify-start items-center gap-4 flex">
                    <span className="font-montserrat self-stretch text-center text-[#091622] text-5xl font-bold leading-[67.20px]">
                        {t("title")}
                    </span>
                    <span className="italic font-montserrat self-stretch text-center text-[#cb935d] text-xl font-normal leading-7">
                        {t("mode")}
                    </span>
                </h1>
            </section>

            <section className="mb-72 mt-[135px] self-center max-w-[1008px] flex-col justify-start items-start gap-8 inline-flex ">
                {JobsInfo.map((info) => (
                    <article
                        className="self-stretch flex flex-col space-y-4"
                        key={info.title}
                    >
                        <h2 className="inline-block text-[#091622] text-[28px] font-bold leading-[39.20px]">
                            {info.title}
                        </h2>
                        <div className="text-[#091622] text-base sm:text-lg font-normal leading-[27px]">
                            {info.paragraphs}
                        </div>
                    </article>
                ))}

                <article
                    className="self-stretch flex flex-col space-y-4"
                >
                    <h2 className="text-[#091622] text-[28px] font-bold leading-[39.20px] mt-10">
                        {tListInfo("title")}
                    </h2>
                    <p className="text-[#091622] text-base sm:text-lg font-normal leading-[27px]">
                        {tListInfo("description")}
                        <br />
                    </p>
                    <div className="text-[#091622] text-base sm:text-lg font-normal leading-[27px]">
                        <ul className="list-disc list-inside ml-3">
                            {JobsBenefits.map((item) => (
                                <li key={item.benefit}>{item.benefit}</li>
                            ))}
                        </ul>
                    </div>
                </article>
                <Button
                    variant={"ghost"}
                    className="text-white text-base font-semibold font-montserrat leading-normal h-10 px-4 py-2 bg-[#091622] justify-center items-center gap-2.5 inline-flex rounded-none hover:bg-slate-800 hover:text-white self-center mt-8"
                >
                    {t("buttonText2")}
                </Button>
            </section>
        </main>
    );
};

export default News;
