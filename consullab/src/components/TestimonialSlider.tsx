'use client'

import React, { useState, useCallback, ReactNode } from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useTypedTranslations } from '@/hooks/useTypedTranslations'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

interface Testimonial {
    name: ReactNode
    role: string
    quote: string
    image: string | StaticImageData
}

interface PartnersProps {
    testimonials: Testimonial[],
    title: string
    subtitle: string
}

const useTestimonialSlider = (testimonials: Testimonial[]) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const next = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, [testimonials.length])

    const prev = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }, [testimonials.length])

    return {
        currentTestimonial: testimonials[currentIndex],
        next,
        prev,
    }
}

export function PartnersSection({ testimonials, title, subtitle }: PartnersProps) {
    const { currentTestimonial, next, prev } = useTestimonialSlider(testimonials)

    return (
        <div className="containerConssulab flex-col justify-start items-start inline-flex">
            <Separator className="flex w-full border border-[#c2daf4]" />
            <p className="mt-8 mb-72 w-[194px] text-[#091622] text-base font-medium leading-normal font-montserrat">
                {title}
            </p>

            <div className="flex flex-col lg:flex-row w-full mb-72">
                <p className="text-[#091622] text-lg font-bold leading-[25.20px] my-8 md:hidden font-inter">
                    {subtitle}
                </p>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentTestimonial.quote}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}
                        className="h-[433px] lg:h-[488px] w-full lg:w-[488px] relative overflow-hidden"
                    >
                        <Image
                            src={currentTestimonial.image}
                            alt={"partner consullab"}
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
                <div className="relative flex flex-col lg:ml-6 gap-y-2 w-full h-full justify-between">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTestimonial.quote}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col h-full justify-between"
                        >
                            <div>
                                <div className="flex justify-between">
                                    <div className="flex-1 flex flex-col gap-y-2">
                                        <div className="text-[#091622] text-xl md:text-[32px] font-bold leading-[44.80px] font-montserrat">
                                            {currentTestimonial.name}
                                        </div>
                                        <p className="text-[#cb935d] text-sm md:text-base font-bold leading-normal italic font-inter">
                                            {currentTestimonial.role}
                                        </p>
                                    </div>
                                    <div className="flex-1 w-auto lg:flex gap-2 hidden justify-end">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="border border-black rounded-none w-10 h-10 flex items-center justify-center"
                                            onClick={prev}
                                        //   aria-label={t("previous_testimonial")}
                                        >
                                            <FiArrowLeft />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="border border-black rounded-none w-10 h-10 flex items-center justify-center"
                                            onClick={next}
                                        //   aria-label={t("next_testimonial")}
                                        >
                                            <FiArrowRight />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <p className="italic w-full text-[#091622] text-xl lg:text-2xl leading-tight lg:leading-[33.60px] font-inter mt-4 self-end">
                                "{currentTestimonial.quote}"
                            </p>
                        </motion.div>
                    </AnimatePresence>
                    <div className="lg:hidden flex gap-2 justify-center mt-4">
                        <Button
                            variant="outline"
                            size="icon"
                            className="border border-black rounded-none w-10 h-10 flex items-center justify-center"
                            onClick={prev}
                        //   aria-label={t("previous_testimonial")}
                        >
                            <FiArrowLeft />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="border border-black rounded-none w-10 h-10 flex items-center justify-center"
                            onClick={next}
                        //   aria-label={t("next_testimonial")}
                        >
                            <FiArrowRight />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}