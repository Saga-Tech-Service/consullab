import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import AboutUS from "@public/assets/AboutUs.jpg";
import AboutUS2 from "@public/assets/aboutUs2.jpg";
import Partner from "@public/assets/Partner.jpg";
import { CardInfo } from "@/components/TopicSection";
import { Button } from "@/components/ui/button";
import { TopicAboutUS } from "@/components/TopicSection";

const Servico = () => {
    return (
        <main className="flex flex-col">
            <section className="w-full mx-auto max-w-max-width-consullab ">
                <h1 className="w-[696px] text-[#091622] text-[56px] font-bold leading-[89.60px] mt-16">
                    <b className="flex gap-2">
                        Nós somos{" "}
                        <span className="flex gap-4 border-b-4 mb-10 border-black w-[108px]" />
                    </b>
                    Consullab
                </h1>
                <span className="flex border-b border-[#e0dfe6] mt-[77px]" />
                <div className="w-full flex mt-8">
                    <p className="flex-1 w-[280px] text-[#091622] text-base font-normal leading-normal">
                        A nossa compania
                    </p>
                    <div className="flex flex-col gap-[72px]">
                        <p className="w-[479px] text-[#091622] text-xl font-normal  leading-[30px]">
                            É uma empresa de direito angolano que actua no domínio da
                            consultoria jurídica, financeira, fiscal, de uma forma geral,
                            presta todo tipo de apoio numa modalidade a que denominamos de
                            consultoria institucional para evidenciar a perspectiva integrada
                            e multifacética da nossa actuação.
                        </p>
                    </div>
                </div>
                <section className="mt-[72px]">
                    <Image
                        className="w-full h-full object-cover"
                        src={AboutUS}
                        alt="Serviços da Cosullab"
                    />
                </section>
                <div className="w-full flex mt-8">
                    <div className="relative flex flex-1">
                        <p className=" w-[280px] text-[#091622] text-base font-normal leading-normal">
                            A nossa compania
                        </p>
                        <CardInfo
                            className="self-end absolute end-0 left-0"
                            number="60"
                            title="Pareceres"
                        >
                            emitidos sobre uma quantidade significativa de casos
                        </CardInfo>
                    </div>

                    <div className="flex flex-col gap-[72px]">
                        <p className="w-[479px] text-[#091622] text-xl font-normal  leading-[30px]">
                            A Consullab surgiu da visão de estabelecer parcerias fortes e
                            sustentáveis, que asseguram o desenvolvimento e crescimento das
                            instituições, com destaque para as empresas públicas, privadas e
                            demais entidades. A Consullab foi construída com a crença de que o
                            direito pode e deve ser uma ferramenta poderosa para o sucesso, e
                            não um obstáculo a ser superado.
                        </p>
                        <CardInfo number="30" title="Diplomas">
                            elaborados, entre leis, decretos e regulamentos
                        </CardInfo>
                        <CardInfo number="100" title="Formações">
                            capacitamos muitos quadros em diversas matérias
                        </CardInfo>
                    </div>
                </div>
            </section>
            <section
                className="relative bg-cover bg-center h-screen w-full mt-[72px]"
                style={{ backgroundImage: `url(${AboutUS2.src})` }}
            />
            <h2 className="w-full mx-auto max-w-max-width-consullab h-56 text-center text-[70px] mt-[72px] font-light  leading-[112px] ">
                pessoas e projectos importam no desenvolvimento das instituições
            </h2>
            <section className="flex justify-center items-center w-full max-w-max-width-consullab mx-auto mt-36">
                <div className="max-w-[872px] w-full h-[429px] relative">
                    <div className="w-[429px] h-[0px] left-[435px] top-0 absolute origin-top-left rotate-90 border border-[#cb935d]" />

                    <div className="w-[448px] h-[111px] left-0 top-[24px]  absolute">
                        <div className="w-96 h-[111px] left-0 top-0 absolute">
                            <div className="w-[111px] h-[0px] left-0 top-0 absolute origin-top-left rotate-90 border border-[#cb935d]" />
                            <div className="left-[24px] top-[8px] absolute text-[#cb935d] text-[28px] font-bold leading-[39.20px]">
                                2023
                            </div>
                            <div className="w-[360px] left-[24px] top-[55px] absolute text-[#274a6d] text-base font-normal  leading-normal">
                                Começamos o nosso percurso no mundo da consultoria jurídico
                            </div>
                        </div>
                        <div className="w-6 h-6 left-[424px] top-[44px] absolute bg-[#cb935d] rounded-full" />
                    </div>

                    <div className="w-[448px] h-[111px] left-0 top-[294px] absolute">
                        <div className="w-96 h-[111px] left-0 top-0 absolute">
                            <div className="w-[111px] h-[0px] left-0 top-0 absolute origin-top-left rotate-90 border border-[#cb935d]" />
                            <div className="left-[24px] top-[8px] absolute text-[#cb935d] text-[28px] font-bold leading-[39.20px]">
                                2024
                            </div>
                            <div className="w-[360px] left-[24px] top-[55px] absolute text-[#274a6d] text-base font-normal  leading-normal">
                                Integramos oficialmente o conjunto de empresas do Grupo Lab
                            </div>
                        </div>
                        <div className="w-6 h-6 left-[424px] top-[44px] absolute bg-[#cb935d] rounded-full" />
                    </div>
                    <div className="w-[448px] h-[111px] left-[424px] top-[159px] absolute">
                        <div className="w-96 h-[111px] left-[64px] top-0 absolute">
                            <div className="w-[111px] h-[0px] left-[384px] top-0 absolute origin-top-left rotate-90 border border-[#cb935d]" />
                            <div className="w-[360px] h-[95px] left-0 top-[8px] absolute">
                                <div className="left-0 top-0 absolute text-[#cb935d] text-[28px] font-bold leading-[39.20px]">
                                    2024
                                </div>
                                <div className="w-[360px] left-0 top-[47px] absolute text-[#274a6d] text-base font-normal  leading-normal">
                                    Introduzimos a formação no conjunto de trabalhos que prestamos
                                </div>
                            </div>
                        </div>
                        <div className="w-6 h-6 left-0 top-[44px] absolute bg-[#cb935d] rounded-full" />
                    </div>
                </div>
            </section>
            <section className="flex bg-[#091622] mt-[72px]  w-full ">
                <div className="w-full max-w-max-width-consullab mx-auto h-[987px] px-28 py-[72px]  flex-col justify-start items-start gap-[53px] inline-flex">
                    <div className="w-full border border-[#c2daf4]" />
                    <p className=" text-white text-base font-medium  leading-normal">
                        Não se constrói <br /> um império sozinho
                    </p>
                    <div className="text-white text-5xl font-bold leading-[76.80px]">
                        Reunimos um grupo extraordinário de pessoas, com capacidade e
                        domínio em diversas matérias para construir uma empresa de
                        excelência
                    </div>
                    <div className="h-[264px] flex-col justify-start items-start gap-6 flex">
                        <div className="self-stretch text-[#e0dfe6] text-base font-normal  leading-normal">
                            Ao complementar as habilidades uns dos outros, agimos com
                            diligência e uma determinação silenciosa para elaborar argumentos
                            convincentes que efetivamente resolvam situações críticas.
                        </div>
                        <div className="self-stretch text-[#e0dfe6] text-base font-normal  leading-normal">
                            Nossa estrutura única nos permite aproveitar a inclusão, a
                            flexibilidade e a colaboração para desafiar as expectativas.
                        </div>
                        <div className="self-stretch text-[#e0dfe6] text-base font-normal  leading-normal">
                            Com nossos parceiros e equipe sênior sempre presentes, oferecemos
                            experiência prática em todos os relacionamentos, com foco em
                            proporcionar uma experiência verdadeiramente centrada no cliente.
                            <br />
                        </div>
                    </div>
                    <Button className="px-4 rounded-none py-2 border border-white justify-center items-center gap-2.5 inline-flex">
                        <div className="text-white text-base font-semibold leading-normal">
                            VER EQUIPA
                        </div>
                    </Button>
                </div>
            </section>
            <section className="flex  mt-[72px] w-full">
                <div className=" w-full max-w-max-width-consullab mx-auto  px-28 py-[72px]  flex-col justify-start items-start gap-[53px] inline-flex">
                    <span className="flex w-full border border-[#c2daf4]" />
                    <p className="w-[194px] text-[#091622] text-base font-medium  leading-normal">
                        Uma cultura de trabalho com valores fortes.
                    </p>
                    <p className="w-[1216px] text-[#091622] text-[44px] font-bold  leading-[70.40px]">
                        Os valores da nossa cultura moldam o nosso compromisso em fornecer
                        serviços inigualáveis e com a excelência que se exige
                    </p>
                </div>
            </section>
            <section className="mt-28 space-y-28 w-full max-w-max-width-consullab mx-auto">
                <div className="grid grid-cols-4 grid-flow-row space-x-16">
                    <TopicAboutUS
                        className="col-start-3 col-span-1"
                        title="Democracia"
                        number="01"
                    >
                        os nossos projectos são construídos de forma conjunta com os
                        parceiros/clientes, numa perspectiva de diálogo permanente e livre
                    </TopicAboutUS>
                    <TopicAboutUS
                        className="col-start-4 col-span-1"
                        title="Transparência"
                        number="02"
                    >
                        Os nossos projectos privilegiam soluções fundamentadas e
                        justificáveis, não havendo dúvidas sobre a sua proveniência e
                        eficiência
                    </TopicAboutUS>
                </div>
                <div className="grid grid-cols-4 grid-flow-row space-x-16">
                    <TopicAboutUS title="Progresso" number="03">
                        Acompanhamos os nossos parceiros/clientes e medimos o seu
                        crescimento. As metas inicialmente determinadas são regularmente
                        avaliadas, havendo uma forte preocupação com a sua efectivação.
                        Preocupamo-nos com o crescimento individual dos funcionários sempre
                        na perspectiva de crescimento colectivo e institucional
                    </TopicAboutUS>
                    <TopicAboutUS title="Inovação" number="04">
                        Aplicamos e garantimos o enquadramento das mais nobres e inovadoras
                        técnicas ligadas à gestão do capital humano e não só
                    </TopicAboutUS>
                    ´
                </div>
            </section>

            <section className="flex  mt-[72px] w-full">
                <div className="w-full max-w-max-width-consullab mx-auto  flex-col justify-start items-start gap-[53px] inline-flex">
                    <span className="flex w-full border border-[#c2daf4]" />
                    <p className="w-[194px] text-[#091622] text-base font-medium  leading-normal">
                        Nossos parceiros
                    </p>
                    <div className="flex w-full">
                        <Image src={Partner} alt="parceiro da cxonsullab" />
                        <div className="relative flex flex-col gap-y-2 ml-8 w-full">
                            <div className="flex ">
                                <div className="flex-1 flex flex-col gap-y-2">
                                    <span className="text-[#091622] text-[32px] font-bold leading-[44.80px]">
                                        Jorge Miguel
                                    </span>
                                    <span className="text-[#cb935d] text-base font-bold  leading-normal">
                                        Parceiro
                                    </span>
                                </div>
                                <div className="flex-1 flex gap-2 relative">
                                    <span className="absolute right-16 top-0 border border-black w-10 h-10 flex items-center justify-center " >
                                        <FiArrowLeft />
                                    </span>
                                    <span className="absolute right-0 top-0 border border-black w-10 h-10 flex items-center justify-center" >
                                        <FiArrowRight />
                                    </span>
                                </div>
                            </div>

                            <p className="italic absolute  left-0 bottom-0 w-[696px] text-[#091622] text-2xl leading-[33.60px]">
                                "Acreditamos que o verdadeiro valor de uma consultoria jurídica
                                está na capacidade de antecipar problemas e criar estratégias
                                que protejam e impulsionem os negócios dos nossos clientes."
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Servico;
