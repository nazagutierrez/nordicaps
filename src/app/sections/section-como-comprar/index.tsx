import { principalFont } from "@/fonts";
import highlightBLue from "@/app/utils/highlight-titles/HighlightTitleBlue.module.css";
import React from "react";
import Image from "next/image";
import arrow1blue from "@/assets/arrows/arrow-blue-1.svg";
import arrow2blue from "@/assets/arrows/arrow-blue-2.svg";
import arrow3green from "@/assets/arrows/arrow-green-3.svg";
import GoToButton from "@/app/utils/go-to-button";

const SectionComoComprar = () => {
  return (
    <section
      id="como-comprar"
      className={`${principalFont.className} h-screen text-white gap-20 bg-[#183b18e8] flex flex-col py-20 items-center como-comprar-section`}>
      <div className="flex flex-col items-start w-full pl-32 gap-8">
        <h1 className={`${highlightBLue.fancyNoHover} text-5xl hover:opacity-100`}>
          Como comprar
        </h1>
        <h2 className="text-2xl pl-16">
          Segui estos pasos para poder llevarte tu Nordicap!
        </h2>
        <div className="grid grid-cols-3 text-4xl mt-5">
          <div className="place-self-center pl-36 mt-5">
            <h2 className={`${highlightBLue.fancyNoHover} w-fit`}>
              Mirá nuestro catálogo
            </h2>
          </div>
          <Image src={arrow1blue} className="mb-16 arrow-animation pointer-events-none" alt="Como comprar" width={500} height={0}></Image> 
          <div className="pl-8 mt-2">
            <GoToButton sectionId="#nuestros-productos" classname="w-fit" highlightColor="green">
              Elegí tu nordicap
            </GoToButton>
          </div>
          <Image src={arrow2blue} className="rotate-[25deg] place-self-end mt-20 -m-16 -scale-x-100 arrow-animation pointer-events-none" alt="Como comprar" width={200} height={0}></Image>
          <div className="pl-16 place-self-center">
            <GoToButton sectionId="#nosotros" highlightColor="blue">
              Contactanos para
              <span className="mx-1" ></span>
            </GoToButton>
            <GoToButton sectionId="#nosotros" highlightColor="green">
                realizar tu pedido
            </GoToButton>
          </div>
          <Image src={arrow3green} className="-scale-x-100 rotate-[210deg] -mt-28 ml-24 arrow-animation pointer-events-none" alt="Como comprar" width={230} height={0}></Image>
          <div className="pl-16 col-span-2 place-self-center mt-32">
            <h2 className={`${highlightBLue.fancyNoHover}`}>
              Y a disfrutarla!
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionComoComprar;
