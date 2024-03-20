import { principalFont } from '@/fonts'
import React from 'react'

const SectionRedes = () => {
  return (
    <section id="redes" className={`${principalFont.className} h-screen text-white bg-[#081608e8] flex flex-col py-20 justify-between items-center products-section`}>
      <div className="flex flex-col items-start w-full pl-32 gap-8">
        {/* <h1 className={`${styles.fancy} text-5xl `}>Nuestros productos</h1> */}
        <h2 className="text-2xl pl-16">Con muchisimos diseños para elegir!</h2>
      </div>
    </section>
  )
}

export default SectionRedes