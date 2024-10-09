import { Link } from "@/i18n/routing";
import type { FC, HTMLAttributes } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Separator } from "./Separator";

interface TypeSectionNews extends HTMLAttributes<HTMLDivElement> {
    date: number | string;
    hrf: string
}

const SectionNews: FC<TypeSectionNews> = ({
    date,
    title,
    content,
    hrf,
    ...rest
}) => {
    return (

        <div
            className="flex h-[199px] flex-col
             justify-start items-start gap-8  w-full md:w-[616px]"
            {...rest}
        >
            <Link href={hrf} passHref className="w-full">
                <span className="h-px text-[#8c8996] text-sm sm:text-base font-semibold  leading-normal">
                    {date}
                </span>
                <div className="w-full flex flex-row justify-between gap-x-8">
                    <p className=" text-[#091622] text-xl sm:text-5xl font-bold md:leading-[67.20px]">
                        {content}
                    </p>
                    <span className="w-10 h-10 p-2 border border-[#091622] justify-start items-center gap-2.5 flex">
                        <FiArrowRight className="w-6 h-6 relative" />
                    </span>
                </div>
                <Separator className="h-[0px] border border-[#e0dfe6] w-full mt-8" />
            </Link>
        </div>
    );
};

export { SectionNews };
