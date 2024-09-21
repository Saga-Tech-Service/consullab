import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import Blog from "@public/assets/BlogNews.jpg";
import AboutUS2 from "@public/assets/AboutUs2.jpg";
import Partner from "@public/assets/Partner.jpg";
import { CardInfo } from "@/components/TopicSection";
import { Button } from "@/components/ui/button";
import { TopicAboutUS } from "@/components/TopicSection";

const Servico = () => {
    return (
        <main className="flex flex-col">
            <section
                className="relative bg-cover bg-center w-full mt-[72px] max-w-max-width-consullab mx-auto h-[720px]"
                style={{ backgroundImage: `url(${Blog.src})` }}
            >
                <h1 className="text-[#e0dfe6] text-base font-bold uppercase leading-normal">úLTIMAS NOTÍCIAS</h1>
                <div className="flex gap-4">
                    <div className="w-[104px] h-[0px] border border-white" />
                    <div className="w-[104px] h-[0px] border border-white" />
                    <div className="w-[104px] h-[0px] border border-white" />
                    <div className="w-[104px] h-[0px] border border-white" />
                </div>
            </section>
        </main>
    );
};

export default Servico;
