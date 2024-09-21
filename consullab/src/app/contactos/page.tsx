import Link from "next/link";
import React from "react";
import Image from "next/image";
import Location from "@public/assets/location.jpg"

const News = () => {
    return (
        <main className="w-full flex flex-col max-w-max-width-consullab mx-auto">
            <div className="h-[1600px] relative bg-[#f4f4f4]">
                <h1 className="mt-16 text-[#091622] text-5xl font-bold leading-[67.20px]">
                    Contactos
                </h1>
                <div className="w-[698px] h-[472px] left-[110px] top-[254px] absolute">
                    <div className="w-[696px] h-[0px] left-[2px] top-[293px] absolute border border-[#e0dfe6]" />
                    <div className="w-[347px] h-[139px] left-0 top-[333px] absolute">
                        <div className="left-0 top-0 absolute text-[#091622] text-base font-normal leading-normal">
                            BENGUELA
                        </div>
                        <div className="w-[347px] h-[91px] left-0 top-[48px] absolute flex-col justify-start items-start gap-2 inline-flex">
                            <div className="self-stretch text-[#091622] text-lg font-bold leading-[25.20px]">
                                Rua Rainha Nginga, Avenida 2034
                            </div>
                            <div className="self-stretch text-[#091622] text-lg font-bold leading-[25.20px]">
                                +244 924 931 394
                            </div>
                            <div className="self-stretch text-[#091622] text-lg font-bold leading-[25.20px]">
                                suporte.lgc@consulting.ao
                            </div>
                        </div>
                    </div>
                    <div className="w-[696px] h-[179px] left-[2px] top-0 absolute">
                        <div className="w-[696px] h-[0px] left-0 top-0 absolute border border-[#e0dfe6]" />
                        <div className="w-[347px] h-[139px] left-0 top-[40px] absolute">
                            <div className="left-0 top-0 absolute text-[#091622] text-base font-normal leading-normal">
                                LUANDA
                            </div>
                            <div className="w-[347px] h-[91px] left-0 top-[48px] absolute flex-col justify-start items-start gap-2 inline-flex">
                                <div className="self-stretch text-[#091622] text-lg font-bold leading-[25.20px]">
                                    Rua Rainha Nginga, Avenida 2034
                                </div>
                                <div className="self-stretch text-[#091622] text-lg font-bold leading-[25.20px]">
                                    +244 924 931 394
                                </div>
                                <div className="self-stretch text-[#091622] text-lg font-bold leading-[25.20px]">
                                    suporte.lgc@consulting.ao
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[1216px] h-[0px] left-[112px] top-[940px] absolute border border-[#e0dfe6]" />
                <div className="left-[112px] top-[980px] absolute text-[#091622] text-base font-normal leading-normal">
                    REDES SOCIAIS
                </div>
                <div className="h-[530px] left-[840px] top-[980px] absolute flex-col justify-start items-start gap-10 inline-flex">
                    <div className="self-stretch h-[74px] flex-col justify-start items-start gap-10 flex">
                        <div className="self-stretch text-[#091622] text-2xl font-bold leading-[33.60px]">
                            Telegram
                        </div>
                        <div className="self-stretch h-[0px] border border-[#e0dfe6]" />
                    </div>
                    <div className="self-stretch h-[74px] flex-col justify-start items-start gap-10 flex">
                        <div className="self-stretch text-[#091622] text-2xl font-bold leading-[33.60px]">
                            Facebook
                        </div>
                        <div className="self-stretch h-[0px] border border-[#e0dfe6]" />
                    </div>
                    <div className="self-stretch h-[74px] flex-col justify-start items-start gap-10 flex">
                        <div className="self-stretch text-[#091622] text-2xl font-bold leading-[33.60px]">
                            Instagram
                        </div>
                        <div className="self-stretch h-[0px] border border-[#e0dfe6]" />
                    </div>
                    <div className="self-stretch h-[74px] flex-col justify-start items-start gap-10 flex">
                        <div className="self-stretch text-[#091622] text-2xl font-bold leading-[33.60px]">
                            X
                        </div>
                        <div className="self-stretch h-[0px] border border-[#e0dfe6]" />
                    </div>
                    <div className="self-stretch h-[74px] flex-col justify-start items-start gap-10 flex">
                        <div className="self-stretch text-[#091622] text-2xl font-bold leading-[33.60px]">
                            LinkedIn
                        </div>
                        <div className="self-stretch h-[0px] border border-[#e0dfe6]" />
                    </div>
                </div>
                <Image
                    alt="Localização da consullab"
                    className="w-[489px] h-[514px] left-[840px] top-[254px] absolute border"
                    src={Location}
                />
            </div>
        </main>
    );
};

export default News;
