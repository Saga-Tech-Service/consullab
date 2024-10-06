import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import React from "react";
import { FiArrowLeft } from "react-icons/fi";

const News = () => {
    return (
        <main className="containerConssulab flex flex-col">
            <section className="mt-[72px] max-w-[800px] w-full  flex-col self-center flex justify-center items-center gap-8">
                <Link href={"/equipa/carreira"} passHref className="justify-start items-center gap-2.5 inline-flex">
                    <FiArrowLeft className="w-6 h-6" />
                    <Button variant={"link"} className="text-[#091622] text-base font-semibold leading-normal">
                        VOLTAR PARA CARREIRA
                    </Button>
                </Link>
                <h1 className="self-stretch h-[111px] flex-col justify-start items-center gap-4 flex">
                    <span className="self-stretch text-center text-[#091622] text-5xl font-bold leading-[67.20px]">
                        Auxiliar de contabilidade
                    </span>
                    <span className="self-stretch text-center text-[#cb935d] text-xl font-normal leading-7">
                        Tempo inteiro, Presencial
                    </span>
                </h1>
            </section>

            <section className="mt-[135px] self-center max-w-[1008px] flex-col justify-start items-start gap-8 inline-flex ">
                <article className="self-stretch flex flex-col">
                    <h2 className="inline-block text-[#091622] text-[28px] font-bold leading-[39.20px]">
                        No que você vai trabalhar?
                    </h2>
                    <p className="text-[#091622] text-base sm:text-lg font-normal leading-[27px]">
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
                    </p>
                </article>

                <article className="self-stretch flex flex-col">
                    <h2 className="text-[#091622] text-[28px] font-bold leading-[39.20px] mt-10">
                        Sua função
                    </h2>
                    <p className="text-[#091622] text-base sm:text-lg font-normal leading-[27px]">
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
                    </p>
                </article>

                {/* Corrigindo a palavra "className" e fechando a div */}
                <article className="self-stretch flex flex-col">
                    <h2 className="text-[#091622] text-[28px] font-bold leading-[39.20px] mt-10">
                        Requisitos
                    </h2>
                    <p className="text-[#091622] text-base sm:text-lg font-normal leading-[27px]">
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
                    </p>
                </article>

                <article className="self-stretch flex flex-col">
                    <h2 className="text-[#091622] text-[28px] font-bold leading-[39.20px] mt-10">
                        O que oferecemos?
                    </h2>
                    <p className="text-[#091622] text-base sm:text-lg font-normal leading-[27px]">
                        Nós nos concentramos em saúde, riqueza e fortalecimento de
                        relacionamentos:
                        <br />
                    </p>
                    <div className="text-[#091622] text-base sm:text-lg font-normal leading-[27px]">
                        <ul className="list-disc list-inside">
                            <li> Trabalho totalmente remoto com horários flexíveis</li>
                            <li> Salário competitivo</li>
                            <li> Oportunidade de se tornar coproprietário da cooperativa</li>
                            <li> Plano individual de desenvolvimento de carreira</li>
                            <li> Equipe amigável e cultura empresarial</li>
                            Priorização da saúde mental e física no local de trabalho, com
                            liberdade para tomar decisões sobre si mesmo, apoiado por colegas
                            comprometidos com um estilo <li> de vida saudável.</li>
                            <li>
                                Fortalecendo relacionamentos para engenharia ao lado de colegas
                                que prezam mentalidades de crescimento em um ambiente único que
                                combina serviço e produção artesanal.
                            </li>
                        </ul>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default News;
