import type React from "react";
import type { FC, HTMLAttributes } from "react";
import { ComponentElement } from "react";

interface TypeSectionService extends HTMLAttributes<HTMLDivElement> {
    number: number | string;
    isService?: boolean;
}

const SectionService: FC<TypeSectionService> = ({
    isService = false,
    number,
    title,
    content,
    className,
    ...rest
}) => {
    return isService ? (
        <div
            className="self-stretch h-[72px] flex-col justify-start items-start gap-4 flex"
            {...rest}
        >
            <div className="w-full h-[0px] border border-[#091622]" />
            <div className="w-full justify-between items-start inline-flex">
                <div className="w-[349px] text-[#091622] text-base lg:text-xl font-semibold  leading-7">
                    {title}
                </div>
                <div className="text-right text-[#091622] text-base lg:text-xl font-semibold  leading-7">
                    {number}
                </div>
            </div>
        </div>
    ) : (
        <div
            className="self-stretch h-[72px] flex-col justify-start items-start gap-4 flex"
            {...rest}
        >
            <div className="w-full h-[0px] border border-white/90" />
            <div className="w-full justify-between items-start inline-flex">
                <div className="w-[349px] text-white text-base lg:text-xl font-semibold  leading-7">
                    {title}
                </div>
                <div className="text-right text-white text-base lg:text-xl font-semibold  leading-7">
                    {number}
                </div>
            </div>
        </div>
    );
};

export { SectionService };
