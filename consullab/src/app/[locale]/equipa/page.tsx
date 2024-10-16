import React from "react";
import { FiArrowUp } from "react-icons/fi";
import Image from "next/image";
import TeamConsullab from "@public/assets/teamConsullab.jpg";
import TeamShortFig from "@public/assets/teamShortFig.jpg";
import OurTeam from "@public/assets/OurTeam.jpg";
import { Button } from "@/components/ui/button";
import { CardTeam } from "@/components/TopicSection";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useTypedTranslations } from "@/hooks/useTypedTranslations";

const Servico = () => {

    const t = useTypedTranslations("team")
    return (
        <main className="w-full flex flex-col top-margin">
            <section className="containerConssulab flex flex-col">
                <h1 className="text-[#091622] max-w-[696px] font-montserrat text-[28px] md:text-5xl font-bold leading-[39.20px md:leading-[76.80px]">
                    {t("title")}
                </h1>

                <div className="flex flex-col  md:self-end mt-6 md:mt-[98px]">
                    <p className="font-inter w-full md:w-[488px] text-[#091622] text-sm md:text-base font-normal  leading-[21px] md:leading-normal">
                        {t("description")}
                    </p>
                    <Link href="#nossa-equipa" passHref>
                        <Button id="nossa" variant={"outline"} className="font-montserrat text-[#091622] text-base font-semibold leading-normal mt-6 md:mt-10 bg-white w-full md:w-[194px] rounded-none h-10 px-4 py-2 border border-[#091622] justify-center items-center gap-2.5 inline-flex">
                            {t("buttonText")}
                            <FiArrowUp className="w-6 h-6 relative rotate-180 text-black" />
                        </Button>
                    </Link>
                </div>

                <h2 className="font-intermt-20 w-[696px] text-[#091622] text-[28px] md:text-[40px] font-bold  md:leading-[64px] leading-[39.20px]">
                    {t("experiencedTeam.title")}
                </h2>
                <p className="font-montserrat mt-6 md:mt-32 md:self-end md:w-[488px] text-[#091622] text-base md:text-base font-normal leading-[21px] md:leading-normal">
                    {t("experiencedTeam.description")}
                </p>
            </section>
            <section className="w-full bg-[#091622] py-[72px] mt-[72px] ">
                <div className="containerConssulab flex justify-between gap-x-6">
                    <div className="flex gap-8 ">
                        <Image
                            src={OurTeam}
                            alt="Equipa consullab"
                            className="h-[431px] md:h-[594px] bg-cover w-[488px]"
                        />
                        <div className="w-96 self-end hidden lg:grid">
                            <p className="text-white text-base font-medium leading-normal">
                                {t("privateSection.title")}
                            </p>
                            <p className="text-[#c6c4ce] text-sm lg:text-base font-normal leading-normal ">
                                {t("privateSection.description")}
                            </p>
                        </div>
                    </div>
                    <Image
                        src={TeamShortFig}
                        alt="Equipa consullab"
                        className="self-end lg:self-start h-[90px] md:h-[180px] w-[72px] md:w-[280px]"
                    />
                </div>
                <div className="containerConssulab lg:hidden flex flex-col gap-4 ">
                    <p className="text-white text-base font-medium leading-normal">
                        {t("privateSection.title")}
                    </p>
                    <p className="text-[#c6c4ce] text-sm lg:text-base font-normal leading-normal ">
                        {t("privateSection.description")}
                    </p>
                </div>
            </section>
            <section className="w-full  opacity-95 bg-[#091622]">
                <div className="containerConssulab my-[72px]">
                    <div className="flex items-end justify-end">
                        <h3 className="w-96 text-right text-white text-5xl font-bold  leading-[76.80px]  self-end">
                            {t("ourTeam.title")}
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-2 mt-[85.5px] gap-y-[33px] gap-x-[33px]">
                        {/* Item ocupando 2 colunas em telas grandes, mas 1 coluna no mobile */}
                        <CardTeam className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2" title={t("ourTeam.members.title")} src={OurTeam}>
                            {t("ourTeam.members.name")}
                        </CardTeam>

                        {/* Itens ocupando 1 coluna em qualquer tela */}
                        <CardTeam className="col-span-1" title={t("ourTeam.members.title")} src={OurTeam}>
                            {t("ourTeam.members.name")}
                        </CardTeam>

                        <CardTeam className="col-span-1" title={t("ourTeam.members.title")} src={OurTeam}>
                            {t("ourTeam.members.name")}
                        </CardTeam>

                        <CardTeam className="col-span-1" title={t("ourTeam.members.title")} src={OurTeam}>
                            {t("ourTeam.members.name")}
                        </CardTeam>

                        {/* Mais itens ocupando 1 coluna no mobile e telas maiores */}
                        <CardTeam className="col-span-1" title={t("ourTeam.members.title")} src={OurTeam}>
                            {t("ourTeam.members.name")}
                        </CardTeam>

                        <CardTeam className="col-span-1" title={t("ourTeam.members.title")} src={OurTeam}>
                            {t("ourTeam.members.name")}
                        </CardTeam>

                        {/* Itens ocupando 2 colunas no mobile, mas ajustados em 1 coluna em resoluções maiores */}
                        <CardTeam className="col-span-1 md:col-span-2 " title={t("ourTeam.members.title")} src={OurTeam}>
                            {t("ourTeam.members.name")}
                        </CardTeam>

                        <CardTeam className="col-span-1 md:col-span-2 lg:col-span-1" title={t("ourTeam.members.title")} src={OurTeam}>
                            {t("ourTeam.members.name")}
                        </CardTeam>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default Servico;
