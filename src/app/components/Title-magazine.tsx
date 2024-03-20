import Image from 'next/image'
import React from 'react'
import title1 from "@/assets/title-letters/1.webp"
import title2 from "@/assets/title-letters/2.webp"
import title3 from "@/assets/title-letters/3.webp"
import title4 from "@/assets/title-letters/4.webp"
import title5 from "@/assets/title-letters/5.webp"
import title6 from "@/assets/title-letters/6.webp"
import title7 from "@/assets/title-letters/7.webp"
import title8 from "@/assets/title-letters/8.webp"
import title9 from "@/assets/title-letters/9.webp"

const TitleMagazine = () => {
  return (
    <div className='flex'>
        <Image src={title1} alt="title" className='object-contain w-[37px] sm:w-[75px] xl:w-[120px]' unoptimized={true} width={0} height={0} />
        <Image src={title2} alt="title" className='object-contain w-[37px] sm:w-[75px] xl:w-[120px]' unoptimized={true} width={0} height={0} />
        <Image src={title3} alt="title" className='object-contain w-[37px] sm:w-[75px] xl:w-[120px]' unoptimized={true} width={0} height={0} />
        <Image src={title4} alt="title" className='object-contain w-[37px] sm:w-[75px] xl:w-[120px]' unoptimized={true} width={0} height={0} />
        <Image src={title5} alt="title" className='object-contain w-[30px] sm:w-[65px] xl:w-[90px]' unoptimized={true} width={0} height={0} />
        <Image src={title6} alt="title" className='object-contain w-[25px] sm:w-[50px] xl:w-[75px]' unoptimized={true} width={0} height={0} />
        <Image src={title7} alt="title" className='object-contain w-[37px] sm:w-[75px] xl:w-[120px]' unoptimized={true} width={0} height={0} />
        <Image src={title8} alt="title" className='object-contain w-[37px] sm:w-[75px] xl:w-[120px]' unoptimized={true} width={0} height={0} />
        <Image src={title9} alt="title" className='object-contain w-[37px] sm:w-[75px] xl:w-[120px]' unoptimized={true} width={0} height={0} />
    </div>
  )
}

export default TitleMagazine