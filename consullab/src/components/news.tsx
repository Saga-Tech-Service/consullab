"use client";

import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/Separator";

interface NewsItem {
    date: string;
    content: string;
    url: string;
}

interface AdvancedNewsComponentProps {
    title: string;
    news: NewsItem[];
    itemsPerPage: number;
}

const ServiceNews: React.FC<NewsItem & { index: number }> = ({
    date,
    content,
    url,
    index,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full max-w-[800px] flex-row justify-between items-start gap-8 inline-flex"
        >
            <div className="flex-col gap-8 flex w-full ">
                <Separator className="w-full h-[0px] border border-[#e0dfe6]" />
                <div className="flex flex-col sm:flex-row gap-8">
                    <span className="text-[#274a6d] text-lg font-bold leading-[25.20px]">
                        {date}
                    </span>
                    <Link
                        href={url}
                        className="text-[#091622] text-base font-normal leading-normal hover:text-[#4f7faf] transition-colors duration-300"
                    >
                        {content}
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export const AdvancedNewsComponent: React.FC<AdvancedNewsComponentProps> = ({
    title,
    news,
    itemsPerPage,
}) => {
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(news.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const visibleNews = news.slice(startIndex, startIndex + itemsPerPage);

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    return (
        <div className="space-y-8">
            <section className="flex flex-col md:flex-row justify-between gap-4">
                <header className="flex flex-col flex-1 w-full md:max-w-[280px] space-y-6 ">
                    <Separator className="w-full h-[0px] border border-[#e0dfe6]" />
                    <h2 className="text-[#091622] text-base font-medium leading-normal">
                        {title}
                    </h2>
                </header>
                <section className="flex flex-1 flex-col space-y-8 mt-10 md:mt-0 min-h-[200px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-end gap-8"
                        >
                            {visibleNews.map((item, index) => (
                                <ServiceNews
                                    key={`${currentPage}-${
                                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                        index
                                        }`}
                                    index={index}
                                    date={item.date}
                                    content={item.content}
                                    url={item.url}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                    <div className="flex justify-between items-center mt-4">
                        <Button
                            onClick={prevPage}
                            variant="ghost"
                            size="icon"
                            className="text-[#091622] hover:text-[#4f7faf] transition-colors duration-300"
                            aria-label="Notícias anteriores"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            onClick={nextPage}
                            variant="ghost"
                            size="icon"
                            className="text-[#091622] hover:text-[#4f7faf] transition-colors duration-300"
                            aria-label="Próximas notícias"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </section>
            </section>

            <section className="text-center mt-8 ">
                <motion.div
                    initial={false}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <Button
                        type="button"
                        onClick={nextPage}
                        className={cn(
                            "mt-[72px] self-center rounded-none text-[#091622] md:text-white",
                            "text-sm font-semibold uppercase leading-[21px] w-full max-w-[336px]",
                            "h-[37px] px-4 py-2 bg-[#4f7faf] md:bg-[#091622] inline-flex",
                            "justify-center items-center transition-all duration-300 ease-in-out"
                        )}
                    >
                        {currentPage === totalPages - 1
                            ? "VOLTAR AO INÍCIO"
                            : "VER TODAS NOTÍCIAS"}
                    </Button>
                </motion.div>
            </section>
        </div>
    );
};
