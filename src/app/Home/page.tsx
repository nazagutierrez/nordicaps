import Image from 'next/image'
import React from 'react'
import TitleMagazine from './components/title-magazine'
import BgImages from './components/bg-images'

const HomePage = () => {
  return (
    <main className="home-section h-screen flex justify-center bg-neutral-800 items-center">
       <div className='z-10 flex flex-col items-center gap-5'>
       <div className='z-10'>
        <TitleMagazine />
       </div>
       <p className='text-white/90 text-xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
       </p>
        {/* <section className="text-green-800 flex flex-col items-center justify-center text-9xl ">
          <h2>Nordicaps</h2>
        </section> */}
        {/* <section className="">
          <Image src="/img/icon-gorra-verde.png" alt="logo" width={100} height={100}></Image>
          <Image src="/img/nordicaps-nobg.png" className="-rotate-12" alt="logo" width={600} height={600}></Image>
        </section> */}
       </div>
    </main>
  )
}

export default HomePage