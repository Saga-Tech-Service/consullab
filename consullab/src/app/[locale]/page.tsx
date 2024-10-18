"use client";
import Image from "next/image";
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
import { SectionAboutUs } from "@/components/TopicSection";
import {
  ConsultingNumber,
  ConsultingNumberContent,
  ConsultingNumberContentDescription,
  ConsultingNumberContentTitle,
  ConsultingNumberTitle,
} from "@/components/consultingNumber";
import { Separator } from "@/components/Separator";
import { Link } from "@/i18n/routing";
import ServiceList from "@/components/ServiceList";
import { Montserrat } from "next/font/google";
import { useContentful } from "@/hooks/useContentful";
import { IPost } from "@/types/typesContentFullType";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home({ params }: { params: { locale: string } }) {
  const { leftMargin, ref } = useMarginObserver();
  const t = useTypedTranslations("HomePage");
  const services = [
    {
      id: "1",
      title: t("servicesSection.services1.title"),
      number: t("servicesSection.services1.number"),
      href: `/servico/#${t("servicesSection.services1.title")}`,
    },
    {
      id: "2",
      title: t("servicesSection.services2.title"),
      number: t("servicesSection.services2.number"),
      href: `/servico/#${t("servicesSection.services1.title")}`,
    },
    {
      id: "3",
      title: t("servicesSection.services3.title"),
      number: t("servicesSection.services3.number"),
      href: `/servico/#${t("servicesSection.services1.title")}`,
    },
    {
      id: "4",
      title: t("servicesSection.services4.title"),
      number: t("servicesSection.services4.number"),
      href: `/servico/#${t("servicesSection.services1.title")}`,
    },
    {
      id: "5",
      title: t("servicesSection.services5.title"),
      number: t("servicesSection.services5.number"),
      href: `/servico/#${t("servicesSection.services1.title")}`,
    },
    {
      id: "6",
      title: t("servicesSection.services6.title"),
      number: t("servicesSection.services6.number"),
      href: `/servico/#${t("servicesSection.services1.title")}`,
    },
    {
      id: "7",
      title: t("servicesSection.services7.title"),
      number: t("servicesSection.services7.number"),
      href: `/servico/#${t("servicesSection.services1.title")}`,
    },
  ];

  const { data, error, isLoading } = useContentful<IPost>(
    "post",
    params.locale
  );
  console.log(JSON.stringify(data, null, 2));

  if (isLoading) return <p className="top-margin">Carregando...</p>;
  if (error)
    return (
      <p className="top-margin">
        Ocorreu um erro ao buscar os dados.{JSON.stringify(error)}
      </p>
    );

  return (
    <main className="">
      {/* Consullab info  */}
      <section className="containerConssulab top-margin">
        <h1
          className={cn(
            "w-full text-xl leading-loose  sm:text-4xl md:text-[47px]   lg:w-[800px]  sm:leading-[75.2px] md:leading-[75.2px] font-montserrat"
          )}
        >
          {t.rich("heroSection.title", {
            b: (chunks) => (
              <b className="text-yellow-500 font-normal">{chunks}</b>
            ),
          })}
        </h1>
        <div ref={ref} className="flex sm:justify-end items-center">
          <p className="flex self-end text-sm sm:text-base text-[#091622] mt-8 md:mt-[54px] font-inter whitespace-normal sm:max-w-sm">
            {/* Pretendemos estabelecer parcerias fortes e sustentáveis, que
            asseguram o crescimento das instituições. */}
            {t("heroSection.description")}
          </p>
        </div>
      </section>

      {/* Hero section  */}
      <section
        className="relative bg-cover lg:bg-center bg-origin-padding bg-right-top h-screen w-full mt-[72px] max-h-[454px] lg:max-h-[610px]"
        style={{ backgroundImage: `url(${Section.src})` }}
      >
        <div className="containerConssulab flex h-full justify-start items-end">
          <div className="w-[190px] h-[178px] lg:w-[244px] lg:h-[194px] px-2 pt-2 pb-1 lg:px-6 lg:pt-6 lg:pb-5 bg-white/20 shadow-inner border border-[#e0dfe6]/40 backdrop-blur-[100px] justify-center items-center inline-flex mb-[47px] lg:mb-[30px]">
            <article className="">
              <Image alt="Logo Consullab" src={Logo} width={72} height={34} />
              <p className=" text-white text-sm lg:text-lg font-bold mt-4 font-montserrat">
                {/* Nossos advogados certificados */}
                {t("bannerSection.title")}
              </p>
              <p className=" text-white text-xs lg:text-sm font-normal mt-2 font-inter">
                {/* Uma equipa certificada pelas instituições de prestígio */}
                {t("bannerSection.description")}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Scrool imagees */}
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

      {/* Team Consullab  */}
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
              "sm:w-[365px] md:w-[592px] text-white text-base sm:text-lg font-bold leading-[25.20px] font-montserrat"
            )}
          >
            {/* CONSULLAB */}
            {t("aboutSection.title")}
          </h3>
          <h2
            className={cn(
              "sm:w-[365px] md:w-[592px] text-white text-[28px] sm:text-[56px] font-bold leading-[39.20px] sm:leading-[21px] font-montserrat"
            )}
          >
            {/* Sobre nós */}
            {t("aboutSection.subtitle")}
          </h2>

          <p className="text-sm sm:text-base sm:w-[365px] md:w-[592px] text-[#c2daf4] font-normal leading-[21px] sm:leading-normal font-inter">
            {t("aboutSection.description1")}
          </p>
          <p className="text-sm sm:text-base sm:w-[365px] md:w-[592px] text-[#c2daf4] font-normal leading-normal font-inter">
            {t("aboutSection.description2")}
          </p>
        </div>
      </section>

      {/* About section  */}
      <section className="w-full h-auto bg-[#091622] py-8">
        <div className="containerConssulab flex flex-wrap gap-4 md:justify-between w-full gap-y-8 md:space-y-0">
          <SectionAboutUs
            Icon={FiEye}
            title={t("valuesSection.values1.title")}
            content={t("valuesSection.values1.description")}
          />
          <SectionAboutUs
            className="flex-col justify-center items-start gap-4 inline-flex"
            Icon={FiUsers}
            title={t("valuesSection.values2.title")}
            content={t("valuesSection.values2.description")}
          />
          <SectionAboutUs
            className="flex-col justify-center items-start gap-4 inline-flex self-center"
            Icon={FiBarChart}
            title={t("valuesSection.values3.title")}
            content={t("valuesSection.values3.description")}
          />
        </div>
      </section>

      <section className="w-full flex-col justify-start items-end inline-flex my-72 gap-8 lg:gap-0">
        <div className="containerConssulab flex flex-col md:flex-row items-start justify-between gap-8">
          <h3 className="flex-1 truncate text-[#091622] text-base font-semibold  leading-normal font-montserrat">
            {t("statsSection.title")}
          </h3>
          <div className="flex-1 w-full">
            <p className=" text-[#173049] text-sm md:text-base font-normal font-inter">
              {t("statsSection.description")}
            </p>
            <ConsultingNumber className="flex flex-col max-h-[297px] w-full mt-8">
              <Separator className="w-full" />
              <ConsultingNumberTitle
                className={cn(
                  "mt-6 mb-8 md:mt-0 md:mb-0 text-[#091622] font-montserrat text-5xl md:text-[100px] lg:text-[120px]/[146.28px] font-bold",
                  mont.className
                )}
                title={t("statsSection.stats3.number")}
              />
              <ConsultingNumberContent className="flex flex-col gap-1">
                <ConsultingNumberContentTitle
                  className="text-[#091622] text-xl/7  lg:text-5xl/[67.20px] font-bold"
                  title={t("statsSection.stats3.title")}
                />

                <ConsultingNumberContentDescription
                  className="md:w-[279px] text-[#173049] text-sm md:text-base/normal font-medium "
                  content={t("statsSection.stats3.description")}
                />
              </ConsultingNumberContent>
            </ConsultingNumber>
          </div>
        </div>
        <div className="containerConssulab">
          <ConsultingNumber className="flex flex-col max-h-[297px] md:max-w-[40.6%]">
            <Separator className="w-full" />
            <ConsultingNumberTitle
              className={cn(
                "mt-6 mb-8 md:mt-0 md:mb-0 text-[#091622] font-montserrat text-5xl md:text-[100px] lg:text-[120px]/[146.28px] font-bold",
                mont.className
              )}
              title={t("statsSection.stats1.number")}
            />
            <ConsultingNumberContent className="flex flex-col gap-1">
              <ConsultingNumberContentTitle
                className="text-[#091622] text-xl/7  lg:text-5xl/[67.20px] font-bold"
                title={t("statsSection.stats1.title")}
              />

              <ConsultingNumberContentDescription
                className="md:w-[279px] text-[#173049] text-sm md:text-base/normal font-medium "
                content={t("statsSection.stats3.description")}
              />
            </ConsultingNumberContent>
          </ConsultingNumber>
        </div>
        <div className="containerConssulab flex flex-col md:flex-row gap-8 md:justify-end">
          <ConsultingNumber className="flex flex-col max-h-[297px]">
            <Separator className="w-full " />
            <ConsultingNumberTitle
              className={cn(
                "mt-6 mb-8 md:mt-0 md:mb-0 text-[#091622] font-montserrat text-5xl md:text-[100px] lg:text-[120px]/[146.28px] font-bold",
                mont.className
              )}
              title={t("statsSection.stats2.number")}
            />
            <ConsultingNumberContent className="flex flex-col gap-1">
              <ConsultingNumberContentTitle
                className="text-[#091622] text-xl/7  lg:text-5xl/[67.20px] font-bold"
                title={t("statsSection.stats2.title")}
              />

              <ConsultingNumberContentDescription
                className="md:w-[279px] text-[#173049] text-sm md:text-base/normal font-medium "
                content={t("statsSection.stats3.description")}
              />
            </ConsultingNumberContent>
          </ConsultingNumber>
          <Link href={"/sobre-nos"} passHref className="">
            <Card className="hover:shadow-gray-300 shadow-none rounded-none relative w-full lg:w-[488px] bg-white h-[209px] lg:h-[297px] flex-col justify-start items-start inline-flex self-end">
              <CardContent className="rounded-none">
                <CardHeader className="pl-0  md:pb-10 pb-8 font-montserrat text-[#173049] text-lg font-bold leading-[25.20px] m-0">
                  {t("statsSection.card.title")}
                </CardHeader>
                <CardDescription className="font-inter text-[#091622]  font-medium leading-[27px] w-full md:w-[270px] text-xs/[21px] sm:text-lg/[27px]">
                  {t("statsSection.card.description")}
                </CardDescription>
                <Button
                  variant={"ghost"}
                  className="group rounded-none absolute bottom-4 right-4 w-10 h-10 p-2 bg-[#c2daf4] group-hover:bg-[#E1E0E7] justify-start items-center gap-2.5 inline-flex"
                >
                  <FiArrowRight className="w-6 h-6 text-black group-hover:text-[#4F7FAF]" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* nosso serviços */}
      <section className=" w-full bg-[#091622] py-[72px]">
        <div className="containerConssulab flex flex-col justify-start">
          <h4 className="text-white text-base lg:text-lg font-bold leading-[25.20px] mb-6 font-montserrat ">
            {t("servicesSection.title")}
          </h4>
          <h5 className="text-white text-lg lg:text-5xl font-bold lg:leading-[67.20px] font-montserrat">
            {t("servicesSection.subtitle")}
          </h5>
        </div>
        <div className="containerConssulab mt-[84px]">
          <ServiceList
            className="mb-[120px]"
            variant="dark"
            title={t("servicesSection.titleService")}
            services={services}
          />
        </div>
      </section>

      {/* section CEO  */}
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
            <p className="text-[#173049] text-base/[24px] md:text-2xl lg:text-[28px] font-bold leading-tight md:leading-[39.20px] lg:max-w-[488px] font-montserrat ">
              {t("quoteSection.quote")}
            </p>
            <p className="text-[#173049] text-base font-normal leading-normal lg:max-w-[488px]  mb-10 font-inter">
              {t("quoteSection.description")}
            </p>
          </div>
        </div>
        <div className="flex flex-1 w-full min-h-[433px] md:min-h-[670px] relative">
          <Image
            src={CEO}
            alt="CEO da Consullab"
            width={600}
            height={670}
            className="w-full object-bottom object-cover"
          />
          <div className="absolute bottom-3 left-3 md:bottom-10 md:left-10 z-0 px-4 py-4 lg:px-6 lg:py-8  bg-white/20 shadow-inner border border-[#e0dfe6]/40 backdrop-blur-[100px] justify-center items-center inline-flex w-[173px] lg:w-[344px]">
            <div className="grow shrink basis-0 self-stretch relative">
              <div className="space-y-2">
                <p className="font-montserrat text-[#091622] text-sn lg:text-sm font-semibold leading-[21px]">
                  CONSULLAB
                </p>
                <p className="font-montserrat text-white text-lg lg:text-[32px] font-bold leading-[44.80px] mb-2">
                  {t("ceoSection.name")}
                </p>
                <p className="font-inter text-[#e0dfe6] text-xs lg:text-base font-normal  leading-normal">
                  {t("ceoSection.title")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team   */}
      <section className=" bg-[#091622] py-[72px] b">
        <div className="containerConssulab">
          <div>
            <h4 className="text-white text-sm lg:text-base md:text-lg font-bold leading-[21px] md:leading-[25.20px] font-montserrat ">
              {t("teamSection.title")}
            </h4>
            <p className="text-white  text-lg sm:text-3xl md:text-4xl  lg:text-5xl font-bold lg:leading-[67.2px] mt-6 font-montserrat">
              {t("teamSection.subtitle")}
            </p>
          </div>
          <div className="flex md:items-end md:justify-end">
            <div className="mt-[72px] flex flex-col gap-6 max-w-full md:max-w-[50%]">
              <p className="text-[#e0dfe6] text-sm md:text-base font-normal leading-normal font-inter">
                {t("teamSection.description1")}
              </p>
              <p className="text-[#e0dfe6] text-sm md:text-base font-normal leading-normal font-inter">
                {t("teamSection.description2")}
              </p>
              <Link href={"/equipa"}>
                <Button
                  variant={"ghost"}
                  className="flex items-center justify-center bg-[#4f7faf] sm:ring-1 sm:ring-[#4f7faf] sm:bg-transparent sm:text-[#4f7faf] text-slate-950   w-full sm:w-[258px] h-12 relative gap-x-6 sm:p-0 sm:m-0 overflow-hidden rounded-none"
                >
                  <span className="sm:flex items-center justify-center size-12 sm:mr-4 left-0 top-0  sm:absolute sm:bg-[#4f7faf] h-full">
                    <FiPlus className="w-6 h-6 sm:text-slate-950 translate-y-1 md:translate-y-0" />
                  </span>
                  <span className="sm:translate-x-4 ">
                    {" "}
                    {t("teamSection.cta")}
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Blog sction */}
      <section className="containerConssulab  md:mt-[83px]">
        <Separator className="w-full" />
        <div className="w-full h-full py-[72px] gap-y-6">
          <h5 className="text-[#091622] text-sm sm:text-lg font-bold leading-[21px] sm:leading-[25.20px] font-montserrat">
            {t("blogSection.title")}
          </h5>
          <p className="text-[#091622] text-xl sm:text-5xl font-bold leading-7 sm:leading-[67.20px] mt-6 font-montserrat">
            {t("blogSection.subtitle")}
          </p>
        </div>
      </section>

      {/* Blogs*/}
      <section className="containerConssulab flex flex-col justify-normal items-start md:justify-end md:items-end  gap-y-8">
        <Separator className="w-full mb-8" />
        <SectionNews
          hrf={`/blog/#${t("blogSection.news1.date")}`}
          date={t("blogSection.news1.date")}
          content={t("blogSection.news1.content")}
        />
        <SectionNews
          hrf={`/blog/#${t("blogSection.news2.date")}`}
          date={t("blogSection.news2.date")}
          content={t("blogSection.news2.content")}
        />
      </section>

      <section className="flex flex-col lg:flex-row gap-6 py-[72px] containerConssulab">
        <div className="flex md:flex-1">
          <Link href={"/blog"} className="w-full">
            <Card className="rounded-none w-full max-w-[488px] h-[297px] bg-white shadow relative">
              <CardHeader>
                <CardTitle>
                  <p className="w-auto max-w-[279px] text-[#091622] text-lg font-bold leading-[25.20px] font-montserrat">
                    {t("blogSection.card.title")}
                  </p>
                </CardTitle>
                <CardDescription className="text-[#091622] text-lg font-medium leading-[27px] font-montserrat">
                  {t("blogSection.card.description")}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <Button
                  variant={"ghost"}
                  className="group w-10 h-10  absolute bottom-8 right-8 p-2 bg-[#c2daf4] hover:bg-[#E1E0E7] rounded-none justify-start items-center gap-2.5 inline-flex"
                >
                  <FiArrowRight className="w-6 h-6 text-gray-950  group-hover:text-[#4F7FAF]" />
                </Button>
              </CardFooter>
            </Card>
          </Link>
        </div>
        <div className="flex md:flex-1">
          <Image src={Blog} alt="Blog da consullab" className="w-full" />
        </div>
      </section>
    </main>
  );
}
