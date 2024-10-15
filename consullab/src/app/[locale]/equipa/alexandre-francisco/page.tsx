"use client"
import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import Image from "next/image";
import TeamConsullab from "@public/assets/CEODetails.jpg";
import { useRouter } from "@/i18n/routing"
import { useTranslations } from "next-intl";
import { useTypedTranslations } from "@/hooks/useTypedTranslations";

const Servico = () => {

    const router = useRouter()
    const t = useTypedTranslations("DetailsTeam")
    return (
        <main className="w-full flex flex-col">
            <section className="w-full bg-[#091622] py-[72px] mt-[126px]">
                <div className="containerConssulab flex flex-col">
                    <button
                        className="text-white max-w-[200px] truncate items-center justify-center text-lg font-bold leading-[25.20px] gap-2 flex"
                        type="button"
                        onClick={() => router.back()
                        }
                    >
                        <FiArrowLeft className="text-white" />
                        <span>{t("buttonText")}</span>

                    </button>

                    <div className="flex flex-col w-full md:flex-row gap-8 mt-[72px]">
                        <article className="flex-1 flex flex-col ">
                            <h1 className=" text-[#e0dfe6] text-[28px] md:text-3xl lg:text-5xl font-bold lg:leading-[67.20px] font-montserrat">
                                {/* Alexandre <br className="hidden lg:block" /> Francisco */}
                                {t("title")}
                            </h1>
                            <p className="mt-[14px] w-full  text-[#e0dfe6] text-sm md:text-base font-normal  leading-normal font-inter">
                                {t("description1")}
                            </p>
                            <p className="mt-[14px] w-full  text-[#e0dfe6] text-sm md:text-base font-normal  leading-normal font-inter">
                                {t("description2")}
                            </p>
                            <p className="mt-[14px] w-full  text-[#e0dfe6] text-sm md:text-base font-normal  leading-normal font-inter">
                                {t("description3")}
                            </p>
                            <h2 className="mt-10  text-[#e0dfe6] text-[28px] md:text-3xl lg:text-5xl font-bold  lg:leading-[67.20px] font-montserrat">{t("expertise")}</h2>

                            <div className="mt-6 gap-4 justify-between items-center inline-flex border-t border-white">
                                <div className="mt-4 text-[#e0dfe6] text-base md:text-lg lg:text-2xl font-bold lg:leading-[33.60px] font-montserrat">{t("expertise1")}</div>
                                <div className="mt-4 text-right text-[#e0dfe6] text-base md:text-lg lg:text-2xl font-bold leading-[33.60px]  font-montserrat ">{t("expertiseNumber1")}</div>
                            </div>

                            <div className="mt-8 gap-4 justify-between items-center inline-flex border-t border-white">
                                <div className="mt-4 text-[#e0dfe6] text-base md:text-lg lg:text-2xl font-bold leading-[33.60px]  font-montserrat">{t("expertise2")}</div>
                                <div className="mt-4 text-right text-[#e0dfe6] text-base md:text-lg lg:text-2xl font-bold leading-[33.60px]  font-montserrat">{t("expertiseNumber2")}</div>
                            </div>

                        </article>

                        <figure className="flex-1">
                            <Image
                                src={TeamConsullab}
                                alt="Equipa consullab"
                                className="bg-cover bg-center w-full"
                            />
                        </figure>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Servico;
