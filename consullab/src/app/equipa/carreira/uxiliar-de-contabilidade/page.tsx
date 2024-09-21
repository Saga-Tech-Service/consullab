import Link from "next/link";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";

const News = () => {
    return (
        <main className="w-full flex flex-col max-w-max-width-consullab mx-auto">
            <section className="mt-[72px] w-[800px] h-[167px] flex-col self-center flex justify-center items-center gap-8">
                <Link href={"/equipa/carreira"} className="justify-start items-center gap-2.5 inline-flex">
                    <FiArrowLeft className="w-6 h-6" />
                    <div className="text-[#091622] text-base font-semibold leading-normal">
                        VOLTAR PARA CARREIRA
                    </div>
                </Link>
                <div className="self-stretch h-[111px] flex-col justify-start items-center gap-4 flex">
                    <div className="self-stretch text-center text-[#091622] text-5xl font-bold leading-[67.20px]">
                        Auxiliar de contabilidade
                    </div>
                    <div className="self-stretch text-center text-[#cb935d] text-xl font-normal leading-7">
                        Tempo inteiro, Presencial
                    </div>
                </div>
            </section>

            <section className="mt-[135px] self-center max-w-[1008px] flex-col justify-start items-start gap-8 inline-flex">
                <div className="self-stretch flex flex-col">
                    <span className="inline-block text-[#091622] text-[28px] font-bold leading-[39.20px]">
                        No que você vai trabalhar?
                    </span>
                    <span className="text-[#091622] text-lg font-normal leading-[27px]">
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
                    </span>
                </div>

                <div className="self-stretch flex flex-col">
                    <span className="text-[#091622] text-[28px] font-bold leading-[39.20px] mt-10">
                        Sua função
                    </span>

                    <span className="text-[#091622] text-lg font-normal leading-[27px]">
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
                    </span>
                </div>

                {/* Corrigindo a palavra "className" e fechando a div */}
                <div className="self-stretch flex flex-col">
                    <span className="text-[#091622] text-[28px] font-bold leading-[39.20px] mt-10">
                        Requisitos
                    </span>
                    <span className="text-[#091622] text-lg font-normal leading-[27px]">
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
                    </span>
                </div>

                <div className="self-stretch flex flex-col">
                    <span className="text-[#091622] text-[28px] font-bold leading-[39.20px] mt-10">
                        O que oferecemos?
                    </span>
                    <span className="text-[#091622] text-lg font-normal leading-[27px]">
                        Nós nos concentramos em saúde, riqueza e fortalecimento de
                        relacionamentos:
                        <br />
                    </span>
                    <span className="text-[#091622] text-lg font-normal leading-[27px]">
                        <ul className="list-disc">
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
                    </span>
                </div>
            </section>
        </main>
    );
};

export default News;
