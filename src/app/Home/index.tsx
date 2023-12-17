import Image from 'next/image'
import React from 'react'
import TitleMagazine from './components/title-magazine'

const HomePage = () => {
  return (
    <main className="home-section h-screen flex justify-center bg-neutral-800 items-center">
       <div className='z-10 flex flex-col items-center gap-5'>
          <div className='z-10'>
            <TitleMagazine />
          </div>
          <p className='text-white/90 text-2xl italic'>
            Las gorras con mas estilo de Junin, Buenos Aires.
          </p>
       </div>
    </main>
  )
}

export default HomePage