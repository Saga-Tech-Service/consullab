import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
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
        <main className="containerConssulab flex flex-col">
            <article className="flex flex-col items-center gap-8 mt-16 w-full">
                <header className="self-start gap-2.5">
                    <h1 className=" text-[#091622] text-[28px] sm:text-3xl text-5xl font-bold leading-[76.80px]">
                        Políticas de privacidade
                    </h1>
                </header>

                <p className="md:self-end text-[#091622] md:max-w-[488px] text-sm md:text-base font-normal leading-normal md:mt-[85px] w-full">
                    Este Aviso de Privacidade (“Aviso”) descreve como a LGC Consulting
                    coleta e usa seus dados Dados pessoais de acordo com o regulamento
                    Geral de Proteção de Dados e outras informações aplicáveis leis de
                    proteção de dados e privacidade . Ele conta você o que Dados Pessoais
                    a LGC Consulting coleta, por que precisamos disso, como o usamos e
                    quais proteções estão em vigor para manter é seguro.
                </p>
            </article>

            <Accordion type="single" collapsible className="w-full mt-10">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-[#091622] text-xl md:text-[32px] font-bold leading-[44.80px]">
                        Controlador de dados
                    </AccordionTrigger>
                    <AccordionContent className="flex items-end justify-end">
                        <p className="text-[#173049] text-lg font-normal max-w-[488px] ">
                            A LGC Consulting é a Controladora de Dados em relação aos seus
                            Dados Pessoais e está comprometida em proteger os direitos de
                            privacidade dos indivíduos, incluindo os seus direitos.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-[#091622] text-xl md:text-[32px] font-bold leading-[44.80px]">
                        Controlador de dados
                    </AccordionTrigger>
                    <AccordionContent className="flex items-end justify-end">
                        <p className="text-[#173049] text-lg font-normal max-w-[488px] ">
                            A LGC Consulting é a Controladora de Dados em relação aos seus
                            Dados Pessoais e está comprometida em proteger os direitos de
                            privacidade dos indivíduos, incluindo os seus direitos.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-[#091622] text-xl md:text-[32px] font-bold leading-[44.80px]">
                        Controlador de dados
                    </AccordionTrigger>
                    <AccordionContent className="flex items-end justify-end">
                        <p className="text-[#173049] text-lg font-normal max-w-[488px] ">
                            A LGC Consulting é a Controladora de Dados em relação aos seus
                            Dados Pessoais e está comprometida em proteger os direitos de
                            privacidade dos indivíduos, incluindo os seus direitos.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </main>
    );
};

export default News;
