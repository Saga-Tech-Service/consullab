import React from "react";
import Image from "next/image";
import Service1 from "@public/assets/service1.jpg";
import { Button } from "@/components/ui/button";
import { TopicSection } from "@/components/TopicSection";
import { TopicItem } from "@/components/TopicSection";

const RealizacaoDiagnosticosInstitucionais = () => {
    return (
        <main className="flex flex-col">
            <section className="flex flex-col w-full mx-auto max-w-max-width-consullab ">
                <span className="text-[#c6c4ce] text-base font-medium leading-normal mt-24">
                    SERVIÇOS • REALIZAÇÃO DE DIAGNÓSTICOS INSTITUCIONAIS
                </span>
                <h1 className="w-[814px] text-[#091622] text-5xl font-bold leading-[76.80px] mt-8">
                    Realização de diagnósticos Institucionais
                </h1>
                <figure className="w-full h-[720px] bg-[#152232]/20 mt-16 flex justify-center items-center">
                    <Image
                        className="w-full h-full object-cover"
                        src={Service1}
                        alt="Serviços 1 da Consullab"
                    />
                </figure>

                <section className="flex mt-8">
                    <h2 className="flex flex-1 text-[#091622] text-lg font-normal leading-[27px]">
                        Descrição
                    </h2>
                    <p className="flex flex-1 w-[488px] text-[#091622] text-lg font-normal leading-[27px]">
                        Toda construção e planificação das actividades de uma instituição
                        exige a realização de diagnósticos profundo para determinar a real
                        situação da instituição de modo a criar soluções para problemas
                        reais e mais adequadas por assentarem em levantamentos reais da
                        situação da organização.
                    </p>
                </section>

                <span className="flex border-b border-[#e0dfe6] w-full mt-[72px]" />

                <h3 className="w-[175px] text-[#091622] text-base font-medium  leading-normal mt-6">
                    Áreas de incidência{" "}
                </h3>

                <span className="mt-12 flex w-[1216px] text-[#091622] text-[32px] font-bold leading-[44.80px]">
                    O diagnostico institucional abrange diversas áreas de trabalho
                </span>

                <section className="mt-[72px] h-[922px] flex-col justify-start items-start gap-[72px] inline-flex">
                    <TopicSection title="Diagnostico normativo" number="01">
                        <ul>
                            <li className="list-disc">
                                Identificação dos regulamentos e normas existentes na
                                instituição;
                            </li>
                            <li className="list-disc">
                                Analise da aplicação prática dos actuas normas e regulamentos;
                            </li>
                            <li className="list-disc">
                                Identificação de lacunas regulamentares na instituição.
                            </li>
                        </ul>
                    </TopicSection>
                    <TopicSection title="Diagnostico jurídico" number="02">
                        <ul>
                            <li className="list-disc">
                                Levantamento dos dados dos processos jurídicos da instituição;
                            </li>
                            <li className="list-disc">
                                Identificação dos principais documentos jurídicos que tramitam
                                na instituição;
                            </li>
                            <li className="list-disc">
                                Identificação do regime jurídico aplicável a instituição.
                            </li>
                        </ul>
                    </TopicSection>
                    <TopicSection title="Diagnostico formativo" number="03">
                        <ul>
                            <li className="list-disc">
                                Identificação do quadro formativo dos colaboradores;
                            </li>
                            <li className="list-disc">
                                Identificação das necessidades formativas dos colaboradores.
                            </li>
                        </ul>
                    </TopicSection>
                    <TopicSection title="Diagnostico em arquivo" number="04">
                        <ul>
                            <li className="list-disc">
                                Levantamento dos principais documentos que tramitam na
                                instituição;
                            </li>
                            <li className="list-disc">
                                Identificação da forma de organização dos arquivos da
                                instituição..
                            </li>
                        </ul>
                    </TopicSection>
                </section>
                <section className="mt-[104px] flex">
                    <h4 className="flex flex-1 text-[#091622] text-base font-medium leading-normal">
                        Notícias do serviço
                    </h4>
                    <div className="flex flex-1 w-[800px] h-48 flex-col justify-start items-start gap-8">
                        <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[0px] border border-[#e0dfe6]" />
                            <div className="w-[800px] relative">
                                <div className="left-0 top-0 absolute text-[#274a6d] text-lg font-bold leading-[25.20px]">
                                    18/04/2024
                                </div>
                                <div className="w-[592px] left-[208px] top-0 absolute text-[#091622] text-base font-normal leading-normal">
                                    Representando os interesses de vários credores no processo de
                                    falência da maior fábrica de malte do México
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[0px] border border-[#e0dfe6]" />
                            <div className="w-[800px] relative">
                                <div className="left-0 top-0 absolute text-[#274a6d] text-lg font-bold leading-[25.20px]">
                                    18/04/2024
                                </div>
                                <div className="w-[592px] left-[208px] top-0 absolute text-[#091622] text-base font-normal leading-normal">
                                    Representando os interesses de vários credores no processo de
                                    falência da maior fábrica de malte do México
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Button
                    type="button"
                    className="mt-[72px] rounded-none h-10 px-4 py-2 bg-[#091622] self-center justify-center items-center gap-2.5 inline-flex"
                >
                    <div className="text-white text-base font-semibold leading-normal">
                        VER TODAS NOTÍCIAS
                    </div>
                </Button>
            </section>

            <section className="flex flex-col  h-[456px] bg-white mt-[72px]">
                <div className="flex mx-auto max-w-max-width-consullab w-full mt-[72px] mb-24">
                    <div className="flex flex-1">
                        <div className="h-[71px] flex-col justify-start items-start gap-6 inline-flex">
                            <div className="w-96 h-[0px] border border-[#e0dfe6]" />
                            <div className="self-stretch h-[47px] text-[#091622] text-base font-medium leading-normal">
                                Mais serviços
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 grid-flow-row gap-6">

                        <TopicItem
                            number="01"
                            title="REALIZAÇÃO DE DIAGNOSTICOS INSTITUCIONAIS"
                        />

                        <TopicItem
                            number="02"
                            title="CONSULTORIA EM CONTRATAÇÃO PÚBLICA"
                        />

                        <TopicItem
                            number="03"
                            title="ELABORAÇÃO DE PLANOS ESTRATÉGICOS"
                        />
                        <TopicItem
                            number="04"
                            title="CONSULTORIA JURÍDICA ESPECIALIZADA"
                        />
                    </div>
                </div>
                <Button type="button" className="bg-white rounded-none  h-10 w-[181px] px-4 py-2 border border-[#091622] self-center gap-2.5 inline-flex text-[#091622] text-base font-semibold leading-normal">
                    VER TODAS NOTÍCIAS
                </Button>
            </section >


        </main >
    );
};

export default RealizacaoDiagnosticosInstitucionais;
