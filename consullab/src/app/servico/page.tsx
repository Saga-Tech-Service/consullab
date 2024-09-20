import React from "react";
import { FiArrowDown, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import ServiceJustice from "@public/assets/servicoJustice.png"

const Servico = () => {
    return (
        <main className="w-full mx-auto max-w-max-width-consullab ">
            <h1 className="mt-16 w-[696px] text-[#091622] text-5xl font-bold leading-[76.80px]">
                SERVIÇOS
            </h1>
            <span className="flex border-b border-[#e0dfe6] mt-[77px]" />
            <div className="w-full flex mt-8">
                <p className="flex-1 w-[280px] text-[#091622] text-base font-normal leading-normal">
                    Primamos pelos objectivos de cada instituição
                </p>
                <div className="flex flex-col gap-[72px]">
                    <p className="w-[479px] text-[#091622] text-xl font-normal  leading-[30px]">
                        A Consullab actua nas mais diversas áreas do direito, prestando
                        serviços de âmbito nacional e internacional
                    </p>

                    <span className="self-end mt-[72px] w-10 h-10 p-2 origin-top-left rotate-90 border border-[#091622] justify-start items-center gap-2.5 inline-flex">
                        <FiArrowRight className="w-6 h-6 relative" />
                    </span>
                </div>
            </div>
            <section className="mt-20">
                <Image className="w-full h-full object-cover" src={ServiceJustice} alt="Serviços da Cosullab" />
            </section>
            <section className="h-96 justify-between items-start gap-8 inline-flex mt-[72px]">
                <div className="flex-col justify-start items-start gap-6 inline-flex">
                    <div className="w-96 h-[0px] border border-[#e0dfe6]" />
                    <div className="self-stretch text-[#091622] text-base font-semibold leading-normal">NOSSOS SERVIÇOS</div>
                </div>
                <div className="w-96 flex-col justify-start items-start gap-8 inline-flex">
                    <div className="self-stretch h-[72px] flex-col justify-start items-start gap-4 flex">
                        <div className="w-96 h-[0px] border border-[#e0dfe6]" />
                        <div className="w-96 justify-between items-start inline-flex">
                            <div className="w-[349px] text-[#091622] text-xl font-medium leading-7">REALIZAÇÃO DE DIAGNOSTICOS INSTITUCIONAIS</div>
                            <div className="text-right text-[#091622] text-xl font-medium leading-7">01</div>
                        </div>
                    </div>
                    <div className="self-stretch h-[72px] flex-col justify-start items-start gap-4 flex">
                        <div className="w-96 h-[0px] border border-[#091622]" />
                        <div className="w-96 justify-between items-start inline-flex">
                            <div className="w-[349px] text-[#091622] text-xl font-medium leading-7">ELABORAÇÃO DE PLANOS ESTRATÉGICOS</div>
                            <div className="text-right text-[#091622] text-xl font-medium leading-7">03</div>
                        </div>
                    </div>
                    <div className="self-stretch h-[72px] flex-col justify-start items-start gap-4 flex">
                        <div className="w-96 h-[0px] border border-[#091622]" />
                        <div className="w-96 justify-between items-start inline-flex">
                            <div className="w-[349px] text-[#091622] text-xl font-medium leading-7">CONSULTORIA EM CONTRATAÇÃO PÚBLICA</div>
                            <div className="text-right text-[#091622] text-xl font-medium leading-7">05</div>
                        </div>
                    </div>
                    <div className="self-stretch h-[72px] flex-col justify-start items-start gap-4 flex">
                        <div className="w-96 h-[0px] border border-[#091622]" />
                        <div className="w-96 justify-between items-start inline-flex">
                            <div className="w-[349px] text-[#091622] text-xl font-medium leading-7">CONSULTORIA JURÍDICA ESPECIALIZADA</div>
                            <div className="text-right text-[#091622] text-xl font-medium leading-7">07</div>
                        </div>
                    </div>
                </div>
                <div className="w-96 flex-col justify-start items-start gap-8 inline-flex">
                    <div className="self-stretch h-11 flex-col justify-start items-start gap-4 flex">
                        <div className="w-96 h-[0px] border border-[#e0dfe6]" />
                        <div className="w-96 justify-between items-start inline-flex">
                            <div className="w-[349px] text-[#091622] text-xl font-medium leading-7">ELABORAÇÃO DE NORMAS</div>
                            <div className="text-right text-[#091622] text-xl font-medium leading-7">02</div>
                        </div>
                    </div>
                    <div className="self-stretch h-11 flex-col justify-start items-start gap-4 flex">
                        <div className="w-96 h-[0px] border border-[#091622]" />
                        <div className="w-96 justify-between items-start inline-flex">
                            <div className="w-[349px] text-[#091622] text-xl font-medium leading-7">FORMAÇÕES ESPECIALIZADAS</div>
                            <div className="text-right text-[#091622] text-xl font-medium leading-7">04</div>
                        </div>
                    </div>
                    <div className="self-stretch h-[72px] flex-col justify-start items-start gap-4 flex">
                        <div className="w-96 h-[0px] border border-[#091622]" />
                        <div className="w-96 justify-between items-start inline-flex">
                            <div className="w-[349px] text-[#091622] text-xl font-medium leading-7">CONSULTORIA EM MATÉRIA DE RECURSOS HUMANOS</div>
                            <div className="text-right text-[#091622] text-xl font-medium leading-7">06</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Servico;
