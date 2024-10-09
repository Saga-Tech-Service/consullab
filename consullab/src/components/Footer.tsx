import Image from "next/image";
import Logo from "@public/assets/Logo Consullab.svg";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useTypedTranslations } from "@/hooks/useTypedTranslations";

export function Footer() {
    const t = useTypedTranslations("footer");
    return (
        <footer className="bg-[#3a658f] pt-16 space-y-10 lg:space-y-20">
            <section className="containerConssulab  w-full gap-8 flex flex-col lg:flex-row">
                <Link href={"/"} className="">
                    <Image
                        className="w-[115px] h-[54px] lg:w-[311px] lg:h-36"
                        src={Logo}
                        alt="Logo da Consullab"
                    />
                </Link>
                <div className="w-full grid grid-cols-1 md:flex justify-between flex-wrap gap-16">

                    <div className="flex-col gap-8 flex">
                        <h1 className="text-white text-[28px] font-bold leading-[39.20px] font-montserrat">
                            {t("menu.title")}
                        </h1>
                        <div className="h-36 flex-col gap-4 flex">
                            <Link
                                href={"/"}
                                className="font-inter text-white text-base font-normal leading-normal"
                            >
                                {t("menu.home")}
                            </Link>
                            <Link
                                href={"/servicos"}
                                className="font-inter text-white text-base font-normal leading-normal"
                            >
                                {t("menu.services")}
                            </Link>
                            <Link
                                href={"/sobre-nos"}
                                className="font-inter text-white text-base font-normal leading-normal"
                            >
                                {t("menu.about")}
                            </Link>
                            <Link
                                href={"/blog"}
                                className="font-inter text-white text-base font-normal leading-normal"
                            >
                                {t("menu.blog")}
                            </Link>
                        </div>
                    </div>

                    <div className="flex-col gap-8 flex">
                        <h1 className="text-white text-[28px] font-bold leading-[39.20px] font-montserrat">
                            {t("specialization.title")}
                        </h1>
                        <div className="flex-col gap-4 flex">
                            <Link
                                href={"/servico/consultoria-em-contratacao-publica"}
                                className="font-inter w-[216px] text-white text-base font-normal leading-normal"
                            >
                                {t("specialization.publicConsulting")}
                            </Link>
                            <Link
                                href={"/servico/consultoria-em-contratacao-publica"}
                                className="font-inter text-white text-base font-normal leading-normal"
                            >
                                {t("specialization.specializedConsulting")}
                            </Link>
                            <Link
                                href={"/servico/elaboracao-de-normas"}
                                className="font-inter w-[213px] text-white text-base font-normal leading-normal"
                            >
                                {t("specialization.legalDrafting")}
                            </Link>
                            <Link
                                href={"/servico/#formacoes"}
                                className="font-inter text-white text-base font-normal leading-normal"
                            >
                                {t("specialization.training")}
                            </Link>
                        </div>
                    </div>

                    <div className="flex-col gap-8 flex">
                        <h1 className="text-white text-[28px] font-bold leading-[39.20px] font-montserrat">
                            {t("contact.title")}
                        </h1>
                        <div className="h-36 flex-col gap-4 flex">
                            <Link
                                href={"tel:+244933692481"}
                                className="font-inter text-white text-base font-normal leading-normal"
                            >
                                +244 933 692 481
                            </Link>
                            <Link
                                href={"emailto:geral@consullab.co.ao"}
                                className="font-inter text-white text-base font-normal leading-normal"
                            >
                                geral@consullab.co.ao
                            </Link>
                            <Link
                                href={"https://web.facebook.com"}
                                className="font-inter text-white text-base font-normal leading-normal"
                            >
                                Facebook
                            </Link>
                            <Link
                                href={"https://linkedin.com"}
                                className="font-inter text-white text-base font-normal leading-normal"
                            >
                                LinkedIn
                            </Link>
                        </div>
                    </div>

                    <div className="flex-col gap-8 flex">
                        <h1 className="text-white text-[28px] font-bold leading-[39.20px] font-montserrat">
                            {t("legal.title")}
                        </h1>
                        <div className="flex-col gap-4 flex">
                            <Link
                                href={"/politicas-de-privacidade"}
                                className="font-inter text-white text-base font-normal underline leading-normal"
                            >
                                {t("legal.privacyPolicy")}
                            </Link>
                            <Link
                                href={"/termos-e-condicoes"}
                                className="font-inter text-white text-base font-normal underline leading-normal"
                            >
                                {t("legal.termsConditions")}
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
            <section className="containerConssulab ">
                <div className="gap-8 flex border-t border-white pb-10 items-end justify-end">
                    <p className="text-[#c2daf4] text-sm font-normal leading-[21px] mt-6 ">
                        {t("developedBy")}
                    </p>
                </div>
            </section>
        </footer>
    );
}
