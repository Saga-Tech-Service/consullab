"use client";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import Section from "@public/assets/section.jpg";
import Slider1 from "@public/assets/slider1.svg";
import Slider3 from "@public/assets/slider3.svg";
import Slider4 from "@public/assets/slider4.svg";
import Slider5 from "@public/assets/slider5.svg";
import Slider6 from "@public/assets/slider6.svg";
import Slider7 from "@public/assets/slider7.svg";
import Slider8 from "@public/assets/slider8.svg";
import {
  FiUsers,
  FiBarChart,
  FiEye,
  FiBarChart2,
  FiArrowRight,
  FiPlus,
} from "react-icons/fi";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionNews } from "@/components/SectionNews";
import { SiComma } from "react-icons/si";
import CEO from "@public/assets/CEO.jpg";
import Blog from "@public/assets/Blog.jpg";
import { SectionService } from "@/components/sectionService";
import { useMarginObserver } from "@/hooks/MarginObserver";
import Logo from "@public/assets/Logo Consullab.svg";
import TeamConsullab from "@public/assets/teamConsullab.jpg";
import { useTypedTranslations } from "@/hooks/useTypedTranslations";
import { useTranslations } from "next-intl";
import { Link, routing } from "@/i18n/routing";
import { SectionAboutUs } from "@/components/TopicSection";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export default function Home() {
  const { leftMargin, ref } = useMarginObserver();
  const t = useTypedTranslations("HomePage");

  return (
    <main className="">
      <section className="containerConssulab mt-16">
        <h1
          className={cn(
            "w-full text-xl leading-loose  sm:text-4xl md:text-[47px]   lg:w-[800px]  sm:leading-[75.2px] md:leading-[75.2px]"
          )}
        >
          {/* Pessoas e projectos importam no <br className="hidden lg:grid" />{" "}
          desenvolvimento das
          <b className="text-yellow-500 font-normal"> instituições</b> */}
          {t.rich("heroSection.title", {
            b: (chunks) => (
              <b className="text-yellow-500 font-normal">{chunks}</b>
            ),
          })}
        </h1>
        <div ref={ref} className="flex sm:justify-end items-center">
          <p className="flex self-end text-sm sm:text-base text-[#091622] mt-14 whitespace-normal sm:max-w-sm">
            {/* Pretendemos estabelecer parcerias fortes e sustentáveis, que
            asseguram o crescimento das instituições. */}
            {t("heroSection.description")}
          </p>
        </div>
      </section>

      <section
        className="relative bg-cover lg:bg-center bg-origin-padding bg-right-top h-screen w-full mt-[72px] max-h-[454px] lg:max-h-[610px]"
        style={{ backgroundImage: `url(${Section.src})` }}
      >
        <div className="containerConssulab flex h-full justify-start items-end">
          <div className="w-[190px] h-[178px] lg:w-[244px] lg:h-[194px] px-2 pt-2 pb-1 lg:px-6 lg:pt-6 lg:pb-5 bg-white/20 shadow-inner border border-[#e0dfe6]/40 backdrop-blur-[100px] justify-center items-center inline-flex">
            <article className="">
              <Image alt="Logo Consullab" src={Logo} width={72} height={34} />
              <p className=" text-white text-sm lg:text-lg font-bold mt-4">
                {/* Nossos advogados certificados */}
                {t("bannerSection.title")}
              </p>
              <p className=" text-white text-xs lg:text-sm font-normal mt-2">
                {/* Uma equipa certificada pelas instituições de prestígio */}
                {t("bannerSection.description")}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#091622] flex relative overflow-x-auto scrollbar-hide">
        <div className="max-w-max-width-consullab px-5 xl:px-12 mx-auto">
          <div className="min-w-max flex items-center justify-between space-x-24 h-9 md:h-[105px] py-2">
            {/* Imagens no slider */}
            <Image src={Slider8} alt="" className="h-full object-contain" />
            <Image src={Slider3} alt="" className="h-full object-contain" />
            <Image src={Slider4} alt="" className="h-full object-contain" />
            <Image src={Slider5} alt="" className="h-full object-contain" />
            <Image src={Slider6} alt="" className="h-full object-contain" />
            <Image src={Slider7} alt="" className="h-full object-contain" />
            <Image src={Slider1} alt="" className="h-full object-contain" />
          </div>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${TeamConsullab.src})` }}
      >
        {/* Gradiente */}

        <div className="absolute inset-0 bg-gradient-custom z-10" />

        {/* Conteúdo */}
        <div className="relative z-20 flex flex-col containerConssulab gap-4 justify-end items-stretch sm:items-end h-screen w-full max-h-[849px] pb-[88px] space-y-4">
          <h3
            className={cn(
              montserrat.className,
              "sm:w-[365px] md:w-[592px] text-white text-base sm:text-lg font-bold leading-[25.20px]"
            )}
          >
            {/* CONSULLAB */}
            {t("aboutSection.title")}
          </h3>
          <h2
            className={cn(
              montserrat.className,
              "sm:w-[365px] md:w-[592px] text-white text-[28px] sm:text-[56px] font-bold leading-[39.20px] sm:leading-[21px]"
            )}
          >
            {/* Sobre nós */}
            {t("aboutSection.subtitle")}
          </h2>

          <p className="text-sm sm:text-base sm:w-[365px] md:w-[592px] text-[#c2daf4] font-normal leading-[21px] sm:leading-normal">
            {/* A Consullab é uma empresa de direito angolano que actua no domínio da
            consultoria jurídica, financeira, fiscal, prestando todo auxilio, numa
            modalidade a que denominamos de consultoria institucional para evidenciar
            a perspectiva integrada e multifacética da sua actuação. */}
            {t("aboutSection.description1")}
          </p>
          <p className="text-sm sm:text-base sm:w-[365px] md:w-[592px] text-[#c2daf4] font-normal leading-normal">
            {/* Analisamos minuciosamente cada situação para oferecer as melhores soluções
            jurídicas, com foco em resultados práticos e eficientes. */}
            {t("aboutSection.description2")}
          </p>
        </div>
      </section>

      <section className="w-full h-auto bg-[#091622] ">
        <div className="containerConssulab flex flex-wrap gap-4 items-center justify-center md:justify-between w-full">
          <SectionAboutUs
            Icon={FiEye}
            title={t("valuesSection.values1.title")}
            content={t("valuesSection.values1.description")}
          />
          <SectionAboutUs
            className="h-[164px] flex-col justify-center items-start gap-4 inline-flex"
            Icon={FiUsers}
            title={t("valuesSection.values2.title")}
            content={t("valuesSection.values2.description")}
          />
          <SectionAboutUs
            className="h-[212px] flex-col justify-center items-start gap-4 inline-flex self-center"
            Icon={FiBarChart}
            title={t("valuesSection.values3.title")}
            content={t("valuesSection.values3.description")}
          />
        </div>
      </section>

      <section className="w-full flex-col justify-start items-end gap-10 inline-flex my-[72px]">
        <div className="containerConssulab hidden sm:flex justify-start ">
          <div className="flex-1">
            <h3 className=" text-[#091622] text-base font-semibold  leading-normal">
              {t("statsSection.title")}
            </h3>
            <div className="flex flex-col gap-9 mt-[313px]">
              <span className="text-[#091622] text-[100px] lg:text-[120px] font-bold">
                {t("statsSection.stats1.number")}
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-[#091622] text-3xl lg:text-5xl font-bold leading-[67.20px]">
                  {t("statsSection.stats1.title")}
                </span>
                <span className="w-[279px] text-[#173049] text-sm lg:text-base font-medium  leading-normal">
                  {t("statsSection.stats1.description")}
                </span>
              </div>
            </div>

            <span className="flex flex-col gap-9 text-start lg:text-end mr-[17.5px]">
              <p className="text-[#091622] text-[100px] lg:text-[120px] font-bold">
                {t("statsSection.stats2.number")}
              </p>
              <span className="flex flex-col gap-1">
                <p className="text-[#091622] text-3xl lg:text-5xl font-bold leading-[67.20px]">
                  {t("statsSection.stats2.title")}
                </p>
                <span className="lg:flex items-end justify-end">
                  <p className="w-[279px] text-[#173049]text-sm lg:text-base font-medium  leading-normal">
                    {t("statsSection.stats2.description")}
                  </p>
                </span>
              </span>
            </span>
          </div>

          <div className="flex flex-col flex-1 ">
            <p className=" text-[#173049] text-sm lg:text-base font-normal leading-normal">
              {t("statsSection.description")}
            </p>
            <div className="flex flex-col gap-9">
              <span className="text-[#091622] text-[100px] lg:text-[120px] font-bold">
                {t("statsSection.stats3.number")}
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-[#091622] text-3xl lg:text-5xl font-bold leading-[67.20px]">
                  {t("statsSection.stats3.title")}
                </span>
                <span className="w-[279px] text-[#173049] text-sm lg:text-base font-medium  leading-normal">
                  {t("statsSection.stats3.description")}
                </span>
              </div>
            </div>
            <div className="flex w-full h-full items-end justify-normal ml-[17.5px]">
              <Card className="rounded-none relative w-full lg:w-[488px] bg-white shadow h-[209px] lg:h-[297px] flex-col justify-start items-start inline-flex self-end">
                <CardContent className="rounded-none">
                  <CardHeader className=" text-[#173049] text-lg font-bold leading-[25.20px]">
                    {t("statsSection.card.title")}
                  </CardHeader>
                  <CardDescription className=" text-[#091622] text-lg font-medium leading-[27px]">
                    {t("statsSection.card.description")}
                  </CardDescription>
                  <Button className="group rounded-none absolute bottom-4 right-4 w-10 h-10 p-2 bg-[#c2daf4] justify-start items-center gap-2.5 inline-flex">
                    <FiArrowRight className="w-6 h-6 text-black group-[hover]:text-white" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="containerConssulab  w-full flex-col  gap-6 sm:hidden finline-flex">
          <div className="self-stretch h-[245px] flex-col  gap-4 flex">
            <div className="self-stretch text-[#091622] text-base font-semibold leading-normal">
              A consultoria
            </div>
            <div className="self-stretch text-[#173049] text-sm font-normal leading-[21px]">
              Entendemos que cada cliente é único, e por isso nossa abordagem é
              sempre personalizada. Analisamos minuciosamente cada situação para
              oferecer as melhores soluções jurídicas, com foco em resultados
              práticos e eficientes. Nosso compromisso é com o sucesso e a
              satisfação de nossos clientes, garantindo que suas questões
              jurídicas sejam tratadas com a devida atenção e profissionalismo.
            </div>
            <div className="w-[336px] h-[0px] border border-[#e0dfe6]" />
          </div>
          <div className="self-stretch h-[156px] flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch text-[#091622] text-5xl font-bold leading-[67.20px]">
              +30
            </div>
            <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-[#173049] text-xl font-bold leading-7">
                Diplomas
              </div>
              <div className="self-stretch text-[#173049] text-sm font-normal leading-[21px]">
                elaborados, entre leis, decretos e regulamentos.
              </div>
            </div>
            <div className="w-[336px] h-[0px] border border-[#e0dfe6]" />
          </div>
          <div className="self-stretch h-[177px] flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch text-[#091622] text-5xl font-bold leading-[67.20px]">
              +60
            </div>
            <div className="self-stretch h-[78px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-[#173049] text-xl font-bold leading-7">
                Pareceres
              </div>
              <div className="self-stretch text-[#173049] text-sm font-normal leading-[21px]">
                emitidos sobre uma quantidade significativa de casos.
              </div>
            </div>
            <div className="w-[336px] h-[0px] border border-[#e0dfe6]" />
          </div>
          <div className="self-stretch h-[156px] flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch text-[#091622] text-5xl font-bold leading-[67.20px]">
              +100
            </div>
            <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-[#173049] text-xl font-bold leading-7">
                Formações
              </div>
              <div className="self-stretch text-[#173049] text-sm font-normal leading-[21px]">
                capacitamos muitos quadros em diversas matérias
              </div>
            </div>
            <div className="w-[336px] h-[0px] border border-[#e0dfe6]" />
          </div>
          <Card className="rounded-none relative w-full lg:w-[488px] bg-white shadow h-[209px] lg:h-[297px] flex-col justify-start items-start inline-flex self-end mt-4">
            <CardContent className="rounded-none">
              <CardHeader className=" text-[#173049] text-lg font-bold leading-[25.20px]">
                SOBRE NÓS
              </CardHeader>
              <CardDescription className=" text-[#091622] text-lg font-medium leading-[27px]">
                História e competências da nossa consultoria
              </CardDescription>
              <Button className="group rounded-none absolute bottom-4 right-4 w-10 h-10 p-2 bg-[#c2daf4] justify-start items-center gap-2.5 inline-flex">
                <FiArrowRight className="w-6 h-6 text-black group-[hover]:text-white" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* nosso serviços */}
      <section className=" w-full bg-[#091622] py-[72px]">
        <div className="containerConssulab flex flex-col justify-start">
          <h4 className="text-white text-base lg:text-lg font-bold leading-[25.20px] mb-6">
            {t("servicesSection.title")}
          </h4>
          <p className="text-white text-lg lg:text-5xl font-bold lg:leading-[67.20px]">
            {t("servicesSection.subtitle")}
          </p>
        </div>
        <div className="containerConssulab grid grid-cols-1 lg:grid-cols-3 gap-y-10 mt-[84px] gap-x-4">
          <div className="flex-col justify-start items-start gap-6 inline-flex mb-10">
            <div className="w-full h-[0px] border border-white/90" />
            <h5 className="self-stretch uppercase text-white text-sm lg:text-base font-semibold  leading-normal">
              {t("servicesSection.titleService")}
            </h5>
          </div>
          <div className="flex-col justify-start items-start gap-8 inline-flex">
            <SectionService
              title={t("servicesSection.services1.title")}
              number={t("servicesSection.services1.number")}
            />
            <SectionService
              title={t("servicesSection.services2.title")}
              number={t("servicesSection.services2.number")}
            />
            <SectionService
              title={t("servicesSection.services3.title")}
              number={t("servicesSection.services3.number")}
            />
            <SectionService
              title={t("servicesSection.services4.title")}
              number={t("servicesSection.services4.number")}
            />
          </div>
          <div className="flex-col justify-start items-start gap-8 inline-flex">
            <SectionService
              title={t("servicesSection.services5.title")}
              number={t("servicesSection.services5.number")}
            />
            <SectionService
              title={t("servicesSection.services6.title")}
              number={t("servicesSection.services6.number")}
            />
            <SectionService
              title={t("servicesSection.services7.title")}
              number={t("servicesSection.services7.number")}
            />
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col lg:flex-row">
        <div
          className={
            "flex flex-col mt-[72px] lg:mt-0 lg:justify-end flex-1 w-full h-auto lg:min-h-[670px]"
          }
        >
          <div
            style={{ marginLeft: `${leftMargin}px` }}
            className="space-y-8 my-8 "
          >
            <div className="flex justify-start text-[#4F7FAF]">
              <SiComma className="rotate-[180deg] -translate-x-4 w-16 h-16 md:w-24 md:h-24" />
              <SiComma className="rotate-[180deg] -translate-x-12 w-16 h-16 md:w-24 md:h-24" />
            </div>
            <p className="text-[#173049] text-2xl md:text-[28px] font-bold leading-tight md:leading-[39.20px] lg:max-w-[488px]">
              {t("quoteSection.quote")}
            </p>
            <p className="text-[#173049] text-base font-normal leading-normal lg:max-w-[488px]  mb-10">
              {t("quoteSection.description")}
            </p>
          </div>
        </div>
        <div className="flex flex-1 w-full min-h-[670px] relative">
          <Image
            src={CEO}
            alt="CEO da Consullab"
            width={600}
            height={670}
            className="w-full object-center lg:object-cover"
          />
          <div className="absolute bottom-10 left-10 z-0 px-4 py-4 lg:px-6 lg:py-8  bg-white/20 shadow-inner border border-[#e0dfe6]/40 backdrop-blur-[100px] justify-center items-center inline-flex w-[173px] lg:w-[344px]">
            <div className="grow shrink basis-0 self-stretch relative">
              <div className="space-y-2">
                <p className=" text-[#091622] text-sn lg:text-sm font-semibold leading-[21px]">
                  CONSULLAB
                </p>
                <p className=" text-white text-lg lg:text-[32px] font-bold leading-[44.80px] mb-2">
                  {t("ceoSection.name")}
                </p>
                <p className=" text-[#e0dfe6] text-xs lg:text-base font-normal  leading-normal">
                  {t("ceoSection.title")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-[#091622] py-[72px]">
        <div className="containerConssulab">
          <div>
            <h4 className="text-white text-sm lg:text-base md:text-lg font-bold leading-[21px] md:leading-[25.20px]">
              {t("teamSection.title")}
            </h4>
            <p className="text-white  text-lg sm:text-3xl md:text-4xl  lg:text-5xl font-bold leading-[25.20px] md:leading-[67.20px] mt-6">
              {t("teamSection.subtitle")}
            </p>
          </div>
          <div className="flex md:items-end md:justify-end">
            <div className="mt-[72px] flex flex-col gap-6 max-w-full md:max-w-[50%]">
              <p className="text-[#e0dfe6] text-sm md:text-base font-normal leading-normal">
                {t("teamSection.description1")}
              </p>
              <p className="text-[#e0dfe6] text-sm md:text-base font-normal leading-normal">
                {t("teamSection.description2")}
              </p>
              <Button className="flex items-center justify-center bg-[#4f7faf] sm:ring-1 sm:ring-[#4f7faf] sm:bg-transparent sm:text-[#4f7faf] text-slate-950   w-full sm:w-[258px] h-12 relative gap-x-6 sm:p-0 sm:m-0 overflow-hidden">
                <span className="sm:flex items-center justify-center size-12 sm:mr-4 left-0 top-0  sm:absolute sm:bg-[#4f7faf] h-full">
                  <FiPlus className="w-6 h-6 sm:text-slate-950 " />
                </span>
                <span className="sm:translate-x-4 ">  {t("teamSection.cta")}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="containerConssulab mt-[83px] py-[72px] border-t border-gray-300 gap-y-6">
        <h5 className="text-[#091622] text-sm sm:text-lg font-bold leading-[21px] sm:leading-[25.20px]">
          {t("blogSection.title")}

        </h5>
        <p className="text-[#091622] text-xl sm:text-5xl font-bold leading-7 sm:leading-[67.20px] mt-6">
          {t("blogSection.subtitle")}
        </p>
      </section>

      <section className="containerConssulab flex flex-col justify-normal items-start md:justify-end md:items-end mt-[167px] gap-y-8">
        <SectionNews
          date={t("blogSection.news1.date")}
          content={t("blogSection.news1.content")}
        />
        <SectionNews
          date={t("blogSection.news2.date")}
          content={t("blogSection.news2.content")}
        />
      </section>

      <section className="flex flex-col lg:flex-row gap-6 py-[72px] containerConssulab">
        <div className="flex md:flex-1">
          <Card className="w-full lg:w-[488px] h-[297px] bg-white shadow relative">
            <CardHeader>
              <CardTitle>
                <p className="w-[279px] text-[#091622] text-lg font-bold leading-[25.20px]">
                  {t("blogSection.card.title")}
                </p>
              </CardTitle>
              <CardDescription className="text-[#091622] text-lg font-medium leading-[27px]">
                {t("blogSection.card.description")}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <Button className="w-10 h-10  absolute bottom-8 right-8 p-2 bg-[#c2daf4] justify-start items-center gap-2.5 inline-flex">
                <FiArrowRight className="w-6 h-6 text-gray-950" />
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex md:flex-1">
          <Image src={Blog} alt="Blog da consullab" className="w-full" />
        </div>
      </section>
    </main>
  );
}
