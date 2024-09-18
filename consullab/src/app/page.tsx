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


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export default function Home() {
  return (
    <div className="">
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
    </div>

  );
}
