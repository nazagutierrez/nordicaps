"use client"

import { useLenis } from '@studio-freight/react-lenis';
import React from 'react'
import styles from "./navbar.module.css"
import { principalFont } from '@/fonts';
import { SlArrowRight } from "react-icons/sl";

const Navbar = () => {
  const lenis = useLenis(({scroll}) => {});
  const ids = ["#inicio", "#nuestros-productos", "#como-comprar", "#redes"]
  const navNames = ["Inicio", "Nuestros productos", "Como comprar", "Redes"]

  return (
    <div className={`w-fit flex fixed top-1/2 -mt-[130px] h-[260px] z-20 -left-[225px] ${styles.navcontainer}`}>
      <aside className="flex rounded-e-xl bg-[#1F3A1F]">
          <div className='h-full flex flex-col gap-6 justify-center items-start overflow-hidden text-white'>
            {ids.map((id, index) => (
              <div className="py-2 px-3 flex justify-start items-center gap-4" key={index}>
                <div className="bg-neutral-900 w-3 h-3 rounded-full"></div>
                <button className={`w-[170px] text-xl tracking-wider text-start text-neutral-200 ${principalFont.className}`} onClick={() => lenis?.scrollTo(id)}>{navNames[index]}</button>
              </div>
            ))}
          </div>
      </aside>
      <div className={`w-[40px] h-[90px] -ms-0.5 bg-[#1F3A1F] self-center flex items-center justify-center rounded-e-xl ${styles.navbtn}`}>
       <i className='text-3xl text-white'><SlArrowRight /></i>
      </div>
    </div>
  )
}

export default Navbar