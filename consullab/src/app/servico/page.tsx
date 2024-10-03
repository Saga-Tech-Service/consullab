import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import ServiceJustice from "@public/assets/servicoJustice.png"
import {
    SectionService
} from "@/components/sectionService";

const Servico = () => {
    return (
        <main className="containerConssulab">
            <h1 className="mt-16 w-[696px] text-[#091622]  text-[28px] sm:text-5xl font-bold leading-[39.20px] sm:leading-[76.80px]">
                SERVIÇOS
            </h1>
            <span className="flex border-b border-[#e0dfe6] mt-[77px]" />
            <div className="w-full flex flex-col gap-y-10 md:gap-y-0 md:flex-row mt-8">
                <p className="flex-1 w-[280px] text-[#091622] text-base font-normal leading-normal">
                    Primamos pelos objectivos de cada instituição
                </p>
                <span className="flex flex-col gap-6 md:gap-[72px]">
                    <p className="w-full md:w-[479px] text-[#091622] text-xl font-normal  leading-[30px]">
                        A Consullab actua nas mais diversas áreas do direito, prestando
                        serviços de âmbito nacional e internacional
                    </p>

                    <span className="self-end mt-[72px] w-10 h-10 p-2 origin-top-left rotate-90 border border-[#091622] justify-start items-center gap-2.5 inline-flex">
                        <FiArrowRight className="w-6 h-6 relative" />
                    </span>
                </span>
            </div>
            <section className="mt-20">
                <Image className="w-full h-full object-cover" src={ServiceJustice} alt="Serviços da Cosullab" />
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 mt-[84px] gap-x-4">
                <div className="flex-col justify-start items-start gap-6 inline-flex mb-10">
                    <div className="w-full h-[0px] border border-[#091622]" />
                    <h5 className="self-stretch text-[#091622] text-sm lg:text-base font-semibold  leading-normal">
                        SERVIÇOS
                    </h5>
                </div>
                <div className="flex-col justify-start items-start gap-8 inline-flex">
                    <SectionService
                        isService
                        title="REALIZAÇÃO DE DIAGNOSTICOS INSTITUCIONAL"
                        number={"01"}
                    />
                    <SectionService
                        isService
                        title="ELABORAÇÃO DE PLANOS ESTRATÉGICOS"
                        number={"02"}
                    />
                    <SectionService
                        isService
                        title="CONSULTORIA EM CONTRATAÇÃO PÚBLICA"
                        number={"03"}
                    />
                    <SectionService
                        isService
                        title="CONSULTORIA JURÍDICA ESPECIALIZADA"
                        number={"04"}
                    />
                </div>
                <div className="flex-col justify-start items-start gap-8 inline-flex">
                    <SectionService
                        isService title="ELABORAÇÃO DE NORMAS" number={"05"} />
                    <SectionService
                        isService title="FORMAÇÕES ESPECIALIZADAS" number={"06"} />
                    <SectionService
                        isService
                        title="CONSULTORIA EM MATÉRIA DE RECURSOS HUMANOS"
                        number={"07"}
                    />
                </div>
            </section>
        </main>
    );
};

export default Servico;
