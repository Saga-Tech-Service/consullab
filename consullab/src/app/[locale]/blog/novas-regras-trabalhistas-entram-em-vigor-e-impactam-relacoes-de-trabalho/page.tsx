import React from "react";
import Blog from "@public/assets/BlogInfo1.jpg";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IoArrowForward } from "react-icons/io5";

const Servico = () => {
    return (
        <main className="flex flex-col">
            <section className="containerConssulab flex flex-col justify-center items-center w-full mt-[72px]">
                <div className="flex w-full lg:max-w-[800px] h-auto flex-col justify-center items-center gap-8">
                    <div className="justify-start items-center gap-2.5 inline-flex">
                        <div className="w-6 h-6 relative origin-top-left -rotate-180" />
                        <Link
                            href={"/blog"}
                            className="flex gap-2 items-center text-[#091622] text-base font-semibold leading-normal"
                        >
                            <FaArrowLeft />
                            VOLTAR PARA AS NOTÍCIAS
                        </Link>
                    </div>
                    <div className="self-stretch flex-col justify-start items-center gap-4 flex">
                        <div className="self-stretch text-center text-[#091622] text-[28px] lg:text-5xl font-bold leading-[39.20px] lg:leading-[67.20px]">
                            Novas Regras Trabalhistas Entram em Vigor e Impactam Relações de
                            Trabalho
                        </div>
                        <div className="self-stretch text-center text-[#cb935d] text-xl font-normal leading-7">
                            28 de Janeiro de 2024
                        </div>
                    </div>
                </div>
            </section>

            <figure className="containerConssulab flex flex-col justify-center items-end h-[200px] sm:h-[635px]">
                <Image
                    className="bg-cover bg-center w-full h-full"
                    alt="Blog da Cosullab"
                    src={Blog}
                />
            </figure>

            <section className="containerConssulab xl:max-w-[1008px] xl:mx-auto flex-col justify-start items-start gap-6 inline-flex">
                <p className="self-stretch text-[#cb935d] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-7 ">
                    O cenário trabalhista brasileiro passou por mudanças significativas
                    com a entrada em vigor de um novo conjunto de regras que promete
                    transformar as relações de trabalho no país.
                </p>
                <article className="self-stretch flex-col justify-start items-start gap-4 flex">
                    <p className="self-stretch text-[#091622] text-sm sm:text-base md:text-lg font-normal leading-[27px]">
                        Uma das mudanças mais marcantes nas novas regras trabalhistas é a
                        flexibilização das jornadas de trabalho. A legislação agora permite
                        que empregadores e empregados negociem jornadas mais adaptadas às
                        necessidades de ambos. Isso inclui a possibilidade de jornadas de
                        trabalho reduzidas, semanas de trabalho comprimidas e a adoção de
                        horários flexíveis, desde que respeitados os limites estabelecidos
                        pela lei.
                        <br />
                        Segundo especialistas, essa flexibilização pode beneficiar tanto as
                        empresas quanto os trabalhadores, promovendo um ambiente de trabalho
                        mais equilibrado e produtivo. No entanto, é essencial que essas
                        negociações sejam formalizadas através de acordos coletivos ou
                        individuais, para evitar conflitos futuros e garantir que os
                        direitos dos trabalhadores sejam preservados.
                        <br />
                        <br />
                        As novas diretrizes também trouxeram mudanças nos direitos de férias
                        dos trabalhadores. Agora, as férias podem ser divididas em até três
                        períodos, sendo que um deles deve ter, no mínimo, 14 dias corridos.
                        Além disso, o empregado tem a possibilidade de "vender" até 1/3 do
                        período de férias, prática que já era comum, mas que agora está mais
                        claramente regulamentada.
                        <br />
                        Essa alteração visa proporcionar maior flexibilidade para os
                        trabalhadores, permitindo que eles possam desfrutar de períodos de
                        descanso em diferentes momentos do ano. Para as empresas, a mudança
                        pode facilitar o gerenciamento de ausências e a manutenção da
                        produtividade.
                        <br />
                        <br />
                        Com o crescimento do trabalho remoto, especialmente após a pandemia,
                        as novas regras trabalhistas incluem uma regulamentação mais clara
                        para o teletrabalho. Agora, as empresas precisam formalizar o regime
                        de teletrabalho por escrito, estabelecendo as condições de trabalho,
                        as responsabilidades de cada parte e a forma de controle da jornada.
                        <br />
                        Além disso, as regras também preveem que os custos relacionados ao
                        teletrabalho, como internet, energia e equipamentos, devem ser
                        negociados entre empregador e empregado. A regulamentação busca
                        oferecer segurança jurídica para ambas as partes e evitar disputas
                        que possam surgir desse novo modelo de trabalho.
                        <br />
                        <br />
                        As mudanças nas regras trabalhistas exigem uma adaptação imediata
                        por parte das empresas, que precisam revisar seus contratos,
                        políticas internas e práticas de gestão para se adequarem às novas
                        exigências. Especialistas alertam que a falta de conformidade com as
                        novas regras pode resultar em penalidades severas, incluindo multas
                        e processos trabalhistas.
                        <br />
                        Por outro lado, os empregados também devem estar atentos às novas
                        disposições, entendendo seus direitos e as possibilidades que agora
                        estão ao seu alcance. O conhecimento e a aplicação correta dessas
                        novas regras são essenciais para evitar conflitos e garantir uma
                        relação de trabalho saudável e produtiva.
                    </p>
                    <div className="self-stretch">
                        <span className="text-[#091622] text-sm sm:text-base md:text-lg font-medium leading-[27px]">
                            Escrito e publicado por{" "}
                        </span>
                        <span className="text-[#cb935d] text-sm sm:text-base md:text-lg font-medium leading-[27px]">
                            Helton Faria
                        </span>
                    </div>
                </article>
            </section>

            <section className="containerConssulab mt-10 h-auto flex-col justify-start items-start gap-8 inline-flex">
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-8 flex">
                    <div className="self-stretch h-[0px] border border-[#e0dfe6]" />
                    <p className="self-stretch text-[#cb935d] text-sm md:text-base lg:text-lg font-bold leading-[25.20px]">
                        Partilhar artigo
                    </p>
                </div>
                <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
                    <Button
                        type="button"
                        variant={"ghost"}
                        className="text-[#091622] bg-transparent rounded-none border-r border-[#e0dfe6] w-full h-[59px]  text-lg font-normal leading-[27px]"
                    >
                        LinkedIn
                    </Button>
                    <Button
                        type="button"
                        variant={"ghost"}
                        className="text-[#091622] bg-transparent rounded-none border-r border-[#e0dfe6] w-full h-[59px]  text-lg font-normal leading-[27px]"
                    >
                        Facebook
                    </Button>
                    <Button
                        type="button"
                        variant={"ghost"}
                        className="text-[#091622] bg-transparent rounded-none border-r border-[#e0dfe6] w-full h-[59px]  text-lg font-normal leading-[27px]"
                    >
                        X
                    </Button>
                    <Button
                        type="button"
                        variant={"ghost"}
                        className="text-[#091622] bg-transparent rounded-none border-r border-[#e0dfe6] w-full h-[59px]  text-lg font-normal leading-[27px]"
                    >
                        Email
                    </Button>
                    <Button
                        type="button"
                        variant={"ghost"}
                        className="text-[#091622] bg-transparent rounded-none border-r border-[#e0dfe6] w-full h-[59px]  text-lg font-normal leading-[27px]"
                    >
                        Email
                    </Button>
                    <Button
                        type="button"
                        variant={"ghost"}
                        className="text-[#091622] bg-transparent rounded-none border-r border-[#e0dfe6] w-full h-[59px]  text-lg font-normal leading-[27px]"
                    >
                        Copiar link
                    </Button>
                </nav>
                <div className="self-stretch h-[0px] border border-[#e0dfe6]" />
            </section>

            <section className="containerConssulab mt-[72px] h-[57px] flex-col justify-start items-start gap-8 inline-flex">
                <div className="self-stretch h-[0px] border border-[#e0dfe6]" />
                <p className="self-stretch text-[#cb935d] text-lg font-bold leading-[25.20px]">
                    Partilhar artigo
                </p>
            </section>

            <section className="containerConssulab flex flex-col md:flex-row  justify-between items-center mt-[72px] gap-8">
                <Card>
                    <CardContent className="flex-col justify-start items-start gap-12 flex">
                        <CardHeader className=" flex-col justify-start items-start gap-6 flex">
                            <CardDescription className="text-[#091622] tex-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-medium">
                                José-Manuel García Represa é autor de capítulo no livro da
                                Câmara de Comércio Internacional 'Navegando pelos novos
                                conteúdos da política pública internacional'
                            </CardDescription>
                            <p className="text-[#cb935d] text-xl font-normal leading-7">
                                28 de Janeiro de 2024
                            </p>
                        </CardHeader>
                        <Button variant={"outline"} className="px-4 py-2 justify-center items-center gap-2.5 inline-flex w-full md:w-auto">
                            <Link href={"/blog"} className=" text-[#091622] text-base font-semibold leading-normal">
                                LER ARTIGO
                            </Link>
                            <IoArrowForward className="w-6 h-6 relative" />
                        </Button>
                        <CardFooter>
                            <Image
                                alt="Blog da consullab"
                                className="h-[295px]"
                                src={Blog}
                            />
                        </CardFooter>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex-col justify-start items-start gap-12 flex">
                        <CardHeader className=" flex-col justify-start items-start gap-6 flex">
                            <CardDescription className="text-[#091622] tex-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-medium">
                                José-Manuel García Represa é autor de capítulo no livro da
                                Câmara de Comércio Internacional 'Navegando pelos novos
                                conteúdos da política pública internacional'
                            </CardDescription>
                            <p className="text-[#cb935d] text-xl font-normal leading-7">
                                28 de Janeiro de 2024
                            </p>
                        </CardHeader>
                        <Button variant={"outline"} className="px-4 py-2 justify-center items-center gap-2.5 inline-flex w-full md:w-auto">
                            <Link href={"/blog"} className=" text-[#091622] text-base font-semibold leading-normal">
                                LER ARTIGO
                            </Link>
                            <IoArrowForward className="w-6 h-6 relative" />
                        </Button>
                        <CardFooter>
                            <Image
                                alt="Blog da consullab"
                                className="h-[295px]"
                                src={Blog}
                            />
                        </CardFooter>
                    </CardContent>
                </Card>
            </section>
            <Button
                type="button"
                variant={"ghost"}
                className="mt-8 h-10 self-center w-auto px-4 py-2 border border-[#e0dfe6] justify-center items-center gap-2.5 inline-flex"
            >
                <FaArrowLeft className="w-6 h-6" />
                <span className="w-[180px] text-right text-[#091622] text-base font-semibold leading-normal">
                    TODAS AS NOTÍCIAS
                </span>
            </Button>
        </main>
    );
};

export default Servico;
