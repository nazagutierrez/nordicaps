"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/app/utils/highlight-titles/HighlightTitleGreen.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import 'swiper/swiper-bundle.css';
import image from "../../../assets/nordicaps-verde.webp"
import instagramImage from "../../../assets/instagram.png"
import whatsappImage from "../../../assets/whatsapp-icon.svg"
import Image from "next/image";
import CountUp from "@/app/ui/CountUp";
import { principalFont } from "@/fonts";
import { socialMediaAccounts } from "@/app/utils/social-const";

export default function Nosotros() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    timeline
      .from(headingRef.current, { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" })
      .from(textRef.current, { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
      .from(imageRef.current, { opacity: 0, ease: "power3.out" }, "-=0.6")
      .fromTo(
        gsap.utils.toArray(statsRef.current?.children || []),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" },
        "-=0.8"
      );
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="pb-14 relative como-comprar-section "
    >
      <div className="absolute top-[12%] left-0 w-full h-2/3 products-section skew-y-[-10deg] shadow-[0_0_35px_5px_rgba(0,0,0,0.25)]"></div>

      <div className="container relative overflow-hidden mx-auto px-4 md:px-6">
        <div className="grid pt-16 grid-cols-1 lg:grid-cols-2  w-full items-center">
          <div>
            <h1
              ref={headingRef}
              className={`${styles.fancy} ${principalFont.className} mx-auto lg:mx-0 font-bold! w-fit text-5xl sm:text-6xl mb-12 text-white`}
            >
              Nosotros
            </h1>
            <div ref={textRef} className="space-y-4 text-white">
              <p className="text-lg">
                Somos{" "}
                <span className="font-semibold underline underline-offset-4 decoration-green-100">
                  Nordicaps
                </span>
                , un emprendimiento de gorras ubicado en Junin, Buenos Aires.
              </p>
              <p>
                Nuestro proyecto nació del deseo de romper con lo convencional y
                ofrecer algo verdaderamente único. Cada una de nuestras gorras
                tiene un diseño innovador, de muy buena calidad y muy fachero.
              </p>
              <p>
                Elegí nordicaps y llevate una gorra que no solo te protege del
                sol, sino que también te da un estilo unico.
              </p>
            </div>
          </div>

          <div ref={imageRef} className="relative max-h-[400px] w-[90%] md:w-[70%] pt-16 lg:pt-0 rounded-lg rotate-3 hover:rotate-0! transition-transform mx-auto">
            {/* Blur shadow always behind the swiper, same size */}
            <div className="hidden md:block absolute inset-0 -z-10 scale-105 rounded-full bg-black/30 blur-2xl"></div>
            <Swiper
              effect="cards"
              grabCursor={true}
              modules={[EffectCards]}
              className="h-full w-full  sm:text-base text-sm rounded-sm"
            >
              <SwiperSlide className="rounded-sm border border-black/40 h-fit!">
                <Image src={image} alt="slider image" />
              </SwiperSlide>
              <SwiperSlide className="rounded-sm border border-black/40 h-fit!">
                <Image src={image} alt="slider image" />
              </SwiperSlide>
              <SwiperSlide className="rounded-sm border border-black/40 h-fit!">
                <Image src={image} alt="slider image" />
              </SwiperSlide>
              <SwiperSlide className="rounded-sm border border-black/40 h-fit!">
                <Image src={image} alt="slider image" />
              </SwiperSlide>
              <SwiperSlide className="rounded-sm border border-black/40 h-fit!">
                <Image src={image} alt="slider image" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 sm:mt-36 xl:mt-16 text-center"
        >
          {[
            { symbol: "+", number: "500", label: "Gorras vendidas" },
            { symbol: "+", number: "50", label: "Diseños únicos" },
            { symbol: "/10", number: "10", label: "Calidad" },
            { symbol: "%", number: "94", label: "Clientes satisfechos" },
          ].map((stat, index) => (
            <div
              key={index}
              className="px-2.5 content-center py-5 button como-comprar-section border border-green-800/80 rounded-lg shadow-[0px_5px_55px_-10px_#73956640]"            >
              <div className="text-3xl font-bold text-neutral-300">
                {stat.symbol === "+" && "+"}
                <CountUp
                  from={0}
                  to={Number(stat.number)}
                  separator=","
                  direction="up"
                  duration={1.5}
                  className="count-up-text"
                  />
                {stat.symbol === "/10" && "/10"}
                {stat.symbol === "%" && "%"}
              </div>
              <div className="text-neutral-300 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
        <div className="mt-16 text-center gap-5 flex justify-center items-center">
          <div className="group flex">
            <a href={socialMediaAccounts.instagram} target="_blank" rel="noopener noreferrer" className="text-2xl px-2.5 py-1.5 button bg-black/15 rounded-lg hover:border-green-300/70 shadow-[0px_15px_30px_0px_#89629291] hover:shadow-[0px_25px_40px_2px_#ad5fbea8] transition-all border-white/40">
              <span><Image src={instagramImage} className="brightness-[0.85]" alt="whatsapp" width={30} height={30} /></span>
            </a>
          </div>

          <div className="group flex">
            <a href={socialMediaAccounts.whatsapp} target="_blank" rel="noopener noreferrer" className="text-2xl px-2.5 py-1.5 button bg-black/15 rounded-lg hover:border-green-300/70 shadow-[0px_15px_30px_0px_#70926265] hover:shadow-[0px_25px_40px_2px_#6fac5765] transition-all border-white/40">
              <span><Image src={whatsappImage} className="opacity-80 p-px" alt="whatsapp" width={30} height={30} /></span>
            </a>
          </div>
        </div>
    </section>
  );
}
