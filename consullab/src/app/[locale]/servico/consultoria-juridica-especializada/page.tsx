import React from "react";
import Image from "next/image";
import Service1 from "@public/assets/service1.jpg";
import { Button } from "@/components/ui/button";
import { TopicSection } from "@/components/TopicSection";
import { TopicItem } from "@/components/TopicSection";
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FiArrowDown } from "react-icons/fi";
import { ServiceNews } from "@/components/TopicSection";
import { SectionService } from "@/components/sectionService";
import { Link } from "@/i18n/routing";

const RealizacaoDiagnosticosInstitucionais = () => {
    return (
        <main className="flex flex-col">
            <section className="containerConssulab flex flex-col">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <Link href={"/servico"}>SERVIÇOS</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbPage>
                                REALIZAÇÃO DE DIAGNÓSTICOS INSTITUCIONAIS
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <header className="w-full flex justify-between">
                    <h1 className="w-[175px] sm:w-[814px] text-[#091622] text-2xl lg:text-5xl font-bold leading-normal lg:leading-[76.80px] mt-8">
                        Realização de diagnósticos Institucionais
                    </h1>
                    <FiArrowDown className="self-end w-6 h-6 p-1 ring-1 ring-[#091622]  justify-center items-center inline-flex" />
                </header>

                <figure className="w-full h-[394px] sm:h-[720px] bg-[#152232]/20 mt-16 flex justify-center items-center">
                    <Image
                        className="w-full h-full object-cover bg-left-top"
                        src={Service1}
                        alt="Serviços 1 da Consullab"
                    />
                </figure>

                <section className="flex flex-col md:flex-row mt-8 space-y-6">
                    <h2 className="flex flex-1 text-[#091622] text-lg font-normal leading-[27px]">
                        Descrição
                    </h2>
                    <p className="flex flex-1  lg:w-[488px] text-[#091622] text-lg font-normal leading-[27px]">
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

                <span className="mt-12 flex w-full text-[#091622] text-xl lg:text-[32px] font-bold leading-[44.80px]">
                    O diagnostico institucional abrange diversas áreas de trabalho
                </span>

                <section className="mt-[72px] flex-col justify-start items-start gap-[72px] inline-flex">
                    <TopicSection title="Diagnostico normativo" number="01">
                        <ul className="list-inside list-disc">
                            <li className="">
                                Identificação dos regulamentos e normas existentes na
                                instituição;
                            </li>
                            <li>
                                Analise da aplicação prática dos actuas normas e regulamentos;
                            </li>
                            <li>Identificação de lacunas regulamentares na instituição.</li>
                        </ul>
                    </TopicSection>
                    <TopicSection title="Diagnostico jurídico" number="02">
                        <ul className="list-inside list-disc">
                            <li>
                                Levantamento dos dados dos processos jurídicos da instituição;
                            </li>
                            <li>
                                Identificação dos principais documentos jurídicos que tramitam
                                na instituição;
                            </li>
                            <li>Identificação do regime jurídico aplicável a instituição.</li>
                        </ul>
                    </TopicSection>
                    <TopicSection title="Diagnostico formativo" number="03">
                        <ul className="list-inside list-disc">
                            <li>Identificação do quadro formativo dos colaboradores;</li>
                            <li>
                                Identificação das necessidades formativas dos colaboradores.
                            </li>
                        </ul>
                    </TopicSection>
                    <TopicSection title="Diagnostico em arquivo" number="04">
                        <ul className="list-inside list-disc">
                            <li>
                                Levantamento dos principais documentos que tramitam na
                                instituição;
                            </li>
                            <li>
                                Identificação da forma de organização dos arquivos da
                                instituição..
                            </li>
                        </ul>
                    </TopicSection>
                </section>
            </section>

            <section className="containerConssulab flex flex-col md:flex-row justify-between gap-4">
                <header className="w-full md:max-w-[280px] space-y-6">
                    <div className="w-full h-[0px] border border-[#e0dfe6]" />
                    <h2 className="text-[#091622] text-base font-medium leading-normal">
                        Notícias do serviço
                    </h2>
                </header>
                <section className="flex flex-col space-y-8 mt-10 md:mt-0">
                    <ServiceNews
                        date="18/04/2024"
                        content="Representando os interesses de vários credores no processo de
                                falência da maior fábrica de malte do México"
                    />
                    <ServiceNews
                        date="18/04/2024"
                        content="Representando os interesses de vários credores no processo de
                                falência da maior fábrica de malte do México"
                    />
                </section>
            </section>

            <section className="containerConssulab text-center mt-8">
                <Button
                    type="button"
                    className="mt-[72px] self-center rounded-none text-[#091622] md:text-white text-sm font-semibold uppercase leading-[21px] w-full max-w-[336px] h-[37px] px-4 py-2 bg-[#4f7faf] md:bg-[#091622]  inline-flex"
                >
                    VER TODAS NOTÍCIAS
                </Button>
            </section>

            <section className="w-full flex flex-col bg-white mt-[72px] pb-[72px]">
                <div className="containerConssulab grid grid-cols-1 lg:grid-cols-3 gap-y-10 mt-[84px] gap-x-4">
                    <div className="flex-col justify-start items-start gap-6 inline-flex mb-10">
                        <div className="w-full h-[0px] border border-[#091622]" />
                        <h5 className="self-stretch text-[#091622] text-sm lg:text-base font-semibold  leading-normal">
                            OUTROS SERVIÇOS
                        </h5>
                    </div>
                    <div className="flex-col justify-start items-start gap-8 inline-flex">
                        <SectionService
                            hrf="/servico/#"
                            isService
                            title="REALIZAÇÃO DE DIAGNOSTICOS INSTITUCIONAL"
                            number={"01"}
                        />
                        <SectionService
                            hrf="/servico/#"
                            isService
                            title="ELABORAÇÃO DE PLANOS ESTRATÉGICOS"
                            number={"02"}
                        />
                        <SectionService
                            hrf="/servico/#"
                            isService
                            title="CONSULTORIA EM CONTRATAÇÃO PÚBLICA"
                            number={"03"}
                        />
                        <SectionService
                            hrf="/servico/#"
                            isService
                            title="CONSULTORIA JURÍDICA ESPECIALIZADA"
                            number={"04"}
                        />
                    </div>
                    <div className="flex-col justify-start items-start gap-8 inline-flex">
                        <SectionService
                            hrf="/servico/#"
                            isService
                            title="ELABORAÇÃO DE NORMAS"
                            number={"05"}
                        />
                        <SectionService
                            hrf="/servico/#"
                            isService
                            title="FORMAÇÕES ESPECIALIZADAS"
                            number={"06"}
                        />
                        <SectionService
                            hrf="/servico/#"
                            isService
                            title="CONSULTORIA EM MATÉRIA DE RECURSOS HUMANOS"
                            number={"07"}
                        />
                    </div>
                </div>
                <Button
                    variant={"outline"}
                    type="button"
                    className="mt-24 bg-white rounded-none  h-10 w-[181px] px-4 py-2 border border-[#091622] self-center gap-2.5 inline-flex text-[#091622] text-base font-semibold leading-normal"
                >
                    VER TODAS NOTÍCIAS
                </Button>
            </section>
        </main>
    );
};

export default RealizacaoDiagnosticosInstitucionais;
