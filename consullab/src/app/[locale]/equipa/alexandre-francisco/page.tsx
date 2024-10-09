"use client"
import React from "react";
import { FiArrowDownLeft, FiArrowLeft } from "react-icons/fi";
import Image from "next/image";
import TeamConsullab from "@public/assets/teamConsullab.jpg";
import { useRouter } from "next/navigation"

const Servico = () => {

    const router = useRouter()
    return (
        <main className="w-full flex flex-col">
            <section className="w-full bg-[#091622] py-[72px] mt-[72px] ">
                <div className="w-full mx-auto max-w-max-width-consullab flex flex-col">
                    <button
                        className="text-white max-w-[200px] truncate items-center justify-center text-lg font-bold leading-[25.20px] gap-2 flex"
                        type="button"
                        onClick={() => router.back()
                        }
                    >
                        <FiArrowLeft className="text-white" />
                        <span>Voltar para equipa</span>

                    </button>

                    <div className="flex gap-8 mt-[72px]">
                        <div className="flex-1 w-96">
                            <h1 className="w-[488px] text-[#e0dfe6] text-5xl font-bold leading-[67.20px]">
                                Alexandre Francisco
                            </h1>
                            <p className="mt-[14px] w-[488px] text-[#e0dfe6] text-base font-normal  leading-normal">
                                Alexandre Francisco é consultor jurídico na Consullab, com mais
                                de 15 anos de experiência no setor jurídico. Especialista em
                                Direito Empresarial e Contratual, Alexandre se destaca por sua
                                habilidade em desenvolver soluções jurídicas estratégicas para
                                empresas de diversos segmentos. Ao longo de sua carreira, atuou
                                em escritórios renomados e assessorou grandes corporações em
                                questões relacionadas à governança corporativa, compliance,
                                fusões e aquisições.
                                <br />
                                Alexandre é graduado em Direito pela Universidade XYZ e possui
                                pós-graduação em Direito Empresarial pela Faculdade ABC. Além
                                disso, participou de cursos de extensão sobre direito
                                internacional e arbitragem. Reconhecido por seu profissionalismo
                                e ética, ele é frequentemente convidado a palestrar em eventos
                                sobre temas relacionados à inovação no Direito Empresarial.
                                <br />
                                Com seu compromisso em ajudar empresas a navegar com segurança
                                pelas complexidades legais, Alexandre contribui
                                significativamente para o sucesso dos clientes da Consullab.
                            </p>
                            <h2 className="mt-10 w-[488px] text-[#e0dfe6] text-5xl font-bold  leading-[67.20px]">Expertise</h2>

                            <div className="mt-6 w-[488px] h-[68px] justify-between items-start inline-flex border-t border-white">
                                <div className="mt-4 w-[416px] text-[#e0dfe6] text-2xl font-bold leading-[33.60px]">REALIZAÇÃO DE DIAGNOSTICOS INSTITUCIONAIS</div>
                                <div className="text-right text-[#e0dfe6] text-2xl font-bold leading-[33.60px]">01</div>
                            </div>

                            <div className="mt-8 w-[488px] h-[68px] justify-between items-start inline-flex border-t border-white">
                                <div className="mt-4 w-[416px] text-[#e0dfe6] text-2xl font-bold leading-[33.60px]">ELABORAÇÃO DE PLANOS ESTRATÉGICOS</div>
                                <div className="text-right text-[#e0dfe6] text-2xl font-bold leading-[33.60px]">02</div>
                            </div>

                        </div>
                        <Image
                            src={TeamConsullab}
                            alt="Equipa consullab"
                            className="flex-1"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Servico;
