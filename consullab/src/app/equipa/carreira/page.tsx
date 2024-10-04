import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoArrowDownOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import {
    SectionService
} from "@/components/sectionService";

const Servico = () => {
    return (
        <main className="containerConssulab flex flex-col">
            <h1 className="mt-10 lg:mt-16 text-[#091622] text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[67.20px] mb-6">
                Carreira
            </h1>
            <section className="lg:self-end lg:mt-[95px] lg:w-[488px] flex-col justify-start items-start lg:gap-[72px] inline-flex">
                <p className="self-stretch text-[#091622] text-base font-normal leading-normal">
                    Temos orgulho de reunir pessoas extraordinárias para produzir
                    resultados extraordinários.
                    <br className="hidden " />
                    Gostaríamos de ter a oportunidade de conhecer candidatos interessados
                    em se juntar a uma equipe com sólida reputação de excelência e
                    inovação.
                </p>
                <Button variant={"outline"} className="text-[#091622] w-full lg:w-auto truncate ring-1 ring-[#091622] rounded-none text-sm lg:text-base font-semibold mt-6">
                    VER OPORTUNIDADES DE EMPREGO
                    <IoArrowDownOutline className="w-6 h-6 ml-2" />
                </Button>
            </section>
            <section className="flex-col justify-start items-start gap-4 inline-flex my-[72px]">
                <h2 className="self-stretch text-[#091622] text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[39.20px]">
                    Sinta-se bem para vir trabalhar connosco.
                </h2>
                <p className="self-stretch text-[#091622] text-lg font-normal leading-[27px]">
                    Oferecemos um ambiente de trabalho excepcional e com grande
                    oportunidade crescimento
                </p>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 mt-[84px] gap-x-4">
                <div className="flex-col justify-start items-start gap-6 inline-flex mb-10">
                    <div className="w-full h-[0px] border border-slate-500/90" />
                    <h5 className="self-stretch text-slate-500 text-sm lg:text-base font-semibold  leading-normal">
                        Sobre o que oferecemos
                    </h5>
                </div>
                <div className="flex-col justify-start items-start gap-8 inline-flex">
                    <SectionService
                        isService
                        title="ENVOLVIMENTO NA COMUNIDADE"
                        number={"01"}
                    />
                    <SectionService
                        isService
                        title="PARTICIPAÇÃO EM PROJECTOS DESAFIANTES"
                        number={"02"}
                    />
                </div>
                <div className="flex-col justify-start items-start gap-8 inline-flex">
                    <SectionService
                        isService title="CRESCIMENTO PROFISSIONAL" number={"03"} />
                    <SectionService
                        isService title="CRESCIMENTO PROFISSIONAL" number={"04"} />
                </div>
            </section>


            <section className="h-auto flex-col justify-start items-start gap-8 inline-flex mt-20">
                <h3 className="self-stretch text-[#091622] text-xl md:text-2xl font-bold leading-7">OPORTUNIDADE DE CARREIRA EM DESTAQUE</h3>
                <div className=" w-full max-w-[800px] self-stretch h-[0px] border border-[#091622]" />
                <nav className="flex-col justify-start items-start gap-6 inline-flex w-full max-w-[800px]">
                    <Link href={"/equipa/carreira/uxiliar-de-contabilidade"} className="flex justify-between items-center w-full">
                        <p className="text-[#173049] text-lg font-normal leading-[27px]">Auxiliar de contabilidade</p>
                        <IoIosArrowForward className="w-6 h-6 relative" />
                    </Link>
                    <Link href={"/equipa/carreira/uxiliar-de-contabilidade"} className="self-stretch justify-between items-center inline-flex">
                        <p className="text-[#173049] text-lg font-normal leading-[27px]">Auxiliar de contabilidade</p>
                        <IoIosArrowForward className="w-6 h-6 relative" />
                    </Link>
                    <Link href={"/equipa/carreira/uxiliar-de-contabilidade"} className="self-stretch justify-between items-center inline-flex">
                        <p className="text-[#173049] text-lg font-normal leading-[27px]">Auxiliar de contabilidade</p>
                        <IoIosArrowForward className="w-6 h-6 relative" />
                    </Link>
                    <Link href={"/equipa/carreira/uxiliar-de-contabilidade"} className="self-stretch justify-between items-center inline-flex">
                        <p className="text-[#173049] text-lg font-normal leading-[27px]">Auxiliar de contabilidade</p>
                        <IoIosArrowForward className="w-6 h-6 relative" />
                    </Link>
                    <Link href={"/equipa/carreira/uxiliar-de-contabilidade"} className="self-stretch justify-between items-center inline-flex">
                        <p className="text-[#173049] text-lg font-normal leading-[27px]">Auxiliar de contabilidade</p>
                        <IoIosArrowForward className="w-6 h-6 relative" />
                    </Link>
                    <Link href={"/equipa/carreira/uxiliar-de-contabilidade"} className="self-stretch justify-between items-center inline-flex">
                        <p className="text-[#173049] text-lg font-normal leading-[27px]">Auxiliar de contabilidade</p>
                        <IoIosArrowForward className="w-6 h-6 relative" />
                    </Link>
                </nav>
            </section>
        </main>
    );
};

export default Servico;
