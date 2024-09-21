import Link from "next/link";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const News = () => {
    return (
        <main className="w-full flex flex-col max-w-max-width-consullab mx-auto">
            <section className="flex flex-col items-center gap-8 mt-16 w-full">
                <div className="self-start gap-2.5">
                    <div className="w-[696px] text-[#091622] text-5xl font-bold leading-[76.80px]">
                        Políticas de privacidade
                    </div>
                </div>

                <div className="self-end text-[#091622] max-w-[488px] text-base font-normal leading-normal mt-[85px] w-full">
                    Este Aviso de Privacidade (“Aviso”) descreve como a LGC Consulting
                    coleta e usa seus dados Dados pessoais de acordo com o regulamento
                    Geral de Proteção de Dados e outras informações aplicáveis leis de
                    proteção de dados e privacidade . Ele conta você o que Dados Pessoais
                    a LGC Consulting coleta, por que precisamos disso, como o usamos e
                    quais proteções estão em vigor para manter é seguro.
                </div>
            </section>
            <section className="mt-[72px] h-[217px] flex-col justify-start items-end gap-8 inline-flex">
                <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-[#091622] text-[32px] font-bold  leading-[44.80px]">
                        Controlador de dados
                    </div>
                    <div className="w-6 h-6 relative" />
                </div>
                <div className="w-[488px] text-[#173049] text-lg font-normal leading-[27px]">
                    A LGC Consulting é a Controladora de Dados em relação aos seus Dados
                    Pessoais e está comprometida em proteger os direitos de privacidade
                    dos indivíduos, incluindo os seus direitos.
                </div>
                <div className="w-full h-[0px] border border-[#c2daf4]" />
            </section>
            {/* <div className="text-[#091622] text-[32px] font-bold leading-[44.80px]">
                Controlador de dados
            </div> */}
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-[#091622] text-[32px] font-bold leading-[44.80px]">
                        Controlador de dados
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-[#091622] text-[32px] font-bold leading-[44.80px]">
                        Controlador de dados
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes. It comes with default styles that matches the other
                        components&apos; aesthetic.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-[#091622] text-[32px] font-bold leading-[44.80px]">
                        Controlador de dados
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes. It's animated by default, but you can disable it if you prefer.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </main>
    );
};

export default News;
