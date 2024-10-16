"use client";
import React from "react";
import Blog from "@public/assets/BlogInfo1.jpg";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { IoIosArrowBack } from "react-icons/io";
import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
    CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IoArrowForward } from "react-icons/io5";
import { Separator } from "@/components/Separator";
import {
    EmailShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    FacebookShareButton,
} from "next-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useEffect, useState } from "react";
import { useTypedTranslations } from "@/hooks/useTypedTranslations";
import { useMessages } from "next-intl";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface IDetailsBlog {
    DetailsBlog: {
        paragraphs: string[]
    };
}
const Servico = () => {
    const [fullUrl, setFullUrl] = useState("");
    const [copied, setCopied] = useState(false); // Estado para indicar se a URL foi copiada

    // Construir a URL completa
    useEffect(() => {
        if (typeof window !== "undefined") {
            const currentUrl = window.location.href;
            setFullUrl(currentUrl);
        }
    }, []);

    useEffect(() => {
        if (copied) {
            const timer = setTimeout(() => {
                setCopied(false);
            }, 2000); // Espera de 2 segundos
            return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
        }
    }, [copied]);

    const t = useTypedTranslations("DetailsBlog");
    const messagesDetailsBlog = useMessages() as unknown as IDetailsBlog | null;

    // Acessa diretamente o array de benefícios
    const DetailsBlog = messagesDetailsBlog?.DetailsBlog?.paragraphs || [];

    // Itera sobre o array de benefícios corretamente
    const JobsDetailsBlog = DetailsBlog.map((paragraphs) => paragraphs);

    return (
        <main className="flex flex-col">
            <section className="containerConssulab flex flex-col justify-center items-center w-full top-margin">
                <div className="flex w-full lg:max-w-[800px] h-auto flex-col justify-center items-center gap-8">
                    <div className="justify-start items-center gap-2.5 inline-flex">
                        <Link
                            href={"/blog"}
                            className="flex gap-2 items-center text-[#091622] text-base font-semibold leading-normal font-montserrat"
                        >
                            <IoIosArrowBack />
                            {t("button_text")}
                        </Link>
                    </div>
                    <div className="self-stretch flex-col justify-start items-center gap-4 flex">
                        <h1 className="self-stretch text-center text-[#091622] text-[28px] lg:text-5xl font-bold leading-[39.20px] lg:leading-[67.20px] font-montserrat">
                            {t("title")}
                        </h1>
                        <p className="self-stretch text-center italic text-[#cb935d] text-xl font-normal leading-7 font-inter">
                            {t("date")}
                        </p>
                    </div>
                </div>
            </section>

            <figure className="containerConssulab flex flex-col justify-center items-end h-[200px] sm:h-[635px]">
                <Image
                    className="bg-cover bg-center w-full h-full"
                    alt="Blog da Cosullab"
                    src={Blog}
                />
            </figure>

            <section className="containerblog flex-col justify-start items-start gap-6 inline-flex mt-10">
                <h2 className=" text-[#cb935d] text-5xl font-bold font-montserrat leading-[67.20px]">
                    {t("article_intro")}
                </h2>
                <article className="self-stretch flex-col justify-start items-start gap-4 flex">
                    <p className="self-stretch text-[#091622] text-sm sm:text-base md:text-lg font-normal leading-[27px] font-inter">
                        {JobsDetailsBlog.map((item, index) => (
                            <React.Fragment key={item}>
                                {item}
                                {index !== JobsDetailsBlog.length - 1 && (
                                    <>
                                        <br />
                                        <br />
                                    </>
                                )}
                            </React.Fragment>
                        ))}
                    </p>
                    <div className="self-stretch">
                        <span className="text-[#091622] text-sm sm:text-base md:text-lg font-medium leading-[27px] font-inter">
                            {t("author")}{" "}
                        </span>
                        <span className="text-[#cb935d] text-sm sm:text-base md:text-lg font-medium leading-[27px] font-inter">
                            {t("author_name")}
                        </span>
                    </div>
                </article>
            </section>

            <section className="containerblog mt-10 h-auto flex-col gap-8 inline-flex">
                <div className="self-stretch h-[57px] flex-col justify-start items-start gap-8 flex">
                    <Separator className="w-full h-[0px] border border-[#e0dfe6]" />
                    <p className="self-stretch text-[#cb935d] text-sm md:text-base lg:text-lg font-bold leading-[25.20px] font-montserrat">
                        {t("share_article")}
                    </p>
                </div>
                <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
                    <LinkedinShareButton url={fullUrl}>
                        <div className="text-[#091622] bg-transparent rounded-none border-r border-[#e0dfe6] w-full h-[59px] font-inter text-lg font-normal leading-[27px]">
                            LinkedIn
                        </div>
                    </LinkedinShareButton>
                    <FacebookShareButton type="button" url={fullUrl}>
                        <div className="text-[#091622] bg-transparent rounded-none border-r border-[#e0dfe6] w-full h-[59px] font-inter  text-lg font-normal leading-[27px]">
                            Facebook
                        </div>
                    </FacebookShareButton>
                    <TwitterShareButton url={fullUrl} type="button">
                        <div className="text-[#091622] bg-transparent rounded-none border-r border-[#e0dfe6] w-full h-[59px] font-inter text-lg font-normal leading-[27px]">
                            X
                        </div>
                    </TwitterShareButton>

                    <EmailShareButton url={fullUrl} type="button">
                        <div className="text-[#091622] bg-transparent rounded-none border-r border-[#e0dfe6] w-full h-[59px] font-inter text-lg font-normal leading-[27px]">
                            Email
                        </div>
                    </EmailShareButton>
                    <CopyToClipboard text={fullUrl} onCopy={() => setCopied(true)}>
                        <div className="text-[#091622] cursor-pointer bg-transparent rounded-none border-r border-[#e0dfe6] w-full h-[59px]  text-lg font-normal leading-[27px]">
                            {copied ? t("copied") : t("copy_link")}
                        </div>
                    </CopyToClipboard>
                </nav>
                <Separator className="w-full self-stretch h-[0px] border border-[#e0dfe6]" />
            </section>

            <section className="containerblog mt-[72px] h-[57px] flex-col  gap-8 inline-flex">
                <div className="self-stretch h-[0px] border border-[#e0dfe6]" />
                <p className="self-stretch text-[#cb935d] text-lg font-bold leading-[25.20px]">
                    {t("share_article")}
                </p>
            </section>

            <section className="containerConssulab flex flex-col md:flex-row  justify-between  mt-72 gap-8">
                <Card className="shadow-none rounded-none border-none ring-0 bg-transparent">
                    <CardContent className="flex-col justify-start items-start gap-12 flex ">
                        <CardHeader className=" flex-col justify-start items-start gap-6 flex p-0">
                            <CardDescription className="text-[#091622] tex-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-medium p-0">
                                {t("card_description")}
                            </CardDescription>
                            <p className="italic text-[#cb935d] text-xl font-normal leading-7">
                                {t("date")}
                            </p>
                        </CardHeader>

                        <Link
                            href={"/blog"}
                            className="h-10 px-4 py-2 border border-[#091622] justify-center items-center gap-2.5 inline-flex"
                        >
                            <Button variant={"ghost"} className="rounded-none w-[110px] text-[#091622] text-base font-semibold font-montserrat leading-normal">
                                {t("read_article")}
                            </Button>
                            <IoArrowForward className="w-6 h-6 relative" />
                        </Link>
                        <CardFooter className="p-0">
                            <Image alt="Blog da consullab" className="h-[295px]" src={Blog} />
                        </CardFooter>
                    </CardContent>
                </Card>
                <Card className="shadow-none rounded-none border-none ring-0 bg-transparent">
                    <CardContent className="flex-col justify-start items-start gap-12 flex ">
                        <CardHeader className=" flex-col justify-start items-start gap-6 flex p-0">
                            <CardDescription className="text-[#091622] tex-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-medium p-0">
                                {t("card_description")}
                            </CardDescription>
                            <p className="italic text-[#cb935d] text-xl font-normal leading-7">
                                {t("date")}
                            </p>
                        </CardHeader>

                        <Link
                            href={"/blog"}
                            className="h-10 px-4 py-2 border border-[#091622] justify-center items-center gap-2.5 inline-flex"
                        >
                            <Button variant={"ghost"} className="rounded-none w-[110px] text-[#091622] text-base font-semibold font-montserrat leading-normal">
                                {t("read_article")}
                            </Button>
                            <IoArrowForward className="w-6 h-6 relative" />
                        </Link>
                        <CardFooter className="p-0">
                            <Image alt="Blog da consullab" className="h-[295px]" src={Blog} />
                        </CardFooter>
                    </CardContent>
                </Card>
            </section>

            <section className="containerConssulab flex items-center justify-center mb-[37px] mt-2">
                <Button
                    variant={"link"}
                    className="rounded-none max-w-[246px] h-10 px-4 py-2 border border-[#091622] justify-center items-center gap-2.5 inline-flex"
                >
                    <IoIosArrowBack className="w-6 h-6 relative" />
                    <p className="w-auto text-right text-[#091622] text-base font-semibold font-montserrat leading-normal">
                        {t("all_news")}
                    </p>
                </Button>
            </section>
        </main>
    );
};

export default Servico;
