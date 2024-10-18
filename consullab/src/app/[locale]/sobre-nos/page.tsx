import React from "react";
import Image from "next/image";
import AboutUS from "@public/assets/AboutUs.jpg";
import AboutUS2 from "@public/assets/aboutUs2.jpg";
import Partner from "@public/assets/Partner.jpg";
import { CardInfo } from "@/components/TopicSection";
import { Button } from "@/components/ui/button";
import { TopicAboutUS } from "@/components/TopicSection";
import { Separator } from "@radix-ui/react-select";
import { useTypedTranslations } from "@/hooks/useTypedTranslations";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { PartnersSection } from "@/components/TestimonialSlider";

const Servico = () => {
    const t = useTypedTranslations("aboutUS");
    const tNumbers = useTypedTranslations("HomePage");
    const locale = useLocale()

    const testimonials = [
        {
            name: 'Jorge Miguel',
            role: 'CEO',
            quote: 'Working with Consullab has been an incredible experience. Their expertise and dedication have truly transformed our business.',
            image: Partner

        },
        {
            name: 'Ana Silva',
            role: 'CTO',
            quote: 'The team at Consullab consistently delivers innovative solutions that exceed our expectations.',
            image: AboutUS2

        },
        // Add more testimonials as needed
    ]
    return (
        <main className="flex flex-col">
            <section className="containerConssulab top-margin">
                <h1 className="relative lg:grid hidden w-[696px] text-[#091622] text-[56px] font-bold font-montserrat leading-[89.60px]">
                    <Separator className={cn("absolute top-12 w-[108px] h-[0px] border-4 border-[#091622]", {
                        "left-[240px]": locale === "en",
                        "left-[350px]": locale === "pt",
                    }
                    )} />
                    {t.rich("title", {
                        break: (chuncks) => <p>{chuncks}</p>,
                    })}
                </h1>



                <h1 className="w-[336px] h-[78px] relative lg:hidden mt-16">
                    <div className="w-[336px] left-0 top-0 absolute text-[#091622] text-[28px] font-bold  leading-[39.20px]">
                        {t.rich("title", {
                            break: (chuncks) => <p>{chuncks}</p>,
                        })}
                    </div>
                    <div className="w-[72px] h-[0px] left-[176px] top-[23px] absolute border-2 border-[#091622]" />
                </h1>
                <Separator className="border-b border-[#e0dfe6] mt-[77px]" />
                <div className="w-full flex flex-col gap-y-10 sm:gap-y-0 sm:flex-row mt-8">
                    <p className="flex-1 w-full sm:w-[280px] text-[#091622] text-sm sm:text-base font-normal leading-normal font-montserrat">
                        {t("subtitle")}
                    </p>
                    <div className="flex flex-col gap-[72px]">
                        <p className="w-full sm:w-[479px] text-[#091622] text-sm sm:text-xl font-normal leading-[21px] sm:leading-[30px] font-inter">
                            {t("description")}
                        </p>
                    </div>
                </div>
                <figure className="mt-[120px]">
                    <Image
                        className="w-full h-full object-cover"
                        src={AboutUS}
                        alt="Serviços da Cosullab"
                    />
                </figure>
                <div className="w-full flex mt-8 space-x-8">
                    <div className="relative md:flex flex-1 hidden">
                        <h2 className="font-montserrat w-[280px] text-[#091622] text-base font-normal leading-normal">
                            {t("subtitle")}
                        </h2>
                        <CardInfo
                            className="self-end absolute end-0 left-0"
                            number="60"
                            title="Pareceres"
                        >
                            emitidos sobre uma quantidade significativa de casos
                        </CardInfo>
                    </div>

                    <div className="flex flex-col gap-[72px] w-full md:w-auto">
                        <h2 className="flex md:hidden mb-8 w-[280px] text-[#091622] text-base font-normal leading-normal  font-montserrat">
                            A nossa compania
                        </h2>
                        <p className="w-full lg:w-[479px] mb-24 text-[#091622] text-xl font-normal  leading-[30px] font-inter">
                            A Consullab surgiu da visão de estabelecer parcerias fortes e
                            sustentáveis, que asseguram o desenvolvimento e crescimento das
                            instituições, com destaque para as empresas públicas, privadas e
                            demais entidades. A Consullab foi construída com a crença de que o
                            direito pode e deve ser uma ferramenta poderosa para o sucesso, e
                            não um obstáculo a ser superado.
                        </p>
                        <CardInfo
                            className="mb-[72px]"
                            number={tNumbers("statsSection.stats3.number")}
                            title={tNumbers("statsSection.stats3.title")}
                        >
                            {tNumbers("statsSection.stats3.description")}
                        </CardInfo>
                        <CardInfo
                            className="flex md:hidden mb-[72px]"
                            number={tNumbers("statsSection.stats1.number")}
                            title={tNumbers("statsSection.stats1.title")}
                        >
                            {tNumbers("statsSection.stats1.description")}
                        </CardInfo>
                        <CardInfo
                            number={tNumbers("statsSection.stats2.number")}
                            title={tNumbers("statsSection.stats2.title")}
                        >
                            {tNumbers("statsSection.stats2.description")}
                        </CardInfo>
                    </div>
                </div>
            </section>

            <section
                className="relative bg-cover lg:bg-center bg-right h-screen max-h-[400px] lg:max-h-[720px] w-full mt-72"
                style={{ backgroundImage: `url(${AboutUS2.src})` }}
            />

            <h2 className="containerConssulab text-center text-2xl xl:text-[70px] mt-[72px] font-light leading-[38.40px] md:leading-[112px] font-montserrat">
                {t("timeline.timelineTitle")}
            </h2>

            <section className="hidden lg:flex containerConssulab justify-center items-center mt-36  ">
                <div className="max-w-[872px] w-full h-[429px] relative">
                    <div className="w-[429px] h-[0px] left-[435px] top-0 absolute origin-top-left rotate-90 border border-[#cb935d]" />

                    <div className="w-[448px] h-[111px] left-0 top-[24px]  absolute">
                        <div className="w-96 h-[111px] left-0 top-0 absolute">
                            <div className="w-[111px] h-[0px] left-0 top-0 absolute origin-top-left rotate-90 border border-[#cb935d]" />
                            <div className="left-[24px] top-[8px] absolute text-[#cb935d] text-[28px] font-bold leading-[39.20px] font-inter">
                                {t("timeline.2023.year")}
                            </div>
                            <div className="w-[360px] left-[24px] top-[55px] absolute text-[#274a6d] text-base font-normal  leading-normal font-inter">
                                {t("timeline.2023.description")}
                            </div>
                        </div>
                        <div className="w-6 h-6 left-[424px] top-[44px] absolute bg-[#cb935d] rounded-full" />
                    </div>

                    <div className="w-[448px] h-[111px] left-0 top-[294px] absolute">
                        <div className="w-96 h-[111px] left-0 top-0 absolute">
                            <div className="w-[111px] h-[0px] left-0 top-0 absolute origin-top-left rotate-90 border border-[#cb935d]" />
                            <div className="left-[24px] top-[8px] absolute text-[#cb935d] text-[28px] font-bold leading-[39.20px] font-inter">
                                {t("timeline.2024_1.year")}
                            </div>
                            <div className="w-[360px] left-[24px] top-[55px] absolute text-[#274a6d] text-base font-normal  leading-normal font-inter">
                                {t("timeline.2024_1.description")}
                            </div>
                        </div>
                        <div className="w-6 h-6 left-[424px] top-[44px] absolute bg-[#cb935d] rounded-full" />
                    </div>

                    <div className="w-[448px] h-[111px] left-[424px] top-[159px] absolute">
                        <div className="w-96 h-[111px] left-[64px] top-0 absolute">
                            <div className="w-[111px] h-[0px] left-[384px] top-0 absolute origin-top-left rotate-90 border border-[#cb935d]" />
                            <div className="w-[360px] h-[95px] left-0 top-[8px] absolute">
                                <div className="left-0 top-0 absolute text-[#cb935d] text-[28px] font-bold leading-[39.20px] font-inter">
                                    {t("timeline.2024_2.year")}
                                </div>
                                <div className="w-[360px] left-0 top-[47px] absolute text-[#274a6d] text-base font-normal  leading-normal font-inter">
                                    {t("timeline.2024_2.description")}
                                </div>
                            </div>
                        </div>
                        <div className="w-6 h-6 left-0 top-[44px] absolute bg-[#cb935d] rounded-full" />
                    </div>
                </div>
            </section>
            <div className="lg:hidden flex containerConssulab w-[335px] h-[426px] relative">
                <div className="w-[426px] h-[0px] left-[11px] top-0 absolute origin-top-left rotate-90 border border-[#cb935d]" />
                <div className="w-[335px] h-[110px] left-0 top-[24px] absolute">
                    <div className="w-[287px] h-[110px] left-[48px] top-0 absolute">
                        <div className="w-[110px] h-[0px] left-[287px] top-0 absolute origin-top-left rotate-90 border border-[#cb935d]" />
                        <div className="w-[263px] h-[78px] left-0 top-[16px] absolute">
                            <div className="left-0 top-0 absolute text-[#cb935d] text-xl font-bold  leading-7 font-inter">
                                {t("timeline.2023.year")}
                            </div>
                            <div className="w-[263px] left-0 top-[36px] absolute text-[#274a6d] text-sm font-normal leading-[21px] font-inter">
                                {t("timeline.2023.description")}
                            </div>
                        </div>
                    </div>
                    <div className="w-6 h-6 left-0 top-[43px] absolute bg-[#cb935d] rounded-full" />
                </div>
                <div className="w-[335px] h-[110px] left-0 top-[158px] absolute">
                    <div className="w-[287px] h-[110px] left-[48px] top-0 absolute">
                        <div className="w-[110px] h-[0px] left-[287px] top-0 absolute origin-top-left rotate-90 border border-[#cb935d]" />
                        <div className="w-[263px] h-[78px] left-0 top-[16px] absolute">
                            <div className="left-0 top-0 absolute text-[#cb935d] text-xl font-bold  leading-7 font-inter">
                                {t("timeline.2024_1.year")}
                            </div>
                            <div className="w-[263px] left-0 top-[36px] absolute text-[#274a6d] text-sm font-normal leading-[21px] font-inter">
                                {t("timeline.2024_1.description")}
                            </div>
                        </div>
                    </div>
                    <div className="w-6 h-6 left-0 top-[43px] absolute bg-[#cb935d] rounded-full" />
                </div>
                <div className="w-[335px] h-[110px] left-0 top-[292px] absolute">
                    <div className="w-[287px] h-[110px] left-[48px] top-0 absolute">
                        <div className="w-[110px] h-[0px] left-[287px] top-0 absolute origin-top-left rotate-90 border border-[#cb935d]" />
                        <div className="w-[263px] h-[78px] left-0 top-[16px] absolute">
                            <div className="left-0 top-0 absolute text-[#cb935d] text-xl font-bold  leading-7 font-inter">
                                {t("timeline.2024_2.year")}
                            </div>
                            <div className="w-[263px] left-0 top-[36px] absolute text-[#274a6d] text-sm font-normal leading-[21px] font-inter">
                                {t("timeline.2024_2.year")}
                            </div>
                        </div>
                    </div>
                    <div className="w-6 h-6 left-0 top-[43px] absolute bg-[#cb935d] rounded-full" />
                </div>
            </div>

            <section className="flex bg-[#091622] py-72 mt-72  w-full ">
                <div className="containerConssulab flex-col justify-start items-start inline-flex">
                    <Separator className="w-full border border-white" />
                    <div className="font-montserrat text-white text-sm sm:text-base font-medium  leading-normal mt-6">
                        {/* Não se constrói <p>um império sozinho</p> */}
                        {t.rich("team_overview.title", {
                            break: (chunks) => <p>{chunks}</p>
                        })}
                    </div>
                    <h4 className="mt-[53px] text-white text-xl sm:text-5xl font-bold leading-7 sm:leading-[76.80px]">
                        {t("team_overview.subtitle")}
                    </h4>
                    <div className="my-[53px] max-w-[592px] flex-col justify-start items-start gap-4 flex">
                        <p className="self-stretch text-[#e0dfe6] text-base font-normal  leading-normal">
                            {t("team_overview.paragraph1")}
                        </p>
                        <p className="self-stretch text-[#e0dfe6] text-base font-normal  leading-normal">
                            {t("team_overview.paragraph1")}
                        </p>
                        <p className="self-stretch text-[#e0dfe6] text-base font-normal  leading-normal">
                            {t("team_overview.paragraph1")}
                            <br />
                        </p>
                    </div>
                    <Link href={"/equipa"} className="" passHref>
                        <Button
                            variant={"ghost"}
                            className="text-white text-base font-semibold leading-normal w-full lg:w-auto px-4 rounded-none py-2 border border-white justify-center items-center gap-2.5 inline-flex"
                        >
                            {t("team_overview.button_text")}
                        </Button>
                    </Link>
                </div>
            </section>
            <section className="hidden md:flex  mt-72 w-full ">
                <div className=" w-full containerConssulab flex-col justify-start items-start inline-flex">
                    <Separator className="flex w-full border border-[#c2daf4]" />
                    <p className="w-[194px] text-[#091622] text-sm sm:text-base font-medium  leading-normal sm:leading-[21px] font-montserrat mt-6">
                        {t("teamCulture.title")}
                    </p>
                    <p className="w-full text-[#091622] text-lg sm:text-[44px] font-bold  leading-[25.20px] sm:leading-[70.40px] font-inter mt-72">
                        {t("teamCulture.subtitle")}
                    </p>
                </div>
            </section>

            <section className="containerConssulab mt-28 space-y-28 hidden md:grid">
                <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-x-8">
                    <TopicAboutUS
                        className="col-start-3 col-span-1"
                        title={t("topic.topic1.title")}
                        number="01"
                    >
                        {t("topic.topic1.description")}
                    </TopicAboutUS>

                    <TopicAboutUS
                        className="col-start-4 col-span-1"
                        title={t("topic.topic2.title")}
                        number="02"
                    >
                        {t("topic.topic2.description")}
                    </TopicAboutUS>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-x-8">
                    <TopicAboutUS title={t("topic.topic3.title")} number="03">
                        {t("topic.topic3.description")}
                    </TopicAboutUS>

                    <TopicAboutUS title={t("topic.topic4.title")} number="04">
                        {t("topic.topic4.description")}
                    </TopicAboutUS>
                </div>
            </section>
            <section className="containerConssulab flex-col justify-start items-start gap-10  md:hidden flex ">
                <div className="w-[336px] h-[198px] relative">
                    <div className="w-full h-[0px] left-0 top-0 absolute border border-[#e0dfe6]" />
                    <div className="w-[175px] left-0 top-[24px] absolute text-[#091622] text-sm font-medium leading-[21px]">
                        {t("teamCulture.title")}
                    </div>
                    <div className="w-[336px] left-0 top-[98px] absolute text-[#091622] text-lg font-bold  leading-[25.20px]">
                        {t("teamCulture.subtitle")}
                    </div>
                </div>
                <div className="h-[889px] flex-col justify-start items-start gap-8 flex">
                    <div className="w-[336px] h-[172px] relative">
                        <div className="w-[336px] h-[0px] left-0 top-0 absolute border border-[#e0dfe6]" />
                        <div className="left-0 top-[24px] absolute text-[#091622] text-lg font-bold  leading-[25.20px]">
                            01
                        </div>
                        <div className="w-[336px] h-[107px] left-0 top-[65px] absolute flex-col justify-start items-start gap-4 inline-flex">
                            <div className="w-[336px] text-[#091622] text-xl font-bold  leading-7">
                                {t("topic.topic1.title")}
                            </div>
                            <div className="w-[336px] text-[#274a6d] text-sm font-normal leading-[21px]">
                                {t("topic.topic2.description")}
                            </div>
                        </div>
                    </div>
                    <div className="w-[336px] h-[172px] relative">
                        <div className="w-[336px] h-[0px] left-0 top-0 absolute border border-[#e0dfe6]" />
                        <div className="left-0 top-[24px] absolute text-[#091622] text-lg font-bold  leading-[25.20px]">
                            02
                        </div>
                        <div className="w-[336px] h-[107px] left-0 top-[65px] absolute flex-col justify-start items-start gap-4 inline-flex">
                            <div className="w-[336px] text-[#091622] text-xl font-bold  leading-7">
                                {t("topic.topic2.title")}
                            </div>
                            <div className="w-[336px] text-[#274a6d] text-sm font-normal leading-[21px]">
                                {t("topic.topic3.description")}
                            </div>
                        </div>
                    </div>
                    <div className="w-[336px] h-[277px] relative">
                        <div className="w-[336px] h-[0px] left-0 top-0 absolute border border-[#e0dfe6]" />
                        <div className="left-0 top-[24px] absolute text-[#091622] text-lg font-bold  leading-[25.20px]">
                            03
                        </div>
                        <div className="w-[336px] h-[212px] left-0 top-[65px] absolute flex-col justify-start items-start gap-4 inline-flex">
                            <div className="w-[336px] text-[#091622] text-xl font-bold  leading-7">
                                {t("topic.topic3.title")}
                            </div>
                            <div className="w-[336px] text-[#274a6d] text-sm font-normal leading-[21px]">
                                {t("topic.topic3.description")}
                            </div>
                        </div>
                    </div>
                    <div className="w-[336px] h-[172px] relative">
                        <div className="w-[336px] h-[0px] left-0 top-0 absolute border border-[#e0dfe6]" />
                        <div className="left-0 top-[24px] absolute text-[#091622] text-lg font-bold  leading-[25.20px]">
                            04
                        </div>
                        <div className="w-[336px] h-[107px] left-0 top-[65px] absolute flex-col justify-start items-start gap-4 inline-flex">
                            <div className="w-[336px] text-[#091622] text-xl font-bold  leading-7">
                                {t("topic.topic4.title")}
                            </div>
                            <div className="w-[336px] text-[#274a6d] text-sm font-normal leading-[21px]">
                                {t("topic.topic4.description")}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex  mt-[72px] w-full">

                <PartnersSection
                    title="Manuel"
                    subtitle="Diogo"
                    testimonials={testimonials}

                />

            </section>
        </main>
    );
};

export default Servico;
