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
import whatsappImage from "../../../assets/whatsapp.png"
import Image from "next/image";
import Link from "next/link";
import CountUp from "@/app/ui/CountUp";

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
        markers: true,
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
      className="pt-14 pb-14 relative como-comprar-section"
    >
      <div className="absolute top-[12%] left-0 w-full h-2/3 products-section -skew-y-[10deg] shadow-[0_0_35px_5px_rgba(0,0,0,0.25)]"></div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2  w-full items-center">
          <div>
            <h1
              ref={headingRef}
              className={`${styles.fancy} w-fit text-4xl md:text-5xl font-bold mb-6 text-white`}
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

            <div className="absolute w-[550px] h-[450px] rounded-full right-32 bg-black/20 blur-2xl"></div>
          <div ref={imageRef} className="relative h-[400px] w-[70%] rounded-lg rotate-3 hover:!rotate-0 transition-transform mx-auto">
            <Swiper
              effect="cards"
              grabCursor={true}
              modules={[EffectCards]}
              className="h-full w-full sm:text-base text-sm rounded"
            >
              <SwiperSlide className="rounded">
                <Image src={image} alt="slider image" />
              </SwiperSlide>
              <SwiperSlide className="rounded">
                <Image src={image} alt="slider image" />
              </SwiperSlide>
              <SwiperSlide className="rounded">
                <Image src={image} alt="slider image" />
              </SwiperSlide>
              <SwiperSlide className="rounded">
                <Image src={image} alt="slider image" />
              </SwiperSlide>
              <SwiperSlide className="rounded">
                <Image src={image} alt="slider image" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center"
        >
          {[
            { symbol: "+", number: "500", label: "Gorras vendidas" },
            { symbol: "+", number: "50", label: "Diseños únicos" },
            { symbol: "/10", number: "10", label: "Calidad" },
            { symbol: "%", number: "94", label: "Clientes satisfechos" },
          ].map((stat, index) => (
            <div
              key={index}
              className="px-2.5 py-5 button como-comprar-section border border-green-800/80 rounded-lg shadow-[0px_5px_55px_-10px_#73956640]"            >
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

        <div className="mt-16 text-center gap-5 flex justify-center items-center">
          <div className="group flex">
            <Link href="/productos" className="text-2xl px-2.5 py-1.5 button bg-black/15 rounded-lg hover:border-green-300/70 shadow-[0px_25px_35px_0px_#89629291] hover:shadow-[0px_25px_40px_2px_#ad5fbea8] transition-all border-white/40">
              <span><Image src={instagramImage} className="brightness-[0.85]" alt="whatsapp" width={40} height={50} /></span>
            </Link>
          </div>

          <div className="group flex">
            <Link href="/productos" className="text-2xl px-2.5 py-1.5 button bg-black/15 rounded-lg hover:border-green-300/70 shadow-[0px_25px_35px_0px_#70926265] hover:shadow-[0px_25px_40px_2px_#6fac5765] transition-all border-white/40">
              <span><Image src={whatsappImage} className="text-red-400" alt="whatsapp" width={40} height={50} /></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
