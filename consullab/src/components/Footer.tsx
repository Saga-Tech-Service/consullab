import Image from "next/image";
import Logo from "@public/assets/Logo Consullab.svg";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-[#3a658f] pt-16 mt-[72px]">
            <section className="containerConssulab  w-full justify-start items-start gap-8 flex flex-col lg:flex-row">
                <Link href={"/"} className="">
                    <Image
                        className="w-[115px] h-[54px] lg:w-[311px] lg:h-36"
                        src={Logo}
                        alt="Logo da Consullab"
                    />
                </Link>
                <div className="w-full flex flex-wrap justify-between items-start gap-16 ">
                    <div className="flex-1 flex-col justify-start items-start gap-6 inline-flex">
                        <div className="flex-col justify-start items-start gap-8 flex">
                            <h1 className="self-stretch text-white text-[28px] font-bold leading-[39.20px]">
                                Menu
                            </h1>
                            <div className="self-stretch h-36 flex-col justify-start items-start gap-4 flex">
                                <Link
                                    href={"/"}
                                    className="self-stretch text-white text-base font-normal leading-normal"
                                >
                                    Home
                                </Link>
                                <Link
                                    href={"/servicos"}
                                    className="text-white text-base font-normal leading-normal"
                                >
                                    Serviços
                                </Link>
                                <Link
                                    href={"/sobre-nos"}
                                    className="text-white text-base font-normal leading-normal"
                                >
                                    Sobre
                                </Link>
                                <Link
                                    href={"/blog"}
                                    className="text-white text-base font-normal leading-normal"
                                >
                                    Blog
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex-col justify-start items-start gap-6 inline-flex">
                        <div className="flex-col justify-start items-start gap-8 flex">
                            <h1 className="text-white text-[28px] font-bold leading-[39.20px]">
                                Especialização
                            </h1>
                            <div className="flex-col justify-start items-start gap-4 flex">
                                <Link
                                    href={"/servico/consultoria-em-contratacao-publica"}
                                    className="w-[216px] text-white text-base font-normal leading-normal"
                                >
                                    Consultoria em contratação pública
                                </Link>
                                <Link
                                    href={"/servico/consultoria-em-contratacao-publica"}
                                    className="text-white text-base font-normal leading-normal"
                                >
                                    Consultoria especializada
                                </Link>
                                <Link
                                    href={"/servico/elaboracao-de-normas"}
                                    className="w-[213px] text-white text-base font-normal leading-normal"
                                >
                                    Elaboração de diplomas legais
                                </Link>
                                <Link
                                    href={"/servico/#formacoes"}
                                    className="text-white text-base font-normal leading-normal"
                                >
                                    Formações
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex-col justify-start items-start gap-6 inline-flex">
                        <div className="flex-col justify-start items-start gap-8 flex">
                            <h1 className="text-white text-[28px] font-bold leading-[39.20px]">
                                Contactar
                            </h1>
                            <div className="h-36 flex-col justify-start items-start gap-4 flex">
                                <Link
                                    href={"tel:+244933692481"}
                                    className="text-white text-base font-normal leading-normal"
                                >
                                    +244 933 692 481
                                </Link>
                                <Link
                                    href={"emailto:geral@consullab.co.ao"}
                                    className="self-stretch text-white text-base font-normal leading-normal"
                                >
                                    geral@consullab.co.ao
                                </Link>
                                <Link
                                    href={"https://web.facebook.com"}
                                    className="text-white text-base font-normal leading-normal"
                                >
                                    Facebook
                                </Link>
                                <Link
                                    href={"https://linkedin.com"}
                                    className="text-white text-base font-normal leading-normal"
                                >
                                    LinkedIn
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex-col justify-start items-start gap-6 inline-flex">
                        <div className="flex-col justify-start items-start gap-8 flex">
                            <h1 className="text-white text-[28px] font-bold leading-[39.20px]">
                                Legal
                            </h1>
                            <div className="flex-col justify-start items-start gap-4 flex">
                                <Link
                                    href={"/politicas-de-privacidade"}
                                    className="text-white text-base font-normal underline leading-normal"
                                >
                                    Políticas de Privacidade
                                </Link>
                                <Link
                                    href={"/termos-e-condicoes"}
                                    className="self-stretch text-white text-base font-normal underline leading-normal"
                                >
                                    Termos e Condições
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="containerConssulab">
                <div className="gap-8 flex border-t border-white mt-20 items-end justify-end">
                    <p className="text-[#c2daf4] text-sm font-normal leading-[21px] mt-6">
                        Desenvolvido por © 2024 SAGA Tech Service.
                    </p>
                </div>
            </section>
        </footer>
    );
}
