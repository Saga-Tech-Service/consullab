import React from "react";
import Blog from "@public/assets/BlogNews.jpg";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";
import { IoChevronForward } from "react-icons/io5";
import Image from "next/image";
import { Link } from "@/i18n/routing";

const BlogSection = (
    <Link
        href={
            "/blog/novas-regras-trabalhistas-entram-em-vigor-e-impactam-relacoes-de-trabalho"
        }
        className="flex flex-col gap-8 w-full"
    >
        <div>
            <div className="w-full h-[0px] border border-[#e0dfe6]" />
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full">
                <div className="w-full flex-col justify-start items-start gap-6 lg:gap-[72px] inline-flex">
                    <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                        <p className="self-stretch text-[#091622] text-xl lg:text-[32px] font-bold leading-7leading-7 lg:leading-[44.80px] mt-6">
                            Novas Regras Trabalhistas Entram em Vigor e Impactam Relações de
                            Trabalho
                        </p>
                        <p className="self-stretch text-[#cb935d] text-xl font-medium leading-7">
                            28 de Janeiro de 2024
                        </p>
                    </div>
                    <button type="button" className="px-4 py-2 border border-[#091622] justify-center items-center gap-2.5 inline-flex w-full lg:w-auto">
                        <span className="w-[110px] text-[#091622] text-base font-semibold leading-normal">
                            LER ARTIGO
                        </span>
                        <IoChevronForward className="w-6 h-6 relative" />
                    </button>
                </div>
                <Image
                    className="flex-1 w-full  lg:max-w-[488px] bg-cover max-h-[254px]"
                    src={Blog}
                    alt="Serviços da Cosullab"
                />
            </div>
        </div>
    </Link>
);

const Servico = () => {
    return (
        <main className="flex flex-col">
            <section
                className="relative flex flex-col justify-center items-end bg-cover bg-center w-full containerConssulab h-[720px]"
                style={{ backgroundImage: `url(${Blog.src})` }}
            >
                <div className="ml-10 md:translate-y-64 translate-y-[400px] self-start w-10 h-10 p-2 origin-top-left  border border-[#c6c4ce] justify-start items-center gap-2.5 inline-flex">
                    <FiArrowDown className="w-6 h-6 relative text-white " />
                </div>
                <div className="space-y-6">
                    <h1 className="text-[#e0dfe6] text-base font-bold uppercase leading-normal">
                        ÚLTIMAS NOTÍCIAS
                    </h1>
                    <div className="flex gap-x-4">
                        <div className="w-[59px] md:w-[104px] h-[0px] border border-white" />
                        <div className="w-[59px] md:w-[104px] h-[0px] border border-white" />
                        <div className="w-[59px] md:w-[104px] h-[0px] border border-white" />
                        <div className="w-[59px] md:w-[104px] h-[0px] border border-white" />
                    </div>
                    <p className="w-[336px] md:w-[560px] text-white text-[28px] md:text-[32px] font-bold leading-[44.80px] md:leading-[51.20px]">
                        Um case de sucesso entre várias empresas do mercado jurídico
                    </p>
                    <div className="text-[#c2daf4] text-base font-normal leading-normal">
                        Deslize pra ver mais
                    </div>
                </div>
            </section>
            <section className="flex flex-col w-full my-[144px] containerConssulab">
                <h2 className="text-[#091622] text-2xl md:text-5xl font-bold leading-[33.60px] md:leading-[76.80px] mb-[72px]">
                    NOTÍCIAS
                </h2>
                <div className="space-y-16">
                    {new Array(5).fill(0).map((_, index) => (
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        <div key={index}>{BlogSection}</div>
                    ))}
                </div>
                <button
                    type="button"
                    className="self-center h-10 px-4 py-2 border border-[#091622] gap-2.5 mt-[72px]"
                >
                    <div className="text-[#091622] text-base font-semibold leading-normal">
                        CARREGAR MAIS
                    </div>
                </button>
            </section>
        </main>
    );
};

export default Servico;
