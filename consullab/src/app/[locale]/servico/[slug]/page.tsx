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
import DiagnosticList from "@/components/DiagnosticList";
import NewsSection from "@/components/NewsSection";
import { AdvancedNewsComponent } from "@/components/news";
import { Separator } from "@/components/Separator";
import ServiceList from "@/components/ServiceList";

const diagnostics = [
    {
        id: "1",
        number: "1",
        title: "Diagnostico normativo",
        description: [
            "Identificação dos regulamentos e normas existentes na instituição;",
            "Analise da aplicação prática dos actuas normas e regulamentos;",
            "Identificação de lacunas regulamentares na instituição.",
        ],
    },
    {
        id: "2",
        number: "2",
        title: "Diagnostico jurídico",
        description: [
            "Levantamento dos dados dos processos jurídicos da instituição;",
            "Identificação dos principais documentos jurídicos que tramitam na instituição;",
            "Identificação do regime jurídico aplicável a instituição.",
        ],
    },
    {
        id: "3",
        number: "3",
        title: "Diagnostico formativo",
        description: [
            "Identificação do quadro formativo dos colaboradores;",
            "Identificação das necessidades formativas dos colaboradores.",
        ],
    },
    {
        id: "4",
        number: "4",
        title: "Diagnostico em arquivo",
        description: [
            "Levantamento dos principais documentos que tramitam na instituição;",
            "Identificação da forma de organização dos arquivos da instituição.",
        ],
    },
];
const newsItems = [
    {
        date: "18/04/2024",
        content:
            "Representando os interesses de vários credores no processo de falência da maior fábrica de malte do México",
        url: "/noticias/falencia-fabrica-malte",
    },
    {
        date: "19/04/2024",
        content:
            "Novo acordo firmado com parceiros internacionais para expansão de serviços",
        url: "/noticias/acordo-expansao-servico",
    },
    {
        date: "20/04/2024",
        content: "Lançamento de programa de mentoria para jovens advogados",
        url: "/noticias/programa-mentoria",
    },
    {
        date: "21/04/2024",
        content:
            "Participação em conferência internacional sobre direito empresarial",
        url: "/noticias/conferencia-direito-empresarial",
    },
    // ... mais itens de notícias
];

const services = [
    { id: '1', title: 'REALIZAÇÃO DE DIAGNOSTICOS INSTITUCIONAIS', number: '1', href: '/servico/diagnosticos-institucionais' },
    { id: '2', title: 'ELABORAÇÃO DE NORMAS', number: '2', href: '/servico/elaboracao-de-normas' },
    { id: '3', title: 'ELABORAÇÃO DE PLANOS ESTRATÉGICOS', number: '3', href: '/servico/planos-estrategicos' },
    { id: '4', title: 'FORMAÇÕES ESPECIALIZADAS', number: '4', href: '/servico/formacoes-especializadas' },
    { id: '5', title: 'CONSULTORIA EM CONTRATAÇÃO PÚBLICA', number: '5', href: '/servico/contratacao-publica' },
    { id: '6', title: 'CONSULTORIA EM MATÉRIA DE RECURSOS HUMANOS', number: '6', href: '/servico/recursos-humanos' },
    { id: '7', title: 'CONSULTORIA JURÍDICA ESPECIALIZADA', number: '7', href: '/servico/consultoria-juridica' },
]
const ServiceConsullab = ({ params }: { params: { slug: string } }) => {
    return (
        <main className="flex flex-col top-margin">
            <section className="containerConssulab flex flex-col">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <Link href={"/servico"} className="font-inter">
                                SERVIÇOS
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>•</BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbPage className="font-inter uppercase">
                                {params.slug}
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <header className="w-full flex justify-between">
                    <h1 className="w-[175px] font-montserrat sm:w-[814px] text-[#091622] text-2xl lg:text-5xl font-bold leading-normal lg:leading-[76.80px] mt-8">
                        Realização de diagnósticos Institucionais
                    </h1>
                    <FiArrowDown className="self-end w-6 h-6 p-1 ring-1 ring-[#091622]  justify-center items-center inline-flex" />
                </header>

                <figure className="w-full h-[394px] sm:h-[720px] bg-[#152232]/20 mt-16 flex justify-center items-center">
                    <Image
                        className="w-full h-full object-cover bg-left-top bg-no-repeat"
                        src={Service1}
                        alt="Serviços 1 da Consullab"
                    />
                </figure>

                <section className="flex flex-col md:flex-row mt-8 space-y-6 lg:space-y-0">
                    <h2 className="font-inter flex flex-1 text-[#091622] text-lg font-normal leading-[27px]">
                        Descrição
                    </h2>
                    <p className="font-inter flex flex-1  lg:w-[488px] text-[#091622] text-lg font-normal leading-[27px]">
                        Toda construção e planificação das actividades de uma instituição
                        exige a realização de diagnósticos profundo para determinar a real
                        situação da instituição de modo a criar soluções para problemas
                        reais e mais adequadas por assentarem em levantamentos reais da
                        situação da organização.
                    </p>
                </section>

                <Separator className="flex border-b border-[#e0dfe6] w-full mt-[99px]" />

                <h3 className="w-[175px] font-inter  text-[#091622] text-base font-medium  leading-normal mt-6">
                    Áreas de incidência{" "}
                </h3>

                <p className="mt-12 mb-72 font-montserrat flex w-full text-[#091622] text-xl lg:text-[32px] font-bold leading-[44.80px]">
                    O diagnostico institucional abrange diversas áreas de trabalho
                </p>

                <section className="flex-col justify-start items-start space-y-72 inline-flex">
                    <DiagnosticList diagnostics={diagnostics} />
                </section>
            </section>

            <section className="containerConssulab mt-72">
                <AdvancedNewsComponent
                    title="Notícias do serviço"
                    news={newsItems}
                    itemsPerPage={2}
                />
            </section>

            <section className="flex flex-col bg-white mt-72 p-72">
                <div className="containerConssulab">
                    <ServiceList
                        className=""
                        variant="default"
                        title="NOSSOS SERVIÇOS"
                        services={services}
                    />
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

export default ServiceConsullab;
