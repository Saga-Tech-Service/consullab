import React, { FC, HTMLAttributes } from "react";
import { ComponentElement } from "react";

interface TypeSectionService extends HTMLAttributes<HTMLDivElement> {
    number: number | string
}

const SectionService: FC<TypeSectionService> = ({ number, title, content, className, ...rest }) => {

    return (
        <div className="self-stretch h-[72px] flex-col justify-start items-start gap-4 flex" {...rest}>
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
    )
}

export { SectionService }