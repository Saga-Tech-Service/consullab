import React from "react";
import { FiArrowUp } from "react-icons/fi";
import Image from "next/image";
import TeamConsullab from "@public/assets/teamConsullab.jpg";
import TeamShortFig from "@public/assets/teamShortFig.jpg";
import OurTeam from "@public/assets/OurTeam.jpg";
import { Button } from "@/components/ui/button";
import { CardTeam } from "@/components/TopicSection";

const Servico = () => {
    return (
        <main className="w-full flex flex-col">
            <section className="containerConssulab flex flex-col">
                <h1 className="mt-10 md:mt-24 text-[#091622] text-[28px] md:text-5xl font-bold leading-[39.20px md:leading-[76.80px]">
                    A Consullab está ansiosa <br /> para se apresentar à você
                </h1>

                <div className="flex flex-col  md:self-end mt-6 md:mt-[98px]">
                    <p className="w-full md:w-[488px] text-[#091622] text-sm md:text-base font-normal  leading-[21px] md:leading-normal">
                        Olhamos além da questão de hoje. Também gostamos de olhar para as
                        oportunidades e desafios de amanhã. Para o futuro e para o seu ponto
                        no horizonte. Fazemos isso com uma equipe de especialistas
                        entusiasmados que possuem todo o conhecimento jurídico necessário no
                        caminho para um futuro sustentável e de sucesso.
                    </p>
                    <Button className="mt-6 md:mt-10 bg-white w-full md:w-32 rounded-none h-10 px-4 py-2 border border-[#091622] justify-center items-center gap-2.5 inline-flex">
                        <div
                            id="nossa"
                            className=" text-[#091622] text-base font-semibold leading-normal"
                        >
                            NOSSA EQUIPA
                        </div>
                        <FiArrowUp className="w-6 h-6 relative rotate-180 text-black" />
                    </Button>
                </div>

                <h2 className="mt-20 w-[696px] text-[#091622] text-[28px] md:text-[40px] font-bold  md:leading-[64px] leading-[39.20px]">
                    Uma equipa experiente e diversificada
                </h2>
                <p className="mt-6 md:mt-32 md:self-end md:w-[488px] text-[#091622] text-base md:text-base font-normal leading-[21px] md:leading-normal">
                    Contamos com mais de 20 anos de experiência entre consultores,
                    advogados, economistas e gestores com domínio em diversas matérias
                </p>
            </section>
            <section className="w-full bg-[#091622] py-[72px] mt-[72px] ">
                <div className="containerConssulab flex justify-between gap-x-6">
                    <div className="flex gap-8 ">
                        <Image
                            src={TeamConsullab}
                            alt="Equipa consullab"
                            className="h-[431px] md:h-[594px]"
                        />
                        <div className="w-96 self-end hidden lg:grid">
                            <p className="text-white text-base font-medium leading-normal">
                                Privado
                            </p>
                            <p className="text-[#c6c4ce] text-sm lg:text-base font-normal leading-normal ">
                                Quer se trate do fim do seu relacionamento ou de uma disputa
                                sobre a resolução de um testamento, as questões jurídicas do
                                direito pessoal e familiar e do direito sucessório podem ter um
                                impacto profundo na sua vida pessoal. Além disso, muitas vezes
                                são acompanhados de muitas emoções. Nossos especialistas
                                experientes sabem disso melhor do que ninguém. Estamos felizes
                                em ajudá-lo para que você possa olhar para o futuro com
                                confiança.
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
                        Privado
                    </p>
                    <p className="text-[#c6c4ce] text-sm lg:text-base font-normal leading-normal ">
                        Quer se trate do fim do seu relacionamento ou de uma disputa sobre a
                        resolução de um testamento, as questões jurídicas do direito pessoal
                        e familiar e do direito sucessório podem ter um impacto profundo na
                        sua vida pessoal. Além disso, muitas vezes são acompanhados de
                        muitas emoções. Nossos especialistas experientes sabem disso melhor
                        do que ninguém. Estamos felizes em ajudá-lo para que você possa
                        olhar para o futuro com confiança.
                    </p>
                </div>
            </section>
            <section className="w-full  opacity-95 bg-[#091622]">
                <div className="containerConssulab my-[72px]">
                    <div className="flex items-end justify-end">
                        <h3 className="w-96 text-right text-white text-5xl font-bold  leading-[76.80px]  self-end">
                            Nossa equipa
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-2 mt-[85.5px] gap-y-[33px] gap-x-[33px]">
                        {/* Item ocupando 2 colunas em telas grandes, mas 1 coluna no mobile */}
                        <CardTeam className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2" title="Advogado" src={OurTeam}>
                            Alexandre Francisco
                        </CardTeam>

                        {/* Itens ocupando 1 coluna em qualquer tela */}
                        <CardTeam className="col-span-1" title="Advogado" src={OurTeam}>
                            Alexandre Francisco
                        </CardTeam>

                        <CardTeam className="col-span-1" title="Advogado" src={OurTeam}>
                            Alexandre Francisco
                        </CardTeam>

                        <CardTeam className="col-span-1" title="Advogado" src={OurTeam}>
                            Alexandre Francisco
                        </CardTeam>

                        {/* Mais itens ocupando 1 coluna no mobile e telas maiores */}
                        <CardTeam className="col-span-1" title="Advogado" src={OurTeam}>
                            Alexandre Francisco
                        </CardTeam>

                        <CardTeam className="col-span-1" title="Advogado" src={OurTeam}>
                            Alexandre Francisco
                        </CardTeam>

                        {/* Itens ocupando 2 colunas no mobile, mas ajustados em 1 coluna em resoluções maiores */}
                        <CardTeam className="col-span-1 md:col-span-2 " title="Advogado" src={OurTeam}>
                            Alexandre Francisco
                        </CardTeam>

                        <CardTeam className="col-span-1 md:col-span-2 lg:col-span-1" title="Advogado" src={OurTeam}>
                            Alexandre Francisco
                        </CardTeam>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default Servico;
