import React, { FC, HTMLAttributes } from "react";
import { ComponentElement } from "react";
import { FiArrowRight } from "react-icons/fi";

interface TypeSectionNews extends HTMLAttributes<HTMLDivElement> {
    date: number | string;
}

const SectionNews: FC<TypeSectionNews> = ({
    date,
    title,
    content,
    ...rest
}) => {
    return (
        <div
            className="flex h-[199px] flex-col
             justify-start items-start gap-8  w-full md:w-[616px]"
            {...rest}
        >
            <span className="h-px text-[#8c8996] text-sm sm:text-base font-semibold  leading-normal">
                {date}
            </span>
            <div className="w-full flex flex-row justify-between">
                <p className="w-[616px] text-[#091622] text-xl sm:text-5xl font-bold leading-[67.20px]">
                    {content}
                </p>
                <span className="w-10 h-10 p-2 border border-[#091622] justify-start items-center gap-2.5 flex">
                    <FiArrowRight className="w-6 h-6 relative" />
                </span>
            </div>
            <div className="h-[0px] border border-[#e0dfe6] w-full" />

        </div>
    );
};

export { SectionNews };
