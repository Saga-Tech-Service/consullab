import React from "react";
import { FiArrowDown } from "react-icons/fi";
import Image from "next/image";
import ServiceJustice from "@public/assets/servicoJustice.png"
import ServiceList from "@/components/ServiceList";
import { AdvancedNewsComponent } from "@/components/news";

const services = [
    { id: '1', title: 'REALIZAÇÃO DE DIAGNOSTICOS INSTITUCIONAIS', number: '1', href: '/servico/diagnosticos-institucionais' },
    { id: '2', title: 'ELABORAÇÃO DE NORMAS', number: '2', href: '/servico/elaboracao-de-normas' },
    { id: '3', title: 'ELABORAÇÃO DE PLANOS ESTRATÉGICOS', number: '3', href: '/servico/planos-estrategicos' },
    { id: '4', title: 'FORMAÇÕES ESPECIALIZADAS', number: '4', href: '/servico/formacoes-especializadas' },
    { id: '5', title: 'CONSULTORIA EM CONTRATAÇÃO PÚBLICA', number: '5', href: '/servico/contratacao-publica' },
    { id: '6', title: 'CONSULTORIA EM MATÉRIA DE RECURSOS HUMANOS', number: '6', href: '/servico/recursos-humanos' },
    { id: '7', title: 'CONSULTORIA JURÍDICA ESPECIALIZADA', number: '7', href: '/servico/consultoria-juridica' },
]

const Servico = () => {
    return (
        <main className="containerConssulab top-margin">
            <h1 className="mt-16 text-[#091622]  text-[28px] sm:text-5xl font-bold leading-[39.20px] sm:leading-[76.80px] font-montserrat">
                SERVIÇOS
            </h1>
            <span className="flex border-b border-[#e0dfe6] mt-[77px]" />
            <section className="w-full flex flex-col gap-y-10 md:gap-y-0 md:flex-row mt-8">
                <span className="flex-1">
                    <p className=" w-full max-w-[280px] text-[#091622] text-base font-normal leading-normal font-inter">
                        Primamos pelos objectivos de cada instituição
                    </p>
                </span>
                <span className="flex flex-col">
                    <p className="w-full md:w-[479px] text-[#091622] text-xl font-normal  leading-[30px] font-inter">
                        A Consullab actua nas mais diversas áreas do direito, prestando
                        serviços de âmbito nacional e internacional
                    </p>

                    <span className="self-end mt-72 w-10 h-10 p-2  border border-[#091622] justify-start items-center inline-flex">
                        <FiArrowDown className="w-6 h-6 relative" />
                    </span>
                </span>
            </section>
            <section className="my-72">
                <Image className="w-full h-full object-cover" src={ServiceJustice} alt="Serviços da Cosullab" />
            </section>
            <ServiceList
                className="mb-[120px]"
                variant="default"
                title="NOSSOS SERVIÇOS"
                services={services}
            />

        </main>
    );
};

export default Servico;
