import Image from "next/image";
import { Header } from "@/components/header";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import Section from "@public/assets/section.jpg";
import Slider1 from "@public/assets/slider1.svg";
import Slider2 from "@public/assets/slider2.svg";
import Slider3 from "@public/assets/slider3.svg";
import Slider4 from "@public/assets/slider4.svg";
import Slider5 from "@public/assets/slider5.svg";
import Slider6 from "@public/assets/slider6.svg";
import Slider7 from "@public/assets/slider7.svg";
import Slider8 from "@public/assets/slider8.svg";
import Slider9 from "@public/assets/slider9.svg";
import { FiUsers, FiBarChart, FiEye, FiBarChart2, FiArrowRight } from "react-icons/fi";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiComma } from "react-icons/si";
import CEO from "@public/assets/CEO.jpg";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export default function Home() {
  return (
    <section className="">
      <Header />
      <section className="max-w-max-width-consullab mx-auto mt-16">
        <h1 className={cn("w-[800px] text-[47px] leading-[75.2px]")}>
          Pessoas e projectos importam no <br /> desenvolvimento das
          <b className="text-yellow-500 font-normal"> instituições</b>
        </h1>
        <div className="flex justify-between items-center">
          <p className="flex self-end ite text-[#091622] mt-14 whitespace-normal max-w-sm opacity-0">
            Pretendemos estabelecer parcerias fortes e sustentáveis, que
            asseguram o crescimento das instituições.
          </p>
          <p className="flex self-end  text-[#091622] mt-14 whitespace-normal max-w-sm">
            Pretendemos estabelecer parcerias fortes e sustentáveis, que
            asseguram o crescimento das instituições.
          </p>
        </div>
      </section>
      <section
        className="relative bg-cover bg-center h-screen w-full mt-[72px]"
        style={{ backgroundImage: `url(${Section.src})` }}
      />
      <section className="bg-[#091622] flex relative ">
        <div className="text-lg w-full items-center justify-between max-w-max-width-consullab mx-auto flex bg-[rgb(9,22,34)] h-[105px]">
          <Image src={Slider8} alt="" />
          <Image src={Slider3} alt="" />
          <Image src={Slider4} alt="" />
          <Image src={Slider5} alt="" />
          <Image src={Slider6} alt="" />
          <Image src={Slider7} alt="" />
          <Image src={Slider1} alt="" />
        </div>
      </section>
      <section className=" bg-gradient-to-b from-[#091622] to-[#091622]">
        <div className="flex flex-col gap-4 justify-end items-end h-screen max-w-max-width-consullab mx-auto w-full max-h-[849px] pb-[88px]">
          <span
            className={cn(
              montserrat.className,
              "w-[592px] text-white text-lg font-bold  leading-[25.20px]"
            )}
          >
            CONSULLAB
          </span>
          <h2
            className={cn(
              montserrat.className,
              "w-[592px] text-white text-[56px] font-bold  leading-[78.40px]"
            )}
          >
            Sobre nós
          </h2>
          <p className="w-[592px] text-[#c2daf4] text-base font-normal leading-normal">
            A Consullab é uma empresa de direito angolano que actua no domínio
            da consultoria jurídica, financeira, fiscal, prestando todo auxilio,
            numa modalidade a que denominamos de consultoria institucional para
            evidenciar a perspectiva integrada e multifacética da sua actuação.
          </p>
          <p className="w-[592px] text-[#c2daf4] text-base font-normal  leading-normal">
            Analisamos minuciosamente cada situação para oferecer as melhores
            soluções jurídicas, com foco em resultados práticos e eficientes.
          </p>
        </div>
      </section>
      <section className="w-full h-[276px] bg-[#091622]">
        <div className="flex items-center justify-between max-w-max-width-consullab mx-auto w-full">
          <div className="h-[164px] flex-col justify-center items-start gap-4 inline-flex">
            <div className="w-8 h-8 relative" />
            <h3 className="text-white text-xl font-bold leading-7 flex flex-col items-start gap-2">
              <FiEye className="text-current w-8 h-8" />
              Transparência
            </h3>
            <p className="w-[368px] text-white text-base font-normal leading-normal">
              Os nossos projectos privilegiam soluções fundamentadas e
              justificáveis, não havendo dúvidas sobre a sua proveniência e
              eficiência
            </p>
          </div>
          <div className="h-[164px] flex-col justify-center items-start gap-4 inline-flex">

            <div className="text-white text-xl font-bold leading-7  flex flex-col items-start gap-2">
              <FiUsers className="text-current w-8 h-8" />
              Democracia
            </div>

            <div className="w-[368px] text-white text-base font-normal leading-normal">
              Os nossos projectos são construídos de forma conjunta com os
              parceiros/clientes, numa perspectiva de diálogo permanente e livre
            </div>
          </div>
          <div className="h-[212px] flex-col justify-center items-start gap-4 inline-flex">
            <div className="text-white text-xl font-bold leading-7  flex flex-col items-start gap-2">
              <FiBarChart className="text-current w-8 h-8" />
              Progresso
            </div>
            <div className="w-[368px] text-white text-base font-normal leading-normal">
              Acompanhamos os nossos parceiros e medimos o seu crescimento. As
              metas inicialmente determinadas são regularmente avaliadas,
              havendo uma forte preocupação com a sua efectivação.
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex-col justify-start items-end gap-10 inline-flex my-[72px]">
        <div className="flex justify-start mx-auto max-w-max-width-consullab">
          <div className="flex-1">
            <h3 className=" text-[#091622] text-base font-semibold  leading-normal">A consultoria</h3>
            <div className="flex flex-col gap-9 mt-[313px]">
              <span className="text-[#091622] text-[120px] font-bold">+60</span>
              <div className="flex flex-col gap-1">
                <span className="text-[#091622] text-5xl font-bold leading-[67.20px]">Pareceres</span>
                <span className="w-[279px] text-[#173049] text-base font-medium  leading-normal">emitidos sobre uma quantidade significativa de casos.</span>
              </div>

            </div>

            <div className="flex flex-col gap-9 translate-x-[50%]">
              <span className="text-[#091622] text-[120px] font-bold">+100</span>
              <div className="flex flex-col gap-1">
                <span className="text-[#091622] text-5xl font-bold leading-[67.20px]">Formações</span>
                <span className="w-[279px] text-[#173049] text-base font-medium  leading-normal">apacitamos muitos quadros em diversas matérias</span>
              </div>

            </div>

          </div>

          <div className="flex flex-col flex-1 ">
            <p className=" text-[#173049] text-base font-normal leading-normal">Entendemos que cada cliente é único, e por isso nossa abordagem é sempre personalizada. Analisamos minuciosamente cada situação para oferecer as melhores soluções jurídicas, com foco em resultados práticos e eficientes. Nosso compromisso é com o sucesso e a satisfação de nossos clientes, garantindo que suas questões jurídicas sejam tratadas com a devida atenção e profissionalismo.</p>
            <div className="flex flex-col gap-9">
              <span className="text-[#091622] text-[120px] font-bold">+30</span>
              <div className="flex flex-col gap-1">
                <span className="text-[#091622] text-5xl font-bold leading-[67.20px]">Diplomas</span>
                <span className="w-[279px] text-[#173049] text-base font-medium  leading-normal">elaborados, entre leis, decretos e regulamentos.</span>
              </div>

            </div>

            <Card className="rounded-none relative w-[488px] bg-white shadow h-[297px] flex-col justify-start items-start inline-flex translate-y-[90%]">
              <CardContent className="rounded-none">
                <CardHeader className="w-[279px] text-[#173049] text-lg font-bold leading-[25.20px]">SOBRE NÓS</CardHeader>
                <CardDescription className="w-[279px] text-[#091622] text-lg font-medium leading-[27px]">História e competências da nossa consultoria</CardDescription>
                <Button className="group rounded-none absolute bottom-4 right-4 w-10 h-10 p-2 bg-[#c2daf4] justify-start items-center gap-2.5 inline-flex">
                  <FiArrowRight className="w-6 h-6 text-black group-[hover]:text-white" />
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <section className="w-full h-[795px] bg-[#091622] py-[72px]" >
        <div className="flex flex-col justify-start mx-auto max-w-max-width-consullab">
          <h4 className="text-white text-lg font-bold leading-[25.20px] mb-6">Nossos serviços</h4>
          <div className="text-white text-5xl font-bold leading-[67.20px]">Actuamos nas áreas mais complexas do direito, oferecendo serviços de diversas naturezas.</div>
        </div>
        <div className="flex justify-start mx-auto max-w-max-width-consullab mt-[84px]">

          <div className="flex-1 flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-96 h-[0px] border border-white/90" />
            <div className="self-stretch text-white text-base font-semibold  leading-normal">SERVIÇOS</div>
          </div>
          <div className="flex-1 w-96 flex-col justify-start items-start gap-8 inline-flex">
            <div className="self-stretch h-[72px] flex-col justify-start items-start gap-4 flex">
              <div className="w-96 h-[0px] border border-white/90" />
              <div className="w-96 justify-between items-start inline-flex">
                <div className="w-[349px] text-white text-xl font-semibold  leading-7">REALIZAÇÃO DE DIAGNOSTICOS INSTITUCIONAL</div>
                <div className="text-right text-white text-xl font-semibold  leading-7">01</div>
              </div>
            </div>
            <div className="self-stretch h-[72px] flex-col justify-start items-start gap-4 flex">
              <div className="w-96 h-[0px] border border-white/90" />
              <div className="w-96 justify-between items-start inline-flex">
                <div className="w-[349px] text-white text-xl font-semibold  leading-7">ELABORAÇÃO DE PLANOS ESTRATÉGICOS</div>
                <div className="text-right text-white text-xl font-semibold  leading-7">03</div>
              </div>
            </div>
            <div className="self-stretch h-[72px] flex-col justify-start items-start gap-4 flex">
              <div className="w-96 h-[0px] border border-white/90" />
              <div className="w-96 justify-between items-start inline-flex">
                <div className="w-[349px] text-white text-xl font-semibold  leading-7">CONSULTORIA EM CONTRATAÇÃO PÚBLICA</div>
                <div className="text-right text-white text-xl font-semibold  leading-7">05</div>
              </div>
            </div>
            <div className="self-stretch h-[72px] flex-col justify-start items-start gap-4 flex">
              <div className="w-96 h-[0px] border border-white/90" />
              <div className="w-96 justify-between items-start inline-flex">
                <div className="w-[349px] text-white text-xl font-semibold  leading-7">CONSULTORIA JURÍDICA ESPECIALIZADA</div>
                <div className="text-right text-white text-xl font-semibold  leading-7">07</div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-96 flex-col justify-start items-start gap-8 inline-flex">
            <div className="self-stretch h-11 flex-col justify-start items-start gap-4 flex">
              <div className="w-96 h-[0px] border border-white/90" />
              <div className="w-96 justify-between items-start inline-flex">
                <div className="w-[349px] text-white text-xl font-semibold  leading-7">ELABORAÇÃO DE NORMAS</div>
                <div className="text-right text-white text-xl font-semibold  leading-7">02</div>
              </div>
            </div>
            <div className="self-stretch h-11 flex-col justify-start items-start gap-4 flex">
              <div className="w-96 h-[0px] border border-white/90" />
              <div className="w-96 justify-between items-start inline-flex">
                <div className="w-[349px] text-white text-xl font-semibold  leading-7">FORMAÇÕES ESPECIALIZADAS</div>
                <div className="text-right text-white text-xl font-semibold  leading-7">04</div>
              </div>
            </div>
            <div className="self-stretch h-[72px] flex-col justify-start items-start gap-4 flex">
              <div className="w-96 h-[0px] border border-white/90" />
              <div className="w-96 justify-between items-start inline-flex">
                <div className="w-[349px] text-white text-xl font-semibold  leading-7">CONSULTORIA EM MATÉRIA DE RECURSOS HUMANOS</div>
                <div className="text-right text-white text-xl font-semibold  leading-7">06</div>
              </div>
            </div>
          </div>
        </div>
      </section >

      <section className="flex items-center justify-center gap-4 w-full h-auto">
        <div className="flex justify-center items-center w-full max-w-max-width-consullab max-auto">

          <div className="flex-1 flex flex-col space-y-4 ">
            <div className="flex justify-start text-[#4F7FAF]">
              <SiComma className="rotate-[180deg] -translate-x-4  w-24 h-24" />
              <SiComma className="rotate-[180deg] -translate-x-12 w-24 h-24" />
            </div>
            <div className="text-[#173049] text-[28px] font-bold leading-[39.20px] max-w-[488px]">
              Na Consullab, acreditamos que a transparência é a base de toda relação de confiança. Nosso compromisso é ser claro, honesto e direto com nossos clientes, para que eles sempre saibam onde estão e para onde estamos indo juntos.
            </div>
            <div className="text-[#173049] text-base font-normal leading-normal max-w-[488px]">
              Acreditamos que o verdadeiro valor de uma consultoria jurídica está na capacidade de antecipar problemas e criar estratégias que protejam e impulsionem os negócios dos nossos clientes.
            </div>
          </div>

          <div className="flex-1">
            <Image
              src={CEO}
              alt="CEO da Consullab"
              className="h-full object-cover w-screen"
            />
          </div>

        </div>
      </section>

    </section >
  );
}
