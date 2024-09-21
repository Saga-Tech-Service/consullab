import React from "react";
import Blog from "@public/assets/BlogNews.jpg";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Servico = () => {
    return (
        <main className="flex flex-col">
            <section className="flex flex-col justify-center items-center w-full mt-[72px] max-w-max-width-consullab mx-auto ">
                <div className="flex w-full max-w-[800px] h-auto flex-col justify-center items-center gap-8">
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
                    <div className="self-stretch h-[245px] flex-col justify-start items-center gap-4 flex">
                        <div className="self-stretch text-center text-[#091622] text-5xl font-bold leading-[67.20px]">
                            Novas Regras Trabalhistas Entram em Vigor e Impactam Relações de
                            Trabalho
                        </div>
                        <div className="self-stretch text-center text-[#cb935d] text-xl font-normal leading-7">
                            28 de Janeiro de 2024
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="relative flex flex-col justify-center items-end bg-cover bg-center w-full mt-[72px] max-w-max-width-consullab mx-auto h-[720px]"
                style={{ backgroundImage: `url(${Blog.src})` }}
            >
                <div className="ml-10 translate-y-64 self-start w-10 h-10 p-2 origin-top-left  border border-[#c6c4ce] justify-start items-center gap-2.5 inline-flex">
                    <FiArrowDown className="w-6 h-6 relative text-white " />
                </div>
                <div className="space-y-6">
                    <h1 className="text-[#e0dfe6] text-base font-bold uppercase leading-normal">
                        ÚLTIMAS NOTÍCIAS
                    </h1>
                    <div className="flex gap-x-4">
                        <div className="w-[104px] h-[0px] border border-white" />
                        <div className="w-[104px] h-[0px] border border-white" />
                        <div className="w-[104px] h-[0px] border border-white" />
                        <div className="w-[104px] h-[0px] border border-white" />
                    </div>
                    <p className="max-w-[560px] text-white text-[32px] font-bold  leading-[51.20px]">
                        Um case de sucesso entre várias empresas do mercado jurídico
                    </p>
                    <div className="text-[#c2daf4] text-base font-normal leading-normal">
                        Deslize pra ver mais
                    </div>
                </div>
            </section>
            <section className="mt-10 max-w-[1008px] w-full mx-auto h-[1266px] flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch text-[#cb935d] text-5xl font-bold leading-[67.20px]">
                    O cenário trabalhista brasileiro passou por mudanças significativas
                    com a entrada em vigor de um novo conjunto de regras que promete
                    transformar as relações de trabalho no país.
                </div>
                <div className="self-stretch h-[907px] flex-col justify-start items-start gap-4 flex">
                    <div className="self-stretch text-[#091622] text-lg font-normal leading-[27px]">
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
                    </div>
                    <div className="self-stretch">
                        <span className="text-[#091622] text-lg font-medium leading-[27px]">
                            Escrito e publicado por{" "}
                        </span>
                        <span className="text-[#cb935d] text-lg font-medium leading-[27px]">
                            Helton Faria
                        </span>
                    </div>
                </div>
            </section>
            <div className="mt-10 max-w-[1008px] w-full mx-auto h-auto flex-col justify-start items-start gap-8 inline-flex">
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-8 flex">
                    <div className="self-stretch h-[0px] border border-[#e0dfe6]" />
                    <div className="self-stretch text-[#cb935d] text-lg font-bold leading-[25.20px]">
                        Partilhar artigo
                    </div>
                </div>
                <div className="self-stretch justify-start items-center gap-[78px] inline-flex">
                    <div className="justify-start items-center gap-[78px] flex">
                        <div className="text-[#091622] text-lg font-normal leading-[27px]">
                            LinkedIn
                        </div>
                        <div className="w-[59px] h-[0px] origin-top-left rotate-90 border border-[#e0dfe6]" />
                    </div>
                    <div className="justify-start items-center gap-[78px] flex">
                        <div className="text-[#091622] text-lg font-normal leading-[27px]">
                            Facebook
                        </div>
                        <div className="w-[59px] h-[0px] origin-top-left rotate-90 border border-[#e0dfe6]" />
                    </div>
                    <div className="justify-start items-center gap-[78px] flex">
                        <div className="text-[#091622] text-lg font-normal leading-[27px]">
                            X
                        </div>
                        <div className="w-[59px] h-[0px] origin-top-left rotate-90 border border-[#e0dfe6]" />
                    </div>
                    <div className="justify-start items-center gap-[78px] flex">
                        <div className="text-[#091622] text-lg font-normal leading-[27px]">
                            Email
                        </div>
                        <div className="w-[59px] h-[0px] origin-top-left rotate-90 border border-[#e0dfe6]" />
                    </div>
                    <div className="justify-start items-center gap-[78px] flex">
                        <div className="text-[#091622] text-lg font-normal leading-[27px]">
                            Copiar link
                        </div>
                        <div className="w-[59px] h-[0px] origin-top-left rotate-90 border border-[#e0dfe6]" />
                    </div>
                </div>
            </div>
            <div className="mt-[72px] max-w-[1008px] w-full mx-auto h-[57px] flex-col justify-start items-start gap-8 inline-flex">
                <div className="self-stretch h-[0px] border border-[#e0dfe6]" />
                <div className="self-stretch text-[#cb935d] text-lg font-bold leading-[25.20px]">
                    Partilhar artigo
                </div>
            </div>

            <section className="flex gap-x-10 w-full mt-[72px] max-w-max-width-consullab mx-auto ">
                <div className="flex-1 w-[592px] h-[722px] flex-col justify-start items-start gap-8 inline-flex">
                    <div className="self-stretch h-[395px] flex-col justify-start items-start gap-12 flex">
                        <div className="h-[307px] flex-col justify-start items-start gap-6 flex">
                            <div className="w-[592px] text-[#091622] text-[32px] font-medium leading-[51.20px]">
                                José-Manuel García Represa é autor de capítulo no livro da
                                Câmara de Comércio Internacional 'Navegando pelos novos
                                conteúdos da política pública internacional'
                            </div>
                            <div className="w-[592px] text-[#cb935d] text-xl font-normal leading-7">
                                28 de Janeiro de 2024
                            </div>
                        </div>
                        <div className="px-4 py-2 border border-[#091622] justify-center items-center gap-2.5 inline-flex">
                            <div className="w-[110px] text-[#091622] text-base font-semibold leading-normal">
                                LER ARTIGO
                            </div>
                            <FaArrowRight className="w-6 h-6 relative" />
                        </div>
                    </div>
                    <Image
                        alt="Blog da consullab"
                        className="self-stretch h-[295px]"
                        src={Blog}
                    />
                </div>
                <div className="flex-1 w-[592px] h-[722px] flex-col justify-start items-start gap-8 inline-flex">
                    <div className="self-stretch h-[395px] flex-col justify-start items-start gap-12 flex">
                        <div className="h-[307px] flex-col justify-start items-start gap-6 flex">
                            <div className="w-[592px] text-[#091622] text-[32px] font-medium leading-[51.20px]">
                                José-Manuel García Represa é autor de capítulo no livro da
                                Câmara de Comércio Internacional 'Navegando pelos novos
                                conteúdos da política pública internacional'
                            </div>
                            <div className="w-[592px] text-[#cb935d] text-xl font-normal leading-7">
                                28 de Janeiro de 2024
                            </div>
                        </div>
                        <div className="px-4 py-2 border border-[#091622] justify-center items-center gap-2.5 inline-flex">
                            <div className="w-[110px] text-[#091622] text-base font-semibold leading-normal">
                                LER ARTIGO
                            </div>
                            <FaArrowRight className="w-6 h-6 relative" />
                        </div>
                    </div>
                    <Image
                        alt="Blog da consullab"
                        className="self-stretch h-[295px]"
                        src={Blog}
                    />
                </div>
            </section>
            <button type="button" className="mt-8 h-10 self-center w-auto px-4 py-2 border border-[#091622] justify-center items-center gap-2.5 inline-flex">
                <FaArrowLeft className="w-6 h-6" />
                <span className="w-[180px] text-right text-[#091622] text-base font-semibold leading-normal">TODAS AS NOTÍCIAS</span>
            </button>

        </main>
    );
};

export default Servico;
