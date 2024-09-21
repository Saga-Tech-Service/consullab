import React from "react";
import { FiArrowUp } from "react-icons/fi";
import Image from "next/image";
import TeamConsullab from "@public/assets/teamConsullab.jpg";
import TeamShortFig from "@public/assets/teamShortFig.jpg";
import OurTeam from "@public/assets/OurTeam.jpg";
import { Button } from "@/components/ui/button";
import { CardTeam } from "@/components/TopicSection";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Servico = () => {
    return (
        <main className="w-full flex flex-col max-w-max-width-consullab mx-auto">
            <h1 className="mt-16 w-[696px] text-[#091622] text-5xl font-bold leading-[67.20px]">
                Carreira
            </h1>
            <section className="self-end mt-[95px] w-[488px] h-[232px] flex-col justify-start items-start gap-[72px] inline-flex">
                <div className="self-stretch text-[#091622] text-base font-normal leading-normal">
                    Temos orgulho de reunir pessoas extraordinárias para produzir
                    resultados extraordinários.
                    <br />
                    Gostaríamos de ter a oportunidade de conhecer candidatos interessados
                    em se juntar a uma equipe com sólida reputação de excelência e
                    inovação.
                </div>
                <div className="px-4 py-2 border border-[#091622] justify-center items-center gap-2.5 inline-flex">
                    <div className="text-[#091622] text-base font-semibold leading-normal">
                        VER OPORTUNIDADES DE EMPREGO
                    </div>
                    <div className="w-6 h-6 relative origin-top-left rotate-90" />
                </div>
            </section>
            <section className="h-[120px] flex-col justify-start items-start gap-4 inline-flex my-[72px]">
                <h2 className="self-stretch text-[#091622] text-5xl font-bold leading-[76.80px]">
                    Sinta-se bem para vir trabalhar connosco.
                </h2>
                <p className="self-stretch text-[#091622] text-lg font-normal leading-[27px]">
                    Oferecemos um ambiente de trabalho excepcional e com grande
                    oportunidade crescimento
                </p>
            </section>
            <section className="h-96 justify-between items-start gap-8 inline-flex">
                <div className="flex-col justify-start items-start gap-6 inline-flex">
                    <div className="w-96 h-[0px] border border-[#e0dfe6]" />
                    <div className="self-stretch text-[#091622] text-base font-semibold leading-normal">
                        Sobre o que oferecemos
                    </div>
                </div>
                <div className="w-96 flex-col justify-start items-start gap-8 inline-flex">
                    <div className="self-stretch h-[72px] flex-col justify-start items-start gap-4 flex">
                        <div className="w-96 h-[0px] border border-[#e0dfe6]" />
                        <div className="w-96 justify-between items-start inline-flex">
                            <div className="w-[349px] text-[#091622] text-xl font-medium leading-7">
                                ENVOLVIMENTO NA COMUNIDADE
                            </div>
                            <div className="text-right text-[#091622] text-xl font-medium leading-7">
                                01
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-[72px] flex-col justify-start items-start gap-4 flex">
                        <div className="w-96 h-[0px] border border-[#091622]" />
                        <div className="w-96 justify-between items-start inline-flex">
                            <div className="w-[349px] text-[#091622] text-xl font-medium leading-7">
                                PARTICIPAÇÃO EM PROJECTOS DESAFIANTES
                            </div>
                            <div className="text-right text-[#091622] text-xl font-medium leading-7">
                                03
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-96 flex-col justify-start items-start gap-8 inline-flex">
                    <div className="self-stretch h-11 flex-col justify-start items-start gap-4 flex">
                        <div className="w-96 h-[0px] border border-[#e0dfe6]" />
                        <div className="w-96 justify-between items-start inline-flex">
                            <div className="w-[349px] text-[#091622] text-xl font-medium leading-7">
                                CRESCIMENTO PROFISSIONAL
                            </div>
                            <div className="text-right text-[#091622] text-xl font-medium leading-7">
                                02
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-11 flex-col justify-start items-start gap-4 flex">
                        <div className="w-96 h-[0px] border border-[#091622]" />
                        <div className="w-96 justify-between items-start inline-flex">
                            <div className="w-[349px] text-[#091622] text-xl font-medium leading-7">
                                BENEFÍCIOS ADICIONAIS
                            </div>
                            <div className="text-right text-[#091622] text-xl font-medium leading-7">
                                04
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-[800px] h-auto flex-col justify-start items-start gap-8 inline-flex">
                <div className="self-stretch text-[#091622] text-2xl font-bold leading-[33.60px]">OPORTUNIDADE DE CARREIRA EM DESTAQUE</div>
                <div className="self-stretch h-[0px] border border-[#091622]" />
                <div className="w-[800px] h-[282px] flex-col justify-start items-start gap-6 inline-flex">
                    <Link href={"/equipa/carreira/uxiliar-de-contabilidade"} className="self-stretch justify-between items-center inline-flex">
                        <div className="text-[#173049] text-lg font-normal leading-[27px]">Auxiliar de contabilidade</div>
                        <FaArrowRight className="w-6 h-6 relative" />
                    </Link>
                    <Link href={"/equipa/carreira/uxiliar-de-contabilidade"} className="self-stretch justify-between items-center inline-flex">
                        <div className="text-[#173049] text-lg font-normal leading-[27px]">Auxiliar de contabilidade</div>
                        <FaArrowRight className="w-6 h-6 relative" />
                    </Link>
                    <Link href={"/equipa/carreira/uxiliar-de-contabilidade"} className="self-stretch justify-between items-center inline-flex">
                        <div className="text-[#173049] text-lg font-normal leading-[27px]">Auxiliar de contabilidade</div>
                        <FaArrowRight className="w-6 h-6 relative" />
                    </Link>
                    <Link href={"/equipa/carreira/uxiliar-de-contabilidade"} className="self-stretch justify-between items-center inline-flex">
                        <div className="text-[#173049] text-lg font-normal leading-[27px]">Auxiliar de contabilidade</div>
                        <FaArrowRight className="w-6 h-6 relative" />
                    </Link>
                    <Link href={"/equipa/carreira/uxiliar-de-contabilidade"} className="self-stretch justify-between items-center inline-flex">
                        <div className="text-[#173049] text-lg font-normal leading-[27px]">Auxiliar de contabilidade</div>
                        <FaArrowRight className="w-6 h-6 relative" />
                    </Link>
                    <Link href={"/equipa/carreira/uxiliar-de-contabilidade"} className="self-stretch justify-between items-center inline-flex">
                        <div className="text-[#173049] text-lg font-normal leading-[27px]">Auxiliar de contabilidade</div>
                        <FaArrowRight className="w-6 h-6 relative" />
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Servico;
