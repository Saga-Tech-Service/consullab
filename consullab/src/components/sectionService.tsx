import type React from "react";
import type { FC, HTMLAttributes } from "react";
import { Separator } from "@/components/Separator";
import { Link } from "@/i18n/routing";

interface TypeSectionService extends HTMLAttributes<HTMLDivElement> {
    number: number | string;
    isService?: boolean;
    hrf: string
}

const SectionService: FC<TypeSectionService> = ({
    isService = false,
    number,
    title,
    content,
    className,
    hrf,
    ...rest
}) => {
    return isService ? (

        <div
            className="self-stretch h-[72px] flex-col justify-start items-start gap-4 flex"
            {...rest}
        >
            <Separator className="w-full h-[0px] border border-[#091622]" />
            <div className="w-full justify-between items-start inline-flex">
                <Link href={hrf} className="font-montserrat w-[349px] text-[#091622] text-base lg:text-xl font-semibold  leading-7">
                    {title}
                </Link>
                <Link href={hrf} className="font-montserrat text-right text-[#091622] text-base lg:text-xl font-semibold  leading-7">
                    {number}
                </Link>
            </div>
        </div>
    ) : (

        <div
            className="self-stretch h-[72px] flex-col justify-start items-start gap-4 flex"
            {...rest}
        >
            <Separator className="w-full h-[0px] border border-white/90" />
            <div className="w-full justify-between items-start inline-flex">
                <Link href={hrf} className="w-[349px] text-white text-base lg:text-xl font-semibold  leading-7 font-montserrat">
                    {title}
                </Link>
                <Link href={hrf} className="text-right text-white text-base lg:text-xl font-semibold  leading-7 font-inter">
                    {number}
                </Link>
            </div>
        </div>

    );
};

export { SectionService };
