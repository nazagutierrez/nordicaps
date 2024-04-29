import { principalFont } from '@/fonts'
import React from 'react'
import styles from "@/app/utils/highlight-titles/HighlightTitleGreen.module.css"
import Card3d from '@/app/components/Card-3d'

const Nosotros = () => {
  return (
    <section id="nosotros" className={`${principalFont.className} h-screen text-white bg-[#081608e8] flex flex-col py-20 justify-between items-center products-section`}>
      <div className="w-full h-full flex justify-between">
        <div className="text-5xl w-full h-full flex flex-col pl-32">
          <h1 className={`${styles.fancy} w-fit mb-10`}>Nosotros</h1>
          <div>
            <h3 className='text-4xl'>Somos nordicaps</h3>
            <p className='text-2xl'>
              un emprendimiento de gorras ubicado en Junin, Buenos Aires
              estamos 
            </p>
            <p className='text-2xl'>
              amamos nuestros productos ya que son de la mejor calidad
            </p>
            <p className='text-2xl'>
              un emprendimiento de gorras con 2 años de antiguedad
            </p>
            <p className='text-2xl'>
              un emprendimiento de gorras con 2 años de antiguedad
            </p>
            <p className='text-2xl'>
              un emprendimiento de gorras con 2 años de antiguedad
            </p>
          </div>
        </div>
        <div className='pr-32 w-full h-full flex items-center justify-center'>
          <Card3d />
        </div>
      </div>
    </section>
  )
}

export default Nosotros