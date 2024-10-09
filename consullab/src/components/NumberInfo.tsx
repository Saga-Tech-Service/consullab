import React, { FC, HTMLAttributes } from "react";
import { ComponentElement } from "react";

interface TypeNumberInfo extends HTMLAttributes<HTMLDivElement> {
    number: number
}

const NumberInfo: FC<TypeNumberInfo> = ({ number, title, content, className, ...rest }) => {

    return (
        <div {...rest}>
            <span className="text-[#091622] text-[120px] font-bold">+{number}</span>
            <div className="flex flex-col gap-1">
                <span className="text-[#091622] text-5xl font-bold leading-[67.20px]">
                    {title}
                </span>
                <span className="w-[279px] text-[#173049] text-base font-medium  leading-normal">
                    {content}
                </span>
            </div>
        </div>
    )
}

export { NumberInfo }