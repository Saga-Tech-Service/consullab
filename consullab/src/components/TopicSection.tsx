import React from 'react';
import type { ElementType } from 'react';
import { cn } from "@/lib/utils";
import Image, { type StaticImageData } from 'next/image';
import { Link } from '@/i18n/routing';
import { Separator } from '@/components/Separator';

interface TopicSectionProps extends React.ComponentPropsWithoutRef<"div"> {
    number: string
}

export const TopicSection = React.forwardRef<
    React.ElementRef<"div">,
    TopicSectionProps
>(({ className, title, number, children, ...props }, ref) => {
    return (
        <div className="w-full relative" >
            <div className="w-full h-[0px] border border-[#e0dfe6]" />
            <div className="flex flex-col md:flex-row justify-start items-start gap-2 mt-6">
                <span className="flex-1  text-[#091622] text-[32px] font-bold leading-[44.80px]">
                    {number}
                </span>
                <div className="flex-1  flex-col justify-start items-start gap-6 inline-flex">
                    <h2 className="self-stretch text-[#091622] text-[32px] font-bold leading-[44.80px]">
                        {title}
                    </h2>
                    <div className="w-full lg:w-[800px] text-[#274a6d] text-lg font-medium leading-[27px]">
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
            <Separator className='w-full' />
            <span className="text-[#091622] text-6xl lg:text-[120px] font-bold">{number}</span>
            <div className="flex flex-col gap-1">
                <span className="text-[#091622] text-3xl lg:text-5xl font-bold leading-[67.20px]">
                    {title}
                </span>
                <span className="w-[279px] text-[#173049] text-sm lg:text-base font-medium  leading-normal">
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
            <Separator className="flex w-full h-[0px] border border-[#4f7faf]" />
            <div className="font-montserrat mb-6 text-[#091622] text-[28px] font-bold leading-[39.20px]">{number}</div>
            <span className="font-inter w-[356px] text-[#091622] text-xl font-bold  leading-7">{title}</span>
            <p className="font-inter text-[#173049] text-base font-normal max-w-96 leading-normal">{children}</p>
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
        <Link href={hrf} className={cn('', className)}>
            <div ref={ref} {...props} className={cn("w-full md:w-[280px] h-[424px] flex-col justify-start items-start gap-4 inline-flex")}>
                <Image
                    src={src}
                    className="self-stretch bg-cover w-full h-auto"
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
        </Link>

    )
})
CardTeam.displayName = "CardTeam"

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
interface SocialMediumProps extends React.ComponentPropsWithoutRef<"div"> {
    hrf: string
}

export const SociolMedium = React.forwardRef<
    React.ElementRef<"div">,
    SocialMediumProps
>(({ className, title, hrf, ...props }, ref) => {
    return (
        <div ref={ref} className={cn("self-stretch flex-col justify-start items-start gap-10 flex", className)} {...props}>
            <Link href={hrf} className="self-stretch text-[#091622] text-2xl font-bold leading-[33.60px]">
                Telegram
            </Link>
            <div className="self-stretch h-[0px] border border-[#e0dfe6]" />
        </div>

    )
})
SociolMedium.displayName = "SociolMedium"

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
interface ServiceNewsProps extends React.ComponentPropsWithoutRef<"div"> {
    date: string
}

export const ServiceNews = React.forwardRef<
    React.ElementRef<"div">,
    ServiceNewsProps
>(({ className, title, date, content, ...props }, ref) => {
    return (
        <div ref={ref} className={cn("w-full max-w-[800px] flex-row justify-between items-start gap-8 inline-flex", className)} {...props}>
            <div className="flex-col justify-start items-start gap-8 flex ">
                <div className="w-full h-[0px] border border-[#e0dfe6]" />
                <div className="flex flex-col sm:flex-row gap-8">
                    <span className=" text-[#274a6d] text-lg font-bold leading-[25.20px]">
                        {date}
                    </span>
                    <p className="text-[#091622] text-base font-normal leading-normal">
                        {content}
                    </p>
                </div>
            </div>
        </div>

    )
})
ServiceNews.displayName = "ServiceNews"

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
interface SectionAboutUsProps extends React.ComponentPropsWithoutRef<"div"> {
    Icon: ElementType
}

export const SectionAboutUs = React.forwardRef<
    React.ElementRef<"div">,
    SectionAboutUsProps
>(({ className, title, Icon, content, ...props }, ref) => {
    return (
        <div ref={ref} className={cn("flex-col justify-center items-start gap-4 inline-flex", className)} {...props} >
            <Icon className="w-8 h-8 relative text-white" />
            <h3 className="text-white text-xl font-bold leading-7 flex flex-col items-start gap-2 font-montserrat">
                {title}
            </h3>
            <p className="sm:w-[368px] text-white text-base font-normal leading-normal font-inter">
                {content}
            </p>
        </div>

    )
})
SectionAboutUs.displayName = "SectionAboutUs"