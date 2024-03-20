import Image from 'next/image'
import React from 'react'
import TitleMagazine from '../../components/Title-magazine'
import { FaArrowDown } from "react-icons/fa6";
import { principalFont } from '@/fonts';

const HomePage = () => {
  return (
    <main id='inicio' className="home-section h-screen flex justify-center bg-neutral-800 items-center">
       <div className='z-10 flex flex-col items-center gap-5'>
          <div className='z-10'>
            <TitleMagazine />
          </div>
          <p className={`${principalFont.className} text-neutral-200 subtitle text-2xl italic`}>
            Las gorras con mas estilo de Junin, Buenos Aires.
          </p>
          <i className='text-neutral-200 text-4xl absolute bottom-10'>
            <FaArrowDown />
          </i>
       </div>
    </main>
  )
}

export default HomePage