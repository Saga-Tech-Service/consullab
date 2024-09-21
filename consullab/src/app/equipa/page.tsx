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
            <section className="w-full mx-auto max-w-max-width-consullab flex flex-col">
                <h1 className="mt-24 text-[#091622] text-5xl font-bold leading-[76.80px]">
                    A Consullab está ansiosa <br /> para se apresentar à você
                </h1>
                <div className="flex flex-col  self-end mt-[98px]">
                    <p className=" w-[488px] text-[#091622] text-base font-normal  leading-normal">
                        Olhamos além da questão de hoje. Também gostamos de olhar para as
                        oportunidades e desafios de amanhã. Para o futuro e para o seu ponto
                        no horizonte. Fazemos isso com uma equipe de especialistas
                        entusiasmados que possuem todo o conhecimento jurídico necessário no
                        caminho para um futuro sustentável e de sucesso.
                    </p>
                    <Button className="mt-10 bg-white w-32 rounded-none h-10 px-4 py-2 border border-[#091622] justify-center items-center gap-2.5 inline-flex">
                        <div id="nossa" className=" text-[#091622] text-base font-semibold leading-normal">
                            NOSSA EQUIPA
                        </div>
                        <FiArrowUp className="w-6 h-6 relative rotate-180 text-black" />
                    </Button>
                </div>
                <span className="mt-20 w-[696px] text-[#091622] text-[40px] font-bold  leading-[64px]">
                    Uma equipa experiente e diversificada
                </span>
                <p className="mt-32 self-end w-[488px] text-[#091622] text-base font-normal leading-normal">
                    Contamos com mais de 20 anos de experiência entre consultores,
                    advogados, economistas e gestores com domínio em diversas matérias
                </p>
            </section>
            <section className="w-full h-[738px] bg-[#091622] py-[72px] mt-[72px] ">
                <div className="w-full mx-auto max-w-max-width-consullab flex justify-between">
                    <div className="flex gap-8 ">
                        <Image src={TeamConsullab} alt="Equipa consullab" className="" />
                        <div className="w-96 self-end">
                            <div className="text-white text-base font-medium leading-normal">
                                Privado
                            </div>
                            <span className="text-[#c6c4ce] text-base font-normal leading-normal ">
                                Quer se trate do fim do seu relacionamento ou de uma disputa
                                sobre a resolução de um testamento, as questões jurídicas do
                                direito pessoal e familiar e do direito sucessório podem ter um
                                impacto profundo na sua vida pessoal. Além disso, muitas vezes
                                são acompanhados de muitas emoções. Nossos especialistas
                                experientes sabem disso melhor do que ninguém. Estamos felizes
                                em ajudá-lo para que você possa olhar para o futuro com
                                confiança.
                            </span>
                        </div>
                    </div>
                    <Image
                        src={TeamShortFig}
                        alt="Equipa consullab"
                        className="self-start"
                    />
                </div>
            </section>
            <section className="w-full  opacity-95 bg-[#091622]">
                <div className="w-full mx-auto max-w-max-width-consullab my-[72px]">
                    <span className="w-96 text-right text-white text-5xl font-bold  leading-[76.80px]  self-end">
                        Nossa equipa
                    </span>
                    <div className="grid grid-cols-4 grid-flow-row gap-2 mt-[85.5px] space-y-[33px]">
                        <CardTeam className="col-span-2" title="Advogado" src={OurTeam} >
                            Alexandre Francisco
                        </CardTeam>
                        <CardTeam title="Advogado" src={OurTeam} >
                            Alexandre Francisco
                        </CardTeam>
                        <CardTeam title="Advogado" src={OurTeam} >
                            Alexandre Francisco
                        </CardTeam>
                        <CardTeam title="Advogado" src={OurTeam} >
                            Alexandre Francisco
                        </CardTeam>
                        <CardTeam className="col-span-2" title="Advogado" src={OurTeam} >
                            Alexandre Francisco
                        </CardTeam>
                        <CardTeam title="Advogado" src={OurTeam} >
                            Alexandre Francisco
                        </CardTeam>
                        <CardTeam className="col-span-2" title="Advogado" src={OurTeam} >
                            Alexandre Francisco
                        </CardTeam>
                        <CardTeam className="col-span-2" title="Advogado" src={OurTeam} >
                            Alexandre Francisco
                        </CardTeam>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Servico;
