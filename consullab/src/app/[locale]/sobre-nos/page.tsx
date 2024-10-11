import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import AboutUS from "@public/assets/AboutUs.jpg";
import AboutUS2 from "@public/assets/aboutUs2.jpg";
import Partner from "@public/assets/Partner.jpg";
import { CardInfo } from "@/components/TopicSection";
import { Button } from "@/components/ui/button";
import { TopicAboutUS } from "@/components/TopicSection";
import { Separator } from "@radix-ui/react-select";

const Servico = () => {
    return (
        <main className="flex flex-col">
            <section className="containerConssulab top-margin">
                <h1 className="relative lg:grid hidden w-[696px] text-[#091622] text-[56px] font-bold font-montserrat leading-[89.60px]">
                    <Separator className="absolute left-80 top-12 w-[108px] h-[0px] border-4 border-[#091622]" />
                    Nós somos <br />Consullab
                </h1>


                <h1 className="w-[336px] h-[78px] relative lg:hidden mt-16">
                    <div className="w-[336px] left-0 top-0 absolute text-[#091622] text-[28px] font-bold  leading-[39.20px]">
                        Nós somos <br />
                        Consullab
                    </div>
                    <div className="w-[72px] h-[0px] left-[176px] top-[23px] absolute border-2 border-[#091622]" />
                </h1>
                <Separator className="border-b border-[#e0dfe6] mt-[77px]" />
                <div className="w-full flex flex-col gap-y-10 sm:gap-y-0 sm:flex-row mt-8">
                    <p className="flex-1 w-full sm:w-[280px] text-[#091622] text-sm sm:text-base font-normal leading-normal font-montserrat">
                        A nossa compania
                    </p>
                    <div className="flex flex-col gap-[72px]">
                        <p className="w-full sm:w-[479px] text-[#091622] text-sm sm:text-xl font-normal leading-[21px] sm:leading-[30px] font-inter">
                            É uma empresa de direito angolano que actua no domínio da
                            consultoria jurídica, financeira, fiscal, de uma forma geral,
                            presta todo tipo de apoio numa modalidade a que denominamos de
                            consultoria institucional para evidenciar a perspectiva integrada
                            e multifacética da nossa actuação.
                        </p>
                    </div>
                </div>
                <section className="mt-[120px]">
                    <Image
                        className="w-full h-full object-cover"
                        src={AboutUS}
                        alt="Serviços da Cosullab"
                    />
                </section>
                <div className="w-full flex mt-8 space-x-8">
                    <div className="relative md:flex flex-1 hidden">
                        <h2 className="font-montserrat w-[280px] text-[#091622] text-base font-normal leading-normal">
                            A nossa compania
                        </h2>
                        <CardInfo
                            className="self-end absolute end-0 left-0"
                            number="60"
                            title="Pareceres"
                        >
                            emitidos sobre uma quantidade significativa de casos
                        </CardInfo>
                    </div>

                    <div className="flex flex-col gap-[72px] w-full md:w-auto">
                        <h2 className="flex md:hidden mb-8 w-[280px] text-[#091622] text-base font-normal leading-normal  font-montserrat">
                            A nossa compania
                        </h2>
                        <p className="w-full lg:w-[479px] mb-24 text-[#091622] text-xl font-normal  leading-[30px] font-inter">
                            A Consullab surgiu da visão de estabelecer parcerias fortes e
                            sustentáveis, que asseguram o desenvolvimento e crescimento das
                            instituições, com destaque para as empresas públicas, privadas e
                            demais entidades. A Consullab foi construída com a crença de que o
                            direito pode e deve ser uma ferramenta poderosa para o sucesso, e
                            não um obstáculo a ser superado.
                        </p>
                        <CardInfo number="30" title="Diplomas" className="mb-[72px]">
                            elaborados, entre leis, decretos e regulamentos
                        </CardInfo>
                        <CardInfo
                            className="flex md:hidden mb-[72px]"
                            number="60"
                            title="Pareceres"
                        >
                            emitidos sobre uma quantidade significativa de casos
                        </CardInfo>
                        <CardInfo number="100" title="Formações" className="">
                            capacitamos muitos quadros em diversas matérias
                        </CardInfo>
                    </div>
                </div>
            </section>



            <section
                className="relative bg-cover lg:bg-center bg-right h-screen max-h-[400px] lg:max-h-[720px] w-full mt-72"
                style={{ backgroundImage: `url(${AboutUS2.src})` }}
            />

            <h2 className="containerConssulab text-center text-2xl xl:text-[70px] mt-[72px] font-light leading-[38.40px] md:leading-[112px] font-montserrat">
                pessoas e projectos importam no desenvolvimento das instituições
            </h2>

            <section className="hidden lg:flex containerConssulab justify-center items-center mt-36  ">
                <div className="max-w-[872px] w-full h-[429px] relative">
                    <div className="w-[429px] h-[0px] left-[435px] top-0 absolute origin-top-left rotate-90 border border-[#cb935d]" />

                    <div className="w-[448px] h-[111px] left-0 top-[24px]  absolute">
                        <div className="w-96 h-[111px] left-0 top-0 absolute">
                            <div className="w-[111px] h-[0px] left-0 top-0 absolute origin-top-left rotate-90 border border-[#cb935d]" />
                            <div className="left-[24px] top-[8px] absolute text-[#cb935d] text-[28px] font-bold leading-[39.20px] font-inter">
                                2023
                            </div>
                            <div className="w-[360px] left-[24px] top-[55px] absolute text-[#274a6d] text-base font-normal  leading-normal font-inter">
                                Começamos o nosso percurso no mundo da consultoria jurídico
                            </div>
                        </div>
                        <div className="w-6 h-6 left-[424px] top-[44px] absolute bg-[#cb935d] rounded-full" />
                    </div>

                    <div className="w-[448px] h-[111px] left-0 top-[294px] absolute">
                        <div className="w-96 h-[111px] left-0 top-0 absolute">
                            <div className="w-[111px] h-[0px] left-0 top-0 absolute origin-top-left rotate-90 border border-[#cb935d]" />
                            <div className="left-[24px] top-[8px] absolute text-[#cb935d] text-[28px] font-bold leading-[39.20px] font-inter">
                                2024
                            </div>
                            <div className="w-[360px] left-[24px] top-[55px] absolute text-[#274a6d] text-base font-normal  leading-normal font-inter">
                                Integramos oficialmente o conjunto de empresas do Grupo Lab
                            </div>
                        </div>
                        <div className="w-6 h-6 left-[424px] top-[44px] absolute bg-[#cb935d] rounded-full" />
                    </div>
                    <div className="w-[448px] h-[111px] left-[424px] top-[159px] absolute">
                        <div className="w-96 h-[111px] left-[64px] top-0 absolute">
                            <div className="w-[111px] h-[0px] left-[384px] top-0 absolute origin-top-left rotate-90 border border-[#cb935d]" />
                            <div className="w-[360px] h-[95px] left-0 top-[8px] absolute">
                                <div className="left-0 top-0 absolute text-[#cb935d] text-[28px] font-bold leading-[39.20px] font-inter">
                                    2024
                                </div>
                                <div className="w-[360px] left-0 top-[47px] absolute text-[#274a6d] text-base font-normal  leading-normal font-inter">
                                    Introduzimos a formação no conjunto de trabalhos que prestamos
                                </div>
                            </div>
                        </div>
                        <div className="w-6 h-6 left-0 top-[44px] absolute bg-[#cb935d] rounded-full" />
                    </div>
                </div>
            </section>
            <div className="lg:hidden flex containerConssulab w-[335px] h-[426px] relative">
                <div className="w-[426px] h-[0px] left-[11px] top-0 absolute origin-top-left rotate-90 border border-[#cb935d]" />
                <div className="w-[335px] h-[110px] left-0 top-[24px] absolute">
                    <div className="w-[287px] h-[110px] left-[48px] top-0 absolute">
                        <div className="w-[110px] h-[0px] left-[287px] top-0 absolute origin-top-left rotate-90 border border-[#cb935d]" />
                        <div className="w-[263px] h-[78px] left-0 top-[16px] absolute">
                            <div className="left-0 top-0 absolute text-[#cb935d] text-xl font-bold  leading-7 font-inter">
                                2023
                            </div>
                            <div className="w-[263px] left-0 top-[36px] absolute text-[#274a6d] text-sm font-normal leading-[21px] font-inter">
                                Começamos o nosso percurso no mundo da consultoria jurídico
                            </div>
                        </div>
                    </div>
                    <div className="w-6 h-6 left-0 top-[43px] absolute bg-[#cb935d] rounded-full" />
                </div>
                <div className="w-[335px] h-[110px] left-0 top-[158px] absolute">
                    <div className="w-[287px] h-[110px] left-[48px] top-0 absolute">
                        <div className="w-[110px] h-[0px] left-[287px] top-0 absolute origin-top-left rotate-90 border border-[#cb935d]" />
                        <div className="w-[263px] h-[78px] left-0 top-[16px] absolute">
                            <div className="left-0 top-0 absolute text-[#cb935d] text-xl font-bold  leading-7 font-inter">
                                2024
                            </div>
                            <div className="w-[263px] left-0 top-[36px] absolute text-[#274a6d] text-sm font-normal leading-[21px] font-inter">
                                Introduzimos a formação no conjunto de trabalhos que prestamos
                            </div>
                        </div>
                    </div>
                    <div className="w-6 h-6 left-0 top-[43px] absolute bg-[#cb935d] rounded-full" />
                </div>
                <div className="w-[335px] h-[110px] left-0 top-[292px] absolute">
                    <div className="w-[287px] h-[110px] left-[48px] top-0 absolute">
                        <div className="w-[110px] h-[0px] left-[287px] top-0 absolute origin-top-left rotate-90 border border-[#cb935d]" />
                        <div className="w-[263px] h-[78px] left-0 top-[16px] absolute">
                            <div className="left-0 top-0 absolute text-[#cb935d] text-xl font-bold  leading-7 font-inter">
                                2024
                            </div>
                            <div className="w-[263px] left-0 top-[36px] absolute text-[#274a6d] text-sm font-normal leading-[21px] font-inter">
                                Integramos oficialmente o conjunto de empresas do Grupo Lab
                            </div>
                        </div>
                    </div>
                    <div className="w-6 h-6 left-0 top-[43px] absolute bg-[#cb935d] rounded-full" />
                </div>
            </div>

            <section className="flex bg-[#091622] py-72 mt-72  w-full ">
                <div className="containerConssulab flex-col justify-start items-start inline-flex">
                    <Separator className="w-full border border-white" />
                    <p className="font-montserrat text-white text-sm sm:text-base font-medium  leading-normal mt-6">
                        Não se constrói <br /> um império sozinho
                    </p>
                    <div className="mt-[53px] text-white text-xl sm:text-5xl font-bold leading-7 sm:leading-[76.80px]">
                        Reunimos um grupo extraordinário de pessoas, com capacidade e
                        domínio em diversas matérias para construir uma empresa de
                        excelência
                    </div>
                    <div className="my-[53px] max-w-[592px] flex-col justify-start items-start gap-4 flex">
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
                    <Button variant={"ghost"} className="text-white text-base font-semibold leading-normal w-full lg:w-auto px-4 rounded-none py-2 border border-white justify-center items-center gap-2.5 inline-flex">
                        VER EQUIPA
                    </Button>
                </div>
            </section>
            <section className="hidden md:flex  mt-72 w-full ">
                <div className=" w-full containerConssulab flex-col justify-start items-start inline-flex">
                    <Separator className="flex w-full border border-[#c2daf4]" />
                    <p className="w-[194px] text-[#091622] text-sm sm:text-base font-medium  leading-normal sm:leading-[21px] font-montserrat mt-6">
                        Uma cultura de trabalho com valores fortes.
                    </p>
                    <p className="w-full text-[#091622] text-lg sm:text-[44px] font-bold  leading-[25.20px] sm:leading-[70.40px] font-inter mt-72">
                        Os valores da nossa cultura moldam o nosso compromisso em fornecer
                        serviços inigualáveis e com a excelência que se exige
                    </p>
                </div>
            </section>
            <section className="containerConssulab mt-28 space-y-28 hidden md:grid">
                <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-x-8">
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
                <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-x-8">
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
                </div>
            </section>
            <section className="containerConssulab flex-col justify-start items-start gap-10  md:hidden flex ">
                <div className="w-[336px] h-[198px] relative">
                    <div className="w-full h-[0px] left-0 top-0 absolute border border-[#e0dfe6]" />
                    <div className="w-[175px] left-0 top-[24px] absolute text-[#091622] text-sm font-medium leading-[21px]">
                        Uma cultura de trabalho com valores fortes.
                    </div>
                    <div className="w-[336px] left-0 top-[98px] absolute text-[#091622] text-lg font-bold  leading-[25.20px]">
                        Os valores da nossa cultura moldam o nosso compromisso em fornecer
                        serviços inigualáveis e com a excelência que se exige
                    </div>
                </div>
                <div className="h-[889px] flex-col justify-start items-start gap-8 flex">
                    <div className="w-[336px] h-[172px] relative">
                        <div className="w-[336px] h-[0px] left-0 top-0 absolute border border-[#e0dfe6]" />
                        <div className="left-0 top-[24px] absolute text-[#091622] text-lg font-bold  leading-[25.20px]">
                            01
                        </div>
                        <div className="w-[336px] h-[107px] left-0 top-[65px] absolute flex-col justify-start items-start gap-4 inline-flex">
                            <div className="w-[336px] text-[#091622] text-xl font-bold  leading-7">
                                Democracia
                            </div>
                            <div className="w-[336px] text-[#274a6d] text-sm font-normal leading-[21px]">
                                Os nossos projectos são construídos de forma conjunta com os
                                parceiros/clientes, numa perspectiva de diálogo permanente e
                                livre
                            </div>
                        </div>
                    </div>
                    <div className="w-[336px] h-[172px] relative">
                        <div className="w-[336px] h-[0px] left-0 top-0 absolute border border-[#e0dfe6]" />
                        <div className="left-0 top-[24px] absolute text-[#091622] text-lg font-bold  leading-[25.20px]">
                            02
                        </div>
                        <div className="w-[336px] h-[107px] left-0 top-[65px] absolute flex-col justify-start items-start gap-4 inline-flex">
                            <div className="w-[336px] text-[#091622] text-xl font-bold  leading-7">
                                Tramsparência
                            </div>
                            <div className="w-[336px] text-[#274a6d] text-sm font-normal leading-[21px]">
                                s nossos projectos privilegiam soluções fundamentadas e
                                justificáveis, não havendo dúvidas sobre a sua proveniência e
                                eficiência.
                            </div>
                        </div>
                    </div>
                    <div className="w-[336px] h-[277px] relative">
                        <div className="w-[336px] h-[0px] left-0 top-0 absolute border border-[#e0dfe6]" />
                        <div className="left-0 top-[24px] absolute text-[#091622] text-lg font-bold  leading-[25.20px]">
                            03
                        </div>
                        <div className="w-[336px] h-[212px] left-0 top-[65px] absolute flex-col justify-start items-start gap-4 inline-flex">
                            <div className="w-[336px] text-[#091622] text-xl font-bold  leading-7">
                                Progresso
                            </div>
                            <div className="w-[336px] text-[#274a6d] text-sm font-normal leading-[21px]">
                                Acompanhamos os nossos parceiros/clientes e medimos o seu
                                crescimento. As metas inicialmente determinadas são regularmente
                                avaliadas, havendo uma forte preocupação com a sua efectivação.
                                Preocupamo-nos com o crescimento individual dos funcionários
                                sempre na perspectiva de crescimento colectivo e institucional
                            </div>
                        </div>
                    </div>
                    <div className="w-[336px] h-[172px] relative">
                        <div className="w-[336px] h-[0px] left-0 top-0 absolute border border-[#e0dfe6]" />
                        <div className="left-0 top-[24px] absolute text-[#091622] text-lg font-bold  leading-[25.20px]">
                            04
                        </div>
                        <div className="w-[336px] h-[107px] left-0 top-[65px] absolute flex-col justify-start items-start gap-4 inline-flex">
                            <div className="w-[336px] text-[#091622] text-xl font-bold  leading-7">
                                Inovação
                            </div>
                            <div className="w-[336px] text-[#274a6d] text-sm font-normal leading-[21px]">
                                Aplicamos e garantimos o enquadramento das mais nobres e
                                inovadoras técnicas ligadas à gestão do capital humano e não só
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex  mt-[72px] w-full">
                <div className="containerConssulab  flex-col justify-start items-start inline-flex">
                    <Separator className="flex w-full border border-[#c2daf4]" />
                    <p className="mt-8 mb-72 w-[194px] text-[#091622] text-base font-medium  leading-normal font-montserrat">
                        Nossos parceiros
                    </p>

                    <div className="flex flex-col lg:flex-row  w-full mb-72">
                        <p className="text-[#091622] text-lg font-bold  leading-[25.20px] my-8 md:hidden font-inter">
                            Os valores da nossa cultura moldam o nosso compromisso em fornecer
                            serviços inigualáveis e com a excelência que se exige
                        </p>
                        <Image
                            src={Partner}
                            alt="parceiro da consullab"
                            className="h-[433px] lg:h-[488px] w-full lg:w-[488px] bg-center bg-cover"
                        />
                        <div className="relative flex lg:grid content-between flex-col lg:ml-6  gap-y-2 w-full h-full">
                            <div className="flex justify-between">
                                <div className="flex-1 flex flex-col gap-y-2">
                                    <p className="text-[#091622] text-xl md:text-[32px] font-bold leading-[44.80px] font-montserrat">
                                        Jorge <br className="hidden lg:block" /> Miguel
                                    </p>
                                    <p className="text-[#cb935d] texxt-sm md:text-base font-bold  leading-normal italic font-inter">
                                        Parceiro
                                    </p>
                                </div>
                                <div className="flex-1 w-auto lg:flex gap-2 hidden justify-end">
                                    <Button variant={"outline"} size={"icon"} className="border border-black rounded-none w-10 h-10 flex items-center justify-center ">
                                        <FiArrowLeft />
                                    </Button>
                                    <Button variant={"outline"} size={"icon"} className="border border-black rounded-none w-10 h-10 flex items-center justify-center">
                                        <FiArrowRight />
                                    </Button>
                                </div>
                            </div>

                            <p className="italic w-full text-[#091622] text-xl lg:text-2xl leading-tight lg:leading-[33.60px] h-auto font-inter">
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
