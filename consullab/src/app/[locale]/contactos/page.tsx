import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import React from "react";
import Image from "next/image";
import Location from "@public/assets/location.jpg"
import { SociolMedium } from "@/components/TopicSection";

const News = () => {
    return (
        <main className="containerConssulab flex flex-col bg-[#f4f4f4]">
            <h1 className="mt-16 text-[#091622] text-5xl font-bold leading-[67.20px]">
                Contactos
            </h1>
            <section className="flex flex-col lg:flex-row justify-between items-center mt-[95px] mb-[72px] gap-4">
                <div className="flex-1  max-w-[696px] w-full">
                    <div className="">
                        <div className=" border border-[#e0dfe6]" />
                        <p className=" text-[#091622] text-base font-normal leading-normal mb-6 mt-10">
                            LUANDA
                        </p>
                        <div className=" flex-col justify-start items-start gap-2 inline-flex">
                            <p className="self-stretch text-[#091622] text-lg font-bold leading-[25.20px]">
                                Rua Rainha Nginga, Avenida 2034
                            </p>
                            <Link href={"tel:+244924931394"} className="self-stretch text-[#091622] text-lg font-bold leading-[25.20px]">
                                +244 924 931 394
                            </Link>
                            <Link href={"mailto:suporte.lgc@consulting.ao"} className="self-stretch text-[#091622] text-lg font-bold leading-[25.20px]">
                                suporte.lgc@consulting.ao
                            </Link>
                        </div>
                    </div>
                    <div className="mt-[144px]">
                        <div className=" border border-[#e0dfe6]" />
                        <p className=" text-[#091622] text-base font-normal leading-normal mb-6 mt-10">
                            BENGUELA
                        </p>
                        <div className=" flex-col justify-start items-start gap-2 inline-flex">
                            <p className="self-stretch text-[#091622] text-lg font-bold leading-[25.20px]">
                                Rua Rainha Nginga, Avenida 2034
                            </p>
                            <Link href={"tel:+244924931394"} className="self-stretch text-[#091622] text-lg font-bold leading-[25.20px]">
                                +244 924 931 394
                            </Link>
                            <Link href={"mailto:suporte.lgc@consulting.ao"} className="self-stretch text-[#091622] text-lg font-bold leading-[25.20px]">
                                suporte.lgc@consulting.ao
                            </Link>
                        </div>
                    </div>


                </div>
                <Image
                    alt="Localização da consullab"
                    className="w-full max-w-[696px] lg:w-[489px] border mt-14 lg:mt-0"
                    src={Location}
                />
            </section>

            <div className=" border border-[#e0dfe6] " />

            <section className="flex  mt-10">
                <h2 className="flex-1 text-[#091622] text-base font-normal leading-normal">
                    REDES SOCIAIS
                </h2>
                <div className="flex-1 flex-col justify-start items-start gap-10 inline-flex">
                    <SociolMedium title="Telegram" hrf="https://t.me/lglgc" />
                    <SociolMedium title="Facebook" hrf="https://www.facebook.com/lglgc" />
                    <SociolMedium title="Instagram" hrf="https://www.instagram.com/lglgc" />
                    <SociolMedium title="X" hrf="https://www.linkedin.com/company/lglgc" />
                    <SociolMedium title="LinkedIn" hrf="https://www.linkedin.com/company/lglgc" />
                </div>
            </section>


        </main>
    );
};

export default News;
