import { principalFont } from '@/fonts'
import styles from "@/app/utils/highlight-titles/HighlightTitleBlue.module.css"
import React from 'react'

const SectionComoComprar = () => {
  return (
    <section id="como-comprar" className={`${principalFont.className} h-screen text-white gap-20 bg-[#183b18e8] flex flex-col py-20 items-center como-comprar-section`}>
     <div className="flex flex-col items-start w-full pl-32 gap-8">
        <h1 className={`${styles.fancyNoHover} text-5xl hover:opacity-100`}>Como comprar</h1>
        <h2 className="text-2xl pl-16">Segui estos pasos para poder llevarte tu Nordicap!</h2>
      </div>
    </section>
  )
}

export default SectionComoComprar