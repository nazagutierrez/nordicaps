import { principalFont } from '@/fonts'
import React from 'react'
import styles from "@/app/utils/highlight-titles/HighlightTitleGreen.module.css"

const Nosotros = () => {
  return (
    <section id="nosotros" className={`${principalFont.className} h-screen text-white bg-[#081608e8] flex flex-col py-20 justify-between items-center products-section`}>
      <div className="flex flex-col items-start w-full pl-32 gap-8">
        <h1 className={`${styles.fancy} text-5xl `}>Nosotros</h1>
        <h1 className={`${styles.fancy} text-5xl `}>Redes</h1>
      </div>
    </section>
  )
}

export default Nosotros