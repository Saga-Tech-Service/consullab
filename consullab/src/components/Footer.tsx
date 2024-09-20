import Image from "next/image";
import Logo from "@public/assets/Logo Consullab.svg"

export function Footer() {
    return (
        <footer className="h-[492px] bg-[#3a658f] pt-16 mt-[72px]" >
            <div className="max-w-max-width-consullab mx-auto justify-start items-start gap-8 flex">
                <Image className="w-[311px] h-36" src={Logo} alt="Logo da Consullab" />
                <div className="h-[263px] justify-between items-start gap-16 inline-flex">
                    <div className="flex-col justify-start items-start gap-6 inline-flex">
                        <div className="flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch text-white text-[28px] font-bold leading-[39.20px]">Menu</div>
                            <div className="self-stretch h-36 flex-col justify-start items-start gap-4 flex">
                                <div className="self-stretch text-white text-base font-normal leading-normal">Home</div>
                                <div className="text-white text-base font-normal leading-normal">Serviços</div>
                                <div className="text-white text-base font-normal leading-normal">Sobre</div>
                                <div className="text-white text-base font-normal leading-normal">Blog</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-6 inline-flex">
                        <div className="flex-col justify-start items-start gap-8 flex">
                            <div className="text-white text-[28px] font-bold leading-[39.20px]">Especialização</div>
                            <div className="flex-col justify-start items-start gap-4 flex">
                                <div className="w-[216px] text-white text-base font-normal leading-normal">Consultoria em contratação pública</div>
                                <div className="text-white text-base font-normal leading-normal">Consultoria especializada</div>
                                <div className="w-[213px] text-white text-base font-normal leading-normal">Elaboração de diplomas legais</div>
                                <div className="text-white text-base font-normal leading-normal">Formações</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-6 inline-flex">
                        <div className="flex-col justify-start items-start gap-8 flex">
                            <div className="text-white text-[28px] font-bold leading-[39.20px]">Contactar</div>
                            <div className="h-36 flex-col justify-start items-start gap-4 flex">
                                <div className="text-white text-base font-normal leading-normal">+244 933 692 481</div>
                                <div className="self-stretch text-white text-base font-normal leading-normal">geral@consullab.co.ao</div>
                                <div className="text-white text-base font-normal leading-normal">Facebook</div>
                                <div className="text-white text-base font-normal leading-normal">LinkedIn</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-6 inline-flex">
                        <div className="flex-col justify-start items-start gap-8 flex">
                            <div className="text-white text-[28px] font-bold leading-[39.20px]">Legal</div>
                            <div className="flex-col justify-start items-start gap-4 flex">
                                <div className="text-white text-base font-normal underline leading-normal">Políticas de Privacidade</div>
                                <div className="self-stretch text-white text-base font-normal underline leading-normal">Termos e Condições</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-max-width-consullab mx-auto gap-8 flex border-t border-white mt-20 items-end justify-end">
                <p className="text-[#c2daf4] text-sm font-normal leading-[21px] mt-6">Desenvolvido por © 2024 SAGA Tech Service.</p>
            </div>
        </footer>
    );
}
