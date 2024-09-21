import React from "react";
import Blog from "@public/assets/BlogNews.jpg";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const BlogSection = (
    <Link href={"/blog/novas-regras-trabalhistas-entram-em-vigor-e-impactam-relacoes-de-trabalho"} className="h-[286px] flex flex-col gap-8 w-full">
        <div className="self-stretch h-[0px] border border-[#e0dfe6]" />
        <div className="flex justify-between items-center w-full">
            <div className="w-[696px] flex-col justify-start items-start gap-[72px] inline-flex">
                <div className="self-stretch h-[142px] flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch text-[#091622] text-[32px] font-bold leading-[44.80px]">
                        Novas Regras Trabalhistas Entram em Vigor e Impactam Relações de
                        Trabalho
                    </div>
                    <div className="self-stretch text-[#cb935d] text-xl font-medium leading-7">
                        28 de Janeiro de 2024
                    </div>
                </div>
                <div className="px-4 py-2 border border-[#091622] justify-center items-center gap-2.5 inline-flex">
                    <div className="w-[110px] text-[#091622] text-base font-semibold leading-normal">
                        LER ARTIGO
                    </div>
                    <FiArrowRight className="w-6 h-6 relative" />
                </div>
            </div>
            <Image
                className="flex-1 max-w-[488px] max-h-[254px]"
                src={Blog}
                alt="Serviços da Cosullab"
            />
        </div>
    </Link>
);

const Servico = () => {
    return (
        <main className="flex flex-col">
            <section
                className="relative flex flex-col justify-center items-end bg-cover bg-center w-full mt-[72px] max-w-max-width-consullab mx-auto h-[720px]"
                style={{ backgroundImage: `url(${Blog.src})` }}
            >
                <div className="ml-10 translate-y-64 self-start w-10 h-10 p-2 origin-top-left  border border-[#c6c4ce] justify-start items-center gap-2.5 inline-flex">
                    <FiArrowDown className="w-6 h-6 relative text-white " />
                </div>
                <div className="space-y-6">
                    <h1 className="text-[#e0dfe6] text-base font-bold uppercase leading-normal">
                        ÚLTIMAS NOTÍCIAS
                    </h1>
                    <div className="flex gap-x-4">
                        <div className="w-[104px] h-[0px] border border-white" />
                        <div className="w-[104px] h-[0px] border border-white" />
                        <div className="w-[104px] h-[0px] border border-white" />
                        <div className="w-[104px] h-[0px] border border-white" />
                    </div>
                    <p className="max-w-[560px] text-white text-[32px] font-bold  leading-[51.20px]">
                        Um case de sucesso entre várias empresas do mercado jurídico
                    </p>
                    <div className="text-[#c2daf4] text-base font-normal leading-normal">
                        Deslize pra ver mais
                    </div>
                </div>
            </section>
            <section className="flex flex-col w-full my-[144px] max-w-max-width-consullab mx-auto">
                <h2 className="text-[#091622] text-5xl font-bold leading-[76.80px]">
                    NOTÍCIAS
                </h2>
                <div className="space-y-16">
                    {new Array(5).fill(0).map((_, index) => (
                        <div key={index}>{BlogSection}</div>
                    ))}
                </div>
                <button type="button" className="self-center h-10 px-4 py-2 border border-[#091622] gap-2.5 mt-[72px]">
                    <div className="text-[#091622] text-base font-semibold leading-normal">CARREGAR MAIS</div>
                </button>
            </section>
        </main>
    );
};

export default Servico;
