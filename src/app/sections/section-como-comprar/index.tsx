"use client";

import { principalFont } from "@/fonts";
import highlightBLue from "@/app/utils/highlight-titles/HighlightTitleBlue.module.css";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import pin from "@/assets/pin-svgrepo-com.svg";
import { Arrow } from "./Arrow";

gsap.registerPlugin(ScrollTrigger);

const SectionComoComprar = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".title-como-comprar").forEach((el: any, i: number) => {
        const rotation = el.dataset.rotate || 0;
  
        gsap.fromTo(
          el,
          { opacity: 0, scale: 1.3, rotate: 0 },
          {
            opacity: 1,
            scale: 1,
            rotate: parseFloat(rotation),
            duration: 0.5,
            delay: i * 0.2, // efecto de delay por orden
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);
  
    return () => ctx.revert();
  }, []);
  

  return (
    <section
      ref={sectionRef}
      id="como-comprar"
      className={`${principalFont.className} relative h-screen text-white gap-20 bg-[#183b18e8] flex flex-col py-20 items-center como-comprar-section`}
    >
      <div className="flex flex-col items-start w-full pl-32 gap-8">
        <h1
          className={`${highlightBLue.fancyNoHover} text-5xl hover:opacity-100`}
        >
          Como comprar
        </h1>
        <h2 className="text-2xl pl-16">
          Segui estos pasos para poder llevarte tu Nordicap!
        </h2>
        <Arrow propRef={sectionRef} className="rotate-[200deg] scale-y-[-1] top-72 left-[800px]" delay={0.2} />
        <Arrow propRef={sectionRef} className="rotate-[-10deg] scale-y-[-1] top-[440px] left-[890px]" delay={0.9} />
        <Arrow propRef={sectionRef} className="rotate-[160deg] top-[580px] left-[890px]" delay={1.5} />
        <div data-rotate="-12" className='absolute title-como-comprar w-fit h-fit top-72 left-80 text-black border px-16 pb-4 text-4xl border-gray-400 bg-[#ebebeb] -rotate-12 flex flex-col items-center justify-center'>
          <Image src={pin} className="w-7 h-7 rotate-[75deg] mb-2" alt="Como comprar" width={0} height={0} />
          <h2>Mirá nuestro catálogo</h2>
        </div>
        <div data-rotate="-6" className='absolute title-como-comprar w-fit h-fit top-72 right-96 text-black border px-16 pb-4 text-4xl border-gray-400 bg-[#ebebeb] rotate-12 flex flex-col items-center justify-center'>
          <Image src={pin} className="w-7 h-7 rotate-[60deg] mb-2" alt="Como comprar" width={0} height={0} />
          <h2>Elegí tu nordicap</h2>
        </div>
        <div data-rotate="3" className='absolute title-como-comprar w-fit h-fit top-[500px] left-72 text-black border px-16 pb-4 text-4xl border-gray-400 bg-[#ebebeb] -rotate-12 flex flex-col items-center justify-center'>
          <Image src={pin} className="w-7 h-7 rotate-[75deg] mb-2" alt="Como comprar" width={0} height={0} />
          <h2>Contactanos para realizar tu pedido</h2>
        </div>
        <div data-rotate="6" className='absolute title-como-comprar w-fit h-fit top-[520px] right-96 text-black border px-16 pb-4 text-4xl border-gray-400 bg-[#ebebeb] -rotate-12 flex flex-col items-center justify-center'>
          <Image src={pin} className="w-7 h-7 rotate-[75deg] mb-2" alt="Como comprar" width={0} height={0} />
          <h2>Y a disfrutarla!</h2>
        </div> 
      </div>
    </section>
  );
};

export default SectionComoComprar;
