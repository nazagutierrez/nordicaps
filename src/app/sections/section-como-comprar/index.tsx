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
      className={`${principalFont.className} relative h-screen text-white gap-20 flex flex-col justify-between py-20 items-center como-comprar-section`}
    >
      <div className="flex flex-col items-start w-full gap-8">
        <div className="pl-32">
          <h1
            className={`${highlightBLue.fancyNoHover} mb-8 text-5xl hover:opacity-100`}
          >
            ¿Qué nos hace diferentes?
          </h1>
          <h2 className="text-2xl pl-16">
            Te resumimos por que elegirnos en solo 5 puntos
          </h2>
        </div>

        <div className="grid grid-cols-10 grid-rows-6 items-center text-4xl justify-items-center gap-2 mx-20 text-neutral-900/90">
          <div data-rotate="-12" className='col-span-2 row-span-3 title-como-comprar w-[290px] h-fit border px-10 pb-4 border-gray-400 bg-[#ebebeb] flex flex-col items-center justify-center'>
            <Image src={pin} className="w-7 h-7 rotate-[75deg] mb-2" alt="Como comprar" width={0} height={0} />
            <h2>La mejor calidad</h2>
          </div>
          
          <Arrow type="straight" h={66} className="col-span-2 col-start-3 row-start-2 w-[70%] rotate-[200deg] scale-y-[-1]" propRef={sectionRef} delay={0.2} />
          
          <div data-rotate="-12" className='col-span-2 row-span-3 col-start-5 row-start-1 title-como-comprar w-[330px] h-fit border px-10 pb-4 border-gray-400 bg-[#ebebeb] flex flex-col items-center justify-center'>
            <Image src={pin} className="w-7 h-7 rotate-[75deg] mb-2" alt="Como comprar" width={0} height={0} />
            <h2>Los mejores precios</h2>
          </div>
          
          <Arrow type="straight" h={66} propRef={sectionRef} className="col-span-2 col-start-7 row-start-2 w-[70%] rotate-[200deg] scale-y-[-1]" delay={0.4} />
          
          <div data-rotate="-12" className='col-span-2 row-span-3 col-start-9 row-start-1 title-como-comprar w-[310px] h-fit border px-10 pb-4 border-gray-400 bg-[#ebebeb] flex flex-col items-center justify-center'>
            <Image src={pin} className="w-7 h-7 rotate-[75deg] mb-2" alt="Como comprar" width={0} height={0} />
            <h2>Diseños originales</h2>
          </div>
          
          
          <div data-rotate="-8" className='col-span-1 col-start-3 row-span-3 row-start-5 title-como-comprar w-[400px] h-fit border px-10 pb-4 border-gray-400 bg-[#ebebeb] flex flex-col items-center justify-center'>
            <Image src={pin} className="w-7 h-7 rotate-[75deg] mb-2" alt="Como comprar" width={0} height={0} />
            <h2>Envíos rápidos a domicilio</h2>
          </div>
          <Arrow type="straight" h={60} propRef={sectionRef} className="col-span-1 col-start-5 row-start-6 w-[120%] rotate-[30deg] scale-y-[-1]" delay={0.7} />
          
          <div data-rotate="-10" className='col-span-4 row-span-3 col-start-6 row-start-5 title-como-comprar w-[580px] h-fit border px-10 pb-4 border-gray-400 bg-[#ebebeb] flex flex-col items-center justify-center'>
            <Image src={pin} className="w-7 h-7 rotate-[75deg] mb-2" alt="Como comprar" width={0} height={0} />
            <h2>Stock limitado: exclusividad garantizada</h2>
          </div>
          
          <Arrow type="circle" h={60} propRef={sectionRef} className="col-span-1 col-start-10 row-start-4 w-full rotate-[140deg]" delay={1} />
        </div>
      </div>
      <h2 className="text-lg">Lo tenemos todo!</h2>
    </section>
  );
};

export default SectionComoComprar;
