"use client"

import React, { useEffect, useRef } from 'react'
import TitleMagazine from '../../components/Title-magazine'
import { IoIosArrowRoundDown } from "react-icons/io";
import { principalFont } from '@/fonts';
import styles from "./home.module.css"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img1 from "../../../assets/nordicaps-1.avif";
import img2 from "../../../assets/nordicaps-2.avif";
import img3 from "../../../assets/nordicaps-3.avif";
import img4 from "../../../assets/nordicaps-4.avif";
import Image from 'next/image';
import HeroButton from '@/app/components/HeroButton';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imgLeft1 = useRef(null);
  const imgLeft2 = useRef(null);
  const imgRight1 = useRef(null);
  const imgRight2 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
  
      tl.to(titleRef.current, {
        opacity: 0.5,
        y: 1000,
        ease: "none",
      });

      tl.to(imgLeft1.current, { x: -750, opacity: 0 }, 0)
      .to(imgLeft2.current, { x: -450, opacity: 0 }, 0)
      .to(imgRight1.current, { x: 750, opacity: 0 }, 0)
      .to(imgRight2.current, { x: 450, opacity: 0 }, 0);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={sectionRef} id='inicio' className="overflow-hidden relative home-section h-screen flex justify-center bg-neutral-800 items-center">
       <div className='absolute inset-0 noise'></div>
       <div className='z-10 flex flex-col items-center gap-5' >
          <div ref={titleRef}>
            <TitleMagazine />
          </div>
          <p className={`${principalFont.className} text-neutral-200 subtitle text-2xl italic`}>
            Las gorras con mas estilo de Junin, Buenos Aires.
          </p>
          <i className={`text-neutral-200 text-4xl absolute bottom-10 ${styles.homeArrow}`}>
            <IoIosArrowRoundDown />
          </i>
          <HeroButton />
       </div>
       

         {/* Estas dos no rompen la vista (izquierda) */}
         <div ref={imgLeft1} className='absolute border border-gray-400 bg-[#ebebeb] w-fit h-[300px] bottom-0 left-0 rotate-45 flex flex-col items-center justify-start pt-3 px-3'>
            <Image src={img1} className='w-44 h-fit object-cover' alt="background" />
            <div className='h-10'></div>
         </div>
         <div ref={imgLeft2} className='absolute border border-gray-400 bg-[#ebebeb] w-fit h-[300px] -bottom-20 left-32 rotate-[30deg] flex flex-col items-center justify-start pt-3 px-3'>
            <Image src={img2} className='w-44 h-fit object-cover' alt="background" />
            <div className='h-10'></div>
         </div>
         
         {/* Estas dos rompen la vista (derecha) */}
         <div ref={imgRight1} className='absolute border border-gray-400 bg-[#ebebeb] w-fit h-[300px] bottom-0 right-0 -rotate-45 flex flex-col items-center justify-start pt-3 px-3'>
            <Image src={img3} className='w-44 h-fit object-cover' alt="background" />
            <div className='h-10'></div>
         </div>
         <div ref={imgRight2} className='absolute border border-gray-400 bg-[#ebebeb] w-fit h-[300px] -bottom-20 right-32 rotate-[-30deg] flex flex-col items-center justify-start pt-3 px-3'>
            <Image src={img4} className='w-44 h-fit object-cover' alt="background" />
            <div className='h-10'></div>
         </div>

    </main>
  )
}

export default HomePage