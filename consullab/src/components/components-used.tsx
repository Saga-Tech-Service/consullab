"use client"

import Image from "next/image"
import Logo from "@public/assets/Logo Consullab.svg"
import { useTypedTranslations } from "@/hooks/useTypedTranslations"
import { Link } from "@/i18n/routing"
import * as LinkNext from "next/link"
import { motion } from "framer-motion"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"

const MotionLink = motion(LinkNext.default)

export function Footer() {
    const t = useTypedTranslations("footer")

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    }

    return (
        <footer className="bg-gradient-to-b from-[#3a658f] to-[#2c4d6d] pt-16 space-y-10 lg:space-y-20">
            <motion.section
                className="containerConssulab w-full gap-8 flex flex-col lg:flex-row"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants}>
                    <Link href="/" className="inline-block transform transition-transform duration-300 hover:scale-105">
                        <Image
                            className="w-[115px] h-[54px] lg:w-[200px] lg:h-[93px]"
                            src={Logo}
                            alt="Logo da Consullab"
                        />
                    </Link>
                </motion.div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
                    <FooterSection title={t("menu.title")}>
                        <FooterLink href="/">{t("menu.home")}</FooterLink>
                        <FooterLink href="/servicos">{t("menu.services")}</FooterLink>
                        <FooterLink href="/sobre-nos">{t("menu.about")}</FooterLink>
                        <FooterLink href="/blog">{t("menu.blog")}</FooterLink>
                    </FooterSection>

                    <FooterSection title={t("specialization.title")}>
                        <FooterLink href="/servico/consultoria-em-contratacao-publica">
                            {t("specialization.publicConsulting")}
                        </FooterLink>
                        <FooterLink href="/servico/consultoria-em-contratacao-publica">
                            {t("specialization.specializedConsulting")}
                        </FooterLink>
                        <FooterLink href="/servico/elaboracao-de-normas">
                            {t("specialization.legalDrafting")}
                        </FooterLink>
                        <FooterLink href="/servico/#formacoes">
                            {t("specialization.training")}
                        </FooterLink>
                    </FooterSection>

                    <FooterSection title={t("contact.title")}>
                        <FooterLink href="tel:+244933692481">+244 933 692 481</FooterLink>
                        <FooterLink href="mailto:geral@consullab.co.ao">
                            geral@consullab.co.ao
                        </FooterLink>
                        <div className="flex space-x-4 mt-2">
                            <SocialLink href="https://web.facebook.com" icon={<FaFacebookF />} />
                            <SocialLink href="https://linkedin.com" icon={<FaLinkedinIn />} />
                        </div>
                    </FooterSection>

                    <FooterSection title={t("legal.title")}>
                        <FooterLink href="/politicas-de-privacidade" underline>
                            {t("legal.privacyPolicy")}
                        </FooterLink>
                        <FooterLink href="/termos-e-condicoes" underline>
                            {t("legal.termsConditions")}
                        </FooterLink>
                    </FooterSection>
                </div>
            </motion.section>
            <section className="containerConssulab">
                <motion.div
                    className="border-t border-white py-6 flex justify-between items-center flex-wrap gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <p className="text-[#c2daf4] text-sm font-normal">
                        © {new Date().getFullYear()} Consullab. {t("allRightsReserved")}
                    </p>
                    <p className="text-[#c2daf4] text-sm font-normal">
                        {t("developedBy")}
                    </p>
                </motion.div>
            </section>
        </footer>
    )
}

function FooterSection({ title, children }: { title: string; children: React.ReactNode }) {
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    }
    return (
        <motion.div className="flex-col gap-6 flex" variants={itemVariants}>
            <h2 className="text-white text-2xl font-bold leading-tight font-montserrat">
                {title}
            </h2>
            <div className="flex-col gap-4 flex">{children}</div>
        </motion.div>
    )
}

function FooterLink({ href, children, underline = false }: { href: string; children: React.ReactNode; underline?: boolean }) {
    return (
        <MotionLink
            href={href}
            className={`font-inter text-white text-base font-normal leading-normal hover:text-yellow-300 transition-colors duration-300 ${underline ? "underline" : ""
                }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </MotionLink>
    )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <MotionLink
            href={href}
            className="bg-white text-[#3a658f] p-2 rounded-full hover:bg-yellow-300 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {icon}
        </MotionLink>
    )
}