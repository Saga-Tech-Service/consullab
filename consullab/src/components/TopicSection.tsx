import React from 'react';
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
interface TopicSectionProps extends React.ComponentPropsWithoutRef<"div"> {
    number: string
}

export const TopicSection = React.forwardRef<
    React.ElementRef<"div">,
    TopicSectionProps
>(({ className, title, number, children, ...props }, ref) => {
    return (
        <div className="w-full h-[190px] relative" >
            <div className="w-full h-[0px] border border-[#e0dfe6]" />
            <div className="flex">
                <span className="flex-1  text-[#091622] text-[32px] font-bold leading-[44.80px]">
                    {number}
                </span>
                <div className="flex-1 h-[150px] flex-col justify-start items-start gap-6 inline-flex">
                    <h2 className="self-stretch text-[#091622] text-[32px] font-bold leading-[44.80px]">
                        {title}
                    </h2>
                    <div className="w-[800px] text-[#274a6d] text-lg font-medium leading-[27px]">
                        {children}
                    </div>
                </div>
            </div>
        </div >
    )
})
TopicSection.displayName = "TopicSection"


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
interface TopicItemnProps extends React.ComponentPropsWithoutRef<"div"> {
    number: string
}

export const TopicItem = React.forwardRef<
    React.ElementRef<"div">,
    TopicItemnProps
>(({ className, title, number, children, ...props }, ref) => {
    return (
        <div ref={ref} {...props} className="flex-col justify-start items-start gap-4 inline-flex">
            <div className="w-96 h-[0px] border border-[#e0dfe6]" />
            <div className="w-96 justify-between items-start inline-flex">
                <div className="w-[349px] text-[#091622] text-xl font-semibold leading-7">
                    {title}
                </div>
                <div className="text-right text-[#091622] text-xl font-semibold leading-7">
                    {number}
                </div>
            </div>
        </div>
    )
})
TopicItem.displayName = "TopicItem"


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
interface CardInfoProps extends React.ComponentPropsWithoutRef<"div"> {
    number: string
}

export const CardInfo = React.forwardRef<
    React.ElementRef<"div">,
    CardInfoProps
>(({ className, title, number, children, ...props }, ref) => {
    return (

        <div ref={ref} {...props} className={cn("flex flex-col gap-9", className)}>
            <span className="text-[#091622] text-[120px] font-bold">+{number}</span>
            <div className="flex flex-col gap-1">
                <span className="text-[#091622] text-5xl font-bold leading-[67.20px]">
                    {title}
                </span>
                <span className="w-[279px] text-[#173049] text-base font-medium  leading-normal">
                    {children}
                </span>
            </div>
        </div>
    )
})
CardInfo.displayName = "CardInfo"


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
interface TopicAboutUSProps extends React.ComponentPropsWithoutRef<"div"> {
    number: string
}

export const TopicAboutUS = React.forwardRef<
    React.ElementRef<"div">,
    TopicAboutUSProps
>(({ className, title, number, children, ...props }, ref) => {
    return (
        <div ref={ref} {...props} className={cn('', className)}>
            <span className="flex w-96 h-[0px] border border-[#4f7faf]" />
            <div className=" mb-6 text-[#091622] text-[28px] font-bold leading-[39.20px]">{number}</div>
            <span className="w-[356px] text-[#091622] text-xl font-bold  leading-7">{title}</span>
            <p className="text-[#173049] text-base font-normal max-w-96 leading-normal">{children}</p>
        </div>

    )
})
TopicAboutUS.displayName = "TopicAboutUS"


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
interface CardTeamProps extends React.ComponentPropsWithoutRef<"div"> {
    src: string | StaticImageData
    hrf?: string
}

export const CardTeam = React.forwardRef<
    React.ElementRef<"div">,
    CardTeamProps
>(({ className, title, src, children, hrf = "/equipa/alexandre-francisco", ...props }, ref) => {
    return (
        <a href={hrf} className={cn('', className)}>
            <div ref={ref} {...props} className={cn("w-[280px] h-[424px] flex-col justify-start items-start gap-4 inline-flex")}>
                <Image
                    src={src}
                    className="self-stretch h-96"
                    alt="Nosso team da Consullab"
                />
                <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-white text-base font-semibold leading-normal">
                        {children}
                    </div>
                    <div className="text-right text-[#a0c3e9] text-base font-semibold leading-normal">
                        {title}
                    </div>
                </div>
            </div>
        </a>

    )
})
CardTeam.displayName = "CardTeam"